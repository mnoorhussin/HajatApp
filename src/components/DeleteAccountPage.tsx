import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowRight, Mail } from 'lucide-react';

export default function DeleteAccountPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--bg)] font-ar flex flex-col transition-colors duration-300" dir="rtl">
      <Navbar />

      {/* Header Banner */}
      <div className="bg-gradient-to-l from-primary to-orange-600 text-white py-16 text-center mt-[72px]">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">حذف الحساب</h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto opacity-90">
            حماية بيانات المستخدمين أولويتنا
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 container-custom py-16">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">

          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">خيارات إدارة حسابك</h2>
            <p className="text-[var(--text-muted)] mb-8 text-lg leading-relaxed">
              لديك خياران لإدارة حسابك في تطبيق حاجات:
            </p>

            {/* Option 1: Deactivate */}
            <div className="mb-8 p-6 border-2 border-orange-200 rounded-2xl bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 font-bold">١</div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text)] mb-2">إيقاف الحساب مؤقتاً</h3>
                  <p className="text-[var(--text-muted)] mb-3">
                    حسابك سيكون مخفياً عن المنصة ولن تستقبل طلبات جديدة. يمكنك تفعيل الحساب مرة أخرى في أي وقت.
                  </p>
                  <p className="text-sm text-[var(--text-muted)] font-medium">
                    ✓ جميع بيانات حسابك محفوظة بأمان
                  </p>
                </div>
              </div>
            </div>

            {/* Option 2: Permanent Delete */}
            <div className="mb-8 p-6 border-2 border-red-200 rounded-2xl bg-red-50 dark:bg-red-900/20 dark:border-red-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0 font-bold">٢</div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text)] mb-2">حذف نهائي للحساب</h3>
                  <p className="text-[var(--text-muted)] mb-3">
                    سيتم حذف جميع بيانات حسابك الشخصية على الفور. هذا الخيار دائم ولا يمكن التراجع عنه.
                  </p>
                  <p className="text-sm text-[var(--text-muted)] font-medium">
                    ⚠ لا يمكن استرجاع البيانات بعد الحذف
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Delete Section */}
          <section className="mb-12 border-t border-[var(--border)] pt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">كيفية حذف الحساب</h2>

            <div className="bg-[var(--bg)] p-8 rounded-2xl border border-[var(--border)]">
              <ol className="space-y-5">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">1</span>
                  <div>
                    <p className="font-bold text-[var(--text)]">افتح تطبيق حاجات</p>
                    <p className="text-sm text-[var(--text-muted)]">شغّل التطبيق على هاتفك</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">2</span>
                  <div>
                    <p className="font-bold text-[var(--text)]">اذهب إلى حسابي</p>
                    <p className="text-sm text-[var(--text-muted)]">اضغط على أيقونة الحساب في الأسفل</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">3</span>
                  <div>
                    <p className="font-bold text-[var(--text)]">اختر تعديل الملف الشخصي</p>
                    <p className="text-sm text-[var(--text-muted)]">ابحث عن خيار التعديل في الأعلى</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">4</span>
                  <div>
                    <p className="font-bold text-[var(--text)]">اختر خيار الحساب</p>
                    <p className="text-sm text-[var(--text-muted)]">ستجد خيارات الإيقاف المؤقت أو الحذف النهائي</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">5</span>
                  <div>
                    <p className="font-bold text-[var(--text)]">اتبع التعليمات</p>
                    <p className="text-sm text-[var(--text-muted)]">أكد اختيارك واتبع الخطوات النهائية</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* What Gets Deleted Section */}
          <section className="mb-12 border-t border-[var(--border)] pt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">ماذا يحدث عند الحذف</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Deleted */}
              <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200 dark:border-red-800">
                <h3 className="font-bold text-lg text-red-600 dark:text-red-400 mb-4">🗑 يتم حذفه:</h3>
                <ul className="space-y-3 text-[var(--text-muted)]">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>بريدك الإلكتروني</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>رقم هاتفك</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>اسمك وعنوانك</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>رسائلك النصية والصوتية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>صورتك الشخصية</span>
                  </li>
                </ul>
              </div>

              {/* Retained */}
              <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-4">📋 يتم الاحتفاظ به:</h3>
                <ul className="space-y-3 text-[var(--text-muted)]">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>سجل عملياتك (بدون بيانات شخصية)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>عمولاتك وأرباحك (للأسباب الضريبية)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>سجلات الدفع (مطلوب قانوناً)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>الامتثال بمتطلبات الأمان</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                <span className="font-bold">⏱ ملاحظة مهمة:</span> يمكنك الوصول إلى تفاصيل أرباحك لمدة 30 يوماً بعد حذف الحساب بالتواصل معنا.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12 border-t border-[var(--border)] pt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">أسئلة شائعة</h2>

            <div className="space-y-4">
              <details className="p-4 bg-[var(--bg)] rounded-lg border border-[var(--border)] cursor-pointer hover:border-primary transition-colors">
                <summary className="font-bold text-[var(--text)] flex justify-between items-center">
                  هل يمكنني استعادة حسابي بعد الحذف النهائي؟
                  <span>►</span>
                </summary>
                <p className="mt-3 text-[var(--text-muted)] text-sm">
                  لا، الحذف النهائي دائم ولا يمكن التراجع عنه. لكن يمكنك إنشاء حساب جديد ببريد إلكتروني مختلف.
                </p>
              </details>

              <details className="p-4 bg-[var(--bg)] rounded-lg border border-[var(--border)] cursor-pointer hover:border-primary transition-colors">
                <summary className="font-bold text-[var(--text)] flex justify-between items-center">
                  ماذا لو كان لدي عمليات مجهزة أو عمولات معلقة؟
                  <span>►</span>
                </summary>
                <p className="mt-3 text-[var(--text-muted)] text-sm">
                  سجلات عملياتك وعمولاتك ستبقى في النظام (بدون بيانات شخصية) للأسباب القانونية والضريبية. يمكنك طلب تفاصيلك قبل الحذف عن طريق التواصل معنا.
                </p>
              </details>

              <details className="p-4 bg-[var(--bg)] rounded-lg border border-[var(--border)] cursor-pointer hover:border-primary transition-colors">
                <summary className="font-bold text-[var(--text)] flex justify-between items-center">
                  كيف أحصل على نسخة من بياناتي قبل الحذف؟
                  <span>►</span>
                </summary>
                <p className="mt-3 text-[var(--text-muted)] text-sm">
                  تواصل معنا على البريد أدناه وسنرسل لك نسخة من جميع بيانات حسابك الشخصية في غضون 5 أيام عمل.
                </p>
              </details>

              <details className="p-4 bg-[var(--bg)] rounded-lg border border-[var(--border)] cursor-pointer hover:border-primary transition-colors">
                <summary className="font-bold text-[var(--text)] flex justify-between items-center">
                  هل حذفي سيؤثر على تقييمات الكباتن الآخرين؟
                  <span>►</span>
                </summary>
                <p className="mt-3 text-[var(--text-muted)] text-sm">
                  التقييمات ستبقى لأسباب أمان واحتيال، لكن لن تكون مرتبطة بحسابك أو بيانات شخصية منك.
                </p>
              </details>
            </div>
          </section>

          {/* Contact Section */}
          <section className="border-t border-[var(--border)] pt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">هل لديك استفسارات؟</h2>
            <p className="text-[var(--text-muted)] mb-6">
              إذا كان لديك أسئلة حول حذف حسابك أو تريد طلب نسخة من بيانات حسابك، تواصل معنا مباشرة:
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@hajatapp.com"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors"
              >
                <Mail size={20} />
                contact@hajatapp.com
              </a>
              <p className="flex items-center text-[var(--text-muted)] text-sm">
                نرد على جميع الاستفسارات في غضون 24 ساعة عمل
              </p>
            </div>
          </section>

          {/* Back Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-3 bg-[var(--border)] text-[var(--text)] rounded-lg font-bold hover:bg-[var(--border)]/80 transition-colors"
            >
              <ArrowRight size={20} />
              العودة
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
