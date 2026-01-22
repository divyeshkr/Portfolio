import React from 'react';
import { CONFIG } from '../data';

const BookingForm: React.FC = () => {
  return (
    <section id="booking" className="py-24 px-6 bg-[#121212] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* How It Works - Friction Reduction Section */}
        <div className="mb-20 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">What You <span className="text-[#FF2C2C]">Need To Provide</span></h3>
            <p className="text-[#EDEDED]/40 font-black uppercase tracking-widest text-[10px] md:text-xs">No friction. No guesswork.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {CONFIG.howItWorks.map((step, idx) => (
              <div key={idx} className={`p-6 md:p-8 bg-[#1F1F1F] border border-white/5 rounded-2xl flex flex-col items-center text-center group hover:border-[#FF2C2C]/30 transition-all ${idx === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#FF2C2C]/30 flex items-center justify-center mb-3 md:mb-4 text-[#FF2C2C] font-black group-hover:bg-[#FF2C2C] group-hover:text-white transition-all text-sm">
                  {idx + 1}
                </div>
                <h4 className="text-white font-black uppercase text-xs md:text-sm mb-1 md:mb-2">{step.label}</h4>
                <p className="text-[#EDEDED]/40 text-[10px] md:text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center px-4">
            <p className="text-[#EDEDED]/60 font-medium italic text-xs md:text-sm">"I handle the rest—structure, pacing, captions, music, and viral flow."</p>
          </div>
        </div>

        <div className="bg-[#1F1F1F] border border-white/5 rounded-[2.5rem] p-8 md:p-16 reveal opacity-0 translate-y-10 transition-all duration-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2C2C]/10 blur-3xl pointer-events-none"></div>
          
          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-[#FF2C2C] text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 neon-border">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Response Time: 48 Hrs</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-[#EDEDED] uppercase tracking-tighter mb-4 md:mb-6">
              Book Your <span className="text-[#FF2C2C]">Free Demo</span>
            </h2>
            <p className="text-[#EDEDED]/60 text-base md:text-lg max-w-xl mx-auto font-medium italic">
              "Upload it. Watch retention improve. Decide after results."
            </p>
          </div>

          <div className="flex flex-col items-center relative z-10">
            <a 
              href={CONFIG.socials.bookingLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto px-10 py-5 md:px-16 md:py-6 bg-[#FF2C2C] text-white font-black text-lg md:text-xl uppercase tracking-widest rounded-full hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-[0_0_40px_rgba(255,44,44,0.4)] text-center active:scale-95 animate-cta-pulse"
            >
              Submit My Request
            </a>
            <p className="mt-8 text-[#EDEDED]/30 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
              Absolutly No Commitment Required • 100% Risk Free
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;