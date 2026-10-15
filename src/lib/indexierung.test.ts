import { test } from "node:test";
import assert from "node:assert/strict";
import { NOINDEX_FACET_PATHS, getFacetRobots } from "./indexierung.ts";

// Freigegebene Liste aus dem SEO-Audit Phase 3 (2026-10-15). Dieser Test
// fixiert bewusst die konkreten vier Pfade, damit eine künftige Änderung
// der Liste absichtlich und nicht versehentlich erfolgt.
const FREIGEGEBENE_NOINDEX_PFADE = [
  "/hilfe-finden/zielgruppe/autistische-menschen/",
  "/hilfe-finden/vor-ort/",
  "/hilfe-finden/online/",
  "/materialien/zielgruppe/autistische-menschen/",
];

test("NOINDEX_FACET_PATHS enthält exakt die vier freigegebenen Pfade", () => {
  assert.equal(NOINDEX_FACET_PATHS.size, 4);
  for (const pfad of FREIGEGEBENE_NOINDEX_PFADE) {
    assert.ok(NOINDEX_FACET_PATHS.has(pfad), `${pfad} fehlt in NOINDEX_FACET_PATHS`);
  }
});

test("getFacetRobots: liefert 'noindex, follow' für jeden freigegebenen Pfad", () => {
  for (const pfad of FREIGEGEBENE_NOINDEX_PFADE) {
    assert.equal(getFacetRobots(pfad), "noindex, follow");
  }
});

test("getFacetRobots: liefert undefined für weiterhin indexierbare Filterseiten", () => {
  const indexierbarePfade = [
    "/hilfe-finden/",
    "/hilfe-finden/bundesland/bayern/",
    "/hilfe-finden/kategorie/beratung/",
    "/hilfe-finden/kategorie/diagnostik/",
    "/hilfe-finden/kategorie/therapie/",
    "/hilfe-finden/zielgruppe/angehoerige/",
    "/hilfe-finden/zielgruppe/fachkraefte/",
    "/hilfe-finden/altersgruppe/erwachsene/",
    "/hilfe-finden/altersgruppe/jugendliche/",
    "/hilfe-finden/altersgruppe/kinder/",
    "/materialien/",
    "/materialien/typ/checklisten/",
    "/materialien/zielgruppe/angehoerige/",
    "/materialien/zielgruppe/fachkraefte/",
  ];
  for (const pfad of indexierbarePfade) {
    assert.equal(getFacetRobots(pfad), undefined, `${pfad} sollte nicht noindex sein`);
  }
});

test("getFacetRobots: Pfad ohne abschließenden Slash trifft nicht versehentlich", () => {
  // Exakter Pfadabgleich, keine Teilstring-Logik - verhindert, dass z. B.
  // "/hilfe-finden/vor-ort" (ohne Slash) oder ein Unterpfad fälschlich matcht.
  assert.equal(getFacetRobots("/hilfe-finden/vor-ort"), undefined);
  assert.equal(getFacetRobots("/hilfe-finden/vor-ort/irgendwas/"), undefined);
});
