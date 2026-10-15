# SEO Phase 4 – Metadaten-Strategie (Titles, Meta-Descriptions, H1)

Stand: 15.10.2026. Analyse- und Konzeptdokument – **keine der hier
vorgeschlagenen Texte wurde produktiv übernommen.** Grundlage: vollständige
Inventur aller 172 generierten Seiten (`seo-phase4-analyse/01-seiteninventar.csv`),
die bestehende Indexierungsstrategie aus SEO Phase 3 (unverändert) und eine
qualitative Tiefenanalyse der zehn strategisch wichtigsten Seiten.

## 1. Kennzeichnung der Aussagen

- **[Code]** – aus dem Repository/Build direkt ablesbar (Title, Description,
  H1, Wortzahl, interne Links, Robots-Status).
- **[Redaktionell]** – meine fachliche Einschätzung/Formulierungsvorschlag.
- **[Hypothese]** – Annahme über Google-Suchverhalten, nicht verifizierbar
  ohne Search Console/externe Tools.
- **[Unverifizierbar]** – Daten, die ich ohne Search Console/Keyword-Tool
  nicht beschaffen kann (Suchvolumen, Rankingpositionen, Klickzahlen). Ich
  habe **keine** solchen Zahlen erfunden.

## 2. Vollständige URL-Liste mit Status

Die vollständige, maschinenlesbare Tabelle aller 172 URLs (inkl. Title,
Description, H1, Seitentyp, Suchintention, Verbesserungsbedarf, Priorität,
Robots-Status) liegt in `seo-phase4-analyse/01-seiteninventar.csv`. Diese
Datei ist die Primärquelle für Abschnitt 3 unten (WordPress-Übernahme);
hier folgt nur die redaktionelle Tiefenanalyse der zehn priorisierten
Seiten (vollständige Tabellen auch im Chat-Bericht).

## 3. WordPress-Migrationshinweise für Metadaten

**[Redaktionell]** Diese Strategie ist unabhängig von einem konkreten
SEO-Plugin nutzbar:

- **Trennung von CMS-Titel, H1 und HTML-`<title>`**: In WordPress ist der
  "Beitragstitel" im Editor standardmäßig sowohl Quelle für die
  automatisch generierte H1 **als auch** für den SEO-Title (sofern kein
  Plugin-Feld überschrieben wird). Für diese Website ist das **nicht**
  automatisch gewünscht: Mehrere hier geprüfte Seiten profitieren von einem
  Title, der länger/suchbegriffsreicher ist als die sichtbare, kürzere H1
  (z. B. Startseite). Bei einer Migration muss deshalb bewusst geprüft
  werden, ob das gewählte Theme/SEO-Plugin **getrennte Felder** für
  Beitragstitel (intern/Editor), H1 (sichtbar) und SEO-Title (`<title>`,
  z. B. Yoast "SEO-Titel"-Feld) anbietet – das ist bei den gängigen
  Plugins (Yoast, Rank Math) der Fall, aber nicht beim WordPress-Standard
  ohne Plugin.
- **Canonical/Indexierung unverändert übernehmen**: Die in SEO Phase 3
  dokumentierten Noindex-Entscheidungen (4 URLs) und Self-Canonical-Regeln
  bleiben unberührt von dieser Phase – Metadaten-Änderungen betreffen
  ausschließlich Title/Description/H1, nicht Indexierbarkeit oder
  Canonical-Ziele.
- **Zentral generierte vs. redaktionell gepflegte Texte**: Bei den
  `/hilfe-finden/*`- und `/materialien/*`-Facetten werden Title und
  Description aktuell **zentral aus einem Muster generiert**
  (`AnlaufstellenFilterLayout.astro`/`MaterialienFilterLayout.astro`:
  `` `${title} – Anlaufstellen` ``/`` `Anlaufstellen zum Thema Autismus, gefiltert nach: ${filterLabel}.` ``).
  In WordPress entspricht das einer **Taxonomie-Archiv-Vorlage**
  (ein Template für alle Terme einer Taxonomie) – auch dort sollte die
  Beschreibung pro Taxonomie-Term editierbar bleiben, damit z. B.
  Bundesland-Seiten individuellen Mehrwert statt eines reinen
  Platzhalter-Austauschs erhalten (siehe Abschnitt "Phase E" im
  Chat-Bericht).
- Alle 103 Fachartikel, alle Hub-Seiten und alle rechtlichen Seiten haben
  **redaktionell individuell gepflegte** Title/Description/H1 (direkt im
  Frontmatter bzw. als Props an `BaseLayout`/`ArticleLayout`) – das
  entspricht in WordPress dem normalen Beitrags-/Seiten-Editor-Feld und
  lässt sich 1:1 übernehmen.

## 4. Priorität und nächste Schritte

Siehe Chat-Bericht (Abschnitte 1–8) für die vollständige Tiefenanalyse der
zehn priorisierten Seiten, die Keyword-zu-URL-Matrix und den priorisierten
Maßnahmenplan für die übrigen 155 indexierbaren Seiten.

## 5. Freigegebene und umgesetzte Änderungen (finaler Stand 15.10.2026)

**[Code, umgesetzt]** Nach zwei redaktionellen Freigaberunden sind folgende
Werte auf vier Seiten final live. Alle übrigen Titles/Descriptions der
zehn priorisierten Seiten sowie alle H1-Überschriften, sichtbaren
Artikelinhalte, URLs und die Indexierungsregeln aus Phase 3 bleiben
unverändert.

### 5.1 Finale Seitentitel (HTML `<title>`)

