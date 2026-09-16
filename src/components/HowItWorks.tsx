/*
 * Three steps.
 *
 * The numerals used to be --border-strong (#d4d4d4) on white: technically the
 * sequence carrier, visually invisible. They are the loudest thing in the
 * section now, and they run iris → iris → orange so the eye finishes on the
 * step that matters — the one where the order actually arrives.
 */

const steps = [
  {
    n: '٠١',
    title: 'افتح التطبيق',
    description: 'حمّل تطبيق حاجاتي وأنشئ حسابك في ثوانٍ معدودة وابدأ رحلة الطلب.',
    color: 'var(--brand)',
  },
  {
    n: '٠٢',
    title: 'اكتب طلبك',
    description: 'سجّل طلبك كتابةً، وحدد المكان الذي تريد التوصيل إليه.',
    color: 'var(--brand)',
  },
  {
    n: '٠٣',
    title: 'استلم طلبك',
    description: 'يستلم أقرب كابتن طلبك ويوصله إلى باب منزلك بأمان وسرعة.',
    color: 'var(--orange)',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-[var(--surface)]">
      <div className="container-custom">
        <div className="text-right max-w-2xl ml-auto">
          <span className="eyebrow">كيف يعمل</span>
          <h2 className="mt-4 text-3xl lg:text-[2.75rem]">ثلاث خطوات، ويصل طلبك</h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="group card card-hover text-right relative overflow-hidden">
              {/* The numeral, at the scale it deserves. */}
              <div
                className="text-[3.5rem] font-extrabold leading-none"
                style={{ color: s.color }}
              >
                {s.n}
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[var(--text-muted)] leading-relaxed">{s.description}</p>

              {/* Hairline that picks up the step's colour on hover. */}
              <span
                className="absolute bottom-0 right-0 h-[3px] w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: s.color }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
