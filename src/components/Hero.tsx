import { ArrowLeft } from 'lucide-react';
import heroDelivery from '../assets/hero-delivery.webp';

/*
 * Type-first hero.
 *
 * Removed, deliberately: the pill badge with a Zap icon and flag emoji, two
 * blur-3xl background glows, a third blur-[100px] glow behind the image, a
 * purple-tinted drop-shadow, two floating "notification" cards with emoji, and
 * a pulsing status pill. Those six decorations were doing work that typography
 * and a hairline grid should do, and they are most of why the page read as
 * generic.
 *
 * Framer Motion is gone from this file too — the entry animation is one CSS
 * class, so the hero ships no animation JS at all.
 */

const facts = [
  { k: 'توصيل فوري', v: 'خلال دقائق من تأكيد الطلب' },
  { k: 'دفع عند الاستلام', v: 'بدون بطاقة، بدون تعقيد' },
  { k: 'دعم على مدار الساعة', v: 'فريق حاجاتي جاهز في أي وقت' },
];

export default function Hero() {
  return (
    <section className="pt-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center py-16 lg:py-24">

          {/* Type */}
          <div className="lg:col-span-7 text-right">
            <h1 className="rise text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.1]">
              كل ما تحتاجه،
              <br />
              <span className="text-[var(--text-muted)]">في تطبيق</span>{' '}
              <span style={{ color: 'var(--brand)' }}>حاجاتي</span>
            </h1>

            <p
              className="rise mt-6 text-lg lg:text-xl text-[var(--text-muted)] leading-relaxed max-w-xl ml-auto"
              style={{ animationDelay: '60ms' }}
            >
              اكتب ما تريد بكلماتك، واستقبل عروض أسعار من كباتن قريبين منك.
              بدون قوائم محدودة، وبدون مفاجآت في السعر.
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

          {/* Visual: framed, not floated */}
          <div className="lg:col-span-5 rise" style={{ animationDelay: '180ms' }}>
            <div className="border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--subtle)] p-6 lg:p-8">
              <img
                src={heroDelivery}
                alt="كابتن توصيل حاجاتي"
                width={800}
                height={533}
                loading="eager"
                decoding="async"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Facts: a bordered row, not icon-circles */}
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
