import { test } from "node:test";
import assert from "node:assert/strict";
import { calculateAllCategoryScores } from "./scoring.ts";
import { determineMainPattern, selectImmediateHelp, selectPersonalFeedback } from "./resultRules.ts";
import type { Answers, AnswerValue } from "./types.ts";

/** Baut einen vollständigen 30-Antworten-Satz: Standardwert plus gezielte Überschreibungen. */
function volleAntworten(standard: AnswerValue, ueberschreibungen: Answers = {}): Answers {
  const answers: Answers = {};
  for (let id = 1; id <= 30; id++) answers[id] = standard;
  return { ...answers, ...ueberschreibungen };
}

// Test A: alle Kernwerte niedrig -> broad_low
test("Fall A: alle Antworten 0 -> broad_low", () => {
  const answers = volleAntworten(0);
  const scores = calculateAllCategoryScores(answers);
  const ergebnis = determineMainPattern(scores, answers[30]);
  assert.equal(ergebnis.id, "broad_low");
});

// Test B: nur Sensorik hoch -> isolated
test("Fall B: nur Sensorik hoch (Fragen 18-22 = 4) -> isolated", () => {
  const answers = volleAntworten(0, { 18: 4, 19: 4, 20: 4, 21: 4, 22: 4 });
  const scores = calculateAllCategoryScores(answers);
  const ergebnis = determineMainPattern(scores, answers[30]);
  assert.equal(ergebnis.id, "isolated");
});

// Test C: nur Masking hoch -> keine autismusspezifische stärkere Gesamteinordnung
test("Fall C: nur Masking hoch (Fragen 23-27 = 4) -> keine stärkere Gesamteinordnung (broad_low)", () => {
  const answers = volleAntworten(0, { 23: 4, 24: 4, 25: 4, 26: 4, 27: 4 });
  const scores = calculateAllCategoryScores(answers);
  const ergebnis = determineMainPattern(scores, answers[30]);
  assert.equal(ergebnis.id, "broad_low");
});

// Test D: social + routine + interests hoch -> multi_domain
test("Fall D: social + routine + interests hoch -> multi_domain", () => {
  const answers = volleAntworten(0, {
    1: 4,
    2: 4,
    3: 4,
    4: 4,
    5: 4,
    6: 4,
    7: 4,
    8: 4, // social
    9: 4,
    10: 4,
    11: 4,
    12: 4,
    13: 4, // routine
    14: 4,
    15: 4,
    16: 4,
    17: 4, // interests
    30: 0,
  });
  const scores = calculateAllCategoryScores(answers);
  const ergebnis = determineMainPattern(scores, answers[30]);
  assert.equal(ergebnis.id, "multi_domain");
});

// Test E: social + routine + sensory hoch + Frage 30 = 3 oder 4 -> multi_domain_development
test("Fall E: social + routine + sensory hoch + Frage 30 = 4 -> multi_domain_development", () => {
  const answers = volleAntworten(0, {
    1: 4,
    2: 4,
    3: 4,
    4: 4,
    5: 4,
    6: 4,
    7: 4,
    8: 4, // social
    9: 4,
    10: 4,
    11: 4,
    12: 4,
    13: 4, // routine
    18: 4,
    19: 4,
    20: 4,
    21: 4,
    22: 4, // sensory
    30: 4,
  });
  const scores = calculateAllCategoryScores(answers);
  const ergebnis = determineMainPattern(scores, answers[30]);
  assert.equal(ergebnis.id, "multi_domain_development");
});

test("Fall E: dieselbe Konstellation, aber Frage 30 = 3 -> ebenfalls multi_domain_development", () => {
  const answers = volleAntworten(0, {
    1: 4,
    2: 4,
    3: 4,
    4: 4,
    5: 4,
    6: 4,
    7: 4,
    8: 4,
    9: 4,
    10: 4,
    11: 4,
    12: 4,
    13: 4,
    18: 4,
    19: 4,
    20: 4,
    21: 4,
    22: 4,
    30: 3,
  });
  const scores = calculateAllCategoryScores(answers);
  const ergebnis = determineMainPattern(scores, answers[30]);
  assert.equal(ergebnis.id, "multi_domain_development");
});

// Test F: viele null-Antworten -> insufficient-Bereiche korrekt
test("Fall F: fast alle Antworten null -> zentrale Bereiche insufficient, Gesamtmuster insufficient_overall", () => {
  const answers = volleAntworten(null, { 1: 4, 9: 4 }); // je 1 bewertbare Antwort in social/routine, alles andere null
  const scores = calculateAllCategoryScores(answers);
  assert.equal(scores.social.status, "insufficient");
  assert.equal(scores.routine.status, "insufficient");
  assert.equal(scores.interests.status, "insufficient");
  assert.equal(scores.sensory.status, "insufficient");
  const ergebnis = determineMainPattern(scores, answers[30]);
  assert.equal(ergebnis.id, "insufficient_overall");
});

// Test G: Regulation sehr hoch, Kernbereiche niedrig -> Soforthilfe ja, keine stärkere Gesamteinordnung
test("Fall G: Regulation hoch, Kernbereiche niedrig -> Soforthilfe vorhanden, Hauptmuster bleibt broad_low", () => {
  const answers = volleAntworten(0, { 28: 4, 29: 4 });
  const scores = calculateAllCategoryScores(answers);
  const ergebnis = determineMainPattern(scores, answers[30]);
  assert.equal(ergebnis.id, "broad_low");

  const soforthilfe = selectImmediateHelp(answers);
  assert.notEqual(soforthilfe, null, "Soforthilfe muss bei hoher Regulation ausgegeben werden");

  const feedback = selectPersonalFeedback(scores, answers);
  assert.ok(
    feedback.some((f) => f.area === "regulation"),
    "Überlastungs-Rückmeldung muss unter den persönlichen Rückmeldungen sein"
  );
  assert.ok(
    !feedback.some((f) => f.area === "social" || f.area === "routine" || f.area === "interests" || f.area === "sensory"),
    "Bei niedrigen Kernbereichen dürfen diese nicht als Rückmeldung erscheinen"
  );
});

// Test J: insufficient darf nicht wie 0 behandelt werden
test("Fall J: ein insufficient-Bereich darf die Schwellenlogik nicht wie 0 durchlaufen", () => {
  // social: nur 1 von 8 beantwortet (insufficient), routine + interests hoch und valide (>=55),
  // sensory ebenfalls insufficient. validCentralCount = 2 (routine, interests) -> kein insufficient_overall,
  // aber Muster 3 erfordert social VALIDE und >=55 - das darf NICHT durch den (fehlenden) Wert erfüllt werden.
  const answers = volleAntworten(null, {
    1: 4, // einzige bewertbare social-Antwort -> insufficient (1/8 < 50%)
    9: 4,
    10: 4,
    11: 4,
    12: 4,
    13: 4, // routine voll beantwortet, hoch
    14: 4,
    15: 4,
    16: 4,
    17: 4, // interests voll beantwortet, hoch
  });
  const scores = calculateAllCategoryScores(answers);
  assert.equal(scores.social.status, "insufficient");
  assert.equal(scores.social.percent, null);

  const ergebnis = determineMainPattern(scores, answers[30]);
  // Da social nicht valide ist, darf multi_domain (Muster 3) NICHT ausgelöst werden,
  // obwohl zwei B-Bereiche hoch sind.
  assert.notEqual(ergebnis.id, "multi_domain");
  assert.notEqual(ergebnis.id, "multi_domain_development");
});
