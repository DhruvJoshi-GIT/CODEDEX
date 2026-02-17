'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Eye, CheckCircle2, Circle, ChevronDown, Sparkles } from 'lucide-react';
import { useState } from 'react';
import type { Construct, ConstructStatus } from '@/lib/types';

const statusConfig = {
  locked: { icon: Circle, color: '#475569', label: 'Not discovered', bg: 'rgba(71, 85, 105, 0.1)' },
  seen: { icon: Eye, color: '#fbbf24', label: 'Seen', bg: 'rgba(251, 191, 36, 0.1)' },
  used: { icon: CheckCircle2, color: '#34d399', label: 'Mastered', bg: 'rgba(52, 211, 153, 0.1)' },
};

const difficultyColors = {
  beginner: '#34d399',
  intermediate: '#fbbf24',
  advanced: '#f87171',
};

interface ConstructCardProps {
  construct: Construct;
  status: ConstructStatus;
  categoryColor: string;
  onMarkSeen: () => void;
  onMarkUsed: () => void;
  index: number;
}

export function ConstructCard({ construct, status, categoryColor, onMarkSeen, onMarkUsed, index }: ConstructCardProps) {
  const [expanded, setExpanded] = useState(false);
  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      layout
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="glass-card-sm overflow-hidden cursor-pointer"
        style={{ borderLeftColor: categoryColor, borderLeftWidth: '3px' }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: config.bg }}
            >
              <StatusIcon className="w-4 h-4" style={{ color: config.color }} />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-slate-200 truncate">{construct.name}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span
                  className="text-xs font-medium px-1.5 py-0.5 rounded"
                  style={{ color: difficultyColors[construct.difficulty], backgroundColor: `${difficultyColors[construct.difficulty]}15` }}
                >
                  {construct.difficulty}
                </span>
                <span className="text-xs text-slate-500">+{construct.xpValue} XP</span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4 text-slate-500" />
          </motion.div>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 space-y-3">
                <p className="text-sm text-slate-400 leading-relaxed">{construct.description}</p>

                {/* Code example */}
                <pre className="code-block p-3 text-slate-300 whitespace-pre-wrap">
                  {construct.codeExample}
                </pre>

                {/* Action buttons */}
                <div className="flex gap-2 pt-1">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={(e) => { e.stopPropagation(); onMarkSeen(); }}
                    disabled={status === 'seen' || status === 'used'}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: status !== 'locked' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(251, 191, 36, 0.15)',
                      color: '#fbbf24',
                      border: '1px solid rgba(251, 191, 36, 0.2)',
                    }}
                  >
                    <Eye className="w-4 h-4" />
                    Mark Seen
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={(e) => { e.stopPropagation(); onMarkUsed(); }}
                    disabled={status === 'used'}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: status === 'used' ? 'rgba(52, 211, 153, 0.1)' : 'rgba(52, 211, 153, 0.15)',
                      color: '#34d399',
                      border: '1px solid rgba(52, 211, 153, 0.2)',
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Mark Used
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
