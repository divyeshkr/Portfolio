import React, { useState } from 'react';
import { CONFIG } from '../data';

const Footer: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(label);
    setTimeout(() => setCopyStatus(null), 2000);
  };

  return (
    <footer id="contact" className="bg-black pt-32 pb-16 px-6 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 reveal opacity-0 translate-y-10 transition-all duration-700">
          Ready to <span className="text-[#FF0000] italic">Go Viral?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
          {/* Email Card */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[#FF0000] transition-all group">
            <p className="text-gray-500 uppercase text-xs font-black tracking-widest mb-4">Email Me</p>
            <div className="flex flex-col items-center">
              <a href={`mailto:${CONFIG.profile.email}`} className="text-xl md:text-2xl font-black text-white hover:text-[#FF0000] transition-colors mb-4 break-all">
                {CONFIG.profile.email}
              </a>
              <button 
                onClick={() => copyToClipboard(CONFIG.profile.email, 'Email')}
                className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full hover:bg-[#FF0000] transition-all"
              >
                {copyStatus === 'Email' ? 'COPIED!' : 'COPY EMAIL'}
              </button>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[#FF0000] transition-all group">
            <p className="text-gray-500 uppercase text-xs font-black tracking-widest mb-4">Social Hub</p>
            <div className="flex flex-col items-center">
              <a 
                href={CONFIG.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-black text-white hover:text-[#FF0000] transition-colors mb-4"
              >
                {CONFIG.socials.instaHandle}
              </a>
              <button 
                onClick={() => copyToClipboard(CONFIG.socials.instaHandle, 'Insta')}
                className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full hover:bg-[#FF0000] transition-all"
              >
                {copyStatus === 'Insta' ? 'COPIED!' : 'COPY HANDLE'}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <a 
            href={`mailto:${CONFIG.profile.email}`} 
            className="inline-block px-12 py-6 bg-[#FF0000] text-white font-black text-2xl uppercase tracking-widest rounded-full neon-border hover:bg-red-700 transition-all transform hover:-translate-y-2 active:scale-95 shadow-[0_0_30px_rgba(255,0,0,0.5)]"
          >
            Let's Collaborate
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-12 text-gray-500 text-sm font-bold uppercase tracking-widest">
          <div className="mb-6 md:mb-0">
            © {new Date().getFullYear()} DIVYESH KUMAR. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex space-x-8">
            <a href={CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
        
        <p className="mt-8 text-[10px] text-white/20 tracking-[1em] uppercase">
          Precision • Impact • Retention
        </p>
      </div>
    </footer>
  );
};

export default Footer;