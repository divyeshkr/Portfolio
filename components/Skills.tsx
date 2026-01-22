
import React, { useState } from 'react';
import { CONFIG } from '../data';

const Skills: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      return url.replace(/\/view.*$/, '/preview');
    }
    return url;
  };

  const openVideo = () => {
    if (CONFIG.styleVideoUrl && CONFIG.styleVideoUrl !== '#') {
      setSelectedVideo(getEmbedUrl(CONFIG.styleVideoUrl));
    }
  };

  const closeModal = () => setSelectedVideo(null);

  return (
    <section id="style" className="py-24 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-3/5">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 reveal opacity-0 translate-y-10 transition-all duration-700">
              My <span className="text-[#FF0000]">Style</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Short-form content is a battle for attention. I don't just edit; I engineer hooks and kinetic flows that force users to stop their scrolling. Every millisecond is optimized for retention.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
              {CONFIG.skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-4 p-5 bg-white/5 border border-white/10 hover:border-[#FF0000]/50 transition-all duration-300 rounded-xl group hover:bg-[#FF0000]/5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF0000]/10 flex items-center justify-center border border-[#FF0000]/30 group-hover:bg-[#FF0000] group-hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all">
                    <svg className="w-6 h-6 text-[#FF0000] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-black text-white uppercase tracking-widest text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center relative reveal opacity-0 translate-y-10 transition-all duration-700 delay-400">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF0000]/10 blur-[80px] rounded-full" />
            
            <div 
              onClick={openVideo}
              className="relative w-full max-w-[320px] aspect-[9/16] bg-black rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden group cursor-pointer hover:border-[#FF0000]/30 transition-all"
            >
              {/* Camera Notch/Phone UI Elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-2xl z-20" />
              
              <img 
                src={CONFIG.styleImage} 
                alt="Vertical Editing Showcase" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/reel/1080/1920";
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-center justify-center">
                <div className="w-20 h-20 bg-[#FF0000] rounded-full flex items-center justify-center neon-border animate-pulse group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,0,0,0.4)]">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Floatings UI Tags */}
              <div className="absolute bottom-10 left-6 right-6">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-lg flex flex-col space-y-1">
                  <div className="h-1.5 w-full bg-[#FF0000] rounded-full overflow-hidden">
                    <div className="h-full bg-white w-3/4 animate-pulse"></div>
                  </div>
                  <span className="text-[10px] font-black uppercase text-white tracking-widest text-center">Engagement Spike</span>
                </div>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="absolute -top-6 -right-4 bg-black p-4 border border-[#FF0000] rounded-xl hidden lg:block animate-bounce shadow-[0_0_20px_rgba(255,0,0,0.3)] z-30">
              <p className="text-[#FF0000] font-black text-xs uppercase tracking-tighter">9:16 MASTERED</p>
            </div>
          </div>
        </div>
      </div>

      {/* Style Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-8 right-8 text-white hover:text-[#FF0000] transition-colors z-[110]"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div 
            className="relative w-full max-w-lg aspect-[9/16] bg-black rounded-2xl overflow-hidden border-2 border-[#FF0000] shadow-[0_0_50px_rgba(255,0,0,0.3)] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe 
              src={selectedVideo}
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="absolute bottom-10 text-center pointer-events-none">
            <p className="text-[#FF0000] font-black uppercase tracking-[0.5em] text-xs animate-pulse">Signature Style Showcase</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
