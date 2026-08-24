import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export async function getAlleAnlaufstellen() {
  const entries = await getCollection("anlaufstellen");
  return entries.sort((a, b) => a.data.name.localeCompare(b.data.name, "de"));
}

export async function getBundeslaenderMitEintraegen() {
  const entries = await getAlleAnlaufstellen();
  const werte = new Set<NonNullable<CollectionEntry<"anlaufstellen">["data"]["state"]>>();
  for (const entry of entries) {
    if (entry.data.state) werte.add(entry.data.state);
  }
  return werte;
}

export async function getKategorienMitEintraegen() {
  const entries = await getAlleAnlaufstellen();
  const werte = new Set<CollectionEntry<"anlaufstellen">["data"]["categories"][number]>();
  for (const entry of entries) {
    for (const kategorie of entry.data.categories) werte.add(kategorie);
  }
  return werte;
}

export async function getZielgruppenMitEintraegen() {
  const entries = await getAlleAnlaufstellen();
  const werte = new Set<CollectionEntry<"anlaufstellen">["data"]["targetGroups"][number]>();
  for (const entry of entries) {
    for (const gruppe of entry.data.targetGroups) werte.add(gruppe);
  }
  return werte;
}

export async function getAltersgruppenMitEintraegen() {
  const entries = await getAlleAnlaufstellen();
  const werte = new Set<CollectionEntry<"anlaufstellen">["data"]["ageGroups"][number]>();
  for (const entry of entries) {
    for (const gruppe of entry.data.ageGroups) werte.add(gruppe);
  }
  return werte;
}
