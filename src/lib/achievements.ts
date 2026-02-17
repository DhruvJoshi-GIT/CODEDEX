import { Achievement, UserProgress, Region } from './types';

/** Helper: count all constructs with a given status across all regions */
function countByStatus(progress: UserProgress, status: 'seen' | 'used'): number {
  let count = 0;
  for (const regionProgress of Object.values(progress.constructs)) {
    for (const cp of Object.values(regionProgress)) {
      if (status === 'seen' && (cp.status === 'seen' || cp.status === 'used')) count++;
      if (status === 'used' && cp.status === 'used') count++;
    }
  }
  return count;
}

/** Helper: count constructs with a given status in a specific region */
function countByStatusInRegion(progress: UserProgress, regionId: string, status: 'seen' | 'used'): number {
  const regionProgress = progress.constructs[regionId] || {};
  let count = 0;
  for (const cp of Object.values(regionProgress)) {
    if (status === 'seen' && (cp.status === 'seen' || cp.status === 'used')) count++;
    if (status === 'used' && cp.status === 'used') count++;
  }
  return count;
}

/** Helper: check if all constructs of a given difficulty in a region are seen */
function allDifficultySeenInRegion(
  progress: UserProgress,
  regions: Region[],
  regionId: string,
  difficulty: 'beginner' | 'intermediate' | 'advanced'
): boolean {
  const region = regions.find(r => r.id === regionId);
  if (!region) return false;
  const matching = region.constructs.filter(c => c.difficulty === difficulty);
  if (matching.length === 0) return false;
  const regionProgress = progress.constructs[regionId] || {};
  return matching.every(c => {
    const cp = regionProgress[c.id];
    return cp && (cp.status === 'seen' || cp.status === 'used');
  });
}

/** Helper: check if all constructs in a category are used */
function allUsedInCategory(
  progress: UserProgress,
  regions: Region[],
  regionId: string,
  categoryId: string
): boolean {
  const region = regions.find(r => r.id === regionId);
  if (!region) return false;
  const categoryConstructs = region.constructs.filter(c => c.category === categoryId);
  if (categoryConstructs.length === 0) return false;
  const regionProgress = progress.constructs[regionId] || {};
  return categoryConstructs.every(c => regionProgress[c.id]?.status === 'used');
}

/** Helper: check if all constructs in a region are used */
function allUsedInRegion(progress: UserProgress, regions: Region[], regionId: string): boolean {
  const region = regions.find(r => r.id === regionId);
  if (!region) return false;
  const regionProgress = progress.constructs[regionId] || {};
  return region.constructs.every(c => regionProgress[c.id]?.status === 'used');
}

/** Helper: count how many constructs were used in the last N milliseconds */
function countUsedInTimeWindow(progress: UserProgress, windowMs: number): number {
  const now = Date.now();
  let count = 0;
  for (const regionProgress of Object.values(progress.constructs)) {
    for (const cp of Object.values(regionProgress)) {
      if (cp.status === 'used' && cp.usedAt && (now - cp.usedAt) <= windowMs) {
        count++;
      }
    }
  }
  return count;
}

