import { useState, useRef } from 'react';
import { ExamHeader } from '@/components/ExamHeader';
import { TopicAnalysis } from '@/components/TopicAnalysis';
import { SubtopicAnalysis } from '@/components/SubtopicAnalysis';
import { WrongQuestionsTable } from '@/components/WrongQuestionsTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Progress } from '@/components/ui/progress';
import { Home, RotateCcw, ChevronDown, ChevronUp, List, BarChart, FileDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
  const { toast } = useToast();
  const contentRef = useRef<HTMLDivElement>(null);
  const [openDetails, setOpenDetails] = useState(false);
  const [openWrongQuestions, setOpenWrongQuestions] = useState(false);
  const [openTopics, setOpenTopics] = useState(false);
  const [openSubtopics, setOpenSubtopics] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleSaveResult = async () => {
    if (!contentRef.current) return;
    
    setIsGeneratingPDF(true);
    toast({
      title: "Gerando PDF...",
      description: "Aguarde enquanto preparamos seu relatório.",
    });

    try {
      // Expandir todas as seções temporariamente
      const wasDetailsOpen = openDetails;
      const wasWrongQuestionsOpen = openWrongQuestions;
      const wasTopicsOpen = openTopics;
      const wasSubtopicsOpen = openSubtopics;
      
      setOpenDetails(true);
      setOpenWrongQuestions(true);
      setOpenTopics(true);
      setOpenSubtopics(true);

      // Aguardar renderização
      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`resultado-${exam.title}-${new Date().toLocaleDateString('pt-BR')}.pdf`);

      // Restaurar estado original
      setOpenDetails(wasDetailsOpen);
      setOpenWrongQuestions(wasWrongQuestionsOpen);
      setOpenTopics(wasTopicsOpen);
      setOpenSubtopics(wasSubtopicsOpen);

      toast({
        title: "PDF salvo!",
        description: "Seu resultado foi salvo em PDF com sucesso.",
      });
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      toast({
        title: "Erro ao gerar PDF",
        description: "Ocorreu um erro ao gerar o PDF. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

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

  // Mapear questões erradas para visualização
  const wrongQuestionNumbers = new Set(result.wrongQuestions.map(q => q.num));

  return (
    <div className="min-h-screen bg-background">
      <ExamHeader />

      <div ref={contentRef} className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Header Principal - Acertos */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Acertos
            </h1>
            <div className="text-5xl sm:text-6xl font-bold text-foreground">
              {result.correct} de {result.total}
            </div>
            
            {/* Grade de círculos */}
            <div className="mt-8 flex flex-wrap gap-2">
              {Array.from({ length: result.total }, (_, i) => i + 1).map((num) => {
                const isWrong = wrongQuestionNumbers.has(num);
                return (
                  <div
                    key={num}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white text-sm
                      ${isWrong ? 'bg-destructive' : 'bg-primary'}
                    `}
                  >
                    {num}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Botões de ação */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button onClick={onGoHome} variant="outline">
            <Home className="w-4 h-4 mr-2" />
            Início
          </Button>
          <Button onClick={onReset} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <RotateCcw className="w-4 h-4 mr-2" />
            Refazer
          </Button>
          <Button onClick={handleSaveResult} variant="outline" disabled={isGeneratingPDF}>
            <FileDown className="w-4 h-4 mr-2" />
            {isGeneratingPDF ? 'Gerando...' : 'Salvar PDF'}
          </Button>
        </div>

        {/* Focar agora */}
        {weakSubtopics.length > 0 && (
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Focar agora</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {weakSubtopics.map((st) => (
                <div key={st.key} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-medium text-foreground">{st.tema}</span>
                      <span className="text-sm text-muted-foreground">{st.subtema}</span>
                    </div>
                    <span className="text-lg font-bold text-foreground">{st.percentage}%</span>
                  </div>
                  <Progress value={st.percentage} className="h-3" />
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Mostrar detalhes */}
        <Card className="shadow-lg">
          <Collapsible open={openDetails} onOpenChange={setOpenDetails}>
            <CollapsibleTrigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors border-b border-border">
              <span className="font-bold text-lg text-foreground">Mostrar detalhes</span>
              {openDetails ? (
                <ChevronUp className="w-6 h-6 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-6 h-6 text-muted-foreground" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="p-0">
                {/* Questões Erradas */}
                <Collapsible open={openWrongQuestions} onOpenChange={setOpenWrongQuestions}>
                  <div className="border-b border-border">
                    <CollapsibleTrigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <List className="w-5 h-5 text-muted-foreground" />
                        <span className="font-semibold text-foreground">Questões erradas</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openWrongQuestions ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 pb-6">
                        <WrongQuestionsTable wrongQuestions={result.wrongQuestions} />
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>

                {/* Análise por Tema */}
                <Collapsible open={openTopics} onOpenChange={setOpenTopics}>
                  <div className="border-b border-border">
                    <CollapsibleTrigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <BarChart className="w-5 h-5 text-muted-foreground" />
                        <span className="font-semibold text-foreground">Questões por tema</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openTopics ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 pb-6 pt-4">
                        <TopicAnalysis topicScores={result.topicScores} />
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>

                {/* Análise por Subtema */}
                <Collapsible open={openSubtopics} onOpenChange={setOpenSubtopics}>
                  <div>
                    <CollapsibleTrigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <BarChart className="w-5 h-5 text-muted-foreground" />
                        <span className="font-semibold text-foreground">Análise detalhada por subtema</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openSubtopics ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 pb-6 pt-4">
                        <SubtopicAnalysis subtopicScores={result.subtopicScores} />
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      </div>
    </div>
  );
};
