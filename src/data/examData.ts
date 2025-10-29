import type { Answer, QuestionTopic, Exam } from '@/types/exam';
import { SIMULADO_01_ANSWER_KEY, SIMULADO_01_TOPICS } from './simulado01Data';
import { SIMULADO_02_ANSWER_KEY, SIMULADO_02_TOPICS } from './simulado02Data';
import { SIMULADO_03_ANSWER_KEY, SIMULADO_03_TOPICS } from './simulado03Data';
import { SIMULADO_04_ANSWER_KEY, SIMULADO_04_TOPICS } from './simulado04Data';
import { SIMULADO_05_ANSWER_KEY, SIMULADO_05_TOPICS } from './simulado05Data';
import { SIMULADO_06_ANSWER_KEY, SIMULADO_06_TOPICS } from './simulado06Data';
import { SIMULADO_07_ANSWER_KEY, SIMULADO_07_TOPICS } from './simulado07Data';
import { SIMULADO_08_ANSWER_KEY, SIMULADO_08_TOPICS } from './simulado08Data';
import { SIMULADO_09_ANSWER_KEY, SIMULADO_09_TOPICS } from './simulado09Data';
import { SIMULADO_10_ANSWER_KEY, SIMULADO_10_TOPICS } from './simulado10Data';
import { SIMULADO_11_ANSWER_KEY, SIMULADO_11_TOPICS } from './simulado11Data';
import { SIMULADO_12_ANSWER_KEY, SIMULADO_12_TOPICS } from './simulado12Data';
import { SIMULADO_13_ANSWER_KEY, SIMULADO_13_TOPICS } from './simulado13Data';
import { SIMULADO_14_ANSWER_KEY, SIMULADO_14_TOPICS } from './simulado14Data';
import { SIMULADO_15_ANSWER_KEY, SIMULADO_15_TOPICS } from './simulado15Data';
import { SIMULADO_16_ANSWER_KEY, SIMULADO_16_TOPICS } from './simulado16Data';
import { SIMULADO_17_ANSWER_KEY, SIMULADO_17_TOPICS } from './simulado17Data';
import { SIMULADO_18_ANSWER_KEY, SIMULADO_18_TOPICS } from './simulado18Data';
import { PROVA_2023_ANSWER_KEY, PROVA_2023_TOPICS } from './prova2023Data';
import { PROVA_2024_ANSWER_KEY, PROVA_2024_TOPICS } from './prova2024Data';
import { PROVA_2025_ANSWER_KEY, PROVA_2025_TOPICS } from './prova2025Data';

// Função auxiliar para obter gabarito por ID do exame
export function getAnswerKeyByExamId(examId: string): { [key: number]: Answer } | null {
  switch(examId) {
    case 'ps-smv-of-2023':
      return PROVA_2023_ANSWER_KEY;
    case 'ps-smv-of-2024':
      return PROVA_2024_ANSWER_KEY;
    case 'smv-oficiais-2025':
      return PROVA_2025_ANSWER_KEY;
    case 'simulado-01':
      return SIMULADO_01_ANSWER_KEY;
    case 'simulado-02':
      return SIMULADO_02_ANSWER_KEY;
    case 'simulado-03':
      return SIMULADO_03_ANSWER_KEY;
    case 'simulado-04':
      return SIMULADO_04_ANSWER_KEY;
    case 'simulado-05':
      return SIMULADO_05_ANSWER_KEY;
    case 'simulado-06':
      return SIMULADO_06_ANSWER_KEY;
    case 'simulado-07':
      return SIMULADO_07_ANSWER_KEY;
    case 'simulado-08':
      return SIMULADO_08_ANSWER_KEY;
    case 'simulado-09':
      return SIMULADO_09_ANSWER_KEY;
    case 'simulado-10':
      return SIMULADO_10_ANSWER_KEY;
    case 'simulado-11':
      return SIMULADO_11_ANSWER_KEY;
    case 'simulado-12':
      return SIMULADO_12_ANSWER_KEY;
    case 'simulado-13':
      return SIMULADO_13_ANSWER_KEY;
    case 'simulado-14':
      return SIMULADO_14_ANSWER_KEY;
    case 'simulado-15':
      return SIMULADO_15_ANSWER_KEY;
    case 'simulado-16':
      return SIMULADO_16_ANSWER_KEY;
    case 'simulado-17':
      return SIMULADO_17_ANSWER_KEY;
    case 'simulado-18':
      return SIMULADO_18_ANSWER_KEY;
    default:
      return null;
  }
}

