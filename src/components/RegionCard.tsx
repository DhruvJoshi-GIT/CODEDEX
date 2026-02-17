'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProgressRing } from './ProgressRing';
import { ChevronRight } from 'lucide-react';
import { getMasteryLevel } from '@/lib/xp';

interface RegionCardProps {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  seen: number;
  used: number;
  total: number;
  index: number;
}

export function RegionCard({
  id,
  name,
  icon,
  description,
  color,
  gradientFrom,
  gradientTo,
  seen,
  used,
  total,
  index,
}: RegionCardProps) {
  const progress = total > 0 ? Math.round(((seen + used) / (total * 2)) * 100) : 0;
  const mastery = getMasteryLevel(seen, used, total);

  return (
    <Link href={`/region/${id}`}>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="relative overflow-hidden rounded-2xl cursor-pointer group"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          border: `1px solid ${color}30`,
        }}
      >
        {/* Decorative gradient orb */}
        <div
          className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"
          style={{ backgroundColor: color }}
        />

        <div className="relative p-6 flex items-center gap-5">
          {/* Icon */}
          <div className="text-5xl shrink-0">{icon}</div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ color: mastery.color, backgroundColor: `${mastery.color}20` }}
              >
                {mastery.level}
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-3 line-clamp-2">{description}</p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span>{total} constructs</span>
              <span className="text-amber-400">{seen} seen</span>
              <span className="text-emerald-400">{used} used</span>
            </div>
          </div>

          {/* Progress ring */}
          <div className="shrink-0 hidden sm:block">
            <ProgressRing progress={progress} size={64} strokeWidth={5} color={color}>
              <span className="text-sm font-bold text-slate-300">{progress}%</span>
            </ProgressRing>
          </div>

          {/* Arrow */}
          <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors shrink-0" />
        </div>
      </motion.div>
    </Link>
  );
}
