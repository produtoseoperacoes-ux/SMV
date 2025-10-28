import { Progress } from './ui/progress';

interface ExamProgressProps {
  answered: number;
  total: number;
}

export const ExamProgress = ({ answered, total }: ExamProgressProps) => {
  const percentage = Math.round((answered / total) * 100);

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 border-2 border-border sticky top-4">
      <h3 className="font-bold text-lg mb-4 text-card-foreground">Progresso</h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Questões respondidas</span>
            <span className="font-bold text-card-foreground">
              {answered} / {total}
            </span>
          </div>
          <Progress value={percentage} className="h-3" />
        </div>

        <div className="text-center pt-2">
          <div className="text-3xl font-bold text-primary">{percentage}%</div>
          <p className="text-xs text-muted-foreground mt-1">Concluído</p>
        </div>
      </div>
    </div>
  );
};
