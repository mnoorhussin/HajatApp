import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'كيف يمكنني الطلب من تطبيق حاجات؟',
    answer: 'الأمر بسيط جداً! قم بتحميل التطبيق، واكتب طلبك في "صندوق حاجات السحري" أو سجل طلبك صوتياً بضغطة زر، وحدد مكانك، وسيتكفل كباتننا بالباقي.'
  },
  {
    question: 'ما هي المناطق التي يغطيها التطبيق؟',
    answer: 'نحن نوسع نطاق تغطيتنا باستمرار. حالياً نغطي معظم مناطق الخرطوم والمدن الرئيسية، ونهدف للوصول لكل شبر في السودان.'
  },
  {
    question: 'هل توجد طرق دفع غير الكاش؟',
    answer: 'نعم، ندعم الدفع عند الاستلام (كاش) بالإضافة إلى التحويل البنكي عبر التطبيقات البنكية المتاحة في السودان.'
  },
  {
    question: 'كيف أصبح كابتن في حاجات؟',
    answer: 'إذا كان لديك وسيلة نقل (ركشة، موتر، عربية) وترغب في زيادة دخلك، يمكنك التسجيل عبر أيقونة "كن كابتن" في التطبيق أو عبر الموقع.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-[#1E2A45]"
          >
            الأسئلة <span className="text-[#6C5CE7]">الشائعة</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#6B7280] text-lg font-medium"
          >
            كل ما تود معرفته عن خدماتنا وكيفية البدء
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl border transition-all duration-300 ${
                activeIndex === index ? 'border-[#6C5CE7] bg-[#6C5CE7]/5 shadow-sm' : 'border-[#F3F4F6] bg-white'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-right"
              >
                <span className={`text-lg font-bold transition-colors ${
                  activeIndex === index ? 'text-[#6C5CE7]' : 'text-[#1E2A45]'
                }`}>
                  {faq.question}
                </span>
                <div className={`p-1.5 rounded-xl transition-all ${
                  activeIndex === index ? 'bg-[#6C5CE7] text-white rotate-180' : 'bg-[#F3F4F6] text-[#6B7280]'
                }`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-[#6B7280] font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
