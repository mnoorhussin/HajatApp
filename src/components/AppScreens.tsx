import pricing from '../assets/screens/pricing.webp';
import tracking from '../assets/screens/tracking.webp';
import chat from '../assets/screens/chat.webp';
import captain from '../assets/screens/captain.webp';
import privacy from '../assets/screens/privacy.webp';

/*
 * The app itself, shown rather than described.
 *
 * The page previously asked visitors to take the product on trust: five
 * category names, three numbered steps, and not one pixel of the thing being
 * downloaded. These are the real screens — rendered from the same source that
 * produces the App Store and Play listings (hajat-store-assets/source), so the
 * site cannot drift from the store or from the app.
 *
 * Horizontal scroll-snap on every breakpoint. A grid would either shrink the
 * devices past legibility or stack into a very long column; a rail lets each
 * phone stay large enough that the Arabic UI inside it is actually readable,
 * and invites the swipe that phone users already expect.
 *
 * The devices carry their own transparent bezel, so elevation comes from the
 * .device drop-shadow — a box-shadow would draw a rectangle around the
 * rounded corners.
 */

const screens = [
  { src: pricing,  title: 'أسعار واضحة',        body: 'تعرف السعر كاملاً قبل أن تؤكد الطلب.' },
  { src: tracking, title: 'تابع طلبك',          body: 'من لحظة الاستلام وحتى باب منزلك.' },
  { src: chat,     title: 'دردشة نصية وصوتية',  body: 'راسل الكابتن داخل التطبيق فقط.' },
  { src: captain,  title: 'وصّل واربح',          body: 'اقبل الطلبات القريبة منك في وقتك.' },
  { src: privacy,  title: 'خصوصيتك محفوظة',     body: 'رقمك لا يُشارك مع أي طرف آخر.' },
];

export default function AppScreens() {
  return (
    <section id="app-screens" className="field-charcoal relative overflow-hidden py-20 lg:py-28">
      <div
        className="glow drift"
        style={{ width: 520, height: 520, background: '#6C5CE7', top: -200, insetInlineEnd: -160, opacity: 0.4 }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 tex-dots text-white opacity-[0.05]" aria-hidden="true" />

      <div className="relative">
        <div className="container-custom">
          <div className="text-right max-w-2xl ml-auto on-dark">
            <span className="eyebrow eyebrow-lime">داخل التطبيق</span>
            <h2 className="mt-4 text-3xl lg:text-[2.75rem]">
              شوف حاجاتي قبل ما تحمّله
            </h2>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: '#B9B7CE' }}>
              لقطات حقيقية من التطبيق — نفس الشاشات التي ستستخدمها.
            </p>
          </div>
        </div>

        {/* Rail. Padding on the scroller (not the container) so the first and
            last device can sit flush with the page gutter when scrolled. */}
        <div
          className="mt-14 flex gap-6 lg:gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory
                     px-5 sm:px-6 lg:px-8 pb-4"
          style={{ scrollPaddingInline: '1.25rem' }}
        >
          {screens.map((s, i) => (
            <figure
              key={s.title}
              className="snap-center shrink-0 w-[200px] sm:w-[230px] lg:w-[250px]"
              style={{ marginTop: i % 2 === 1 ? '2rem' : 0 }}
            >
              <img
                src={s.src}
                alt={`شاشة ${s.title} في تطبيق حاجاتي`}
                width={840}
                height={1768}
                loading="lazy"
                decoding="async"
                className="device w-full h-auto"
              />
              <figcaption className="mt-6 text-right">
                <h3 className="text-[17px] font-bold text-white">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: '#9D9BB5' }}>
                  {s.body}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
