import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import JoinUs from './components/JoinUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CaptainRegistration from './components/CaptainRegistration';

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-ar rtl" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
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
