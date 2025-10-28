import type { Answer, QuestionTopic, Exam } from '@/types/exam';

export const ANSWER_KEY: { [key: number]: Answer } = {
  1:'B', 2:'B', 3:'C', 4:'B', 5:'B', 6:'B', 7:'E', 8:'E', 9:'B', 10:'E',
  11:'E', 12:'X', 13:'C', 14:'A', 15:'D', 16:'C', 17:'C', 18:'C', 19:'B', 20:'E',
  21:'A', 22:'A', 23:'C', 24:'D', 25:'E', 26:'B', 27:'E', 28:'B', 29:'D', 30:'D',
  31:'D', 32:'C', 33:'A', 34:'X', 35:'E', 36:'C', 37:'D', 38:'B', 39:'C', 40:'A',
  41:'C', 42:'A', 43:'B', 44:'B', 45:'C', 46:'A', 47:'E', 48:'E', 49:'E', 50:'A'
};

export const QUESTION_TOPICS: { [key: number]: QuestionTopic } = {
  1: { tema: 'Português - Morfologia', subtema: 'Acentuação Gráfica' },
  2: { tema: 'Português - Morfologia', subtema: 'Acentuação Gráfica' },
  3: { tema: 'Português - Sintaxe', subtema: 'Coerência Textual' },
  4: { tema: 'Português - Morfologia', subtema: 'Colocação Pronominal' },
  5: { tema: 'Português - Sintaxe', subtema: 'Função Sintática' },
  6: { tema: 'Português - Morfologia', subtema: 'Pronomes' },
  7: { tema: 'Interpretação de Texto', subtema: 'Inferência' },
  8: { tema: 'Interpretação de Texto', subtema: 'Compreensão Global' },
  9: { tema: 'Português - Sintaxe', subtema: 'Concordância Verbal' },
  10: { tema: 'Português - Morfologia', subtema: 'Classes de Palavras' },
  11: { tema: 'Português - Sintaxe', subtema: 'Regência Verbal' },
  12: { tema: 'Interpretação de Texto', subtema: 'Análise Crítica' },
  13: { tema: 'Português - Morfologia', subtema: 'Ortografia' },
  14: { tema: 'Português - Sintaxe', subtema: 'Período Composto' },
  15: { tema: 'Interpretação de Texto', subtema: 'Coesão Textual' },
  16: { tema: 'Português - Sintaxe', subtema: 'Concordância Nominal' },
  17: { tema: 'Português - Morfologia', subtema: 'Verbos - Tempos e Modos' },
  18: { tema: 'Português - Sintaxe', subtema: 'Regência Nominal' },
  19: { tema: 'Interpretação de Texto', subtema: 'Tipologia Textual' },
  20: { tema: 'Português - Morfologia', subtema: 'Substantivos' },
  21: { tema: 'Português - Sintaxe', subtema: 'Crase' },
  22: { tema: 'Português - Morfologia', subtema: 'Adjetivos' },
  23: { tema: 'Interpretação de Texto', subtema: 'Figuras de Linguagem' },
  24: { tema: 'Português - Sintaxe', subtema: 'Pontuação' },
  25: { tema: 'Português - Morfologia', subtema: 'Advérbios' },
  26: { tema: 'Português - Sintaxe', subtema: 'Orações Subordinadas' },
  27: { tema: 'Interpretação de Texto', subtema: 'Ambiguidade' },
  28: { tema: 'Português - Morfologia', subtema: 'Preposições' },
  29: { tema: 'Português - Sintaxe', subtema: 'Orações Coordenadas' },
  30: { tema: 'Português - Morfologia', subtema: 'Conjunções' },
  31: { tema: 'Interpretação de Texto', subtema: 'Elementos de Referência' },
  32: { tema: 'Português - Sintaxe', subtema: 'Vocativo e Aposto' },
  33: { tema: 'Português - Morfologia', subtema: 'Formação de Palavras' },
  34: { tema: 'Interpretação de Texto', subtema: 'Gêneros Textuais' },
  35: { tema: 'Português - Sintaxe', subtema: 'Vozes Verbais' },
  36: { tema: 'Português - Morfologia', subtema: 'Artigos' },
  37: { tema: 'Português - Sintaxe', subtema: 'Complementos Verbais' },
  38: { tema: 'Interpretação de Texto', subtema: 'Intertextualidade' },
  39: { tema: 'Português - Morfologia', subtema: 'Numerais' },
  40: { tema: 'Português - Sintaxe', subtema: 'Adjunto Adverbial' },
  41: { tema: 'Português - Morfologia', subtema: 'Colocação Pronominal' },
  42: { tema: 'Interpretação de Texto', subtema: 'Pressuposição' },
  43: { tema: 'Português - Sintaxe', subtema: 'Predicado' },
  44: { tema: 'Português - Morfologia', subtema: 'Pronomes Relativos' },
  45: { tema: 'Português - Sintaxe', subtema: 'Complemento Nominal' },
  46: { tema: 'Interpretação de Texto', subtema: 'Argumentação' },
  47: { tema: 'Português - Morfologia', subtema: 'Interjeições' },
  48: { tema: 'Português - Sintaxe', subtema: 'Transitividade Verbal' },
  49: { tema: 'Interpretação de Texto', subtema: 'Ironia e Sarcasmo' },
  50: { tema: 'Português - Morfologia', subtema: 'Acentuação Gráfica' }
};

// PROVAS OFICIAIS
export const OFFICIAL_EXAMS: Exam[] = [
  {
    id: 'petrobras-2023',
    title: 'Petrobras 2023',
    subject: 'Português',
    totalQuestions: 50,
    year: 2023,
    banca: 'Cesgranrio',
    description: 'Prova oficial Petrobras - Engenheiro de Produção',
    difficulty: 'Difícil'
  },
  {
    id: 'transpetro-2023',
    title: 'Transpetro 2023',
    subject: 'Português',
    totalQuestions: 40,
    year: 2023,
    banca: 'Cesgranrio',
    description: 'Prova oficial Transpetro - Engenheiro Júnior',
    difficulty: 'Média'
  },
  {
    id: 'eletrobras-2022',
    title: 'Eletrobras 2022',
    subject: 'Português',
    totalQuestions: 35,
    year: 2022,
    banca: 'Cesgranrio',
    description: 'Prova oficial Eletrobras - Analista',
    difficulty: 'Média'
  }
];

// SIMULADOS
export const PRACTICE_EXAMS: Exam[] = [
  {
    id: 'simulado-01',
    title: 'Simulado Geral 01',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões de diversas bancas - Nível médio',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-02',
    title: 'Simulado Intensivo 02',
    subject: 'Português',
    totalQuestions: 50,
    year: 2025,
    description: 'Questões avançadas de bancas federais',
    difficulty: 'Difícil',
    topics: 'Todos os temas'
  },
  {
    id: 'simulado-03',
    title: 'Simulado Morfologia',
    subject: 'Português',
    totalQuestions: 30,
    year: 2025,
    description: 'Focado em questões de morfologia',
    difficulty: 'Fácil',
    topics: 'Morfologia exclusivo'
  },
  {
    id: 'simulado-04',
    title: 'Simulado Sintaxe',
    subject: 'Português',
    totalQuestions: 30,
    year: 2025,
    description: 'Focado em questões de sintaxe',
    difficulty: 'Média',
    topics: 'Sintaxe exclusivo'
  }
];
