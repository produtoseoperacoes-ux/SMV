import { useState } from 'react';
import { ExamHeader } from '@/components/ExamHeader';
import { ResultHeader } from '@/components/ResultHeader';
import { TopicAnalysis } from '@/components/TopicAnalysis';
import { SubtopicAnalysis } from '@/components/SubtopicAnalysis';
import { WrongQuestionsTable } from '@/components/WrongQuestionsTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Home, RotateCcw, ChevronDown, AlertTriangle } from 'lucide-react';
import type { ExamResult, Exam } from '@/types/exam';

interface WeakSubtopic {
  key: string;
  tema: string;
  subtema: string;
  correct: number;
  total: number;
  percentage: number;
}

interface ResultViewProps {
  exam: Exam;
  result: ExamResult;
  onReset: () => void;
  onGoHome: () => void;
}

export const ResultView = ({ exam, result, onReset, onGoHome }: ResultViewProps) => {
  const [openTopics, setOpenTopics] = useState(false);
  const [openSubtopics, setOpenSubtopics] = useState(false);

  // Calcular os 5 subtemas com pior desempenho
  const weakSubtopics: WeakSubtopic[] = Object.entries(result.subtopicScores)
    .map(([key, scores]) => ({
      key,
      ...scores,
      percentage: Math.round((scores.correct / scores.total) * 100)
    }))
    .filter(s => s.percentage < 70)
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 5);

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
          {/* Questões Erradas - Prioridade */}
          <div className="animate-in fade-in duration-500" style={{ animationDelay: '100ms' }}>
            <WrongQuestionsTable wrongQuestions={result.wrongQuestions} />
          </div>

          {/* Top Assuntos para Focar */}
          {weakSubtopics.length > 0 && (
            <Card className="bg-gradient-to-r from-warning-light to-orange-50 border-2 border-warning shadow-xl animate-in fade-in duration-500" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning-foreground">
                  <AlertTriangle className="w-6 h-6" />
                  Onde Você Precisa Focar
                </CardTitle>
                <p className="text-sm text-warning-foreground/90">📚 Estude estes assuntos para aumentar sua nota:</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {weakSubtopics.map((st, idx) => (
                  <div key={st.key} className="bg-card rounded-lg p-4 shadow-sm border border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full ${st.percentage < 50 ? 'bg-destructive' : 'bg-warning'} text-white font-bold flex items-center justify-center text-sm`}>
                          {idx + 1}
                        </span>
                        <div>
                          <p className="font-bold text-card-foreground">{st.subtema}</p>
                          <p className="text-xs text-muted-foreground">{st.tema}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-2xl font-bold ${st.percentage < 50 ? 'text-destructive' : 'text-warning-foreground'}`}>
                          {st.percentage}%
                        </p>
                        <p className="text-xs text-muted-foreground">{st.correct}/{st.total}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Análise Detalhada - Seções Expansíveis */}
          <Card className="shadow-xl animate-in fade-in duration-500" style={{ animationDelay: '300ms' }}>
            <CardHeader>
              <CardTitle>📊 Análise Detalhada</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Análise por Tema - Expansível */}
              <Collapsible open={openTopics} onOpenChange={setOpenTopics}>
                <div className="border-b border-border">
                  <CollapsibleTrigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-lg">📚</span>
                      </div>
                      <span className="font-bold text-lg text-card-foreground">Ver Análise por Tema Principal</span>
                    </div>
                    <ChevronDown className={`w-6 h-6 text-muted-foreground transition-transform ${openTopics ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6">
                      <TopicAnalysis topicScores={result.topicScores} />
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>

              {/* Análise por Subtema - Expansível */}
              <Collapsible open={openSubtopics} onOpenChange={setOpenSubtopics}>
                <div className="border-b border-border">
                  <CollapsibleTrigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-lg">📋</span>
                      </div>
                      <span className="font-bold text-lg text-card-foreground">Ver Todos os Subtemas Detalhados</span>
                    </div>
                    <ChevronDown className={`w-6 h-6 text-muted-foreground transition-transform ${openSubtopics ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6">
                      <SubtopicAnalysis subtopicScores={result.subtopicScores} />
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </CardContent>
          </Card>
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
