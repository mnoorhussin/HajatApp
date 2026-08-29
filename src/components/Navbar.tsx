import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ThemeToggle from './ThemeToggle';
import DownloadButton from './DownloadButton';

/*
 * Fixed 64px bar defined by a single hairline border. Previously this was a
 * transparent bar that grew a blurred background and shadow on scroll, with a
 * pill-shaped brand-coloured CTA floating in it. The border is now always
 * present so the page has a consistent top edge, and the CTA is a small
 * square-ish button that does not compete with the hero.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '/#services' },
    { name: 'كيف يعمل', href: '/#how-it-works' },
    { name: 'الأسئلة', href: '/#faq' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]">
      <div className="container-custom">
        <div className="h-16 flex items-center justify-between">

          <Link to="/" className="flex-shrink-0" aria-label="حاجاتي">
            <img
              src={logo}
              alt="حاجاتي"
              className="h-9 w-auto object-contain mix-blend-multiply dark:mix-blend-screen"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <DownloadButton className="btn btn-primary px-4 h-9 text-sm" />
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[var(--text)]"
              aria-label="القائمة"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      {isOpen && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--bg)]">
          <div className="container-custom py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-base font-medium text-[var(--text)] border-b border-[var(--border)] last:border-0"
              >
                {link.name}
              </a>
            ))}
            <DownloadButton
              className="btn btn-primary w-full mt-4"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
