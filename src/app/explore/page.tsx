'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Star, Users, Clock, MessageCircle, Mic, Video } from 'lucide-react';
import { mockCompanions, animeGenres, streamingPlatforms, personalityTypes } from '@/lib/mock-data';
import { AnimeGenre, StreamingPlatform, PersonalityType, ServiceType } from '@/lib/types';

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<AnimeGenre[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<StreamingPlatform[]>([]);
  const [selectedPersonalities, setSelectedPersonalities] = useState<PersonalityType[]>([]);
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [onlineOnly, setOnlineOnly] = useState(false);

  // Filter companions
  const filteredCompanions = mockCompanions.filter(companion => {
    const matchesSearch = companion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         companion.bio.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesGenres = selectedGenres.length === 0 || 
                         selectedGenres.some(g => companion.genres.includes(g));
    
    const matchesPlatforms = selectedPlatforms.length === 0 || 
                            selectedPlatforms.some(p => companion.platforms.includes(p));
    
    const matchesPersonalities = selectedPersonalities.length === 0 || 
                                selectedPersonalities.some(p => companion.personality.includes(p));
    
    const matchesServices = selectedServices.length === 0 || 
                           selectedServices.some(s => companion.services.includes(s));
    
    const matchesOnline = !onlineOnly || companion.isOnline;

    return matchesSearch && matchesGenres && matchesPlatforms && 
           matchesPersonalities && matchesServices && matchesOnline;
  });

  const toggleFilter = <T,>(array: T[], setArray: (arr: T[]) => void, item: T) => {
    if (array.includes(item)) {
      setArray(array.filter(i => i !== item));
    } else {
      setArray([...array, item]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Explorar Acompanhantes
          </h1>
          <p className="text-gray-400">
            Encontre o acompanhante perfeito para assistir anime juntos
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por nome ou descrição..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Filtros</span>
              {(selectedGenres.length + selectedPlatforms.length + selectedPersonalities.length + selectedServices.length) > 0 && (
                <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {selectedGenres.length + selectedPlatforms.length + selectedPersonalities.length + selectedServices.length}
                </span>
              )}
            </button>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={onlineOnly}
                onChange={(e) => setOnlineOnly(e.target.checked)}
                className="w-4 h-4 rounded border-gray-600 text-pink-500 focus:ring-pink-500"
              />
              <span className="text-sm text-gray-400">Apenas online</span>
            </label>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              {/* Genres */}
              <div>
                <h3 className="text-sm font-semibold mb-3">Gêneros de Anime</h3>
                <div className="flex flex-wrap gap-2">
                  {animeGenres.map(genre => (
                    <button
                      key={genre.id}
                      onClick={() => toggleFilter(selectedGenres, setSelectedGenres, genre.id as AnimeGenre)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                        selectedGenres.includes(genre.id as AnimeGenre)
                          ? 'bg-pink-500 text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {genre.emoji} {genre.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Platforms */}
              <div>
                <h3 className="text-sm font-semibold mb-3">Plataformas</h3>
                <div className="flex flex-wrap gap-2">
                  {streamingPlatforms.map(platform => (
                    <button
                      key={platform.id}
                      onClick={() => toggleFilter(selectedPlatforms, setSelectedPlatforms, platform.id as StreamingPlatform)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                        selectedPlatforms.includes(platform.id as StreamingPlatform)
                          ? 'bg-purple-500 text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {platform.icon} {platform.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personalities */}
              <div>
                <h3 className="text-sm font-semibold mb-3">Personalidade</h3>
                <div className="flex flex-wrap gap-2">
                  {personalityTypes.map(personality => (
                    <button
                      key={personality.id}
                      onClick={() => toggleFilter(selectedPersonalities, setSelectedPersonalities, personality.id as PersonalityType)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                        selectedPersonalities.includes(personality.id as PersonalityType)
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {personality.emoji} {personality.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold mb-3">Tipo de Atendimento</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => toggleFilter(selectedServices, setSelectedServices, 'text')}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm transition-colors ${
                      selectedServices.includes('text')
                        ? 'bg-pink-500 text-white'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Texto</span>
                  </button>
                  <button
                    onClick={() => toggleFilter(selectedServices, setSelectedServices, 'voice')}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm transition-colors ${
                      selectedServices.includes('voice')
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <Mic className="w-4 h-4" />
                    <span>Voz</span>
                  </button>
                  <button
                    onClick={() => toggleFilter(selectedServices, setSelectedServices, 'video')}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm transition-colors ${
                      selectedServices.includes('video')
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    <span>Vídeo</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-4 text-gray-400">
          {filteredCompanions.length} acompanhante{filteredCompanions.length !== 1 ? 's' : ''} encontrado{filteredCompanions.length !== 1 ? 's' : ''}
        </div>

        {/* Companions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanions.map((companion) => (
            <Link 
              key={companion.id}
              href={`/companion/${companion.id}`}
              className="group"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={companion.avatar} 
                    alt={companion.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {companion.isOnline && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span>Online</span>
                    </div>
                  )}
                  {companion.isVerified && (
                    <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                      ✓ Verificada
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{companion.name}</h3>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <span className="text-sm font-semibold">{companion.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {companion.bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {companion.genres.slice(0, 3).map(genre => (
                      <span key={genre} className="text-xs bg-white/5 px-2 py-1 rounded">
                        {animeGenres.find(g => g.id === genre)?.emoji}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{companion.totalSessions} sessões</span>
                    </div>
                    <div className="text-pink-400 font-semibold">
                      R$ {companion.priceRange.text}+
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredCompanions.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😢</div>
            <h3 className="text-xl font-bold mb-2">Nenhum acompanhante encontrado</h3>
            <p className="text-gray-400 mb-6">
              Tente ajustar seus filtros ou busca
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGenres([]);
                setSelectedPlatforms([]);
                setSelectedPersonalities([]);
                setSelectedServices([]);
                setOnlineOnly(false);
              }}
              className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
