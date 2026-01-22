import React from 'react';
import { CONFIG } from '../data';

const BookingForm: React.FC = () => {
  return (
    <section className="py-12 md:py-24 px-6 bg-[#121212] relative border-t border-[#4A0404]/30 overflow-hidden">
      {/* Subtle depth sphere - Hide on mobile */}
      <div className="hidden md:block absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#4A0404]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* How It Works - Friction Reduction Section */}
        <div className="mb-16 md:mb-20 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">What You <span className="text-[#FF2C2C]">Need To</span> <span className="text-[#FF5F1F]">Provide</span></h3>
            <p className="text-[#EDEDED]/40 font-black uppercase tracking-widest text-[10px] md:text-xs">Zero friction workflow.</p>
          </div>
          
          {/* Steps - Single Row Layout for Mobile & Desktop */}
          <div className="flex flex-row items-stretch justify-center gap-1 md:gap-4">
            {CONFIG.howItWorks.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex-1 p-3 md:p-8 bg-[#1A1A1A] border border-[#4A0404]/30 rounded-xl md:rounded-2xl flex flex-col items-center text-center group hover:border-[#FF5F1F]/40 transition-all shadow-xl min-w-0">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-[#FF2C2C]/30 flex items-center justify-center mb-2 md:mb-4 text-[#FF5F1F] font-black group-hover:bg-gradient-to-br group-hover:from-[#FF2C2C] group-hover:to-[#FF5F1F] group-hover:text-white transition-all text-xs md:text-sm shadow-[0_0_10px_rgba(255,44,44,0.2)]">
                    {idx + 1}
                  </div>
                  <h4 className="text-[#EDEDED] font-black uppercase text-[9px] md:text-sm mb-1 md:mb-2 group-hover:text-[#FF5F1F] transition-colors leading-tight">
                    {step.label}
                  </h4>
                  <p className="text-[#EDEDED]/40 text-[8px] md:text-xs leading-tight md:leading-relaxed break-words w-full">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow Connector */}
                {idx < CONFIG.howItWorks.length - 1 && (
                  <div className="flex flex-col justify-center items-center px-0.5 md:px-2">
                     <svg className="w-4 h-4 md:w-8 md:h-8 text-[#FF5F1F]/60 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                     </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-8 text-center px-4">
            <p className="text-[#EDEDED]/60 font-medium italic text-xs md:text-sm">"I handle the rest—structure, pacing, captions, music, and <span className="text-[#FF5F1F]">viral flow</span>."</p>
          </div>
        </div>

        {/* The Direct Jump Target */}
        <div id="demo-request" className="scroll-mt-[25vh] bg-[#1A1A1A] border border-[#4A0404]/40 rounded-[2.5rem] p-8 md:p-16 reveal opacity-0 translate-y-10 transition-all duration-700 shadow-2xl relative overflow-hidden group/form hover:border-[#FF2C2C]/20 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5F1F]/10 blur-3xl pointer-events-none md:block hidden"></div>
          
          <div className="text-center mb-10 md:mb-12 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF2C2C] to-[#FF5F1F] text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 shadow-[0_0_20px_rgba(255,44,44,0.3)]">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Response Time: 48 Hrs</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-[#EDEDED] uppercase tracking-tighter mb-4 md:mb-6">
              Book Your <span className="text-[#FF2C2C]">Free</span> <span className="text-[#FF5F1F]">Demo</span>
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
              className="w-full md:w-auto px-10 py-5 md:px-16 md:py-6 bg-gradient-to-r from-[#FF2C2C] to-[#FF5F1F] text-white font-black text-lg md:text-xl uppercase tracking-widest rounded-full hover:scale-105 transition-all transform hover:-translate-y-1 shadow-[0_15px_40px_rgba(255,44,44,0.4)] text-center active:scale-95 animate-cta-pulse"
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