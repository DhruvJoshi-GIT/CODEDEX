'use client';

import { motion } from 'framer-motion';
import { Trophy, Lock, Star, Gem, Crown, Award } from 'lucide-react';

const rarityConfig = {
  common: { color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.1)', border: 'rgba(148, 163, 184, 0.2)', icon: Award },
  uncommon: { color: '#34d399', bg: 'rgba(52, 211, 153, 0.1)', border: 'rgba(52, 211, 153, 0.2)', icon: Star },
  rare: { color: '#60a5fa', bg: 'rgba(96, 165, 250, 0.1)', border: 'rgba(96, 165, 250, 0.2)', icon: Trophy },
  epic: { color: '#a78bfa', bg: 'rgba(167, 139, 250, 0.1)', border: 'rgba(167, 139, 250, 0.2)', icon: Gem },
  legendary: { color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.1)', border: 'rgba(251, 191, 36, 0.2)', icon: Crown },
};

interface AchievementBadgeProps {
  name: string;
  description: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  unlocked: boolean;
  xpReward: number;
  compact?: boolean;
}

export function AchievementBadge({ name, description, rarity, unlocked, xpReward, compact }: AchievementBadgeProps) {
  const config = rarityConfig[rarity];
  const Icon = unlocked ? config.icon : Lock;

  if (compact) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
          unlocked
            ? 'glow-pulse'
            : 'opacity-40'
        }`}
        style={{
          backgroundColor: unlocked ? config.bg : 'rgba(30, 41, 59, 0.3)',
          borderColor: unlocked ? config.border : 'rgba(100, 116, 139, 0.1)',
        }}
      >
        <Icon className="w-4 h-4" style={{ color: unlocked ? config.color : '#475569' }} />
        <span className="text-xs font-medium" style={{ color: unlocked ? config.color : '#475569' }}>
          {name}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -2 }}
      className={`p-4 rounded-xl border transition-all ${unlocked ? 'glow-pulse' : 'opacity-50'}`}
      style={{
        backgroundColor: unlocked ? config.bg : 'rgba(30, 41, 59, 0.3)',
        borderColor: unlocked ? config.border : 'rgba(100, 116, 139, 0.1)',
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: unlocked ? `${config.color}20` : 'rgba(71, 85, 105, 0.2)' }}
        >
          <Icon className="w-5 h-5" style={{ color: unlocked ? config.color : '#475569' }} />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold truncate" style={{ color: unlocked ? config.color : '#64748b' }}>
            {name}
          </h4>
          <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{description}</p>
          <div className="flex items-center gap-1 mt-1.5">
            <span className="text-xs font-medium" style={{ color: unlocked ? '#fbbf24' : '#475569' }}>
              +{xpReward} XP
            </span>
            <span className="text-xs text-slate-600 capitalize">• {rarity}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
