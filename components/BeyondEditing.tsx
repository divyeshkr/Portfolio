import React from 'react';
import { CONFIG } from '../data';

const BeyondEditing: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0E0E0E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
            Beyond <span className="text-[#FF2C2C]">Editing</span>
          </h2>
          <p className="text-gray-400 text-lg uppercase tracking-widest font-bold">Scaling Your Brand Multi-Dimensionally</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONFIG.beyondEditing.map((service, index) => (
            <div 
              key={index} 
              className="reveal opacity-0 translate-y-10 transition-all duration-700 p-8 bg-[#1a1a1a] border border-white/5 rounded-3xl group hover:border-[#FF2C2C]/50 transition-all"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-[#FF2C2C]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#FF2C2C]/20 group-hover:bg-[#FF2C2C] transition-all">
                <svg className="w-7 h-7 text-[#FF2C2C] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tight">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-[#FF2C2C]/5 border-l-4 border-[#FF2C2C] reveal opacity-0 translate-y-10 transition-all duration-700">
          <p className="text-gray-300 font-medium">
            <span className="text-white font-black uppercase">Note:</span> These are optional accelerators. Editing remains the core, but these services ensure your content isn't just "good"—it's a conversion engine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeyondEditing;