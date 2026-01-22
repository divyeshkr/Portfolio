
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 reveal opacity-0 translate-y-10 transition-all duration-700">
          Ready to <span className="text-[#FF0000] italic">Go Viral?</span>
        </h2>
        
        <div className="mb-16 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <a 
            href="mailto:divyesh.yts@gmail.com" 
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
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
            <a href="#" className="hover:text-white transition-colors">X / Twitter</a>
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
