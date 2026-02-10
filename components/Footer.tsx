import React from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../data';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-8 px-6 border-t border-[#1F1F1F] text-[#EDEDED]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
            
            {/* Brand Column */}
            <div className="space-y-6">
                <Link to="/" className="text-3xl font-black tracking-tighter italic block group w-fit">
                    DIVYESH<span className="text-[#FF2C2C] group-hover:text-[#FF5F1F] transition-colors">CREATES.</span>
                </Link>
                <p className="text-[#EDEDED]/50 text-sm leading-relaxed max-w-xs">
                    Professional video editor specializing in high-retention content that drives engagement, algorithms, and results.
                </p>
                <div className="pt-4">
                    <a 
                        href={`mailto:${CONFIG.profile.email}`}
                        className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#FF5F1F] hover:text-white transition-colors"
                    >
                        <span>Let's Talk Business</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Quick Links</h4>
                <ul className="space-y-4 text-sm text-[#EDEDED]/60 font-medium">
                    <li><Link to="/" className="hover:text-[#FF2C2C] transition-colors">Home</Link></li>
                    <li><Link to="/arsenal" className="hover:text-[#FF2C2C] transition-colors">The Arsenal</Link></li>
                    <li><Link to="/about" className="hover:text-[#FF2C2C] transition-colors">About</Link></li>
                    <li><Link to="/services" className="hover:text-[#FF2C2C] transition-colors">Services</Link></li>
                </ul>
            </div>

            {/* Services */}
            <div>
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Services</h4>
                <ul className="space-y-4 text-sm text-[#EDEDED]/60 font-medium">
                    <li><Link to="/services" className="hover:text-[#FF2C2C] transition-colors">Short-Form Editing</Link></li>
                    <li><Link to="/services" className="hover:text-[#FF2C2C] transition-colors">Motion Graphics</Link></li>
                    <li><Link to="/services" className="hover:text-[#FF2C2C] transition-colors">Thumbnail Design</Link></li>
                    <li><Link to="/services" className="hover:text-[#FF2C2C] transition-colors">Strategy Consulting</Link></li>
                </ul>
            </div>

            {/* Connect */}
            <div>
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Connect</h4>
                <ul className="space-y-6">
                    <li>
                        <a href={`mailto:${CONFIG.profile.email}`} className="flex items-center space-x-3 text-[#EDEDED]/60 hover:text-white transition-colors group">
                            <svg className="w-5 h-5 text-[#FF2C2C] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            <span className="text-sm">{CONFIG.profile.email}</span>
                        </a>
                    </li>
                    <li className="flex items-center space-x-3">
                         {/* Social Icons */}
                         <a 
                            href={CONFIG.socials.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-[#EDEDED]/60 hover:bg-[#FF2C2C] hover:text-white transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                         <a 
                            href={`mailto:${CONFIG.profile.email}`} 
                            className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-[#EDEDED]/60 hover:bg-[#FF2C2C] hover:text-white transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1F1F1F] pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-[#EDEDED]/30 text-xs font-medium mb-4 md:mb-0">
                © {new Date().getFullYear()} Divyesh Creates. All rights reserved.
            </p>
            <div className="flex space-x-8 text-xs text-[#EDEDED]/40 font-medium tracking-wide">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;