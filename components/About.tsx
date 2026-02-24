import React, { useEffect } from 'react';
import { CONFIG } from '../data';

const About: React.FC = () => {
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

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] pt-24 pb-24 relative overflow-hidden">
        {/* Background FX */}
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#4A0404]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#FF5F1F]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                <div className="w-full lg:w-1/2 reveal opacity-0 translate-y-10 transition-all duration-700">
                    <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                        <div className="absolute inset-0 border-2 border-[#FF2C2C] rounded-full translate-x-4 translate-y-4 opacity-50"></div>
                        <img 
                            src={CONFIG.profile.photo} 
                            alt={CONFIG.profile.name} 
                            className="relative w-full h-full object-cover object-top rounded-full border-4 border-[#121212] grayscale hover:grayscale-0 transition-all duration-700 shadow-[0_0_60px_rgba(74,4,4,0.5)]"
                        />
                    </div>
                </div>
                
                <div className="w-full lg:w-1/2 text-center lg:text-left reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
                    <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">
                        More Than Just <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2C2C] to-[#FF5F1F] pr-4">An Editor</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold text-[#EDEDED] mb-6">
                        I am a <span className="text-[#FF2C2C]">Retention Engineer</span>.
                    </h2>
                    <p className="text-[#EDEDED]/60 text-lg leading-relaxed mb-8">
                        Video editing isn't just about cutting clips; it's about psychology. It's about knowing exactly when the viewer gets bored and hitting them with a dopamine spike before they scroll away.
                    </p>
                    <p className="text-[#EDEDED]/60 text-lg leading-relaxed mb-8">
                        I specialize in crafting high-energy, kinetic short-form content that dominates algorithms. My philosophy is simple: <span className="text-white font-bold">If they stop watching, we failed.</span>
                    </p>
                    
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <div className="px-6 py-3 bg-[#1A1A1A] border border-[#FF2C2C]/30 rounded-lg">
                            <span className="block text-2xl font-black text-[#EDEDED]">100%</span>
                            <span className="text-[10px] uppercase tracking-widest text-[#FF5F1F]">Dedication</span>
                        </div>
                        <div className="px-6 py-3 bg-[#1A1A1A] border border-[#FF2C2C]/30 rounded-lg">
                            <span className="block text-2xl font-black text-[#EDEDED]">24h</span>
                            <span className="text-[10px] uppercase tracking-widest text-[#FF5F1F]">Turnaround</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
                <div className="p-8 bg-[#1A1A1A] border-t-4 border-[#FF2C2C] rounded-xl hover:-translate-y-2 transition-transform shadow-xl">
                    <h3 className="text-2xl font-black uppercase mb-4 text-[#EDEDED]">The Hook</h3>
                    <p className="text-[#EDEDED]/50 text-sm leading-relaxed">
                        The first 3 seconds are war. I use visual disruption and audio stingers to grab attention instantly. No slow intros.
                    </p>
                </div>
                <div className="p-8 bg-[#1A1A1A] border-t-4 border-[#FF5F1F] rounded-xl hover:-translate-y-2 transition-transform shadow-xl">
                    <h3 className="text-2xl font-black uppercase mb-4 text-[#EDEDED]">The Pacing</h3>
                    <p className="text-[#EDEDED]/50 text-sm leading-relaxed">
                        Silence is death. I remove every millisecond of dead air to create a breathless flow that keeps retention curves flat.
                    </p>
                </div>
                <div className="p-8 bg-[#1A1A1A] border-t-4 border-[#4A0404] rounded-xl hover:-translate-y-2 transition-transform shadow-xl">
                    <h3 className="text-2xl font-black uppercase mb-4 text-[#EDEDED]">The CTA</h3>
                    <p className="text-[#EDEDED]/50 text-sm leading-relaxed">
                        Views are vanity, sales are sanity. I structure videos to guide the viewer toward a specific action without being salesy.
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-[#1F1F1F] border border-[#FF2C2C]/20 rounded-3xl p-12 relative overflow-hidden reveal opacity-0 translate-y-10 transition-all duration-700">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF2C2C]/10 blur-[80px] rounded-full pointer-events-none"></div>
                
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 relative z-10">
                    Let's Build Your <span className="text-[#FF2C2C]">Legacy</span>
                </h2>
                <p className="text-[#EDEDED]/60 max-w-2xl mx-auto mb-10 text-lg relative z-10">
                    I don't just work for you; I partner with you. Let's create content that the world can't ignore.
                </p>
                
                <a 
                    href="/#demo-request" 
                    className="inline-block px-12 py-5 bg-gradient-to-r from-[#FF2C2C] to-[#FF5F1F] text-white font-black uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(255,44,44,0.4)] hover:scale-105 transition-all relative z-10"
                >
                    Start With A Free Demo
                </a>
            </div>

        </div>
    </div>
  );
};

export default About;