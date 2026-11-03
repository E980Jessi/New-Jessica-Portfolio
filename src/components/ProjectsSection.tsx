import React from 'react';
import { Project, PROJECTS_DATA } from '../data/portfolioData';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenAssetGuide: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  const polaroidConfigs = [
    {
      id: 'watobu',
      rotation: 'transform md:-rotate-2 hover:rotate-0',
      tapeColor: 'bg-amber-100/80 border-amber-200/60',
      handwrittenNote: 'Watobu · 2024',
      liveUrl: 'https://watobu.com/',
      category: 'Product Design',
      artGraphic: (
        <img
          src="/assets/projects/Watobu.png"
          alt="Watobu - AI SaaS Feature Moodboarding for Product Teams"
          className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500 ease-out"
          draggable={false}
        />
      ),
    },
    {
      id: 'nihongo-nepal',
      rotation: 'transform md:rotate-1 hover:rotate-0',
      tapeColor: 'bg-rose-100/80 border-rose-200/60',
      handwrittenNote: 'Nihongo Nepal · 2025',
      liveUrl: 'https://nihongonepal.com/',
      category: 'Brand & Systems',
      artGraphic: (
        <img
          src="/assets/projects/Nihongo.png"
          alt="Nihongo Nepal - Japanese Learning Platform. Built for Nepal."
          className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500 ease-out"
          draggable={false}
        />
      ),
    },
    {
      id: 'foundery-usa',
      rotation: 'transform md:rotate-2 hover:rotate-0',
      tapeColor: 'bg-indigo-100/80 border-indigo-200/60',
      handwrittenNote: 'Foundery USA · 2025',
      liveUrl: 'https://founderyusa.com/',
      category: 'Creative Tech',
      artGraphic: (
        <img
          src="/assets/projects/Foundery USA.png"
          alt="Foundery USA - Launch, Operate and Comply with your U.S. Business"
          className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500 ease-out"
          draggable={false}
        />
      ),
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-slate-950 tracking-tight leading-tight">
           Things I've Designed
          </h2>
          <p 
            style={{ lineHeight: '28px', fontWeight: 'normal' }}
            className="mt-3 text-base sm:text-lg text-slate-600 leading-[28px] font-normal"
          >
           A collection of ideas, problems, and experiences I've had the chance to bring to life.
          </p>
        </div>

        {/* 3 Polaroid Photo Art Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start">
          {featuredProjects.map((project, index) => {
            const config = polaroidConfigs[index];

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer transition-all duration-300 ease-out ${config.rotation}`}
              >
                {/* Vintage Polaroid Photo Frame */}
                <div className="relative bg-white rounded-md p-3.5 pb-8 sm:p-4 sm:pb-9 border border-[#E5E5E5] shadow-xl hover:shadow-2xl transition-all duration-300">
                  
                  {/* Translucent washi tape at top */}
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 ${config.tapeColor} border rounded-xs shadow-2xs transform -rotate-1 pointer-events-none z-20 backdrop-blur-xs opacity-90`} />

                  {/* Square Photo Viewport (1:1 Ratio) */}
                  <div className="relative w-full aspect-square rounded-xs overflow-hidden border border-slate-200/70 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
                    {config.artGraphic}

                    {/* Camera snapshot overlay on hover */}
                    <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-medium shadow-md flex items-center gap-1.5">
                        <span>Case Study Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Polaroid Chin with Caption */}
                  <div className="pt-4 flex items-center justify-between px-1">
                    <span className="font-heading italic text-xl sm:text-2xl text-slate-800 tracking-wide select-none">
                      {config.handwrittenNote}
                    </span>
                    <span className="text-[10px] font-sans font-medium text-slate-400 uppercase tracking-wider">
                      No. 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Quiet Metadata & Links Below Polaroid Frame */}
                <div className="mt-5 px-2 space-y-2">
                  <div className="flex items-center justify-end">
                    <a
                      href={config.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-800 hover:text-black hover:underline underline-offset-2 transition-colors"
                      title={`Visit ${project.title} live website`}
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>

                  <h3 
                    style={{ fontSize: '18px', lineHeight: '28px' }}
                    className="text-[18px] leading-[28px] font-semibold text-slate-900 group-hover:text-slate-700 transition-colors"
                  >
                    {project.title}
                  </h3>
                  
                  <p 
                    style={{ fontSize: '14px', lineHeight: '24px', fontWeight: 'normal' }}
                    className="text-[14px] leading-[24px] text-slate-600 line-clamp-2 font-normal"
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        style={{ fontSize: '12px', lineHeight: '14px', fontWeight: 'normal' }}
                        className="text-[12px] leading-[14px] font-normal font-sans text-slate-500 bg-white/80 border border-slate-200/80 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
