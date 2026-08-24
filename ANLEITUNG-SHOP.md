# Anleitung: Shop-Produkte pflegen

Diese Anleitung richtet sich an Katja und setzt keine
Programmierkenntnisse voraus.

Jedes Produkt ist eine eigene Datei im Ordner
`src/content/produkte/`. Der Dateityp ist YAML (Endung `.yaml`).

Wichtig: Der Shop ist eine **reine Präsentationsseite**. Es gibt
keinen Warenkorb und keinen Kaufvorgang auf Autismuskompakt.de – jedes
Produkt verlinkt auf eine externe Verkaufsstelle.

## 1. Neues Produkt anlegen

1. Lege im Ordner `src/content/produkte/` eine neue Datei an, z. B.
   `mein-neues-produkt.yaml`.
2. Fülle die Felder aus (siehe Abschnitt 3).
3. Speichern – das Produkt erscheint automatisch im passenden
   Abschnitt auf `/shop/` (Bücher, Digitale Produkte oder Kleidung &
   Merchandise, je nach `productType`).

```yaml
title: "Name des Produkts"
description: "Kurze, verständliche Beschreibung."
productType: "digitales-produkt"
targetGroups:
  - autistische-menschen
  - angehoerige
externalUrl: "https://www.beispiel-shop.de/produkt"
provider: "Name des Anbieters (optional)"
```

`productType` ist einer von: `buch`, `digitales-produkt`,
`merchandise`.

## 2. Produktbild (Cover) hinzufügen

1. Lege das Bild unter `public/produkte/` ab, z. B.
   `public/produkte/mein-produkt.jpg`.
2. Trage im Feld `cover` den Pfad ein, z. B.
   `cover: "/produkte/mein-produkt.jpg"`.

Ohne `cover` zeigt die Website automatisch einen Platzhalter
„Cover folgt“ – nichts wirkt kaputt, wenn das Bild noch fehlt.

## 3. Alle Felder im Überblick

| Feld | Pflicht? | Bedeutung |
|---|---|---|
| `title` | **ja** | Produktname |
| `description` | **ja** | Kurzbeschreibung |
| `cover` | nein | Pfad zum Produktbild |
| `productType` | **ja** | `buch`, `digitales-produkt` oder `merchandise` |
| `targetGroups` | **ja**, mind. 1 | `autistische-menschen`, `angehoerige`, `fachkraefte` |
| `externalUrl` | **ja** | Adresse der externen Verkaufsstelle |
| `provider` | nein | z. B. Verlag, Plattform oder Shop-Name |
| `buttonLabel` | nein | eigener Button-Text (sonst automatisch je nach `productType`: „Zum Buch“ / „Produkt ansehen“ / „Zum Shop“) |
| `featured` | nein (Standard: nein) | für spätere besondere Hervorhebung vorbereitet |

**Wichtig:** Fehlt `externalUrl`, `title`, `description`,
`productType` oder `targetGroups`, lässt sich die Website nicht
bauen – du bekommst eine klare Fehlermeldung mit Dateiname und Grund.

## 4. Shop-Link später ändern

Öffne die Datei des betreffenden Produkts (z. B.
`src/content/produkte/autismus-kompakt.yaml`) und ersetze den Wert
von `externalUrl` durch die echte Adresse. Das ist die einzige Stelle,
die dafür geändert werden muss.

Aktuell enthalten die beiden Bücher noch folgende Platzhalter, die du
ersetzen musst (siehe auch `TODO-KATJA.md`):

- `src/content/produkte/autismus-kompakt.yaml` →
  `TODO_KATJA_SHOP_URL_AUTISMUS_KOMPAKT`
- `src/content/produkte/neuro-kompass.yaml` →
  `TODO_KATJA_SHOP_URL_NEURO_KOMPASS`

## 5. Demo-Datensätze

Die beiden Dateien `demo-workbook.yaml` und `demo-tasse.yaml` sind
**erfundene Beispielprodukte** – kein echtes Angebot, kein echter
Preis, kein echter Verkaufslink (sie verweisen auf `example.com`,
eine für Beispiele reservierte, nicht echte Internetadresse). Sie
sind an `demo: true` erkennbar und werden auf der Website mit dem
Hinweis „Beispieldatensatz“ gekennzeichnet. Lösche sie, sobald echte
Produkte in der jeweiligen Kategorie vorhanden sind.

Die beiden Bücher „Autismus kompakt“ und „Neuro-Kompass“ sind
**echte** Produkte – nur Cover, Beschreibung und Verkaufslink sind
noch Platzhalter.

## 6. Barrierefreiheit

- Verwende einen verständlichen `title` – er wird auch als
  Bestandteil des Alt-Texts für das Produktbild genutzt.
- Achte bei eigenen Produktbildern auf ausreichenden Kontrast im
  Bild selbst, falls Text auf dem Bild steht.
- Keine Information nur über Farbe vermitteln (z. B. nicht nur eine
  farbige Markierung als einzigen Hinweis auf ein Angebot).
