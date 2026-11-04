import React, { useState } from 'react';
import { X, Folder, Image as ImageIcon, FileText, Sparkles, Check, Copy } from 'lucide-react';

interface AssetManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssetManagerModal: React.FC<AssetManagerModalProps> = ({ isOpen, onClose }) => {
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  if (!isOpen) return null;

  const folders = [
    {
      name: 'public/assets/hero/',
      description: 'Hero section collage assets: camera, open sketchbook, music player widget, denim pocket, laptop & coffee, composed directly in the hero collage.',
      keyFiles: ['book 1.png', 'camera 1.png', 'laptop 1.png', 'music 1.png', 'pocket 1.png'],
      formats: '.png with transparent alpha background',
    },
    {
      name: 'public/assets/projects/',
      description: 'Project case study covers, responsive UI screenshots, and gallery images.',
      keyFiles: ['lumina-workspace.png', 'komorebi-tea.png', 'aura-health.png', 'typecraft.png'],
      formats: '4:3 or 16:9 ratio, .jpg, .png, .webp',
    },
    {
      name: 'public/assets/illustrations/',
      description: 'Hand-drawn doodles, stars, patches, stickers, and decorative creative badges.',
      keyFiles: ['pink-star.svg', 'omg-patch.png', 'flower-sticker.png', 'tape.png'],
      formats: '.svg, .png with transparency',
    },
    {
      name: 'public/assets/icons/',
      description: 'Custom brand marks, tool logos, and vector iconography.',
      keyFiles: ['logo.svg', 'signature.svg', 'figma-mark.svg'],
      formats: '.svg',
    },
    {
      name: 'public/assets/documents/',
      description: 'Downloadable resumes, credentials, and portfolios linked to the "Download CV" button.',
      keyFiles: ['Jessica_Dangol_Resume.pdf'],
      formats: '.pdf',
    },
  ];

  const handleCopy = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Folder className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-serif-display font-semibold text-slate-900">
              Organized Assets Folder Structure
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="bg-amber-50/70 border border-amber-200/70 rounded-2xl p-4 text-xs text-amber-900 leading-relaxed">
            <p className="font-semibold mb-1">
              ✓ Ready for your files!
            </p>
            <p>
              Your asset folders have been created and pre-configured. You can upload or replace files at any time into the designated paths below. The application will immediately resolve them.
            </p>
          </div>

          <div className="space-y-4">
            {folders.map((f) => (
              <div 
                key={f.name}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs font-semibold text-slate-900 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      /{f.name}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(f.name)}
                    className="text-xs text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 cursor-pointer"
                    title="Copy path"
                  >
                    {copiedPath === f.name ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {f.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500">
                  <span><strong>Recommended:</strong> {f.formats}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Reference Asset Note */}
          <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <p>
              <strong>Current Master Reference:</strong> Located at <code>/public/assets/aistudio/Frame_2_cfd366a1.png</code>.
            </p>
            <p>
              When you upload individual PNG cutouts to <code>/public/assets/hero/</code>, they can be layered dynamically with the interactive elements!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
