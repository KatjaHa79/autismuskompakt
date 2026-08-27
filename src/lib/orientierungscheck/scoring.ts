import { FRAGEN } from "../../data/orientierungscheck-fragen.ts";
import type { AnswerValue, Answers, Category } from "./types.ts";

// Bereiche, die per Prozentwert ausgewertet werden (Entwicklungsbezug/Frage 30
// wird separat behandelt, siehe Master-Projektauftrag, Abschnitt 16).
export type AuswertbareKategorie = Exclude<Category, "development">;

export type BereichStatus = "valid" | "insufficient";

export interface CategoryScore {
  category: AuswertbareKategorie;
  status: BereichStatus;
  /** Prozentwert 0–100, nur gesetzt wenn status "valid" ist. */
  percent: number | null;
  answeredAssessable: number;
  totalQuestions: number;
}

export type ProfileLevel = "low" | "moderate" | "marked" | "high";

const KATEGORIE_FRAGE_IDS: Record<AuswertbareKategorie, number[]> = {
  social: [1, 2, 3, 4, 5, 6, 7, 8],
  routine: [9, 10, 11, 12, 13],
  interests: [14, 15, 16, 17],
  sensory: [18, 19, 20, 21, 22],
  masking: [23, 24, 25, 26, 27],
  regulation: [28, 29],
};

// Zur Laufzeit geprüft (statt blind auf FRAGEN.length zu vertrauen), damit ein
// zukünftiger Datenfehler in orientierungscheck-fragen.ts frühzeitig auffällt.
function pruefeFragenZuordnung(): void {
  for (const [kategorie, ids] of Object.entries(KATEGORIE_FRAGE_IDS)) {
    for (const id of ids) {
      const frage = FRAGEN.find((f) => f.id === id);
      if (!frage || frage.category !== kategorie) {
        throw new Error(`Fragen-Zuordnung inkonsistent: Frage ${id} passt nicht zu Kategorie "${kategorie}".`);
      }
    }
  }
}
pruefeFragenZuordnung();

function istBewertbar(wert: AnswerValue | undefined): wert is 0 | 1 | 2 | 3 | 4 {
  return wert !== undefined && wert !== null;
}

/**
 * Unterscheidet "noch nicht beantwortet" (undefined) von einer ausdrücklich
 * gültigen Antwort – wozu auch `null` ("Kann ich nicht beurteilen") zählt.
 * Wird für die Navigationssperre ("Weiter" erst nach Auswahl) verwendet.
 */
export function isAnswered(wert: AnswerValue | undefined): boolean {
  return wert !== undefined;
}

/**
 * Berechnet den Bereichswert für eine der sechs prozentbasierten Kategorien.
 *
 * `null` ("Kann ich nicht beurteilen") geht nicht in den Nenner ein. Wurden
 * weniger als 50 % der Fragen eines Bereichs bewertbar beantwortet, gilt der
 * Bereich als "insufficient" (Master-Projektauftrag, Abschnitt 14).
 */
export function calculateCategoryScore(category: AuswertbareKategorie, answers: Answers): CategoryScore {
  const ids = KATEGORIE_FRAGE_IDS[category];
  const totalQuestions = ids.length;
  const bewertbareAntworten = ids.map((id) => answers[id]).filter(istBewertbar);
  const answeredAssessable = bewertbareAntworten.length;

  if (answeredAssessable / totalQuestions < 0.5) {
    return { category, status: "insufficient", percent: null, answeredAssessable, totalQuestions };
  }

  const summe = bewertbareAntworten.reduce((acc: number, wert) => acc + wert, 0);
  const percent = (summe / (answeredAssessable * 4)) * 100;
  return { category, status: "valid", percent, answeredAssessable, totalQuestions };
}

export function calculateAllCategoryScores(answers: Answers): Record<AuswertbareKategorie, CategoryScore> {
  const kategorien = Object.keys(KATEGORIE_FRAGE_IDS) as AuswertbareKategorie[];
  const result = {} as Record<AuswertbareKategorie, CategoryScore>;
  for (const kategorie of kategorien) {
    result[kategorie] = calculateCategoryScore(kategorie, answers);
  }
  return result;
}

// Nur zur Auswahl von Rückmeldungstexten, keine diagnostischen Grenzwerte
// (Master-Projektauftrag, Abschnitt 15).
export function determineProfileLevel(percent: number): ProfileLevel {
  if (percent < 35) return "low";
  if (percent < 55) return "moderate";
  if (percent < 75) return "marked";
  return "high";
}

export const PROFILE_LEVEL_LABELS: Record<ProfileLevel, string> = {
  low: "wenig ausgeprägt",
  moderate: "teilweise ausgeprägt",
  marked: "deutlich ausgeprägt",
  high: "stark ausgeprägt",
};

/** Anzahl der 30 Fragen, die tatsächlich beantwortet wurden (inkl. null). */
export function countAnsweredQuestions(answers: Answers): number {
  return FRAGEN.filter((frage) => answers[frage.id] !== undefined).length;
}
