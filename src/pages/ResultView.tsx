import { ExamHeader } from '@/components/ExamHeader';
import { ResultHeader } from '@/components/ResultHeader';
import { TopicAnalysis } from '@/components/TopicAnalysis';
import { SubtopicAnalysis } from '@/components/SubtopicAnalysis';
import { WrongQuestionsTable } from '@/components/WrongQuestionsTable';
import { Button } from '@/components/ui/button';
import { Home, RotateCcw } from 'lucide-react';
import type { ExamResult, Exam } from '@/types/exam';

interface ResultViewProps {
  exam: Exam;
  result: ExamResult;
  onReset: () => void;
  onGoHome: () => void;
}

export const ResultView = ({ exam, result, onReset, onGoHome }: ResultViewProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <ExamHeader />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Título */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Resultado - {exam.title}
          </h2>
          <p className="text-muted-foreground mt-1">
            Análise detalhada do seu desempenho
          </p>
        </div>

        {/* Header do resultado */}
        <div className="mb-8 animate-in fade-in duration-500">
          <ResultHeader result={result} />
        </div>

        {/* Botões de ação */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button onClick={onGoHome} variant="outline" size="lg">
            <Home className="w-5 h-5 mr-2" />
            Voltar ao Início
          </Button>
          <Button 
            onClick={onReset} 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
            size="lg"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Refazer Prova
          </Button>
        </div>

        {/* Análises */}
        <div className="space-y-8">
          <div className="animate-in fade-in duration-500" style={{ animationDelay: '100ms' }}>
            <TopicAnalysis topicScores={result.topicScores} />
          </div>

          <div className="animate-in fade-in duration-500" style={{ animationDelay: '200ms' }}>
            <SubtopicAnalysis subtopicScores={result.subtopicScores} />
          </div>

          <div className="animate-in fade-in duration-500" style={{ animationDelay: '300ms' }}>
            <WrongQuestionsTable wrongQuestions={result.wrongQuestions} />
          </div>
        </div>

        {/* Dicas finais */}
        <div className="mt-12 p-6 bg-card rounded-xl shadow-lg border-2 border-primary/20 animate-in fade-in duration-500" style={{ animationDelay: '400ms' }}>
          <h3 className="font-bold text-xl mb-3 text-card-foreground">
            📚 Próximos Passos:
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Revise os temas onde teve mais dificuldade
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Estude os subtemas com menor aproveitamento
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Pratique mais questões sobre os assuntos em que errou
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Tente refazer a prova para melhorar sua pontuação
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
