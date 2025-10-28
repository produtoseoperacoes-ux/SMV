import { BookOpen } from 'lucide-react';

export const ExamHeader = () => {
  return (
    <div className="bg-gradient-to-r from-primary via-primary-glow to-accent shadow-lg border-b-4 border-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg">
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Sistema de Provas
            </h1>
            <p className="text-white/90 mt-1 text-sm sm:text-base">
              Classificação detalhada por <strong>tema e subtema</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
