import React from 'react';
import { Compass, HelpCircle, Palette, Minimize2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenCV?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const philosophyPillars = [
    {
      title: 'Explore',
      tagline: 'Wandering without preconceptions',
      description: 'Before jumping into solutions, I immerse myself in user contexts, physical artifacts, cross-disciplinary analogies, and fringe behaviors to uncover true latent needs.',
      icon: Compass,
      color: 'bg-sky-50 text-sky-700 border-sky-100',
    },
    {
      title: 'Question',
      tagline: 'Challenging established defaults',
      description: 'Why has this pattern existed for a decade? Who does it exclude? I interrogate legacy paradigms to eliminate friction disguised as convention.',
      icon: HelpCircle,
      color: 'bg-amber-50 text-amber-700 border-amber-100',
    },
    {
      title: 'Design',
      tagline: 'Crafting with obsessive rigor',
      description: 'Balancing typographic nuance, spatial rhythm, token systems, and tactile haptic affordances into interfaces that feel both poetic and dependable.',
      icon: Palette,
      color: 'bg-rose-50 text-rose-700 border-rose-100',
    },
    {
      title: 'Simplify',
      tagline: 'Subtracting until only essence remains',
      description: 'True elegance is reached not when there is nothing left to add, but when nothing can be removed without collapsing the utility and joy.',
      icon: Minimize2,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Two-Column About Story: Left Column Image, Right Column Story Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Aboutme.png retro camera graphic, center aligned */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none flex justify-center items-center">
              {/* Soft background glow */}
              <div className="absolute inset-0 bg-amber-200/20 rounded-full blur-3xl pointer-events-none transform -rotate-3" />
              
              <div className="relative transform hover:scale-[1.02] hover:-rotate-1 transition-transform duration-500 ease-out drop-shadow-2xl">
                <img
                  src="/assets/Aboutme.png"
                  alt="Jessica Dangol - Retro camera with flower and stickers"
                  className="w-full h-auto object-contain select-none filter drop-shadow-xl"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Personal Story Text */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-serif-display font-medium text-slate-950 tracking-tight leading-tight">
              Get to Know Me
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                I started my journey in Computer Engineering, where I developed an interest in technology. However, I soon realized I was more fascinated by the experiences behind it than the code itself. This curiosity led me to UI/UX Design, where creativity, technology, and problem-solving come together.
              </p>
              <p>
                Since then, I've been exploring product design through user research, understanding behavior, designing intuitive interfaces, and simplifying complex problems. I'm also exploring AI and emerging technologies to understand how they can shape better digital experiences.
              </p>
              <p>
                For me, design isn't just about creating beautiful interfaces; it's about making technology work better for people. ✨
              </p>
            </div>
          </div>

        </div>

        {/* The 4 Ethos Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-slate-200/70 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${pillar.color} border flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif-display font-semibold text-slate-900 mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mb-3">
                    {pillar.tagline}
                  </div>
                  <p 
                    style={{ lineHeight: '24px', fontWeight: 'normal' }}
                    className="text-xs sm:text-sm text-slate-600 leading-[24px] font-normal"
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
