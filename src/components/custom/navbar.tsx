'use client';

import Link from 'next/link';
import { Heart, User, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Tomodachi Play
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/explore" 
              className="flex items-center space-x-1 text-gray-300 hover:text-pink-400 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Explorar</span>
            </Link>
            <Link 
              href="/favorites" 
              className="flex items-center space-x-1 text-gray-300 hover:text-pink-400 transition-colors"
            >
              <Heart className="w-4 h-4" />
              <span>Favoritos</span>
            </Link>
            <Link 
              href="/profile" 
              className="flex items-center space-x-1 text-gray-300 hover:text-pink-400 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Perfil</span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/login"
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              Entrar
            </Link>
            <Link 
              href="/signup"
              className="px-4 py-2 text-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              Começar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/98 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="/explore" 
              className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="w-5 h-5" />
              <span>Explorar</span>
            </Link>
            <Link 
              href="/favorites" 
              className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className="w-5 h-5" />
              <span>Favoritos</span>
            </Link>
            <Link 
              href="/profile" 
              className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="w-5 h-5" />
              <span>Perfil</span>
            </Link>
            <div className="pt-3 border-t border-gray-800 space-y-2">
              <Link 
                href="/login"
                className="block w-full px-4 py-2 text-center text-gray-300 hover:text-white border border-gray-700 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link 
                href="/signup"
                className="block w-full px-4 py-2 text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Começar Agora
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
