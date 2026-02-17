'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProgressRing } from './ProgressRing';
import * as Icons from 'lucide-react';

interface CategoryCardProps {
  regionId: string;
  categoryId: string;
  name: string;
  color: string;
  icon: string;
  description: string;
  seen: number;
  used: number;
  total: number;
  index: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getIcon(name: string): React.ComponentType<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icon = (Icons as any)[name];
  return icon || Icons.Code2;
}

export function CategoryCard({
  regionId,
  categoryId,
  name,
  color,
  icon,
  description,
  seen,
  used,
  total,
  index,
}: CategoryCardProps) {
  const progress = total > 0 ? Math.round((used / total) * 100) : 0;
  const Icon = getIcon(icon);

  return (
    <Link href={`/region/${regionId}/category/${categoryId}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="glass-card p-5 cursor-pointer group h-full"
      >
        <div className="flex items-start justify-between mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
          <ProgressRing progress={progress} size={44} strokeWidth={4} color={color}>
            <span className="text-xs font-bold text-slate-300">{progress}%</span>
          </ProgressRing>
        </div>

        <h3 className="text-base font-semibold text-slate-200 mb-1 group-hover:text-white transition-colors">
          {name}
        </h3>
        <p className="text-xs text-slate-500 mb-3 line-clamp-2">{description}</p>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-slate-400">{seen} seen</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-400">{used} used</span>
          </div>
          <span className="text-slate-600 ml-auto">{total} total</span>
        </div>
      </motion.div>
    </Link>
  );
}
