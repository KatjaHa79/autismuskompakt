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

export const collections = { artikel: articles };
