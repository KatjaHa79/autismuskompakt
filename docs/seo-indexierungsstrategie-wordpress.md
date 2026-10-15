# SEO-Indexierungsstrategie für Facettenseiten (/hilfe-finden/, /materialien/)

Stand: 15.10.2026 (SEO-Audit Phase 3, freigegeben durch die Betreiberin).
Dieses Dokument ist migrationssicher angelegt: Es beschreibt die
Indexierungsentscheidung für alle 48 Facettenseiten unabhängig von der
aktuellen Astro-Implementierung, damit die Strategie bei einem späteren
Wechsel zu WordPress unverändert übernommen werden kann.

## 1. Ausgangslage

Die Website erzeugt für zwei datengetriebene Verzeichnisse automatisch
Facettenseiten:

- **Anlaufstellen-Verzeichnis** (`/hilfe-finden/`, 153 Einträge): gefiltert
  nach Bundesland, Kategorie, Zielgruppe, Altersgruppe sowie "Online"/"Vor
  Ort".
- **Materialien-Bibliothek** (`/materialien/`, 37 Einträge): gefiltert nach
  Materialtyp und Zielgruppe.

Ein SEO-Audit (Seobility-Bericht + lokale Analyse) ergab erhebliche
Textüberschneidungen zwischen vielen dieser Facettenseiten, da jede volle
Karten-Inhalte (Name, Angebotstext, Kontaktdaten) wiederholt. Nach
Einzelprüfung aller 48 URLs wurde entschieden: **44 Seiten bleiben
indexierbar** (eigenständige Suchintention überwiegt die
Textüberschneidung), **4 Seiten erhalten `noindex, follow`** (keine
eigenständige Suchintention gegenüber der jeweiligen Hauptseite).

## 2. Vollständige Liste aller 48 URLs

Hauptdomain für alle Canonical-Werte: `https://www.autismuskompakt.de`
(Self-Canonical – jede Seite verweist auf sich selbst, keine
seitenübergreifende Canonical-Konsolidierung).

### 2.1 `/hilfe-finden/*` (32 URLs)

| URL | Indexierungsstatus | Canonical-Ziel | Sitemap | Bedeutung der Facette |
|---|---|---|---|---|
| `/hilfe-finden/` | INDEX | selbst | ja | Haupt-Verzeichnis, Einstiegspunkt |
| `/hilfe-finden/bundesland/baden-wuerttemberg/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/bayern/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/berlin/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/brandenburg/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/bremen/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/hamburg/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/hessen/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/mecklenburg-vorpommern/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/niedersachsen/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/nordrhein-westfalen/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/rheinland-pfalz/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/saarland/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/sachsen/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/sachsen-anhalt/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/schleswig-holstein/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/bundesland/thueringen/` | INDEX | selbst | ja | Regionale Suche |
| `/hilfe-finden/kategorie/alltagshilfe/` | INDEX | selbst | ja | Unterstützungsart |
| `/hilfe-finden/kategorie/angehoerigenberatung/` | INDEX | selbst | ja | Unterstützungsart |
| `/hilfe-finden/kategorie/beratung/` | INDEX | selbst | ja | Unterstützungsart (hochwertige Suchintention) |
| `/hilfe-finden/kategorie/diagnostik/` | INDEX | selbst | ja | Unterstützungsart (hochwertige Suchintention) |
| `/hilfe-finden/kategorie/fachberatung/` | INDEX | selbst | ja | Unterstützungsart |
| `/hilfe-finden/kategorie/selbsthilfe/` | INDEX | selbst | ja | Unterstützungsart |
| `/hilfe-finden/kategorie/therapie/` | INDEX | selbst | ja | Unterstützungsart (hochwertige Suchintention) |
| `/hilfe-finden/zielgruppe/angehoerige/` | INDEX | selbst | ja | Zielgruppen-Suche |
| `/hilfe-finden/zielgruppe/autistische-menschen/` | **NOINDEX, FOLLOW** | selbst | **nein** | Fast identisch mit Hauptseite (98 % der Einträge) |
| `/hilfe-finden/zielgruppe/fachkraefte/` | INDEX | selbst | ja | Zielgruppen-Suche |
| `/hilfe-finden/altersgruppe/erwachsene/` | INDEX | selbst | ja | Altersgruppen-Suche |
| `/hilfe-finden/altersgruppe/jugendliche/` | INDEX | selbst | ja | Altersgruppen-Suche |
| `/hilfe-finden/altersgruppe/kinder/` | INDEX | selbst | ja | Altersgruppen-Suche |
| `/hilfe-finden/online/` | **NOINDEX, FOLLOW** | selbst | **nein** | Aktuell 0 Treffer – bei Datenwachstum neu bewerten |
| `/hilfe-finden/vor-ort/` | **NOINDEX, FOLLOW** | selbst | **nein** | Identisch mit Hauptseite (100 % der Einträge) |

