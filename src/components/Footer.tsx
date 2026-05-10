import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const TiktokIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] pt-24 pb-12 border-t border-[var(--border)] transition-colors duration-300">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20 text-right">
          <div>
            <h4 className="font-extrabold text-[var(--text)] mb-8 text-xl">روابط سريعة</h4>
            <ul className="space-y-4 text-[var(--text-muted)] font-medium">
              <li><a href="#" className="hover:text-[#6C5CE7] transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]/20 group-hover:bg-[#6C5CE7] transition-colors"></span>عن حاجات</a></li>
              <li><a href="#services" className="hover:text-[#6C5CE7] transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]/20 group-hover:bg-[#6C5CE7] transition-colors"></span>خدماتنا</a></li>
              <li><a href="#how-it-works" className="hover:text-[#6C5CE7] transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]/20 group-hover:bg-[#6C5CE7] transition-colors"></span>كيف يعمل</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-[var(--text)] mb-8 text-xl">السياسات</h4>
            <ul className="space-y-4 text-[var(--text-muted)] font-medium">
              <li><Link to="/policies/terms-and-conditions" className="hover:text-[#6C5CE7] transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]/20 group-hover:bg-[#6C5CE7] transition-colors"></span>الشروط والأحكام</Link></li>
              <li><Link to="/policies/privacy-policy" className="hover:text-[#6C5CE7] transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]/20 group-hover:bg-[#6C5CE7] transition-colors"></span>سياسة الخصوصية</Link></li>
              <li><Link to="/policies/content-policy" className="hover:text-[#6C5CE7] transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]/20 group-hover:bg-[#6C5CE7] transition-colors"></span>سياسة المحتوى</Link></li>
              <li><Link to="/policies/anti-fraud-policy" className="hover:text-[#6C5CE7] transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]/20 group-hover:bg-[#6C5CE7] transition-colors"></span>مكافحة الاحتيال</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-extrabold text-[var(--text)] mb-8 text-xl">تواصل معنا</h4>
             <ul className="space-y-5 text-[var(--text-muted)] font-medium">
               <li className="flex items-center gap-3">
                <div className="p-2 bg-[var(--bg)] rounded-xl text-[#6C5CE7] border border-[var(--border)]">
                  <Mail size={18} />
                </div>
                <span>contact@hajatapp.com</span>
               </li>

               <li className="flex items-center gap-3">
                <div className="p-2 bg-[var(--bg)] rounded-xl text-[#6C5CE7] border border-[var(--border)]">
                  <MapPin size={18} />
                </div>
                <span>السودان - كسلا</span>
               </li>
             </ul>
          </div>

          <div className="bg-[#6C5CE7]/5 dark:bg-white/5 p-8 rounded-[2.5rem] space-y-6 border border-transparent dark:border-white/5">
            <img src={logo} alt="Hajat Logo" className="h-12 w-auto object-contain mix-blend-multiply dark:mix-blend-screen" />
            <p className="text-sm text-[var(--text-muted)] leading-relaxed font-medium">
              تطبيق حاجات... دليلك لتلبية كافة احتياجاتك! اطلب ما تريد، وسنكون في طريقنا إليك. التطبيق السوداني الأول لتوصيل كل احتياجاتك بسرعة وأمان.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-[var(--border)] text-center text-[var(--text-muted)] text-sm font-bold flex flex-col lg:flex-row justify-between items-center gap-8">
          <p>© {new Date().getFullYear()} حاجات لخدمات التوصيل. جميع الحقوق محفوظة.</p>
          
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61589581559138' },
              { icon: TiktokIcon, href: 'https://www.tiktok.com/@hajatapp' },
              { icon: Instagram, href: 'https://www.instagram.com/hajatapp/' }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] hover:text-[#6C5CE7] hover:border-[#6C5CE7]/30 transition-all shadow-sm hover:shadow-md"
                aria-label="Social Link"
              >
                <item.icon size={20} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs opacity-70">
            <Link to="/policies/cancellation-policy" className="hover:text-[var(--text)] transition-colors">سياسة الإلغاء</Link>
            <Link to="/policies/consumer-protection" className="hover:text-[var(--text)] transition-colors">حماية المستهلك</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
