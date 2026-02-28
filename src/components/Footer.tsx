import { Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 text-right">
          <div className="col-span-1 md:col-span-2 space-y-6">
             <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Hajat Logo" className="h-16 w-auto object-contain" />
             </div>
             <p className="text-gray-500 max-w-sm leading-relaxed">
               أي حاجة... حاجات! أكتب طلبك، ونحن في دربك. نوصلك كل شي من صيدلية، مطعم، بقالة، وأكتر.
             </p>
             <div className="flex gap-4">
               {[Facebook, Twitter, Instagram].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all shadow-sm hover:shadow-md">
                   <Icon size={20} />
                 </a>
               ))}
             </div>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">عن حاجات</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-secondary mb-6 text-lg">تواصل معنا</h4>
             <ul className="space-y-4 text-gray-500">
               <li>support@hajat.sd</li>
               <li>+249 123 456 789</li>
               <li>السودان - كسلا</li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} حاجات لخدمات التوصيل. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
