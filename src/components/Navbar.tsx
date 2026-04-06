import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import logo from '../assets/logo.png';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'كيف يعمل', href: '#how-it-works' },
    { name: 'انضم إلينا', href: '#join-us' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[var(--surface)]/80 backdrop-blur-lg py-3 shadow-sm border-b border-[var(--border)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Hajat Logo" 
              className="h-14 lg:h-18 w-auto object-contain transition-all duration-300 dark:invert dark:brightness-200" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 lg:gap-10">
            <div className="flex items-center gap-8 gap-x-reverse">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[var(--text)] hover:text-[#6C5CE7] transition-colors font-semibold text-sm lg:text-base relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#6C5CE7] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button className="btn btn-primary px-7 py-2.5 text-sm">
                <Download size={18} />
                <span>حمل التطبيق</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Actions */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[var(--text)] hover:bg-[var(--bg)] rounded-xl transition-colors focus:outline-none border border-transparent hover:border-[var(--border)]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[var(--surface)] border-b border-[var(--border)] shadow-xl transition-all duration-300 transform origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 text-lg font-bold text-[var(--text)] hover:text-[#6C5CE7] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-[var(--border)]">
            <button className="w-full btn btn-primary py-4 text-base">
              <Download size={20} />
              <span>حمل التطبيق الآن</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
