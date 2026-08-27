import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import {
  categoryLabels,
  categoryHrefs,
  targetGroupLabels,
  anlaufstelleCategoryLabels,
  ageGroupLabels,
  bundeslandLabels,
  materialTypeLabels,
  productTypeLabels,
} from "../content.config";

// Statischer Suchindex, einmal beim Build erzeugt. Keine externe Anfrage,
// kein Tracking, keine personenbezogenen Daten – nur die Felder, die für
// eine sinnvolle Volltextsuche nötig sind (siehe Punkt 3 des Auftrags).
interface SearchEntry {
  id: string;
  type: "artikel" | "anlaufstelle" | "material" | "produkt";
  title: string;
  description: string;
  url: string;
  category?: string;
  targetGroups?: string[];
  // Nur bei Anlaufstellen:
  city?: string;
  state?: string;
  categories?: string[];
  ageGroups?: string[];
  online?: boolean;
  offer?: string;
  // Nur bei Materialien:
  materialType?: string;
}

export const GET: APIRoute = async () => {
  const entries: SearchEntry[] = [];

  const artikel = await getCollection("artikel");
  for (const entry of artikel) {
    const slug = entry.id.split("/").pop() ?? entry.id;
    entries.push({
      id: `artikel/${entry.id}`,
      type: "artikel",
      title: entry.data.title,
      description: entry.data.description,
      url: `${categoryHrefs[entry.data.category]}${slug}/`,
      category: categoryLabels[entry.data.category],
      targetGroups: entry.data.targetGroups.map((gruppe) => targetGroupLabels[gruppe]),
    });
  }

  const anlaufstellen = await getCollection("anlaufstellen");
  for (const entry of anlaufstellen) {
    const offer = entry.data.offer?.trim();
    entries.push({
      id: `anlaufstelle/${entry.id}`,
      type: "anlaufstelle",
      title: entry.data.name,
      description: offer ?? "Anlaufstelle",
      url: `/hilfe-finden/#${entry.id}`,
      targetGroups: entry.data.targetGroups.map((gruppe) => targetGroupLabels[gruppe]),
      city: entry.data.city,
      state: entry.data.state ? bundeslandLabels[entry.data.state] : undefined,
      categories: entry.data.categories.map((kategorie) => anlaufstelleCategoryLabels[kategorie]),
      ageGroups: entry.data.ageGroups.map((gruppe) => ageGroupLabels[gruppe]),
      online: entry.data.online,
      offer,
    });
  }

  const materialien = await getCollection("materialien");
  for (const entry of materialien) {
    entries.push({
      id: `material/${entry.id}`,
      type: "material",
      title: entry.data.title,
      description: entry.data.description,
      url: `/materialien/#${entry.id}`,
      materialType: materialTypeLabels[entry.data.materialType],
      targetGroups: entry.data.targetGroups.map((gruppe) => targetGroupLabels[gruppe]),
    });
  }

  const produkte = await getCollection("produkte");
  for (const entry of produkte) {
    entries.push({
      id: `produkt/${entry.id}`,
      type: "produkt",
      title: entry.data.title,
      description: entry.data.description,
      url: `/shop/#${entry.id}`,
      category: productTypeLabels[entry.data.productType],
      targetGroups: entry.data.targetGroups.map((gruppe) => targetGroupLabels[gruppe]),
    });
  }

  // Der Autismuskompakt-Orientierungscheck ist keine Content-Collection-Seite
  // und wird deshalb von Hand ergänzt (siehe Master-Projektauftrag,
  // Abschnitt 40). Wichtig: nirgends als "Autismustest" bezeichnen.
  entries.push({
    id: "artikel/diagnostik-tests/orientierungscheck",
    type: "artikel",
    title: "Autismuskompakt-Orientierungscheck",
    description:
      "Ein wertschätzender Orientierungscheck für Erwachsene: eigene Erfahrungen mit sozialer Kommunikation, Reizen, Routinen, Masking und Überlastung besser einordnen. Kein diagnostischer Test.",
    url: "/fuer-autistische-menschen/diagnostik/orientierungscheck/",
    category: categoryLabels["diagnostik-tests"],
    targetGroups: [targetGroupLabels["autistische-menschen"]],
  });

  return new Response(JSON.stringify(entries), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
