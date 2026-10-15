import type { bundeslandLabels } from "../content.config";

type Bundesland = keyof typeof bundeslandLabels;

// Zentrale, CMS-unabhängige Datenstruktur für die redaktionellen SEO-Texte
// der 16 Bundesland-Anlaufstellenseiten (SEO-Audit Phase 5, freigegeben
// 2026-10-15). Jede Angabe (Trefferzahl, Kategorien) wurde gegen die
// tatsächlichen Einträge in src/content/anlaufstellen/*.yaml verifiziert,
// keine Angabe ist erfunden. Bei einer WordPress-Migration lässt sich diese
// Struktur unverändert auf die Beschreibungsfelder der entsprechenden
// Taxonomie-Terme ("Bundesland") übertragen, ohne dass sich URLs ändern.
export interface BundeslandSeoEintrag {
  /** Vollständiger, markengebundener <title>. */
  seoTitle: string;
  /** <meta name="description">. */
  metaDescription: string;
  /** Kurzer, sachlicher Einleitungstext oberhalb der Anlaufstellen-Liste. */
  introText: string;
}

// Gemeinsamer, zentral gepflegter Hinweis zu Datenaktualität und
// Verfügbarkeit - ersetzt die zuvor in jedem einzelnen Einleitungstext
// wiederholte Einzelformulierung. Nur an einer Stelle gepflegt, einmal pro
// Seite ausgegeben (siehe AnlaufstellenFilterLayout.astro). Das Stand-Datum
// entspricht dem zuletzt tatsächlich recherchierten Stand (siehe auch
// src/pages/hilfe-finden/index.astro) und wird nur bei einer erneuten
// Datenprüfung aktualisiert, nicht automatisch.
export const ANLAUFSTELLEN_DATENHINWEIS =
  "Die Einträge geben einen Überblick über mögliche Anlaufstellen. Kategorien beschreiben die thematische Zuordnung, nicht automatisch aktuell verfügbare Leistungen oder freie Termine. Bitte erkundige dich direkt bei der jeweiligen Einrichtung. Stand: 27.08.2026.";

