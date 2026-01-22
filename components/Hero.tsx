import React, { useState } from 'react';
import { CONFIG } from '../data';

const Hero: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-[#121212]">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#EDEDED 1px, transparent 1px), linear-gradient(90deg, #EDEDED 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      
      {/* Background Orbs with multi-color depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2C2C]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#FF5F1F]/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="z-10 text-center max-w-6xl mx-auto flex flex-col items-center">
        <div className="relative mb-10 md:mb-12 reveal opacity-0 translate-y-10 transition-all duration-700">
          {/* Outer Ring with dark crimson depth */}
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-[#FF2C2C] overflow-hidden p-1 shadow-[0_0_40px_rgba(74,4,4,0.6)] bg-[#1F1F1F] flex items-center justify-center">
            {!imgLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#1F1F1F] animate-pulse">
                <svg className="w-12 h-12 text-[#FF2C2C]/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            )}
            <img 
              src={CONFIG.profile.photo} 
              alt={CONFIG.profile.name} 
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover rounded-full transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ display: 'block' }}
            />
          </div>
          {/* Inner highlight ring */}
          <div className="absolute -inset-1 border border-[#FF5F1F]/20 rounded-full pointer-events-none"></div>
        </div>

        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black kinetic-text tracking-tighter leading-none mb-8 md:mb-8">
          <span className="block text-[#EDEDED] reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 uppercase">STOP THE</span>
          <span className="block text-[#FF2C2C] neon-glow reveal opacity-0 translate-y-10 transition-all duration-700 delay-300 uppercase">
            SCROLL<span className="text-[#FF5F1F]">.</span>
          </span>
        </h1>
        
        <p className="text-base md:text-2xl font-bold text-[#EDEDED]/60 mt-6 md:mt-6 max-w-3xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-500">
          Wondershare Filmora Specialist | Turning <span className="text-[#FF2C2C]">120 Seconds</span> into <span className="text-[#FF5F1F]">Viral Gold</span>
        </p>

        {/* Stats Counter Bar - Multi-accent coloring */}
        <div className="mt-12 md:mt-16 w-full grid grid-cols-3 gap-4 md:gap-4 border-y border-white/5 py-6 md:py-8 reveal opacity-0 translate-y-10 transition-all duration-700 delay-600 max-w-4xl bg-gradient-to-r from-transparent via-white/[0.02] to-transparent">
          {CONFIG.profile.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl md:text-5xl font-black text-[#EDEDED] mb-1">{metric.value}</span>
              <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-center ${idx === 1 ? 'text-[#FF5F1F]' : 'text-[#FF2C2C]'}`}>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-12 max-w-2xl mx-auto p-5 md:p-5 border border-[#4A0404] bg-[#4A0404]/10 rounded-2xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-700">
          <p className="text-sm md:text-base font-medium text-[#EDEDED]/80">
            <span className="text-[#FF5F1F] font-black uppercase">No Risk:</span> {CONFIG.profile.demoOffer}
          </p>
        </div>
        
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center gap-6 md:gap-8 reveal opacity-0 translate-y-10 transition-all duration-700 delay-800 w-full md:w-auto">
          <a 
            href="#demo-request" 
            className="w-full md:w-auto group animate-cta-pulse relative inline-flex items-center justify-center px-10 py-5 font-black text-lg text-white uppercase tracking-widest bg-gradient-to-br from-[#FF2C2C] to-[#FF5F1F] overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,44,44,0.3)]"
          >
            <span className="relative">Claim Free Demo Edit</span>
          </a>
          
          {/* Kinetic Arrow */}
          <div className="hidden md:flex text-[#FF5F1F] animate-pulse items-center justify-center">
             <svg className="w-8 h-8 transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
             </svg>
          </div>
          
          <a 
            href="#work" 
            className="w-full md:w-auto group relative inline-flex items-center justify-center px-10 py-5 font-black text-lg text-white uppercase tracking-widest bg-transparent border-2 border-[#4A0404] overflow-hidden transition-all duration-300 hover:border-[#FF2C2C] hover:text-[#FF2C2C] hover:shadow-[0_0_20px_rgba(74,4,4,0.3)]"
          >
            <span className="relative">View The Arsenal</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg className="w-6 h-6 text-[#FF5F1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;