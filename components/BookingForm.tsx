import React from 'react';
import { CONFIG } from '../data';

const BookingForm: React.FC = () => {
  return (
    <section id="booking" className="py-24 px-6 bg-[#121212] relative">
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] border border-white/5 rounded-[2.5rem] p-10 md:p-16 reveal opacity-0 translate-y-10 transition-all duration-700 shadow-2xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#FF2C2C] text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 neon-border">
            Limited Time Offer
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            Book Your <span className="text-[#FF2C2C]">Free Demo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            I'll edit one video for you absolutely free. See the difference in your retention and results before spending a dime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded-full bg-[#FF2C2C]/10 flex items-center justify-center border border-[#FF2C2C]/30 flex-shrink-0">
              <span className="text-[#FF2C2C] font-black text-xs">1</span>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-sm mb-1">Fill the Form</h4>
              <p className="text-gray-500 text-xs">Share your vision, raw clips, or script ideas.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded-full bg-[#FF2C2C]/10 flex items-center justify-center border border-[#FF2C2C]/30 flex-shrink-0">
              <span className="text-[#FF2C2C] font-black text-xs">2</span>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-sm mb-1">Get Your Edit</h4>
              <p className="text-gray-500 text-xs">I'll deliver a viral-ready short within 48 hours.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <a 
            href={CONFIG.socials.bookingLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto px-16 py-6 bg-[#FF2C2C] text-white font-black text-xl uppercase tracking-widest rounded-full hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(255,44,44,0.4)] text-center"
          >
            Submit My Request
          </a>
          <p className="mt-8 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
            Absolutly No Commitment Required • 100% Risk Free
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;