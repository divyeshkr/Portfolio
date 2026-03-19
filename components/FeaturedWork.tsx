import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { CONFIG } from '../data';

const FeaturedWork: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{url: string, title: string, thumbnail: string, isVertical: boolean} | null>(null);
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string} | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Get specific items: 3 random edits for laptop view (smaller), 1 cinematography, 1 random thumbnail
  // Use state to hold the randomized items so they don't change on re-renders
  const [randomizedContent] = useState(() => {
    const filteredPortfolio = CONFIG.portfolio.filter(item => item.tag !== 'Dhruv Rathee Style');
    const shuffledEdits = [...filteredPortfolio].sort(() => 0.5 - Math.random()).slice(0, 3);
    const shuffledThumbnails = [...CONFIG.thumbnails.examples].sort(() => 0.5 - Math.random());
    return {
      edits: shuffledEdits,
      thumbnail: shuffledThumbnails[0]
    };
  });

  const edits = randomizedContent.edits;
  const featuredLongForm = CONFIG.longForm?.[0];
  const cinema = CONFIG.cinematography?.[0];
  const thumbnail = randomizedContent.thumbnail;

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    const videoId = url.split('/').pop()?.split('?')[0];
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}autoplay=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3`;
  };

  const openVideo = (item: any, isVertical: boolean) => {
    if (!item.videoUrl || item.videoUrl === '#') return;
    setIsPlaying(false);
    setSelectedVideo({ 
      url: getEmbedUrl(item.videoUrl), 
      title: item.title, 
      thumbnail: item.thumbnail,
      isVertical
    });
  };

  const openImage = (url: string, title: string) => {
    setSelectedImage({ url, title });
  };

  const closeModals = () => {
    setSelectedVideo(null);
    setSelectedImage(null);
    setIsPlaying(false);
  };

  return (
    <section id="work" className="py-12 md:py-24 px-4 md:px-6 bg-[#121212] relative overflow-hidden scroll-mt-32 border-t border-[#4A0404]/30">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8 md:mb-16 text-center reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-4">
            The <span className="text-[#FF2C2C]">Arsenal</span>
          </h2>
          <p className="text-[#EDEDED]/40 uppercase tracking-widest font-black text-[10px] md:text-sm">Engineered for <span className="text-[#FF5F1F]">Maximum Retention</span></p>
        </div>

        {/* Short Form Row - 3 Items, constrained width on desktop for smaller look */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-20">
            <div className="grid grid-cols-3 gap-2 md:gap-6">
                {edits.map((item, index) => (
                    <div 
                        key={item.id}
                        onClick={() => openVideo(item, true)}
                        className={`group relative aspect-[9/16] bg-[#1A1A1A] border border-[#4A0404]/30 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#FF5F1F]/50 transition-all duration-300 cursor-pointer shadow-xl reveal opacity-0 translate-y-10`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <img 
                            src={item.thumbnail} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 md:p-6 flex flex-col justify-end">
                            <span className="text-[#FF5F1F] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-1">{item.tag}</span>
                            <h3 className="text-sm md:text-lg font-black uppercase tracking-tight leading-none mb-2 text-white">{item.title}</h3>
                        </div>
                        {/* Play Icon */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                            <div className="w-12 h-12 bg-[#FF2C2C] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,44,44,0.6)]">
                                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Horizontal Works - Stacked on Desktop for impact */}
        <div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-16 mb-12">
            {/* Cinematography */}
            {cinema && (
                <div 
                    onClick={() => openVideo(cinema, false)}
                    className="group relative aspect-video bg-[#1A1A1A] border border-[#4A0404]/30 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#FF5F1F]/50 transition-all duration-300 cursor-pointer shadow-xl reveal opacity-0 translate-y-10 delay-200"
                >
                    <img 
                        src={cinema.thumbnail} 
                        alt={cinema.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 md:p-8 flex flex-col justify-end">
                        <span className="text-[#FF5F1F] text-[8px] md:text-xs font-black uppercase tracking-[0.2em] mb-2">Cinematography</span>
                        <h3 className="text-lg md:text-3xl font-black uppercase tracking-tight leading-none mb-2 text-white">{cinema.title}</h3>
                    </div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FF5F1F] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,95,31,0.6)]">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>
                </div>
            )}

            {/* Thumbnail */}
            {thumbnail && (
                <div 
                    onClick={() => openImage(thumbnail.image, thumbnail.label)}
                    className="group relative aspect-video bg-[#1A1A1A] border border-[#4A0404]/30 rounded-xl md:rounded-2xl overflow-hidden hover:border-white/50 transition-all duration-300 cursor-pointer shadow-xl reveal opacity-0 translate-y-10 delay-300"
                >
                     <img 
                        src={thumbnail.image} 
                        alt={thumbnail.type} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-3 left-3 md:top-6 md:left-6 bg-black/80 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded border border-white/10 z-10">
                        <span className="text-[10px] md:text-xs font-black text-[#FF5F1F] uppercase tracking-widest">Thumbnail Design</span>
                    </div>
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                         <svg className="w-10 h-10 md:w-16 md:h-16 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                         </svg>
                    </div>
                </div>
            )}
        </div>

        {/* See More Button */}
        <div className="text-center reveal opacity-0 translate-y-10 transition-all duration-700 delay-400">
             <Link 
                to="/arsenal" 
                className="inline-block px-12 py-4 border-2 border-[#FF5F1F] text-[#EDEDED] font-black uppercase tracking-widest rounded-full hover:bg-[#FF5F1F] hover:text-white transition-all shadow-[0_0_20px_rgba(255,95,31,0.2)] hover:shadow-[0_0_40px_rgba(255,95,31,0.5)]"
            >
                View Full Arsenal
            </Link>
        </div>
      </div>

        {/* Video Modal */}
        {selectedVideo && (
        <div 
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeModals}
        >
          <div 
            className={`relative bg-black rounded-lg overflow-hidden border-2 border-[#FF5F1F] shadow-[0_0_60px_rgba(74,4,4,0.4)] animate-in zoom-in-95 duration-300 
                ${selectedVideo.isVertical 
                    ? 'w-[min(80vw,400px)] aspect-[9/16] max-h-[80vh]' 
                    : 'w-[min(85vw,800px)] aspect-video max-h-[65vh]'
                }`} 
            onClick={(e) => e.stopPropagation()}
          >
             {/* Header Overlay */}
             <div className="absolute top-4 left-4 right-4 z-[100] flex justify-between items-center pointer-events-none">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[#FF5F1F] font-black uppercase text-[10px] tracking-widest truncate max-w-[60%]">
                  {selectedVideo.title}
                </span>

                <button 
                  onClick={closeModals}
                  className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-[#FF2C2C] text-white rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl hover:scale-105 transition-all"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
            </div>
            {!isPlaying ? (
              <div className="w-full h-full group cursor-pointer relative" onClick={() => setIsPlaying(true)}>
                <img src={selectedVideo.thumbnail} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Thumbnail"/>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-75 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF2C2C] to-[#FF5F1F] flex items-center justify-center shadow-[0_0_30px_rgba(255,44,44,0.6)]">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
            ) : (
              <iframe src={selectedVideo.url} className="absolute inset-0 w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            )}
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeModals}
        >
          <div className="relative max-w-[85vw] max-h-[80vh] animate-in zoom-in-95 duration-300">
             <div className="absolute top-4 left-4 right-4 z-[100] flex justify-between items-center pointer-events-none">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[#FF5F1F] font-black uppercase text-[10px] tracking-widest truncate max-w-[60%]">
                  {selectedImage.title}
                </span>

                <button 
                  onClick={closeModals}
                  className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-[#FF2C2C] text-white rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl hover:scale-105 transition-all"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
            </div>
            
            <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[80vh] object-contain rounded border-2 border-[#FF5F1F] shadow-[0_0_40px_rgba(255,95,31,0.3)]"
                onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default FeaturedWork;