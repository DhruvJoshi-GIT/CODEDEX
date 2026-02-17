'use client';

import { use, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Filter, Eye, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useProgress } from '@/lib/useLocalStorage';
import { regions } from '@/lib/regions';
import { ConstructCard } from '@/components/ConstructCard';
import { ProgressRing } from '@/components/ProgressRing';
import { PageTransition } from '@/components/PageTransition';

type FilterType = 'all' | 'locked' | 'seen' | 'used';

export default function CategoryPage({ params }: { params: Promise<{ id: string; cat: string }> }) {
  const { id, cat } = use(params);
  const { isLoaded, getConstructStatus, getCategoryStats, markConstruct } = useProgress();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

  const region = regions.find((r) => r.id === id);
  const category = region?.categories.find((c) => c.id === cat);
  const constructs = region?.constructs.filter((c) => c.category === cat) || [];

  const filteredConstructs = useMemo(() => {
    return constructs.filter((c) => {
      const matchesSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase());
      if (!matchesSearch) return false;
      if (filter === 'all') return true;
      const status = getConstructStatus(id, c.id).status;
      return status === filter;
    });
  }, [constructs, search, filter, getConstructStatus, id]);

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

  if (!region || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-xl text-slate-400">Category not found</p>
          <Link href="/" className="text-teal-400 hover:underline">Go home</Link>
        </div>
      </div>
    );
  }

  const catStats = getCategoryStats(region.id, category.id);
  const progress = catStats.total > 0 ? Math.round((catStats.used / catStats.total) * 100) : 0;

  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: constructs.length },
    { key: 'locked', label: 'Locked', count: constructs.filter(c => getConstructStatus(id, c.id).status === 'locked').length },
    { key: 'seen', label: 'Seen', count: constructs.filter(c => getConstructStatus(id, c.id).status === 'seen').length },
    { key: 'used', label: 'Used', count: constructs.filter(c => getConstructStatus(id, c.id).status === 'used').length },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Back button */}
        <Link href={`/region/${id}`}>
          <motion.div
            whileHover={{ x: -4 }}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {region.name}
          </motion.div>
        </Link>

        {/* Category header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <div className="text-2xl" style={{ color: category.color }}>{region.icon}</div>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold text-white">{category.name}</h1>
              <p className="text-sm text-slate-400 mt-0.5">{category.description}</p>
            </div>
            <ProgressRing progress={progress} size={56} strokeWidth={4} color={category.color}>
              <span className="text-xs font-bold text-slate-300">{progress}%</span>
            </ProgressRing>
          </div>

          <div className="flex items-center gap-4 mt-4 text-sm">
            <span className="text-slate-500">{catStats.total} constructs</span>
            <span className="flex items-center gap-1 text-amber-400">
              <Eye className="w-3.5 h-3.5" /> {catStats.seen}
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> {catStats.used}
            </span>
          </div>
        </motion.section>

        {/* Search and filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search constructs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
            />
          </div>
          <div className="flex gap-1.5">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  filter === f.key
                    ? 'bg-slate-700/60 text-white'
                    : 'bg-slate-800/30 text-slate-500 hover:text-slate-300'
                }`}
              >
                {f.label} ({f.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Constructs list */}
        <div className="space-y-2">
          {filteredConstructs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card-sm p-12 text-center text-slate-500"
            >
              {search ? 'No constructs match your search' : 'No constructs in this filter'}
            </motion.div>
          ) : (
            filteredConstructs.map((construct, i) => (
              <ConstructCard
                key={construct.id}
                construct={construct}
                status={getConstructStatus(id, construct.id).status}
                categoryColor={category.color}
                onMarkSeen={() => markConstruct(id, construct.id, 'seen')}
                onMarkUsed={() => markConstruct(id, construct.id, 'used')}
                index={i}
              />
            ))
          )}
        </div>
      </div>
    </PageTransition>
  );
}
