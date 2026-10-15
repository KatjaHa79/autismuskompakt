// Zentrale, einmalige Quelle für Facetten-Seiten unter /hilfe-finden/ und
// /materialien/, die bewusst von der Google-Indexierung ausgeschlossen
// werden (SEO-Audit Phase 3, freigegeben 2026-10-15: fast vollständige
// Textüberschneidung mit der jeweiligen Hauptseite, kein eigenständiger
// Mehrwert). Bewusst als feste Pfadliste, nicht anhand schwankender
// Trefferzahlen berechnet. Wird sowohl von den Filter-Layouts (robots-Tag)
// als auch von der Sitemap-Konfiguration in astro.config.mjs gelesen, damit
// beide niemals widersprüchliche Ergebnisse liefern können.
export const NOINDEX_FACET_PATHS = new Set([
  "/hilfe-finden/zielgruppe/autistische-menschen/",
  "/hilfe-finden/vor-ort/",
  "/hilfe-finden/online/",
  "/materialien/zielgruppe/autistische-menschen/",
]);

export function getFacetRobots(pathname: string): string | undefined {
  return NOINDEX_FACET_PATHS.has(pathname) ? "noindex, follow" : undefined;
}
