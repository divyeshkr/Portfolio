import React, { useState } from 'react';
import { CONFIG } from '../data';

const Hero: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-[#121212]">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(#EDEDED 1px, transparent 1px), linear-gradient(90deg, #EDEDED 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF2C2C]/5 blur-[160px] rounded-full pointer-events-none z-0" />
      
      {/* THE BLENDED HERO IMAGE - Restored balanced alignment with slight left-center anchor for mobile */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden">
        <div 
          className="relative w-full h-full hero-mask-container"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          }}
        >
          <style dangerouslySetInnerHTML={{ __html: `
            .hero-mask-container {
              mask-image: radial-gradient(circle at 40% 45%, black 20%, transparent 85%);
              -webkit-mask-image: radial-gradient(circle at 40% 45%, black 20%, transparent 85%);
            }
            @media (min-width: 768px) {
              .hero-mask-container {
                mask-image: radial-gradient(circle at 75% 50%, black 25%, transparent 85%);
                -webkit-mask-image: radial-gradient(circle at 75% 50%, black 25%, transparent 85%);
              }
            }
          `}} />
          
          <img 
            src={CONFIG.profile.heroImage} 
            alt="Hero Visual Blend" 
            className={`w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.75] md:brightness-[0.7] mix-blend-luminosity transition-all duration-1000 ${imgLoaded ? 'opacity-80 scale-100' : 'opacity-0 scale-105'}`}
            onLoad={() => setImgLoaded(true)}
            style={{ 
              // Reverted to a more balanced object position that worked well in previous versions
              objectPosition: 'center 25%' 
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212] opacity-70"></div>
        </div>
      </div>

      <div className="z-20 text-center max-w-6xl mx-auto flex flex-col items-center">
        <div className="relative mb-6 md:mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="w-24 h-24 md:w-44 md:h-44 rounded-full border-2 border-[#FF2C2C] overflow-hidden p-1 shadow-[0_0_40px_rgba(255,44,44,0.5)] bg-[#1F1F1F] flex items-center justify-center">
            <img 
              src={CONFIG.profile.photo} 
              alt={CONFIG.profile.name} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -inset-2 border border-[#FF5F1F]/30 rounded-full pointer-events-none animate-pulse"></div>
        </div>

        <h1 className="text-5xl md:text-[8rem] lg:text-[10rem] font-black kinetic-text tracking-tighter leading-none mb-4 md:mb-6 relative">
          <span className="block text-white reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,1)]">STOP THE</span>
          <span className="block text-[#FF2C2C] neon-glow reveal opacity-0 translate-y-10 transition-all duration-700 delay-300 uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,1)]">
            SCROLL<span className="text-[#FF5F1F]">.</span>
          </span>
        </h1>
        
        <p className="text-base md:text-2xl font-bold text-white mt-2 md:mt-4 max-w-xs md:max-w-3xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-500 relative z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
          Wondershare Filmora Specialist | Turning <span className="text-[#FF2C2C] font-black">120 Seconds</span> into <span className="text-[#FF5F1F] font-black">Viral Gold</span>
        </p>

        <div className="mt-8 md:mt-12 w-full grid grid-cols-3 gap-2 md:gap-4 border-y border-white/10 py-6 md:py-8 reveal opacity-0 translate-y-10 transition-all duration-700 delay-600 max-w-4xl backdrop-blur-md bg-black/60 relative z-10 shadow-2xl rounded-sm">
          {CONFIG.profile.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl md:text-5xl font-black text-white mb-1 drop-shadow-lg">{metric.value}</span>
              <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-center ${idx === 1 ? 'text-[#FF5F1F]' : 'text-[#FF2C2C]'}`}>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 max-w-2xl mx-auto p-4 md:p-6 border border-[#FF2C2C]/20 bg-black/80 backdrop-blur-xl rounded-2xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-700 relative z-10 shadow-2xl">
          <p className="text-xs md:text-base font-semibold text-white leading-relaxed">
            <span className="text-[#FF5F1F] font-black uppercase block md:inline mb-1 md:mb-0 md:mr-2">The Offer:</span> {CONFIG.profile.demoOffer}
          </p>
        </div>
        
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 reveal opacity-0 translate-y-10 transition-all duration-700 delay-800 relative z-10 w-full sm:w-auto">
          <a 
            href="#direct-booking" 
            className="group animate-cta-pulse relative inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 font-black text-base md:text-xl text-white uppercase tracking-[0.2em] bg-gradient-to-br from-[#FF2C2C] to-[#FF5F1F] overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,44,44,0.5)] rounded-sm"
          >
            <span className="relative flex items-center">
              Claim Free Demo
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          <a 
            href="#work" 
            className="group relative inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 font-black text-base md:text-xl text-white uppercase tracking-[0.2em] bg-black/80 backdrop-blur-xl border-2 border-[#4A0404] overflow-hidden transition-all duration-300 hover:border-[#FF2C2C] hover:text-[#FF2C2C] hover:shadow-[0_0_30px_rgba(255,44,44,0.2)] rounded-sm"
          >
            <span className="relative flex items-center">
              View Arsenal
              <svg className="w-6 h-6 ml-2 group-hover:translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-40">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF2C2C] to-transparent mb-2"></div>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-[#FF5F1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;