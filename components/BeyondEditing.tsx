import React, { useEffect } from 'react';
import { CONFIG } from '../data';

const BeyondEditing: React.FC = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
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
    <div className="pt-24 min-h-screen bg-[#0E0E0E] relative overflow-hidden">
        {/* Background depth glow */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#FF5F1F]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <section className="py-12 md:py-16 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 md:mb-16 reveal opacity-0 translate-y-10 transition-all duration-700 text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                        Beyond <span className="text-[#FF2C2C]">Editing</span>
                    </h2>
                    <p className="text-[#EDEDED]/40 text-base md:text-lg uppercase tracking-widest font-black">Multiplying Your <span className="text-[#FF5F1F]">Retention</span> Potential</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
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

                {/* New Thumbnails Section */}
                <div className="border-t border-[#4A0404]/30 pt-16 md:pt-24 reveal opacity-0 translate-y-10 transition-all duration-700">
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1 rounded-full border border-[#FF2C2C]/30 bg-[#4A0404]/10 text-[#FF2C2C] text-[10px] font-black uppercase tracking-widest mb-4">
                            New Service
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-[#EDEDED] uppercase tracking-tighter mb-4">
                            {CONFIG.thumbnails.title.split(' ')[0]} <span className="text-[#FF5F1F]">{CONFIG.thumbnails.title.split(' ').slice(1).join(' ')}</span>
                        </h3>
                        <p className="text-[#EDEDED]/60 max-w-2xl mx-auto text-sm md:text-lg font-medium">{CONFIG.thumbnails.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {CONFIG.thumbnails.examples.map((thumb, idx) => (
                            <div key={idx} className="group relative aspect-video bg-[#121212] rounded-xl overflow-hidden border border-white/10 hover:border-[#FF2C2C] transition-all duration-500 shadow-2xl">
                                <img src={thumb.image} alt={thumb.type} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded border border-white/10">
                                    <span className="text-[10px] font-black text-[#FF5F1F] uppercase tracking-widest">{thumb.type}</span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-white font-black uppercase tracking-tight">{thumb.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 md:mt-24 p-8 md:p-12 border border-[#FF5F1F]/30 bg-[#4A0404]/10 rounded-3xl reveal opacity-0 translate-y-10 transition-all duration-700 text-center">
                    <h3 className="text-2xl font-black text-white uppercase mb-4">Ready to Expand?</h3>
                    <p className="text-[#EDEDED]/60 mb-8 max-w-xl mx-auto">These services are add-ons. You can request them individually or bundle them with your editing package.</p>
                    <a 
                        href="/#demo-request" 
                        className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF2C2C] to-[#FF5F1F] text-white font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,44,44,0.4)]"
                    >
                        Get A Quote
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
};

export default BeyondEditing;