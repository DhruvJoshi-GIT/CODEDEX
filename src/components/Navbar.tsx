'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Code2, Home, BarChart3, Zap } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/stats', label: 'Stats', icon: BarChart3 },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 h-16 glass-card-sm border-b border-slate-700/30"
      style={{ borderRadius: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500/80 to-violet-500/80 flex items-center justify-center"
          >
            <Code2 className="w-5 h-5 text-white" />
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
            CODEDEX
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-slate-700/50 rounded-lg"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 hidden sm:inline">{link.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* XP Badge */}
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">XP</span>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
