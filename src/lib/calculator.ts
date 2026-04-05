import { Question } from '../constants/questions';

/**
 * Calculates the PCATool score based on 12 Likert-scale questions.
 * 
 * Rules:
 * 1. Convert '9' (Não sei) to '2'.
 * 2. Invert negative items (2, 3, 8, 9).
 * 3. Formula: Escore = ((Média - 1) / 3) * 10
 * 4. High score cutoff: >= 6.6
 */

interface ScoreResult {
  score: number;
  isHighQuality: boolean;
  components?: Record<string, number>;
}

export function calculatePCAToolScore(
  answers: number[], 
  questions: Question[],
  version: string = 'Reduzida',
  targetGroup: string = 'Adulto'
): ScoreResult {
  if (!questions) throw new Error("Questions are required for calculation.");

  const processed = answers.map((ans, i) => {
    const q = questions[i];
    // Converter valor '9' (Não sei) para '2' antes do cálculo
    let val = ans;
    if (val === 9) val = 2;
    return { code: q.code, isNegative: q.desc.includes('(Item Negativo)'), originalVal: ans, val: val };
  });

  const explicitInversions: Record<string, Record<string, string[]>> = {
    'Criança': {
      'Extensa': ['C2', 'C4', 'C5', 'D10'],
      'Reduzida': ['C4']
    },
    'Adulto': {
      'Extensa': ['C7', 'C9', 'C11', 'D10']
    }
  };

  const itemsToInvert = explicitInversions[targetGroup]?.[version];

  // Inverter itens de orientação negativa antes do cálculo
  processed.forEach(p => {
    const shouldInvert = itemsToInvert ? itemsToInvert.includes(p.code) : p.isNegative;
    if (shouldInvert && typeof p.val === 'number' && p.val !== 0) {
      if (p.val === 4) p.val = 1;
      else if (p.val === 3) p.val = 2;
      else if (p.val === 2) p.val = 3;
      else if (p.val === 1) p.val = 4;
    }
  });

  let componentCodes: Record<string, string[]> = {};
  
  if (targetGroup === 'Profissional') {
    componentCodes = {
      A: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'],
      B: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'],
      C: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'],
      D: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8'],
      E: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16', 'E17', 'E18', 'E19', 'E20', 'E21', 'E22'],
      F: ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18'],
      G: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12', 'G13', 'G14'],
      H: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14', 'H15', 'H16', 'H17', 'H18', 'H19', 'H20', 'H21']
    };
  } else {
    componentCodes = {
      B: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7'],
      C: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14'],
      D: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15'],
      E: ['E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'], // E1 is a filter, removed from calculation
      F: ['F1', 'F2', 'F3'],
      G: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12', 'G13', 'G14', 'G15', 'G16', 'G17', 'G18', 'G19', 'G20', 'G21', 'G22', 'G23'],
      H: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14', 'H15'],
      I: ['I1', 'I2', 'I3'],
      J: ['J1', 'J2', 'J3', 'J4', 'J5', 'J6']
    };
  }

  const calculateComponent = (codes: string[]) => {
    const items = processed.filter(p => codes.includes(p.code) && typeof p.val === 'number' && p.val !== 0);
    if (items.length === 0) return undefined;

    const nines = items.filter(p => p.originalVal === 9).length;
    const totalItems = items.length;

    if (nines >= totalItems / 2) {
      return undefined; // Missing
    }

    const sum = items.reduce((acc, curr) => acc + (curr.val as number), 0);
    return sum / items.length;
  };

  const componentScores: Record<string, number> = {};
  
  if (targetGroup !== 'Profissional') {
    // Handle E component special case (Coordenação - Integração):
    // Se E1 for 2 ou 9, o componente E deve ficar em branco (missing).
    const e1 = processed.find(p => p.code === 'E1')?.originalVal;
    if (e1 !== 2 && e1 !== 9) {
      const scoreE = calculateComponent(componentCodes.E);
      if (scoreE !== undefined) componentScores.E = scoreE;
    }
  }

  const keysToIterate = targetGroup === 'Profissional' 
    ? ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] 
    : ['B', 'C', 'D', 'F', 'G', 'H', 'I', 'J'];

  keysToIterate.forEach(key => {
    const score = calculateComponent(componentCodes[key]);
    if (score !== undefined) componentScores[key] = score;
  });

  if (targetGroup !== 'Profissional') {
    // Afiliação (Atributo A): O cálculo não é uma média.
    // Se A1=A2=A3 (mesmo local), o escore é 4. Se são locais diferentes, o escore cai para 2.
    const a1 = processed.find(p => p.code === 'A1')?.val;
    const a2 = processed.find(p => p.code === 'A2')?.val;
    const a3 = processed.find(p => p.code === 'A3')?.val;
    
    if (a1 !== undefined && a2 !== undefined && a3 !== undefined) {
      let afiliacao = 1;

      if (a1 === 1 && a2 === 1 && a3 === 1) {
        afiliacao = 4; // Mesmo local
      } else if (a1 === 2 && a2 === 2 && a3 === 2) {
        afiliacao = 1; // Nenhum local
      } else {
        afiliacao = 2; // Locais diferentes
      }

      componentScores.A = afiliacao;
    }
  }

  const essentialKeys = targetGroup === 'Profissional' 
    ? ['A', 'B', 'C', 'D', 'E', 'F'] 
    : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const validEssential = essentialKeys.map(k => componentScores[k]).filter(s => s !== undefined);
  const essentialMean = validEssential.length > 0 ? validEssential.reduce((a, b) => a + b, 0) / validEssential.length : 0;

  const generalKeys = targetGroup === 'Profissional' 
    ? ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] 
    : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const validGeneral = generalKeys.map(k => componentScores[k]).filter(s => s !== undefined);
  const generalMean = validGeneral.length > 0 ? validGeneral.reduce((a, b) => a + b, 0) / validGeneral.length : 0;

  // Formula de normalização: Escore = ((Média - 1) / 3) * 10
  const finalScore = ((generalMean - 1) / 3) * 10;

  return {
    score: Number(finalScore.toFixed(2)),
    isHighQuality: finalScore >= 6.6,
    components: Object.fromEntries(
      Object.entries(componentScores).map(([k, v]) => [k, Number(((v - 1) / 3 * 10).toFixed(2))])
    )
  };
}
