import { Sparkles } from 'lucide-react';

/*
 * The product's core idea: you write the request, we do the rest.
 *
 * This now renders the Magic Box the way the APP renders it — the same iris
 * gradient panel, the same wand, the same "اكتب حاجتك وسنتكفّل بالباقي"
 * subtitle as the card in hajat-store-assets/source/slide1.html. The previous
 * version described the feature in a grey bordered box with a placeholder
 * sentence in it, which asked the visitor to imagine the product instead of
 * showing it.
 *
 * NOTE: this section previously carried id="how-it-works", the same id as the
 * HowItWorks section — a duplicate anchor, so the navbar link was ambiguous.
 * It has its own id now.
 */

const suggestions = ['دواء من صيدلية', 'غداء عائلي', 'خضار وفواكه', 'توصيل طرد'];

export default function MagicBoxSection() {
  return (
    <section id="magic-box" className="section field-soft">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Copy */}
          <div className="lg:col-span-5 text-right">
            <span className="eyebrow">الصندوق السحري</span>
            <h2 className="mt-4 text-3xl lg:text-[2.75rem]">اطلب أي شيء، بكلماتك</h2>
            <p className="mt-4 text-[var(--text-muted)] text-lg leading-relaxed">
              لا نلزمك بقائمة محددة. اكتب ما يدور في ذهنك، ويتكفّل كباتن حاجاتي
              بالباقي — تستقبل عروض أسعار من كباتن قريبين، وتختار ما يناسبك.
            </p>
          </div>

          {/* The Magic Box, as the app draws it */}
          <div className="lg:col-span-7">
            <div
              className="rounded-[var(--radius-xl)] overflow-hidden"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            >
              {/* Iris panel — mirrors .mbox in the store slide */}
              <div
                className="relative px-7 py-9 lg:px-10 lg:py-11 text-center overflow-hidden"
                style={{ background: 'linear-gradient(145deg,#7A6BF0,#5B4FD1 55%,#4B3FB0)' }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 300, height: 300, top: -140, insetInlineStart: '50%',
                    transform: 'translateX(-50%)',
                    background: 'radial-gradient(circle,rgba(255,255,255,.22),transparent 70%)',
                  }}
                  aria-hidden="true"
                />
                <span
                  className="relative inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
                  style={{ background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.28)' }}
                >
                  <Sparkles size={26} className="text-white" strokeWidth={1.9} />
                </span>
                <h3 className="relative text-2xl lg:text-[1.75rem] text-white font-extrabold">
                  صندوق حاجاتي السحري
                </h3>
                <p className="relative mt-2 text-[15px]" style={{ color: '#E4E0FF' }}>
                  اكتب حاجتك وسنتكفّل بالباقي
                </p>
              </div>

              {/* The request itself */}
              <div className="bg-[var(--surface)] p-7 lg:p-9 text-right">
                <p className="text-lg lg:text-xl leading-relaxed text-[var(--text)]">
                  «أريد نصف دزينة من الحلويات من متجر ومشروب غازي عائلي»
                </p>

                <div className="mt-7 flex flex-wrap gap-2 justify-end">
                  {suggestions.map((tag) => (
                    <span
                      key={tag}
                      className="text-[13px] font-medium rounded-full px-3.5 py-1.5"
                      style={{ background: 'var(--brand-cont)', color: 'var(--brand-on-soft)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
