import { motion } from 'framer-motion';
import { Smartphone, Send, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: <Smartphone size={40} />,
    title: 'افتح التطبيق',
    description: 'حمّل تطبيق حاجات وأنشئ حسابك في ثوانٍ معدودة وابدأ رحلة الطلب',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: <Send size={40} />,
    title: 'أكتب طلبك',
    description: 'سجّل طلبك كتابةً، وحدد المكان الذي تريد التوصيل إليه',
    color: 'bg-[#6C5CE7]/10 text-[#6C5CE7]'
  },
  {
    icon: <PackageCheck size={40} />,
    title: 'استلم طلبك',
    description: 'سيستلم أقرب كابتن طلبك ويوصله إلى باب منزلك بأمان وسرعة',
    color: 'bg-[#A3E635]/20 text-[#1E2A45]'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[var(--bg)] transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-[var(--text)]"
          >
            كيف تطلب من <span className="text-[#6C5CE7]">حاجات؟</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[var(--text-muted)] text-lg font-medium"
          >
            ثلاث خطوات بسيطة تفصلك عن وصول طلبك لباب بيتك
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#6C5CE7]/10 to-transparent -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                <div className={`relative w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center shadow-xl shadow-black/5 group hover:rotate-6 transition-transform duration-300`}>
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[var(--surface)] rounded-full flex items-center justify-center text-[var(--text)] font-extrabold shadow-md border border-[var(--border)]">
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[var(--text)]">{step.title}</h3>
                  <p className="text-[var(--text-muted)] font-medium leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
