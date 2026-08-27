import type { AuswertbareKategorie, CategoryScore } from "./scoring.ts";
import type { AnswerValue, Answers } from "./types.ts";

/**
 * Rein redaktionelle Rückmeldungs-Inhalte. `paragraphs` werden als Absätze
 * dargestellt, `lists` als Überschrift (optional) + Liste. Keine
 * diagnostischen Aussagen, keine Prozentwerte.
 */
export interface ContentBlock {
  heading: string;
  paragraphs?: string[];
  lists?: Array<{ title?: string; items: string[] }>;
}

export type MainPatternId = "broad_low" | "isolated" | "multi_domain" | "multi_domain_development" | "insufficient_overall";

export interface MainPatternResult {
  id: MainPatternId;
  content: ContentBlock;
}

function istValideUndMindestens(score: CategoryScore, schwelle: number): boolean {
  return score.status === "valid" && (score.percent as number) >= schwelle;
}

const MUSTER_1: ContentBlock = {
  heading: "In diesem Check zeigt sich kein stark ausgeprägtes, breit verteiltes Muster.",
  paragraphs: [
    "In deinen Antworten finden sich einige Erfahrungen, die für dich wichtig sein können. Insgesamt zeigen sie sich in diesem Orientierungscheck aber nicht deutlich über mehrere der für Autismus relevanten Bereiche hinweg.",
    "Das bedeutet nicht, dass Autismus sicher ausgeschlossen ist.",
    "Ein selbst ausgefüllter Orientierungscheck kann unter anderem individuelle Kompensationsstrategien, Schwierigkeiten bei der Selbsteinschätzung und persönliche Entwicklungsverläufe nur begrenzt erfassen.",
    "Wenn du aus anderen Gründen einen begründeten Autismusverdacht hast, darfst du dieser Frage trotzdem weiter nachgehen.",
  ],
};

const MUSTER_2: ContentBlock = {
  heading: "Einzelne Bereiche scheinen für dich besonders wichtig zu sein.",
  paragraphs: [
    "Du beschreibst in mindestens einem Bereich deutliche Besonderheiten oder Belastungen.",
    'Das sollte nicht automatisch zu einem „Autismus-Ergebnis" zusammengerechnet werden.',
    "Sensorische Belastung, ein starkes Bedürfnis nach Vorhersehbarkeit, intensive Interessen oder soziale Erschöpfung können unterschiedliche Ursachen haben.",
    "Trotzdem zeigt dir dein Ergebnis etwas Wichtiges:",
    "Hier gibt es Bedürfnisse oder Belastungen, die es wert sind, ernst genommen zu werden.",
    "Du darfst passende Strategien nutzen, unabhängig davon, welche Erklärung später dafür gefunden wird.",
  ],
};

const MUSTER_3: ContentBlock = {
  heading: "Deine Antworten zeigen ein Muster über mehrere Bereiche hinweg.",
  paragraphs: [
    "Du beschreibst Erfahrungen sowohl im Bereich sozialer Kommunikation als auch in mehreren weiteren Bereichen, die bei Autismus eine Rolle spielen können.",
    "Das kann ein sinnvoller Anlass sein, dich näher mit der Frage nach Autismus zu beschäftigen.",
    "Der Orientierungscheck kann jedoch nicht beurteilen, ob Autismus tatsächlich die beste Erklärung für deine Erfahrungen ist.",
    "Andere neuroentwicklungsbedingte Besonderheiten, psychische Belastungen oder weitere Faktoren können ähnliche Erfahrungen hervorrufen oder zusätzlich vorhanden sein.",
    "Wenn du Klarheit möchtest, kann eine spezialisierte Diagnostik ein sinnvoller nächster Schritt sein.",
  ],
};

const MUSTER_4: ContentBlock = {
  heading: "Deine Antworten zeigen ein länger bestehendes Muster über mehrere Bereiche hinweg.",
  paragraphs: [
    "Du erkennst mehrere der beschriebenen Besonderheiten nicht nur heute, sondern auch rückblickend in deiner Kindheit oder Jugend.",
    "Das ist für die Frage nach Autismus besonders relevant, weil Autismus eine neuroentwicklungsbedingte Besonderheit ist und entsprechende Merkmale bereits in der Entwicklungszeit vorhanden sein müssen.",
    "Dieser Check stellt trotzdem keine Diagnose.",
    "Wenn du möchtest, wäre es nachvollziehbar, deine Beobachtungen zu sammeln und eine auf Autismus im Erwachsenenalter spezialisierte Diagnostik zu erwägen.",
  ],
};

