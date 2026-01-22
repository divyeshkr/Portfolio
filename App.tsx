
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Transformation from './components/Transformation';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  useEffect(() => {
    // Simple intersection observer logic for scroll reveals
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
    <div className="min-h-screen bg-black selection:bg-[#FF0000] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Transformation />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;
