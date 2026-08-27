import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

// Kategorien orientieren sich an den Themenbereichen aus Etappe 1.
const categoryValues = [
  "autismus-verstehen",
  "diagnostik-tests",
  "rechte-antraege",
  "alltag-leben",
  "besonderheiten-begleiterkrankungen",
  "angehoerige-fachkraefte",
] as const;

// Die drei Zielgruppen aus dem Master-Projektauftrag (Punkt 2).
const targetGroupValues = ["autistische-menschen", "angehoerige", "fachkraefte"] as const;

export const targetGroupLabels: Record<(typeof targetGroupValues)[number], string> = {
  "autistische-menschen": "Autistische Menschen",
  angehoerige: "Angehörige",
  fachkraefte: "Fachkräfte",
};

// Für diese Kategorien ist ein Stand-Datum verpflichtend, weil es sich um
// sozialrechtliche oder medizinische Inhalte handelt (Punkt 23 und 25 des
// Master-Projektauftrags).
export const categoriesRequiringUpdated: ReadonlySet<(typeof categoryValues)[number]> = new Set([
  "rechte-antraege",
  "diagnostik-tests",
  "besonderheiten-begleiterkrankungen",
]);

// Lesbare Bezeichnung je Kategorie, u. a. für Breadcrumbs.
export const categoryLabels: Record<(typeof categoryValues)[number], string> = {
  "autismus-verstehen": "Für Autist:innen",
  "diagnostik-tests": "Diagnostik & Tests",
  "rechte-antraege": "Rechte & Anträge",
  "alltag-leben": "Alltag & Leben",
  "besonderheiten-begleiterkrankungen": "Besonderheiten & Begleiterkrankungen",
  "angehoerige-fachkraefte": "Für Angehörige & Fachkräfte",
};

// Zugehörige Wegweiser-/Hub-Seite je Kategorie aus Etappe 1.
export const categoryHrefs: Record<(typeof categoryValues)[number], string> = {
  "autismus-verstehen": "/fuer-autistische-menschen/",
  "diagnostik-tests": "/fuer-autistische-menschen/diagnostik/",
  "rechte-antraege": "/fuer-autistische-menschen/rechte-und-antraege/",
  "alltag-leben": "/fuer-autistische-menschen/alltag/",
  "besonderheiten-begleiterkrankungen": "/fuer-autistische-menschen/besonderheiten/",
  "angehoerige-fachkraefte": "/angehoerige-fachkraefte/",
};

const sourceSchema = z.object({
  title: z.string().min(1, "Jede Quelle braucht eine Bezeichnung (title)."),
  url: z.url("Die Quellen-URL muss eine gültige, vollständige Adresse sein.").optional(),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/artikel" }),
  schema: z
    .object({
      title: z.string().min(1, "title darf nicht leer sein."),
      description: z.string().min(1, "description darf nicht leer sein."),
      category: z.enum(categoryValues, {
        message: `category muss einer der folgenden Werte sein: ${categoryValues.join(", ")}`,
      }),
      targetGroups: z
        .array(z.enum(targetGroupValues))
        .min(1, "targetGroups braucht mindestens eine Zielgruppe."),
      updated: z.coerce.date().optional(),
      sources: z.array(sourceSchema).default([]),
    })
    .superRefine((data, ctx) => {
      if (categoriesRequiringUpdated.has(data.category) && !data.updated) {
        ctx.addIssue({
          code: "custom",
          path: ["updated"],
          message: `Für die Kategorie "${data.category}" ist ein Stand-Datum ("updated") verpflichtend, da es sich um sozialrechtliche oder medizinische Inhalte handelt. Der Build schlägt ohne dieses Feld fehl.`,
        });
      }
    }),
});

// ============================================================================
// Anlaufstellen (Etappe 3)
// ============================================================================

const anlaufstelleCategoryValues = [
  "diagnostik",
  "beratung",
  "therapie",
  "sozialrecht",
  "alltagshilfe",
  "selbsthilfe",
  "angehoerigenberatung",
  "fachberatung",
] as const;

export const anlaufstelleCategoryLabels: Record<(typeof anlaufstelleCategoryValues)[number], string> = {
  diagnostik: "Diagnostik",
  beratung: "Beratung",
  therapie: "Therapie",
  sozialrecht: "Sozialrecht",
  alltagshilfe: "Alltagshilfe",
  selbsthilfe: "Selbsthilfe",
  angehoerigenberatung: "Angehörigenberatung",
  fachberatung: "Fachberatung",
};

