# SEO Phase 5 – Regionale Anlaufstellen-Seiten (finale Texte + WordPress-Migration)

Stand: 15.10.2026. Enthält die final freigegebenen SEO-Texte für alle 16
Bundesland-Anlaufstellenseiten (`/hilfe-finden/bundesland/*`). Umgesetzt im
Code (`src/lib/bundesland-seo.ts`), aber **noch nicht committet/gepusht** –
produktiv erst nach ausdrücklicher Freigabe.

## 1. Datenbasis

Alle Trefferzahlen und Kategorien wurden gegen die 153 Anlaufstellen-
Datensätze in `src/content/anlaufstellen/*.yaml` verifiziert (keine Angabe
erfunden). Kategorien werden in allen Texten als **thematische Einordnung**
der Einrichtung formuliert ("mit Schwerpunkten in …", "kategorisiert als
…"), nicht als Zusage konkret verfügbarer Leistungen, Termine oder
Diagnostikplätze. Wartelisten-/Aufnahmestatus-Daten wurden geprüft, aber
bewusst **nicht** in die Texte übernommen, da sie in fast allen
Bundesländern überwiegend "unbekannt" und damit nicht repräsentativ genug
für eine seriöse Aussage sind.

## 2. Zentraler Datenhinweis (einmal pro Seite, nicht mehr pro Text wiederholt)

```
Die Einträge geben einen Überblick über mögliche Anlaufstellen. Kategorien
beschreiben die thematische Zuordnung, nicht automatisch aktuell
verfügbare Leistungen oder freie Termine. Bitte erkundige dich direkt bei
der jeweiligen Einrichtung. Stand: 27.08.2026.
```

Definiert einmalig als `ANLAUFSTELLEN_DATENHINWEIS` in
`src/lib/bundesland-seo.ts`, ausgegeben von `AnlaufstellenFilterLayout.astro`
direkt unterhalb des jeweiligen Einleitungstexts. Das Stand-Datum
entspricht dem zuletzt tatsächlich recherchierten Stand (siehe auch der
bestehende Hinweis auf `/hilfe-finden/`) und wurde nicht grundlos
geändert, da in dieser Phase keine neue Datenrecherche stattfand.

## 3. Vollständige Tabelle: alle 16 Bundesländer

| URL | SEO-Title | Meta-Description | Canonical | Indexierung |
|---|---|---|---|---|
| `/hilfe-finden/bundesland/baden-wuerttemberg/` | Autismus-Anlaufstellen in Baden-Württemberg \| AUTISMUS kompakt | 11 Anlaufstellen für Autismus in Baden-Württemberg, mit Schwerpunkten in Diagnostik, Beratung und Therapie – für autistische Menschen, Angehörige und Fachkräfte. | selbst (unverändert) | index, follow (unverändert) |
| `/hilfe-finden/bundesland/bayern/` | Autismus-Anlaufstellen in Bayern \| AUTISMUS kompakt | 12 Anlaufstellen für Autismus in Bayern, überwiegend im Bereich Beratung, dazu Diagnostik und Therapie – für autistische Menschen, Angehörige und Fachkräfte. | selbst | index, follow |
| `/hilfe-finden/bundesland/berlin/` | Autismus-Anlaufstellen in Berlin \| AUTISMUS kompakt | 12 Anlaufstellen für Autismus in Berlin mit klarem Schwerpunkt Diagnostik, dazu Therapie und Beratung – für autistische Menschen, Angehörige und Fachkräfte. | selbst | index, follow |
| `/hilfe-finden/bundesland/brandenburg/` | Autismus-Anlaufstellen in Brandenburg \| AUTISMUS kompakt | 11 Anlaufstellen für Autismus in Brandenburg mit breitem Spektrum von Beratung über Therapie bis Fachberatung – für autistische Menschen, Angehörige und Fachkräfte. | selbst | index, follow |
| `/hilfe-finden/bundesland/bremen/` | Autismus-Anlaufstellen in Bremen \| AUTISMUS kompakt | 7 Anlaufstellen für Autismus in Bremen, vor allem in den Bereichen Beratung und Therapie – für autistische Menschen, Angehörige und Fachkräfte. | selbst | index, follow |
| `/hilfe-finden/bundesland/hamburg/` | Autismus-Anlaufstellen in Hamburg \| AUTISMUS kompakt | 11 Anlaufstellen für Autismus in Hamburg mit breitem Angebot von Diagnostik über Beratung bis Selbsthilfe – für autistische Menschen, Angehörige und Fachkräfte. | selbst | index, follow |
| `/hilfe-finden/bundesland/hessen/` | Autismus-Anlaufstellen in Hessen \| AUTISMUS kompakt | 9 Anlaufstellen für Autismus in Hessen, schwerpunktmäßig Therapie und Beratung, dazu Diagnostik – für autistische Menschen, Angehörige und Fachkräfte. | selbst | index, follow |
| `/hilfe-finden/bundesland/mecklenburg-vorpommern/` | Autismus-Anlaufstellen in Mecklenburg-Vorpommern \| AUTISMUS kompakt | 10 Anlaufstellen für Autismus in Mecklenburg-Vorpommern, vor allem Therapie und Beratung, dazu Diagnostik – für autistische Menschen, Angehörige und Fachkräfte. | selbst | index, follow |
| `/hilfe-finden/bundesland/niedersachsen/` | Autismus-Anlaufstellen in Niedersachsen \| AUTISMUS kompakt | 12 Anlaufstellen für Autismus in Niedersachsen, mit Schwerpunkten in Therapie, Beratung und Diagnostik – für autistische Menschen, Angehörige und Fachkräfte. | selbst | index, follow |
| `/hilfe-finden/bundesland/nordrhein-westfalen/` | Autismus-Anlaufstellen in Nordrhein-Westfalen \| AUTISMUS kompakt | 13 Autismus-Anlaufstellen in Nordrhein-Westfalen finden. Übersicht mit Schwerpunkten in Therapie, Beratung und Diagnostik. | selbst | index, follow |
| `/hilfe-finden/bundesland/rheinland-pfalz/` | Autismus-Anlaufstellen in Rheinland-Pfalz \| AUTISMUS kompakt | 8 Anlaufstellen für Autismus in Rheinland-Pfalz, vor allem in Therapie und Beratung, dazu Diagnostik – für autistische Menschen, Angehörige und Fachkräfte. | selbst | index, follow |
| `/hilfe-finden/bundesland/saarland/` | Autismus-Anlaufstellen im Saarland \| AUTISMUS kompakt | 9 Anlaufstellen für Autismus im Saarland, mit Schwerpunkt Therapie, dazu Beratung und Diagnostik – für autistische Menschen, Angehörige und Fachkräfte. | selbst | index, follow |
| `/hilfe-finden/bundesland/sachsen/` | Autismus-Anlaufstellen in Sachsen \| AUTISMUS kompakt | 5 Autismus-Anlaufstellen in Sachsen finden. Übersicht zu Diagnostik, Beratung, Therapie, Alltagshilfe und Fachberatung. | selbst | index, follow |
| `/hilfe-finden/bundesland/sachsen-anhalt/` | Autismus-Anlaufstellen in Sachsen-Anhalt \| AUTISMUS kompakt | 7 Autismus-Anlaufstellen in Sachsen-Anhalt entdecken. Informationen zu Diagnostik, Therapie, Alltagshilfe und Beratung. | selbst | index, follow |
| `/hilfe-finden/bundesland/schleswig-holstein/` | Autismus-Anlaufstellen in Schleswig-Holstein \| AUTISMUS kompakt | 7 Anlaufstellen für Autismus in Schleswig-Holstein, mit Schwerpunkt Therapie, dazu Diagnostik und Fachberatung – für autistische Menschen, Angehörige und Fachkräfte. | selbst | index, follow |
| `/hilfe-finden/bundesland/thueringen/` | Autismus-Anlaufstellen in Thüringen \| AUTISMUS kompakt | 9 Anlaufstellen für Autismus in Thüringen, mit Diagnostik und Therapie als größten Kategorien – für autistische Menschen, Angehörige und Fachkräfte. | selbst | index, follow |

Die 16 Einleitungstexte sind in `src/lib/bundesland-seo.ts` (Feld
`introText`) vollständig dokumentiert und werden hier aus Platzgründen
nicht erneut dupliziert.

## 4. Technische Umsetzung in Astro

- **`src/lib/bundesland-seo.ts`** (neu): zentrale, CMS-unabhängige
  Datenstruktur `BUNDESLAND_SEO` (ein Eintrag pro Bundesland-Slug mit
  `seoTitle`, `metaDescription`, `introText`) plus der gemeinsame
  `ANLAUFSTELLEN_DATENHINWEIS`-Text.
- **`src/layouts/AnlaufstellenFilterLayout.astro`**: drei neue, **optionale**
  Props (`seoTitle`, `metaDescription`, `introText`). Ohne Angabe
  unverändertes Verhalten (automatisch generierter Title/Description aus
  `title`/`filterLabel`, kein Intro-Block) – betrifft weiterhin alle
  anderen Facetten (Kategorie, Zielgruppe, Altersgruppe, Online, Vor Ort)
  mit null Änderung, verifiziert.
- **`src/pages/hilfe-finden/bundesland/[land].astro`**: liest den
  passenden Eintrag aus `BUNDESLAND_SEO` und reicht ihn durch. Der `title`-
  Prop (H1 + Breadcrumb) bleibt unverändert `Anlaufstellen in {Land}`.

## 5. Übertragung nach WordPress

Diese Datenstruktur ist unabhängig vom Astro-Template lesbar und lässt
sich 1:1 auf die Beschreibungsfelder der WordPress-Taxonomie "Bundesland"
übertragen, **ohne dass sich URLs ändern müssen** (die Taxonomie-Term-
Slugs sollten identisch zu den aktuellen 16 Astro-Routenslugs gewählt
werden, siehe SEO-Phase-3-Dokumentation). Konkret:

- `seoTitle` → Taxonomie-Term "SEO-Title"-Feld (z. B. Yoast/Rank-Math-
  Taxonomie-Einstellung).
- `metaDescription` → Taxonomie-Term "Meta-Beschreibung"-Feld.
- `introText` → Taxonomie-Term-Beschreibungsfeld (`term_description`),
  das die meisten Themes oberhalb der Archiv-Liste ausgeben.
- `ANLAUFSTELLEN_DATENHINWEIS` → ein einmaliger, global in der Taxonomie-
  Archiv-Vorlage (`taxonomy-bundesland.php` o. ä.) eingebundener Hinweis,
  **nicht** pro Term dupliziert – entspricht exakt der hier gewählten
  Astro-Umsetzung (ein gemeinsamer Hinweis, zentral gepflegt).

## 6. Qualitätssicherung (durchgeführt)

- **Fachliche Richtigkeit**: alle Zahlen und Kategorienangaben gegen die
  YAML-Rohdaten re-verifiziert, keine unbelegte Aussage.
- **Eindeutigkeit**: 0 doppelte Titles, 0 doppelte Descriptions sitewide
  (automatisiert über alle 172 Seiten geprüft).
- **H1 unverändert**: für alle 16 Seiten einzeln verglichen (weiterhin
  "Anlaufstellen in {Land}").
- **Canonical-Tags**: unverändert, absolute Self-Canonicals.
- **Indexierungsregeln**: unverändert (7 Noindex-Seiten sitewide, wie seit
  Phase 3).
- **Sitemap**: unverändert, 165 URLs.
- **Weiterleitungen**: `vercel.json` unverändert (`git diff` leer).
- **Andere Facettentypen** (Kategorie, Zielgruppe, Online, Vor Ort):
  stichprobenartig geprüft, byte-identisch zum Stand vor dieser Änderung.
- **Header-Korrektur** (vorheriger Commit `08aa754`): unverändert, nicht
  berührt.
- **Build**: 172 Seiten. **astro check**: 0 Fehler. **Unit-Tests**: 22/22.
  **E2E-Tests**: 7/7.

## 7. Offene Punkte

Keine. Alle in Abschnitt 6 geprüften Punkte sind grün. Wartet auf
Freigabe zur Veröffentlichung (Commit/Push).
