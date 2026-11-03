import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-14 lg:p-16 border border-slate-200/80 shadow-xs text-center flex flex-col items-center">
          
          {/* Header & Subtitle Center Aligned */}
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 block">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-slate-950 tracking-tight leading-tight">
              Let's make something meaningful together.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal max-w-xl mx-auto font-sans pt-1">
             Have an interesting project, an exciting opportunity, or just want to talk about design and technology? I'd love to hear from you!
             </p>
          </div>

          {/* Let's Talk Button (Identical to Download CV button) */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:jcka.dangol@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-slate-900 bg-[#FEE282] hover:bg-[#FCD34D] transition-all duration-200 shadow-xs hover:shadow-sm cursor-pointer active:scale-98"
            >
              <Mail className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Location */}
          <div className="pt-6 text-xs text-slate-500 font-sans">
            <span>Balkhu, Kathmandu-44600, Nepal</span>
          </div>

          {/* Social Media Channels */}
          <div className="pt-6 mt-6 border-t border-slate-100 w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-slate-700 font-sans">
            <a
              href="https://www.linkedin.com/in/jessica-dangol"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-950 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-sky-600" />
              <span>LinkedIn</span>
              <span className="text-slate-400 text-xs">↗</span>
            </a>

            <a
              href="https://www.instagram.com/jc_tagram/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-rose-600 transition-colors"
            >
              <Instagram className="w-4 h-4 text-rose-500" />
              <span>Instagram</span>
              <span className="text-slate-400 text-xs">↗</span>
            </a>

            <a
              href="https://www.pinterest.com/talktomyyyyyhand/_created/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-rose-600 transition-colors"
            >
              <span>Pinterest</span>
              <span className="text-slate-400 text-xs">↗</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
