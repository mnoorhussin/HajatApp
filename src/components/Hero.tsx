import { Download, ArrowLeft, Shield, Zap, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import heroDelivery from '../assets/hero-delivery.png';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--bg)]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6C5CE7]/5 rounded-full blur-3xl -mr-64 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A3E635]/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-right space-y-10 order-1 lg:order-1">
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
                className="text-5xl lg:text-7xl font-extrabold leading-[1.1]"
              >
                كل ما تحتاجه...
                <span className="text-[#6C5CE7] block mt-2">في تطبيق حاجات!</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl lg:text-2xl text-[var(--text-muted)] font-medium max-w-xl ml-auto leading-relaxed"
              >
                اطلب ما تريد، وسنكون في طريقنا إليك. مهما كانت احتياجاتك، سنوفرها لك في أسرع وقت وبأقل تكلفة.
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
              <a href="#join-us" className="btn btn-outline px-10 py-5 text-xl group">
                <span>انضم ككابتن توصيل</span>
                <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-10 flex flex-wrap items-center gap-8 text-[var(--text-muted)] font-bold"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#A3E635]/20 rounded-lg text-[var(--text)]">
                  <Zap size={18} />
                </div>
                <span>توصيل فوري</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#A3E635]/20 rounded-lg text-[var(--text)]">
                  <CreditCard size={18} />
                </div>
                <span>دفع عند الاستلام</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#A3E635]/20 rounded-lg text-[var(--text)]">
                  <Shield size={18} />
                </div>
                <span>دعم 24/7</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Content (Mockup) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center order-2 lg:order-2 mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
              {/* Main 3D Illustration */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [-1, 1, -1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-20"
              >
                <img 
                  src={heroDelivery} 
                  alt="Hajat Delivery Captain" 
                  className="w-full h-auto drop-shadow-[0_35px_35px_rgba(108,92,231,0.25)]"
                />
              </motion.div>

              {/* Decorative Background Glow for Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#6C5CE7]/10 rounded-full blur-[100px] -z-10"></div>
              
              {/* Dynamic Floating Elements positioned around the 3D visual */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-[20%] bg-[var(--surface)] p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-[var(--border)] z-30 transform hover:scale-105 transition-transform"
              >
                <div className="w-10 h-10 bg-[#A3E635]/20 rounded-full flex items-center justify-center text-xl">🍔</div>
                <div>
                  <div className="text-xs font-extrabold text-[var(--text)]">تم استلام الطلب</div>
                  <div className="text-[10px] text-[var(--text-muted)]">مطعم البركة - 12:45م</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-[25%] bg-[var(--surface)] p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-[var(--border)] z-30 transform hover:scale-105 transition-transform"
              >
                <div className="w-10 h-10 bg-[#6C5CE7]/20 rounded-full flex items-center justify-center text-xl">🛵</div>
                <div>
                  <div className="text-xs font-extrabold text-[var(--text)]">الكابتن في الطريق</div>
                  <div className="text-[10px] text-[var(--text-muted)]">توصيل خلال 15 دقيقة</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-1/4 -bottom-4 bg-white dark:bg-[#1E2A45] px-4 py-2 rounded-full shadow-lg border border-[var(--border)] z-30 flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-[#A3E635] rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold text-[var(--text)]">أكثر من 180 كابتن نشط حالياً</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

