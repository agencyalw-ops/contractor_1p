import { useState, useEffect } from "react";
import { content, EXTERNAL_LINK } from "@/content";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 56);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-100 h-14 bg-white/85 backdrop-blur-md border-b transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "border-gray-200/10"
      }`}
      style={{
        backgroundColor: "rgba(240, 239, 235, 0.85)",
        borderBottomColor: "rgba(26, 26, 24, 0.08)",
      }}
    >
      <div className="h-full px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-4.5 h-4.5 rounded-full border-2"
            style={{ borderColor: "#8AB87A" }}
          />
          <span
            className="font-syne font-bold text-base"
            style={{ color: "#1A1A18" }}
          >
            {content.nav.logo}
          </span>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex gap-8">
          {content.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-label hover:text-accent-green transition-colors duration-200"
              style={{
                color: "#6B6A66",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Tag + CTA */}
        <div className="flex items-center gap-3">
          <div
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: "#E8EDE4",
              color: "#3D6B2E",
            }}
          >
            <span>●</span>
            <span>{content.nav.tagline}</span>
          </div>
          <a
            href={EXTERNAL_LINK}
            className="px-4.5 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200 hover:shadow-lg"
            style={{
              backgroundColor: "#1A1A18",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#3D6B2E";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#1A1A18";
            }}
          >
            {content.nav.cta} →
          </a>
        </div>
      </div>
    </nav>
  );
}
