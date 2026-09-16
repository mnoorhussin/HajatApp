import { Link } from 'react-router-dom';
import { ArrowLeft, Wallet, Clock, Trophy } from 'lucide-react';

/*
 * Captain recruitment.
 *
 * Lime, not iris. Everywhere else on this site iris means "you are ordering";
 * lime means "you are earning" — it is the colour of the كابتن toggle in the
 * app's own header and of the captain slide in the store listing. A visitor
 * who has scrolled this far has been reading iris for four sections, so the
 * switch is what signals that this block is addressed to someone else.
 */

const benefits = [
  { icon: Wallet, title: 'دخل إضافي مستمر', body: 'اقبل الطلبات القريبة منك، واربح من كل عملية توصيل.' },
  { icon: Clock,  title: 'ساعات عمل مرنة',  body: 'اعمل حين يناسبك — لا ورديات ولا التزام بدوام.' },
  { icon: Trophy, title: 'حوافز ومكافآت',   body: 'مكافآت على الأداء والالتزام خلال فترات الذروة.' },
];

export default function JoinUs() {
  return (
    <section id="join-us" className="section bg-[var(--subtle)]">
      <div className="container-custom">
        <div
          className="rounded-[var(--radius-xl)] overflow-hidden bg-[var(--surface)] border border-[var(--border)]"
          style={{ boxShadow: 'var(--shadow-md)' }}
        >
          {/* Lime header band */}
          <div
            className="relative overflow-hidden p-8 lg:p-12 text-right"
            style={{ background: 'linear-gradient(135deg,#C6F26B 0%,#A3E635 55%,#8DD11F 100%)' }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: 420, height: 420, top: -220, insetInlineStart: -80,
                background: 'radial-gradient(circle,rgba(255,255,255,.45),transparent 70%)',
              }}
              aria-hidden="true"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold" style={{ color: '#3D5C07' }}>
                <span className="inline-block w-[7px] h-[7px] rounded-full" style={{ background: '#2A3D07' }} />
                كباتن حاجاتي
              </span>

              <h2 className="mt-4 text-3xl lg:text-[2.75rem] max-w-xl ml-auto" style={{ color: '#1B2A06' }}>
                طريقك لزيادة دخلك يبدأ من هنا
              </h2>
              <p className="mt-4 text-lg leading-relaxed max-w-2xl ml-auto" style={{ color: '#3D5C07' }}>
                لديك وسيلة توصيل ووقت فراغ؟ انضم لشركاء التوصيل واستثمر وقتك ومركبتك
                بأكبر قدر من المرونة.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:justify-end">
                <Link
                  to="/captain-application"
                  className="btn px-6 group text-white"
                  style={{ background: '#1B2A06' }}
                >
                  <span>قدّم طلبك الآن</span>
                  <ArrowLeft size={17} className="transition-transform group-hover:-translate-x-0.5" />
                </Link>
                <Link
                  to="/captain-guide"
                  className="btn px-6 border"
                  style={{ borderColor: 'rgba(27,42,6,.35)', color: '#1B2A06' }}
                >
                  دليل عمل الكابتن
                </Link>
              </div>

              <p className="mt-4 text-sm" style={{ color: '#4A6B12' }}>
                يتطلب حساباً في تطبيق حاجاتي — قدّم بنفس البريد الإلكتروني الذي سجّلت به.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[var(--border)]">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-7 text-right">
                <span className="chip chip-lime ml-auto">
                  <Icon size={20} strokeWidth={1.9} />
                </span>
                <h3 className="mt-4 font-bold text-[15px]">{title}</h3>
                <p className="mt-1.5 text-sm text-[var(--text-muted)] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
