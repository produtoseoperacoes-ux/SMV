import { FileText, Save } from 'lucide-react';
import { Button } from './ui/button';
import type { Exam, SavedDraft } from '@/types/exam';

interface ExamCardProps {
  exam: Exam;
  savedDraft?: SavedDraft;
  onStart: (exam: Exam) => void;
}

export const ExamCard = ({ exam, savedDraft, onStart }: ExamCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border-2 border-border hover:border-primary/30 group">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-xl text-card-foreground">{exam.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {exam.totalQuestions} questões | {exam.subject}
            </p>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-6">{exam.description}</p>

      {savedDraft ? (
        <div className="mb-6 p-4 bg-warning-light rounded-xl border-2 border-warning/30">
          <div className="flex items-center gap-2 mb-2">
            <Save className="w-5 h-5 text-warning" />
            <p className="text-sm font-semibold text-warning-foreground">
              Rascunho salvo: {savedDraft.count} questões
            </p>
          </div>
          <p className="text-xs text-muted-foreground ml-7">{savedDraft.date}</p>
        </div>
      ) : (
        <div className="mb-6 p-4 bg-muted rounded-xl border-2 border-border">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Nenhuma tentativa anterior
          </p>
        </div>
      )}

      <Button
        onClick={() => onStart(exam)}
        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold"
        size="lg"
      >
        {savedDraft ? 'Continuar Prova' : 'Iniciar Prova'}
      </Button>
    </div>
  );
};
