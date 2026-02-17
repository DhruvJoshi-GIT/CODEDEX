'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, BarChart3, Zap } from 'lucide-react';
import Link from 'next/link';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import { useProgress } from '@/lib/useLocalStorage';
import { regions } from '@/lib/regions';
import { achievements as allAchievements } from '@/lib/achievements';
import { AchievementBadge } from '@/components/AchievementBadge';
import { PageTransition } from '@/components/PageTransition';

export default function StatsPage() {
  const { progress, isLoaded, getCategoryStats, getRegionStats } = useProgress();

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

  // Radar chart data — categories across all regions
  const radarData: { category: string; mastery: number }[] = [];
  regions.forEach((region) => {
    region.categories.forEach((cat) => {
      const stats = getCategoryStats(region.id, cat.id);
      const mastery = stats.total > 0 ? Math.round((stats.used / stats.total) * 100) : 0;
      radarData.push({
        category: `${cat.name} (${region.name.slice(0, 2)})`,
        mastery,
      });
    });
  });

  // Bar chart data — seen vs used per region
  const barData = regions.map((region) => {
    const stats = getRegionStats(region.id);
    return {
      name: region.name,
      Seen: stats.seen,
      Used: stats.used,
      Total: stats.total,
    };
  });

  // Heatmap data — all constructs
  const heatmapData: { name: string; status: string; color: string; region: string }[] = [];
  regions.forEach((region) => {
    region.constructs.forEach((construct) => {
      const cp = progress.constructs[region.id]?.[construct.id];
      const status = cp?.status || 'locked';
      const colors = { locked: '#1e293b', seen: '#78350f', used: '#064e3b' };
      heatmapData.push({
        name: construct.name,
        status,
        color: colors[status],
        region: region.name,
      });
    });
  });

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Home
            </motion.div>
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-violet-400" />
            Stats & Analytics
          </h1>
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Radar chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6"
          >
            <h2 className="text-lg font-semibold text-slate-200 mb-4">Category Mastery</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="category" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} />
                  <Radar
                    name="Mastery %"
                    dataKey="mastery"
                    stroke="#a78bfa"
                    fill="#a78bfa"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="glass-card p-6"
          >
            <h2 className="text-lg font-semibold text-slate-200 mb-4">Seen vs Used by Region</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #334155',
                      borderRadius: '8px',
                      color: '#e2e8f0',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="Seen" fill="#fbbf24" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Used" fill="#34d399" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Usage heatmap */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6"
        >
          <h2 className="text-lg font-semibold text-slate-200 mb-4">Construct Heatmap</h2>
          <div className="flex flex-wrap gap-1">
            {heatmapData.map((item, i) => (
              <motion.div
                key={`${item.region}-${item.name}-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.005, duration: 0.2 }}
                className="w-4 h-4 rounded-sm cursor-pointer transition-transform hover:scale-150"
                style={{ backgroundColor: item.color }}
                title={`${item.name} (${item.region}) — ${item.status}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#1e293b' }} />
              Locked
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#78350f' }} />
              Seen
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#064e3b' }} />
              Used
            </div>
          </div>
        </motion.section>

        {/* XP Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6"
        >
          <h2 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            XP Summary
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="glass-card-sm p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">{progress.totalXp}</div>
              <div className="text-xs text-slate-500 mt-1">Total XP</div>
            </div>
            {regions.map((region) => {
              const rp = progress.constructs[region.id] || {};
              let regionXp = 0;
              region.constructs.forEach((c) => {
                const cp = rp[c.id];
                if (cp?.status === 'seen') regionXp += 5;
                if (cp?.status === 'used') regionXp += c.xpValue;
              });
              return (
                <div key={region.id} className="glass-card-sm p-4 text-center">
                  <div className="text-2xl font-bold" style={{ color: region.color }}>{regionXp}</div>
                  <div className="text-xs text-slate-500 mt-1">{region.name} XP</div>
                </div>
              );
            })}
            <div className="glass-card-sm p-4 text-center">
              <div className="text-2xl font-bold text-violet-400">{progress.achievements.length}</div>
              <div className="text-xs text-slate-500 mt-1">Achievements</div>
            </div>
          </div>
        </motion.section>

        {/* Full Achievement Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-lg font-semibold text-slate-200">Achievement Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {allAchievements.map((achievement) => (
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
        </motion.section>
      </div>
    </PageTransition>
  );
}
