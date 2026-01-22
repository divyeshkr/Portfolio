import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import BeyondEditing from './components/BeyondEditing';
import Transformation from './components/Transformation';
import Portfolio from './components/Portfolio';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] selection:bg-[#FF2C2C] selection:text-white overflow-x-hidden">
      <Header />
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] w-full px-6">
        <a 
            href="#booking"
            className="flex items-center justify-center bg-[#FF2C2C] text-white font-black uppercase tracking-[0.2em] text-xs py-4 rounded-full shadow-[0_0_30px_rgba(255,44,44,0.5)] border-2 border-white/10"
        >
            Book Free Demo Edit
        </a>
      </div>

      <main>
        <Hero />
        <Skills />
        <BeyondEditing />
        <Transformation />
        <Portfolio />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;