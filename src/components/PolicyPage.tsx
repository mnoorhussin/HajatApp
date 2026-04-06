import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { policiesMap } from '../data/policies';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowRight } from 'lucide-react';

export default function PolicyPage() {
  const { slug } = useParams<{ slug: string }>();
  const policy = slug ? policiesMap[slug] : undefined;

  if (!policy) {
    return (
      <div className="min-h-screen bg-[var(--bg)] font-ar flex flex-col transition-colors duration-300" dir="rtl">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold text-[var(--text)] mb-4">الصفحة غير موجودة</h1>
          <p className="text-[var(--text-muted)] mb-8">عذراً، السياسة أو الاتفاقية التي تبحث عنها غير موجودة.</p>
          <Link to="/" className="btn btn-primary px-6 py-3">
            <ArrowRight className="inline-block ml-2" size={20} />
            العودة للرئيسية
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] font-ar flex flex-col transition-colors duration-300" dir="rtl">
      <Navbar />
      
      {/* Header Banner */}
      <div className="bg-gradient-to-l from-primary to-orange-600 text-white py-16 text-center mt-[72px]">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{policy.title}</h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto opacity-90">
            تطبيق حاجات - كل اللي تحتاجه في مكان واحد
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 container-custom py-16">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
          <article className="prose prose-lg dark:prose-invert max-w-none text-[var(--text)]
            prose-headings:text-[var(--text)] prose-headings:font-bold 
            prose-a:text-primary hover:prose-a:text-orange-600 
            prose-strong:text-[var(--text)] prose-strong:font-bold
            prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary">
            <ReactMarkdown>{policy.content}</ReactMarkdown>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