// Função auxiliar para obter tópicos por ID do exame
export function getTopicsByExamId(examId: string): { [key: number]: QuestionTopic } | null {
  switch(examId) {
    case 'ps-smv-of-2023':
      return PROVA_2023_TOPICS;
    case 'ps-smv-of-2024':
      return PROVA_2024_TOPICS;
    case 'smv-oficiais-2025':
      return PROVA_2025_TOPICS;
    case 'simulado-01':
      return SIMULADO_01_TOPICS;
    case 'simulado-02':
      return SIMULADO_02_TOPICS;
    case 'simulado-03':
      return SIMULADO_03_TOPICS;
    case 'simulado-04':
      return SIMULADO_04_TOPICS;
    case 'simulado-05':
      return SIMULADO_05_TOPICS;
    case 'simulado-06':
      return SIMULADO_06_TOPICS;
    case 'simulado-07':
      return SIMULADO_07_TOPICS;
    case 'simulado-08':
      return SIMULADO_08_TOPICS;
    case 'simulado-09':
      return SIMULADO_09_TOPICS;
    case 'simulado-10':
      return SIMULADO_10_TOPICS;
    case 'simulado-11':
      return SIMULADO_11_TOPICS;
    case 'simulado-12':
      return SIMULADO_12_TOPICS;
    case 'simulado-13':
      return SIMULADO_13_TOPICS;
    case 'simulado-14':
      return SIMULADO_14_TOPICS;
    case 'simulado-15':
      return SIMULADO_15_TOPICS;
    case 'simulado-16':
      return SIMULADO_16_TOPICS;
    case 'simulado-17':
      return SIMULADO_17_TOPICS;
    case 'simulado-18':
      return SIMULADO_18_TOPICS;
    default:
      return null;
  }
}

// PROVAS OFICIAIS
export const OFFICIAL_EXAMS: Exam[] = [
  {
    id: 'ps-smv-of-2023',
    title: 'PS-SMV-OF/2023',
    subject: 'Português',
    totalQuestions: 50,
    year: 2023,
    banca: 'Marinha do Brasil',
    description: 'Prova Oficial - Serviço Militar Voluntário - Oficiais Temporários',
    difficulty: 'Difícil'
  },
  {
    id: 'ps-smv-of-2024',
    title: 'PS-SMV-OF/2024',
    subject: 'Português',
    totalQuestions: 50,
    year: 2024,
    banca: 'Marinha do Brasil',
    description: 'Prova Oficial - Serviço Militar Voluntário - Oficiais Temporários',
    difficulty: 'Difícil'
  },
  {
    id: 'smv-oficiais-2025',
    title: 'SMV | OFICIAIS 2025',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    banca: 'Marinha do Brasil',
    description: 'Prova Oficial - Serviço Militar Voluntário - Oficiais Temporários',
    difficulty: 'Difícil'
  }
];

// SIMULADOS
export const PRACTICE_EXAMS: Exam[] = [
  {
    id: 'simulado-01',
    title: 'Simulado 01 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões de diversas bancas - Nível médio',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-02',
    title: 'Simulado 02 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões avançadas de bancas federais',
    difficulty: 'Difícil',
    topics: 'Todos os temas'
  },
  {
    id: 'simulado-03',
    title: 'Simulado 03 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Focado em questões de morfologia',
    difficulty: 'Fácil',
    topics: 'Morfologia exclusivo'
  },
  {
    id: 'simulado-04',
    title: 'Simulado 04 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Focado em questões de sintaxe',
    difficulty: 'Média',
    topics: 'Sintaxe exclusivo'
  },
  {
    id: 'simulado-05',
    title: 'Simulado 05 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Simulado abrangente - Nível intermediário',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-06',
    title: 'Simulado 06 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Simulado completo - Nível avançado',
    difficulty: 'Difícil',
    topics: 'Todos os temas'
  },
  {
    id: 'simulado-07',
    title: 'Simulado 07 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Simulado focado em interpretação e coesão textual',
    difficulty: 'Média',
    topics: 'Interpretação, Coesão e Sintaxe'
  },
  {
    id: 'simulado-08',
    title: 'Simulado 08 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Simulado completo com ênfase em ética e linguagem',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-09',
    title: 'Simulado 09 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões de diversas bancas - Nível médio/avançado',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-10',
    title: 'Simulado 10 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões de diversas bancas - Nível médio/avançado',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-11',
    title: 'Simulado 11 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões de diversas bancas - Nível médio/avançado',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-12',
    title: 'Simulado 12 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões de diversas bancas - Nível médio/avançado',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-13',
    title: 'Simulado 13 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões de diversas bancas - Nível médio/avançado',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-14',
    title: 'Simulado 14 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões de diversas bancas - Nível médio/avançado',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-15',
    title: 'Simulado 15 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões de diversas bancas - Nível médio/avançado',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-16',
    title: 'Simulado 16 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões de diversas bancas - Nível médio/avançado',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-17',
    title: 'Simulado 17 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões de diversas bancas - Nível médio/avançado',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  },
  {
    id: 'simulado-18',
    title: 'Simulado 18 - Português SMV',
    subject: 'Português',
    totalQuestions: 40,
    year: 2025,
    description: 'Questões de diversas bancas - Nível médio/avançado',
    difficulty: 'Média',
    topics: 'Morfologia, Sintaxe e Interpretação'
  }
];
