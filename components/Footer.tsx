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
    <footer id="contact" className="bg-[#0E0E0E] pt-24 pb-12 px-6 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 reveal opacity-0 translate-y-10 transition-all duration-700">
          Ready to <span className="text-[#FF2C2C] italic">Go Viral?</span>
        </h2>
        <p className="text-[#EDEDED]/40 font-black uppercase tracking-widest text-[10px] md:text-xs mb-12 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            No contracts. No pressure. One free demo edit.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
          {/* Email Card */}
          <div className="p-8 bg-[#1F1F1F] border border-white/10 rounded-3xl hover:border-[#FF2C2C]/50 transition-all group shadow-xl">
            <p className="text-[#FF2C2C] uppercase text-[10px] font-black tracking-[0.3em] mb-4">Direct Channel</p>
            <div className="flex flex-col items-center">
              <a href={`mailto:${CONFIG.profile.email}`} className="text-xl md:text-2xl font-black text-[#EDEDED] hover:text-[#FF2C2C] transition-colors mb-4 break-all">
                {CONFIG.profile.email}
              </a>
              <button 
                onClick={() => copyToClipboard(CONFIG.profile.email, 'Email')}
                className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 px-4 py-2 rounded-full hover:bg-[#FF2C2C] transition-all text-[#EDEDED]/60"
              >
                {copyStatus === 'Email' ? 'COPIED!' : 'COPY EMAIL'}
              </button>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="p-8 bg-[#1F1F1F] border border-white/10 rounded-3xl hover:border-[#FF2C2C]/50 transition-all group shadow-xl">
            <p className="text-[#FF2C2C] uppercase text-[10px] font-black tracking-[0.3em] mb-4">Message Instagram</p>
            <div className="flex flex-col items-center">
              <a 
                href={CONFIG.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-black text-[#EDEDED] hover:text-[#FF2C2C] transition-colors mb-4"
              >
                {CONFIG.socials.instaHandle}
              </a>
              <button 
                onClick={() => copyToClipboard(CONFIG.socials.instaHandle, 'Insta')}
                className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 px-4 py-2 rounded-full hover:bg-[#FF2C2C] transition-all text-[#EDEDED]/60"
              >
                {copyStatus === 'Insta' ? 'COPIED!' : 'COPY HANDLE'}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <a 
            href="#demo-request" 
            className="inline-block px-12 py-6 bg-[#FF2C2C] text-white font-black text-2xl uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(255,44,44,0.4)] hover:bg-red-700 transition-all transform hover:-translate-y-2 active:scale-95 animate-cta-pulse"
          >
            Claim Free Demo Edit
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-12 text-[#EDEDED]/30 text-[10px] font-black uppercase tracking-widest">
          <div className="mb-6 md:mb-0">
            © {new Date().getFullYear()} DIVYESH CREATES. ENGINEERED FOR RETENTION.
          </div>
          
          <div className="flex space-x-8">
            <a href={CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;