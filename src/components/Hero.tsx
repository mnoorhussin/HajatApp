import { ArrowLeft } from 'lucide-react';

/*
 * Hero visual: the product's distinguishing moment, not a mascot.
 *
 * The 3D scooter render is gone. It said "delivery app" — the same thing every
 * competitor's stock illustration says — while the actual differentiator went
 * unshown: you write a request in your own words and nearby captains bid on it.
 * That is what this card shows, and no template can show it.
 *
 * Built entirely from text and rules: no image request, crisp on any display,
 * and it restyles with the theme instead of being a baked-in PNG.
 *
 * NOTE: the offers below are an illustrative mock-up, like any product
 * screenshot. Swap the names and prices for whatever reflects real pricing.
 */

const offers = [
  { name: 'محمد أ.', km: '١٫٢ كم', mins: '١٨ د', price: '٢٬٢٠٠', best: true },
  { name: 'سارة م.', km: '٢٫٠ كم', mins: '٢٤ د', price: '٢٬٥٠٠', best: false },
  { name: 'خالد ع.', km: '٣٫١ كم', mins: '٣٠ د', price: '٢٬٨٠٠', best: false },
];

const facts = [
  { k: 'توصيل فوري', v: 'خلال دقائق من تأكيد الطلب' },
  { k: 'دفع عند الاستلام', v: 'بدون بطاقة، بدون تعقيد' },
  { k: 'دعم على مدار الساعة', v: 'فريق حاجاتي جاهز في أي وقت' },
];

export default function Hero() {
  return (
    <section className="pt-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center py-16 lg:py-24">

          {/* Type */}
          <div className="lg:col-span-6 text-right">
            <h1 className="rise text-[2.75rem] sm:text-6xl lg:text-[4rem] font-extrabold leading-[1.1]">
              لا تختر من قائمة.
              <br />
              <span style={{ color: 'var(--brand)' }}>اكتب ما تريد.</span>
            </h1>

            <p
              className="rise mt-6 text-lg lg:text-xl text-[var(--text-muted)] leading-relaxed max-w-lg ml-auto"
              style={{ animationDelay: '60ms' }}
            >
              اطلب أي شيء بكلماتك، ويتنافس عليه كباتن قريبون منك.
              أنت من يختار السعر والكابتن — بلا مفاجآت.
            </p>

            <div
              className="rise mt-9 flex flex-col sm:flex-row gap-3 sm:justify-end"
              style={{ animationDelay: '120ms' }}
            >
              <a href="#download" className="btn btn-brand px-6">حمل التطبيق</a>
              <a href="#join-us" className="btn btn-outline px-6 group">
                <span>انضم ككابتن</span>
                <ArrowLeft size={17} className="transition-transform group-hover:-translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Product moment: one request, three competing offers */}
          <div className="lg:col-span-6 rise" style={{ animationDelay: '180ms' }}>
            <div className="border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)] overflow-hidden">

              <div className="p-6 lg:p-7 text-right">
                <p className="text-xs font-bold text-[var(--text-faint)]">طلبك</p>
                <p className="mt-2.5 text-lg lg:text-xl leading-relaxed text-[var(--text)]">
                  «نص دزينة حلويات من الأفراح، ومشروب غازي عائلي»
                </p>
              </div>

              <div className="border-t border-[var(--border)] bg-[var(--subtle)] px-6 lg:px-7 py-3 text-right">
                <p className="text-xs font-bold text-[var(--text-faint)]">٣ عروض من كباتن قريبين</p>
              </div>

              <ul className="divide-y divide-[var(--border)]">
                {offers.map((o) => (
                  <li key={o.name} className="flex items-center justify-between gap-4 px-6 lg:px-7 py-4">
                    <div className="flex items-baseline gap-1.5 shrink-0">
                      <span
                        className="text-lg font-extrabold"
                        style={{ color: o.best ? 'var(--brand)' : 'var(--text)' }}
                      >
                        {o.price}
                      </span>
                      <span className="text-xs text-[var(--text-faint)]">ج</span>
                    </div>

                    <div className="text-right min-w-0">
                      <div className="flex items-center gap-2 justify-end">
                        {o.best && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-[var(--border-strong)] text-[var(--text-muted)]">
                            الأفضل
                          </span>
                        )}
                        <span className="font-bold text-[15px] truncate">{o.name}</span>
                      </div>
                      <div className="text-xs text-[var(--text-muted)] mt-0.5">
                        {o.km} · يصل خلال {o.mins}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-3 text-xs text-[var(--text-faint)] text-right">
              مثال توضيحي لواجهة التطبيق.
            </p>
          </div>
        </div>
      </div>

      {/* Facts */}
      <div className="border-t border-[var(--border)]">
        <div className="container-custom">
          <dl className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[var(--border)]">
            {facts.map((f) => (
              <div key={f.k} className="py-7 sm:px-8 text-right">
                <dt className="font-bold text-[15px] text-[var(--text)]">{f.k}</dt>
                <dd className="mt-1 text-sm text-[var(--text-muted)]">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
