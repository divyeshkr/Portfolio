import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONFIG } from '../data';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#121212]/90 backdrop-blur-md border-b border-[#4A0404]/20 px-6 py-3 md:py-4 flex justify-between items-center transition-all duration-300">
        <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter italic select-none group relative z-[101]" onClick={closeMenu}>
          DIVYESH<span className="text-[#FF2C2C] group-hover:text-[#FF5F1F] transition-colors">CREATES</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#EDEDED]/50">
          <Link 
            to="/" 
            className={`hover:text-[#FF5F1F] transition-colors ${location.pathname === '/' ? 'text-[#FF2C2C]' : ''}`}
          >
            Home
          </Link>

          <Link 
            to="/arsenal" 
            className={`hover:text-[#FF5F1F] transition-colors ${location.pathname === '/arsenal' ? 'text-[#FF2C2C]' : ''}`}
          >
            The Arsenal
          </Link>
          
          <Link 
              to="/services" 
              className={`hover:text-[#FF5F1F] transition-colors ${location.pathname === '/services' ? 'text-[#FF2C2C]' : ''}`}
          >
              Services & Thumbnails
          </Link>

          <Link 
              to="/about" 
              className={`hover:text-[#FF5F1F] transition-colors ${location.pathname === '/about' ? 'text-[#FF2C2C]' : ''}`}
          >
              About
          </Link>

          <Link 
            to={{ pathname: "/", hash: "#demo-request" }} 
            className="hover:text-[#FF5F1F] transition-colors"
          >
            Free Demo
          </Link>
        </div>

        {/* Desktop CTA */}
        <a 
          href={`mailto:${CONFIG.profile.email}`}
          className="hidden lg:block bg-gradient-to-br from-[#FF2C2C] to-[#FF5F1F] text-white px-6 py-2.5 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,44,44,0.3)]"
        >
          Mail Me
        </a>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden relative z-[101] p-2 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-8 h-8 flex items-center justify-center">
             {isMenuOpen ? (
                <svg className="w-8 h-8 text-[#FF2C2C] animate-in spin-in-90 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
             ) : (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
             )}
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#121212] z-[99] flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#4A0404]/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#FF5F1F]/5 blur-[100px] pointer-events-none" />

        {/* Menu Links */}
        <div className="flex flex-col items-center space-y-8 relative z-10">
          <Link 
            to="/" 
            onClick={closeMenu} 
            className={`text-3xl font-black uppercase tracking-tighter transition-colors ${location.pathname === '/' ? 'text-[#FF2C2C] italic' : 'text-white hover:text-[#FF2C2C]'}`}
          >
            Home
          </Link>

          <Link 
            to="/arsenal" 
            onClick={closeMenu} 
            className={`text-3xl font-black uppercase tracking-tighter transition-colors ${location.pathname === '/arsenal' ? 'text-[#FF2C2C] italic' : 'text-white hover:text-[#FF2C2C]'}`}
          >
            The Arsenal
          </Link>
          
          <Link 
            to="/services" 
            onClick={closeMenu} 
            className={`text-3xl font-black uppercase tracking-tighter transition-colors ${location.pathname === '/services' ? 'text-[#FF2C2C] italic' : 'text-white hover:text-[#FF2C2C]'}`}
          >
            Services
          </Link>

          <Link 
            to="/about" 
            onClick={closeMenu} 
            className={`text-3xl font-black uppercase tracking-tighter transition-colors ${location.pathname === '/about' ? 'text-[#FF2C2C] italic' : 'text-white hover:text-[#FF2C2C]'}`}
          >
            About
          </Link>
          
          <Link 
            to={{ pathname: "/", hash: "#demo-request" }}
            onClick={closeMenu} 
            className="text-3xl font-black uppercase tracking-tighter text-white hover:text-[#FF2C2C] transition-colors"
          >
            Free Demo
          </Link>
        </div>

        {/* Mobile Menu CTA */}
        <a 
          href={`mailto:${CONFIG.profile.email}`}
          className="mt-8 relative z-10 bg-gradient-to-r from-[#FF2C2C] to-[#FF5F1F] text-white px-12 py-4 text-xl font-black uppercase tracking-widest rounded-full shadow-[0_0_40px_rgba(255,44,44,0.5)] animate-pulse"
        >
          Mail Me
        </a>
      </div>
    </>
  );
};

export default Header;