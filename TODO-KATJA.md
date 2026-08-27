# Offene Punkte für Katja

Diese Datei sammelt alles, was du selbst noch ausfüllen, entscheiden oder
liefern musst. Sie wird mit jeder Etappe ergänzt.

## Etappe 0 – Fundament

### Impressum (`src/pages/impressum.astro`)

- [ ] Vor- und Nachname
- [ ] Straße und Hausnummer
- [ ] PLZ und Ort
- [ ] Telefonnummer
- [ ] E-Mail-Adresse
- [ ] Umsatzsteuer-ID (falls vorhanden)
- [ ] Prüfen, ob der Absatz zur Streitschlichtung/OS-Plattform auf dich zutrifft

### Datenschutzerklärung (`src/pages/datenschutz.astro`)

- [ ] Stand-Datum eintragen
- [ ] Name, Anschrift, E-Mail als Verantwortliche
- [ ] Genaue Produkt-/Vertragsbezeichnung bei IONOS Deploy Now ergänzen
- [ ] Speicherdauer und Zweck der Server-Logfiles gemäß Angaben von IONOS ergänzen
- [ ] Rechtsgrundlage und Löschfristen für E-Mail-Kontakt ergänzen, sobald ein Kontaktweg (z. B. Kontaktformular oder feste E-Mail-Adresse) feststeht
- [ ] Externe Verkaufsstellen (Shop-Partner) benennen, sobald bekannt
- [ ] Zuständige Landesdatenschutzbehörde eintragen

### Barrierefreiheitserklärung (`src/pages/barrierefreiheit.astro`)

- [ ] Stand-Datum eintragen
- [ ] E-Mail-Adresse für Feedback zu Barrieren eintragen
- [ ] Prüfen, ob eine Schlichtungsstelle nach BGG benannt werden muss (in der Regel nur für öffentliche Stellen – bitte kurz prüfen/gegenprüfen)
- [x] Konformitätsstatus nach der Qualitätssicherung ergänzt (siehe Etappe 5 unten)

### Kostenloser Leitfaden (Header und Materialien)

- [x] Brevo-Anmeldeformular ist jetzt unter `/kostenloser-leitfaden/`
      eingebunden (technische Basis: dein Brevo-HTML-Export, gestalterisch
      an die Website angepasst). Der frühere Platzhalter `TODO_KATJA_BREVO_URL`
      wurde entfernt; alle „Kostenloser Leitfaden“-Schaltflächen zeigen jetzt
      dorthin.
- [ ] Falls du später eine andere Brevo-Liste/-Formular-URL verwenden
      möchtest: `BREVO_LEITFADEN_URL` in `src/lib/constants.ts` zeigt auf
      `/kostenloser-leitfaden/`; die eigentliche Formular-Action-URL steht in
      `src/pages/kostenloser-leitfaden/index.astro` und müsste dort ersetzt
      werden.

## Etappe 1 – Informationsarchitektur

### Shop

Der Shop wurde in Etappe 4 auf ein richtiges Datenmodell umgestellt – die
offenen Punkte dazu stehen jetzt weiter unten unter „Etappe 4“.

### Über mich (`src/pages/ueber-mich/index.astro`)

- [x] Vollständig redaktionell ausformuliert (Vorstellung, Hintergrund,
      Bücher, Haltung, Kontakt) – siehe Etappe „Shop finalisieren + Über
      mich ergänzen“. Kontakt-E-Mail: `autismuskompakt@web.de`.

## Etappe 2 – Content-System

### Beispielartikel als reine Demonstration

Es gibt drei Beispielartikel, die ausschließlich die Struktur des
Content-Systems zeigen. Sie sind bewusst kurz gehalten, mit echten
(aber allgemeinen) Quellen belegt und deutlich als Beispielinhalt
gekennzeichnet:

- [ ] `src/content/artikel/autismus-verstehen/stimming.md` – ausführlichen,
      fachlich geprüften Text ergänzen (oder Artikel bewusst so lassen und
      später ersetzen)
- [ ] `src/content/artikel/rechte-antraege/pflegegrad.md` – vollständige,
      sozialrechtlich geprüfte Fassung nach dem einheitlichen Aufbau aus
      Punkt 16 des Master-Projektauftrags ergänzen
- [ ] `src/content/artikel/besonderheiten-begleiterkrankungen/autismus-und-adhs.md` –
      fachlich geprüften Text ergänzen

### Neue Artikel selbst anlegen

Eine bebilderte Schritt-für-Schritt-Anleitung liegt in
`ANLEITUNG-NEUER-ARTIKEL.md`. Kurzfassung: neue Markdown-Datei im
passenden Kategorie-Ordner unter `src/content/artikel/` anlegen,
Kopfbereich (Frontmatter) ausfüllen, Text schreiben, speichern.

## Etappe 3 – Anlaufstellen-Datenmodell

### Demo-Datensätze ersetzen

Die drei Dateien in `src/content/anlaufstellen/` (`demo-online-beratung.yaml`,
`demo-vor-ort-nrw.yaml`, `demo-sozialrecht-bayern.yaml`) sind **erfundene
Beispieldaten** zur Vorführung der Struktur – keine echten Einrichtungen,
keine echten Telefonnummern/E-Mails/Wartelisten.

- [ ] Echte, geprüfte Anlaufstellen nach und nach ergänzen (Anleitung siehe
      `ANLEITUNG-ANLAUFSTELLEN.md`)
- [ ] Demo-Dateien löschen, sobald genügend echte Einträge vorhanden sind

### Anlaufstellen selbst pflegen

