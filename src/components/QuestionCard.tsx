import { cn } from '@/lib/utils';
import type { Answer } from '@/types/exam';

interface QuestionCardProps {
  questionNum: number;
  selectedAnswer?: Answer;
  onSelect: (questionNum: number, answer: Answer) => void;
}

const ANSWERS: Answer[] = ['A', 'B', 'C', 'D', 'E'];

export const QuestionCard = ({ questionNum, selectedAnswer, onSelect }: QuestionCardProps) => {
  return (
    <div
      id={`q${questionNum}`}
      className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6 border-2 border-border hover:translate-x-1"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-card-foreground">
          Questão {questionNum}
        </h3>
        {selectedAnswer && (
          <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
            Respondida: {selectedAnswer}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {ANSWERS.map((answer) => (
          <button
            key={answer}
            onClick={() => onSelect(questionNum, answer)}
            className={cn(
              "px-6 py-3 rounded-lg border-2 font-semibold transition-all duration-200",
              "hover:scale-105 hover:shadow-md",
              selectedAnswer === answer
                ? "bg-primary text-primary-foreground border-primary scale-105"
                : "bg-background text-foreground border-border hover:border-primary/50"
            )}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};