const UNZUREICHENDE_DATEN: ContentBlock = {
  heading: "Einige Bereiche lassen sich noch nicht sinnvoll einordnen.",
  paragraphs: [
    "Du hast bei mehreren Fragen angegeben, dass du sie nicht beurteilen kannst. Deshalb wäre eine zusammenfassende Einordnung hier nicht sinnvoll. Die beantworteten Bereiche können dir trotzdem Hinweise darauf geben, welche Erfahrungen und Bedürfnisse für dich wichtig sind.",
  ],
};

/**
 * Bestimmt das Hauptmuster (Master-Projektauftrag, Abschnitt 17).
 *
 * Randfall (in der Vorlage nicht wörtlich benannt): Ist `social` invalide und
 * sind gleichzeitig weniger als zwei der drei B-Bereiche valide, kann keine
 * der vier benannten Musterregeln geprüft werden UND es liegt keine derart
 * lückenhafte Datenlage vor, dass "insufficient_overall" gerechtfertigt wäre
 * (siehe validCentralCount-Schwelle unten). In diesem Fall wird bewusst
 * konservativ Muster 1 ("kein stark ausgeprägtes, breit verteiltes Muster")
 * als Fallback verwendet – nie eine autismusspezifischere Einordnung.
 */
export function determineMainPattern(
  scores: Record<AuswertbareKategorie, CategoryScore>,
  developmentAnswer: AnswerValue | undefined
): MainPatternResult {
  const social = scores.social;
  const bBereiche = [scores.routine, scores.interests, scores.sensory];

  const validCentralCount = [social, ...bBereiche].filter((s) => s.status === "valid").length;
  if (validCentralCount <= 1) {
    return { id: "insufficient_overall", content: UNZUREICHENDE_DATEN };
  }

  const validBHigh = bBereiche.filter((s) => istValideUndMindestens(s, 55));
  const musterDreiErfuellt = istValideUndMindestens(social, 55) && validBHigh.length >= 2;

  if (musterDreiErfuellt && (developmentAnswer === 3 || developmentAnswer === 4)) {
    return { id: "multi_domain_development", content: MUSTER_4 };
  }
  if (musterDreiErfuellt) {
    return { id: "multi_domain", content: MUSTER_3 };
  }

  // Masking und Regulation dürfen diese Regel ausdrücklich nicht auslösen.
  const isolierterBereichHoch = [social, ...bBereiche].some((s) => istValideUndMindestens(s, 75));
  if (isolierterBereichHoch) {
    return { id: "isolated", content: MUSTER_2 };
  }

  return { id: "broad_low", content: MUSTER_1 };
}

// ---------------------------------------------------------------------------
// Persönliche Rückmeldungsbereiche (Abschnitt 18–24 und Priorisierung 25)
// ---------------------------------------------------------------------------

export type FeedbackArea = "regulation" | "sensory" | "masking" | "social" | "routine" | "interests";

export interface PersonalFeedback {
  area: FeedbackArea;
  content: ContentBlock;
}

const KOERPERSIGNALE_ZUSATZ = {
  heading: "Vielleicht bemerkst du Belastung erst, wenn sie schon ziemlich groß ist.",
  lists: [
    {
      items: [
        "Habe ich Hunger oder Durst?",
        "Muss ich zur Toilette?",
        "Tut etwas weh?",
        "Bin ich angespannt?",
        "Wie voll fühlt sich mein Kopf an?",
        "Brauche ich Ruhe oder Bewegung?",
        "Was würde die nächsten 30 Minuten leichter machen?",
      ],
    },
  ],
};

function regulationMittelwert(answers: Answers): number | null {
  const werte = [answers[28], answers[29]].filter((w): w is 0 | 1 | 2 | 3 | 4 => w !== undefined && w !== null);
  if (werte.length === 0) return null;
  return werte.reduce((a: number, b) => a + b, 0) / werte.length;
}

function ueberlastungFeedback(answers: Answers): ContentBlock | null {
  const mittelwert = regulationMittelwert(answers);
  if (mittelwert === null || mittelwert < 2.5) return null;

  const content: ContentBlock = {
    heading: "Dein System scheint manchmal erst spät zu sagen: Jetzt ist es zu viel.",
    paragraphs: [
      "Vielleicht kennst du Situationen, in denen du lange funktionierst und dann plötzlich kaum noch denken, entscheiden, sprechen oder handeln kannst.",
      "Schau dann nicht nur auf den letzten Auslöser.",
      "Oft haben sich vorher mehrere Belastungen summiert.",
      "Zum Beispiel: Reize + soziale Anforderungen + Entscheidungen + Zeitdruck + Veränderung + wenig Pause",
    ],
  };

  const frage29 = answers[29];
  if (typeof frage29 === "number" && frage29 >= 3) {
    content.paragraphs = [...(content.paragraphs ?? []), KOERPERSIGNALE_ZUSATZ.heading];
    content.lists = [...KOERPERSIGNALE_ZUSATZ.lists];
  }

  return content;
}

