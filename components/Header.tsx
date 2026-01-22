import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-black tracking-tighter italic">
        DIVYESH<span className="text-[#FF2C2C]">KUMAR</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest text-gray-400">
        <a href="#work" className="hover:text-[#FF2C2C] transition-colors">The Work</a>
        <a href="#style" className="hover:text-[#FF2C2C] transition-colors">Style</a>
        <a href="#booking" className="hover:text-[#FF2C2C] transition-colors">Free Demo</a>
        <a href="#contact" className="hover:text-[#FF2C2C] transition-colors">Contact</a>
      </div>
      <a 
        href="#booking"
        className="bg-[#FF2C2C] text-white px-5 py-2 text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all active:scale-95 neon-border"
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Header;