/*
 * The product's core idea, shown as a still of the actual input.
 *
 * Was: a "تجربة فريدة" sparkle pill, two blurred colour blobs, a
 * gradient-to-orange glow ring behind a rounded-[2rem] card with shadow-2xl,
 * an inset-shadowed textarea and a row of rounded-full suggestion pills.
 *
 * NOTE: this section previously carried id="how-it-works", the same id as the
 * HowItWorks section above it — a duplicate anchor, so the navbar link was
 * ambiguous. It has its own id now.
 */

const suggestions = ['دواء من صيدلية', 'غداء عائلي', 'خضار وفواكه', 'توصيل طرد'];

export default function MagicBoxSection() {
  return (
    <section id="magic-box" className="section">
      <div className="container-custom">
        <div className="text-right max-w-2xl ml-auto">
          <p className="text-sm font-bold text-[var(--text-faint)]">المربع السحري</p>
          <h2 className="mt-3 text-3xl lg:text-[2.75rem]">اطلب أي شيء، بكلماتك</h2>
          <p className="mt-4 text-[var(--text-muted)] text-lg leading-relaxed">
            لا نلزمك بقائمة محددة. اكتب ما يدور في ذهنك، ويتكفّل كباتن حاجاتي بالباقي.
          </p>
        </div>

        <div className="mt-12 max-w-2xl ml-auto">
          <div className="border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)] overflow-hidden">
            {/* Field */}
            <div className="p-6 lg:p-8">
              <label className="block text-right text-sm font-bold text-[var(--text-muted)]">
                ما الذي تحتاجه اليوم؟
              </label>
              <p
                className="mt-4 text-right text-lg lg:text-xl leading-relaxed text-[var(--text-faint)]"
                aria-hidden="true"
              >
                «أريد نصف دزينة من الحلويات من متجر ومشروب غازي عائلي»
              </p>
            </div>

            {/* Suggestions sit below a rule rather than floating as pills */}
            <div className="border-t border-[var(--border)] px-6 lg:px-8 py-5">
              <div className="flex flex-wrap gap-2 justify-end">
                {suggestions.map((tag) => (
                  <span
                    key={tag}
                    className="text-[13px] text-[var(--text-muted)] border border-[var(--border)] rounded-[var(--radius)] px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-[var(--text-faint)] text-right">
            تستقبل عروض أسعار من كباتن قريبين، وتختار ما يناسبك.
          </p>
        </div>
      </div>
    </section>
  );
}
