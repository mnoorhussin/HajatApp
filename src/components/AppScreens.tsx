import pricing from '../assets/screens/pricing.webp';
import tracking from '../assets/screens/tracking.webp';
import chat from '../assets/screens/chat.webp';

/*
 * The app itself, shown rather than described.
 *
 * The first version of this section was a scroll-snap rail carrying all five
 * screens at 250px wide, each with its own caption underneath. Five
 * full-height phones plus captions made the section over 1000px tall: it
 * dominated the page and asked the visitor to swipe through a catalogue before
 * reaching the captain CTA. Showing every screen is the store listing's job,
 * not a landing page's.
 *
 * Three screens now, composed as a single overlapping object beside the copy,
 * with the features as text instead of per-device captions. Same argument, a
 * little over half the height, and the phones read as one composition rather
 * than a list to get through.
 *
 * The screens are rendered from the same source that produces the App Store
 * and Play listings (hajat-store-assets/source), so they cannot drift from the
 * store or from the app. The devices carry their own transparent bezel, so
 * elevation comes from the .device drop-shadow — a box-shadow would draw a
 * rectangle around the rounded corners.
 */

const devices = [
  { src: tracking, alt: 'شاشة تتبّع الطلب في تطبيق حاجاتي',          lift: 0,   z: 1 },
  { src: pricing,  alt: 'شاشة تأكيد الطلب والسعر في تطبيق حاجاتي',   lift: -28, z: 3 },
  { src: chat,     alt: 'شاشة الدردشة مع الكابتن في تطبيق حاجاتي',   lift: 0,   z: 1 },
];

const features = [
  { dot: 'var(--orange)', text: 'تعرف السعر كاملاً قبل تأكيد الطلب.' },
  { dot: 'var(--lime)',   text: 'تتبّع طلبك من لحظة الاستلام وحتى التسليم.' },
  { dot: '#B3A7FF',       text: 'دردشة نصية وصوتية مع الكابتن داخل التطبيق.' },
];

export default function AppScreens() {
  return (
    <section id="app-screens" className="field-charcoal relative overflow-hidden py-16 lg:py-20">
      <div
        className="glow drift"
        style={{ width: 460, height: 460, background: '#6C5CE7', top: -180, insetInlineEnd: -140, opacity: 0.4 }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 tex-dots text-white opacity-[0.05]" aria-hidden="true" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Copy */}
          <div className="lg:col-span-5 text-right on-dark">
            <span className="eyebrow eyebrow-lime">داخل التطبيق</span>
            <h2 className="mt-4 text-3xl lg:text-[2.5rem]">شاهد التطبيق قبل تحميله</h2>
            <p className="mt-4 text-[17px] leading-relaxed" style={{ color: '#B9B7CE' }}>
              لقطات حقيقية من حاجاتي — نفس الشاشات التي ستستخدمها.
            </p>

            <ul className="mt-7 space-y-3.5">
              {features.map((f) => (
                <li
                  key={f.text}
                  className="flex items-start gap-3 justify-end text-[15px] leading-relaxed"
                  style={{ color: '#CFCDE0' }}
                >
                  <span>{f.text}</span>
                  <span
                    className="mt-[9px] inline-block w-[7px] h-[7px] rounded-full shrink-0"
                    style={{ background: f.dot }}
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Devices, as one overlapping object. marginInlineStart keeps the
              overlap direction correct under RTL without a second rule. */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-center">
              {devices.map((d, i) => (
                <img
                  key={d.alt}
                  src={d.src}
                  alt={d.alt}
                  width={840}
                  height={1768}
                  loading="lazy"
                  decoding="async"
                  className="device w-[118px] sm:w-[150px] lg:w-[168px] h-auto relative"
                  style={{
                    marginInlineStart: i === 0 ? 0 : '-1.75rem',
                    transform: `translateY(${d.lift}px)`,
                    zIndex: d.z,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
