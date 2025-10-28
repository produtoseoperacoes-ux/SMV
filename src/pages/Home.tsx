import { ExamHeader } from '@/components/ExamHeader';
import { ExamCard } from '@/components/ExamCard';
import { EXAMS } from '@/data/examData';
import type { Exam, SavedDraft } from '@/types/exam';

interface HomeProps {
  savedDrafts: { [examId: number]: SavedDraft };
  onStartExam: (exam: Exam) => void;
}

export const Home = ({ savedDrafts, onStartExam }: HomeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <ExamHeader />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="mb-8 sm:mb-10 animate-in fade-in duration-500">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            👤 Bem-vindo, Estudante!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Escolha uma prova abaixo e comece a treinar:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {EXAMS.map((exam) => (
            <div key={exam.id} className="animate-in fade-in duration-500" style={{ animationDelay: `${exam.id * 100}ms` }}>
              <ExamCard
                exam={exam}
                savedDraft={savedDrafts[exam.id]}
                onStart={onStartExam}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card rounded-xl shadow-lg border-2 border-primary/20">
          <h3 className="font-bold text-xl mb-3 text-card-foreground">💡 Dicas para um bom desempenho:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Responda com calma, sem pressa
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Use o botão "Salvar Rascunho" para não perder seu progresso
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Ao final, você terá uma análise detalhada por tema e subtema
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Revise as questões erradas para melhorar seu aprendizado
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
