import { Trophy, CheckCircle2, XCircle } from 'lucide-react';
import type { ExamResult } from '@/types/exam';

interface ResultHeaderProps {
  result: ExamResult;
}

const getClassification = (percentage: number) => {
  if (percentage >= 90) return { label: '🏆 EXCELENTE', color: 'from-success to-emerald-600' };
  if (percentage >= 70) return { label: '🎯 BOM', color: 'from-primary to-primary-glow' };
  if (percentage >= 50) return { label: '📚 REGULAR', color: 'from-warning to-amber-600' };
  return { label: '📖 PRECISA MELHORAR', color: 'from-destructive to-red-600' };
};

export const ResultHeader = ({ result }: ResultHeaderProps) => {
  const classification = getClassification(result.percentage);

  return (
    <div className={`bg-gradient-to-r ${classification.color} rounded-2xl shadow-2xl p-8 text-white`}>
      <div className="flex items-center justify-center gap-3 mb-6">
        <Trophy className="w-12 h-12" />
        <h2 className="text-4xl font-bold">{classification.label}</h2>
      </div>

      <div className="text-center mb-8">
        <div className="text-7xl font-bold mb-2">{result.percentage}%</div>
        <p className="text-xl text-white/90">de aproveitamento</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
          <div className="text-3xl font-bold">{result.total}</div>
          <div className="text-sm text-white/90 mt-1">Total</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
          <CheckCircle2 className="w-6 h-6 mx-auto mb-2" />
          <div className="text-3xl font-bold">{result.correct}</div>
          <div className="text-sm text-white/90 mt-1">Acertos</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
          <XCircle className="w-6 h-6 mx-auto mb-2" />
          <div className="text-3xl font-bold">{result.wrong}</div>
          <div className="text-sm text-white/90 mt-1">Erros</div>
        </div>
      </div>
    </div>
  );
};
