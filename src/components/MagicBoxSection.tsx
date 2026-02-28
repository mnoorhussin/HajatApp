import { Mic, Send, Sparkles, MessageSquare } from 'lucide-react';

export default function MagicBoxSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50 -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm">
            <Sparkles size={16} />
            تجربة فريدة
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-secondary">
            المربع السحري: <span className="text-primary">أطلب أي شي!</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            ما بنحصرك في قائمة مطاعم معينة. اكتب اللي في بالك، وصوتك مسموع.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            {/* Glossy Background Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-400 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white border-2 border-gray-100 rounded-[2rem] shadow-2xl p-6 md:p-10">
              <div className="space-y-6">
                <div className="relative">
                  <label className="block text-secondary font-bold text-xl mb-4 text-right">
حاجتك شنو الليلة؟                     </label>
                  
                  <div className="relative">
                    <textarea
                      readOnly
                      placeholder='مثلاً: "عايز نص دستة باسطة من بابا غنوج وواحد بيبسي عائلي"'
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-6 text-lg text-right text-secondary h-40 outline-none transition-all resize-none placeholder-gray-300 shadow-inner cursor-default"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center gap-2 opacity-40">
                      <MessageSquare size={32} className="text-primary italic" />
                      <span className="text-sm font-medium">نحن بنسمعك...</span>
                    </div>
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
                  
                  <button
                    type="button"
                    className="w-full md:w-auto aspect-square bg-secondary text-white p-5 rounded-xl font-bold flex items-center justify-center relative overflow-hidden cursor-default"
                  >
                    <Mic size={28} className="animate-pulse-slow" />
                    <span className="md:hidden mr-3">سجل طلبك بصوتك</span>
                  </button>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest w-full text-center mb-2">اقتراحات شائعة</span>
                {['دواء صيدلية', 'غداء عائلي', 'مقاضي خضار', 'توصيل طرد'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-bold border border-gray-100 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 space-y-2">
              <div className="text-3xl">📝</div>
              <h4 className="font-bold text-secondary">أكتب أو صوّر</h4>
              <p className="text-sm text-gray-500">أكتب طلبك أو حتى صوّر الروفتشة أو القائمة</p>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-3xl">🤝</div>
              <h4 className="font-bold text-secondary">تفاوض عادل</h4>
              <p className="text-sm text-gray-500">حيصلك عرض سعر من الكابتن، وتقدر تقبله أو تطلب غيره</p>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-3xl">🚀</div>
              <h4 className="font-bold text-secondary">توصيل صاروخي</h4>
              <p className="text-sm text-gray-500">بمجرد الاتفاق، الكابتن حيكون في طريقه ليك</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
