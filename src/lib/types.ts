export type ConstructStatus = 'locked' | 'seen' | 'used';

export interface Construct {
  id: string;
  name: string;
  category: string;
  description: string;
  codeExample: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  xpValue: number;
}

export interface Category {
  id: string;
  name: string;
  color: string; // tailwind-compatible matte color
  icon: string; // lucide icon name
  description: string;
}

export interface Region {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  categories: Category[];
  constructs: Construct[];
}

export interface ConstructProgress {
  status: ConstructStatus;
  seenAt?: number;
  usedAt?: number;
}

export interface UserProgress {
  constructs: Record<string, Record<string, ConstructProgress>>; // regionId -> constructId -> progress
  totalXp: number;
  achievements: string[]; // achievement IDs that are unlocked
  lastActivity: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: (progress: UserProgress, regions: Region[]) => boolean;
  xpReward: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}
