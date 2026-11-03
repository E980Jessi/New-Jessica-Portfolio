/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { CVModal } from './components/CVModal';
import { AssetManagerModal } from './components/AssetManagerModal';
import { Project } from './data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);
  const [isAssetGuideOpen, setIsAssetGuideOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for active section highlight and scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stripes-pastel text-slate-900 flex flex-col selection:bg-amber-200">
      
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Main Content Layout: Hero -> About -> Projects -> Contact */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProjects={() => handleNavigate('projects')}
          onOpenAbout={() => handleNavigate('about')}
          onOpenAssetGuide={() => setIsAssetGuideOpen(true)}
        />

        {/* About Section (Directly after Hero) */}
        <AboutSection
          onOpenCV={() => setIsCVModalOpen(true)}
        />

        {/* Selected Projects Section */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenAssetGuide={() => setIsAssetGuideOpen(true)}
        />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-30 transition-opacity duration-300">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900/90 hover:bg-slate-950 text-white shadow-lg backdrop-blur-xs transition-all duration-200 cursor-pointer active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* Asset Manager / Directory Structure Modal */}
      <AssetManagerModal
        isOpen={isAssetGuideOpen}
        onClose={() => setIsAssetGuideOpen(false)}
      />

    </div>
  );
}
