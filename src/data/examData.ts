import type { Answer, QuestionTopic, Exam } from '@/types/exam';
import { SIMULADO_07_ANSWER_KEY, SIMULADO_07_TOPICS } from './simulado07Data';
import { SIMULADO_08_ANSWER_KEY, SIMULADO_08_TOPICS } from './simulado08Data';
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
    case 'simulado-07':
      return SIMULADO_07_ANSWER_KEY;
    case 'simulado-08':
      return SIMULADO_08_ANSWER_KEY;
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
    case 'simulado-07':
      return SIMULADO_07_TOPICS;
    case 'simulado-08':
      return SIMULADO_08_TOPICS;
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
  }
];
