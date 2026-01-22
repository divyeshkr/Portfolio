
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-black tracking-tighter italic">
        DIVYESH<span className="text-[#FF0000]">KUMAR</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest text-gray-400">
        <a href="#work" className="hover:text-[#FF0000] transition-colors">The Work</a>
        <a href="#style" className="hover:text-[#FF0000] transition-colors">My Style</a>
        <a href="mailto:divyesh.yts@gmail.com" className="hover:text-[#FF0000] transition-colors">Contact</a>
      </div>
      <a 
        href="mailto:divyesh.yts@gmail.com"
        className="bg-[#FF0000] text-white px-5 py-2 text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all active:scale-95"
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Header;
