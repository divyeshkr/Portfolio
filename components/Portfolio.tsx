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
    <section id="work" className="py-24 px-4 md:px-6 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-4">
            The <span className="text-[#FF2C2C]">Arsenal</span>
          </h2>
          <p className="text-[#EDEDED]/40 uppercase tracking-widest font-black text-[10px] md:text-sm">Engineered for Maximum Retention</p>
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
                className="group relative block aspect-[9/16] w-full bg-[#1F1F1F] border border-white/5 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#FF2C2C]/50 transition-all duration-500 cursor-pointer shadow-xl"
              >
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-90"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 p-3 md:p-8 flex flex-col justify-end">
                  <span className="text-[#FF2C2C] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1">{item.tag}</span>
                  <h3 className="text-sm md:text-4xl font-black uppercase tracking-tighter leading-tight mb-1 md:mb-2 truncate sm:whitespace-normal">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center space-x-1 md:space-x-2 bg-white/10 backdrop-blur-md px-1.5 py-0.5 md:px-3 md:py-1.5 rounded-md md:rounded-lg border border-white/10 w-fit">
                    <span className="text-[6px] md:text-[10px] font-black text-[#EDEDED] uppercase tracking-wider">{item.proof}</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#FF2C2C] flex items-center justify-center shadow-[0_0_20px_rgba(255,44,44,0.5)]">
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
            <h4 className="text-[#FF2C2C] font-black uppercase tracking-widest text-[10px] md:text-xs truncate mr-4">{selectedVideo.title}</h4>
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
            className="relative w-[min(90vw,calc(85svh*9/16))] aspect-[9/16] bg-black rounded-lg overflow-hidden border-2 border-[#FF2C2C] shadow-[0_0_60px_rgba(255,44,44,0.4)] animate-in zoom-in-95 duration-300 group/player"
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
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#FF2C2C] flex items-center justify-center shadow-[0_0_30px_rgba(255,44,44,0.6)]">
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