const ageGroupValues = ["kinder", "jugendliche", "erwachsene"] as const;

export const ageGroupLabels: Record<(typeof ageGroupValues)[number], string> = {
  kinder: "Kinder",
  jugendliche: "Jugendliche",
  erwachsene: "Erwachsene",
};

const bundeslandValues = [
  "baden-wuerttemberg",
  "bayern",
  "berlin",
  "brandenburg",
  "bremen",
  "hamburg",
  "hessen",
  "mecklenburg-vorpommern",
  "niedersachsen",
  "nordrhein-westfalen",
  "rheinland-pfalz",
  "saarland",
  "sachsen",
  "sachsen-anhalt",
  "schleswig-holstein",
  "thueringen",
] as const;

export const bundeslandLabels: Record<(typeof bundeslandValues)[number], string> = {
  "baden-wuerttemberg": "Baden-Württemberg",
  bayern: "Bayern",
  berlin: "Berlin",
  brandenburg: "Brandenburg",
  bremen: "Bremen",
  hamburg: "Hamburg",
  hessen: "Hessen",
  "mecklenburg-vorpommern": "Mecklenburg-Vorpommern",
  niedersachsen: "Niedersachsen",
  "nordrhein-westfalen": "Nordrhein-Westfalen",
  "rheinland-pfalz": "Rheinland-Pfalz",
  saarland: "Saarland",
  sachsen: "Sachsen",
  "sachsen-anhalt": "Sachsen-Anhalt",
  "schleswig-holstein": "Schleswig-Holstein",
  thueringen: "Thüringen",
};

const paymentTypeValues = ["gesetzlich", "privat", "selbstzahler"] as const;

export const paymentTypeLabels: Record<(typeof paymentTypeValues)[number], string> = {
  gesetzlich: "Gesetzliche Kassen",
  privat: "Private Kassen",
  selbstzahler: "Selbstzahler",
};

const waitingListValues = ["offen", "geschlossen", "unbekannt"] as const;

export const waitingListLabels: Record<(typeof waitingListValues)[number], string> = {
  offen: "Warteliste offen",
  geschlossen: "Warteliste geschlossen",
  unbekannt: "Warteliste unbekannt",
};

const anlaufstellen = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/anlaufstellen" }),
  schema: z
    .object({
      name: z.string().min(1, "name darf nicht leer sein."),
      type: z.string().optional(),
      targetGroups: z
        .array(z.enum(targetGroupValues))
        .min(1, "targetGroups braucht mindestens eine Zielgruppe."),
      ageGroups: z.array(z.enum(ageGroupValues)).default([]),
      categories: z
        .array(z.enum(anlaufstelleCategoryValues))
        .min(1, "categories braucht mindestens eine Kategorie."),
      street: z.string().optional(),
      postalCode: z.string().optional(),
      city: z.string().optional(),
      state: z.enum(bundeslandValues).optional(),
      phone: z.string().optional(),
      email: z.email("email muss eine gültige E-Mail-Adresse sein.").optional(),
      website: z.url("website muss eine gültige, vollständige Adresse sein.").optional(),
      offer: z.string().optional(),
      admissionRequirements: z.string().optional(),
      paymentType: z.array(z.enum(paymentTypeValues)).default([]),
      costs: z.string().optional(),
      waitingList: z.enum(waitingListValues).optional(),
      waitingTime: z.string().optional(),
      online: z.boolean().default(false),
      onsite: z.boolean().default(false),
      updated: z.coerce.date({
        error: "updated (Stand-Datum) ist für jede Anlaufstelle verpflichtend.",
      }),
      // Array statt Einzelfeld, da mehrere Einrichtungen zwei oder mehr
      // gleichwertige Primärquellen haben (z. B. Angebotsseite + Terminseite).
      sources: z.array(sourceSchema).min(1, "Mindestens eine Quelle ist verpflichtend."),
      // Kennzeichnet eindeutig als Demonstrationsdaten angelegte Einträge
      // (siehe Punkt 7 des Master-Projektauftrags zu Etappe 3).
      demo: z.boolean().default(false),
    })
    .superRefine((data, ctx) => {
      if (!data.state && !data.online) {
        ctx.addIssue({
          code: "custom",
          path: ["state"],
          message:
            'Entweder "state" (Bundesland) oder "online: true" ist verpflichtend, damit die Anlaufstelle auffindbar ist.',
        });
      }
    }),
});

// ============================================================================
// Materialien (Etappe 4) – kostenlose Downloads
// ============================================================================

