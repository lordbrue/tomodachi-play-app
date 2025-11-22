'use client';

import { use } from 'react';
import Link from 'next/link';
import { Star, MapPin, Clock, Shield, Heart, MessageCircle, Mic, Video, Calendar, ArrowLeft } from 'lucide-react';
import { mockCompanions, animeGenres, streamingPlatforms, personalityTypes } from '@/lib/mock-data';

export default function CompanionProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const companion = mockCompanions.find(c => c.id === id);

  if (!companion) {
    return (
      <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😢</div>
          <h1 className="text-2xl font-bold mb-2">Acompanhante não encontrado</h1>
          <Link href="/explore" className="text-pink-400 hover:text-pink-300">
            ← Voltar para explorar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/explore"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden sticky top-24">
              {/* Avatar */}
              <div className="relative aspect-square">
                <img 
                  src={companion.avatar} 
                  alt={companion.name}
                  className="w-full h-full object-cover"
                />
                {companion.isOnline && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1.5 rounded-full flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span>Online agora</span>
                  </div>
                )}
                {companion.isVerified && (
                  <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-3 py-1.5 rounded-full">
                    ✓ Verificada
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl font-bold">{companion.name}</h1>
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500" />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-lg font-semibold">{companion.rating}</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {companion.totalSessions} sessões realizadas
                  </div>
                </div>

                {/* Prices */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4 text-pink-400" />
                      <span className="text-sm">Texto</span>
                    </div>
                    <span className="font-semibold text-pink-400">R$ {companion.priceRange.text}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Mic className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Texto + Voz</span>
                    </div>
                    <span className="font-semibold text-purple-400">R$ {companion.priceRange.voice}</span>
                  </div>
                  {companion.priceRange.video > 0 && (
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Video className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">Texto + Vídeo</span>
                      </div>
                      <span className="font-semibold text-blue-400">R$ {companion.priceRange.video}</span>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all mb-3">
                  Agendar Sessão
                </button>
                <button className="w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Sobre</h2>
              <p className="text-gray-300 leading-relaxed">{companion.bio}</p>
            </div>

            {/* Personality */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Personalidade</h2>
              <div className="flex flex-wrap gap-2">
                {companion.personality.map(p => {
                  const personality = personalityTypes.find(pt => pt.id === p);
                  return (
                    <span key={p} className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-sm">
                      {personality?.emoji} {personality?.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Genres */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Gêneros Favoritos</h2>
              <div className="flex flex-wrap gap-2">
                {companion.genres.map(g => {
                  const genre = animeGenres.find(ag => ag.id === g);
                  return (
                    <span key={g} className="px-4 py-2 bg-white/5 rounded-full text-sm">
                      {genre?.emoji} {genre?.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Platforms */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Plataformas de Streaming</h2>
              <div className="flex flex-wrap gap-2">
                {companion.platforms.map(p => {
                  const platform = streamingPlatforms.find(sp => sp.id === p);
                  return (
                    <span key={p} className="px-4 py-2 bg-white/5 rounded-full text-sm">
                      {platform?.icon} {platform?.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Disponibilidade</span>
              </h2>
              <div className="space-y-3">
                {companion.availability.map((day, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-24 text-gray-400 text-sm font-medium">{day.day}</div>
                    <div className="flex-1 flex flex-wrap gap-2">
                      {day.slots.map((slot, slotIndex) => (
                        <span key={slotIndex} className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded text-sm">
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Notice */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Ambiente Seguro</h3>
                  <p className="text-sm text-gray-400">
                    Todas as sessões são monitoradas. Comportamentos inadequados resultam em banimento imediato. 
                    Mantenha o respeito e aproveite a experiência!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
