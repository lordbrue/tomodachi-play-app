import { Companion, AnimeRelease } from './types';

export const mockCompanions: Companion[] = [
  {
    id: '1',
    name: 'Sakura',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    bio: 'Otaku apaixonada por shoujo e slice of life! Adoro conversar sobre personagens e teorias 🌸',
    rating: 4.9,
    totalSessions: 127,
    platforms: ['crunchyroll', 'netflix', 'prime'],
    genres: ['romance', 'slice-of-life', 'comedy'],
    personality: ['cute', 'energetic'],
    services: ['text', 'voice', 'video'],
    isOnline: true,
    isVerified: true,
    priceRange: {
      text: 25,
      voice: 45,
      video: 75
    },
    availability: [
      { day: 'Segunda', slots: ['19:00', '20:00', '21:00'] },
      { day: 'Quarta', slots: ['19:00', '20:00'] }
    ]
  },
  {
    id: '2',
    name: 'Yuki',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    bio: 'Fã de shounen e ação! Vamos assistir lutas épicas juntos e comentar cada cena 💪',
    rating: 4.8,
    totalSessions: 93,
    platforms: ['crunchyroll', 'funimation', 'netflix'],
    genres: ['action', 'fantasy', 'sports'],
    personality: ['energetic', 'fun'],
    services: ['text', 'voice', 'video'],
    isOnline: false,
    isVerified: true,
    priceRange: {
      text: 30,
      voice: 50,
      video: 80
    },
    availability: [
      { day: 'Terça', slots: ['20:00', '21:00', '22:00'] },
      { day: 'Quinta', slots: ['19:00', '20:00'] }
    ]
  },
  {
    id: '3',
    name: 'Hana',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop',
    bio: 'Misteriosa e calma. Prefiro animes psicológicos e de suspense. Silêncio confortável garantido 🌙',
    rating: 5.0,
    totalSessions: 156,
    platforms: ['crunchyroll', 'netflix', 'hidive'],
    genres: ['mystery', 'horror', 'drama'],
    personality: ['mysterious', 'quiet', 'mature'],
    services: ['text', 'voice'],
    isOnline: true,
    isVerified: true,
    priceRange: {
      text: 35,
      voice: 60,
      video: 0
    },
    availability: [
      { day: 'Segunda', slots: ['22:00', '23:00'] },
      { day: 'Sexta', slots: ['21:00', '22:00', '23:00'] }
    ]
  },
  {
    id: '4',
    name: 'Mei',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop',
    bio: 'Adoro isekai e fantasia! Vamos explorar mundos mágicos juntos ✨',
    rating: 4.7,
    totalSessions: 68,
    platforms: ['crunchyroll', 'prime', 'funimation'],
    genres: ['fantasy', 'action', 'comedy'],
    personality: ['cute', 'fun'],
    services: ['text', 'voice', 'video'],
    isOnline: true,
    isVerified: true,
    priceRange: {
      text: 28,
      voice: 48,
      video: 78
    },
    availability: [
      { day: 'Quarta', slots: ['18:00', '19:00', '20:00'] },
      { day: 'Sábado', slots: ['14:00', '15:00', '16:00'] }
    ]
  },
  {
    id: '5',
    name: 'Rin',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop',
    bio: 'Madura e reflexiva. Gosto de animes com mensagens profundas e desenvolvimento de personagens 📚',
    rating: 4.9,
    totalSessions: 142,
    platforms: ['netflix', 'prime', 'crunchyroll'],
    genres: ['drama', 'sci-fi', 'slice-of-life'],
    personality: ['mature', 'quiet'],
    services: ['text', 'voice', 'video'],
    isOnline: false,
    isVerified: true,
    priceRange: {
      text: 32,
      voice: 55,
      video: 85
    },
    availability: [
      { day: 'Terça', slots: ['19:00', '20:00'] },
      { day: 'Domingo', slots: ['15:00', '16:00', '17:00'] }
    ]
  },
  {
    id: '6',
    name: 'Aiko',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
    bio: 'Energética e divertida! Amo comédia e animes leves. Risadas garantidas! 😄',
    rating: 4.8,
    totalSessions: 89,
    platforms: ['crunchyroll', 'netflix', 'hulu'],
    genres: ['comedy', 'romance', 'slice-of-life'],
    personality: ['energetic', 'fun', 'cute'],
    services: ['text', 'voice', 'video'],
    isOnline: true,
    isVerified: true,
    priceRange: {
      text: 26,
      voice: 46,
      video: 76
    },
    availability: [
      { day: 'Segunda', slots: ['18:00', '19:00', '20:00'] },
      { day: 'Quinta', slots: ['18:00', '19:00'] }
    ]
  }
];

export const mockAnimeReleases: AnimeRelease[] = [
  {
    id: '1',
    title: 'Jujutsu Kaisen S3',
    episode: 5,
    releaseDate: new Date('2024-02-15T19:00:00'),
    platform: 'crunchyroll',
    genre: ['action', 'fantasy'],
    coverImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=400&fit=crop',
    availableCompanions: ['1', '2', '4']
  },
  {
    id: '2',
    title: 'Frieren: Beyond Journey\'s End',
    episode: 12,
    releaseDate: new Date('2024-02-16T20:00:00'),
    platform: 'netflix',
    genre: ['fantasy', 'drama'],
    coverImage: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=600&h=400&fit=crop',
    availableCompanions: ['3', '5']
  },
  {
    id: '3',
    title: 'My Hero Academia S7',
    episode: 8,
    releaseDate: new Date('2024-02-17T18:00:00'),
    platform: 'crunchyroll',
    genre: ['action', 'sports'],
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=600&h=400&fit=crop',
    availableCompanions: ['2', '4', '6']
  }
];

export const streamingPlatforms = [
  { id: 'crunchyroll', name: 'Crunchyroll', icon: '🎌' },
  { id: 'netflix', name: 'Netflix', icon: '🎬' },
  { id: 'prime', name: 'Prime Video', icon: '📺' },
  { id: 'hulu', name: 'Hulu', icon: '🟢' },
  { id: 'funimation', name: 'Funimation', icon: '⚡' },
  { id: 'hidive', name: 'HIDIVE', icon: '🎭' }
];

export const animeGenres = [
  { id: 'action', name: 'Ação', emoji: '⚔️' },
  { id: 'romance', name: 'Romance', emoji: '💕' },
  { id: 'comedy', name: 'Comédia', emoji: '😄' },
  { id: 'drama', name: 'Drama', emoji: '🎭' },
  { id: 'fantasy', name: 'Fantasia', emoji: '✨' },
  { id: 'sci-fi', name: 'Sci-Fi', emoji: '🚀' },
  { id: 'horror', name: 'Terror', emoji: '👻' },
  { id: 'slice-of-life', name: 'Slice of Life', emoji: '🌸' },
  { id: 'sports', name: 'Esportes', emoji: '⚽' },
  { id: 'mystery', name: 'Mistério', emoji: '🔍' }
];

export const personalityTypes = [
  { id: 'cute', name: 'Fofa', emoji: '🌸' },
  { id: 'mature', name: 'Madura', emoji: '📚' },
  { id: 'energetic', name: 'Animada', emoji: '⚡' },
  { id: 'mysterious', name: 'Misteriosa', emoji: '🌙' },
  { id: 'quiet', name: 'Silenciosa', emoji: '🤫' },
  { id: 'fun', name: 'Divertida', emoji: '🎉' }
];
