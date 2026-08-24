import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://autismuskompakt.de",
  outDir: "./dist",
  compressHTML: true,
  integrations: [sitemap()],
});
