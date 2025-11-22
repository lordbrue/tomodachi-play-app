'use client';

import Link from 'next/link';
import { Star, Users, Heart, CheckCircle } from 'lucide-react';

export default function BecomeCompanionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800">
      {/* Header */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Seja um <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Acompanhante</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Compartilhe sua paixão por anime e conecte-se com pessoas incríveis.
            Ganhe dinheiro fazendo o que ama!
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Ganhe Dinheiro</h3>
              <p className="text-gray-300">Receba por cada sessão de acompanhamento</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700">
              <Users className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Conecte-se</h3>
              <p className="text-gray-300">Faça amizades e compartilhe paixões</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700">
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Seja Você Mesmo</h3>
              <p className="text-gray-300">Expresse sua personalidade otaku</p>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Requisitos para se tornar um Acompanhante</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Idade</h4>
                  <p className="text-gray-300">Ter pelo menos 18 anos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Paixão por Anime</h4>
                  <p className="text-gray-300">Amor genuíno pela cultura anime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Disponibilidade</h4>
                  <p className="text-gray-300">Tempo para sessões regulares</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Comunicação</h4>
                  <p className="text-gray-300">Habilidades de comunicação claras</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/signup"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105"
            >
              Começar Minha Jornada
            </Link>
            <p className="text-gray-400 mt-4">
              Já tem conta? <Link href="/login" className="text-pink-400 hover:text-pink-300">Faça login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}