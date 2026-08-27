/**
 * Statische, nachvollziehbare Synonym-/Keyword-Zuordnung für die interne
 * Suche. Keine KI, keine externe Anfrage – rein clientseitig ausgewertet.
 *
 * Jeder Eintrag: Ein Alltagssprache-Fragment (klein geschrieben, ohne
 * Satzzeichen) und die Suchbegriffe, die bei einem Treffer zusätzlich in
 * die Bewertung einfließen.
 */
export const SEARCH_SYNONYMS: Array<{ pattern: string; keywords: string[] }> = [
  { pattern: "schaffe haushalt nicht", keywords: ["haushalt", "alltag", "assistenz"] },
  { pattern: "haushalt nicht", keywords: ["haushalt", "alltag", "assistenz"] },
  { pattern: "diagnose erwachsene", keywords: ["diagnostik bei erwachsenen", "diagnostik"] },
  { pattern: "diagnostik erwachsene", keywords: ["diagnostik bei erwachsenen", "diagnostik"] },
  { pattern: "widerspruch gdb", keywords: ["gdb", "widerspruch", "rechte und anträge"] },
  { pattern: "geht nicht mehr zur schule", keywords: ["schulabsentismus", "schule"] },
  { pattern: "kind schule", keywords: ["schule und bildung", "schulabsentismus"] },
  { pattern: "arbeit zu viel", keywords: ["arbeitsplatz", "überlastung", "autistischer burnout"] },
  { pattern: "zu viel arbeit", keywords: ["arbeitsplatz", "überlastung", "autistischer burnout"] },
  { pattern: "reizüberflutung", keywords: ["reizverarbeitung", "overload", "reizmanagement"] },
  { pattern: "reizueberflutung", keywords: ["reizverarbeitung", "overload", "reizmanagement"] },
  { pattern: "könnte ich autistisch sein", keywords: ["könnte ich autistisch sein", "diagnostik"] },
  { pattern: "koennte ich autistisch sein", keywords: ["könnte ich autistisch sein", "diagnostik"] },
  { pattern: "bin ich autistisch", keywords: ["könnte ich autistisch sein", "diagnostik"] },
  { pattern: "pflegegrad", keywords: ["pflegegrad", "rechte und anträge"] },
  { pattern: "arzttermin", keywords: ["arzttermine", "gesundheit"] },
  { pattern: "zusammenbruch", keywords: ["meltdown", "shutdown", "overload"] },
  { pattern: "wutanfall", keywords: ["meltdown"] },
  { pattern: "abschalten", keywords: ["shutdown"] },
  { pattern: "ausgebrannt", keywords: ["autistischer burnout"] },
  { pattern: "erschöpft", keywords: ["autistischer burnout", "energie einteilen"] },
  { pattern: "erschoepft", keywords: ["autistischer burnout", "energie einteilen"] },
  { pattern: "mobbing", keywords: ["mobbing und schulabsentismus"] },
  { pattern: "geschwister", keywords: ["geschwister"] },
  { pattern: "suizid", keywords: ["suizidalität", "krise", "telefonseelsorge"] },
  { pattern: "krise", keywords: ["suizidalität", "telefonseelsorge"] },
  { pattern: "diagnostikstelle", keywords: ["diagnostik", "hilfe finden"] },
  { pattern: "beratungsstelle", keywords: ["beratung", "hilfe finden"] },
  { pattern: "wohnen", keywords: ["wohnen und assistenz"] },
  { pattern: "verstecktes verhalten", keywords: ["masking"] },
  { pattern: "camouflaging", keywords: ["masking"] },

  // Ergänzungen für die Download- und Materialien-Etappe (Alltagssprache).
  { pattern: "glaube ich bin autistisch", keywords: ["autismusverdacht", "könnte ich autistisch sein"] },
  { pattern: "ich bin autistisch", keywords: ["autismusverdacht", "könnte ich autistisch sein"] },
  { pattern: "muss einen antrag stellen", keywords: ["antrag vorbereiten", "gdb", "pflegegrad"] },
  { pattern: "antrag stellen", keywords: ["antrag vorbereiten"] },
  { pattern: "bescheid ist falsch", keywords: ["widerspruch", "bescheid-check"] },
  { pattern: "mein bescheid", keywords: ["widerspruch", "bescheid-check"] },
  { pattern: "familie mich unterstützen", keywords: ["so kannst du mich unterstützen", "familie"] },
  { pattern: "familie unterstuetzen", keywords: ["so kannst du mich unterstützen", "familie"] },
  { pattern: "mit ins krankenhaus", keywords: ["krankenhaus- & notfallinformation", "notfall"] },
  { pattern: "weiß nicht welche hilfe", keywords: ["welche unterstützung brauche ich", "hilfe finden"] },
  { pattern: "weiss nicht welche hilfe", keywords: ["welche unterstützung brauche ich", "hilfe finden"] },
  { pattern: "diagnose bekommen", keywords: ["nach der diagnose", "diagnose"] },
  { pattern: "telefonieren", keywords: ["telefonat vorbereiten", "kommunikation"] },
  { pattern: "einarbeitung", keywords: ["einarbeitungsplan", "arbeitsplatz"] },
];

