# Anleitung: Newsletter-Landingpage in Brevo einrichten

Diese Anleitung gehört zur Seite `/newsletter/` (Datei
`src/pages/newsletter/index.astro`) und zur Bestätigungsseite
`/newsletter/willkommen/` (Datei `src/pages/newsletter/willkommen/index.astro`).

**Status: eingerichtet.** Das eigene Brevo-Formular „Autismuskompakt –
Newsletter“ (Liste „Autismuskompakt – Newsletter“, Double-Opt-in aktiv) ist
verbunden. Diese Datei dokumentiert den jetzt tatsächlich eingerichteten
Zustand als Referenz für spätere Änderungen.

## 1. Liste/Formular

Es wird bewusst **nicht** dasselbe Formular wie `/kostenloser-leitfaden/`
verwendet, sondern ein eigenes, separates Formular „Autismuskompakt –
Newsletter“ mit eigener Liste „Autismuskompakt – Newsletter“. Wer sich über
`/newsletter/` anmeldet, landet dadurch **nicht** automatisch in der
Leitfaden-Automation und bekommt **nicht** ungefragt den Leitfaden
zugeschickt. Das bestehende Leitfaden-Formular wurde durch diese Einrichtung
nicht verändert.

## 2. Formular-Konfiguration (Ist-Zustand)

| Feld/Einstellung | Wert |
|---|---|
| Formular-Action-URL | `https://8d06c77e.sibforms.com/serve/MUIFALamz7EXR90AoDn-Liem1788vONX3YdCMfh1asTW2grSbmrW4aWXMxl4EAWY52qxMAadK9K16u-WLQVtqFdmP-DbgmweEmI2Pmo02jdIVxptfA1_otAE9oow0rdoqc8-HBmcqHisHfnRG3vtfMabE0r4VUF-eoEfD272UZWZ5NpLkaKRAp9MKqMOpurqgvGMT322O8AnxxMLOw==` |
| E-Mail-Feld | `name="EMAIL"`, Pflichtfeld |
| Einwilligung | `name="OPT_IN"`, `value="1"`, Pflichtfeld, nicht vorausgewählt |
| Honeypot (Spam-Schutz) | `name="email_address_check"`, verstecktes Textfeld |
| Brevo-`locale` (verstecktes Feld) | `en` |
| `data-type` | `subscription` |
| Double-Opt-in | aktiv – Kontakt wird erst nach Klick auf den DOI-Link endgültig in die Liste aufgenommen |
| Weiterleitung nach DOI-Bestätigung | `https://www.autismuskompakt.de/newsletter/willkommen/` (in Brevo hinterlegt, nicht im Code) |
| Separate Weiterleitung direkt nach Formularabsenden | keine – stattdessen Inline-Erfolgsmeldung „Fast geschafft“ auf derselben Seite |
| Zusätzliche Bestätigungsmail nach DOI | deaktiviert |
| AUTOHIDE | aktiviert (`Boolean(1)`) – Formular verschwindet nach erfolgreichem Absenden, Erfolgsmeldung erscheint |

### Zum `locale`-Feld

Das versteckte Brevo-`locale`-Feld steht auf `en`, weil das Formular in Brevo
so angelegt ist. Das betrifft nur interne Brevo-Logik (z. B. Formatannahmen);
**alle sichtbaren Texte auf der Seite bleiben deutsch**, weil sämtliche
Meldungstexte (Erfolg, Fehler, Pflichtfeld, ungültige Eingabe) explizit über
eigene `window.*`-Variablen in `src/pages/newsletter/index.astro`
überschrieben werden und nicht von Brevos Standard-Locale-Texten abhängen.

## 3. Formular-Texte (Ist-Zustand)

- **Erfolgsmeldung:** „Fast geschafft! Wir haben dir eine E-Mail geschickt.
  Bitte klicke auf den Bestätigungslink in dieser E-Mail, um deine Anmeldung
  zum Newsletter abzuschließen. Falls du die E-Mail nicht gleich findest,
  schau bitte auch in deinem Spam-Ordner nach.“
- **Fehlermeldung (Übermittlung fehlgeschlagen):** „Deine Anmeldung konnte
  leider nicht übermittelt werden. Bitte versuche es noch einmal. Sollte es
  weiterhin nicht funktionieren, versuche es bitte zu einem späteren
  Zeitpunkt erneut.“
- **Ungültige Eingabe (E-Mail):** „Bitte überprüfe deine Angaben. Achte
  insbesondere darauf, dass deine E-Mail-Adresse vollständig und korrekt
  eingegeben ist.“
