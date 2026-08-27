import { useState } from 'react';
import { Plus } from 'lucide-react';

/*
 * Accordion as hairline rows.
 *
 * Was: four rounded-3xl bordered cards that turned brand-purple with a tinted
 * background when open, plus a Framer Motion height animation per row. Rows are
 * now separated by a single rule and the open state is signalled by the icon
 * rotating — no colour change, no card.
 *
 * Also adds id="faq"; the navbar links to /#faq and nothing answered to it.
 */

const faqs = [
  {
    question: 'كيف يمكنني الطلب من تطبيق حاجاتي؟',
    answer: 'الأمر بسيط جداً! قم بتحميل التطبيق، واكتب طلبك في "المربع السحري"، وحدد موقعك، وسيتكفل كباتن التوصيل بالباقي.',
  },
  {
    question: 'ما هي المناطق التي يغطيها التطبيق؟',
    answer: 'نحن نوسع نطاق تغطيتنا باستمرار. حالياً نغطي معظم مناطق الخرطوم - كسلا - ود مدني - القضارف - عطبرة - بورتسودان والمدن الرئيسية، ونهدف للوصول لكل شبر في السودان.',
  },
  {
    question: 'هل توجد طرق دفع غير الكاش؟',
    answer: 'نعم، يدعم كابتن حاجاتي الدفع نقداً عند الاستلام بالإضافة إلى التحويل البنكي عبر التطبيقات المصرفية المتاحة.',
  },
  {
    question: 'كيف أصبح كابتن توصيل في حاجاتي؟',
    answer: 'إذا كانت لديك وسيلة نقل (توك توك، دراجة نارية، سيارة) وترغب في زيادة دخلك، يمكنك التسجيل عبر أيقونة "انضم ككابتن توصيل" في التطبيق.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-custom">
        <div className="text-right max-w-2xl ml-auto">
          <p className="text-sm font-bold text-[var(--text-faint)]">الأسئلة الشائعة</p>
          <h2 className="mt-3 text-3xl lg:text-[2.75rem]">كل ما تود معرفته</h2>
        </div>

        <div className="mt-12 max-w-3xl ml-auto border-t border-[var(--border)]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[var(--border)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full py-6 flex items-center justify-between gap-6 text-right group"
                >
                  <span className="text-[17px] font-bold text-[var(--text)]">
                    {faq.question}
                  </span>
                  <Plus
                    size={18}
                    strokeWidth={2}
                    className={`shrink-0 text-[var(--text-muted)] transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : 'group-hover:text-[var(--text)]'
                    }`}
                  />
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-200 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-right text-[var(--text-muted)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
