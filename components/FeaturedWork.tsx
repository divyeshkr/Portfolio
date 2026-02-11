import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../data';

const FeaturedWork: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{url: string, title: string, thumbnail: string} | null>(null);
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string} | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Get specific items: 2 edits, 1 cinematography, 1 thumbnail
  const edits = CONFIG.portfolio.slice(0, 2);
  const cinema = CONFIG.cinematography?.[0];
  const thumbnail = CONFIG.thumbnails.examples[0];

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    const videoId = url.split('/').pop()?.split('?')[0];
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}autoplay=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3`;
  };

  const openVideo = (item: any) => {
    if (!item.videoUrl || item.videoUrl === '#') return;
    setIsPlaying(false);
    setSelectedVideo({ 
      url: getEmbedUrl(item.videoUrl), 
      title: item.title, 
      thumbnail: item.thumbnail 
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

        {/* Short Form Row */}
        <div className="grid grid-cols-2 gap-3 md:gap-8 mb-3 md:mb-8">
            {edits.map((item, index) => (
                <div 
                    key={item.id}
                    onClick={() => openVideo(item)}
                    className="group relative aspect-[9/16] bg-[#1A1A1A] border border-[#4A0404]/30 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#FF5F1F]/50 transition-all duration-300 cursor-pointer shadow-xl reveal opacity-0 translate-y-10"
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                     <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 md:p-6 flex flex-col justify-end">
                        <span className="text-[#FF5F1F] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-1">{item.tag}</span>
                        <h3 className="text-sm md:text-xl font-black uppercase tracking-tight leading-none mb-2 text-white">{item.title}</h3>
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

        {/* Horizontal Works Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 mb-12">
            {/* Cinematography */}
            {cinema && (
                <div 
                    onClick={() => openVideo(cinema)}
                    className="group relative aspect-video bg-[#1A1A1A] border border-[#4A0404]/30 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#FF5F1F]/50 transition-all duration-300 cursor-pointer shadow-xl reveal opacity-0 translate-y-10 delay-200"
                >
                    <img 
                        src={cinema.thumbnail} 
                        alt={cinema.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 flex flex-col justify-end">
                        <span className="text-[#FF5F1F] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-1">Cinematography</span>
                        <h3 className="text-lg md:text-xl font-black uppercase tracking-tight leading-none mb-1 text-white">{cinema.title}</h3>
                    </div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                        <div className="w-12 h-12 bg-[#FF5F1F] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,95,31,0.6)]">
                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>
                </div>
            )}

            {/* Thumbnail */}
            {thumbnail && (
                <div 
                    onClick={() => openImage(thumbnail.image, thumbnail.label)}
                    className="group relative aspect-square md:aspect-video bg-[#1A1A1A] border border-[#4A0404]/30 rounded-xl md:rounded-2xl overflow-hidden hover:border-white/50 transition-all duration-300 cursor-pointer shadow-xl reveal opacity-0 translate-y-10 delay-300"
                >
                     <img 
                        src={thumbnail.image} 
                        alt={thumbnail.type} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded border border-white/10 z-10">
                        <span className="text-[10px] font-black text-[#FF5F1F] uppercase tracking-widest">Thumbnail</span>
                    </div>
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                         <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="relative w-[min(90vw,calc(85svh*16/9))] aspect-video bg-black rounded-lg overflow-hidden border-2 border-[#FF5F1F] shadow-[0_0_60px_rgba(74,4,4,0.4)] animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
             {/* Header Overlay */}
             <div className="absolute top-4 left-4 right-4 z-50 flex justify-between items-start pointer-events-none">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[#FF5F1F] font-black uppercase text-[10px] tracking-widest truncate max-w-[70%]">
                  {selectedVideo.title}
                </span>
                <button 
                  onClick={closeModals}
                  className="pointer-events-auto p-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-[#FF2C2C] transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
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
          <div className="relative max-w-full max-h-[85vh] animate-in zoom-in-95 duration-300">
             <div className="absolute top-4 left-4 right-4 z-50 flex justify-between items-start pointer-events-none">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[#FF5F1F] font-black uppercase text-[10px] tracking-widest truncate max-w-[70%]">
                  {selectedImage.title}
                </span>
                <button 
                  onClick={closeModals}
                  className="pointer-events-auto p-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-[#FF2C2C] transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
            </div>
            
            <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[85vh] object-contain rounded border-2 border-[#FF5F1F] shadow-[0_0_40px_rgba(255,95,31,0.3)]"
                onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default FeaturedWork;