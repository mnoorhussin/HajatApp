import { Apple, Play } from 'lucide-react';
import { APP_STORE_URL, PLAY_STORE_URL } from '../utils/appStore';

/*
 * The #download target.
 *
 * Both hero and navbar CTAs point here, and on a phone they never arrive —
 * DownloadButton rewrites its href to the visitor's own store. This section is
 * for everyone else: desktop, JS disabled, or a platform we could not read.
 * Showing both links is better than guessing wrong.
 */
export default function Download() {
  return (
    <section id="download" className="section">
      <div className="container-custom">
        <div className="text-right max-w-2xl ml-auto">
          <p className="text-sm font-bold text-[var(--text-faint)]">حمل التطبيق</p>
          <h2 className="mt-3 text-3xl lg:text-[2.75rem]">حاجاتي متاح الآن</h2>
          <p className="mt-4 text-[var(--text-muted)] text-lg leading-relaxed">
            متوفر على متجر آبل ومتجر جوجل بلاي. حمّله وابدأ أول طلب لك في دقائق.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline px-6 gap-3"
          >
            <Apple size={20} strokeWidth={1.75} />
            <span>App Store</span>
          </a>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline px-6 gap-3"
          >
            <Play size={18} strokeWidth={1.75} />
            <span>Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
}
