import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, Mail, MapPin, Globe, Sparkles } from 'lucide-react';
import { WORK_EXPERIENCE, SKILLS_CATEGORIES } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jcka.dangol@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Actions Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-800 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href="./Jessica_Dangol_Resume.pdf"
              download="Jessica_Dangol_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FEE282] hover:bg-[#FCD34D] text-xs font-semibold text-slate-900 transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer ml-1"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div id="printable-cv" className="p-8 sm:p-12 space-y-8 bg-white text-slate-900">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif-display font-bold tracking-tight text-slate-950">
                Jessica Dangol
              </h1>
              <p className="text-base text-slate-600 font-medium mt-1">
                UI/UX Designer
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-1 sm:text-right font-sans">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>Balkhu, Kathmandu-44600, Nepal</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3 h-3 text-slate-400" />
                <span>jcka.dangol@gmail.com</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Globe className="w-3 h-3 text-slate-400" />
                <span>jessicadangol.com.np</span>
              </div>
            </div>
          </div>

          {/* Profile Statement */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-light">
              UI/UX Designer with a background in Computer Engineering. Experienced in conducting user research and designing intuitive SaaS interfaces and responsive layouts at Progressive Labs. Passionate about translating complex user needs into clear, accessible design solutions.
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-slate-950">
                      {exp.role} · <span className="font-normal text-slate-700">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-sans text-slate-500">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-400">{exp.location}</div>
                  <ul className="space-y-1 text-xs text-slate-600 pl-4 list-disc pt-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1">
              Core Competencies &amp; Toolkit
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
              {SKILLS_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="font-semibold text-slate-900">{cat.title}</div>
                  <div className="text-slate-600 space-y-0.5">
                    {cat.skills.map(s => <div key={s}>• {s}</div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Honors */}
          <div className="space-y-4 border-t border-slate-100 pt-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Education
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <div className="font-semibold text-slate-900">Bachelor in Computer Engineering</div>
                <div className="text-slate-600">Kathmandu Engineering College, Tribhuvan University, Nepal</div>
                <div className="text-slate-400 font-sans mt-0.5">Apr 2021 – Apr 2025 · 80.79%</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">Higher Education – Science</div>
                <div className="text-slate-600">United Academy, Lalitpur, Nepal</div>
                <div className="text-slate-400 font-sans mt-0.5">2018 – Nov 2020 · CGPA: 3.78</div>
              </div>
            </div>
          </div>

          {/* Footer note inside CV */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-sans">
            <span>Portfolio: jessicadangol.com.np</span>
            <span>Phone: +977-9845611220</span>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs print:hidden">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-black font-medium transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Email copied to clipboard!' : 'Copy Jessica\'s Email'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
