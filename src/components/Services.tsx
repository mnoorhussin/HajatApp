import { Pill, Utensils, ShoppingBasket, Cog, Package, Mic } from 'lucide-react';

const services = [
  {
    icon: <Pill size={28} className="text-primary" />,
    title: 'الصيدلية',
  },
  {
    icon: <Utensils size={28} className="text-primary" />,
    title: 'المطاعم',
  },
  {
    icon: <ShoppingBasket size={28} className="text-primary" />,
    title: 'المقاضي',
  },
  {
    icon: <Package size={28} className="text-primary" />,
    title: 'مرسال',
  },
  {
    icon: <Cog size={28} className="text-primary" />,
    title: 'الإسبيرات',
  },
  {
    icon: <Mic size={28} className="text-primary" />,
    title: 'طلب صوتي',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">
            مهما كانت الحاجة، نحن نجيبها
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 text-secondary font-bold text-lg md:text-xl py-2 px-4 bg-gray-50 rounded-full border border-gray-100"
            >
              {service.icon}
              <span>{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
