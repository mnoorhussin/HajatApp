import { Store, Bike, ChevronRight, TrendingUp, Users, Smartphone, HeadphonesIcon, DollarSign, Gift, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function JoinUs() {
  return (
    <section id="join-us" className="py-32 bg-[var(--bg)] overflow-hidden relative transition-colors duration-300">
      <div className="container-custom relative z-10">
        
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#6C5CE7]/5 text-[#6C5CE7] rounded-full font-bold text-sm mb-2"
          >
            <span>انضم لمستقبل التوصيل</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-[var(--text)]"
          >
            كن جزءاً من <span className="text-[#6C5CE7]">عائلة حاجات</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto font-medium"
          >
            سواء كنت صاحب عمل تبحث عن النمو، أو تبحث عن دخل إضافي مرن، لدينا المكان المناسب لك.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Partner Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[var(--surface)] rounded-[2.5rem] p-10 shadow-sm border border-[var(--border)] hover:shadow-xl hover:border-[#6C5CE7]/10 transition-all duration-500 overflow-hidden"
          >
            {/* Soft background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#6C5CE7]/5 rounded-full blur-3xl group-hover:bg-[#6C5CE7]/10 transition-colors duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] mb-8 group-hover:scale-110 transition-transform duration-500">
                <Store size={32} />
              </div>
              
              <h3 className="text-3xl font-extrabold text-[var(--text)] mb-4">
                انضم إلينا <span className="text-[#6C5CE7]">كشريك</span>
              </h3>
              
              <p className="text-[var(--text-muted)] text-lg mb-8 leading-relaxed font-medium">
                اجذب المزيد من العملاء وحقق نموًا استثنائيًا لمتجرك بسهولة تامة.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 flex-grow">
                {[
                  { text: 'توسيع قاعدة عملائك', icon: <Users size={18} /> },
                  { text: 'تحقيق أرباح مستدامة', icon: <TrendingUp size={18} /> },
                  { text: 'لوحة تحكم احترافية', icon: <Smartphone size={18} /> },
                  { text: 'دعم فني متكامل', icon: <HeadphonesIcon size={18} /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[var(--text)] font-bold">
                    <div className="text-[#6C5CE7] bg-[#6C5CE7]/5 p-2 rounded-xl border border-[#6C5CE7]/10">
                      {item.icon}
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full btn btn-outline py-4 text-base rounded-2xl group/btn overflow-hidden relative">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  سجل متجرك الآن
                  <ChevronRight size={20} className="scale-x-[-1] group-hover/btn:translate-x-[-4px] transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Captain Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-[#1E2A45] dark:bg-[#1e293b] rounded-[2.5rem] p-10 shadow-xl border border-[var(--border)] dark:border-white/5 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Soft background glow for dark mode */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#6C5CE7]/20 rounded-full blur-3xl group-hover:bg-[#6C5CE7]/30 transition-colors duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#6C5CE7] mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                <Bike size={32} />
              </div>
              
              <h3 className="text-3xl font-extrabold text-white mb-4">
                انضم لأسرة <span className="text-[#6C5CE7]">كباتن حاجات</span>
              </h3>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
                طريقك لزيادة دخلك بيبدأ هنا. انضم لكباتن حاجات واستثمر وقتك ومركبتك بأفضل طريقة.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 flex-grow">
                {[
                  { text: 'دخل إضافي مستمر', icon: <DollarSign size={18} /> },
                  { text: 'حوافز ومكافآت', icon: <Gift size={18} /> },
                  { text: 'ساعات عمل مرنة', icon: <Clock size={18} /> },
                  { text: 'دعم وتأمين كامل', icon: <ShieldCheck size={18} /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white font-bold">
                    <div className="text-[#6C5CE7] bg-white/5 p-2 rounded-xl border border-white/10">
                      {item.icon}
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/join" className="w-full btn btn-primary py-4 text-base rounded-2xl shadow-lg shadow-[#6C5CE7]/30">
                <span>سجل ككابتن الآن</span>
                <ChevronRight size={20} className="scale-x-[-1]" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
