/**
 * Calculates the PCATool score based on 12 Likert-scale questions.
 * 
 * Rules:
 * 1. Convert '9' (Não sei) to '2'.
 * 2. Invert negative items (2, 3, 8, 9).
 * 3. Formula: Escore = ((Média - 1) / 3) * 10
 * 4. High score cutoff: >= 6.6
 */

export const NEGATIVE_ITEMS = [2, 3, 8, 9];

export function calculatePCAToolScore(answers: number[]): { score: number; isHighQuality: boolean } {
  if (answers.length !== 12) {
    throw new Error("Expected exactly 12 answers.");
  }

  const processedAnswers = answers.map((answer, index) => {
    const questionNumber = index + 1;
    let val = answer;

    // Convert '9' to '2'
    if (val === 9) {
      val = 2;
    }

    // Invert negative items (scale 1-4)
    if (NEGATIVE_ITEMS.includes(questionNumber)) {
      // 1 -> 4, 2 -> 3, 3 -> 2, 4 -> 1
      val = 5 - val;
    }

    return val;
  });

  const sum = processedAnswers.reduce((acc, curr) => acc + curr, 0);
  const mean = sum / 12;

  const score = ((mean - 1) / 3) * 10;
  
  return {
    score: Number(score.toFixed(2)),
    isHighQuality: score >= 6.6
  };
}
