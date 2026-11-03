import React, { useState, useEffect } from 'react';
import { Camera, Volume2, ExternalLink } from 'lucide-react';
import { lofiPlayer } from '../utils/audioPlayer';

interface HeroCollageProps {
  onOpenAssetGuide?: () => void;
}

export const HeroCollage: React.FC<HeroCollageProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const [showPinterestCard, setShowPinterestCard] = useState(false);
  const [isHoveringLaptop, setIsHoveringLaptop] = useState(false);
  const [isHoveringPocket, setIsHoveringPocket] = useState(false);

  const PINTEREST_URL = "https://www.pinterest.com/talktomyyyyyhand/_created/";

  // Ensure audio stops if unmounted
  useEffect(() => {
    return () => {
      lofiPlayer.pause();
    };
  }, []);

  const handleMusicEnter = () => {
    setIsPlaying(true);
    lofiPlayer.play();
  };

  const handleMusicLeave = () => {
    setIsPlaying(false);
    lofiPlayer.pause();
  };

  const handleCameraClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    lofiPlayer.playShutter();
    setIsFlashing(true);
    setTimeout(() => {
      setIsFlashing(false);
      setShowPinterestCard(true);
    }, 150);
  };

  const workItems = [
    'UI/UX & Digital Product Design',
    'SaaS & CX Flow Intelligence (Watobu)',
    'Design Systems & Token Architecture',
    'Mobile Apps & Bilingual Platforms (Nihongo Nepal)',
    'Interactive Prototyping & Micro-interactions',
    'FinTech & Onboarding Flows (Foundery USA)',
  ];

  const toolkitItems = [
    'Rhode lip tint & field notebook',
    'Retro digicam & wired earphones',
    'Embroidered craft patches & pins',
    'NewJeans playlist on repeat',
  ];

  return (
    <div className="relative w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto select-none py-2 sm:py-4">
      {/* Soft natural drop shadow beneath the composition */}
      <div className="absolute inset-x-6 bottom-4 h-24 bg-slate-400/20 blur-3xl rounded-full pointer-events-none transform -rotate-1" />

      {/* Main Composition Wrapper - Enlarged aspect ratio container */}
      <div className="relative w-full aspect-14/11 sm:aspect-4/3 flex items-center justify-center">
        
        {/* Flash overlay for Polaroid camera snap */}
        {isFlashing && (
          <div className="fixed inset-0 bg-white/85 z-50 pointer-events-none transition-opacity duration-150" />
        )}

        {/* 1. Base Book with Brass Clips (book 1.png) - Enlarged and gently drifts */}
        <div 
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="relative w-full sm:w-[98%] lg:w-full animate-slow-drift drop-shadow-2xl transition-all duration-500 font-serif-display"
        >
          <img
            src="/assets/hero/book 1.png"
            alt="Open sketchbook with brass binder clips"
            className="w-full h-auto object-contain select-none pointer-events-none"
            draggable={false}
          />

          {/* 2. Top-Right Laptop, Coffee & Notepad (laptop 1.png) - Hovered info elevated above camera with z-50 */}
          <div
            className={`absolute -top-[10%] right-[2%] w-[28%] sm:w-[27%] cursor-pointer group transition-all duration-200 ${
              isHoveringLaptop ? 'z-50' : 'z-20'
            }`}
            onMouseEnter={() => setIsHoveringLaptop(true)}
            onMouseLeave={() => setIsHoveringLaptop(false)}
          >
            <div className="relative transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">
              <img
                src="/assets/hero/laptop 1.png"
                alt="MacBook with coffee cup and notebook"
                className="w-full h-auto object-contain filter drop-shadow-md"
                draggable={false}
              />
            </div>

            {/* List of Work I Do - Rendered at z-50 strictly over the camera asset */}
            {isHoveringLaptop && (
              <div 
                className="absolute right-0 top-full mt-2 w-72 sm:w-84 bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-4 shadow-2xl z-50 text-xs animate-in fade-in zoom-in-95 pointer-events-auto"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2.5">
                  <span className="font-serif-display font-semibold text-slate-950 text-sm">
                    What I Do · Scope of Work
                  </span>
                  <span className="text-[10px] font-sans text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-semibold">
                    Jessica Dangol
                  </span>
                </div>

                <div className="space-y-1.5">
                  {workItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-700 leading-snug">
                      <span className="text-amber-500 text-xs mt-0.5">✦</span>
                      <span className="font-normal text-[11px] sm:text-xs">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-sans">
                  <span>Available for 2026 roles</span>
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            )}
          </div>

          {/* 3. Top-Left Music Widget (music 1.png) - Plays melody ONLY while hovering */}
          <div
            onMouseEnter={handleMusicEnter}
            onMouseLeave={handleMusicLeave}
            className="absolute -top-[8%] left-[6%] sm:left-[8%] w-[36%] sm:w-[35%] z-20 cursor-pointer group transition-all duration-300 hover:scale-105 hover:rotate-1"
          >
            <div className="relative">
              <img
                src="/assets/hero/music 1.png"
                alt="NewJeans Attention music player"
                className="w-full h-auto object-contain filter drop-shadow-lg"
                draggable={false}
              />
              
              {/* Active glow and playing badge ONLY while hovering */}
              {isPlaying && (
                <>
                  <div className="absolute -inset-1 rounded-2xl bg-amber-400/25 blur-xs -z-10 animate-pulse pointer-events-none" />
                  <div className="absolute -bottom-2 right-2 bg-stone-900/90 backdrop-blur-xs text-white text-[9px] font-sans px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs pointer-events-none animate-in fade-in">
                    <Volume2 className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
                    <span>Attention · Playing</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 4. Center Polaroid Camera (camera 1.png) - Pinterest link comes AFTER clicking */}
          <div
            onClick={handleCameraClick}
            className="absolute top-[13%] right-[17%] sm:right-[18%] w-[40%] sm:w-[38%] z-20 cursor-pointer group transition-transform duration-300 hover:scale-105 active:scale-95"
            title="Click Polaroid camera to view Jessica's Pinterest"
          >
            <div className="relative">
              <img
                src="/assets/hero/camera 1.png"
                alt="Vintage Polaroid OneStep 2 Camera"
                className="w-full h-auto object-contain filter drop-shadow-xl"
                draggable={false}
              />

              {/* Shutter click indicator */}
              <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[9px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm opacity-80 group-hover:opacity-100 transition-opacity font-sans">
                <Camera className="w-2.5 h-2.5 text-amber-400" />
                <span>Click snap</span>
              </div>
            </div>

            {/* Pinterest Link Card appears AFTER clicking the camera */}
            {showPinterestCard && (
              <div 
                onClick={(e) => e.stopPropagation()}
                className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 sm:w-52 bg-white p-2.5 pb-3 rounded-xl shadow-2xl border border-slate-200 transform rotate-2 z-40 transition-all duration-300 animate-in fade-in zoom-in-95"
              >
                <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider font-sans">
                    Pinterest
                  </span>
                  <button 
                    onClick={() => setShowPinterestCard(false)} 
                    className="text-slate-400 hover:text-slate-700 text-xs p-0.5 cursor-pointer font-sans"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <a
                  href={PINTEREST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full aspect-square bg-[#E60023] rounded-lg p-3 text-white relative overflow-hidden shadow-inner text-center hover:opacity-95 transition-opacity"
                >
                  <div className="h-full flex flex-col items-center justify-center">
                    <span className="text-xl font-bold font-serif-display tracking-tight">Pinterest</span>
                    <span className="text-[10px] font-sans tracking-wider mt-1 opacity-90">@talktomyyyyyhand</span>
                    <div className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-medium bg-white/20 group-hover:bg-white/30 px-2.5 py-1 rounded-full transition-colors font-sans">
                      <span>View Moodboards</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </a>

                <div className="mt-2 text-center">
                  <a
                    href={PINTEREST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans text-slate-800 hover:text-rose-600 inline-flex items-center gap-1 font-semibold transition-colors"
                  >
                    <span>Jessica's Moodboards ↗</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 5. Bottom-Left Denim Pocket with Accessories (pocket 1.png) - Show list only on hover */}
          <div
            onMouseEnter={() => setIsHoveringPocket(true)}
            onMouseLeave={() => setIsHoveringPocket(false)}
            className="absolute bottom-[2%] left-[4%] sm:left-[5%] w-[25%] sm:w-[24%] z-20 cursor-pointer group transition-transform duration-300 hover:scale-105 hover:-rotate-2"
          >
            <div className="relative">
              <img
                src="/assets/hero/pocket 1.png"
                alt="Denim pocket with embroidered floral J and accessories"
                className="w-full h-auto object-contain filter drop-shadow-xl"
                draggable={false}
              />
            </div>

            {/* Everyday Design Toolkit List - Visible ONLY while hovering */}
            {isHoveringPocket && (
              <div 
                className="absolute left-0 bottom-full mb-3 w-56 sm:w-60 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3.5 shadow-2xl z-40 text-xs animate-in fade-in pointer-events-none font-sans"
              >
                <div className="font-semibold text-slate-900 mb-1 flex items-center justify-between font-sans">
                  <span>Everyday Design Toolkit</span>
                  <span className="text-[10px] font-sans text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-semibold">
                    Pocket
                  </span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed mb-2 font-light">
                  What Jessica carries to explore and simplify:
                </p>
                <div className="space-y-1 text-[11px] text-slate-700">
                  {toolkitItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="text-amber-500 font-bold">✦</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
