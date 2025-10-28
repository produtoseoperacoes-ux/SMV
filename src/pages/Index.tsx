import { useState } from 'react';
import { Home } from './Home';
import { ExamView } from './ExamView';
import { ResultView } from './ResultView';
import { ANSWER_KEY, QUESTION_TOPICS, OFFICIAL_EXAMS, PRACTICE_EXAMS } from '@/data/examData';
import type { Exam, UserAnswers, Answer, ExamResult, SavedDraft } from '@/types/exam';

type View = 'home' | 'exam' | 'result';

const Index = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [result, setResult] = useState<ExamResult | null>(null);
  const [savedDrafts, setSavedDrafts] = useState<{ [examId: string]: SavedDraft }>({});

  const startExam = (exam: Exam) => {
    setSelectedExam(exam);
    setUserAnswers(savedDrafts[exam.id]?.answers || {});
    setResult(null);
    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectAnswer = (questionNum: number, answer: Answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionNum]: answer
    }));
  };

  const saveDraft = () => {
    if (!selectedExam) return;
    
    const answeredCount = Object.keys(userAnswers).length;
    setSavedDrafts(prev => ({
      ...prev,
      [selectedExam.id]: {
        answers: { ...userAnswers },
        date: new Date().toLocaleString('pt-BR'),
        count: answeredCount
      }
    }));
  };

  const finishExam = () => {
    if (!selectedExam) return;

    let correct = 0;
    let wrong = 0;
    const topicScores: { [topic: string]: { correct: number; total: number } } = {};
    const subtopicScores: { [key: string]: { correct: number; total: number; tema: string; subtema: string } } = {};
    const wrongQuestions: any[] = [];

    for (let i = 1; i <= selectedExam.totalQuestions; i++) {
      const userAnswer = userAnswers[i];
      const correctAnswer = ANSWER_KEY[i];
      const topicData = QUESTION_TOPICS[i] || { tema: 'Português - Geral', subtema: 'Diversos' };
      const tema = topicData.tema;
      const subtema = topicData.subtema;

      if (!topicScores[tema]) {
        topicScores[tema] = { correct: 0, total: 0 };
      }
      topicScores[tema].total++;

      const subtopicKey = `${tema} → ${subtema}`;
      if (!subtopicScores[subtopicKey]) {
        subtopicScores[subtopicKey] = { correct: 0, total: 0, tema, subtema };
      }
      subtopicScores[subtopicKey].total++;

      if (correctAnswer === 'X') {
        correct++;
        topicScores[tema].correct++;
        subtopicScores[subtopicKey].correct++;
      } else if (userAnswer === correctAnswer) {
        correct++;
        topicScores[tema].correct++;
        subtopicScores[subtopicKey].correct++;
      } else {
        wrong++;
        wrongQuestions.push({
          num: i,
          tema: tema,
          subtema: subtema,
          userAnswer: userAnswer || '(em branco)',
          correctAnswer: correctAnswer
        });
      }
    }

    const percentage = Math.round((correct / selectedExam.totalQuestions) * 100);

    setResult({
      correct,
      wrong,
      total: selectedExam.totalQuestions,
      percentage,
      topicScores,
      subtopicScores,
      wrongQuestions
    });

    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetExam = () => {
    setUserAnswers({});
    setResult(null);
    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setCurrentView('home');
    setSelectedExam(null);
    setUserAnswers({});
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'home') {
    return <Home savedDrafts={savedDrafts} onStartExam={startExam} />;
  }

  if (currentView === 'exam' && selectedExam) {
    return (
      <ExamView
        exam={selectedExam}
        userAnswers={userAnswers}
        onAnswerSelect={selectAnswer}
        onSaveDraft={saveDraft}
        onFinish={finishExam}
        onGoHome={goHome}
      />
    );
  }

  if (currentView === 'result' && selectedExam && result) {
    return (
      <ResultView
        exam={selectedExam}
        result={result}
        onReset={resetExam}
        onGoHome={goHome}
      />
    );
  }

  return null;
};

export default Index;
