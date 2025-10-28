import { XCircle } from 'lucide-react';
import type { WrongQuestion } from '@/types/exam';

interface WrongQuestionsTableProps {
  wrongQuestions: WrongQuestion[];
}

export const WrongQuestionsTable = ({ wrongQuestions }: WrongQuestionsTableProps) => {
  if (wrongQuestions.length === 0) {
    return (
      <div className="bg-success-light rounded-xl shadow-lg p-8 border-2 border-success text-center">
        <h3 className="text-2xl font-bold text-success-foreground mb-2">
          🎉 Parabéns! Nenhum erro!
        </h3>
        <p className="text-success-foreground/80">Você acertou todas as questões!</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 border-2 border-border">
      <div className="flex items-center gap-3 mb-6">
        <XCircle className="w-6 h-6 text-destructive" />
        <h3 className="text-2xl font-bold text-card-foreground">
          Questões Erradas ({wrongQuestions.length})
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">
                Questão
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">
                Tema
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">
                Subtema
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">
                Sua Resposta
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">
                Gabarito
              </th>
            </tr>
          </thead>
          <tbody>
            {wrongQuestions.map((q) => (
              <tr key={q.num} className="border-b border-border hover:bg-muted/50">
                <td className="py-3 px-4 font-bold text-card-foreground">
                  #{q.num}
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground">
                  {q.tema}
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground">
                  {q.subtema}
                </td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 bg-destructive-light text-destructive rounded-md font-semibold text-sm">
                    {q.userAnswer}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 bg-success-light text-success rounded-md font-semibold text-sm">
                    {q.correctAnswer}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
