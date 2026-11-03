export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Product Design' | 'Brand & Systems' | 'Creative Tech' | 'Physical & Print';
  year: string;
  client: string;
  role: string;
  description: string;
  fullOverview: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  coverColor: string;
  url?: string;
  coverImage?: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'watobu',
    title: 'Watobu',
    subtitle: 'SaaS & CX Product Flow Intelligence Platform',
    category: 'Product Design',
    year: '2025',
    client: 'Watobu Inc.',
    role: 'UI/UX Designer',
    url: 'https://watobu.com/',
    description: 'A structured UX teardown and feature reference platform cataloging real product flows from 150+ SaaS applications to supercharge design and discovery.',
    fullOverview: 'Watobu addresses the painful workflow product teams face when benchmarking customer experience features: creating dozens of trial accounts, capturing disjointed screenshots, and losing contextual rationale. We designed an annotated, search-first design intelligence library with interactive step-by-step product walkthroughs, tagging taxonomies, and cross-application pattern comparison.',
    problem: 'Designers and product leaders waste hundreds of hours setting up fake trials and stitching together static screenshots that fail to explain how complex omnichannel, telephony, and AI customer flows actually behave.',
    solution: 'Engineered an intuitive visual flow architecture with deep-dive annotations, interactive step scrubbing, category filtering, and moodboard collections.',
    impact: 'Adopted by fast-moving CX product teams worldwide, archiving over 150+ full product flows and thousands of annotated screens.',
    tags: ['Product Architecture', 'UI/UX Design', 'Design System', 'SaaS Teardowns'],
    coverColor: '#E2EEF9',
    coverImage: '/assets/projects/Watobu.png',
    metrics: [
      { label: 'SaaS Teardowns', value: '150+' },
      { label: 'Annotated Flows', value: '2,400+' },
      { label: 'Research Saved', value: '75%' }
    ],
    deliverables: ['Web App Architecture', 'Information Architecture', 'Design System & Component Library', 'Interactive Prototypes']
  },
  {
    id: 'nihongo-nepal',
    title: 'Nihongo Nepal',
    subtitle: 'Japanese Language Learning & Partner Institute Platform',
    category: 'Brand & Systems',
    year: '2024',
    client: 'Nihongo Nepal',
    role: 'UI/UX & Mobile App Designer',
    url: 'https://nihongonepal.com/',
    description: 'A comprehensive educational ecosystem bridging classroom teaching at partner institutes with mobile study tools for JLPT and NAT test candidates in Nepal.',
    fullOverview: 'Nihongo Nepal was crafted to empower students across Nepal preparing for Japanese language certification and career journeys. Integrating curriculum tracking, kana/kanji flashcards, vocabulary audio pronunciation, and real-time institute mock exams into an unhurried, clean study interface.',
    problem: 'Language institutes in Nepal relied on scattered paper handouts and generic global apps that failed to map to local curriculum paces and localized test requirements.',
    solution: 'Designed a unified mobile and web platform with structured N5-to-N1 learning pathways, bilingual Nepali-Japanese notes, and seamless institute progress monitoring.',
    impact: 'Partnered with 10+ leading language institutes across Kathmandu and Pokhara to modernize teaching workflows.',
    tags: ['Mobile App Design', 'EdTech UX', 'Bilingual UI', 'Curriculum Architecture'],
    coverColor: '#F5EBE1',
    coverImage: '/assets/projects/Nihongo.png',
    metrics: [
      { label: 'JLPT Levels', value: 'N5 — N1' },
      { label: 'Partner Institutes', value: '10+' }
    ],
    deliverables: ['Mobile App UI (iOS & Android)', 'Institute Management Portal', 'Visual Identity & Mascot', 'Design Tokens']
  },
  {
    id: 'foundery-usa',
    title: 'Foundery USA',
    subtitle: 'U.S. Company Formation & Compliance Platform for Global Founders',
    category: 'Creative Tech',
    year: '2024',
    client: 'Foundery USA',
    role: 'UI/UX Designer',
    url: 'https://founderyusa.com/',
    description: 'Streamlined end-to-end incorporation, registered agent compliance, EIN/ITIN acquisition, and U.S. business banking for international entrepreneurs.',
    fullOverview: 'Global entrepreneurs launching international startups face a labyrinth of US state corporate filings, IRS compliance, and cross-border banking restrictions. Foundery USA simplifies this into a clear, guided 4-step wizard that removes legal ambiguity and accelerates time-to-market.',
    problem: 'Traditional registered agents and incorporation services offer opaque pricing, intimidating legal jargon, and slow paperwork cycles that alienate non-US founders.',
    solution: 'Crafted a transparent, step-by-step onboarding flow with real-time state filing trackers, CAA-assisted ITIN milestone updates, and frictionless global banking onboarding.',
    impact: 'Helped international founders from over 40 countries successfully launch Delaware C-Corps and Wyoming LLCs.',
    tags: ['FinTech / LegalTech', 'Onboarding Flow', 'Dashboard UX', 'Global Compliance'],
    coverColor: '#F4EEF8',
    coverImage: '/assets/projects/Foundery USA.png',
    metrics: [
      { label: 'Countries Served', value: '40+' },
      { label: 'Avg Setup Time', value: '<5 Days' },
      { label: 'Compliance Score', value: '99.8%' }
    ],
    deliverables: ['Onboarding Wizard UX', 'Founder Dashboard', 'Compliance Tracking Interface', 'Design System']
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Sept 2025 — Present',
    role: 'Associate UI/UX Designer',
    company: 'Progressive Labs, Nepal',
    location: 'Kathmandu, Nepal',
    highlights: [
      'Conducted UX research to identify Ideal Customer Profiles (ICPs) and user needs across Watobu, Foundery USA, and Nihongo Nepal.',
      'Applied product thinking to evaluate existing experiences, identify usability gaps, and translate user needs into actionable design opportunities.',
      'Contributed to product experience design by refining information architecture and navigation to create intuitive user experiences.',
      'Researched and documented SaaS interfaces and user flows across CRM, project management, AI voice agents, and MDM tools.'
    ]
  },
  {
    period: 'July 2025 — Sept 2025',
    role: 'UI/UX Designer Intern',
    company: 'Progressive Labs, Nepal',
    location: 'Kathmandu, Nepal',
    highlights: [
      'Applied core UI/UX design principles, including visual hierarchy, alignment, spacing, and accessibility considerations.',
      'Executed pixel-precise UI designs, maintaining visual consistency across screens and layouts through reusable components.',
      'Designed an end-to-end product concept from initial requirements into low-fidelity wireframes, user flows, and final design concept.'
    ]
  },
  {
    period: 'Jan 2025 — Aug 2025',
    role: 'Design Intern',
    company: 'ECS Media, Nepal',
    location: 'Kathmandu, Nepal',
    highlights: [
      'Assisted in creating visual assets for digital and print media using Adobe Photoshop and InDesign.',
      'Designed social media graphics, posters, and promotional materials aligned with brand guidelines.'
    ]
  }
];

export const SKILLS_CATEGORIES = [
  {
    title: 'Product & Research',
    skills: ['Competitive Analysis', 'Usability Analysis', 'Product Thinking', 'Feature Discovery', 'User Interviews', 'UX Audits']
  },
  {
    title: 'UX Design',
    skills: ['User Research', 'Information Architecture', 'User Flow Design', 'Wireframing', 'Prototyping', 'Usability Testing', 'Accessibility (WCAG)']
  },
  {
    title: 'UI Design & Craft',
    skills: ['Visual Hierarchy', 'Responsive Design', 'Design Systems', 'Component-Based Design', 'Interaction Design', 'Figma & Design Tokens']
  }
];
