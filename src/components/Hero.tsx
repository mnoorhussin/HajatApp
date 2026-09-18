import { ArrowLeft } from 'lucide-react';
import DownloadButton from './DownloadButton';
import magicbox320 from '../assets/screens/magicbox-320.webp';
import magicbox560 from '../assets/screens/magicbox-560.webp';
import magicbox840 from '../assets/screens/magicbox-840.webp';

/*
 * Hero: the brand field, the real app, and the one thing no competitor has.
 *
 * The previous version was a bordered grey card listing three mock offers. It
 * was honest about the product and said nothing about the brand — a delivery
 * app for a vivid Arabic market, rendered entirely in #e6e6e6.
 *
 * This is the same purple field the App Store and Play screenshots open with
 * (hajat-store-assets/source/base.css, .bg-dark), so someone who saw the store
 * listing lands on a page that looks like the thing they just saw. The device
 * is not a stock mockup: it is the actual Magic Box screen, rendered from the
 * same source that produces the store slides, so it can never drift from what
 * the app really looks like.
 *
 * The offers card still carries the differentiator — you write a request, and
 * nearby captains bid on it — but as a small object overlapping the phone
 * rather than the entire hero.
 *
 * NOTE: the offers are an illustrative mock-up, like any product screenshot.
 */

const offers = [
  { name: 'محمد أ.', km: '١٫٢ كم', price: '٢٬٢٠٠', best: true },
  { name: 'سارة م.', km: '٢٫٠ كم', price: '٢٬٥٠٠', best: false },
];

const facts = [
  { k: 'توصيل فوري', v: 'خلال دقائق من تأكيد الطلب' },
  { k: 'دفع عند الاستلام', v: 'بدون بطاقة، بدون تعقيد' },
  { k: 'دعم على مدار الساعة', v: 'فريق حاجاتي جاهز في أي وقت' },
];

export default function Hero() {
  return (
    <section className="pt-16">
      {/* ── The brand field ───────────────────────────────────────────────── */}
      <div className="field-brand relative overflow-hidden">
        {/* Light sources. Decorative only. */}
        <div
          className="glow drift"
          style={{ width: 620, height: 620, background: '#8B7BFF', top: -240, insetInlineStart: -140, opacity: 0.55 }}
          aria-hidden="true"
        />
        <div
          className="glow drift-slow"
          style={{ width: 460, height: 460, background: '#FF7D00', bottom: -200, insetInlineEnd: -120, opacity: 0.22 }}
          aria-hidden="true"
        />
        {/* Geometric undertone */}
        <div className="absolute inset-0 tex-dots text-white opacity-[0.07]" aria-hidden="true" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-16 pb-20 lg:pt-20 lg:pb-24">

            {/* Type */}
            <div className="lg:col-span-6 text-right on-dark">
              <span className="eyebrow rise">حاجاتي</span>

              <h1 className="rise mt-5 text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.12]">
                لا تختر من قائمة.
                <br />
                <span style={{ color: 'var(--orange)' }}>اكتب ما تريد.</span>
              </h1>

              <p
                className="rise mt-6 text-lg lg:text-xl leading-relaxed max-w-lg ml-auto"
                style={{ color: 'var(--on-brand-muted)', animationDelay: '60ms' }}
              >
                اطلب أي شيء بكلماتك، ويتنافس عليه كباتن قريبون منك.
                أنت من يختار السعر والكابتن — بلا مفاجآت.
              </p>

              <div
                className="rise mt-9 flex flex-col sm:flex-row gap-3 sm:justify-end"
                style={{ animationDelay: '120ms' }}
              >
                <DownloadButton className="btn btn-accent px-6" />
                <a href="#join-us" className="btn btn-on-dark px-6 group">
                  <span>انضم ككابتن</span>
                  <ArrowLeft size={17} className="transition-transform group-hover:-translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* The actual app, with the bidding moment floating over it */}
            <div className="lg:col-span-6 rise" style={{ animationDelay: '180ms' }}>
              <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
                {/* Painted at 280 CSS px on a phone and 320 from sm up, so the
                    single 840px master was oversized for every phone that is
                    not 3x. At DPR 2 this now takes 560w (30KB rather than
                    47KB); 3x screens still get the full 840w. */}
                <img
                  src={magicbox560}
                  srcSet={`${magicbox320} 320w, ${magicbox560} 560w, ${magicbox840} 840w`}
                  sizes="(min-width: 640px) 320px, 280px"
                  alt="شاشة صندوق حاجاتي السحري في التطبيق"
                  width={840}
                  height={1768}
                  className="device float-y w-full h-auto"
                  fetchPriority="high"
                />

                {/* Offers — the differentiator, as a small object in front */}
                <div
                  className="absolute -bottom-10 -left-6 sm:-left-14 w-[230px] sm:w-[262px] rounded-[var(--radius-lg)]
                             bg-white/95 backdrop-blur-sm p-4 text-right"
                  style={{ boxShadow: 'var(--shadow-lg)' }}
                >
                  <p className="text-[11px] font-bold" style={{ color: '#8a89a0' }}>
                    ٣ عروض من كباتن قريبين
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {offers.map((o) => (
                      <li key={o.name} className="flex items-center justify-between gap-3">
                        <span
                          className="text-[15px] font-extrabold shrink-0"
                          style={{ color: o.best ? 'var(--brand)' : '#141320' }}
                        >
                          {o.price}
                          <span className="text-[10px] font-bold mr-1" style={{ color: '#8a89a0' }}>ج</span>
                        </span>
                        <span className="min-w-0 text-right">
                          <span className="flex items-center gap-1.5 justify-end">
                            {o.best && (
                              <span
                                className="text-[9px] font-bold px-1.5 py-px rounded-full"
                                style={{ background: 'var(--lime-cont)', color: 'var(--lime-deep)' }}
                              >
                                الأفضل
                              </span>
                            )}
                            <span className="text-[13px] font-bold truncate" style={{ color: '#141320' }}>
                              {o.name}
                            </span>
                          </span>
                          <span className="block text-[11px]" style={{ color: '#8a89a0' }}>{o.km}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Facts strip ───────────────────────────────────────────────────── */}
      <div className="bg-[var(--surface)] border-b border-[var(--border)]">
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
