import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] hover:border-[#6C5CE7]/30 transition-all shadow-sm relative overflow-hidden group"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ y: 20, opacity: 0, rotate: 45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: -45 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center text-[#A3E635]"
            >
              <Moon size={20} fill="currentColor" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 20, opacity: 0, rotate: 45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: -45 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center text-[#ffb800]"
            >
              <Sun size={20} fill="currentColor" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-[#6C5CE7]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
  );
}
