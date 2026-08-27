import { test } from "node:test";
import assert from "node:assert/strict";
import { calculateCategoryScore, determineProfileLevel, isAnswered } from "./scoring.ts";
import type { Answers } from "./types.ts";

function antworten(paare: Array<[number, Answers[number]]>): Answers {
  const answers: Answers = {};
  for (const [id, wert] of paare) answers[id] = wert;
  return answers;
}

test("calculateCategoryScore: einfache Prozentrechnung, null zählt nicht in den Nenner", () => {
  // regulation = Fragen 28, 29
  const answers = antworten([
    [28, 4],
    [29, null],
  ]);
  const score = calculateCategoryScore("regulation", answers);
  // 1 von 2 bewertbar beantwortet -> 50% -> gerade noch valide
  assert.equal(score.status, "valid");
  assert.equal(score.answeredAssessable, 1);
  assert.equal(score.percent, 100); // 4 / (1*4) * 100
});

test("calculateCategoryScore: 2-Fragen-Bereich, weniger als 50% bewertbar -> insufficient", () => {
  const answers = antworten([
    [28, null],
    [29, null],
  ]);
  const score = calculateCategoryScore("regulation", answers);
  assert.equal(score.status, "insufficient");
  assert.equal(score.percent, null, "insufficient darf keinen Prozentwert liefern, auch keine 0");
});

test("calculateCategoryScore: 8-Fragen-Bereich (social) genau an der 50%-Schwelle", () => {
  // 4 von 8 bewertbar (>= 50%) -> valide
  const answers = antworten([
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
    [5, null],
    [6, null],
    [7, null],
    [8, null],
  ]);
  const score = calculateCategoryScore("social", answers);
  assert.equal(score.status, "valid");
  assert.equal(score.percent, 50);
});

test("calculateCategoryScore: knapp unter 50% bewertbar -> insufficient", () => {
  // 3 von 8 bewertbar (37.5%) -> nicht valide
  const answers = antworten([
    [1, 4],
    [2, 4],
    [3, 4],
    [4, null],
    [5, null],
    [6, null],
    [7, null],
    [8, null],
  ]);
  const score = calculateCategoryScore("social", answers);
  assert.equal(score.status, "insufficient");
  assert.equal(score.percent, null);
});

test("calculateCategoryScore: unbeantwortete Fragen (undefined) zählen ebenfalls nicht in den Nenner", () => {
  const answers: Answers = { 28: 3 }; // Frage 29 gar nicht erst beantwortet
  const score = calculateCategoryScore("regulation", answers);
  assert.equal(score.status, "valid");
  assert.equal(score.answeredAssessable, 1);
  assert.equal(score.percent, 75);
});

test("determineProfileLevel: Schwellenwerte", () => {
  assert.equal(determineProfileLevel(0), "low");
  assert.equal(determineProfileLevel(34.9), "low");
  assert.equal(determineProfileLevel(35), "moderate");
  assert.equal(determineProfileLevel(54.9), "moderate");
  assert.equal(determineProfileLevel(55), "marked");
  assert.equal(determineProfileLevel(74.9), "marked");
  assert.equal(determineProfileLevel(75), "high");
  assert.equal(determineProfileLevel(100), "high");
});

// Test H / I: null ist eine gültige Antwort, undefined nicht.
test("isAnswered: null (Kann ich nicht beurteilen) gilt als beantwortet -> Navigation erlaubt", () => {
  assert.equal(isAnswered(null), true);
});

test("isAnswered: undefined (noch nicht beantwortet) blockiert Navigation", () => {
  assert.equal(isAnswered(undefined), false);
});

test("isAnswered: reguläre Zahlenwerte gelten als beantwortet", () => {
  for (const wert of [0, 1, 2, 3, 4] as const) {
    assert.equal(isAnswered(wert), true);
  }
});
