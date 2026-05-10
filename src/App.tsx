import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ── Above the fold: loaded eagerly ─────────────────────────────────────────
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// ── Below the fold: lazy loaded only when needed ────────────────────────────
const Services       = lazy(() => import('./components/Services'));
const HowItWorks     = lazy(() => import('./components/HowItWorks'));
const MagicBoxSection = lazy(() => import('./components/MagicBoxSection'));
const JoinUs         = lazy(() => import('./components/JoinUs'));
const FAQ            = lazy(() => import('./components/FAQ'));
const Footer         = lazy(() => import('./components/Footer'));
const PolicyPage     = lazy(() => import('./components/PolicyPage'));

import ScrollToTop from './utils/ScrollToTop';

// Minimal skeleton shown while below-the-fold sections stream in
function SectionSkeleton() {
  return <div className="w-full h-24 bg-[var(--border)] animate-pulse rounded-2xl my-4 mx-auto max-w-7xl" />;
}

function LandingPage() {
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
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <MagicBoxSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <JoinUs />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
