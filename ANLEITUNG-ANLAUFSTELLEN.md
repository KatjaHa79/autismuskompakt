# Anleitung: Anlaufstellen pflegen

Diese Anleitung richtet sich an Katja und setzt keine
Programmierkenntnisse voraus.

Jede Anlaufstelle ist eine eigene Datei im Ordner
`src/content/anlaufstellen/`. Der Dateityp ist YAML (Endung `.yaml`) –
das ist ein einfaches Textformat mit `feld: wert`-Zeilen.

## 1. Neue Anlaufstelle anlegen

1. Lege im Ordner `src/content/anlaufstellen/` eine neue Datei an,
   z. B. `beratungsstelle-musterstadt.yaml`. Der Dateiname wird Teil
   der internen Kennung – am besten nur Kleinbuchstaben, Zahlen und
   Bindestriche verwenden.
2. Kopiere den Aufbau einer der vorhandenen Beispieldateien (siehe
   Abschnitt 5) oder die Vorlage unten.
3. Fülle die Felder aus (siehe Abschnitt 3 für alle Felder).
4. Speichern – die Anlaufstelle erscheint danach automatisch auf
   `/hilfe-finden/` sowie auf den passenden Filterseiten (z. B.
   `/hilfe-finden/bundesland/bayern/`).

### Vorlage

```yaml
name: "Name der Einrichtung"
type: "Art der Einrichtung, z. B. Beratungsstelle"

targetGroups:
  - autistische-menschen
  - angehoerige
ageGroups:
  - erwachsene
categories:
  - beratung

street: "Musterstraße 1"
postalCode: "12345"
city: "Musterstadt"
state: "bayern"

phone: "0123 456789"
email: "info@beispiel.de"
website: "https://www.beispiel.de"

offer: "Kurze Beschreibung des Angebots."
admissionRequirements: "Voraussetzungen für die Aufnahme."
paymentType:
  - gesetzlich
costs: "z. B. kostenlos, oder nach Kassensatz"

waitingList: "offen"
waitingTime: "z. B. ca. 6 Wochen"

online: false
onsite: true

updated: 2026-08-24
source:
  title: "Website der Einrichtung"
  url: "https://www.beispiel.de/kontakt"
```

## 2. Kontaktdaten ändern

Öffne die Datei der betreffenden Anlaufstelle und ändere die Felder
`phone`, `email`, `website`, `street`, `postalCode` oder `city`.
Denk daran, danach auch `updated` auf das heutige Datum zu setzen
(siehe Abschnitt 4) – jede Änderung an den Angaben sollte sich im
Stand-Datum widerspiegeln.

## 3. Alle Felder im Überblick

| Feld | Pflicht? | Bedeutung |
|---|---|---|
| `name` | **ja** | Name der Einrichtung |
| `type` | nein | Art der Einrichtung, freier Text |
| `targetGroups` | **ja**, mind. 1 | `autistische-menschen`, `angehoerige`, `fachkraefte` |
| `ageGroups` | nein | `kinder`, `jugendliche`, `erwachsene` |
| `categories` | **ja**, mind. 1 | `diagnostik`, `beratung`, `therapie`, `sozialrecht`, `alltagshilfe`, `selbsthilfe`, `angehoerigenberatung`, `fachberatung` |
| `street`, `postalCode`, `city` | nein | Adresse |
| `state` | **ja, wenn `online` nicht `true` ist** | Bundesland, z. B. `bayern`, `berlin`, `nordrhein-westfalen` (siehe Liste unten) |
| `phone`, `email`, `website` | nein | Kontaktdaten |
| `offer` | nein | Beschreibung des Angebots |
| `admissionRequirements` | nein | Aufnahmebedingungen |
| `paymentType` | nein | Liste aus `gesetzlich`, `privat`, `selbstzahler` |
| `costs` | nein | Freitext zu Kosten |
| `waitingList` | nein | `offen`, `geschlossen` oder `unbekannt` |
| `waitingTime` | nein | Freitext, z. B. „ca. 6 Wochen“ |
| `online` | nein (Standard: nein) | `true`, wenn online erreichbar |
| `onsite` | nein (Standard: nein) | `true`, wenn vor Ort erreichbar |
| `updated` | **ja** | Stand-Datum im Format `JJJJ-MM-TT` |
| `source` | **ja** | Quelle mit `title` und optional `url` |

Alle Bundesland-Werte: `baden-wuerttemberg`, `bayern`, `berlin`,
`brandenburg`, `bremen`, `hamburg`, `hessen`,
`mecklenburg-vorpommern`, `niedersachsen`, `nordrhein-westfalen`,
`rheinland-pfalz`, `saarland`, `sachsen`, `sachsen-anhalt`,
`schleswig-holstein`, `thueringen`.

**Wichtig:** Fehlt bei den Kategorien `state` **und** ist `online`
nicht auf `true` gesetzt, oder fehlt `updated` oder `source`, lässt
sich die Website nicht bauen. Du bekommst dann eine klare
Fehlermeldung mit Dateiname und Grund – nichts geht dabei kaputt,
die Datei muss nur korrigiert werden.

Felder, die du leer lässt oder ganz weglässt, werden auf der Karte
automatisch sauber ausgeblendet.

## 4. Stand-Datum und Quelle aktualisieren

- `updated` ist das Datum, an dem die Angaben zuletzt geprüft wurden.
  Format: `JJJJ-MM-TT`, z. B. `2026-09-15`.
- `source` beschreibt, woher die Angaben stammen, zum Beispiel:
  - `title: "Website der Einrichtung"` mit passender `url`
  - `title: "Telefonische Auskunft am 15.09.2026"`
  - `title: "Schriftliche Auskunft der Einrichtung"`
  - `title: "Träger/Behörde XY"`

Bitte bei **jeder** inhaltlichen Änderung an einer Anlaufstelle auch
`updated` (und bei Bedarf `source`) aktualisieren.

## 5. Warteliste aktualisieren

Ändere `waitingList` (`offen` / `geschlossen` / `unbekannt`) und bei
Bedarf `waitingTime`. Aktualisiere dabei **immer auch** `updated` –
Wartelisten- und Wartezeitangaben werden auf der Website automatisch
direkt neben dem Stand-Datum angezeigt, damit erkennbar bleibt, wie
aktuell diese Angabe ist.

## 6. Demo-Datensätze

Die drei vorhandenen Dateien mit `demo-` im Namen
(`demo-online-beratung.yaml`, `demo-vor-ort-nrw.yaml`,
`demo-sozialrecht-bayern.yaml`) sind **erfundene Beispieldaten** zur
Vorführung der Struktur – keine echten Einrichtungen. Sie sind an
`demo: true` erkennbar und werden auf der Website deutlich mit dem
Hinweis „Beispieldatensatz“ gekennzeichnet.

Sobald du eine echte Anlaufstelle einträgst, lass `demo` einfach weg
(oder setze es nicht) – dann erscheint kein Beispiel-Hinweis.

Du kannst die Demo-Dateien jederzeit löschen, sobald genügend echte
Anlaufstellen vorhanden sind.

## 7. Wichtig

- Bitte nur Angaben eintragen, die du geprüft hast oder für die eine
  nachvollziehbare Quelle vorliegt.
- Keine Bewertungen, Rankings oder Empfehlungen einzelner
  Einrichtungen – die Seite informiert neutral.
- Keine personenbezogenen Daten einzelner Privatpersonen, außer es
  handelt sich um öffentliche berufliche Kontaktangaben der Stelle
  selbst (z. B. eine allgemeine Beratungs-Telefonnummer).
