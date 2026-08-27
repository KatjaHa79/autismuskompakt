// Verknüpfung von Fachartikeln zu inhaltlich passenden Downloads (Etappe:
// Download- und Materialienbereich). Nur echte thematische Passung, keine
// mechanische Verlinkung auf jeder Seite (siehe Master-Projektauftrag,
// Abschnitt N). Schlüssel = Artikel-`entry.id`, Werte = Material-`entry.id`.
export const PASSENDE_MATERIALIEN: Record<string, string[]> = {
  // Diagnostik & Tests
  "diagnostik-tests/koennte-ich-autistisch-sein": [
    "01-autismusverdacht-was-jetzt",
    "10-mein-persoenliches-autismus-profil",
  ],
  "diagnostik-tests/vorbereitung-auf-die-diagnostik": ["02-vorbereitung-autismusdiagnostik"],
  "diagnostik-tests/ablauf-der-diagnostik": ["02-vorbereitung-autismusdiagnostik"],
  "diagnostik-tests/screeningtests": ["13-online-test-ergebnis-einordnen"],
  "diagnostik-tests/ergebnis-der-diagnostik": ["33-nach-der-autismusdiagnose-was-jetzt"],
  "diagnostik-tests/nach-der-diagnose": ["33-nach-der-autismusdiagnose-was-jetzt"],

  // Autismus verstehen
  "autismus-verstehen/autistischer-burnout": ["03-belastungs-energie-check", "17-wochenplan-mit-erholungszeiten"],
  "autismus-verstehen/reizverarbeitung": ["12-was-hilft-mir-was-belastet-mich"],
  "autismus-verstehen/routinen-und-veraenderungen": ["20-veraenderungen-vorbereiten"],

  // Alltag & Leben
  "alltag-leben/arbeit": ["05-arbeit-ausbildung-studium", "21-einarbeitungsplan-neuer-arbeitsplatz"],
  "alltag-leben/ausbildung-und-studium": ["05-arbeit-ausbildung-studium"],
  "alltag-leben/arzttermine": ["04-arzttermin-vorbereitung"],
  "alltag-leben/behoerdenkontakte": ["22-antrag-vorbereiten-unterlagen-fristen"],
  "alltag-leben/einkaufen-haushalt-und-essen": ["19-haushalt-in-kleinen-schritten"],
  "alltag-leben/ergotherapie-logopaedie-und-aac": ["11-so-kommuniziere-ich-am-besten"],
  "alltag-leben/familie-und-konflikte": ["25-gespraechsvereinbarung-paare-familien"],
  "alltag-leben/kommunikation-im-alltag": ["11-so-kommuniziere-ich-am-besten"],
  "alltag-leben/krankenhaus-notaufnahme-und-zahnarzt": ["28-krankenhaus-notfallinformation"],
  "alltag-leben/naehe-rueckzug-und-alleinzeit": ["24-rueckzug-ohne-missverstaendnisse"],
  "alltag-leben/partnerschaft-und-freundschaften": ["25-gespraechsvereinbarung-paare-familien"],
  "alltag-leben/psychotherapie-und-medikamente": ["30-medikamentenuebersicht", "31-therapieangebot-kritisch-pruefen"],
  "alltag-leben/reizmanagement-im-alltag": ["12-was-hilft-mir-was-belastet-mich"],
  "alltag-leben/schlaf-im-alltag": ["14-schlafprotokoll-14-tage"],
  "alltag-leben/schmerzen-und-koerperliche-symptome": ["29-mein-schmerzprofil"],
  "alltag-leben/tagesstruktur-und-uebergaenge": ["17-wochenplan-mit-erholungszeiten"],
  "alltag-leben/therapieangebote-kritisch-pruefen": ["31-therapieangebot-kritisch-pruefen"],
  "alltag-leben/wohnen-und-assistenz": ["26-uebergang-ins-erwachsenenleben"],

  // Angehörige & Fachkräfte
  "angehoerige-fachkraefte/autistisches-kind-begleiten": ["23-so-kannst-du-mich-unterstuetzen"],
  "angehoerige-fachkraefte/eigene-entlastung-fuer-angehoerige": ["27-unterstuetzen-oder-uebernehmen"],
  "angehoerige-fachkraefte/eltern-nach-der-diagnose": ["33-nach-der-autismusdiagnose-was-jetzt"],
  "angehoerige-fachkraefte/mobbing-und-schulabsentismus": ["06-schule-bildung-unterstuetzungsprofil"],
  "angehoerige-fachkraefte/nachteilsausgleich-und-schulbegleitung": ["06-schule-bildung-unterstuetzungsprofil"],
  "angehoerige-fachkraefte/partnerschaft-und-spaete-diagnose": ["25-gespraechsvereinbarung-paare-familien"],
  "angehoerige-fachkraefte/schule-und-bildung": ["06-schule-bildung-unterstuetzungsprofil"],
  "angehoerige-fachkraefte/uebergang-ins-erwachsenenalter": ["26-uebergang-ins-erwachsenenleben"],
  "angehoerige-fachkraefte/unterstuetzung-ohne-bevormundung": ["27-unterstuetzen-oder-uebernehmen"],

  // Besonderheiten & Begleiterkrankungen
  "besonderheiten-begleiterkrankungen/migraene-und-kopfschmerzen": ["15-kopfschmerz-migraene-tagebuch"],
  "besonderheiten-begleiterkrankungen/schlafstoerungen": ["14-schlafprotokoll-14-tage"],
  "besonderheiten-begleiterkrankungen/selektives-essen-und-arfid": ["16-essens-und-ernaehrungsbeobachtung"],
  "besonderheiten-begleiterkrankungen/sprache-und-kommunikation": ["11-so-kommuniziere-ich-am-besten"],

  // Rechte & Anträge
  "rechte-antraege/gdb": ["07-gdb-antrag-vorbereitung", "22-antrag-vorbereiten-unterlagen-fristen"],
  "rechte-antraege/pflegegrad": ["08-pflegegrad-begutachtung-vorbereitung"],
  "rechte-antraege/widerspruch-klage-und-akteneinsicht": ["09-widerspruch-bescheid-check"],
  "rechte-antraege/eingliederungshilfe-und-assistenz": ["22-antrag-vorbereiten-unterlagen-fristen"],
  "rechte-antraege/erwerbsminderungsrente": ["22-antrag-vorbereiten-unterlagen-fristen"],
  "rechte-antraege/persoenliches-budget": ["22-antrag-vorbereiten-unterlagen-fristen"],
};
