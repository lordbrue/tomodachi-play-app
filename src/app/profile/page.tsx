'use client';

import { User, Settings, Heart, Clock } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header do Perfil */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Usuário</h1>
              <p className="text-gray-400">Membro desde 2024</p>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">0</div>
            <div className="text-gray-400 text-sm">Sessões</div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">0</div>
            <div className="text-gray-400 text-sm">Favoritos</div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <Settings className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">Básico</div>
            <div className="text-gray-400 text-sm">Plano</div>
          </div>
        </div>

        {/* Configurações */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Configurações</h2>
          <div className="space-y-4">
            <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
              Editar Perfil
            </button>
            <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
              Histórico de Sessões
            </button>
            <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
              Métodos de Pagamento
            </button>
            <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
              Privacidade e Segurança
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
