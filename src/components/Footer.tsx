'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, MessageCircle, Code2 } from 'lucide-react';

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhruv-joshi-52769b265/',
    color: '#0a66c2',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:mdhruvjoshi@gmail.com',
    color: '#ea4335',
  },
  {
    icon: MessageCircle,
    label: 'Discord',
    href: '#',
    color: '#5865f2',
    copyText: 'dhruvjoshi.28',
  },
];

export function Footer() {
  const handleDiscordClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('dhruvjoshi.28');
    const el = e.currentTarget as HTMLElement;
    const original = el.getAttribute('data-label');
    el.setAttribute('data-copied', 'true');
    setTimeout(() => el.setAttribute('data-copied', ''), 2000);
  };

  return (
    <footer className="mt-16 border-t border-slate-700/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Creator badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/80 to-violet-500/80 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200">Built by Dhruv Joshi</p>
              <p className="text-xs text-slate-500">Full-stack developer</p>
            </div>
          </motion.div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== 'Discord' ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={social.label === 'Discord' ? handleDiscordClick : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all"
                style={{
                  backgroundColor: `${social.color}10`,
                  borderColor: `${social.color}25`,
                }}
                data-label={social.label}
              >
                <social.icon className="w-4 h-4" style={{ color: social.color }} />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {social.label === 'Discord' ? 'dhruvjoshi.28' : social.label}
                </span>
                {social.label === 'Discord' && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-slate-700 text-emerald-400 px-2 py-1 rounded opacity-0 group-[&[data-copied='true']]:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </motion.a>
            ))}
          </div>

          {/* Bottom text */}
          <p className="text-xs text-slate-600 text-center">
            CODEDEX — Catch every construct. Master every language.
          </p>
        </div>
      </div>
    </footer>
  );
}
