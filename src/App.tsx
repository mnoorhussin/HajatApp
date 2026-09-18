import { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ── Above the fold: loaded eagerly ─────────────────────────────────────────
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// ── Below the fold: lazy loaded only when needed ────────────────────────────
const Services       = lazy(() => import('./components/Services'));
const HowItWorks     = lazy(() => import('./components/HowItWorks'));
const MagicBoxSection = lazy(() => import('./components/MagicBoxSection'));
const AppScreens     = lazy(() => import('./components/AppScreens'));
const JoinUs         = lazy(() => import('./components/JoinUs'));
const FAQ            = lazy(() => import('./components/FAQ'));
const Download       = lazy(() => import('./components/Download'));
const Footer         = lazy(() => import('./components/Footer'));
const PolicyPage     = lazy(() => import('./components/PolicyPage'));
const CaptainGuidePage = lazy(() => import('./components/CaptainGuidePage'));
const CaptainApplicationPage = lazy(() => import('./components/CaptainApplicationPage'));
const DeleteAccountPage = lazy(() => import('./components/DeleteAccountPage'));
const ChatWidget       = lazy(() => import('./components/ChatWidget'));

import ScrollToTop from './utils/ScrollToTop';

/**
 * Hold a mount until the browser is idle, or until the visitor first interacts.
 *
 * React.lazy starts fetching a chunk the moment its element renders, and every
 * <Suspense> section on this page renders immediately — so `lazy` here splits
 * the bundle but does not actually defer it. That is fine for the sections,
 * which the visitor scrolls to, but the chat widget is a floating button nobody
 * needs at first paint, and it is the only remaining importer of framer-motion.
 * Gating it keeps both chunks off the critical path.
 */
function useIdleMount(timeout = 2500) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const go = () => setReady(true);
    const supportsIdle = typeof window.requestIdleCallback === 'function';
    const handle = supportsIdle
      ? window.requestIdleCallback(go, { timeout })
      : window.setTimeout(go, timeout);

    // An early tap shouldn't have to wait out the idle callback.
    window.addEventListener('pointerdown', go, { once: true, passive: true });
    window.addEventListener('keydown', go, { once: true });

    return () => {
      if (supportsIdle) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
      window.removeEventListener('pointerdown', go);
      window.removeEventListener('keydown', go);
    };
  }, [timeout]);

  return ready;
}

// Minimal skeleton shown while below-the-fold sections stream in
function SectionSkeleton() {
  return <div className="w-full h-24 bg-[var(--border)] animate-pulse rounded-2xl my-4 mx-auto max-w-7xl" />;
}

function LandingPage() {
  const chatReady = useIdleMount();

  return (
    <div className="min-h-screen bg-[var(--bg)] font-ar rtl transition-colors duration-300" dir="rtl">
      <Navbar />
      <main>
        {/* Hero renders instantly — no Suspense wrapper */}
        <Hero />

        {/* All sections below the fold are lazy */}
        <Suspense fallback={<SectionSkeleton />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <AppScreens />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <MagicBoxSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <JoinUs />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Download />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      {chatReady && (
        <Suspense fallback={null}>
          <ChatWidget />
        </Suspense>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-ar">جاري التحميل...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/policies/:slug" element={<PolicyPage />} />
          <Route path="/captain-guide" element={<CaptainGuidePage />} />
          <Route path="/captain-application" element={<CaptainApplicationPage />} />
          <Route path="/delete-account" element={<DeleteAccountPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
