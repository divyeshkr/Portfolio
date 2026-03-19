import React, { useState } from 'react';

const DhruvRatheeHighlight: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-[#121212] border-t border-[#4A0404]/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4">
            Mastering <span className="text-yellow-400">Dhruv Rathee</span> Style
          </h2>
          <p className="text-[#EDEDED]/60 text-sm md:text-lg font-medium max-w-2xl mx-auto">
            Deep research, complex green screen, and cinematic storytelling. I've mastered the art of high-production documentary style editing.
          </p>
        </div>

        <div className="relative aspect-video bg-[#1A1A1A] rounded-2xl overflow-hidden border-2 border-yellow-400/30 shadow-[0_0_50px_rgba(250,204,21,0.15)] reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 group">
          {!isPlaying ? (
            <div 
              className="absolute inset-0 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <img 
                src="https://img.youtube.com/vi/yfnQa_Dh-VY/maxresdefault.jpg" 
                alt="Dhruv Rathee Style Draft" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(250,204,21,0.6)] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 md:w-14 md:h-14 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-yellow-400 font-black uppercase tracking-widest text-xs">New Addition</span>
                  <h3 className="text-white font-black uppercase text-xl md:text-2xl">Dhruv Rathee Style Draft</h3>
                </div>
              </div>
            </div>
          ) : (
            <iframe 
              src="https://www.youtube.com/embed/yfnQa_Dh-VY?autoplay=1" 
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default DhruvRatheeHighlight;
