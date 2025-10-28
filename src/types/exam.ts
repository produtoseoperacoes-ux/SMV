export type Answer = 'A' | 'B' | 'C' | 'D' | 'E' | 'X';

export interface Exam {
  id: number;
  title: string;
  subject: string;
  totalQuestions: number;
  year: number;
  description: string;
}

export interface QuestionTopic {
  tema: string;
  subtema: string;
}

export interface UserAnswers {
  [questionNum: number]: Answer;
}

export interface TopicScore {
  correct: number;
  total: number;
}

export interface SubtopicScore extends TopicScore {
  tema: string;
  subtema: string;
}

export interface WrongQuestion {
  num: number;
  tema: string;
  subtema: string;
  userAnswer: string;
  correctAnswer: Answer;
}

export interface ExamResult {
  correct: number;
  wrong: number;
  total: number;
  percentage: number;
  topicScores: { [topic: string]: TopicScore };
  subtopicScores: { [key: string]: SubtopicScore };
  wrongQuestions: WrongQuestion[];
}

export interface SavedDraft {
  answers: UserAnswers;
  date: string;
  count: number;
}
