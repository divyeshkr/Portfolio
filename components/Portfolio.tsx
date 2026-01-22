import React, { useState } from 'react';
import { CONFIG } from '../data';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{url: string, title: string, thumbnail: string} | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      // Ensure it's the preview link and add autoplay
      return url.replace(/\/view.*$/, '/preview') + (url.includes('?') ? '&' : '?') + 'autoplay=1';
    }
    return url;
  };

  const openModal = (e: React.MouseEvent, url: string, title: string, thumbnail: string) => {
    if (url === '#' || !url) return;
    e.preventDefault();
    setIsPlaying(false);
    setSelectedVideo({ url: getEmbedUrl(url), title, thumbnail });
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  return (
    <section id="work" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-4">
            The <span className="text-[#FF0000]">Work</span>
          </h2>
          <p className="text-gray-500 uppercase tracking-widest font-bold">Showcasing the Kinetic Arsenal</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {CONFIG.portfolio.map((item, index) => (
            <div 
              key={item.id} 
              className={`reveal opacity-0 translate-y-10 transition-all duration-700`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                onClick={(e) => openModal(e, item.videoUrl, item.title, item.thumbnail)}
                className="group relative block aspect-[9/16] w-full bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF0000]/50 transition-all duration-500 cursor-pointer"
              >
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 p-8 flex flex-col justify-end">
                  <span className="text-[#FF0000] text-xs font-black uppercase tracking-[0.3em] mb-2">{item.tag}</span>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight">
                    {item.title}
                  </h3>
                  
                  <div className="h-0 group-hover:h-12 transition-all duration-500 overflow-hidden mt-4">
                    <div className="flex items-center space-x-2 text-white font-bold uppercase text-sm group/btn">
                      <span>Watch Full Clip</span>
                      <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div className="w-full max-w-[min(90vw,calc(85vh*9/16))] flex justify-between items-center mb-4">
            <h4 className="text-[#FF0000] font-black uppercase tracking-widest text-sm truncate mr-4">{selectedVideo.title}</h4>
            <button 
              onClick={closeModal}
              className="text-white hover:text-[#FF0000] transition-colors p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div 
            className="relative w-full max-w-[min(90vw,calc(85vh*9/16))] aspect-[9/16] bg-black rounded-2xl overflow-hidden border-2 border-[#FF0000] shadow-[0_0_50px_rgba(255,0,0,0.3)] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {!isPlaying ? (
              <div 
                className="w-full h-full relative group cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src={selectedVideo.thumbnail} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  alt="Video Thumbnail"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#FF0000] flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.6)] group-hover:scale-110 transition-transform">
                    <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <iframe 
                src={selectedVideo.url}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            )}
          </div>
          
          <div className="mt-6 text-center pointer-events-none">
            <p className="text-[#FF0000] font-black uppercase tracking-[0.5em] text-xs animate-pulse">High Retention Content</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;