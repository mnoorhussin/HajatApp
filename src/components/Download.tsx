import { Apple, Play } from 'lucide-react';
import { APP_STORE_URL, PLAY_STORE_URL } from '../utils/appStore';

/*
 * The #download target — the page's closing argument, so it gets the brand
 * field rather than the third plain white band in a row.
 *
 * Both hero and navbar CTAs point here, and on a phone they never arrive —
 * DownloadButton rewrites its href to the visitor's own store. This section is
 * for everyone else: desktop, JS disabled, or a platform we could not read.
 * Showing both links is better than guessing wrong.
 */
export default function Download() {
  return (
    <section id="download" className="field-brand relative overflow-hidden py-20 lg:py-28">
      <div
        className="glow drift"
        style={{ width: 560, height: 560, background: '#8B7BFF', top: -240, insetInlineStart: -120, opacity: 0.5 }}
        aria-hidden="true"
      />
      <div
        className="glow drift-slow"
        style={{ width: 400, height: 400, background: '#FF7D00', bottom: -180, insetInlineEnd: -100, opacity: 0.2 }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 tex-dots text-white opacity-[0.07]" aria-hidden="true" />

      <div className="container-custom relative">
        <div className="text-right max-w-2xl ml-auto on-dark">
          <span className="eyebrow">حمّل التطبيق</span>
          <h2 className="mt-4 text-3xl lg:text-[2.75rem]">حاجاتي متاح الآن</h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--on-brand-muted)' }}>
            متوفر على متجر آبل ومتجر جوجل بلاي. حمّله وابدأ أول طلب لك في دقائق.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:justify-end">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-on-dark px-6 gap-3"
            >
              <Apple size={20} strokeWidth={1.75} />
              <span>App Store</span>
            </a>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-on-dark px-6 gap-3"
            >
              <Play size={18} strokeWidth={1.75} />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
