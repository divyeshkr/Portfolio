import React, { useState } from 'react';
import { CONFIG } from '../data';

const Skills: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{url: string, thumbnail: string} | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      return url.replace(/\/view.*$/, '/preview') + (url.includes('?') ? '&' : '?') + 'autoplay=1';
    }
    return url;
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF0000]/10 blur-[80px] rounded-full" />
            
            <div 
              onClick={openVideo}
              className="relative w-full max-w-[300px] aspect-[9/16] bg-black rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden group cursor-pointer hover:border-[#FF0000]/30 transition-all"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-2xl z-20" />
              
              <img 
                src={CONFIG.styleImage} 
                alt="Style Showcase" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-center justify-center">
                <div className="w-20 h-20 bg-[#FF0000] rounded-full flex items-center justify-center neon-border animate-pulse group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,0,0,0.4)]">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div className="w-full max-w-[min(90vw,calc(85vh*9/16))] flex justify-end mb-4">
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
        </div>
      )}
    </section>
  );
};

export default Skills;