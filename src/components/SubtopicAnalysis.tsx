import { Progress } from './ui/progress';
import type { SubtopicScore } from '@/types/exam';

interface SubtopicAnalysisProps {
  subtopicScores: { [key: string]: SubtopicScore };
}

export const SubtopicAnalysis = ({ subtopicScores }: SubtopicAnalysisProps) => {
  const subtopics = Object.entries(subtopicScores)
    .sort(([a], [b]) => a.localeCompare(b));

  const grouped: { [tema: string]: [string, SubtopicScore][] } = {};
  
  subtopics.forEach(([key, value]) => {
    if (!grouped[value.tema]) {
      grouped[value.tema] = [];
    }
    grouped[value.tema].push([key, value]);
  });

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 border-2 border-border">
      <h3 className="text-2xl font-bold mb-6 text-card-foreground">🎯 Desempenho por Subtema</h3>
      
      <div className="space-y-6">
        {Object.entries(grouped).map(([tema, subtopics]) => (
          <div key={tema}>
            <h4 className="font-bold text-lg mb-3 text-card-foreground border-b-2 border-primary pb-2">
              {tema}
            </h4>
            <div className="space-y-3 ml-4">
              {subtopics.map(([key, scores]) => {
                const percentage = Math.round((scores.correct / scores.total) * 100);
                
                return (
                  <div key={key} className="bg-muted/30 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        {scores.subtema}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground">
                        {scores.correct}/{scores.total}
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
