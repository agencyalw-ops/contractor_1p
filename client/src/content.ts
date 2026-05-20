/**
 * Centralized Content Configuration
 * All copy (H1, subtitles, button text) and URLs are managed here
 * External links and CTA buttons redirect to https://alwgen.com
 */

export const EXTERNAL_LINK = "https://alwgen.com";

export const content = {
  // Navigation
  nav: {
    logo: "Kontraktor Bangunan",
    links: [
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    tagline: "Premium Construction Solutions",
    cta: "Get Started",
  },

  // Hero Section
  hero: {
    tag: "● SUSTAINABLE BUILDING",
    title: "EMPOWERING SUSTAINABLE CONSTRUCTION",
    description:
      "Our innovative building technologies pave the way for sustainable architecture and energy efficiency in Wonosobo, Indonesia.",
    cta1: "Explore Solutions",
    cta2: "View Process",
    stat1: "50+ Projects",
    stat2: "99% Satisfaction",
    sectionId: "hero",
  },

  // Process Section
  process: {
    instagram: "www.instagram.com/kontraktor_bangunan",
    behance: "www.behance.net/kontraktor",
    tagline: "Premium Construction Solutions",
    title: "OUR PROCESS",
    sectionId: "process",
    cards: [
      {
        step: "01",
        icon: "+",
        label: "SITE ANALYSIS & PLANNING",
        description: "Comprehensive site assessment and sustainable design planning",
      },
      {
        step: "02",
        icon: "◎",
        label: "DESIGN & ENGINEERING",
        description: "Detailed architectural and structural design with modern standards",
      },
      {
        step: "03",
        icon: "✕",
        label: "CONSTRUCTION & DELIVERY",
        description: "Expert execution with quality assurance and timely completion",
      },
    ],
  },

  // Ticker
  ticker: {
    text: "SUSTAINABLE DESIGN ● GREEN BUILDING ● ENERGY EFFICIENCY ● ECO INNOVATION ● RENEWABLE SYSTEMS ● ",
  },

  // About/Features Section
  about: {
    title: "WHY KONTRAKTOR BANGUNAN",
    sectionId: "about",
    features: [
      {
        title: "Sustainable Materials",
        description: "Eco-friendly and locally-sourced building materials",
      },
      {
        title: "Energy Efficient Design",
        description: "Modern systems for optimal energy performance",
      },
      {
        title: "Expert Craftsmanship",
        description: "Skilled professionals with years of experience",
      },
      {
        title: "Quality Assurance",
        description: "Rigorous standards and quality control processes",
      },
    ],
  },

  // Stats Section
  stats: {
    items: [
      { value: "50+", label: "Projects Completed" },
      { value: "99%", label: "Client Satisfaction" },
      { value: "15+", label: "Years Experience" },
      { value: "200+", label: "Team Members" },
    ],
  },

  // Mockup Section
  mockup: {
    label: "RESPONSIVE DESIGN",
    title: "MOBILE OPTIMIZED",
  },

  // CTA Section
  cta: {
    tag: "● READY TO BUILD",
    title: "LET'S CREATE\nSOMETHING\nEXCEPTIONAL",
    description: "Transform your vision into reality with our expert construction team",
    cta1: "Start a Project",
    cta2: "View Portfolio",
    sectionId: "contact",
  },

  // Footer
  footer: {
    copyright: "© 2024 Kontraktor Bangunan — All Rights Reserved",
    tagline: "Premium Construction Solutions",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },

  // Images
  images: {
    hero: "/manus-storage/hero_construction_009d7578.png",
    mossyRock1: "/manus-storage/mossy_rock_1_13c50270.png",
    mossyRock2: "/manus-storage/mossy_rock_2_ca2b967d.png",
    natureStrip1: "/manus-storage/nature_strip_1_ca146b22.png",
    natureStrip2: "/manus-storage/nature_strip_2_e2585604.png",
  },
};
