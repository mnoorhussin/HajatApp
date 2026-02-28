import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MagicBoxSection from './components/MagicBoxSection';
import Services from './components/Services';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import CaptainRegistration from './components/CaptainRegistration';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-ar rtl" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <MagicBoxSection />
        <JoinUs />
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