/**
 * Kurze, sehr häufige deutsche Funktionswörter. Werden aus der
 * Einzelwort-Zerlegung ausgeschlossen, damit z. B. "zu" nicht zufällig in
 * Wörtern wie "Zustimmung" oder "zusätzlich" anschlägt.
 */
const STOPWORDS = new Set([
  "ich",
  "du",
  "er",
  "sie",
  "es",
  "wir",
  "ihr",
  "ist",
  "sind",
  "war",
  "waren",
  "der",
  "die",
  "das",
  "den",
  "dem",
  "des",
  "ein",
  "eine",
  "einen",
  "einem",
  "einer",
  "und",
  "oder",
  "nicht",
  "kein",
  "keine",
  "mehr",
  "nur",
  "auch",
  "schon",
  "noch",
  "sehr",
  "viel",
  "wenig",
  "zu",
  "im",
  "am",
  "zur",
  "zum",
  "vom",
  "für",
  "fuer",
  "mit",
  "bei",
  "um",
  "wie",
  "was",
  "wer",
  "wo",
  "hat",
  "habe",
  "haben",
  "kann",
  "können",
  "koennen",
  "soll",
  "sollte",
  "muss",
  "geht",
  "gerade",
]);

/** Entfernt Satzzeichen, mehrfache Leerzeichen, macht klein. */
export function normalizeQuery(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[.,;:!?'"()/\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export interface ExpandedQuery {
  /** Ganze (Teil-)Phrasen, per Teilstring-Suche geprüft. */
  phraseTerms: string[];
  /** Einzelwörter (ohne Füllwörter), per Wortgrenzen-Suche geprüft. */
  wordTerms: string[];
}

/**
 * Zerlegt eine Nutzereingabe in Phrasen- und Wort-Suchbegriffe, inklusive
 * statischem Synonym-Abgleich (siehe SEARCH_SYNONYMS).
 */
export function expandQuery(rawQuery: string): ExpandedQuery {
  const normalized = normalizeQuery(rawQuery);
  if (!normalized) return { phraseTerms: [], wordTerms: [] };

  const phraseTerms = new Set<string>([normalized]);
  const wordTerms = new Set<string>();

  for (const word of normalized.split(" ")) {
    if (word.length >= 3 && !STOPWORDS.has(word)) wordTerms.add(word);
  }

  for (const { pattern, keywords } of SEARCH_SYNONYMS) {
    if (normalized.includes(pattern)) {
      for (const keyword of keywords) phraseTerms.add(keyword.toLowerCase());
    }
  }

  return { phraseTerms: [...phraseTerms], wordTerms: [...wordTerms] };
}
