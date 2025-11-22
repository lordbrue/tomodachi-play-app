// Types para o Tomodachi Play

export type UserType = 'visitor' | 'free' | 'vip' | 'companion' | 'admin';

export type ServiceType = 'text' | 'voice' | 'video';

export type StreamingPlatform = 
  | 'crunchyroll' 
  | 'netflix' 
  | 'prime' 
  | 'hulu' 
  | 'funimation' 
  | 'hidive';

export type AnimeGenre = 
  | 'action' 
  | 'romance' 
  | 'comedy' 
  | 'drama' 
  | 'fantasy' 
  | 'sci-fi' 
  | 'horror' 
  | 'slice-of-life' 
  | 'sports' 
  | 'mystery';

export type PersonalityType = 
  | 'cute' 
  | 'mature' 
  | 'energetic' 
  | 'mysterious' 
  | 'quiet' 
  | 'fun';

export interface Companion {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  rating: number;
  totalSessions: number;
  platforms: StreamingPlatform[];
  genres: AnimeGenre[];
  personality: PersonalityType[];
  services: ServiceType[];
  isOnline: boolean;
  isVerified: boolean;
  priceRange: {
    text: number;
    voice: number;
    video: number;
  };
  availability: {
    day: string;
    slots: string[];
  }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  type: UserType;
  platforms: StreamingPlatform[];
  favoriteGenres: AnimeGenre[];
  preferredPersonality: PersonalityType[];
  preferredService: ServiceType;
  favorites: string[]; // companion IDs
  createdAt: Date;
}

export interface Session {
  id: string;
  userId: string;
  companionId: string;
  serviceType: ServiceType;
  scheduledAt: Date;
  duration: number; // em minutos
  price: number;
  status: 'scheduled' | 'ongoing' | 'completed' | 'cancelled';
  anime?: string;
  platform?: StreamingPlatform;
}

export interface AnimeRelease {
  id: string;
  title: string;
  episode: number;
  releaseDate: Date;
  platform: StreamingPlatform;
  genre: AnimeGenre[];
  coverImage: string;
  availableCompanions: string[]; // companion IDs
}

export interface QuizAnswers {
  platforms: StreamingPlatform[];
  genres: AnimeGenre[];
  frequency: 'daily' | 'weekly' | 'monthly' | 'occasionally';
  personality: PersonalityType[];
  servicePreference: ServiceType;
  availability: string[];
}
