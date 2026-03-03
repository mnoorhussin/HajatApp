import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Download } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] pt-24 pb-12 border-t border-[var(--border)] transition-colors duration-300">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20 text-right">
          <div className="lg:col-span-1 space-y-8">
             <div className="flex items-center gap-0 mb-6">
                <img src={logo} alt="Hajat Logo" className="h-20 w-auto object-contain dark:invert dark:brightness-200" />
                <span className="text-3xl font-black text-[var(--text)] tracking-tight -mr-3">حاجات</span>
             </div>
             <p className="text-[var(--text-muted)] leading-relaxed font-medium">
               أي حاجة... حاجات! أكتب طلبك، ونحن في دربك. التطبيق السوداني الأول لتوصيل كل احتياجاتك بسرعة وأمان.
             </p>
             <div className="flex gap-4">
               {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' }
               ].map((item, i) => (
                 <a 
                   key={i} 
                   href={item.href} 
                   className="w-11 h-11 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] hover:text-[#6C5CE7] hover:border-[#6C5CE7]/30 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                   aria-label="Social Link"
                 >
                   <item.icon size={22} />
                 </a>
               ))}
             </div>
          </div>

          <div>
            <h4 className="font-extrabold text-[var(--text)] mb-8 text-xl">روابط سريعة</h4>
            <ul className="space-y-4 text-[var(--text-muted)] font-medium">
              <li><a href="#" className="hover:text-[#6C5CE7] transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]/20 group-hover:bg-[#6C5CE7] transition-colors"></span>عن حاجات</a></li>
              <li><a href="#services" className="hover:text-[#6C5CE7] transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]/20 group-hover:bg-[#6C5CE7] transition-colors"></span>خدماتنا</a></li>
              <li><a href="#how-it-works" className="hover:text-[#6C5CE7] transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]/20 group-hover:bg-[#6C5CE7] transition-colors"></span>كيف يعمل</a></li>
              <li><a href="#join-us" className="hover:text-[#6C5CE7] transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]/20 group-hover:bg-[#6C5CE7] transition-colors"></span>انضم إلينا</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-extrabold text-[var(--text)] mb-8 text-xl">تواصل معنا</h4>
             <ul className="space-y-5 text-[var(--text-muted)] font-medium">
               <li className="flex items-center gap-3">
                <div className="p-2 bg-[var(--bg)] rounded-xl text-[#6C5CE7] border border-[var(--border)]">
                  <Mail size={18} />
                </div>
                <span>support@hajat.sd</span>
               </li>
               <li className="flex items-center gap-3">
                <div className="p-2 bg-[var(--bg)] rounded-xl text-[#6C5CE7] border border-[var(--border)]">
                  <Phone size={18} />
                </div>
                <span>+249 123 456 789</span>
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
            <h4 className="font-extrabold text-[var(--text)] text-lg">جاهز تطلب؟</h4>
            <p className="text-sm text-[var(--text-muted)] font-medium">حمل التطبيق الآن واستمتع بأفضل خدمات التوصيل</p>
            <button className="w-full btn btn-primary py-4 text-sm shadow-md">
              <Download size={18} />
              <span>تحميل من المتجر</span>
            </button>
          </div>
        </div>

        <div className="pt-10 border-t border-[var(--border)] text-center text-[var(--text-muted)] text-sm font-bold flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} حاجات لخدمات التوصيل. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[var(--text)] transition-colors">الشروط والأحكام</a>
            <a href="#" className="hover:text-[var(--text)] transition-colors">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
