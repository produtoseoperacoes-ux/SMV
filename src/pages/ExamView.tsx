import { useState } from 'react';
import { ExamHeader } from '@/components/ExamHeader';
import { QuestionCard } from '@/components/QuestionCard';
import { ExamProgress } from '@/components/ExamProgress';
import { Button } from '@/components/ui/button';
import { Home, Save, CheckCircle, AlertCircle } from 'lucide-react';
import type { Exam, UserAnswers, Answer } from '@/types/exam';
import { useToast } from '@/hooks/use-toast';

interface ExamViewProps {
  exam: Exam;
  userAnswers: UserAnswers;
  onAnswerSelect: (questionNum: number, answer: Answer) => void;
  onSaveDraft: () => void;
  onFinish: () => void;
  onGoHome: () => void;
}

export const ExamView = ({ 
  exam, 
  userAnswers, 
  onAnswerSelect, 
  onSaveDraft, 
  onFinish, 
  onGoHome 
}: ExamViewProps) => {
  const { toast } = useToast();
  const answeredCount = Object.keys(userAnswers).length;

  const handleFinish = () => {
    if (answeredCount < exam.totalQuestions) {
      const unanswered = exam.totalQuestions - answeredCount;
      toast({
        title: "⚠️ Atenção",
        description: `Você ainda tem ${unanswered} questões sem resposta. Questões em branco serão consideradas erradas.`,
        variant: "destructive",
      });
      
      // Aguarda um pouco antes de perguntar
      setTimeout(() => {
        if (confirm(`Você respondeu apenas ${answeredCount} de ${exam.totalQuestions} questões.\n\nQuestões em branco serão consideradas ERRADAS.\n\nDeseja finalizar mesmo assim?`)) {
          onFinish();
        }
      }, 100);
    } else {
      onFinish();
    }
  };

  const handleSaveDraft = () => {
    onSaveDraft();
    toast({
      title: "✅ Rascunho salvo!",
      description: `${answeredCount} questões respondidas. Você pode voltar mais tarde.`,
    });
  };

  const scrollToUnanswered = () => {
    for (let i = 1; i <= exam.totalQuestions; i++) {
      if (!userAnswers[i]) {
        const element = document.getElementById(`q${i}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-4', 'ring-warning');
          setTimeout(() => {
            element.classList.remove('ring-4', 'ring-warning');
          }, 2000);
        }
        return;
      }
    }
    toast({
      title: "🎉 Parabéns!",
      description: "Todas as questões já foram respondidas!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <ExamHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header da prova */}
        <div className="bg-card rounded-xl shadow-lg p-4 sm:p-6 mb-6 border-2 border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-card-foreground">
                {exam.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {exam.totalQuestions} questões | {exam.subject} | {exam.year}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button onClick={onGoHome} variant="outline" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Início
              </Button>
              <Button onClick={handleSaveDraft} variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>
              <Button onClick={scrollToUnanswered} variant="outline" size="sm">
                <AlertCircle className="w-4 h-4 mr-2" />
                Próxima
              </Button>
              <Button 
                onClick={handleFinish} 
                className="bg-gradient-to-r from-success to-emerald-600 hover:opacity-90 text-white"
                size="sm"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Finalizar
              </Button>
            </div>
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-4 gap-6 pb-20">
          {/* Questões */}
          <div className="lg:col-span-3 space-y-4">
            {Array.from({ length: exam.totalQuestions }, (_, i) => i + 1).map((num) => (
              <div key={num} className="animate-in fade-in duration-300" style={{ animationDelay: `${num * 20}ms` }}>
                <QuestionCard
                  questionNum={num}
                  selectedAnswer={userAnswers[num]}
                  onSelect={onAnswerSelect}
                />
              </div>
            ))}
          </div>

          {/* Barra lateral de progresso */}
          <div className="lg:col-span-1">
            <ExamProgress answered={answeredCount} total={exam.totalQuestions} />
          </div>
        </div>

        {/* Barra de ações fixa na parte inferior */}
        <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
            <div className="text-sm font-medium text-muted-foreground">
              {answeredCount} / {exam.totalQuestions}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button onClick={handleSaveDraft} variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>
              <Button onClick={scrollToUnanswered} variant="outline" size="sm">
                <AlertCircle className="w-4 h-4 mr-2" />
                Próxima
              </Button>
              <Button 
                onClick={handleFinish} 
                className="bg-gradient-to-r from-success to-emerald-600 hover:opacity-90 text-white"
                size="sm"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Finalizar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
