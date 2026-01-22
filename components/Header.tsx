import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#121212]/90 backdrop-blur-md border-b border-[#4A0404]/20 px-6 py-3 md:py-4 flex justify-between items-center">
      <div className="text-xl md:text-2xl font-black tracking-tighter italic select-none group">
        DIVYESH<span className="text-[#FF2C2C] group-hover:text-[#FF5F1F] transition-colors">CREATES</span>
      </div>
      <div className="hidden lg:flex space-x-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#EDEDED]/50">
        <a href="#work" className="hover:text-[#FF5F1F] transition-colors">The Arsenal</a>
        <a href="#style" className="hover:text-[#FF5F1F] transition-colors">Style</a>
        <a href="#direct-booking" className="hover:text-[#FF5F1F] transition-colors">Free Demo</a>
        <a href="#contact" className="hover:text-[#FF5F1F] transition-colors">Contact</a>
      </div>
      <a 
        href="#direct-booking"
        className="bg-gradient-to-br from-[#FF2C2C] to-[#FF5F1F] text-white px-6 py-2.5 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,44,44,0.3)]"
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Header;