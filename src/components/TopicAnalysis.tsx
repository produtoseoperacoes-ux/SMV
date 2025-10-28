import { Progress } from './ui/progress';
import type { TopicScore } from '@/types/exam';

interface TopicAnalysisProps {
  topicScores: { [topic: string]: TopicScore };
}

export const TopicAnalysis = ({ topicScores }: TopicAnalysisProps) => {
  const topics = Object.entries(topicScores).sort(([a], [b]) => a.localeCompare(b));

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 border-2 border-border">
      <h3 className="text-2xl font-bold mb-6 text-card-foreground">📊 Desempenho por Tema</h3>
      
      <div className="space-y-4">
        {topics.map(([tema, scores]) => {
          const percentage = Math.round((scores.correct / scores.total) * 100);
          
          return (
            <div key={tema} className="bg-muted/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-sm text-card-foreground">{tema}</h4>
                <span className="text-xs font-bold text-muted-foreground">
                  {scores.correct}/{scores.total}
                </span>
              </div>
              <Progress value={percentage} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">
                {percentage}% de aproveitamento
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
