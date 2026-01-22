import React, { useState } from 'react';
import { CONFIG } from '../data';

const Hero: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-[#121212]">
      {/* Brand Watermark */}
      <div className="fixed bottom-10 right-10 z-0 select-none pointer-events-none opacity-10">
        <span className="brand-corner font-black text-6xl md:text-8xl text-white uppercase tracking-tighter">DivyeshCreates</span>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2C2C]/5 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="z-10 text-center max-w-6xl mx-auto flex flex-col items-center">
        <div className="relative mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-[#FF2C2C] overflow-hidden p-1 shadow-[0_0_30px_rgba(255,44,44,0.2)] bg-[#1a1a1a] flex items-center justify-center">
            {!imgLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] animate-pulse">
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
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-[#FF2C2C]/30 px-4 py-1.5 rounded-full shadow-lg z-20 whitespace-nowrap">
            <p className="text-[#FF2C2C] text-[10px] md:text-xs font-black uppercase tracking-widest">
              {CONFIG.profile.stats}
            </p>
          </div>
        </div>

        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black kinetic-text tracking-tighter leading-none mb-6">
          <span className="block text-white reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">STOP THE</span>
          <span className="block text-[#FF2C2C] neon-glow reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">SCROLL.</span>
        </h1>
        
        <p className="text-lg md:text-2xl font-bold text-gray-400 mt-6 max-w-3xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-500">
          Wondershare Filmora Specialist | Turning <span className="text-[#FF2C2C]">120 Seconds</span> into Viral Gold
        </p>

        <div className="mt-10 max-w-2xl mx-auto p-4 border border-[#FF2C2C]/20 bg-[#FF2C2C]/5 rounded-xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-600">
          <p className="text-sm md:text-base font-medium text-gray-300">
            <span className="text-[#FF2C2C] font-black uppercase">Free Demo:</span> {CONFIG.profile.demoOffer}
          </p>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-6 reveal opacity-0 translate-y-10 transition-all duration-700 delay-700">
          <a 
            href="#booking" 
            className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-lg text-white uppercase tracking-widest bg-[#FF2C2C] overflow-hidden transition-all duration-300 hover:bg-red-700 active:scale-95"
          >
            <span className="relative">Claim Free Demo Edit</span>
          </a>
          <a 
            href="#work" 
            className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-lg text-white uppercase tracking-widest bg-transparent border-2 border-white/10 overflow-hidden transition-all duration-300 hover:border-[#FF2C2C] hover:text-[#FF2C2C]"
          >
            <span className="relative">View Arsenal</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <svg className="w-6 h-6 text-[#FF2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;