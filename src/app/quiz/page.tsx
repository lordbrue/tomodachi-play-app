'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, ChevronRight, ChevronLeft, Plus } from 'lucide-react';
import { streamingPlatforms, animeGenres, personalityTypes } from '@/lib/mock-data';
import type { StreamingPlatform, AnimeGenre, PersonalityType, ServiceType } from '@/lib/types';

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [answers, setAnswers] = useState({
    platforms: [] as string[],
    genres: [] as string[],
    frequency: '' as 'daily' | 'weekly' | 'monthly' | 'occasionally' | '',
    personality: [] as string[],
    servicePreference: '' as ServiceType | ''
  });

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // TODO: Salvar respostas do quiz
      router.push('/explore');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleSelection = (array: string[], item: string): string[] => {
    if (array.includes(item)) {
      return array.filter(i => i !== item);
    }
    return [...array, item];
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return answers.platforms.length > 0;
      case 2:
        return answers.genres.length > 0;
      case 3:
        return answers.frequency !== '';
      case 4:
        return answers.personality.length > 0;
      case 5:
        return answers.servicePreference !== '';
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Vamos conhecer você melhor!</h1>
          <p className="text-gray-400">Responda algumas perguntas para encontrarmos os melhores acompanhantes</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
            <span>Passo {step} de {totalSteps}</span>
            <span>{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Questions */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 min-h-[400px]">
          {/* Step 1: Plataformas */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Quais plataformas de anime você usa?</h2>
                <p className="text-gray-400">Selecione todas que você tem acesso</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {streamingPlatforms.map((platform) => (
                  <button
                    key={platform.id}
                    type="button"
                    onClick={() => setAnswers({
                      ...answers,
                      platforms: toggleSelection(answers.platforms, platform.id)
                    })}
                    className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                      answers.platforms.includes(platform.id)
                        ? 'border-pink-500 bg-pink-500/10'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="h-12 flex items-center justify-center mb-2">
                      {platform.id === 'outros' ? (
                        <Plus className="w-8 h-8 text-gray-400" />
                      ) : (
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-xl"
                          style={{ backgroundColor: platform.color }}
                        >
                          {platform.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="font-semibold text-sm">{platform.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Gêneros */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Quais gêneros você mais gosta?</h2>
                <p className="text-gray-400">Escolha seus favoritos</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {animeGenres.map((genre) => (
                  <button
                    key={genre.id}
                    type="button"
                    onClick={() => setAnswers({
                      ...answers,
                      genres: toggleSelection(answers.genres, genre.id)
                    })}
                    className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                      answers.genres.includes(genre.id)
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-3xl mb-2">{genre.emoji}</div>
                    <div className="font-semibold">{genre.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Frequência */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Com que frequência você assiste anime?</h2>
                <p className="text-gray-400">Isso nos ajuda a entender seu perfil</p>
              </div>
              <div className="space-y-3">
                {[
                  { value: 'daily', label: 'Todo dia', desc: 'Sou viciado em anime!' },
                  { value: 'weekly', label: 'Algumas vezes por semana', desc: 'Assisto regularmente' },
                  { value: 'monthly', label: 'Algumas vezes por mês', desc: 'Quando tenho tempo' },
                  { value: 'occasionally', label: 'Ocasionalmente', desc: 'Só quando encontro algo interessante' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setAnswers({ ...answers, frequency: option.value as any })}
                    className={`w-full p-6 rounded-xl border-2 text-left transition-all hover:scale-[1.02] ${
                      answers.frequency === option.value
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-semibold mb-1">{option.label}</div>
                    <div className="text-sm text-gray-400">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Personalidade */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Que tipo de personalidade você prefere?</h2>
                <p className="text-gray-400">Escolha o estilo de acompanhante ideal para você</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {personalityTypes.map((personality) => (
                  <button
                    key={personality.id}
                    type="button"
                    onClick={() => setAnswers({
                      ...answers,
                      personality: toggleSelection(answers.personality, personality.id)
                    })}
                    className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                      answers.personality.includes(personality.id)
                        ? 'border-pink-500 bg-pink-500/10'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-3xl mb-2">{personality.emoji}</div>
                    <div className="font-semibold">{personality.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Tipo de Atendimento */}
          {step === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Como você prefere interagir?</h2>
                <p className="text-gray-400">Escolha seu tipo de atendimento favorito</p>
              </div>
              <div className="space-y-3">
                {[
                  { value: 'text', label: 'Texto', desc: 'Chat em tempo real', price: 'A partir de R$ 25' },
                  { value: 'voice', label: 'Texto + Voz', desc: 'Chat e chamada de voz', price: 'A partir de R$ 45' },
                  { value: 'video', label: 'Texto + Vídeo', desc: 'Experiência completa com vídeo', price: 'A partir de R$ 75' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setAnswers({ ...answers, servicePreference: option.value as ServiceType })}
                    className={`w-full p-6 rounded-xl border-2 text-left transition-all hover:scale-[1.02] ${
                      answers.servicePreference === option.value
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-lg">{option.label}</div>
                      <div className="text-sm text-pink-400 font-semibold">{option.price}</div>
                    </div>
                    <div className="text-sm text-gray-400">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="flex items-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-[1.02] shadow-lg shadow-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span>{step === totalSteps ? 'Finalizar' : 'Próximo'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
