import React, { useState } from 'react';
import { CONFIG } from '../data';

const Hero: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="z-10 text-center max-w-6xl mx-auto flex flex-col items-center">
        {/* Profile Image with Ring */}
        <div className="relative mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-[#FF0000] overflow-hidden p-1 shadow-[0_0_30px_rgba(255,0,0,0.5)] bg-zinc-900 flex items-center justify-center">
            {!imgLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 animate-pulse">
                <svg className="w-12 h-12 text-[#FF0000]/20" fill="currentColor" viewBox="0 0 24 24">
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
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black border border-[#FF0000] px-4 py-1.5 rounded-full shadow-lg z-20 whitespace-nowrap">
            <p className="text-[#FF0000] text-[10px] md:text-xs font-black uppercase tracking-widest">
              {CONFIG.profile.stats}
            </p>
          </div>
        </div>

        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black kinetic-text tracking-tighter leading-none mb-6">
          <span className="block text-white reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">STOP THE</span>
          <span className="block text-[#FF0000] neon-glow reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">SCROLL.</span>
        </h1>
        
        <p className="text-lg md:text-2xl font-bold text-gray-400 mt-6 max-w-3xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-500">
          {CONFIG.profile.tagline}
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-6 reveal opacity-0 translate-y-10 transition-all duration-700 delay-700">
          <a 
            href="#work" 
            className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-lg text-white uppercase tracking-widest bg-transparent border-2 border-[#FF0000] overflow-hidden transition-all duration-300 hover:text-black"
          >
            <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-out bg-[#FF0000] group-hover:w-full"></span>
            <span className="relative">View Arsenal</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;