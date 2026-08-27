// Geteilte Typen für den Autismuskompakt-Orientierungscheck.
// Wichtig: `null` ist eine ausdrücklich gültige Nutzerantwort ("Kann ich
// nicht beurteilen") und muss von `undefined` (noch nicht beantwortet)
// unterschieden werden – siehe Master-Projektauftrag, Abschnitt 8.

export type Category = "social" | "routine" | "interests" | "sensory" | "masking" | "regulation" | "development";

export interface Question {
  id: number;
  category: Category;
  text: string;
}

export type AnswerValue = 0 | 1 | 2 | 3 | 4 | null;

// `Partial<Record<...>>`, weil eine Frage-ID entweder fehlt (noch nicht
// beantwortet = undefined) oder einen AnswerValue (inkl. null) trägt.
export type Answers = Partial<Record<number, AnswerValue>>;

export interface AnswerOption {
  label: string;
  value: AnswerValue;
}
