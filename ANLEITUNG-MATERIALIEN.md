# Anleitung: Materialien pflegen

Diese Anleitung richtet sich an Katja und setzt keine
Programmierkenntnisse voraus.

Jedes Material ist eine eigene Datei im Ordner
`src/content/materialien/`. Der Dateityp ist YAML (Endung `.yaml`).

Wichtig: Alle Materialien in diesem Bereich sind **kostenlos**.
Kostenpflichtige digitale Produkte gehören in den Shop – siehe
`ANLEITUNG-SHOP.md`.

## 1. Neues Material anlegen

Es gibt zwei Varianten: ein Material, das als Datei direkt auf der
Website liegt (**intern**), oder ein Material, das auf eine andere
Website verweist (**extern**).

### Variante A: Datei hinterlegen (intern)

1. Lege die fertige Datei (z. B. ein PDF) im Ordner
   `public/downloads/materialien/` ab, z. B.
   `public/downloads/materialien/reizprofil-vorlage.pdf`.
2. Lege im Ordner `src/content/materialien/` eine neue Datei an, z. B.
   `reizprofil-vorlage.yaml`.
3. Trage im Feld `file` genau den Dateinamen aus Schritt 1 ein (ohne
   Pfad davor), z. B. `file: "reizprofil-vorlage.pdf"`.

```yaml
title: "Reizprofil-Vorlage"
description: "Eine Vorlage, um eigene Reizempfindlichkeiten zu erfassen."
targetGroups:
  - autistische-menschen
materialType: "reizprofile"
file: "reizprofil-vorlage.pdf"
fileFormat: "PDF"
pages: 2
updated: 2026-09-01
```

### Variante B: Extern verlinken

1. Lege im Ordner `src/content/materialien/` eine neue Datei an.
2. Setze `external: true` und trage die vollständige Internetadresse
   unter `externalUrl` ein.

```yaml
title: "Externe Gesprächshilfe"
description: "Kurzbeschreibung des externen Materials."
targetGroups:
  - angehoerige
materialType: "gespraechshilfen"
external: true
externalUrl: "https://www.beispiel.de/material.pdf"
updated: 2026-09-01
```

## 2. Zielgruppen und Materialtyp pflegen

- `targetGroups`: Liste aus `autistische-menschen`, `angehoerige`,
  `fachkraefte` – mindestens eine Angabe.
- `materialType`: genau einer der folgenden Werte:
  `checklisten`, `vorlagen`, `arbeitsblaetter`, `gespraechshilfen`,
  `reizprofile`, `kommunikationshilfen`, `arzttermin-vorbereitung`,
  `tages-wochenplanung`, `belastungsprotokolle`, `antragschecklisten`,
  `materialien-schule`, `materialien-studium`, `materialien-arbeit`.

Jedes Material erscheint automatisch auf `/materialien/` sowie auf
den passenden Filterseiten, z. B. `/materialien/typ/checklisten/` und
`/materialien/zielgruppe/angehoerige/`.

## 3. Alle Felder im Überblick

| Feld | Pflicht? | Bedeutung |
|---|---|---|
| `title` | **ja** | Titel des Materials |
| `description` | **ja** | Kurzbeschreibung (1–2 Sätze) |
| `targetGroups` | **ja**, mind. 1 | siehe oben |
| `materialType` | **ja** | siehe oben |
| `file` | **ja, wenn `external` nicht `true` ist** | Dateiname in `public/downloads/materialien/` |
| `fileFormat` | nein | z. B. `PDF` |
| `pages` | nein | Seitenzahl als Zahl |
| `language` | nein (Standard: `de`) | Sprache |
| `updated` | **ja** | Stand-Datum, Format `JJJJ-MM-TT` |
| `accessibilityNote` | nein | Hinweis zur Barrierefreiheit der Datei |
| `featured` | nein (Standard: nein) | `true`, um das Material besonders hervorzuheben (für später vorbereitet) |
| `external` | nein (Standard: nein) | `true`, wenn extern verlinkt |
| `externalUrl` | **ja, wenn `external: true`** | vollständige Internetadresse |

**Wichtig:** Fehlt `file` bei einem internen Material oder
`externalUrl` bei einem externen Material, oder fehlt `updated`,
lässt sich die Website nicht bauen – du bekommst eine klare
Fehlermeldung mit Dateiname und Grund.

## 4. Material entfernen oder ändern

Datei im Ordner `src/content/materialien/` bearbeiten oder löschen.
Beim Ändern von Inhalten bitte auch `updated` auf das aktuelle Datum
setzen.

## 5. Demo-Datensätze

Die beiden Dateien mit `demo-` im Namen
(`demo-checkliste.yaml`, `demo-gespraechshilfe-extern.yaml`) sind
**erfundene Beispieldaten** – keine echten Materialien. Sie sind an
`demo: true` erkennbar und werden auf der Website mit dem Hinweis
„Beispieldatensatz“ gekennzeichnet. Du kannst sie löschen, sobald
genügend echte Materialien vorhanden sind (denk daran, dann auch die
Platzhalter-PDF-Datei `public/downloads/materialien/beispiel-checkliste.pdf`
zu entfernen).

## 6. Barrierefreiheit

- Nutze bei PDFs möglichst „getaggte“, barrierefreie PDFs (mit echter
  Textstruktur statt reinem Bild).
- Trage im Feld `accessibilityNote` einen kurzen, ehrlichen Hinweis
  ein, z. B. „Barrierefrei geprüft“ oder „Enthält eingescannte
  Abbildungen ohne Alternativtext“.
- Wähle einen verständlichen `title` – er wird auch als Linktext für
  den Download verwendet.
