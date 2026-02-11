import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../data';

const BeyondEditing: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof CONFIG.beyondEditing[0] | null>(null);

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

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  return (
    <div className="pt-24 min-h-screen bg-[#0E0E0E] relative overflow-hidden">
        {/* Background depth glow */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#FF5F1F]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <section className="py-12 md:py-16 px-4 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 md:mb-12 reveal opacity-0 translate-y-10 transition-all duration-700 text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                        Other <span className="text-[#FF2C2C]">Services</span>
                    </h2>
                    <p className="text-[#EDEDED]/40 text-base md:text-lg uppercase tracking-widest font-black">Multiplying Your <span className="text-[#FF5F1F]">Retention</span> Potential</p>
                </div>

                {/* Interaction Hint */}
                <div className="flex flex-col items-center justify-center mb-8 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
                    <p className="text-[#EDEDED]/60 text-[10px] md:text-xs font-black uppercase tracking-widest mb-2">Click services to know more</p>
                    <svg className="w-5 h-5 text-[#FF5F1F] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 mb-24">
                    {CONFIG.beyondEditing.map((service, index) => (
                        <div 
                            key={index} 
                            className="reveal opacity-0 translate-y-10 transition-all duration-700 bg-[#1A1A1A] border border-[#4A0404]/30 rounded-2xl md:rounded-3xl cursor-pointer overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-[#FF5F1F]/50 hover:bg-[#1d1d1d] hover:-translate-y-1 transition-all group"
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => setSelectedService(service)}
                        >
                            <div className="p-4 md:p-8 flex flex-col md:flex-row items-center md:justify-between h-full text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
                                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#4A0404]/10 text-[#FF5F1F] border border-[#4A0404]/30 flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#FF2C2C] group-hover:to-[#FF5F1F] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,44,44,0.4)]">
                                        <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-xs md:text-2xl font-black uppercase tracking-tight text-[#EDEDED] group-hover:text-white transition-colors leading-tight">
                                        {service.title}
                                    </h3>
                                </div>
                                
                                <div className="hidden md:block text-[#EDEDED]/30 group-hover:text-[#FF5F1F] transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </div>
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

        {/* Full Screen Modal */}
        {selectedService && (
            <div 
                className="fixed inset-0 z-[100] bg-[#0E0E0E]/95 backdrop-blur-xl animate-in fade-in duration-300 flex items-center justify-center p-4 md:p-8"
                onClick={() => setSelectedService(null)}
            >
                <div 
                    className="w-full max-w-4xl bg-[#1A1A1A] border border-[#FF5F1F]/30 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(255,44,44,0.1)] animate-in zoom-in-95 duration-300 relative max-h-full overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                     <button 
                        onClick={() => setSelectedService(null)}
                        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 bg-black/20 hover:bg-[#FF2C2C] rounded-full text-white transition-all border border-white/10 hover:border-transparent group"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FF5F1F]/10 to-transparent pointer-events-none"></div>
                    
                    <div className="p-8 md:p-16 flex flex-col items-center text-center">
                         <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-[#FF2C2C] to-[#FF5F1F] text-white shadow-[0_0_40px_rgba(255,44,44,0.4)] flex items-center justify-center mb-8">
                            <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={selectedService.icon} />
                            </svg>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 text-white">
                            {selectedService.title}
                        </h2>
                        
                        <p className="text-[#EDEDED]/70 text-lg md:text-xl leading-relaxed max-w-2xl font-medium mb-12">
                            {selectedService.description}
                        </p>

                         {/* Specific Link for Production */}
                         {selectedService.title.includes("Production") && (
                            <Link 
                                to="/arsenal?tab=cinematography"
                                className="inline-flex items-center space-x-3 text-[#FF5F1F] font-black uppercase tracking-widest border border-[#FF5F1F] px-8 py-4 rounded-full hover:bg-[#FF5F1F] hover:text-white transition-all mb-8 group"
                            >
                                <span>View Cinematic Portfolio</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                         )}

                         <a 
                            href="/#demo-request" 
                            className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-[#FF2C2C] to-[#FF5F1F] text-white font-black uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(255,44,44,0.4)] hover:scale-105 transition-all"
                        >
                            Inquire About This Service
                        </a>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default BeyondEditing;