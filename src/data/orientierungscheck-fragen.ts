import type { AnswerOption, Question } from "../lib/orientierungscheck/types.ts";

// Zentrale Datenquelle für den Autismuskompakt-Orientierungscheck. Fragetexte
// nur hier pflegen, nicht in Komponenten duplizieren (Master-Projektauftrag,
// Abschnitt 9).
export const ANTWORTOPTIONEN: AnswerOption[] = [
  { label: "Trifft gar nicht zu", value: 0 },
  { label: "Trifft eher nicht zu", value: 1 },
  { label: "Trifft teilweise zu", value: 2 },
  { label: "Trifft eher zu", value: 3 },
  { label: "Trifft sehr zu", value: 4 },
  { label: "Kann ich nicht beurteilen", value: null },
];

export const FRAGEN: Question[] = [
  // Soziale Kommunikation und gegenseitiges Verstehen (1–8)
  {
    id: 1,
    category: "social",
    text: "In Gesprächen muss ich manchmal bewusst überlegen, wann ich sprechen, reagieren oder etwas nachfragen sollte.",
  },
  {
    id: 2,
    category: "social",
    text: "Es fällt mir manchmal schwer einzuschätzen, was jemand indirekt meint, wenn es nicht ausdrücklich gesagt wird.",
  },
  {
    id: 3,
    category: "social",
    text: "Ich fühle mich in Gesprächen wohler, wenn Menschen klar und eindeutig sagen, was sie meinen.",
  },
  {
    id: 4,
    category: "social",
    text: "Smalltalk oder Gespräche ohne konkretes Thema können für mich anstrengend oder schwer greifbar sein.",
  },
  {
    id: 5,
    category: "social",
    text: "Es passiert mir, dass andere Menschen meine Aussagen anders verstehen, als ich sie gemeint habe.",
  },
  {
    id: 6,
    category: "social",
    text: "Ich habe manchmal Schwierigkeiten einzuschätzen, wie viel Nähe, Kontakt oder Austausch eine andere Person gerade erwartet.",
  },
  {
    id: 7,
    category: "social",
    text: "Gruppengespräche sind für mich schwieriger als Gespräche mit einer einzelnen Person.",
  },
  {
    id: 8,
    category: "social",
    text: "Auch angenehme soziale Kontakte können mich anschließend deutlich erschöpfen.",
  },

  // Vorhersehbarkeit, Routinen und Wechsel (9–13)
  { id: 9, category: "routine", text: "Es hilft mir sehr, im Voraus zu wissen, wie etwas ablaufen wird." },
  {
    id: 10,
    category: "routine",
    text: "Unerwartete Änderungen können mich stärker belasten, als Außenstehende vielleicht vermuten würden.",
  },
  {
    id: 11,
    category: "routine",
    text: "Bestimmte Routinen, Reihenfolgen oder vertraute Vorgehensweisen geben mir Sicherheit.",
  },
  {
    id: 12,
    category: "routine",
    text: "Wenn ich eine Tätigkeit unterbrechen und zu etwas anderem wechseln muss, brauche ich manchmal Zeit, um mich darauf einzustellen.",
  },
  {
    id: 13,
    category: "routine",
    text: "Unklare Situationen ohne erkennbare Regeln oder Erwartungen können mich stark verunsichern.",
  },

  // Intensive Interessen und Aufmerksamkeit (14–17)
  {
    id: 14,
    category: "interests",
    text: "Es gibt oder gab Themen, mit denen ich mich außergewöhnlich intensiv beschäftigen kann.",
  },
  {
    id: 15,
    category: "interests",
    text: "Wenn mich etwas interessiert, möchte ich häufig sehr genau verstehen, wie es funktioniert oder wie einzelne Details zusammenhängen.",
  },
  {
    id: 16,
    category: "interests",
    text: "Bestimmte Interessen geben mir besonders viel Freude, Sicherheit, Ruhe oder Energie.",
  },
  {
    id: 17,
    category: "interests",
    text: "Wenn ich mit etwas beschäftigt bin, das mich stark interessiert, kann es schwierig sein, meine Aufmerksamkeit davon wegzulenken.",
  },

  // Wahrnehmung und sensorische Verarbeitung (18–22)
  {
    id: 18,
    category: "sensory",
    text: "Bestimmte Geräusche empfinde ich als deutlich intensiver oder belastender als viele Menschen in meiner Umgebung.",
  },
  {
    id: 19,
    category: "sensory",
    text: "Licht, Gerüche, Berührungen, Kleidung, Temperaturen oder bestimmte Materialien können für mich sehr unangenehm sein.",
  },
  {
    id: 20,
    category: "sensory",
    text: "Umgebungen mit vielen gleichzeitigen Eindrücken können mich schnell erschöpfen oder überfordern.",
  },
  {
    id: 21,
    category: "sensory",
    text: "Es gibt Sinneseindrücke, die ich besonders angenehm finde oder gezielt suche.",
  },
  {
    id: 22,
    category: "sensory",
    text: "Wenn zu viele Reize gleichzeitig auf mich einwirken, wird Denken, Sprechen, Entscheiden oder Handeln für mich schwieriger.",
  },

  // Masking und Anpassung (23–27)
  {
    id: 23,
    category: "masking",
    text: "Ich beobachte andere Menschen, um herauszufinden, wie ich mich in bestimmten Situationen verhalten sollte.",
  },
  {
    id: 24,
    category: "masking",
    text: "Ich bereite Gespräche, mögliche Antworten oder soziale Situationen manchmal im Voraus vor.",
  },
  {
    id: 25,
    category: "masking",
    text: "Ich verändere oder unterdrücke manchmal bewusst meine natürliche Mimik, Gestik, Bewegungen, Stimme oder Reaktionen, damit ich weniger auffalle.",
  },
  {
    id: 26,
    category: "masking",
    text: "Andere Menschen halten mich möglicherweise für sozial sicherer oder unbelasteter, als ich mich innerlich fühle.",
  },
  {
    id: 27,
    category: "masking",
    text: 'Nach längeren Phasen, in denen ich mich stark angepasst oder „funktioniert" habe, brauche ich häufig Rückzug oder Erholung.',
  },

  // Überlastung und Regulation (28–29)
  {
    id: 28,
    category: "regulation",
    text: "Wenn viele Anforderungen gleichzeitig zusammenkommen, kann meine Fähigkeit zu denken, zu entscheiden, zu sprechen oder zu handeln deutlich abnehmen.",
  },
  {
    id: 29,
    category: "regulation",
    text: "Ich bemerke manchmal erst spät, dass ich erschöpft, angespannt oder überfordert bin.",
  },

  // Entwicklungsbezug (30)
  {
    id: 30,
    category: "development",
    text: "Wenn ich zurückblicke, erkenne ich einige der beschriebenen Besonderheiten bereits in meiner Kindheit oder Jugend – auch wenn sie damals vielleicht anders erklärt wurden.",
  },
];
