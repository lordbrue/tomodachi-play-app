'use client';

import { Crown, Check } from 'lucide-react';
import Link from 'next/link';

export default function UpgradeVIPPage() {
  const features = {
    free: [
      'Acesso a todos os perfis',
      'Solicitar horários',
      'Chat básico',
      'Perfil simples'
    ],
    vip: [
      'Tudo do plano Free',
      'Atendimento prioritário',
      'Acesso a todas as avaliações',
      'Aba de Negociação exclusiva',
      'Aba de Lançamentos completa',
      'Perfil personalizado avançado',
      'Suporte premium',
      'Sem anúncios'
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl mb-6">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Seja <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">VIP</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Desbloqueie recursos exclusivos e tenha a melhor experiência no Tomodachi Play
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Free Plan */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Plano Free</h3>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold">R$ 0</span>
                <span className="text-gray-400">/mês</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {features.free.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/signup"
              className="block w-full py-3 text-center bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Começar Grátis
            </Link>
          </div>

          {/* VIP Plan */}
          <div className="relative bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border-2 border-yellow-500/50 rounded-2xl p-8">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-sm font-bold px-4 py-1 rounded-full">
                MAIS POPULAR
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <Crown className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold">Plano VIP</h3>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  R$ 29,90
                </span>
                <span className="text-gray-400">/mês</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {features.vip.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-[1.02] shadow-lg shadow-yellow-500/50">
              Assinar Agora
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Posso cancelar a qualquer momento?</h3>
              <p className="text-gray-400">
                Sim! Você pode cancelar sua assinatura VIP a qualquer momento. Ao cancelar, você manterá os benefícios até o fim do período pago e depois voltará ao plano Free.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">O que acontece com meu perfil se eu cancelar?</h3>
              <p className="text-gray-400">
                Seu perfil voltará ao modo simples, mas você não perderá nenhum dado. Suas sessões, favoritos e histórico permanecerão intactos.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Posso testar o VIP antes de assinar?</h3>
              <p className="text-gray-400">
                Oferecemos 7 dias de teste grátis para novos usuários VIP. Você pode cancelar antes do fim do período de teste sem ser cobrado.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Como funciona o atendimento prioritário?</h3>
              <p className="text-gray-400">
                Usuários VIP têm prioridade na fila de agendamento e recebem respostas mais rápidas dos acompanhantes. Você também tem acesso a horários exclusivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
