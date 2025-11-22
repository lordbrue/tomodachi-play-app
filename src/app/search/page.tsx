'use client';

import { Search as SearchIcon, Filter } from 'lucide-react';

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4 sm:px-6 lg:px-8 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Buscar Acompanhantes</h1>

        {/* Barra de Busca */}
        <div className="mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nome, anime favorito..."
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-4 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Filtros */}
        <div className="flex items-center space-x-4 mb-8">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
            <Filter className="w-4 h-4" />
            <span>Filtros</span>
          </button>
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
            Disponível Agora
          </button>
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
            Melhor Avaliados
          </button>
        </div>

        {/* Resultados */}
        <div className="text-center py-20">
          <p className="text-gray-400">Nenhum acompanhante encontrado</p>
          <p className="text-gray-500 text-sm mt-2">Tente ajustar os filtros de busca</p>
        </div>
      </div>
    </div>
  );
}
