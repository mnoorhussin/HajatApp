import { Pill, Utensils, ShoppingBasket, Cog, Package } from 'lucide-react';

/*
 * Categories.
 *
 * The version before this one was a monochrome hairline grid, written in
 * reaction to an earlier design that gave all five chips their own pastel
 * (orange / red / green / blue), which read as a template. Both were wrong in
 * the same way: the colour carried no meaning, so it was either noise or it
 * was absent.
 *
 * Colour is assigned by SIDE OF THE MARKETPLACE here. The four customer
 * errands are iris — the product's own hue. "كابتن خاص" is lime, because lime
 * is the captain colour everywhere else on this site and in the app. A visitor
 * scanning the row sees the odd one out and is right to.
 */

/*
 * The chip class is written out in full rather than composed as
 * `chip-${tone}`. Tailwind scans source as plain text, so a class name that
 * only exists once the template literal is evaluated is never seen and the
 * rule is purged from the build — which is exactly what happened here: the
 * iris chips rendered with a transparent background while chip-lime survived
 * only because JoinUs.tsx happens to spell it out.
 */
const services = [
  { icon: Utensils,       title: 'المطاعم',    note: 'وجبات من أي مطعم',       chip: 'chip-brand' },
  { icon: Pill,           title: 'الصيدلية',   note: 'دواء ومستلزمات طبية',    chip: 'chip-brand' },
  { icon: ShoppingBasket, title: 'البقالة',    note: 'خضار وفواكه ومشتريات',   chip: 'chip-brand' },
  { icon: Cog,            title: 'قطع الغيار', note: 'قطع ومستلزمات المركبات', chip: 'chip-brand' },
  { icon: Package,        title: 'كابتن خاص',  note: 'توصيل طرود ومشاوير',     chip: 'chip-lime'  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-[var(--surface)]">
      <div className="container-custom">
        <div className="text-right max-w-2xl ml-auto">
          <span className="eyebrow">الخدمات</span>
          <h2 className="mt-4 text-3xl lg:text-[2.75rem]">كل ما تحتاجه، تجده لدينا</h2>
          <p className="mt-4 text-[var(--text-muted)] text-lg leading-relaxed">
            مجموعة واسعة من الخدمات لتسهيل حياتك اليومية وتوفير وقتك ومجهودك.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, note, chip }) => (
            <div key={title} className="card card-hover text-right">
              <span className={`chip ${chip} ml-auto`}>
                <Icon size={22} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-[var(--text-muted)]">{note}</p>
            </div>
          ))}

          {/* The sixth cell is the CTA rather than a spacer, so the row closes
              on an action instead of on empty space. */}
          <a
            href="#download"
            className="card card-hover text-right flex flex-col justify-center group"
            style={{ background: 'var(--brand-soft)', borderColor: 'var(--brand-cont)' }}
          >
            <h3 className="text-lg font-bold" style={{ color: 'var(--brand-on-soft)' }}>
              لم تجد ما تبحث عنه؟
            </h3>
            <p className="mt-1.5 text-sm" style={{ color: 'var(--brand-on-soft)', opacity: 0.85 }}>
              اكتبه بكلماتك في الصندوق السحري ←
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
