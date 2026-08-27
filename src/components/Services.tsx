import { Pill, Utensils, ShoppingBasket, Cog, Package } from 'lucide-react';

/*
 * Categories as a hairline grid rather than pastel chips.
 *
 * Each category previously sat in a rounded-2xl pill with its own pastel icon
 * tile (orange-50, red-50, green-50, blue-50), lifted on hover. Five competing
 * accent colours across five small chips is what made this read as a template.
 * The grid's own rules now do the separating, and the icons are monochrome.
 */

const services = [
  { icon: Utensils,        title: 'المطاعم',     note: 'وجبات من أي مطعم' },
  { icon: Pill,            title: 'الصيدلية',    note: 'دواء ومستلزمات طبية' },
  { icon: ShoppingBasket,  title: 'البقالة',     note: 'خضار وفواكه ومشتريات' },
  { icon: Package,         title: 'كابتن خاص',   note: 'توصيل طرود ومشاوير' },
  { icon: Cog,             title: 'قطع الغيار',  note: 'قطع ومستلزمات المركبات' },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <div className="text-right max-w-2xl ml-auto">
          <p className="text-sm font-bold text-[var(--text-faint)]">الخدمات</p>
          <h2 className="mt-3 text-3xl lg:text-[2.75rem]">كل ما تحتاجه، تجده لدينا</h2>
          <p className="mt-4 text-[var(--text-muted)] text-lg leading-relaxed">
            مجموعة واسعة من الخدمات لتسهيل حياتك اليومية وتوفير وقتك ومجهودك.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-r border-b border-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
          {services.map(({ icon: Icon, title, note }) => (
            <div
              key={title}
              className="border-l border-t border-[var(--border)] p-7 text-right bg-[var(--surface)] hover:bg-[var(--subtle)] transition-colors"
            >
              <Icon size={20} className="text-[var(--text-muted)] ml-auto" strokeWidth={1.75} />
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-[var(--text-muted)]">{note}</p>
            </div>
          ))}
          {/* Balances the grid so the last row does not sit half-empty. */}
          <div className="hidden lg:block border-l border-t border-[var(--border)] bg-[var(--subtle)]" />
        </div>
      </div>
    </section>
  );
}