function sensorikFeedback(scores: Record<AuswertbareKategorie, CategoryScore>, answers: Answers): ContentBlock | null {
  if (!istValideUndMindestens(scores.sensory, 55)) return null;

  const content: ContentBlock = {
    heading: "Deine Wahrnehmung scheint einen spürbaren Einfluss auf deinen Alltag zu haben.",
    paragraphs: [
      "Du beschreibst mehrere Situationen, in denen Sinneseindrücke intensiv, belastend oder besonders wichtig für deine Regulation sein können.",
      "Sensorische Besonderheiten sind nicht ausschließlich mit Autismus verbunden.",
      "Du brauchst aber keine Diagnose, um deinen Alltag reizärmer oder angenehmer zu gestalten.",
    ],
    lists: [
      {
        title: "Das kannst du direkt ausprobieren",
        items: [
          "Ohrstöpsel oder Kopfhörer",
          "weniger grelles Licht",
          "Sonnenbrille, wenn passend",
          "bequemere oder reizärmere Kleidung",
          "störende Etiketten entfernen",
          "ruhigere Einkaufszeiten",
          "ruhigere Sitzplätze",
          "mehrere Reizquellen nicht gleichzeitig",
          "nach reizintensiven Terminen Erholung einplanen",
        ],
      },
    ],
  };

  const frage21 = answers[21];
  if (typeof frage21 === "number" && frage21 >= 3) {
    content.paragraphs = [
      ...(content.paragraphs ?? []),
      "Vielleicht helfen dir bestimmte Reize sogar bei der Regulation.",
      "Nicht jede sensorische Besonderheit bedeutet Überempfindlichkeit.",
      "Manche Menschen suchen bestimmte Bewegungen, Druck, Oberflächen, Musik, gleichmäßige Geräusche oder andere Sinneseindrücke gezielt auf.",
      "Beobachte, welche Reize dir tatsächlich guttun.",
    ];
  }

  return content;
}

function maskingFeedback(scores: Record<AuswertbareKategorie, CategoryScore>): ContentBlock | null {
  if (!istValideUndMindestens(scores.masking, 55)) return null;
  return {
    heading: "Vielleicht sehen andere Menschen nicht, wie viel Arbeit hinter deinem Alltag steckt.",
    paragraphs: [
      "Du beschreibst verschiedene Strategien, mit denen du soziale Situationen vorbereitest, beobachtest oder dein Verhalten anpasst.",
      "Solche Strategien werden häufig als Masking oder Camouflaging bezeichnet.",
      "Das bedeutet nicht automatisch, dass du autistisch bist.",
      "Aber es kann erklären, warum deine Belastung von außen manchmal unterschätzt wird.",
      "Vielleicht hast du schon einmal gehört:",
      '„Das merkt man dir doch gar nicht an."',
      "Die wichtigere Frage ist nicht, was andere sehen.",
      "Sondern: Wie geht es dir dabei?",
    ],
    lists: [
      {
        title: "Was du ausprobieren kannst",
        items: [
          "Beobachte, in welchen Situationen du dich besonders stark kontrollierst.",
          "Achte darauf, wie erschöpft du danach bist.",
          'Suche nach Situationen, in denen du ein kleines bisschen weniger „funktionieren" musst.',
          "Erlaube dir Pausen nach sozial anstrengenden Situationen.",
          "Nutze schriftliche Kommunikation, wenn sie dir leichter fällt.",
        ],
      },
    ],
  };
}

function sozialeKommunikationFeedback(scores: Record<AuswertbareKategorie, CategoryScore>): ContentBlock | null {
  if (!istValideUndMindestens(scores.social, 55)) return null;
  return {
    heading: "Vieles scheint bei dir über bewusstes Nachdenken zu laufen.",
    paragraphs: [
      "Du beschreibst mehrere Situationen, in denen soziale Kommunikation Aufmerksamkeit oder bewusste Steuerung verlangt.",
      "Vielleicht kannst du Gespräche trotzdem sehr gut führen.",
      "Das widerspricht deiner Erfahrung nicht.",
      "Interessant ist nicht nur: Kann ich das?",
      "Sondern auch: Wie viel Energie kostet es mich?",
    ],
    lists: [
      {
        title: "Beobachte zum Beispiel",
        items: [
          "Einzelgespräch oder Gruppe?",
          "klare oder indirekte Kommunikation?",
          "bekannte oder neue Personen?",
          "vorbereitet oder spontan?",
          "wie erschöpft bin ich anschließend?",
        ],
      },
    ],
  };
}

