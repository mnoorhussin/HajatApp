import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import MagicBoxSection from './components/MagicBoxSection';
import JoinUs from './components/JoinUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CaptainRegistration from './components/CaptainRegistration';

function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] font-ar rtl transition-colors duration-300" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <MagicBoxSection />
        <JoinUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<CaptainRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
