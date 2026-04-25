import { motion } from 'framer-motion';
import { TrendingUp, Gift, Clock, Download } from 'lucide-react';

export default function JoinUs() {
  return (
    <section
      id="join-us"
      className="relative py-24 lg:py-32 bg-[var(--bg)] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6C5CE7]/5 rounded-full blur-3xl -ml-64 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#A3E635]/5 rounded-full blur-3xl -mr-32 -mb-32"></div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[var(--text)] mb-4">
            كن جزءاً من عائلة حاجات
          </h2>
          <p className="text-xl lg:text-2xl text-[var(--text-muted)] font-medium max-w-2xl mx-auto">
            ابدأ رحلتك معنا ككابتن توصيل اليوم وحقق دخلاً ممتازاً بمرونة تامة، مع دعم كامل في كل خطوة.
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-[var(--surface)] rounded-3xl p-8 lg:p-12 shadow-[var(--shadow)] border border-[var(--border)]"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl font-extrabold text-[var(--text)] mb-4">
              انضم لأسرة شركاء توصيل حاجات
            </h3>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              طريقك لزيادة دخلك يبدأ من هنا. انضم لشركاء التوصيل واستثمر وقتك ومركبتك بأكبر قدر من المرونة والاحترافية.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Benefit 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center p-6 bg-[var(--bg)] rounded-2xl border border-[var(--border)] hover:border-[#6C5CE7]/30 transition-colors"
            >
              <div className="w-14 h-14 bg-[#6C5CE7]/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp size={28} className="text-[#6C5CE7]" />
              </div>
              <h4 className="text-lg font-extrabold text-[var(--text)] mb-2">
                دخل إضافي مستمر
              </h4>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center p-6 bg-[var(--bg)] rounded-2xl border border-[var(--border)] hover:border-[#6C5CE7]/30 transition-colors"
            >
              <div className="w-14 h-14 bg-[#A3E635]/10 rounded-full flex items-center justify-center mb-4">
                <Gift size={28} className="text-[#A3E635]" />
              </div>
              <h4 className="text-lg font-extrabold text-[var(--text)] mb-2">
                حوافز ومكافآت
              </h4>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col items-center text-center p-6 bg-[var(--bg)] rounded-2xl border border-[var(--border)] hover:border-[#6C5CE7]/30 transition-colors"
            >
              <div className="w-14 h-14 bg-[#6C5CE7]/10 rounded-full flex items-center justify-center mb-4">
                <Clock size={28} className="text-[#6C5CE7]" />
              </div>
              <h4 className="text-lg font-extrabold text-[var(--text)] mb-2">
                ساعات عمل مرنة
              </h4>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <button className="btn btn-primary px-10 py-4 text-lg group">
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              <span>حمل التطبيق</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