function routinenFeedback(scores: Record<AuswertbareKategorie, CategoryScore>): ContentBlock | null {
  if (!istValideUndMindestens(scores.routine, 55)) return null;
  return {
    heading: "Planung und Vorhersehbarkeit scheinen deinem System Sicherheit zu geben.",
    paragraphs: [
      "Unklarheit oder kurzfristige Veränderungen können zusätzliche Energie kosten.",
      "Wenn Vorbereitung hilft, darfst du Vorbereitung nutzen.",
    ],
    lists: [
      {
        title: "Das kannst du ausprobieren",
        items: [
          "Abläufe vorher klären",
          "Termine schriftlich bestätigen lassen",
          "Orte vorher anschauen",
          "Übergangszeiten einplanen",
          "einen Plan B überlegen",
          "kurzfristige Veränderungen möglichst nicht mit weiteren Anforderungen kombinieren",
        ],
      },
    ],
  };
}

function interessenFeedback(scores: Record<AuswertbareKategorie, CategoryScore>): ContentBlock | null {
  if (!istValideUndMindestens(scores.interests, 55)) return null;
  return {
    heading: "Deine Interessen scheinen für dich eine wichtige Ressource zu sein.",
    paragraphs: [
      "Intensive Interessen können Freude, Wissen, Struktur, Sicherheit und Erholung geben.",
      "Sie müssen nicht automatisch ein Problem sein.",
    ],
    lists: [
      {
        title: "Wenn Übergänge schwierig werden",
        items: ["Tätigkeit vorher zeitlich begrenzen", "Wechsel ankündigen", "Zwischenstopp einplanen", "nächsten Schritt vorher festlegen"],
      },
    ],
  };
}

/**
 * Wählt maximal drei persönliche Rückmeldungsbereiche in fester
 * Prioritätsreihenfolge aus (Master-Projektauftrag, Abschnitt 25):
 * 1. Überlastung, 2. Sensorik, 3. Masking, 4. soziale Kommunikation,
 * 5. Routinen, 6. Interessen.
 */
export function selectPersonalFeedback(
  scores: Record<AuswertbareKategorie, CategoryScore>,
  answers: Answers
): PersonalFeedback[] {
  const kandidaten: Array<{ area: FeedbackArea; content: ContentBlock | null }> = [
    { area: "regulation", content: ueberlastungFeedback(answers) },
    { area: "sensory", content: sensorikFeedback(scores, answers) },
    { area: "masking", content: maskingFeedback(scores) },
    { area: "social", content: sozialeKommunikationFeedback(scores) },
    { area: "routine", content: routinenFeedback(scores) },
    { area: "interests", content: interessenFeedback(scores) },
  ];

  const ergebnis: PersonalFeedback[] = [];
  for (const kandidat of kandidaten) {
    if (kandidat.content) ergebnis.push({ area: kandidat.area, content: kandidat.content });
    if (ergebnis.length >= 3) break;
  }
  return ergebnis;
}

/**
 * Soforthilfe-Block bei Überlastung (Abschnitt 23). Ausgelöst durch denselben
 * Schwellenwert wie die Überlastungs-Rückmeldung, unabhängig davon, ob dieser
 * Bereich unter den drei angezeigten persönlichen Rückmeldungen ist (siehe
 * Test G: hohe Regulation => Soforthilfe, auch ohne autismusspezifisches
 * Gesamtmuster).
 */
export function selectImmediateHelp(answers: Answers): ContentBlock | null {
  const mittelwert = regulationMittelwert(answers);
  if (mittelwert === null || mittelwert < 2.5) return null;

  return {
    heading: "Soforthilfe bei Überlastung",
    paragraphs: ["Versuche zunächst nicht, alles zu lösen."],
    lists: [
      { title: "Reduziere", items: ["Reize.", "Entscheidungen.", "Kommunikation.", "Anforderungen gleichzeitig."] },
      { title: "Erhöhe", items: ["Zeit.", "Ruhe.", "Vorhersehbarkeit."] },
    ],
  };
}

export const SOFORTHILFE_ABSCHLUSS =
  "Wenn möglich, gehe an einen ruhigeren Ort und verschiebe alles, was gerade nicht dringend ist.";
