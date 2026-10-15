import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const SITEMAP_EXCLUDED_PATHS = ["/suche/", "/newsletter/willkommen/", "/404/"];

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
