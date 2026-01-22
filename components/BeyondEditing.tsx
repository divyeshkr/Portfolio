import React from 'react';
import { CONFIG } from '../data';

const BeyondEditing: React.FC = () => {
  return (
    <section className="py-12 md:py-24 px-6 bg-[#0E0E0E] relative overflow-hidden border-t border-[#4A0404]/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
            Beyond <span className="text-[#FF2C2C]">Editing</span>
          </h2>
          <p className="text-[#EDEDED]/40 text-base md:text-lg uppercase tracking-widest font-black">Multiplying Your <span className="text-[#FF5F1F]">Retention</span> Potential</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CONFIG.beyondEditing.map((service, index) => (
            <div 
              key={index} 
              className="reveal opacity-0 translate-y-10 transition-all duration-700 p-8 bg-[#1A1A1A] border border-[#4A0404]/30 rounded-3xl group hover:border-[#FF5F1F]/50 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-[#4A0404]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#4A0404]/30 group-hover:bg-gradient-to-br group-hover:from-[#FF2C2C] group-hover:to-[#FF5F1F] group-hover:border-transparent transition-all shadow-inner">
                <svg className="w-7 h-7 text-[#FF5F1F] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-[#EDEDED] uppercase mb-4 tracking-tight group-hover:text-[#FF5F1F] transition-colors">{service.title}</h3>
              <p className="text-[#EDEDED]/60 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-8 border border-[#FF5F1F]/30 bg-[#4A0404]/10 rounded-3xl reveal opacity-0 translate-y-10 transition-all duration-700">
          <p className="text-[#EDEDED] font-medium text-base md:text-lg">
            <span className="text-[#FF5F1F] font-black uppercase mr-2">The Result:</span> These are optional accelerators. Editing is the core weapon, but these ensure your content isn't just a video—it's a conversion engine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeyondEditing;