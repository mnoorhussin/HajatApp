import { ChevronRight, CheckCircle2, AlertTriangle, ShieldCheck, MapPin, ShoppingBag, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const GuideSection = ({ title, icon: Icon, children, color = "text-[var(--primary)]", bg = "bg-[var(--primary)]/10" }: any) => (
  <div className="bg-[var(--card)] p-6 rounded-3xl border border-[var(--border)] mb-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-4 mb-4">
      <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
        <Icon size={24} className={color} />
      </div>
      <h2 className="text-xl font-bold text-[var(--text)]">{title}</h2>
    </div>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

const GuidePoint = ({ children }: any) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 flex-shrink-0">
      <CheckCircle2 size={18} className="text-emerald-500" />
    </div>
    <p className="text-base text-[var(--text-secondary)] leading-relaxed">{children}</p>
  </div>
);

const GuideWarning = ({ children }: any) => (
  <div className="flex items-start gap-3 bg-red-50 dark:bg-red-500/10 p-4 rounded-2xl border border-red-100 dark:border-red-500/20">
    <div className="mt-0.5 flex-shrink-0">
      <AlertTriangle size={20} className="text-red-500" />
    </div>
    <p className="text-sm text-red-900 dark:text-red-200 font-medium leading-relaxed">{children}</p>
  </div>
);

export default function CaptainGuidePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] font-ar rtl" dir="rtl">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[var(--primary)] font-medium mb-8 hover:underline">
          <ChevronRight size={20} />
          <span>العودة للرئيسية</span>
        </Link>
        
        <div className="mb-10">
          <h1 className="text-4xl font-black text-[var(--text)] mb-4">دليل عمل الكباتن</h1>
          <p className="text-lg text-[var(--text-secondary)]">دليل يوضح طريقة عمل كباتن التوصيل في تطبيق حاجات خلال المرحلة الأولى من التشغيل لضمان تقديم أفضل تجربة للعملاء.</p>
        </div>

        <GuideSection 
          title="استقبال الطلب" 
          icon={MapPin}
          color="text-blue-500"
          bg="bg-blue-500/10"
        >
          <GuidePoint>عند ظهور طلب جديد في التطبيق، قم بمراجعة تفاصيل الطلب جيداً.</GuidePoint>
          <GuidePoint>تأكد من موقع المتجر وموقع العميل.</GuidePoint>
          <GuidePoint>راجع تفاصيل المنتجات المطلوبة بدقة.</GuidePoint>
          <GuidePoint>قم بقبول الطلب داخل التطبيق للبدء في تنفيذه.</GuidePoint>
        </GuideSection>

        <GuideSection 
          title="شراء الطلبات من المتجر" 
          icon={ShoppingBag}
          color="text-purple-500"
          bg="bg-purple-500/10"
        >
          <GuidePoint>عند الوصول إلى المتجر، قم بشراء جميع المنتجات المطلوبة بدقة.</GuidePoint>
          <GuidePoint>تأكد من مطابقة الكميات الصحيحة وجودة المنتجات للطلب.</GuidePoint>
          <GuidePoint>في حال عدم توفر منتج، تواصل مع العميل لاقتراح بديل وإذا رفض العميل البديل، قم بإلغاء المنتج من الطلب في التطبيق.</GuidePoint>
          <GuideWarning>يجب الاحتفاظ بالفاتورة الورقية من المتجر لأنك ستحتاجها لاحقاً.</GuideWarning>
        </GuideSection>

        <GuideSection 
          title="تسليم الطلب وتحصيل المبلغ" 
          icon={Banknote}
          color="text-emerald-500"
          bg="bg-emerald-500/10"
        >
          <GuidePoint>قم بتسليم الطلب للعميل مع الفاتورة الورقية الخاصة بالمتجر.</GuidePoint>
          <GuidePoint>قم بتحصيل المبلغ الإجمالي من العميل (قيمة المنتجات + رسوم التوصيل).</GuidePoint>
          <GuidePoint>احتفظ بكامل المبلغ المحصل لنفسك في هذه المرحلة.</GuidePoint>
          <GuideWarning>في حال كان الدفع إلكترونياً، سيتم تحويل المبلغ إلى محفظتك في التطبيق.</GuideWarning>
        </GuideSection>

        <GuideSection 
          title="معالجة العمولة والمدفوعات" 
          icon={ShieldCheck}
          color="text-orange-500"
          bg="bg-orange-500/10"
        >
          <GuidePoint>سيقوم التطبيق تلقائياً بخصم عمولة التطبيق من محفظتك الإلكترونية.</GuidePoint>
          <GuidePoint>إذا كان رصيد محفظتك غير كافٍ، سيتم تسجيل المبلغ كمديونية (رصيد بالسالب).</GuidePoint>
          <GuidePoint>يجب عليك شحن محفظتك بانتظام لتجنب إيقاف حسابك عند تجاوز الحد المسموح للمديونية.</GuidePoint>
          <GuideWarning>عمولة التطبيق ثابتة وتُخصم من رسوم التوصيل فقط، وليس من قيمة المنتجات.</GuideWarning>
        </GuideSection>

        <div className="mt-12 bg-[var(--primary)]/5 border border-[var(--primary)]/20 p-6 rounded-3xl text-center">
          <h3 className="text-xl font-bold text-[var(--text)] mb-2">هل لديك أسئلة إضافية؟</h3>
          <p className="text-[var(--text-secondary)] mb-6">فريق الدعم الفني متواجد دائماً لمساعدتك في أي وقت.</p>
          <Link 
            to="/#faq" 
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-[var(--primary)] text-white font-bold hover:opacity-90 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            تواصل مع الدعم الفني
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