Schritt-für-Schritt-Anleitung in **`ANLEITUNG-ANLAUFSTELLEN.md`**: neue
Anlaufstelle anlegen, Kontaktdaten ändern, Warteliste und Stand-Datum
aktualisieren, alle Felder im Überblick.

### Hinweis zu den Filterseiten

Es gibt jetzt Filterseiten nach Bundesland, Kategorie, Zielgruppe,
Altersgruppe sowie Online/Vor Ort (z. B. `/hilfe-finden/bundesland/bayern/`).
Diese Seiten werden automatisch nur für Werte erzeugt, zu denen es
mindestens einen Eintrag gibt – sie erscheinen also von selbst, sobald du
weitere Anlaufstellen mit neuen Bundesländern/Kategorien anlegst. Eine
interaktive (JavaScript-basierte) Live-Filterung wurde bewusst noch nicht
eingebaut, um die Technik einfach zu halten; falls das später gewünscht
ist, sprich mich gerne an.

## Etappe 4 – Materialien und Shop

### Bücher: echte Angaben ergänzt

- [x] `src/content/produkte/autismus-kompakt.yaml` und
      `src/content/produkte/neuro-kompass.yaml`: echte Verkaufs-URLs (BoD),
      Beschreibung und Cover ergänzt (siehe Etappe „Shop finalisieren“).
- [ ] Entscheiden, welche digitalen Produkte und welches Merchandise als
      Erstes erscheinen sollen (Anleitung: `ANLEITUNG-SHOP.md`); Merchandise
      ist auf der Shop-Seite bereits als „Ab Anfang Oktober 2026“ angekündigt.

### Demo-Datensätze ersetzen/entfernen

- [ ] Materialien: `demo-checkliste.yaml`, `demo-gespraechshilfe-extern.yaml`
      (plus `public/downloads/materialien/beispiel-checkliste.pdf`) durch
      echte Materialien ersetzen bzw. löschen, sobald genug echte vorhanden
      sind (Anleitung: `ANLEITUNG-MATERIALIEN.md`)
- [x] Shop: `demo-workbook.yaml`, `demo-tasse.yaml` entfernt (siehe Etappe
      „Shop finalisieren“).

### Selbst pflegen

Schritt-für-Schritt-Anleitungen in **`ANLEITUNG-MATERIALIEN.md`** und
**`ANLEITUNG-SHOP.md`**: neues Material/Produkt anlegen, Datei bzw. Cover
hinterlegen, Zielgruppen/Kategorien pflegen, Shop-Link später ändern,
Pflichtfelder im Überblick.

### Hinweis zu den Filterseiten

Wie schon bei „Hilfe finden“ gibt es für Materialien Filterseiten nach
Zielgruppe und Materialtyp (z. B. `/materialien/typ/checklisten/`), die
automatisch nur für tatsächlich vorhandene Werte erzeugt werden. Auch hier
bewusst noch keine JavaScript-Live-Filterung – falls das später gewünscht
ist, sprich mich gerne an.

### Hinweis zur Informationsarchitektur

Alle sechs Grundseiten der Hauptnavigation sowie ihre wichtigsten
Unterbereiche sind jetzt angelegt. Die dort gelisteten Einzelthemen (z. B.
„Was ist Autismus?“, einzelne Anlaufstellen, einzelne Materialien) sind noch
keine eigenen Seiten – sie werden erst mit dem Content-System in Etappe 2
sowie den Datenbanken/Bibliotheken in Etappe 3 und 4 mit echten Inhalten
gefüllt.

## Etappe 5 – Qualitätssicherung

### Für die spätere Einrichtung bei IONOS Deploy Now (.htaccess)

- [ ] Damit die 404-Seite (`src/pages/404.astro`) auf dem Apache-Server auch
      wirklich angezeigt wird, muss in der `.htaccess`-Datei später
      `ErrorDocument 404 /404.html` eingetragen werden. Das gehört zur
      Sicherheits-/Weiterleitungs-Konfiguration, die laut Master-Projektauftrag
      ohnehin separat über `.deploy-now/[projektname]/.htaccess.template`
      erfolgt.

### Barrierefreiheitserklärung

- [ ] Die Erklärung wurde um die Ergebnisse der technischen
      Qualitätssicherung ergänzt (siehe `src/pages/barrierefreiheit.astro`).
      Bitte weiterhin `Stand`-Datum und Feedback-E-Mail-Adresse eintragen
      (siehe Etappe 0 oben).

### Neu hinzugekommen in Etappe 5

- Sitemap (`/sitemap-index.xml`) und `robots.txt` wurden ergänzt (über das
  offizielle Astro-Sitemap-Modul, keine externe Abhängigkeit).
- Eine 404-Seite wurde ergänzt (`src/pages/404.astro`).
- Einfache Open-Graph-Metadaten (Titel, Beschreibung, Typ, URL) wurden auf
  allen Seiten ergänzt – ohne externe Abhängigkeit, ohne Bild (kein
  `og:image`, da kein passendes Bild vorhanden ist).
- Zwei kleinere Barrierefreiheits-Korrekturen wurden vorgenommen: eine
  fehlende Zwischenüberschrift auf Filter-Ergebnisseiten sowie eindeutige
  Bezeichnungen für „Quellen“-Abschnitte, wenn mehrere Anlaufstellen-Karten
  auf einer Seite stehen. Details siehe Barrierefreiheitserklärung.
- Externe Links, die noch keine sichtbare ↗-Kennzeichnung hatten (Website
  einer Anlaufstelle, Quellenangaben), wurden zur Konsistenz mit den
  übrigen externen Links ergänzt.
