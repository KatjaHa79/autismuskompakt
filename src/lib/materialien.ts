import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export async function getAlleMaterialien() {
  const entries = await getCollection("materialien");
  return entries.sort((a, b) => a.data.title.localeCompare(b.data.title, "de"));
}

export async function getZielgruppenMitMaterialien() {
  const entries = await getAlleMaterialien();
  const werte = new Set<CollectionEntry<"materialien">["data"]["targetGroups"][number]>();
  for (const entry of entries) {
    for (const gruppe of entry.data.targetGroups) werte.add(gruppe);
  }
  return werte;
}

export async function getMaterialtypenMitMaterialien() {
  const entries = await getAlleMaterialien();
  const werte = new Set<CollectionEntry<"materialien">["data"]["materialType"]>();
  for (const entry of entries) werte.add(entry.data.materialType);
  return werte;
}
