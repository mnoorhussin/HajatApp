import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/*
 * Captain recruitment CTA.
 *
 * Was: two blur-3xl colour blobs behind a rounded-3xl shadowed card, holding
 * three more nested rounded-2xl cards, each with a 56px coloured icon circle
 * and a heading but no body text — decoration standing in for content. The
 * three benefits now carry an actual sentence each.
 */

const benefits = [
  { title: 'دخل إضافي مستمر', body: 'اقبل الطلبات القريبة منك، واربح من كل عملية توصيل.' },
  { title: 'ساعات عمل مرنة',  body: 'اعمل حين يناسبك — لا ورديات ولا التزام بدوام.' },
  { title: 'حوافز ومكافآت',   body: 'مكافآت على الأداء والالتزام خلال فترات الذروة.' },
];

export default function JoinUs() {
  return (
    <section id="join-us" className="section bg-[var(--subtle)]">
      <div className="container-custom">
        <div className="border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)] overflow-hidden">

          <div className="p-8 lg:p-12 text-right">
            <p className="text-sm font-bold text-[var(--text-faint)]">كباتن حاجاتي</p>
            <h2 className="mt-3 text-3xl lg:text-[2.75rem] max-w-xl ml-auto">
              طريقك لزيادة دخلك يبدأ من هنا
            </h2>
            <p className="mt-4 text-[var(--text-muted)] text-lg leading-relaxed max-w-2xl ml-auto">
              لديك وسيلة توصيل ووقت فراغ؟ انضم لشركاء التوصيل واستثمر وقتك ومركبتك
              بأكبر قدر من المرونة.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:justify-end">
              <Link to="/captain-application" className="btn btn-brand px-6 group">
                <span>قدّم طلبك الآن</span>
                <ArrowLeft size={17} className="transition-transform group-hover:-translate-x-0.5" />
              </Link>
              <Link to="/captain-guide" className="btn btn-outline px-6">
                دليل عمل الكابتن
              </Link>
            </div>

            <p className="mt-4 text-sm text-[var(--text-faint)]">
              يتطلب حساباً في تطبيق حاجاتي — قدّم بنفس البريد الإلكتروني الذي سجّلت به.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 border-t border-[var(--border)] divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[var(--border)]">
            {benefits.map((b) => (
              <div key={b.title} className="p-7 text-right">
                <h3 className="font-bold text-[15px]">{b.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--text-muted)] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
