import { useState } from 'react';
import { FileText } from 'lucide-react';
import { ExamCard } from '@/components/ExamCard';
import { ExamHeader } from '@/components/ExamHeader';
import { Button } from '@/components/ui/button';
import type { Exam, SavedDraft } from '@/types/exam';
import { OFFICIAL_EXAMS, PRACTICE_EXAMS } from '@/data/examData';

interface HomeProps {
  savedDrafts: { [examId: string]: SavedDraft };
  onStartExam: (exam: Exam) => void;
}

export const Home = ({ savedDrafts, onStartExam }: HomeProps) => {
  const [selectedOfficialId, setSelectedOfficialId] = useState('');
  const [selectedPracticeId, setSelectedPracticeId] = useState('');

  const selectedOfficial = OFFICIAL_EXAMS.find(e => e.id === selectedOfficialId);
  const selectedPractice = PRACTICE_EXAMS.find(e => e.id === selectedPracticeId);

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === 'Difícil') return 'bg-destructive/10 text-destructive border-destructive/30';
    if (difficulty === 'Média') return 'bg-warning/10 text-warning-foreground border-warning/30';
    return 'bg-success/10 text-success-foreground border-success/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/5">
      <ExamHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="mb-8 sm:mb-10 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-3">👤 Bem-vindo, Estudante!</h2>
          <p className="text-base sm:text-lg text-muted-foreground">Escolha uma prova oficial ou um simulado:</p>
        </div>

        {/* Two Sections: Official Exams and Practice Exams */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
          
          {/* PROVAS OFICIAIS */}
          <div className="bg-card rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-primary/20 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-primary to-primary-glow p-3 rounded-xl shadow-lg">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground">Provas Oficiais</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Petrobras, Transpetro, Eletrobras</p>
              </div>
            </div>

            {/* Dropdown Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-card-foreground mb-2">
                Selecione a prova oficial:
              </label>
              <select 
                value={selectedOfficialId}
                onChange={(e) => setSelectedOfficialId(e.target.value)}
                className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none font-medium text-foreground bg-background"
              >
                <option value="">-- Escolha uma prova --</option>
                {OFFICIAL_EXAMS.map(exam => (
                  <option key={exam.id} value={exam.id}>
                    {exam.title} ({exam.year}) - {exam.totalQuestions} questões
                  </option>
                ))}
              </select>
            </div>

            {/* Exam Details */}
            {selectedOfficial ? (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-xl p-4 sm:p-6 border-2 border-primary/20">
                  <h4 className="font-bold text-base sm:text-lg text-card-foreground mb-3">{selectedOfficial.title}</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="font-semibold text-card-foreground">📅 Ano:</span> {selectedOfficial.year}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold text-card-foreground">📚 Banca:</span> {selectedOfficial.banca}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold text-card-foreground">📝 Questões:</span> {selectedOfficial.totalQuestions}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold text-card-foreground">🔥 Dificuldade:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(selectedOfficial.difficulty)}`}>
                        {selectedOfficial.difficulty}
                      </span>
                    </p>
                    <p className="text-muted-foreground mt-3 italic">{selectedOfficial.description}</p>
                  </div>

                  {savedDrafts[selectedOfficial.id] && (
                    <div className="mt-4 p-3 bg-warning-light rounded-lg border-2 border-warning/30">
                      <p className="text-sm text-warning-foreground font-semibold">
                        💾 Rascunho salvo: {savedDrafts[selectedOfficial.id].count} questões
                      </p>
                      <p className="text-xs text-muted-foreground">{savedDrafts[selectedOfficial.id].date}</p>
                    </div>
                  )}
                </div>

                <Button
                  onClick={() => onStartExam(selectedOfficial)}
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
                  size="lg"
                >
                  {savedDrafts[selectedOfficial.id] ? '▶️ Continuar Prova' : '🚀 Iniciar Prova'}
                </Button>
              </div>
            ) : (
              <div className="bg-muted/50 rounded-xl p-8 sm:p-12 text-center border-2 border-dashed border-border">
                <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">Selecione uma prova no menu acima</p>
              </div>
            )}
          </div>

          {/* SIMULADOS */}
          <div className="bg-card rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-success/20 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-success to-emerald-600 p-3 rounded-xl shadow-lg">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground">Simulados</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Questões diversas para treinar</p>
              </div>
            </div>

            {/* Dropdown Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-card-foreground mb-2">
                Selecione o simulado:
              </label>
              <select 
                value={selectedPracticeId}
                onChange={(e) => setSelectedPracticeId(e.target.value)}
                className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-success focus:outline-none font-medium text-foreground bg-background"
              >
                <option value="">-- Escolha um simulado --</option>
                {PRACTICE_EXAMS.map(exam => (
                  <option key={exam.id} value={exam.id}>
                    {exam.title} - {exam.totalQuestions} questões
                  </option>
                ))}
              </select>
            </div>

            {/* Exam Details */}
            {selectedPractice ? (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-success/5 to-emerald-600/5 rounded-xl p-4 sm:p-6 border-2 border-success/20">
                  <h4 className="font-bold text-base sm:text-lg text-card-foreground mb-3">{selectedPractice.title}</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="font-semibold text-card-foreground">📚 Tópicos:</span> {selectedPractice.topics}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold text-card-foreground">📝 Questões:</span> {selectedPractice.totalQuestions}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold text-card-foreground">🔥 Dificuldade:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(selectedPractice.difficulty)}`}>
                        {selectedPractice.difficulty}
                      </span>
                    </p>
                    <p className="text-muted-foreground mt-3 italic">{selectedPractice.description}</p>
                  </div>

                  {savedDrafts[selectedPractice.id] && (
                    <div className="mt-4 p-3 bg-warning-light rounded-lg border-2 border-warning/30">
                      <p className="text-sm text-warning-foreground font-semibold">
                        💾 Rascunho salvo: {savedDrafts[selectedPractice.id].count} questões
                      </p>
                      <p className="text-xs text-muted-foreground">{savedDrafts[selectedPractice.id].date}</p>
                    </div>
                  )}
                </div>

                <Button
                  onClick={() => onStartExam(selectedPractice)}
                  className="w-full bg-gradient-to-r from-success to-emerald-600 hover:opacity-90"
                  size="lg"
                >
                  {savedDrafts[selectedPractice.id] ? '▶️ Continuar Simulado' : '🚀 Iniciar Simulado'}
                </Button>
              </div>
            ) : (
              <div className="bg-muted/50 rounded-xl p-8 sm:p-12 text-center border-2 border-dashed border-border">
                <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">Selecione um simulado no menu acima</p>
              </div>
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-2 border-primary/20 rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in">
          <h3 className="font-bold text-xl sm:text-2xl text-card-foreground mb-4 flex items-center gap-3">
            💡 Como Funciona o Sistema
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm sm:text-base text-muted-foreground">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">1</div>
              <p>Escolha entre <strong className="text-card-foreground">Provas Oficiais</strong> ou <strong className="text-card-foreground">Simulados</strong></p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">2</div>
              <p>Responda as questões no seu ritmo</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">3</div>
              <p>Salve o rascunho a qualquer momento</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">4</div>
              <p>Veja relatório completo com análise por <strong className="text-card-foreground">tema</strong> e <strong className="text-card-foreground">subtema</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