export const achievements: Achievement[] = [
  {
    id: 'first-catch',
    name: 'First Catch',
    description: 'Mark your very first construct as seen. Every journey starts with a single step.',
    icon: 'Eye',
    condition: (progress: UserProgress) => countByStatus(progress, 'seen') >= 1,
    xpReward: 10,
    rarity: 'common',
  },
  {
    id: 'getting-started',
    name: 'Getting Started',
    description: 'See 10 different constructs across any regions.',
    icon: 'Footprints',
    condition: (progress: UserProgress) => countByStatus(progress, 'seen') >= 10,
    xpReward: 25,
    rarity: 'common',
  },
  {
    id: 'curious-mind',
    name: 'Curious Mind',
    description: 'See 25 different constructs. You are exploring the codelands with enthusiasm.',
    icon: 'Lightbulb',
    condition: (progress: UserProgress) => countByStatus(progress, 'seen') >= 25,
    xpReward: 50,
    rarity: 'uncommon',
  },
  {
    id: 'first-use',
    name: 'Hands On',
    description: 'Mark your first construct as used. Learning by doing!',
    icon: 'Hand',
    condition: (progress: UserProgress) => countByStatus(progress, 'used') >= 1,
    xpReward: 15,
    rarity: 'common',
  },
  {
    id: 'practitioner',
    name: 'Practitioner',
    description: 'Use 25 constructs across any regions. You are building real skills.',
    icon: 'Hammer',
    condition: (progress: UserProgress) => countByStatus(progress, 'used') >= 25,
    xpReward: 75,
    rarity: 'uncommon',
  },
  {
    id: 'craftsman',
    name: 'Craftsman',
    description: 'Use 50 constructs across any regions. Your toolkit is growing strong.',
    icon: 'Wrench',
    condition: (progress: UserProgress) => countByStatus(progress, 'used') >= 50,
    xpReward: 150,
    rarity: 'rare',
  },
  {
    id: 'python-beginner',
    name: 'Python Beginner',
    description: 'See all beginner-level Python constructs. The serpent welcomes you.',
    icon: 'GraduationCap',
    condition: (progress: UserProgress, regions: Region[]) =>
      allDifficultySeenInRegion(progress, regions, 'python', 'beginner'),
    xpReward: 50,
    rarity: 'uncommon',
  },
  {
    id: 'python-intermediate',
    name: 'Python Adept',
    description: 'See all intermediate-level Python constructs. You speak Parseltongue fluently.',
    icon: 'Award',
    condition: (progress: UserProgress, regions: Region[]) =>
      allDifficultySeenInRegion(progress, regions, 'python', 'intermediate'),
    xpReward: 100,
    rarity: 'rare',
  },
  {
    id: 'cpp-warrior',
    name: 'C++ Warrior',
    description: 'Use 20 C++ constructs. You have tamed the powerful beast.',
    icon: 'Sword',
    condition: (progress: UserProgress) => countByStatusInRegion(progress, 'cpp', 'used') >= 20,
    xpReward: 75,
    rarity: 'uncommon',
  },
  {
    id: 'cpp-beginner',
    name: 'C++ Initiate',
    description: 'See all beginner-level C++ constructs. The lightning beckons.',
    icon: 'Zap',
    condition: (progress: UserProgress, regions: Region[]) =>
      allDifficultySeenInRegion(progress, regions, 'cpp', 'beginner'),
    xpReward: 50,
    rarity: 'uncommon',
  },
  {
    id: 'completionist-category',
    name: 'Completionist',
    description: 'Use every construct in any single category. Total mastery of one domain.',
    icon: 'CheckCircle',
    condition: (progress: UserProgress, regions: Region[]) => {
      for (const region of regions) {
        for (const category of region.categories) {
          if (allUsedInCategory(progress, regions, region.id, category.id)) {
            return true;
          }
        }
      }
      return false;
    },
    xpReward: 100,
    rarity: 'rare',
  },
  {
    id: 'dual-wielder',
    name: 'Dual Wielder',
    description: 'Have progress in both Python and C++ regions. A polyglot in the making.',
    icon: 'Swords',
    condition: (progress: UserProgress) => {
      const hasPython = countByStatusInRegion(progress, 'python', 'seen') >= 1;
      const hasCpp = countByStatusInRegion(progress, 'cpp', 'seen') >= 1;
      return hasPython && hasCpp;
    },
    xpReward: 30,
    rarity: 'common',
  },
  {
    id: 'speed-learner',
    name: 'Speed Learner',
    description: 'Use 10 constructs within a single session (1 hour window).',
    icon: 'Timer',
    condition: (progress: UserProgress) => {
      const oneHour = 60 * 60 * 1000;
      return countUsedInTimeWindow(progress, oneHour) >= 10;
    },
    xpReward: 50,
    rarity: 'uncommon',
  },
  {
    id: 'python-master',
    name: 'Python Master',
    description: 'Use every single Python construct. You have conquered the serpent region entirely.',
    icon: 'Crown',
    condition: (progress: UserProgress, regions: Region[]) =>
      allUsedInRegion(progress, regions, 'python'),
    xpReward: 500,
    rarity: 'legendary',
  },
  {
    id: 'cpp-master',
    name: 'C++ Master',
    description: 'Use every single C++ construct. You have harnessed the full power of the lightning.',
    icon: 'Crown',
    condition: (progress: UserProgress, regions: Region[]) =>
      allUsedInRegion(progress, regions, 'cpp'),
    xpReward: 500,
    rarity: 'legendary',
  },
  {
    id: 'half-way',
    name: 'Half Way There',
    description: 'Use at least half of all available constructs across all regions.',
    icon: 'Milestone',
    condition: (progress: UserProgress, regions: Region[]) => {
      const totalConstructs = regions.reduce((sum, r) => sum + r.constructs.length, 0);
      const usedCount = countByStatus(progress, 'used');
      return usedCount >= totalConstructs / 2;
    },
    xpReward: 200,
    rarity: 'epic',
  },
  {
    id: 'grand-master',
    name: 'Grand Master',
    description: 'Use every construct in every region. You have mastered all the codelands.',
    icon: 'Trophy',
    condition: (progress: UserProgress, regions: Region[]) =>
      regions.every(r => allUsedInRegion(progress, regions, r.id)),
    xpReward: 1000,
    rarity: 'legendary',
  },
  {
    id: 'explorer',
    name: 'Explorer',
    description: 'See at least one construct in every category across all regions.',
    icon: 'Compass',
    condition: (progress: UserProgress, regions: Region[]) => {
      for (const region of regions) {
        for (const category of region.categories) {
          const categoryConstructs = region.constructs.filter(c => c.category === category.id);
          const regionProgress = progress.constructs[region.id] || {};
          const hasSeen = categoryConstructs.some(c => {
            const cp = regionProgress[c.id];
            return cp && (cp.status === 'seen' || cp.status === 'used');
          });
          if (!hasSeen) return false;
        }
      }
      return true;
    },
    xpReward: 100,
    rarity: 'rare',
  },
  {
    id: 'xp-collector',
    name: 'XP Collector',
    description: 'Accumulate 1000 total XP. Your dedication is paying off.',
    icon: 'Star',
    condition: (progress: UserProgress) => progress.totalXp >= 1000,
    xpReward: 100,
    rarity: 'rare',
  },
  {
    id: 'xp-hoarder',
    name: 'XP Hoarder',
    description: 'Accumulate 3000 total XP. You are among the elite coders.',
    icon: 'Gem',
    condition: (progress: UserProgress) => progress.totalXp >= 3000,
    xpReward: 250,
    rarity: 'epic',
  },
];
