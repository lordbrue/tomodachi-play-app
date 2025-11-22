import Link from 'next/link';
import { Heart, Shield, HelpCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Tomodachi Play
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Marketplace seguro para assistir animes com acompanhantes virtuais. 
              Conecte-se com otakus e compartilhe sua paixão por anime.
            </p>
            <div className="flex items-center space-x-2 text-gray-500 text-xs">
              <Shield className="w-4 h-4" />
              <span>Ambiente 100% seguro e moderado</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Plataforma</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/explore" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Explorar Acompanhantes
                </Link>
              </li>
              <li>
                <Link href="/become-companion" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Seja um Acompanhante
                </Link>
              </li>
              <li>
                <Link href="/vip" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Plano VIP
                </Link>
              </li>
              <li>
                <Link href="/releases" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Lançamentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center space-x-1">
                  <HelpCircle className="w-4 h-4" />
                  <span>Central de Ajuda</span>
                </Link>
              </li>
              <li>
                <Link href="/security-policy" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Segurança
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 Tomodachi Play. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-1 text-gray-500 text-sm mt-4 md:mt-0">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>para a comunidade otaku</span>
          </div>
        </div>
      </div>
    </footer>
  );
}