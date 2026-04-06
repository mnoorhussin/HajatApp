import { Send, Sparkles } from 'lucide-react';

export default function MagicBoxSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[var(--bg)] overflow-hidden relative transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50 -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm">
            <Sparkles size={16} />
            تجربة فريدة
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[var(--text)]">
            المربع السحري: <span className="text-primary">اطلب أي شيء!</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto font-medium">
            لا نلزمك بقائمة مطاعم محددة. اكتب ما يدور في ذهنك، وسنوفره لك.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            {/* Glossy Background Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-400 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-[var(--surface)] border-2 border-[var(--border)] rounded-[2rem] shadow-2xl p-6 md:p-10 transition-colors duration-300">
              <div className="space-y-6">
                <div className="relative">
                  <label className="block text-[var(--text)] font-bold text-xl mb-4 text-right">
ما الذي تحتاجه اليوم؟                     </label>
                  
                  <div className="relative">
                    <textarea
                      readOnly
                      placeholder='مثلاً: "أريد نصف دزينة من الحلويات من متجر ومشروب غازي عائلي"'
                      className="w-full bg-[var(--bg)] border-2 border-[var(--border)] rounded-2xl p-6 text-lg text-right text-[var(--text)] h-40 outline-none transition-all resize-none placeholder-gray-300 dark:placeholder-gray-600 shadow-inner cursor-default"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <button
                    type="button"
                    className="flex-1 w-full bg-primary text-white py-4 rounded-xl font-bold text-xl shadow-lg flex items-center justify-center gap-3 cursor-default"
                  >
                    أرسل الطلب
                    <Send size={24} />
                  </button>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest w-full text-center mb-2">اقتراحات شائعة</span>
                {['دواء صيدلية', 'غداء عائلي', 'مقاضي خضار', 'توصيل طرد'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-[var(--bg)] text-[var(--text)] rounded-full text-sm font-bold border border-[var(--border)] cursor-default transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
