'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Eye, CheckCircle2, Trophy, Flame } from 'lucide-react';
import { useProgress } from '@/lib/useLocalStorage';
import { regions } from '@/lib/regions';
import { achievements as allAchievements } from '@/lib/achievements';
import { getXpForNextLevel } from '@/lib/xp';
import { RegionCard } from '@/components/RegionCard';
import { AchievementBadge } from '@/components/AchievementBadge';
import { PageTransition } from '@/components/PageTransition';

export default function HomePage() {
  const { progress, isLoaded, getRegionStats } = useProgress();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const xpInfo = getXpForNextLevel(progress.totalXp);
  const xpProgress = xpInfo.next > xpInfo.current
    ? ((progress.totalXp - xpInfo.current) / (xpInfo.next - xpInfo.current)) * 100
    : 100;

  let totalSeen = 0;
  let totalUsed = 0;
  regions.forEach((r) => {
    const stats = getRegionStats(r.id);
    totalSeen += stats.seen;
    totalUsed += stats.used;
  });

  const unlockedAchievements = allAchievements.filter((a) => progress.achievements.includes(a.id));

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* Hero */}
        <section className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500/80 to-violet-500/80 mx-auto"
          >
            <Code2 className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-400 to-violet-400 bg-clip-text text-transparent"
          >
            CODEDEX
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Catch every construct. Master every language. Track your programming journey.
          </motion.p>
        </section>

        {/* XP + Stats overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="text-2xl font-bold text-amber-400">{progress.totalXp}</span>
              <span className="text-sm text-slate-500">XP</span>
            </div>
            <div className="flex-1">
              <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${xpProgress}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
              <div className="flex justify-between mt-1 text-xs text-slate-500">
                <span>Level {xpInfo.level}</span>
                <span>{progress.totalXp} / {xpInfo.next} XP</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Flame, label: 'Total XP', value: progress.totalXp, color: '#fbbf24' },
              { icon: Eye, label: 'Seen', value: totalSeen, color: '#fbbf24' },
              { icon: CheckCircle2, label: 'Used', value: totalUsed, color: '#34d399' },
              { icon: Trophy, label: 'Achievements', value: unlockedAchievements.length, color: '#a78bfa' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card-sm p-4 text-center"
              >
                <stat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: stat.color }} />
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Regions */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-200">Regions</h2>
          <div className="space-y-4">
            {regions.map((region, i) => {
              const stats = getRegionStats(region.id);
              return (
                <RegionCard
                  key={region.id}
                  id={region.id}
                  name={region.name}
                  icon={region.icon}
                  description={region.description}
                  color={region.color}
                  gradientFrom={region.gradientFrom}
                  gradientTo={region.gradientTo}
                  seen={stats.seen}
                  used={stats.used}
                  total={stats.total}
                  index={i}
                />
              );
            })}
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-200">Achievements</h2>
            <span className="text-sm text-slate-500">
              {unlockedAchievements.length} / {allAchievements.length} unlocked
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {allAchievements.slice(0, 9).map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                name={achievement.name}
                description={achievement.description}
                rarity={achievement.rarity}
                unlocked={progress.achievements.includes(achievement.id)}
                xpReward={achievement.xpReward}
              />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
