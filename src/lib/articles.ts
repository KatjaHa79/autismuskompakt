import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export async function getArticleStaticPaths(category: CollectionEntry<"artikel">["data"]["category"]) {
  const entries = await getCollection("artikel", ({ data }) => data.category === category);
  return entries.map((entry) => ({
    params: { slug: entry.id.split("/").pop() },
    props: { entry },
  }));
}
