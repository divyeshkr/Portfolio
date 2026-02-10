import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './components/Home';
import BeyondEditing from './components/BeyondEditing';
import TheArsenalPage from './components/TheArsenalPage';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  const { pathname, hash } = useLocation();

  // Scroll to top on route change, or to hash if present
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-[#121212] selection:bg-[#FF2C2C] selection:text-white overflow-x-hidden relative">
      {/* Global Depth Glow - Optimized for Mobile */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#4A0404]/10 to-transparent"></div>
        {/* Hide large fixed blur on mobile to save GPU */}
        <div className="hidden md:block absolute top-0 right-0 w-1/3 h-1/3 bg-[#FF5F1F]/05 blur-[120px]"></div>
      </div>

      <Header />
      
      {/* Mobile Sticky CTA with New Palette - Moved up for iOS Home Bar Safety */}
      <div className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 z-[90] w-full px-6 pointer-events-none">
        <a 
            href="/#demo-request"
            className="flex items-center justify-center bg-gradient-to-r from-[#FF2C2C] to-[#FF5F1F] text-white font-black uppercase tracking-[0.2em] text-xs py-4 rounded-full shadow-[0_10px_30px_rgba(255,44,44,0.4)] border-2 border-white/10 pointer-events-auto"
        >
            Book Free Demo Edit
        </a>
      </div>

      <main className="relative z-10">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<BeyondEditing />} />
            <Route path="/arsenal" element={<TheArsenalPage />} />
            <Route path="/about" element={<About />} />
            {/* Catch-all route to ensure content renders even if URL is not exact */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;