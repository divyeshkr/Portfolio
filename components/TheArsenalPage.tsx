import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CONFIG } from '../data';

type Tab = 'all' | 'edits' | 'cinematography' | 'thumbnails' | 'longform';

const TheArsenalPage: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<Tab>('all');
  const [selectedVideo, setSelectedVideo] = useState<{url: string, title: string, thumbnail: string, proof?: string, isVertical: boolean} | null>(null);
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string} | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle URL query parameters for tab selection
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    if (tabParam && ['all', 'edits', 'cinematography', 'thumbnails', 'longform'].includes(tabParam)) {
      setActiveTab(tabParam as Tab);
    }
  }, [location.search]);

  // Intersection Observer for animations
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
  }, [activeTab]);

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    const videoId = url.split('/').pop()?.split('?')[0];
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}autoplay=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3`;
  };

  const openVideo = (item: any, isVertical: boolean) => {
    if (item.videoUrl === '#' || !item.videoUrl) return;
    setIsPlaying(false);
    setSelectedVideo({ 
        url: getEmbedUrl(item.videoUrl), 
        title: item.title, 
        thumbnail: item.thumbnail,
        proof: item.proof || item.tag,
        isVertical
    });
  };

  const openImage = (image: string, title: string) => {
    setSelectedImage({ url: image, title });
  };

  const closeModals = () => {
    setSelectedVideo(null);
    setSelectedImage(null);
    setIsPlaying(false);
  };

  const switchToTab = (tab: Tab) => {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#121212] pt-24 pb-24 relative overflow-hidden">
        {/* Background FX */}
        <div className="fixed top-20 left-0 w-[400px] h-[400px] bg-[#FF2C2C]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-[#FF5F1F]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Header */}
            <div className="text-center mb-12 md:mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
                <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-4">
                    The <span className="text-[#FF2C2C]">Arsenal</span>
                </h1>
                <p className="text-[#EDEDED]/60 text-sm md:text-lg uppercase tracking-widest font-black">
                    Evidence of <span className="text-[#FF5F1F]">Retention</span> Mastery
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
                {(['all', 'edits', 'longform', 'cinematography', 'thumbnails'] as Tab[]).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-3 md:px-10 md:py-4 rounded-full font-black uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all duration-300 border-2 ${
                            activeTab === tab 
                                ? 'bg-[#FF2C2C] border-[#FF2C2C] text-white shadow-[0_0_20px_rgba(255,44,44,0.4)] scale-105' 
                                : 'bg-transparent border-[#4A0404] text-[#EDEDED]/50 hover:border-[#FF5F1F] hover:text-[#FF5F1F]'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Grid */}
            <div className="space-y-24">
                
                {/* Short Form Videos Section (Edits) */}
                {(activeTab === 'all' || activeTab === 'edits') && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {activeTab === 'all' && (
                            <h3 className="text-2xl font-black text-[#EDEDED] uppercase mb-8 border-l-4 border-[#FF2C2C] pl-4">
                                Short Form Edits
                            </h3>
                        )}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                            {CONFIG.portfolio
                                .slice(0, activeTab === 'all' ? 4 : undefined)
                                .map((item, index) => (
                                <div 
                                    key={item.id} 
                                    onClick={() => openVideo(item, true)}
                                    className="group relative aspect-[9/16] bg-[#1A1A1A] border border-[#4A0404]/30 rounded-xl overflow-hidden hover:border-[#FF5F1F]/50 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[0_20px_40px_rgba(255,44,44,0.1)] reveal opacity-0 translate-y-10"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <img 
                                        src={item.thumbnail} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 flex flex-col justify-end">
                                        <span className="text-[#FF5F1F] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-1">{item.tag}</span>
                                        <h3 className="text-sm md:text-lg font-black uppercase tracking-tight leading-none mb-2 text-white">{item.title}</h3>
                                        <div className="inline-block bg-[#4A0404]/60 backdrop-blur-md px-2 py-1 rounded border border-[#FF2C2C]/20 w-fit">
                                            <span className="text-[8px] font-black text-[#EDEDED] uppercase">{item.proof}</span>
                                        </div>
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
                        {activeTab === 'all' && (
                            <div className="mt-8 text-center">
                                <button 
                                    onClick={() => switchToTab('edits')}
                                    className="text-[#FF5F1F] font-black uppercase tracking-widest text-xs border-b border-[#FF5F1F] pb-1 hover:text-white hover:border-white transition-all hover:pb-2"
                                >
                                    See More Edits
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Long Form Section */}
                {(activeTab === 'all' || activeTab === 'longform') && CONFIG.longForm && CONFIG.longForm.length > 0 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {activeTab === 'all' && (
                            <h3 className="text-2xl font-black text-[#EDEDED] uppercase mb-8 border-l-4 border-[#FF2C2C] pl-4">
                                Long Form
                            </h3>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {CONFIG.longForm.map((item, index) => (
                                <div 
                                    key={item.id} 
                                    onClick={() => openVideo(item, false)}
                                    className="group relative aspect-video bg-[#1A1A1A] border border-[#4A0404]/30 rounded-xl overflow-hidden hover:border-[#FF5F1F]/50 transition-all duration-300 cursor-pointer shadow-xl reveal opacity-0 translate-y-10"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <img 
                                        src={item.thumbnail} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 flex flex-col justify-end">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#FF5F1F]">
                                                {item.tag}
                                            </span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-black uppercase tracking-tight leading-none mb-1 text-white">{item.title}</h3>
                                    </div>
                                    {/* Play Icon */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-[#FF5F1F] text-white">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {activeTab === 'all' && (
                            <div className="mt-8 text-center">
                                <button 
                                    onClick={() => switchToTab('longform')}
                                    className="text-[#FF5F1F] font-black uppercase tracking-widest text-xs border-b border-[#FF5F1F] pb-1 hover:text-white hover:border-white transition-all hover:pb-2"
                                >
                                    See More Long Form
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Cinematography Section */}
                {(activeTab === 'all' || activeTab === 'cinematography') && CONFIG.cinematography && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {activeTab === 'all' && (
                            <h3 className="text-2xl font-black text-[#EDEDED] uppercase mb-8 border-l-4 border-[#FF5F1F] pl-4">
                                Cinematography
                            </h3>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {CONFIG.cinematography
                                .slice(0, activeTab === 'all' ? 2 : undefined)
                                .map((item, index) => (
                                <div 
                                    key={item.id} 
                                    onClick={() => openVideo(item, false)}
                                    className={`group relative aspect-video bg-[#1A1A1A] border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer shadow-xl reveal opacity-0 translate-y-10 
                                      ${item.tag === 'Award Winning' 
                                        ? 'border-[#FFD700] hover:border-[#FFD700] hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]' 
                                        : 'border-[#4A0404]/30 hover:border-[#FF5F1F]/50 hover:shadow-[0_20px_40px_rgba(255,44,44,0.1)]'
                                      }`}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <img 
                                        src={item.thumbnail} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 flex flex-col justify-end">
                                        <div className="flex items-center gap-2 mb-1">
                                          <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] ${item.tag === 'Award Winning' ? 'text-[#FFD700]' : 'text-[#FF5F1F]'}`}>
                                            {item.tag}
                                          </span>
                                          {item.tag === 'Award Winning' && (
                                            <svg className="w-3 h-3 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                                              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.699-3.181a1 1 0 011.827.954L17.144 7.047l3.658.915a1 1 0 01.597 1.838l-2.73 2.502 1.096 3.657a1 1 0 01-1.579 1.523l-3.328-1.75-3.328 1.75a1 1 0 01-1.579-1.523l1.096-3.657-2.73-2.502a1 1 0 01.597-1.838l3.658-.915L7.52 3.774a1 1 0 011.827-.954L11.046 6.002V3a1 1 0 011-1zM9 13a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                          )}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-black uppercase tracking-tight leading-none mb-1 text-white">{item.title}</h3>
                                    </div>
                                    {/* Play Icon */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${item.tag === 'Award Winning' ? 'bg-[#FFD700] text-black' : 'bg-[#FF5F1F] text-white'}`}>
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {activeTab === 'all' && (
                            <div className="mt-8 text-center">
                                <button 
                                    onClick={() => switchToTab('cinematography')}
                                    className="text-[#FF5F1F] font-black uppercase tracking-widest text-xs border-b border-[#FF5F1F] pb-1 hover:text-white hover:border-white transition-all hover:pb-2"
                                >
                                    See More Cinematography
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Thumbnails Section */}
                {(activeTab === 'all' || activeTab === 'thumbnails') && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {activeTab === 'all' && (
                            <h3 className="text-2xl font-black text-[#EDEDED] uppercase mb-8 border-l-4 border-white pl-4">
                                High CTR Thumbnails
                            </h3>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
                            {CONFIG.thumbnails.examples
                                .slice(0, activeTab === 'all' ? 2 : undefined)
                                .map((thumb, idx) => (
                                <div 
                                    key={idx} 
                                    onClick={() => openImage(thumb.image, thumb.label)}
                                    className="group relative aspect-video bg-[#1A1A1A] border border-[#4A0404]/30 rounded-xl overflow-hidden hover:border-[#FF5F1F] transition-all duration-300 cursor-pointer shadow-xl reveal opacity-0 translate-y-10"
                                    style={{ transitionDelay: `${idx * 50}ms` }}
                                >
                                    <img 
                                        src={thumb.image} 
                                        alt={thumb.type} 
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                                    />
                                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded border border-white/10 z-10">
                                        <span className="text-[8px] md:text-[10px] font-black text-[#FF5F1F] uppercase tracking-widest">{thumb.type}</span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                         <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                         </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {activeTab === 'all' && (
                            <div className="mt-8 text-center">
                                <button 
                                    onClick={() => switchToTab('thumbnails')}
                                    className="text-[#FF5F1F] font-black uppercase tracking-widest text-xs border-b border-[#FF5F1F] pb-1 hover:text-white hover:border-white transition-all hover:pb-2"
                                >
                                    See More Thumbnails
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* CTA */}
            <div className="mt-24 text-center reveal opacity-0 translate-y-10 transition-all duration-700">
                <p className="text-[#EDEDED]/50 uppercase tracking-widest font-black text-xs mb-6"> seen enough? </p>
                <a 
                    href="/#demo-request" 
                    className="inline-block px-12 py-5 bg-gradient-to-r from-[#FF2C2C] to-[#FF5F1F] text-white font-black uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(255,44,44,0.4)] hover:scale-105 transition-all"
                >
                    Get Your Free Edit
                </a>
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
                    ? 'w-[min(85vw,calc(80svh*9/16))] aspect-[9/16]' 
                    : 'w-[min(85vw,calc(80svh*16/9))] aspect-video'
                }`}
            onClick={(e) => e.stopPropagation()}
          >
            
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
          <div className="relative max-w-[85vw] max-h-[85vh] animate-in zoom-in-95 duration-300">
             {/* Header Overlay */}
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

    </div>
  );
};

export default TheArsenalPage;