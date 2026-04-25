import { Pill, Utensils, ShoppingBasket, Cog, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Utensils size={24} />,
    title: 'المطاعم',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: <Pill size={24} />,
    title: 'الصيدلية',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: <ShoppingBasket size={24} />,
    title: 'البقالة',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: <Package size={24} />,
    title: 'كابتن خاص',
    color: 'bg-[#6C5CE7]/10 text-[#6C5CE7]'
  },
  {
    icon: <Cog size={24} />,
    title: 'قطع الغيار',
    color: 'bg-blue-50 text-blue-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[var(--bg)] border-y border-[var(--border)] transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-[var(--text)]"
          >
            كل ما تحتاجه، <span className="text-[#6C5CE7]">تجده لدينا</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto font-medium"
          >
            نحن نوفر لك مجموعة واسعة من الخدمات لتسهيل حياتك اليومية وتوفير وقتك ومجهودك.
          </motion.p>
        </div>

        <div className="flex justify-start md:justify-center items-center gap-4 md:gap-8 overflow-x-auto md:flex-wrap pb-4 hide-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex items-center gap-3 bg-[var(--surface)] hover:shadow-md border border-[var(--border)] py-3 px-6 rounded-2xl transition-all duration-300 shrink-0 snap-center"
            >
              <div className={`p-2 rounded-xl ${service.color}`}>
                {service.icon}
              </div>
              <span className="font-extrabold text-[var(--text)] whitespace-nowrap">
                {service.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
