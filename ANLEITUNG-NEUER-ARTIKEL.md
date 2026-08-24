# Anleitung: einen neuen Wissensartikel anlegen

Diese Anleitung richtet sich an Katja und setzt keine
Programmierkenntnisse voraus.

## 1. Richtigen Ordner wählen

Alle Artikel liegen unter `src/content/artikel/` in einem Unterordner
je Kategorie:

| Ordner | Kategorie | Erscheint unter |
|---|---|---|
| `autismus-verstehen/` | Autismus verstehen | `/fuer-autistische-menschen/…` |
| `diagnostik-tests/` | Diagnostik & Tests | `/fuer-autistische-menschen/diagnostik/…` |
| `rechte-antraege/` | Rechte & Anträge | `/fuer-autistische-menschen/rechte-und-antraege/…` |
| `alltag-leben/` | Alltag & Leben | `/fuer-autistische-menschen/alltag/…` |
| `besonderheiten-begleiterkrankungen/` | Besonderheiten & Begleiterkrankungen | `/fuer-autistische-menschen/besonderheiten/…` |
| `angehoerige-fachkraefte/` | Für Angehörige & Fachkräfte | `/angehoerige-fachkraefte/…` |

## 2. Neue Markdown-Datei anlegen

Lege im passenden Ordner eine neue Datei an, z. B.
`src/content/artikel/alltag-leben/tagesstruktur.md`. Der Dateiname wird
automatisch Teil der Internet-Adresse (URL) – am besten nur
Kleinbuchstaben, Zahlen und Bindestriche verwenden, keine Umlaute oder
Leerzeichen.

## 3. Kopfbereich (Frontmatter) ausfüllen

Jede Datei beginnt mit einem Block zwischen zwei `---`-Zeilen. Beispiel:

```markdown
---
title: "Tagesstruktur"
description: "Warum feste Tagesstrukturen entlasten können und wie sie sich alltagstauglich gestalten lassen."
category: "alltag-leben"
targetGroups: ["autistische-menschen", "angehoerige"]
updated: 2026-08-24
sources:
  - title: "Name der Quelle"
    url: "https://beispiel.de/quelle"
---

Hier beginnt der eigentliche Artikeltext in normalem Markdown.
```

### Felder im Einzelnen

- **title** (Pflichtfeld): Überschrift des Artikels.
- **description** (Pflichtfeld): Ein bis zwei Sätze Zusammenfassung.
  Wird automatisch als Suchmaschinen-Beschreibung **und** als
  „Kurz gesagt“-Kasten oben im Artikel angezeigt.
- **category** (Pflichtfeld): Einer der sechs Werte aus der Tabelle
  oben, genau so geschrieben (z. B. `"alltag-leben"`).
- **targetGroups** (Pflichtfeld, mindestens eine Angabe): Liste aus
  `"autistische-menschen"`, `"angehoerige"`, `"fachkraefte"`.
- **updated**: Datum im Format `JJJJ-MM-TT`, erscheint als
  „Stand: TT.MM.JJJJ“ im Artikel.
  **Verpflichtend** bei den Kategorien `diagnostik-tests`,
  `rechte-antraege` und `besonderheiten-begleiterkrankungen`, da es sich
  um sozialrechtliche oder medizinische Inhalte handelt. Fehlt das
  Datum dort, lässt sich die Website nicht bauen – du bekommst eine
  klare Fehlermeldung mit Dateiname und Grund.
- **sources**: Liste von Quellen mit `title` und optional `url`. Wird
  am Ende des Artikels als „Quellen“-Abschnitt angezeigt. Bitte nur
  echte, belastbare Quellen eintragen (Gesetzestexte, Leitlinien,
  offizielle Stellen) – keine erfundenen oder unsicheren Angaben.

## 4. Artikeltext schreiben

Nach dem zweiten `---` folgt der eigentliche Text in normalem
Markdown, zum Beispiel:

```markdown
Ein Absatz Text.

## Eine Zwischenüberschrift

Noch ein Absatz. Du kannst **fett**, *kursiv* und Listen verwenden:

- Erster Punkt
- Zweiter Punkt
```

## 5. Ergebnis ansehen

Nach dem Speichern der Datei erscheint der Artikel automatisch:

- unter der passenden Internet-Adresse (siehe Tabelle oben, aus
  Kategorie-Ordner + Dateiname),
- mit „Kurz gesagt“-Kasten, Breadcrumbs (Pfad-Navigation) und –
  je nach Kategorie – Stand-Datum, Hinweisbox und Quellenblock.

Wenn du möchtest, dass der Artikel auch von der jeweiligen
Themenübersichtsseite aus verlinkt wird (z. B. von
`/fuer-autistische-menschen/alltag/`), sag mir kurz Bescheid – das
trage ich dann in die entsprechende Liste ein.

## 6. Wichtig

- Bitte keine Artikel zu rechtlichen, sozialrechtlichen oder
  medizinischen Themen ohne verlässliche Quelle veröffentlichen.
- Der Begriff „Asperger“ darf nirgends verwendet werden.
- Bei Unsicherheit: lieber kurz nachfragen, bevor ein Artikel
  veröffentlicht wird.
