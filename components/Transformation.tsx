import React, { useState } from 'react';
import { CONFIG } from '../data';

const Transformation: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{url: string, title: string, thumbnail: string} | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      return url.replace(/\/view.*$/, '/preview') + (url.includes('?') ? '&' : '?') + 'autoplay=1';
    }
    return url;
  };

  const openVideo = (url: string, title: string, thumbnail: string) => {
    setIsPlaying(false);
    setSelectedVideo({ url: getEmbedUrl(url), title, thumbnail });
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  return (
    <section className="py-24 px-6 bg-[#0E0E0E] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal opacity-0 translate-y-10 transition-all duration-700 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
            {CONFIG.transformation.title.split(' ')[0]} <span className="text-[#FF2C2C]">{CONFIG.transformation.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-[#EDEDED]/80 text-lg uppercase tracking-widest font-black italic">Same footage. Different results.</p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
          {/* Raw Footage Block */}
          <div className="flex flex-col items-center gap-4 group">
            <div 
              onClick={() => openVideo(CONFIG.transformation.rawVideoUrl, 'The Raw Footage', CONFIG.transformation.rawImage)}
              className="relative w-full md:w-[280px] lg:w-[320px] aspect-[9/16] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 cursor-pointer hover:border-white/20 transition-all duration-500 shadow-2xl"
            >
              <img 
                src={CONFIG.transformation.rawImage} 
                alt="Raw Footage" 
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 font-black text-[10px] uppercase tracking-[0.3em] rounded border border-white/10 text-white/50">
                The Raw
              </div>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Dull & Ignored</span>
          </div>

          <div className="flex flex-col items-center justify-center z-10 lg:rotate-0 rotate-90 py-4 lg:py-0">
            <div className="w-12 h-12 rounded-full border-2 border-[#FF2C2C] flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(255,44,44,0.4)] bg-black">
              <svg className="w-6 h-6 text-[#FF2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Viral Edit Block */}
          <div className="flex flex-col items-center gap-4 group">
            <div 
              onClick={() => openVideo(CONFIG.transformation.editedVideoUrl, 'The Viral Edit', CONFIG.transformation.editedImage)}
              className="relative w-full md:w-[280px] lg:w-[320px] aspect-[9/16] bg-[#1a1a1a] rounded-2xl overflow-hidden border-2 border-[#FF2C2C] cursor-pointer hover:shadow-[0_0_60px_rgba(255,44,44,0.2)] transition-all duration-500 shadow-[0_0_40px_rgba(255,44,44,0.1)]"
            >
              <img 
                src={CONFIG.transformation.editedImage} 
                alt="Viral Edit" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute top-6 right-6 bg-[#FF2C2C] px-4 py-2 font-black text-[10px] uppercase tracking-[0.3em] rounded shadow-[0_0_15px_rgba(255,44,44,0.5)]">
                The Viral
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#FF2C2C] flex items-center justify-center shadow-[0_0_40px_rgba(255,44,44,0.6)] group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF2C2C] neon-glow">Hooked & Shared</span>
          </div>
        </div>

        <div className="mt-20 p-8 border border-[#FF2C2C]/20 bg-[#FF2C2C]/5 rounded-3xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-400 max-w-4xl mx-auto text-center">
            <h4 className="text-[#FF2C2C] font-black uppercase tracking-[0.3em] text-xs mb-4">Retention Engineering</h4>
            <p className="text-[#EDEDED]/80 font-medium italic text-lg">"{CONFIG.transformation.description}"</p>
        </div>
      </div>

      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div className="w-full max-w-[min(90vw,calc(85vh*9/16))] flex justify-between items-center mb-4">
            <h4 className="text-[#FF2C2C] font-black uppercase tracking-widest text-sm">{selectedVideo.title}</h4>
            <button 
              onClick={closeModal}
              className="text-white hover:text-[#FF2C2C] transition-colors p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div 
            className="relative w-full max-w-[min(90vw,calc(85vh*9/16))] aspect-[9/16] bg-black rounded-2xl overflow-hidden border-2 border-[#FF2C2C] shadow-[0_0_50px_rgba(255,44,44,0.3)] animate-in zoom-in-95 duration-300"
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
                  <div className="w-24 h-24 rounded-full bg-[#FF2C2C] flex items-center justify-center shadow-[0_0_30px_rgba(255,44,44,0.6)] group-hover:scale-110 transition-transform">
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

export default Transformation;