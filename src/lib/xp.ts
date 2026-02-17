import { UserProgress, Region } from './types';

export function calculateXp(progress: UserProgress, regions: Region[]): number {
  let xp = 0;
  for (const region of regions) {
    const regionProgress = progress.constructs[region.id] || {};
    for (const construct of region.constructs) {
      const cp = regionProgress[construct.id];
      if (!cp) continue;
      if (cp.status === 'seen') xp += 5;
      if (cp.status === 'used') xp += construct.xpValue; // full XP for used (includes seen bonus)
    }
  }
  return xp;
}

export function getMasteryLevel(seen: number, used: number, total: number): { level: string; color: string } {
  const ratio = total > 0 ? used / total : 0;
  if (ratio >= 0.9) return { level: 'Master', color: '#ffd700' };
  if (ratio >= 0.7) return { level: 'Specialist', color: '#c084fc' };
  if (ratio >= 0.5) return { level: 'Practitioner', color: '#60a5fa' };
  if (ratio >= 0.25) return { level: 'Explorer', color: '#34d399' };
  if (seen > 0 || used > 0) return { level: 'Novice', color: '#94a3b8' };
  return { level: 'Undiscovered', color: '#475569' };
}

export function getXpForNextLevel(totalXp: number): { current: number; next: number; level: number } {
  const levels = [0, 50, 150, 300, 500, 800, 1200, 1700, 2300, 3000, 4000, 5000];
  let level = 0;
  for (let i = 0; i < levels.length - 1; i++) {
    if (totalXp >= levels[i]) level = i + 1;
  }
  const current = levels[Math.min(level - 1, levels.length - 1)] || 0;
  const next = levels[Math.min(level, levels.length - 1)] || levels[levels.length - 1];
  return { current, next, level };
}
