/*
 * Three steps as a numbered hairline grid.
 *
 * Was: three 96px rounded-3xl tiles in blue-50 / violet / lime, each with a
 * shadow, a floating numbered badge, and a 6-degree rotate on hover, sitting on
 * a gradient connector line. The numerals now carry the sequence on their own.
 */

const steps = [
  {
    n: '٠١',
    title: 'افتح التطبيق',
    description: 'حمّل تطبيق حاجاتي وأنشئ حسابك في ثوانٍ معدودة وابدأ رحلة الطلب.',
  },
  {
    n: '٠٢',
    title: 'اكتب طلبك',
    description: 'سجّل طلبك كتابةً، وحدد المكان الذي تريد التوصيل إليه.',
  },
  {
    n: '٠٣',
    title: 'استلم طلبك',
    description: 'يستلم أقرب كابتن طلبك ويوصله إلى باب منزلك بأمان وسرعة.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-[var(--subtle)]">
      <div className="container-custom">
        <div className="text-right max-w-2xl ml-auto">
          <p className="text-sm font-bold text-[var(--text-faint)]">كيف يعمل</p>
          <h2 className="mt-3 text-3xl lg:text-[2.75rem]">ثلاث خطوات، ويصل طلبك</h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-[var(--surface)] p-8 lg:p-10 text-right">
              <div className="text-[2.5rem] font-extrabold leading-none text-[var(--border-strong)]">
                {s.n}
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[var(--text-muted)] leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
