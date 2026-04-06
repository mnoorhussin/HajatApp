import { Bike, ChevronRight, DollarSign, Gift, Clock, ShieldCheck } from 'lucide-react';
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
            ابدأ رحلتك معنا كمندوب توصيل اليوم وحقق دخلاً ممتازاً بمرونة تامة، مع دعم كامل في كل خطوة.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Captain Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-[#1E2A45] dark:bg-[#1e293b] rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-[var(--border)] dark:border-white/5 hover:shadow-[#6C5CE7]/10 transition-all duration-500 overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#6C5CE7]/20 rounded-full blur-[100px] group-hover:bg-[#6C5CE7]/30 transition-colors duration-500"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C5CE7]/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-[#6C5CE7] mb-10 border border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                <Bike size={40} />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
                انضم لأسرة <span className="text-[#6C5CE7]">شركاء توصيل حاجات</span>
              </h3>
              
              <p className="text-gray-300 text-lg lg:text-xl mb-12 leading-relaxed font-medium max-w-2xl">
                طريقك لزيادة دخلك يبدأ من هنا. انضم لشركاء التوصيل واستثمر وقتك ومركبتك بأكبر قدر من المرونة والاحترافية.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full">
                {[
                  { text: 'دخل إضافي مستمر', icon: <DollarSign size={20} /> },
                  { text: 'حوافز ومكافآت', icon: <Gift size={20} /> },
                  { text: 'ساعات عمل مرنة', icon: <Clock size={20} /> },
                  { text: 'دعم وتأمين كامل', icon: <ShieldCheck size={20} /> },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="text-[#6C5CE7] bg-white/5 p-3 rounded-2xl border border-white/10">
                      {item.icon}
                    </div>
                    <span className="text-base text-white font-bold">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Link to="" className="w-full max-w-md btn btn-primary py-5 text-lg rounded-2xl shadow-xl shadow-[#6C5CE7]/30 group/btn overflow-hidden relative">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  سجل كمندوب توصيل الآن
                  <ChevronRight size={24} className="scale-x-[-1] group-hover/btn:translate-x-[-6px] transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
