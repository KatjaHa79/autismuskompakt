# Anleitung: Newsletter-Landingpage in Brevo einrichten

Diese Anleitung gehört zur neuen Seite `/newsletter/` (Datei
`src/pages/newsletter/index.astro`) und zur Bestätigungsseite
`/newsletter/willkommen/` (Datei `src/pages/newsletter/willkommen/index.astro`).
Der Website-Code ist fertig; damit sich Interessierte darüber tatsächlich
für den Newsletter anmelden können, fehlen noch ein paar Einstellungen, die
sich nur in deinem Brevo-Konto vornehmen lassen.

## 1. Entscheidung: eigene Liste oder bestehende Liste?

Die bisherige Seite `/kostenloser-leitfaden/` meldet Interessierte für
"Leitfaden + Newsletter" gemeinsam an (eine Checkbox, ein Formular, eine
Liste). Die neue Seite `/newsletter/` ist bewusst *ohne* Leitfaden-Bezug
formuliert – wer sich dort anmeldet, erwartet nur den Newsletter, nicht
automatisch den Leitfaden.

Bitte entscheide, wie du das in Brevo abbilden möchtest:

- **Option A (empfohlen, wenn beide Zielgruppen inhaltlich denselben
  Newsletter erhalten sollen):** Beide Formulare tragen in dieselbe
  Brevo-Liste ein. Dann reicht ein bestehendes Formular; du musst nur die
  Formular-Action-URL wiederverwenden.
- **Option B (sauberer trennbar, mehr Aufwand):** Eine eigene Liste
  "Newsletter (ohne Leitfaden)" anlegen, damit du später unterscheiden
  kannst, wer den Leitfaden bereits hat und wer nicht.

Ich habe **keine eigene Liste erfunden und keine bestehende ID
wiederverwendet**, weil ich nicht sicher weiß, ob deine
Leitfaden-Automation (die nach Bestätigung automatisch den Leitfaden
verschickt) an die Liste oder an das Formular gebunden ist. Würde ich
einfach dieselbe Formular-URL wie bei `/kostenloser-leitfaden/`
eintragen, könnten Newsletter-only-Anmeldungen ungewollt auch den
Leitfaden-Versand auslösen. Bitte prüfe das in deiner Brevo-Automation,
bevor du dich für Option A oder B entscheidest.

## 2. Formular in Brevo anlegen

1. In Brevo einloggen → **Kontakte → Formulare** (bzw. "Contacts → Forms").
2. Neues Formular vom Typ **"Abonnement" / "Subscription"** anlegen (oder
   das bestehende Leitfaden-Formular duplizieren, falls du Option A
   gewählt hast).
3. Zielliste auswählen bzw. neue Liste "Newsletter" anlegen (Option B).
4. **Double-Opt-in aktivieren** (in den Formular- bzw. Listeneinstellungen
   "Double opt-in" einschalten, falls nicht schon auf Kontoebene aktiv).
5. Feld **E-Mail** als Pflichtfeld belassen. Ein Vorname-Feld wird bewusst
   **nicht** verwendet (siehe Abschlussbericht – Datenminimierung).
6. Bestätigungs-E-Mail-Vorlage (DOI-Mail) einrichten – Text siehe Abschnitt 4
   unten.
7. **Weiterleitungs-URL nach Bestätigung** eintragen:
   `https://autismuskompakt.de/newsletter/willkommen/`
8. Formular speichern und den **HTML-Code exportieren**
   ("Share" / "Formularcode" / "Embed-Code").

## 3. Formular-Action-URL in den Code eintragen

In `src/pages/newsletter/index.astro` findest du diese Zeile:

```html
action="TODO_KATJA_BREVO_NEWSLETTER_FORM_ACTION_URL"
```

Ersetze `TODO_KATJA_BREVO_NEWSLETTER_FORM_ACTION_URL` durch die echte
`action`-URL aus deinem Brevo-Formular-Export (beginnt meist mit
`https://xxxxxxxx.sibforms.com/serve/...`).

Prüfe beim Export außerdem, ob die **Feldnamen** in deinem Export mit dem
Code übereinstimmen (`EMAIL`, `OPT_IN`, verstecktes Feld
`email_address_check` als Spam-Schutz, verstecktes Feld `locale`). Falls
Brevo für deine neue Liste andere interne Feldnamen vergibt, übernimm diese
Namen aus deinem Export – die Gestaltung (CSS-Klassen) kannst du dabei
unverändert lassen.

**Wichtig:** Diese Formular-URL ist kein Geheimnis/API-Key – sie darf
öffentlich im HTML stehen, genau wie beim bestehenden Leitfaden-Formular.
Ein echter Brevo-API-Key darf dagegen niemals in den Code oder ins
Repository – den gibt es hier auch nicht, weil die Anmeldung technisch
komplett über das eingebettete Brevo-Formular läuft (kein eigener
Server, kein API-Aufruf aus dem Code).

## 4. Textvorschlag für die Brevo-DOI-Bestätigungsmail

Diese Mail wird **nicht** im Website-Code verwaltet, sondern als
E-Mail-Vorlage in Brevo hinterlegt (Formular- bzw. Listeneinstellungen →
Double-Opt-in-E-Mail).

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

Der Bestätigungs-Button/Link wird von Brevo automatisch eingefügt
(Platzhalter in der Vorlage, z. B. `{{ confirmation_link }}` je nach
Brevo-Editor).

## 5. Tracking-Einstellungen prüfen

Brevo bietet in den Listen-/Kampagnen-Einstellungen häufig standardmäßig
**Öffnungs- und Klickmessung** für versendete Newsletter-Kampagnen an. Das
ist unabhängig vom Anmeldeformular auf der Website und wird durch diese
Umsetzung **nicht aktiviert oder deaktiviert** – bitte selbst entscheiden
und in Brevo unter den Kampagnen- bzw. Kontoeinstellungen kontrollieren,
ob Öffnungs-/Klick-Tracking in den tatsächlich versendeten
Newsletter-Ausgaben aktiv sein soll, und dies ggf. in der
Datenschutzerklärung ergänzen, falls es aktiviert wird.

## 6. Redirect-URL, ID, Environment Variables – Übersicht

| Was | Wo einzutragen | Status |
|---|---|---|
| Formular-Action-URL | `src/pages/newsletter/index.astro`, Attribut `action` | **offen** – Platzhalter ersetzen |
| Liste/Formular in Brevo (Option A oder B) | Brevo-Dashboard | **offen** – Entscheidung nötig |
| Double-Opt-in aktivieren | Brevo-Formular-/Listeneinstellungen | **offen** – prüfen/aktivieren |
| DOI-Bestätigungsmail-Text | Brevo-Formular-/Listeneinstellungen | **offen** – Text aus Abschnitt 4 einfügen |
| Weiterleitung nach Bestätigung | Brevo-Formular-/Listeneinstellungen | **offen** – `https://autismuskompakt.de/newsletter/willkommen/` eintragen |
| Öffnungs-/Klick-Tracking der Kampagnen | Brevo-Kampagnen-/Kontoeinstellungen | **offen** – bewusst entscheiden |
| Vercel-Environment-Variable | – | **nicht erforderlich** – kein API-Key, keine serverseitige Anbindung |
