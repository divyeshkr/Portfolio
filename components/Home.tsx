import React, { useEffect } from 'react';
import Hero from './Hero';
import Skills from './Skills';
import DhruvRatheeHighlight from './DhruvRatheeHighlight';
import Transformation from './Transformation';
import FeaturedWork from './FeaturedWork';
import BookingForm from './BookingForm';

const Home: React.FC = () => {
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

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Skills />
      <DhruvRatheeHighlight />
      {/* BeyondEditing moved to separate page */}
      <Transformation />
      <FeaturedWork />
      <BookingForm />
    </>
  );
};

export default Home;