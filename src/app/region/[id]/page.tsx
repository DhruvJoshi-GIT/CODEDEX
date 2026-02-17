'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useProgress } from '@/lib/useLocalStorage';
import { regions } from '@/lib/regions';
import { getMasteryLevel } from '@/lib/xp';
import { ProgressRing } from '@/components/ProgressRing';
import { CategoryCard } from '@/components/CategoryCard';
import { StatBar } from '@/components/StatBar';
import { PageTransition } from '@/components/PageTransition';

export default function RegionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { isLoaded, getRegionStats, getCategoryStats } = useProgress();

  const region = regions.find((r) => r.id === id);

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

  if (!region) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-xl text-slate-400">Region not found</p>
          <Link href="/" className="text-teal-400 hover:underline">Go home</Link>
        </div>
      </div>
    );
  }

  const stats = getRegionStats(region.id);
  const overallProgress = stats.total > 0 ? Math.round(((stats.seen + stats.used) / (stats.total * 2)) * 100) : 0;
  const mastery = getMasteryLevel(stats.seen, stats.used, stats.total);

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Back button */}
        <Link href="/">
          <motion.div
            whileHover={{ x: -4 }}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Regions
          </motion.div>
        </Link>

        {/* Region header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
          style={{
            background: `linear-gradient(135deg, ${region.gradientFrom}, ${region.gradientTo})`,
            border: `1px solid ${region.color}30`,
          }}
        >
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: region.color }} />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="text-6xl">{region.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-extrabold text-white">{region.name}</h1>
                <span
                  className="text-sm font-semibold px-3 py-1 rounded-full"
                  style={{ color: mastery.color, backgroundColor: `${mastery.color}20` }}
                >
                  {mastery.level}
                </span>
              </div>
              <p className="text-slate-400 mb-4">{region.description}</p>
              <div className="flex items-center gap-6 text-sm">
                <span className="text-slate-500">{stats.total} constructs</span>
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Eye className="w-4 h-4" /> {stats.seen} seen
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> {stats.used} used
                </span>
              </div>
            </div>
            <ProgressRing progress={overallProgress} size={90} strokeWidth={6} color={region.color}>
              <div className="text-center">
                <div className="text-lg font-bold text-white">{overallProgress}%</div>
                <div className="text-xs text-slate-500">total</div>
              </div>
            </ProgressRing>
          </div>
        </motion.section>

        {/* Progress bars */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6 space-y-4"
        >
          <h2 className="text-lg font-semibold text-slate-200 mb-2">Progress</h2>
          <StatBar label="Seen" value={stats.seen} max={stats.total} color="#fbbf24" delay={0.2} />
          <StatBar label="Used" value={stats.used} max={stats.total} color="#34d399" delay={0.3} />
        </motion.section>

        {/* Categories grid */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-200">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {region.categories.map((category, i) => {
              const catStats = getCategoryStats(region.id, category.id);
              return (
                <CategoryCard
                  key={category.id}
                  regionId={region.id}
                  categoryId={category.id}
                  name={category.name}
                  color={category.color}
                  icon={category.icon}
                  description={category.description}
                  seen={catStats.seen}
                  used={catStats.used}
                  total={catStats.total}
                  index={i}
                />
              );
            })}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
