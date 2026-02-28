import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative pt-24 pb-16 lg:pt-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-right space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-primary rounded-full font-medium text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Your City, Delivered 🇸🇩
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-secondary leading-tight">
              أي حاجة...
              <span className="text-primary block mt-2">حاجات!</span>
            </h1>
            
            <p className="text-xl text-gray-500 font-bold">
              أكتب طلبك، ونحن في دربك.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl ml-auto">
              ما تشيل هم الزحمة ولا الحر. مهما كانت الحاجة، نحن نجيبها ليك.
              صيدلية، مطعم، بقالة، أو أي شي تاني.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                <Download size={20} />
                حمل التطبيق
              </button>
              
              <Link to="/join" className="flex items-center justify-center gap-2 bg-white text-secondary border-2 border-gray-100 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all">
                  كن طياراً         
                <ArrowLeft size={20} />
              </Link>
            </div>

            <div className="pt-8 flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                توصيل فوري
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                دفع عند الاستلام
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                دعم 24/7
              </div>
            </div>
          </div>

          {/* Visual Content (Mockup Placeholder) */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
             <div className="relative w-full max-w-md mx-auto aspect-square lg:aspect-auto flex items-center justify-center">
                {/* Simplified Phone Mockup using CSS/Divs for now */}
                <div className="relative w-72 h-[550px] bg-secondary rounded-[3rem] border-[8px] border-secondary shadow-2xl overflow-hidden z-10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                   {/* Android Punch-hole Camera */}
                   <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-secondary rounded-full z-20"></div>
                   
                   {/* Screen Content */}
                   <div className="w-full h-full bg-white flex flex-col relative">
                      {/* App Header - Compact */}
                      <div className="bg-gradient-to-bl from-primary to-orange-600 px-5 pt-10 pb-6 text-white">
                        <div className="text-xs opacity-70">مرحباً بك 👋</div>
                        <div className="text-lg font-bold">أي حاجة... حاجات!</div>
                      </div>
                      
                      {/* Magic Box Section - Top 40% */}
                      <div className="p-4 bg-gray-50 flex-1 rounded-t-3xl -mt-4 relative z-10 flex flex-col">
                        {/* The Magic Box */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 mb-4">
                          <p className="text-secondary font-bold text-sm mb-2"> حاجتك  شنو الليلة؟ </p>
                          <div className="bg-gray-50 rounded-xl p-3 min-h-[60px] text-xs text-gray-400 border border-dashed border-gray-200">
                            اكتب طلبك هنا... مثلاً: "عايز 2 شاورما من مطعم البركة"
                          </div>
                          {/* Input Actions */}
                          <div className="flex items-center justify-between mt-3">
                            <button className="bg-primary text-white text-xs px-4 py-2 rounded-lg font-bold">
                              أرسل الطلب
                            </button>
                            {/* Mic Button - Killer Feature */}
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 animate-pulse">
                              <span className="text-white text-lg">🎤</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick Category Tiles */}
                        <div className="grid grid-cols-4 gap-2">
                          <div className="bg-white rounded-xl p-2 text-center shadow-sm border border-gray-50">
                            <div className="text-2xl mb-1">🍔</div>
                            <div className="text-[10px] font-bold text-secondary">مطعم</div>
                          </div>
                          <div className="bg-white rounded-xl p-2 text-center shadow-sm border border-gray-50">
                            <div className="text-2xl mb-1">💊</div>
                            <div className="text-[10px] font-bold text-secondary">صيدلية</div>
                          </div>
                          <div className="bg-white rounded-xl p-2 text-center shadow-sm border border-gray-50">
                            <div className="text-2xl mb-1">🛒</div>
                            <div className="text-[10px] font-bold text-secondary">دكان</div>
                          </div>
                          <div className="bg-white rounded-xl p-2 text-center shadow-sm border border-gray-50">
                            <div className="text-2xl mb-1">📦</div>
                            <div className="text-[10px] font-bold text-secondary">مرسال</div>
                          </div>
                        </div>
                      </div>

                      {/* Android Gesture Bar */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full mix-blend-multiply opacity-50 z-20"></div>
                   </div>
                </div>
                
                {/* Decorative Elements behind phone */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-primary/10 rounded-full blur-3xl -z-10"></div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
