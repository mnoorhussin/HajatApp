import { Download, ArrowLeft, Shield, Zap, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F9FAFB]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6C5CE7]/5 rounded-full blur-3xl -mr-64 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A3E635]/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-right space-y-10 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#6C5CE7]/10 text-[#6C5CE7] rounded-full font-bold text-sm"
            >
              <Zap size={16} className="fill-current" />
              <span>أسرع خدمة توصيل في السودان 🇸🇩</span>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-extrabold text-[#1E2A45] leading-[1.1]"
              >
                أي حاجة...
                <span className="text-[#6C5CE7] block mt-2">حاجات!</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl lg:text-2xl text-[#6B7280] font-medium max-w-xl ml-auto leading-relaxed"
              >
                أكتب طلبك، ونحن في دربك. مهما كانت الحاجة، نحن نجيبها ليك في أسرع وقت وأقل تكلفة.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn btn-primary px-10 py-5 text-xl group">
                <Download size={24} className="group-hover:translate-y-0.5 transition-transform" />
                <span>حمل التطبيق</span>
              </button>
              <Link to="/join" className="btn btn-outline px-10 py-5 text-xl group">
                <span>كن كابتن</span>
                <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-10 flex flex-wrap items-center gap-8 text-[#6B7280] font-bold"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#A3E635]/20 rounded-lg text-[#1E2A45]">
                  <Zap size={18} />
                </div>
                <span>توصيل فوري</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#A3E635]/20 rounded-lg text-[#1E2A45]">
                  <CreditCard size={18} />
                </div>
                <span>دفع عند الاستلام</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#A3E635]/20 rounded-lg text-[#1E2A45]">
                  <Shield size={18} />
                </div>
                <span>دعم 24/7</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Content (Mockup) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[700px] flex items-center justify-center order-1 lg:order-2"
          >
             <div className="relative w-full max-w-sm mx-auto">
                {/* Clean Phone Mockup */}
                <div className="relative w-full aspect-[9/18.5] bg-[#1E2A45] rounded-[3.5rem] p-3 shadow-2xl overflow-hidden border-[10px] border-[#1E2A45]">
                   {/* Android Punch-hole Camera */}
                   <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1E2A45] rounded-full z-20"></div>
                   
                   {/* Screen Content */}
                   <div className="w-full h-full bg-[#f8f9ff] rounded-[2.8rem] overflow-hidden flex flex-col relative">
                      {/* App Header */}
                      <div className="bg-[#6C5CE7] px-6 pt-12 pb-8 text-white">
                        <div className="text-xs opacity-80 mb-1">مرحباً بك 👋</div>
                        <div className="text-xl font-extrabold leading-tight">جاهزين نوصل ليك<br/>أي شي في أي وقت</div>
                      </div>
                      
                      {/* Magic Box Feature */}
                      <div className="px-5 -mt-6 relative z-10">
                        <div className="bg-white rounded-3xl shadow-lg border border-[#F3F4F6] p-5">
                          <label className="block text-[#1E2A45] font-extrabold text-sm mb-3">حاجتك شنو الليلة؟</label>
                          <div className="bg-[#f8f9ff] rounded-2xl p-4 min-h-[100px] text-xs text-[#6B7280] border border-dashed border-[#6C5CE7]/20 flex flex-col justify-between">
                            <p>اكتب طلبك هنا... مثلاً: "عايز 2 شاورما من مطعم البركة"</p>
                            <div className="flex justify-end">
                              <div className="w-10 h-10 bg-[#6C5CE7] rounded-full flex items-center justify-center shadow-lg shadow-[#6C5CE7]/30">
                                <span className="text-white text-lg">🎤</span>
                              </div>
                            </div>
                          </div>
                          <button className="w-full mt-4 btn btn-primary py-3 text-sm rounded-2xl">
                            أرسل الطلب الآن
                          </button>
                        </div>
                      </div>

                      {/* Quick Categories */}
                      <div className="p-5 space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-extrabold text-sm text-[#1E2A45]">التصنيفات</span>
                          <span className="text-[#6C5CE7] text-xs font-bold">عرض الكل</span>
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                          {[
                            { icon: '🍔', label: 'مطعم' },
                            { icon: '💊', label: 'صيدلية' },
                            { icon: '🛒', label: 'دكان' },
                            { icon: '📦', label: 'مرسال' }
                          ].map((cat, i) => (
                            <div key={i} className="bg-white rounded-2xl p-2 text-center shadow-sm border border-[#F3F4F6]">
                              <div className="text-2xl mb-1">{cat.icon}</div>
                              <div className="text-[10px] font-bold text-[#1E2A45]">{cat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Gesture Bar */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-[#1E2A45]/10 rounded-full"></div>
                   </div>
                </div>
                
                {/* Dynamic Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-[#F3F4F6]"
                >
                  <div className="w-10 h-10 bg-[#A3E635]/20 rounded-full flex items-center justify-center text-xl">🍔</div>
                  <div>
                    <div className="text-xs font-extrabold text-[#1E2A45]">تم استلام الطلب</div>
                    <div className="text-[10px] text-[#6B7280]">مطعم البركة - 12:45م</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-12 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-[#F3F4F6]"
                >
                  <div className="w-10 h-10 bg-[#6C5CE7]/20 rounded-full flex items-center justify-center text-xl">🛵</div>
                  <div>
                    <div className="text-xs font-extrabold text-[#1E2A45]">الكابتن في الطريق</div>
                    <div className="text-[10px] text-[#6B7280]">توصيل خلال 15 دقيقة</div>
                  </div>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
