import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ArrowRight, ExternalLink, Check, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-xs font-sans font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-sans">·</span>
            <span className="text-xs text-slate-500 font-sans">{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold transition-colors shadow-2xs"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-10">
          
          {/* Header Title & Subtitle */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-slate-950">
              {project.title}
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Banner Preview Area */}
          {project.coverImage ? (
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-slate-950">
              <div className="relative aspect-16/9 sm:aspect-2/1 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-sans uppercase tracking-widest text-slate-600">
                  {project.client} · Case Study Spec
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 font-medium text-slate-800">
                  Role: {project.role}
                </span>
              </div>
            </div>
          ) : (
            <div 
              className="w-full rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-inner flex flex-col justify-between min-h-[220px]"
              style={{ backgroundColor: project.coverColor }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans uppercase tracking-widest text-slate-600">
                  {project.client} · Case Study Spec
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-xs font-medium text-slate-800 shadow-2xs">
                  Role: {project.role}
                </span>
              </div>
              <div className="my-6">
                <h3 className="text-2xl font-serif-display font-semibold text-slate-900 max-w-xl">
                  "{project.description}"
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/90 text-slate-700 font-medium shadow-2xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                The Core Challenge
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                The Design Solution
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Full Process Overview */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h4 className="text-base font-serif-display font-semibold text-slate-900">
              Process &amp; System Execution
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.fullOverview}
            </p>
            <div className="p-4 bg-sky-50/70 border border-sky-100 rounded-xl text-xs text-sky-900 leading-relaxed">
              <strong>Impact &amp; Reception:</strong> {project.impact}
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Shipped Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {project.deliverables.map((deliv, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Interactive design systems &amp; production workflows.
            </span>
            <div className="flex items-center gap-2">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Visit {project.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors"
              >
                Done Reading
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
