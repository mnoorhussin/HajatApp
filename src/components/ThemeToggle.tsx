import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

/*
 * The sun/moon swap was a framer-motion <AnimatePresence> crossfade. That put
 * the whole of framer-motion (~122KB, of which Lighthouse measured ~70KB as
 * unused on the landing page) on the critical path, because this button lives
 * in the navbar and the navbar is the one component that is not lazy.
 *
 * What it animated is a 200ms fade + slide + rotate between two icons, which
 * CSS does on its own. Both icons now stay mounted and the inactive one is
 * transformed out, so framer-motion is no longer imported above the fold.
 */

// Written out in full rather than composed, so Tailwind's scanner sees them.
const ICON =
  'absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none';
const SHOWN = 'opacity-100 translate-y-0 rotate-0';
const HIDDEN = 'opacity-0 -translate-y-5 -rotate-45';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme === 'dark' || (!savedTheme && prefersDark);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] hover:border-[#6C5CE7]/30 transition-all shadow-sm relative overflow-hidden group"
      aria-label="تبديل المظهر"
      aria-pressed={isDark}
    >
      <div className="relative w-6 h-6">
        <span aria-hidden="true" className={`${ICON} text-[#A3E635] ${isDark ? SHOWN : HIDDEN}`}>
          <Moon size={20} fill="currentColor" />
        </span>
        <span aria-hidden="true" className={`${ICON} text-[#ffb800] ${isDark ? HIDDEN : SHOWN}`}>
          <Sun size={20} fill="currentColor" />
        </span>
      </div>

      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-[#6C5CE7]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
  );
}
