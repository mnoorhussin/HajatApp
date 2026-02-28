import { Store, Bike, ChevronRight, TrendingUp, Users, Smartphone, HeadphonesIcon, DollarSign, Gift, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JoinUs() {
  return (
    <section id="join-us" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-secondary">
            كن جزءاً من <span className="text-primary">عائلة حاجات</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            سواء كنت صاحب عمل تبحث عن النمو، أو شخص يبحث عن دخل إضافي بمرونة، لدينا الفرصة المناسبة لك.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Partner Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm">
              <Store size={40} />
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-secondary rounded-full font-bold text-sm border border-accent/20 w-fit mb-4">
              فرصة لنمو أعمالك
            </div>
            
            <h3 className="text-3xl font-extrabold text-secondary mb-4">
              انضم إلينا <span className="text-primary">كشريك</span>
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              اجذب المزيد من العملاء وحقق نموًا استثنائيًا. ابدأ فصلك الجديد مع حاجات ووسّع نطاق عملك بسهولة.
            </p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                { text: 'توسيع قاعدة عملائك بشكل ملحوظ', icon: <Users size={20} /> },
                { text: 'زيادة المبيعات وتحقيق أرباح مستدامة', icon: <TrendingUp size={20} /> },
                { text: 'لوحة تحكم ذكية لإدارة متجرك', icon: <Smartphone size={20} /> },
                { text: 'دعم فني وتسويقي على مدار الساعة', icon: <HeadphonesIcon size={20} /> },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-secondary font-medium">
                  <div className="text-accent bg-accent/10 p-1.5 rounded-lg">
                    {item.icon}
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
            
            <button className="w-full flex items-center justify-center gap-2 bg-secondary text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-md group-hover:shadow-secondary/20 group">
              سجل متجرك الآن
              <ChevronRight className="group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Captain Card */}
          <div className="bg-secondary rounded-3xl p-8 shadow-xl border border-secondary flex flex-col relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-primary mb-6 shadow-sm border border-white/5">
              <Bike size={40} />
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full font-bold text-sm w-fit mb-4">
              فرصة عمل مميزة
            </div>
            
            <h3 className="text-3xl font-extrabold text-white mb-4">
              انضم لأسرة <span className="text-primary">طياري حاجات</span>
            </h3>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              عندك ركشة، موتر، أو عربية؟ كن فهلوي وزيد دخلك. أكتب طلباتهم ونحن في دربك — كن كابتن حاجات وابدأ اليوم.
            </p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                { text: 'دخل إضافي مستمر وممتاز', icon: <DollarSign size={20} /> },
                { text: 'حوافز ومكافآت شهرية للمتميزين', icon: <Gift size={20} /> },
                { text: 'ساعات عمل مرنة تناسب وقتك', icon: <Clock size={20} /> },
                { text: 'دعم فني وتأمين أثناء الرحلات', icon: <ShieldCheck size={20} /> },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200 font-medium">
                  <div className="text-primary bg-primary/20 p-1.5 rounded-lg border border-primary/10">
                    {item.icon}
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
            
            <Link to="/join" className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-md group-hover:shadow-primary/30 group">
              سجل كطيار الآن
              <ChevronRight className="group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
