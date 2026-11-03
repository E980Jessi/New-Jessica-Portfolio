import React from 'react';
import { HeroCollage } from './HeroCollage';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenAssetGuide: () => void;
  onOpenAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onOpenAssetGuide,
  onOpenAbout,
}) => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Elegant Serif Typography */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center space-y-8 z-10 w-full">
            
            {/* Top Subtitle / Greeting */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-normal text-slate-800 tracking-tight">
                Hi, I am Jessica
              </h2>

              {/* Main Headline - Exactly 2 Lines on Fullscreen */}
              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[48px] xl:text-[48px] font-serif-display font-medium text-slate-950 leading-[60px] tracking-tight">
                <span 
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '48px', lineHeight: '60px' }}
                  className="block sm:whitespace-nowrap font-serif-display"
                >
                  I explore. I question.
                </span>
                <span 
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '48px', lineHeight: '60px' }}
                  className="block sm:whitespace-nowrap mt-1 sm:mt-1.5 font-serif-display"
                >
                  I design. I simplify.
                </span>
              </h1>
            </div>

            {/* Editorial Lead Paragraph */}
            <p 
              style={{ fontFamily: "'Noto Sans', sans-serif", lineHeight: '28px' }}
              className="text-base sm:text-lg text-slate-600 leading-[28px] max-w-lg font-normal font-sans"
            >
              UI/UX Designer crafting quiet digital tools, tangible interfaces, and resilient design systems.
            </p>

            {/* Micro Details & Meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 pt-1">
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Available for 2026 Collaborations
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Kathmandu, Nepal</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Human-Centered Systems</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Creative Collage (Expanded width) */}
          <div className="lg:col-span-7 xl:col-span-7 flex justify-center items-center w-full">
            <HeroCollage onOpenAssetGuide={onOpenAssetGuide} />
          </div>

        </div>
      </div>
    </section>
  );
};