export const BUNDESLAND_SEO: Record<Bundesland, BundeslandSeoEintrag> = {
  "baden-wuerttemberg": {
    seoTitle: "Autismus-Anlaufstellen in Baden-Württemberg | AUTISMUS kompakt",
    metaDescription:
      "11 Anlaufstellen für Autismus in Baden-Württemberg, mit Schwerpunkten in Diagnostik, Beratung und Therapie – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "In Baden-Württemberg sind derzeit 11 Anlaufstellen zum Thema Autismus verzeichnet. Die meisten davon sind den Kategorien Diagnostik und Beratung zugeordnet, mehrere zusätzlich der Therapie. Die Kategorisierung beschreibt den thematischen Schwerpunkt der jeweiligen Einrichtung.",
  },
  bayern: {
    seoTitle: "Autismus-Anlaufstellen in Bayern | AUTISMUS kompakt",
    metaDescription:
      "12 Anlaufstellen für Autismus in Bayern, überwiegend im Bereich Beratung, dazu Diagnostik und Therapie – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "Für Bayern listet dieses Verzeichnis aktuell 12 Anlaufstellen zum Thema Autismus. Die größte Gruppe ist der Kategorie Beratung zugeordnet, ergänzt um Diagnostik und Therapie.",
  },
  berlin: {
    seoTitle: "Autismus-Anlaufstellen in Berlin | AUTISMUS kompakt",
    metaDescription:
      "12 Anlaufstellen für Autismus in Berlin mit klarem Schwerpunkt Diagnostik, dazu Therapie und Beratung – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "12 Anlaufstellen zum Thema Autismus sind für Berlin erfasst – mit einem deutlichen Schwerpunkt im Bereich Diagnostik. Einzelne Einrichtungen sind zusätzlich der Therapie oder Beratung zugeordnet.",
  },
  brandenburg: {
    seoTitle: "Autismus-Anlaufstellen in Brandenburg | AUTISMUS kompakt",
    metaDescription:
      "11 Anlaufstellen für Autismus in Brandenburg mit breitem Spektrum von Beratung über Therapie bis Fachberatung – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "Brandenburg verzeichnet 11 Anlaufstellen zum Thema Autismus mit einem vergleichsweise breiten Kategorien-Spektrum: Beratung, Therapie, Diagnostik, Alltagshilfe, Fachberatung und Selbsthilfe sind jeweils vertreten.",
  },
  bremen: {
    seoTitle: "Autismus-Anlaufstellen in Bremen | AUTISMUS kompakt",
    metaDescription:
      "7 Anlaufstellen für Autismus in Bremen, vor allem in den Bereichen Beratung und Therapie – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "Für Bremen sind 7 Anlaufstellen zum Thema Autismus erfasst, die meisten davon den Kategorien Beratung und Therapie zugeordnet.",
  },
  hamburg: {
    seoTitle: "Autismus-Anlaufstellen in Hamburg | AUTISMUS kompakt",
    metaDescription:
      "11 Anlaufstellen für Autismus in Hamburg mit breitem Angebot von Diagnostik über Beratung bis Selbsthilfe – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "Hamburg verzeichnet 11 Anlaufstellen zum Thema Autismus – mit der größten Kategorienvielfalt aller Bundesländer in diesem Verzeichnis: Diagnostik, Beratung, Therapie, Selbsthilfe, Fachberatung, Alltagshilfe und Angehörigenberatung sind vertreten.",
  },
  hessen: {
    seoTitle: "Autismus-Anlaufstellen in Hessen | AUTISMUS kompakt",
    metaDescription:
      "9 Anlaufstellen für Autismus in Hessen, schwerpunktmäßig Therapie und Beratung, dazu Diagnostik – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "In Hessen sind 9 Anlaufstellen zum Thema Autismus verzeichnet, mit annähernd gleich großen Gruppen in Therapie und Beratung sowie mehreren Einrichtungen im Bereich Diagnostik. Zwei Einträge sind zudem der Angehörigenberatung zugeordnet.",
  },
  "mecklenburg-vorpommern": {
    seoTitle: "Autismus-Anlaufstellen in Mecklenburg-Vorpommern | AUTISMUS kompakt",
    metaDescription:
      "10 Anlaufstellen für Autismus in Mecklenburg-Vorpommern, vor allem Therapie und Beratung, dazu Diagnostik – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "Für Mecklenburg-Vorpommern listet dieses Verzeichnis 10 Anlaufstellen zum Thema Autismus. Die meisten sind den Kategorien Therapie und Beratung zugeordnet, mehrere zusätzlich der Diagnostik.",
  },
  niedersachsen: {
    seoTitle: "Autismus-Anlaufstellen in Niedersachsen | AUTISMUS kompakt",
    metaDescription:
      "12 Anlaufstellen für Autismus in Niedersachsen, mit Schwerpunkten in Therapie, Beratung und Diagnostik – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "Niedersachsen verzeichnet 12 Anlaufstellen zum Thema Autismus, mit annähernd gleich starken Schwerpunkten in Therapie und Beratung sowie einer größeren Gruppe im Bereich Diagnostik. Mehrere Einrichtungen sind zudem der Alltagshilfe zugeordnet.",
  },
  "nordrhein-westfalen": {
    seoTitle: "Autismus-Anlaufstellen in Nordrhein-Westfalen | AUTISMUS kompakt",
    metaDescription:
      "13 Autismus-Anlaufstellen in Nordrhein-Westfalen finden. Übersicht mit Schwerpunkten in Therapie, Beratung und Diagnostik.",
    introText:
      "Nordrhein-Westfalen verzeichnet 13 Anlaufstellen zum Thema Autismus – mehr als jedes andere Bundesland in diesem Verzeichnis. Der klare Schwerpunkt liegt bei Therapie-Angeboten, ergänzt um Beratung und Diagnostik.",
  },
  "rheinland-pfalz": {
    seoTitle: "Autismus-Anlaufstellen in Rheinland-Pfalz | AUTISMUS kompakt",
    metaDescription:
      "8 Anlaufstellen für Autismus in Rheinland-Pfalz, vor allem in Therapie und Beratung, dazu Diagnostik – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "Für Rheinland-Pfalz sind 8 Anlaufstellen zum Thema Autismus erfasst, mit annähernd gleich großen Gruppen in Therapie und Beratung. Einzelne Einträge sind zusätzlich der Diagnostik, Selbsthilfe oder Fachberatung zugeordnet.",
  },
  saarland: {
    seoTitle: "Autismus-Anlaufstellen im Saarland | AUTISMUS kompakt",
    metaDescription:
      "9 Anlaufstellen für Autismus im Saarland, mit Schwerpunkt Therapie, dazu Beratung und Diagnostik – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "Im Saarland sind 9 Anlaufstellen zum Thema Autismus verzeichnet, mit einem Schwerpunkt im Bereich Therapie sowie mehreren Einrichtungen in Beratung und Diagnostik.",
  },
  sachsen: {
    seoTitle: "Autismus-Anlaufstellen in Sachsen | AUTISMUS kompakt",
    metaDescription:
      "5 Autismus-Anlaufstellen in Sachsen finden. Übersicht zu Diagnostik, Beratung, Therapie, Alltagshilfe und Fachberatung.",
    introText:
      "Sachsen verzeichnet mit 5 Anlaufstellen die kleinste Gruppe in diesem Verzeichnis – dafür über fünf verschiedene Kategorien gestreut: Fachberatung, Alltagshilfe, Diagnostik, Beratung und Therapie sind jeweils vertreten.",
  },
  "sachsen-anhalt": {
    seoTitle: "Autismus-Anlaufstellen in Sachsen-Anhalt | AUTISMUS kompakt",
    metaDescription:
      "7 Autismus-Anlaufstellen in Sachsen-Anhalt entdecken. Informationen zu Diagnostik, Therapie, Alltagshilfe und Beratung.",
    introText:
      "Für Sachsen-Anhalt sind 7 Anlaufstellen zum Thema Autismus erfasst, mit einer recht gleichmäßigen Verteilung über Diagnostik, Therapie, Alltagshilfe und Beratung.",
  },
  "schleswig-holstein": {
    seoTitle: "Autismus-Anlaufstellen in Schleswig-Holstein | AUTISMUS kompakt",
    metaDescription:
      "7 Anlaufstellen für Autismus in Schleswig-Holstein, mit Schwerpunkt Therapie, dazu Diagnostik und Fachberatung – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "Schleswig-Holstein verzeichnet 7 Anlaufstellen zum Thema Autismus, mit einem Schwerpunkt im Bereich Therapie sowie mehreren Einrichtungen in Diagnostik und Fachberatung.",
  },
  thueringen: {
    seoTitle: "Autismus-Anlaufstellen in Thüringen | AUTISMUS kompakt",
    metaDescription:
      "9 Anlaufstellen für Autismus in Thüringen, mit Diagnostik und Therapie als größten Kategorien – für autistische Menschen, Angehörige und Fachkräfte.",
    introText:
      "In Thüringen sind 9 Anlaufstellen zum Thema Autismus verzeichnet, mit annähernd gleich starken Schwerpunkten in Diagnostik und Therapie. Mehrere Einrichtungen sind zusätzlich Beratung, Alltagshilfe oder Fachberatung zugeordnet.",
  },
};
