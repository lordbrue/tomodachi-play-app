'use client';

import { Bell, Heart, MessageCircle, UserPlus } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4 sm:px-6 lg:px-8 pb-24 md:pb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Notificações</h1>

        {/* Filtros */}
        <div className="flex items-center space-x-4 mb-8 overflow-x-auto">
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold whitespace-nowrap">
            Todas
          </button>
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all whitespace-nowrap">
            Mensagens
          </button>
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all whitespace-nowrap">
            Curtidas
          </button>
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all whitespace-nowrap">
            Seguindo
          </button>
        </div>

        {/* Lista de Notificações */}
        <div className="space-y-4">
          {/* Exemplo de notificação */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Sistema</span> - Bem-vindo ao Tomodachi Play!
                </p>
                <p className="text-gray-500 text-sm mt-1">Há 2 minutos</p>
              </div>
            </div>
          </div>

          {/* Estado vazio */}
          <div className="text-center py-20">
            <Bell className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">Você está em dia!</p>
            <p className="text-gray-500 text-sm mt-2">Nenhuma notificação nova</p>
          </div>
        </div>
      </div>
    </div>
  );
}