const materialTypeValues = [
  "checklisten",
  "vorlagen",
  "arbeitsblaetter",
  "gespraechshilfen",
  "reizprofile",
  "kommunikationshilfen",
  "arzttermin-vorbereitung",
  "tages-wochenplanung",
  "belastungsprotokolle",
  "antragschecklisten",
  "materialien-schule",
  "materialien-studium",
  "materialien-arbeit",
] as const;

export const materialTypeLabels: Record<(typeof materialTypeValues)[number], string> = {
  checklisten: "Checklisten",
  vorlagen: "Vorlagen",
  arbeitsblaetter: "Arbeitsblätter",
  gespraechshilfen: "Gesprächshilfen",
  reizprofile: "Reizprofile",
  kommunikationshilfen: "Kommunikationshilfen",
  "arzttermin-vorbereitung": "Arzttermin-Vorbereitung",
  "tages-wochenplanung": "Tages- und Wochenplanung",
  belastungsprotokolle: "Belastungsprotokolle",
  antragschecklisten: "Antragschecklisten",
  "materialien-schule": "Materialien für Schule",
  "materialien-studium": "Materialien für Studium",
  "materialien-arbeit": "Materialien für Arbeit",
};

const materialien = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/materialien" }),
  schema: z
    .object({
      title: z.string().min(1, "title darf nicht leer sein."),
      description: z.string().min(1, "description darf nicht leer sein."),
      targetGroups: z
        .array(z.enum(targetGroupValues))
        .min(1, "targetGroups braucht mindestens eine Zielgruppe."),
      materialType: z.enum(materialTypeValues, {
        message: `materialType muss einer der folgenden Werte sein: ${materialTypeValues.join(", ")}`,
      }),
      file: z.string().optional(),
      fileFormat: z.string().optional(),
      pages: z.number().int().positive().optional(),
      language: z.string().default("de"),
      updated: z.coerce.date({
        error: "updated (Stand-Datum) ist für jedes Material verpflichtend.",
      }),
      accessibilityNote: z.string().optional(),
      featured: z.boolean().default(false),
      external: z.boolean().default(false),
      externalUrl: z.url("externalUrl muss eine gültige, vollständige Adresse sein.").optional(),
      demo: z.boolean().default(false),
    })
    .superRefine((data, ctx) => {
      if (data.external) {
        if (!data.externalUrl) {
          ctx.addIssue({
            code: "custom",
            path: ["externalUrl"],
            message: 'Bei extern verlinkten Materialien (external: true) ist "externalUrl" verpflichtend.',
          });
        }
      } else if (!data.file) {
        ctx.addIssue({
          code: "custom",
          path: ["file"],
          message:
            'Bei intern gehosteten Materialien ist "file" (Dateipfad) verpflichtend. Alternativ "external: true" mit "externalUrl" setzen.',
        });
      }
    }),
});

// ============================================================================
// Shop-Produkte (Etappe 4) – reine Präsentation, kein Kaufvorgang
// ============================================================================

const productTypeValues = ["buch", "digitales-produkt", "merchandise"] as const;

export const productTypeLabels: Record<(typeof productTypeValues)[number], string> = {
  buch: "Buch",
  "digitales-produkt": "Digitales Produkt",
  merchandise: "Merchandise",
};

export const productButtonLabels: Record<(typeof productTypeValues)[number], string> = {
  buch: "Zum Buch",
  "digitales-produkt": "Produkt ansehen",
  merchandise: "Zum Shop",
};

const produkte = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/produkte" }),
  schema: z.object({
    title: z.string().min(1, "title darf nicht leer sein."),
    subtitle: z.string().optional(),
    description: z.string().min(1, "description darf nicht leer sein."),
    cover: z.string().optional(),
    productType: z.enum(productTypeValues, {
      message: `productType muss einer der folgenden Werte sein: ${productTypeValues.join(", ")}`,
    }),
    targetGroups: z
      .array(z.enum(targetGroupValues))
      .min(1, "targetGroups braucht mindestens eine Zielgruppe."),
    externalUrl: z
      .string()
      .min(1, 'externalUrl ist verpflichtend – auf autismuskompakt.de findet kein eigener Kaufvorgang statt.'),
    provider: z.string().optional(),
    buttonLabel: z.string().optional(),
    featured: z.boolean().default(false),
    demo: z.boolean().default(false),
  }),
});

export const collections = { artikel: articles, anlaufstellen, materialien, produkte };