### 2.2 `/materialien/*` (16 URLs)

| URL | Indexierungsstatus | Canonical-Ziel | Sitemap | Bedeutung der Facette |
|---|---|---|---|---|
| `/materialien/` | INDEX | selbst | ja | Haupt-Bibliothek, Einstiegspunkt |
| `/materialien/typ/antragschecklisten/` | INDEX | selbst | ja | Materialtyp (überschneidungsfreie Partition) |
| `/materialien/typ/arbeitsblaetter/` | INDEX | selbst | ja | Materialtyp |
| `/materialien/typ/arzttermin-vorbereitung/` | INDEX | selbst | ja | Materialtyp |
| `/materialien/typ/belastungsprotokolle/` | INDEX | selbst | ja | Materialtyp |
| `/materialien/typ/checklisten/` | INDEX | selbst | ja | Materialtyp |
| `/materialien/typ/gespraechshilfen/` | INDEX | selbst | ja | Materialtyp |
| `/materialien/typ/kommunikationshilfen/` | INDEX | selbst | ja | Materialtyp |
| `/materialien/typ/materialien-arbeit/` | INDEX | selbst | ja | Materialtyp |
| `/materialien/typ/materialien-schule/` | INDEX | selbst | ja | Materialtyp |
| `/materialien/typ/reizprofile/` | INDEX | selbst | ja | Materialtyp |
| `/materialien/typ/tages-wochenplanung/` | INDEX | selbst | ja | Materialtyp |
| `/materialien/typ/vorlagen/` | INDEX | selbst | ja | Materialtyp |
| `/materialien/zielgruppe/angehoerige/` | INDEX | selbst | ja | Zielgruppen-Suche |
| `/materialien/zielgruppe/autistische-menschen/` | **NOINDEX, FOLLOW** | selbst | **nein** | Fast identisch mit Hauptseite (97 % der Einträge) |
| `/materialien/zielgruppe/fachkraefte/` | INDEX | selbst | ja | Zielgruppen-Suche |

**Zusammenfassung**: 44 von 48 URLs INDEX, 4 URLs NOINDEX, FOLLOW. Alle 48
URLs bleiben erreichbar, funktionsfähig und für Nutzer sichtbar – keine
Weiterleitungen, keine Löschungen, keine `robots.txt`-Sperrung.

## 3. Technische Umsetzung in Astro (Ist-Zustand)

- **Zentrale Konfiguration**: `src/lib/indexierung.ts` enthält die einzige
  Quelle der Wahrheit – ein `Set` mit den vier noindex-Pfaden und die
  Funktion `getFacetRobots(pathname)`.
- **Layouts**: `src/layouts/AnlaufstellenFilterLayout.astro` und
  `src/layouts/MaterialienFilterLayout.astro` rufen `getFacetRobots(Astro.url.pathname)`
  auf und reichen das Ergebnis als `robots`-Prop an `BaseLayout.astro`
  weiter, das bei einem Wert ein `<meta name="robots">`-Tag ausgibt.
- **Sitemap**: `astro.config.mjs` importiert dieselbe `NOINDEX_FACET_PATHS`-
  Liste aus `src/lib/indexierung.ts` und schließt sie zusammen mit den
  bereits bestehenden statischen Ausnahmen (`/suche/`, `/newsletter/willkommen/`,
  `/404/`) aus der generierten `sitemap-0.xml` aus.
- **Canonical-Tags**: unverändert zentral über `BaseLayout.astro`
  (`new URL(Astro.url.pathname, Astro.site)`) – jede Seite, auch die vier
  noindex-Seiten, behält ihren eigenen Self-Canonical.
- **Keine Änderung** an `vercel.json`, an Navigation, internen Links oder
  sichtbaren Inhalten.

Diese Architektur stellt sicher, dass Robots-Meta-Tag und Sitemap **nie
widersprüchlich** sein können, da beide aus derselben Liste gespeist werden.

## 4. Technische Anforderungen an WordPress

**Wichtig – keine automatische Annahme:** WordPress erzeugt diese
Facetten-URLs **nicht von selbst**. Die heutige Struktur
(`/hilfe-finden/bundesland/bayern/`, `/materialien/typ/checklisten/` usw.)
beruht auf Astros dateibasiertem Routing mit `getStaticPaths()` und muss in
WordPress bewusst nachgebaut werden, z. B. über:

- Einen Custom Post Type **"Anlaufstelle"** mit Taxonomien `bundesland`,
  `kategorie`, `zielgruppe`, `altersgruppe` und einem Boolean-Feld
  `vor_ort`/`online` (z. B. über ACF/Custom Fields).
- Einen Custom Post Type **"Material"** mit Taxonomien `materialtyp` und
  `zielgruppe`.
- Taxonomie-Archivseiten, deren Permalink-Struktur so konfiguriert wird,
  dass die **bestehenden URL-Pfade unverändert erhalten bleiben**
  (`/hilfe-finden/bundesland/bayern/` statt eines WordPress-typischen
  `/anlaufstelle-kategorie/bundesland/bayern/`). Das erfordert ggf.
  benutzerdefinierte Rewrite-Regeln statt der Standard-Permalink-Logik.
- Für `/hilfe-finden/online/` und `/hilfe-finden/vor-ort/`: Diese sind
  keine Taxonomie-Werte, sondern eine Teilmenge nach einem Boolean-Feld –
  in WordPress typischerweise eine eigene Archiv-Query (z. B. über ein
  Plugin oder eigenen Query-Filter), nicht automatisch durch eine
  Taxonomie abgedeckt.

**Keine Umbenennung**: Die bestehenden URL-Pfade sollen bei einer Migration
**nicht** allein wegen des CMS-Wechsels geändert werden, um Rankings und
Backlinks zu erhalten.

## 5. Übertragung der Indexierungsregel auf WordPress (plugin-unabhängig)

Die Kernregel – **"diese vier konkreten Taxonomie-/Archiv-URLs erhalten
noindex, follow; alle anderen bleiben index, follow"** – lässt sich
unabhängig vom späteren SEO-Plugin (Yoast SEO, Rank Math, All in One SEO
o. ä.) auf zwei gleichwertige Arten umsetzen:

1. **Im Theme/Code**: eine zentrale PHP-Konfigurationsdatei oder ein
   Array (analog zu `src/lib/indexierung.ts`) mit den vier Taxonomie-
   Term-Slugs, ausgewertet in einem `wp_head`-Hook oder einer
   Theme-Funktion, die bei Treffer ein `<meta name="robots" content="noindex, follow">`
   ausgibt – unabhängig davon, ob zusätzlich ein SEO-Plugin aktiv ist.
2. **Im SEO-Plugin selbst**: dieselben vier Taxonomie-Terme erhalten dort
   die Einstellung "noindex" für die jeweilige Archivseite (z. B. Yoast:
   Taxonomien → Begriff → "Suchmaschinen-Sichtbarkeit" → Nein).

**Entscheidend**: Nur **eine** dieser beiden Varianten darf aktiv sein, nie
beide gleichzeitig – doppelt gepflegte, potenziell widersprüchliche Regeln
(z. B. Theme sagt "index", Plugin sagt "noindex") sind ausdrücklich zu
vermeiden. Empfehlung: Sobald ein SEO-Plugin gewählt ist, die Regel
**ausschließlich** dort pflegen und die Theme-Variante entfernen – das
Plugin synchronisiert dann üblicherweise automatisch Robots-Meta-Tag und
XML-Sitemap-Ausschluss aus derselben Einstellung, was dem hier verwendeten
Astro-Prinzip (eine Quelle für beides) entspricht.

## 6. Notwendige Prüfungen vor dem WordPress-Go-live

1. Für jede der 48 URLs: HTTP-Statuscode 200, korrekter Self-Canonical,
   korrekter Robots-Status gemäß Tabelle in Abschnitt 2 prüfen.
2. XML-Sitemap der neuen WordPress-Installation gegen die Liste in
   Abschnitt 2 abgleichen (exakt 44 der 48 URLs enthalten, 4 nicht).
3. Prüfen, dass die vier noindex-Taxonomie-Archive weiterhin **normal
   erreichbar und verlinkt** sind (nicht durch `robots.txt` gesperrt,
   nicht per Redirect entfernt).
4. Prüfen, dass keine der 44 indexierbaren Facetten durch eine
   WordPress-Standardeinstellung (z. B. "Taxonomie-Archive deaktivieren")
   versehentlich auf `noindex` oder 404 gesetzt wurde.
5. Stichprobe: mindestens 20 zufällige URLs aus Abschnitt 2 im Browser und
   in der Google Search Console ("URL-Prüfung") gegen die
   Live-WordPress-Installation verifizieren, bevor der DNS-Umzug erfolgt.
6. Prüfen, dass die 14 bestehenden Redirects aus `vercel.json` im neuen
   Hosting-Setup gleichwertig nachgebildet wurden (separates Thema, siehe
   SEO-Phase-1-Audit).