- **Leeres Pflichtfeld:** „Bitte fülle dieses Pflichtfeld aus.“
- **Einwilligungstext (Checkbox):** „Ich möchte den Newsletter von Autismus
  kompakt per E-Mail erhalten. Ich kann meine Einwilligung jederzeit mit
  Wirkung für die Zukunft widerrufen, zum Beispiel über den Abmeldelink in
  jeder E-Mail. Weitere Informationen finde ich in der
  Datenschutzerklärung.“ Der Link „Datenschutzerklärung“ zeigt auf
  `/datenschutz/` (relativer Pfad, entspricht der Projektkonvention und ist
  auf der ausgelieferten Seite identisch zu
  `https://www.autismuskompakt.de/datenschutz/`).

## 4. DOI-Bestätigungsmail

Diese Mail wird **nicht** im Website-Code verwaltet, sondern als
E-Mail-Vorlage in Brevo hinterlegt (Formular- bzw. Listeneinstellungen →
Double-Opt-in-E-Mail). Textvorschlag (unverändert gültig):

**Betreff:**

> Bitte bestätige deine Anmeldung bei Autismuskompakt

**Text:**

> Hallo,
>
> schön, dass du dabei sein möchtest.
>
> Bitte bestätige noch kurz deine E-Mail-Adresse. Damit stellen wir sicher,
> dass wirklich du dich für den Newsletter von Autismuskompakt angemeldet
> hast.
>
> **[Button: E-Mail-Adresse bestätigen]**
>
> Wenn du dich nicht angemeldet hast, kannst du diese E-Mail einfach
> ignorieren – es passiert dann nichts weiter.
>
> Viele Grüße
> Katja von Autismuskompakt

## 5. Externe Ressourcen beim Aufruf von `/newsletter/`

Die Seite lädt genau **eine** externe Ressource: das Brevo-Skript
`https://sibforms.com/forms/end-form/build/main.js` (deklarativ im
`<script>`-Tag der Seite). Es wird **keine** zusätzliche externe
Brevo-Stylesheet-Datei eingebunden – das Formular wird vollständig mit dem
eigenen CSS der Seite gestaltet (Work Sans, bestehende Petrol-/Bronze-Farben,
bestehende Formularoptik), nicht mit Brevos Standarddesign. Dieselbe
Vorgehensweise (nur `main.js`, kein separates Brevo-CSS) ist bereits auf
`/kostenloser-leitfaden/` produktiv im Einsatz.

Ein direkter Netzwerk-Mitschnitt, ob `main.js` selbst zur Laufzeit
zusätzliche Anfragen an weitere Brevo-Domains (z. B. `assets.brevo.com`)
auslöst, war in dieser Arbeitsumgebung technisch nicht möglich (kein
Browser-Werkzeug verfügbar, ausgehende Verbindung zu sibforms.com für eine
statische Prüfung des Skripts wurde von der Netzwerkrichtlinie dieser Sitzung
blockiert). Das ist bewusst als offener Prüfpunkt dokumentiert, nicht
stillschweigend als „unbedenklich“ angenommen.

## 6. Tracking-Einstellungen (weiterhin offen)

Brevo bietet in den Listen-/Kampagnen-Einstellungen häufig standardmäßig
**Öffnungs- und Klickmessung** für versendete Newsletter-Kampagnen an. Das
ist unabhängig vom Anmeldeformular auf der Website und wird durch diese
Umsetzung **nicht aktiviert oder deaktiviert** – bitte selbst entscheiden und
in Brevo unter den Kampagnen- bzw. Kontoeinstellungen kontrollieren, ob
Öffnungs-/Klick-Tracking in den tatsächlich versendeten
Newsletter-Ausgaben aktiv sein soll, und dies ggf. in der
Datenschutzerklärung ergänzen, falls es aktiviert wird.

## 7. Übersicht offener Punkte

| Was | Status |
|---|---|
| Formular-Action-URL | ✅ eingetragen |
| Liste/Formular in Brevo | ✅ eingerichtet (eigene Liste, getrennt vom Leitfaden) |
| Double-Opt-in | ✅ aktiv |
| DOI-Bestätigungsmail-Text | ✅ hinterlegt |
| Weiterleitung nach Bestätigung | ✅ auf `/newsletter/willkommen/` eingerichtet |
| Zusätzliche Bestätigungsmail nach DOI | ✅ bewusst deaktiviert |
| Öffnungs-/Klick-Tracking der Kampagnen | **offen** – bewusst entscheiden |
| Vollständige Netzwerkprüfung von `main.js` zur Laufzeit | **offen** – siehe Abschnitt 5 |
| Vercel-Environment-Variable | nicht erforderlich – kein API-Key, keine serverseitige Anbindung |
