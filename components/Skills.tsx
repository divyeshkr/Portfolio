import React, { useState } from 'react';
import { CONFIG } from '../data';

const Skills: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{url: string, thumbnail: string} | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop()?.split('?')[0];
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}autoplay=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3`;
  };

  const openVideo = () => {
    if (CONFIG.styleVideoUrl && CONFIG.styleVideoUrl !== '#') {
      setIsPlaying(false);
      setSelectedVideo({ 
        url: getEmbedUrl(CONFIG.styleVideoUrl),
        thumbnail: CONFIG.styleImage
      });
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  return (
    <section id="style" className="py-12 md:py-24 px-6 bg-[#0E0E0E] overflow-hidden border-t border-[#4A0404]/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="w-full lg:w-3/5">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 md:mb-8 reveal opacity-0 translate-y-10 transition-all duration-700">
              The <span className="text-[#FF2C2C]">Signature</span> <span className="text-[#FF5F1F]">Style</span>
            </h2>
            <p className="text-[#EDEDED]/60 text-base md:text-xl leading-relaxed mb-8 md:mb-10 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 font-medium">
              I specialize in <span className="text-white font-bold">Talking Head Mastery</span>. I turn experts into influencers by engineering aggressive hooks, kinetic typography, and high-energy B-roll that maintains 60%+ retention across the board.
            </p>
            
            <div className="grid grid-cols-2 gap-3 md:gap-6 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
              {CONFIG.skills.map((skill, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-3 md:p-5 bg-[#1A1A1A] border border-[#4A0404]/20 hover:border-[#FF5F1F]/50 transition-all duration-300 rounded-xl group hover:-translate-y-1 shadow-2xl">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FF2C2C]/10 flex items-center justify-center border border-[#FF2C2C]/30 group-hover:bg-gradient-to-br group-hover:from-[#FF2C2C] group-hover:to-[#FF5F1F] group-hover:shadow-[0_0_15px_rgba(255,44,44,0.5)] transition-all">
                    <svg className="w-4 h-4 md:w-6 md:h-6 text-[#FF5F1F] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-black text-[#EDEDED] uppercase tracking-widest text-[8px] md:text-xs text-center sm:text-left">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center relative reveal opacity-0 translate-y-10 transition-all duration-700 delay-400">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#4A0404]/10 blur-[100px] rounded-full" />
            
            <div 
              onClick={openVideo}
              className="relative w-full max-w-[260px] md:max-w-[320px] aspect-[9/16] bg-black rounded-[2rem] md:rounded-[2.5rem] border-[4px] md:border-[8px] border-[#1F1F1F] shadow-[0_40px_80px_rgba(74,4,4,0.4)] overflow-hidden group cursor-pointer hover:border-[#FF5F1F]/40 transition-all"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-28 h-5 md:h-7 bg-[#1F1F1F] rounded-b-2xl z-20" />
              
              <img 
                src={selectedVideo ? selectedVideo.thumbnail : CONFIG.styleImage} 
                alt="Style Showcase" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#FF2C2C] to-[#FF5F1F] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,44,44,0.6)] group-hover:scale-110 transition-transform animate-cta-pulse">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div className="w-full max-w-[min(90vw,calc(85svh*9/16))] flex justify-between items-center mb-4">
            <span className="text-[#FF5F1F] font-black uppercase text-[10px] tracking-widest">Mastery Showcase</span>
            <button 
              onClick={closeModal}
              className="text-white hover:text-[#FF2C2C] transition-colors p-2 bg-white/5 rounded-full"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div 
            className="relative w-[min(90vw,calc(85svh*9/16))] aspect-[9/16] bg-black rounded-lg overflow-hidden border-2 border-[#FF5F1F] shadow-[0_0_60px_rgba(255,44,44,0.4)] animate-in zoom-in-95 duration-300 group/player"
            onClick={(e) => e.stopPropagation()}
          >
            {!isPlaying ? (
              <div 
                className="w-full h-full group cursor-pointer relative"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src={selectedVideo.thumbnail} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity bg-[#121212]" 
                  alt="Video Thumbnail"
                />
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-75 transition-transform duration-500">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#FF2C2C] to-[#FF5F1F] flex items-center justify-center shadow-[0_0_30px_rgba(255,44,44,0.6)]">
                    <svg className="w-8 h-8 md:w-12 md:h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <iframe 
                src={selectedVideo.url}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;