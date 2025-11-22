'use client';

import { Crown, Check, Zap } from 'lucide-react';

export default function VIPPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4 sm:px-6 lg:px-8 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Tomodachi VIP</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Desbloqueie recursos exclusivos e tenha a melhor experiência
          </p>
        </div>

        {/* Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Básico */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Básico</h3>
            <div className="text-4xl font-bold mb-6">Grátis</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Acesso básico</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Buscar acompanhantes</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-lg font-semibold">
              Plano Atual
            </button>
          </div>

          {/* Premium */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-sm px-4 py-1 rounded-full">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <div className="text-4xl font-bold mb-6">
              R$ 29,90<span className="text-lg text-gray-400">/mês</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Tudo do Básico</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Sem anúncios</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Prioridade no suporte</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Badge exclusivo</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
              Assinar Premium
            </button>
          </div>

          {/* Elite */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Elite</h3>
            <div className="text-4xl font-bold mb-6">
              R$ 59,90<span className="text-lg text-gray-400">/mês</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Tudo do Premium</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Descontos em sessões</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Acesso antecipado</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Badge Elite</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Assinar Elite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
