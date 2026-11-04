import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenCV,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Sequence: Home > About > Projects
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
  ];

  // Smart scroll: invisible when scrolling down, visible when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always visible near top of the page
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
        // Scrolling down
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 6) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-5 flex items-center justify-between">
        
        {/* Left: Brand Name / Wordmark */}
        <div className="shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="text-base sm:text-lg font-bold tracking-widest uppercase text-slate-950 hover:opacity-75 transition-opacity text-left cursor-pointer"
          >
            JESSICA DANGOL
          </button>
        </div>

        {/* Center: Frosted Pill Navigation (Desktop & Tablet) - Home > Projects > About */}
        <nav className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1 text-sm font-medium transition-colors cursor-pointer rounded-full ${
                  isActive
                    ? 'text-slate-950 font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-slate-900 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Download CV Action Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="./Jessica_Dangol_Resume.pdf"
            download="Jessica_Dangol_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-slate-900 bg-[#FEE282] hover:bg-[#FCD34D] transition-all duration-200 shadow-xs hover:shadow-sm cursor-pointer active:scale-98"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="./Jessica_Dangol_Resume.pdf"
            download="Jessica_Dangol_Resume.pdf"
            className="sm:hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-900 bg-[#FEE282] hover:bg-[#FCD34D] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-slate-950 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-6 p-4 rounded-2xl bg-white/95 backdrop-blur-lg border border-slate-200/80 shadow-xl mb-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-slate-100 text-slate-950 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50 text-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <a
              href="./Jessica_Dangol_Resume.pdf"
              download="Jessica_Dangol_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-slate-900 bg-[#FEE282] hover:bg-[#FCD34D] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
