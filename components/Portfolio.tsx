import React, { useState } from 'react';
import { CONFIG } from '../data';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{url: string, title: string, thumbnail: string, proof: string} | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop()?.split('?')[0];
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}autoplay=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3`;
  };

  const openModal = (e: React.MouseEvent, item: any) => {
    if (item.videoUrl === '#' || !item.videoUrl) return;
    e.preventDefault();
    setIsPlaying(false);
    setSelectedVideo({ 
        url: getEmbedUrl(item.videoUrl), 
        title: item.title, 
        thumbnail: item.thumbnail,
        proof: item.proof
    });
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  return (
    <section id="work" className="py-12 md:py-24 px-4 md:px-6 bg-[#121212] relative overflow-hidden">
      {/* Background depth glow */}
      <div className="absolute top-0 right-0 w-full h-full bg-[#4A0404]/05 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8 md:mb-16 text-center reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-4">
            The <span className="text-[#FF2C2C]">Arsenal</span>
          </h2>
          <p className="text-[#EDEDED]/40 uppercase tracking-widest font-black text-[10px] md:text-sm">Engineered for <span className="text-[#FF5F1F]">Maximum Retention</span></p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-12">
          {CONFIG.portfolio.map((item, index) => (
            <div 
              key={item.id} 
              className={`reveal opacity-0 translate-y-10 transition-all duration-700`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                onClick={(e) => openModal(e, item)}
                className="group relative block aspect-[9/16] w-full bg-[#1A1A1A] border border-[#4A0404]/30 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#FF5F1F]/50 transition-all duration-500 cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-90"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 md:p-8 flex flex-col justify-end">
                  <span className="text-[#FF5F1F] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1">{item.tag}</span>
                  <h3 className="text-sm md:text-4xl font-black uppercase tracking-tighter leading-tight mb-1 md:mb-2 truncate sm:whitespace-normal group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center space-x-1 md:space-x-2 bg-[#4A0404]/40 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-md md:rounded-lg border border-[#FF2C2C]/20 w-fit">
                    <span className="text-[6px] md:text-[10px] font-black text-[#EDEDED] uppercase tracking-wider">{item.proof}</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#FF2C2C] to-[#FF5F1F] flex items-center justify-center shadow-[0_0_20px_rgba(255,44,44,0.5)]">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div className="w-full max-w-[min(90vw,calc(85svh*9/16))] flex justify-between items-center mb-4">
            <h4 className="text-[#FF5F1F] font-black uppercase tracking-widest text-[10px] md:text-xs truncate mr-4">{selectedVideo.title}</h4>
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
            className="relative w-[min(90vw,calc(85svh*9/16))] aspect-[9/16] bg-black rounded-lg overflow-hidden border-2 border-[#FF5F1F] shadow-[0_0_60px_rgba(74,4,4,0.4)] animate-in zoom-in-95 duration-300 group/player"
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
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
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

export default Portfolio;