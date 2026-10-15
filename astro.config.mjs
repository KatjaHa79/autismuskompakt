import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { NOINDEX_FACET_PATHS } from "./src/lib/indexierung.ts";

// Statische noindex-Einzelseiten (unabhängig von der Facetten-Logik in
// src/lib/indexierung.ts, die die Filterseiten unter /hilfe-finden/ und
// /materialien/ regelt).
const SITEMAP_EXCLUDED_PATHS = ["/suche/", "/newsletter/willkommen/", "/404/", ...NOINDEX_FACET_PATHS];

export default defineConfig({
  site: "https://www.autismuskompakt.de",
  outDir: "./dist",
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !SITEMAP_EXCLUDED_PATHS.some((path) => page.endsWith(path)),
    }),
  ],
});