| URL | Bisheriger Title (Zeichen) | Finaler Title (Zeichen) |
|---|---|---|
| `/fuer-autistische-menschen/was-ist-autismus/` | Was ist Autismus? · Autismuskompakt (35) | Was ist Autismus? Merkmale, Diagnose & Alltag \| AUTISMUS kompakt (64) |
| `/hilfe-finden/` | Hilfe & Anlaufstellen für Erwachsene · Autismuskompakt (54) | Autismus-Anlaufstellen: Beratung & Hilfe \| AUTISMUS kompakt (**59**) |
| `/fuer-autistische-menschen/` | Für Autist:innen · Autismuskompakt (34) | Leben mit Autismus: Alltag & Unterstützung \| AUTISMUS kompakt (**61**) |
| `/angehoerige-fachkraefte/` | Für Angehörige & Fachkräfte · Autismuskompakt (45) | Autismus: Wissen für Angehörige und Fachkräfte \| AUTISMUS kompakt (65) |

Für `/hilfe-finden/` und `/fuer-autistische-menschen/` wurde in der
zweiten Freigaberunde die ursprünglich vorgeschlagene, längere Fassung
(71/73 Zeichen) durch eine kompaktere Version ersetzt.

**Technischer Hinweis für WordPress**: Drei der vier Seiten
(`hilfe-finden`, `fuer-autistische-menschen`, `angehoerige-fachkraefte` –
direkte Seiten) erhielten den vollständigen, markengebundenen Title
direkt als Wert; die vierte (`was-ist-autismus`, ein Fachartikel) nutzte
dafür ein neues, **additives** Schema-Feld `fullTitle` (zusätzlich zum
bereits bestehenden `seoTitle`-Feld), das verhindert, dass der zentrale
Layout-Baustein automatisch noch ein zweites " · Autismuskompakt"
anhängt. In WordPress entspricht das der üblichen Trennung zwischen
"automatisch generiertem SEO-Title" und "manuell vollständig
überschriebenem SEO-Title", die SEO-Plugins ohnehin anbieten.

### 5.2 Finale Meta-Descriptions

| URL | Bisherige Description (Zeichen) | Finale Description (Zeichen) |
|---|---|---|
| `/angehoerige-fachkraefte/` | Informationen für Angehörige und Fachkräfte zum Thema Autismus – verständlich, praxisnah und aufeinander abgestimmt. (116) | Praxisnahe Informationen für Angehörige und Fachkräfte zum Thema Autismus: Alltag, Kommunikation, Rechte und Unterstützung verständlich erklärt. (144) |
| `/fuer-autistische-menschen/diagnostik/orientierungscheck/` | Ein wertschätzender Orientierungscheck für Erwachsene: eigene Erfahrungen mit sozialer Kommunikation, Reizen, Routinen, Masking und Überlastung besser einordnen. Kein diagnostischer Test. (187) | Kostenloser Autismus-Orientierungscheck für Erwachsene: Eigene Erfahrungen mit Kommunikation, Reizen und Routinen einordnen. Kein diagnostischer Test. (**150**) |
| `/fuer-autistische-menschen/was-ist-autismus/` (nur `<meta name="description">`, sichtbarer "Kurz gesagt"-Text unverändert) | Eine Einführung in Autismus als neuroentwicklungsbezogene Diagnose – für autistische Menschen, Angehörige und Fachkräfte, jeweils mit eigenem Blickwinkel. (154) | Was ist Autismus? Erfahre, wie sich autistische Wahrnehmung, Kommunikation und Bedürfnisse unterscheiden können – verständlich erklärt und mit Alltagsbeispielen. (**161**) |

**[Code, geprüft]** Die Eigenschaften "kostenlos" und "anonym" des
Orientierungschecks wurden vor Übernahme verifiziert: Die Seite enthält
keinen Zahlungs-, Login- oder Registrierungsmechanismus, Antworten werden
ausschließlich clientseitig (`localStorage`/`sessionStorage`) gespeichert,
nie an einen Server übertragen. "Kostenlos" wurde in der zweiten
Freigaberunde in die Description aufgenommen; "anonym" wurde nicht
angefragt und blieb daher außen vor.

**Technischer Hinweis für WordPress (`was-ist-autismus`)**: `description`
im Frontmatter wird auf dieser Website **doppelt verwendet** – als
`<meta name="description">` **und** sichtbar als "Kurz gesagt:"-Absatz
auf der Seite selbst. Da die Freigabe eine geänderte Meta-Description bei
gleichzeitig unverändertem Artikelinhalt vorsah, wurde dafür ein weiteres,
**additives** Schema-Feld `metaDescription` ergänzt: Ist es gesetzt,
überschreibt es ausschließlich den HTML-Meta-Tag, die sichtbare "Kurz
gesagt"-Zeile verwendet weiterhin `description`. In WordPress entspricht
das exakt der Trennung zwischen dem Beitrags-Auszug/Intro-Text (sichtbar)
und dem SEO-Plugin-Feld "Meta-Beschreibung" (nur im `<head>`) – diese
beiden Felder sollten dort ebenfalls unabhängig voneinander gepflegt
werden können, nicht zwangsweise gekoppelt sein.

### 5.3 Unverändert gebliebene Elemente (geprüft)

H1 aller vier Seiten, alle Canonical-Tags (weiterhin absolute
Self-Canonicals unter `https://www.autismuskompakt.de/...`), die vier
Noindex-Regeln aus SEO Phase 3, die XML-Sitemap (165 URLs, unverändert),
`vercel.json` (14 Weiterleitungen, unverändert), Design, Navigation und
alle Artikelinhalte.
