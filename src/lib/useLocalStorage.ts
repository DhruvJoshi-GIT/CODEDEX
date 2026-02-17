'use client';
import { useState, useEffect, useCallback } from 'react';
import { UserProgress, ConstructProgress } from './types';
import { achievements as allAchievements } from './achievements';
import { regions } from './regions';
import { calculateXp } from './xp';

const STORAGE_KEY = 'codedex-progress';

const defaultProgress: UserProgress = {
  constructs: {},
  totalXp: 0,
  achievements: [],
  lastActivity: Date.now(),
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch {
        setProgress(defaultProgress);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  const markConstruct = useCallback((regionId: string, constructId: string, status: 'seen' | 'used') => {
    setProgress(prev => {
      const newProgress = { ...prev };
      if (!newProgress.constructs[regionId]) {
        newProgress.constructs[regionId] = {};
      }
      const current = newProgress.constructs[regionId][constructId];
      // Don't downgrade from 'used' to 'seen'
      if (current?.status === 'used' && status === 'seen') return prev;

      newProgress.constructs[regionId] = {
        ...newProgress.constructs[regionId],
        [constructId]: {
          status,
          seenAt: current?.seenAt || Date.now(),
          usedAt: status === 'used' ? Date.now() : current?.usedAt,
        },
      };
      newProgress.lastActivity = Date.now();
      // Recalculate XP
      newProgress.totalXp = calculateXp(newProgress, regions);
      // Check achievements
      const newAchievements = allAchievements
        .filter(a => !newProgress.achievements.includes(a.id) && a.condition(newProgress, regions))
        .map(a => a.id);
      if (newAchievements.length > 0) {
        newProgress.achievements = [...newProgress.achievements, ...newAchievements];
        // Add achievement XP
        const achievementXp = allAchievements
          .filter(a => newAchievements.includes(a.id))
          .reduce((sum, a) => sum + a.xpReward, 0);
        newProgress.totalXp += achievementXp;
      }
      return newProgress;
    });
  }, []);

  const getConstructStatus = useCallback((regionId: string, constructId: string): ConstructProgress => {
    return progress.constructs[regionId]?.[constructId] || { status: 'locked' };
  }, [progress]);

  const getRegionStats = useCallback((regionId: string) => {
    const region = regions.find(r => r.id === regionId);
    if (!region) return { total: 0, seen: 0, used: 0 };
    const regionProgress = progress.constructs[regionId] || {};
    const total = region.constructs.length;
    const seen = Object.values(regionProgress).filter(p => p.status === 'seen' || p.status === 'used').length;
    const used = Object.values(regionProgress).filter(p => p.status === 'used').length;
    return { total, seen, used };
  }, [progress]);

  const getCategoryStats = useCallback((regionId: string, categoryId: string) => {
    const region = regions.find(r => r.id === regionId);
    if (!region) return { total: 0, seen: 0, used: 0 };
    const categoryConstructs = region.constructs.filter(c => c.category === categoryId);
    const regionProgress = progress.constructs[regionId] || {};
    const total = categoryConstructs.length;
    const seen = categoryConstructs.filter(c => {
      const p = regionProgress[c.id];
      return p?.status === 'seen' || p?.status === 'used';
    }).length;
    const used = categoryConstructs.filter(c => regionProgress[c.id]?.status === 'used').length;
    return { total, seen, used };
  }, [progress]);

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    progress,
    isLoaded,
    markConstruct,
    getConstructStatus,
    getRegionStats,
    getCategoryStats,
    resetProgress,
  };
}
