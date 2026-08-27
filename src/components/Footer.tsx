import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { policiesMap } from '../data/policies';

/*
 * Was: four columns with a bullet-dot before every link, icon tiles beside the
 * contact details, and the brand blurb inside a rounded-[2.5rem] purple-tinted
 * panel. Links are now plain text that gains contrast on hover, and the columns
 * are separated by the footer's own rules.
 */

const TiktokIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const linkCls =
  'text-[var(--text-muted)] hover:text-[var(--text)] transition-colors';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-right">

          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="حاجاتي"
              className="h-9 w-auto object-contain mr-auto mix-blend-multiply dark:mix-blend-screen"
            />
            <p className="mt-5 text-sm text-[var(--text-muted)] leading-relaxed">
              التطبيق السوداني لتوصيل كل احتياجاتك. اطلب ما تريد، وسنكون في طريقنا إليك.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[var(--text)]">روابط سريعة</h4>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li><Link to="/" className={linkCls}>عن حاجاتي</Link></li>
              <li><Link to="/#services" className={linkCls}>خدماتنا</Link></li>
              <li><Link to="/#how-it-works" className={linkCls}>كيف يعمل</Link></li>
              <li><Link to="/captain-guide" className={linkCls}>دليل عمل الكابتن</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[var(--text)]">السياسات</h4>
            <ul className="mt-4 space-y-3 text-[15px]">
              {Object.entries(policiesMap).map(([slug, policy]) => (
                <li key={slug}>
                  <Link to={`/policies/${slug}`} className={linkCls}>{policy.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[var(--text)]">تواصل معنا</h4>
            <ul className="mt-4 space-y-3 text-[15px] text-[var(--text-muted)]">
              <li>
                <a href="mailto:contact@hajatapp.com" className={linkCls} dir="ltr">
                  contact@hajatapp.com
                </a>
              </li>
              <li>السودان — كسلا</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="container-custom py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-5">
          <p className="text-sm text-[var(--text-faint)]">
            © {new Date().getFullYear()} حاجاتي لخدمات التوصيل. جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-1">
            {[
              { Icon: Facebook,   href: 'https://www.facebook.com/profile.php?id=61589581559138', label: 'فيسبوك' },
              { Icon: TiktokIcon, href: 'https://www.tiktok.com/@hajatapp',                        label: 'تيك توك' },
              { Icon: Instagram,  href: 'https://www.instagram.com/hajatapp/',                     label: 'إنستغرام' },
            ].map(({ Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 grid place-items-center rounded-[var(--radius)] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--subtle)] transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
