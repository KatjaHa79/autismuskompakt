import { test, expect, type Page } from "@playwright/test";

// Regressionstest für den gemeldeten horizontalen Versatz zwischen der
// Einleitung (Hero) und dem Hauptinhalt auf /audhs/ und /neurodivergenz/:
// Beide Bereiche nutzten früher unterschiedlich breite .container-Elemente
// (eines davon zusätzlich zentriert statt linksbündig in einem breiten
// Container), wodurch H1/Einleitung deutlich weiter links standen als die
// erste H2-Überschrift und der erste Absatz des Hauptinhalts. Behoben durch
// die gemeinsame Containerklasse .container--content (siehe global.css).

const TOLERANCE_PX = 2;

const pages = ["/audhs/", "/neurodivergenz/"];

const viewports = [
  { name: "Desktop", width: 1440, height: 1200 },
  { name: "Tablet", width: 768, height: 1200 },
  { name: "Smartphone", width: 390, height: 1200 },
];

async function leftEdges(page: Page) {
  const h1 = await page.locator("h1").boundingBox();
  const intro = await page.locator(".hero p").first().boundingBox();
  const firstH2 = await page.locator(".prose-sections h2").first().boundingBox();
  const firstP = await page.locator(".prose-sections p").first().boundingBox();
  if (!h1 || !intro || !firstH2 || !firstP) {
    throw new Error("Erwartetes Element nicht gefunden oder nicht sichtbar");
  }
  return { h1: h1.x, intro: intro.x, h2: firstH2.x, p: firstP.x, h1Box: h1 };
}

for (const path of pages) {
  for (const vp of viewports) {
    test(`${path} @ ${vp.name} (${vp.width}px): einheitliche linke Textkante`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(path, { waitUntil: "networkidle" });

      const edges = await leftEdges(page);
      const values = [edges.h1, edges.intro, edges.h2, edges.p];
      const spread = Math.max(...values) - Math.min(...values);

      expect(
        spread,
        `Linke Kanten weichen um ${spread.toFixed(2)}px voneinander ab (H1=${edges.h1}, Einleitung=${edges.intro}, H2=${edges.h2}, Absatz=${edges.p})`
      ).toBeLessThanOrEqual(TOLERANCE_PX);

      // Kein horizontales Scrollen
      const hasHorizontalScroll = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
      );
      expect(hasHorizontalScroll).toBe(false);

      // H1 nicht abgeschnitten (hat eine Breite > 0 und liegt im Viewport)
      expect(edges.h1Box.width).toBeGreaterThan(0);
      expect(edges.h1Box.x + edges.h1Box.width).toBeLessThanOrEqual(vp.width + TOLERANCE_PX);
    });
  }
}

// Bewusst breiterer Abschnitt (Themenkarten-Raster auf /audhs/) wird vom
// Alignment-Test oben ausdrücklich NICHT erfasst (anderer Selektor-Bereich)
// und separat nur auf Funktionsfähigkeit geprüft, nicht auf Spaltenbreite.
test("/audhs/ Themenwelt-Kartenraster bleibt bewusst breiter als die Textspalte", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1200 });
  await page.goto("/audhs/", { waitUntil: "networkidle" });

  const textColumn = await page.locator(".prose-sections .container").first().boundingBox();
  const cardGrid = await page.locator(".themen-kacheln").boundingBox();
  if (!textColumn || !cardGrid) throw new Error("Erwartete Elemente nicht gefunden");

  expect(cardGrid.width).toBeGreaterThan(textColumn.width);
});
