import Link from 'next/link';
import { Sparkles, Shield, Heart, Video, MessageCircle, Mic, Star, Clock, Users } from 'lucide-react';
import { mockCompanions } from '@/lib/mock-data';

export default function HomePage() {
  const featuredCompanions = mockCompanions.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-pink-300">Assista anime com companhia virtual</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Nunca mais assista
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              anime sozinho
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Conecte-se com acompanhantes virtuais otakus e compartilhe a experiência de assistir seus animes favoritos juntos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/explore"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg shadow-pink-500/50"
            >
              Explorar Acompanhantes
            </Link>
            <Link 
              href="/become-companion"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Seja um Acompanhante
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-pink-400">500+</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Acompanhantes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">10k+</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Sessões</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">4.9★</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Avaliação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Como funciona
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simples, seguro e divertido. Escolha seu estilo de interação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Text */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Texto</h3>
              <p className="text-gray-400 mb-4">
                Chat em tempo real enquanto assistem juntos. Perfeito para comentários e reações.
              </p>
              <div className="text-pink-400 font-semibold">A partir de R$ 25/sessão</div>
            </div>

            {/* Voice */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Texto + Voz</h3>
              <p className="text-gray-400 mb-4">
                Converse por voz e chat. Experiência mais imersiva e pessoal.
              </p>
              <div className="text-purple-400 font-semibold">A partir de R$ 45/sessão</div>
            </div>

            {/* Video */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Texto + Vídeo</h3>
              <p className="text-gray-400 mb-4">
                Experiência premium com vídeo, voz e chat. Como assistir com um amigo.
              </p>
              <div className="text-blue-400 font-semibold">A partir de R$ 75/sessão</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Acompanhantes em destaque
              </h2>
              <p className="text-gray-400">Conheça alguns dos nossos melhores acompanhantes</p>
            </div>
            <Link 
              href="/explore"
              className="hidden sm:block text-pink-400 hover:text-pink-300 font-semibold"
            >
              Ver todos →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCompanions.map((companion) => (
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

          <div className="text-center mt-8 sm:hidden">
            <Link 
              href="/explore"
              className="text-pink-400 hover:text-pink-300 font-semibold"
            >
              Ver todos os acompanhantes →
            </Link>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-3xl p-8 sm:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Ambiente 100% seguro e moderado
                </h2>
                <p className="text-gray-400 mb-6">
                  Todas as sessões são monitoradas por IA. Regras de conduta claras, 
                  sistema de denúncias e banimento automático para comportamentos inadequados.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Sem conteúdo sexual</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Sem assédio</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Moderação 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Junte-se a milhares de otakus que já estão assistindo anime com companhia
          </p>
          <Link 
            href="/signup"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg shadow-pink-500/50"
          >
            Criar conta grátis
          </Link>
        </div>
      </section>
    </div>
  );
}
