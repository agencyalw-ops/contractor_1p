import { useState, useEffect } from "react";
import { Link } from "wouter";
import { content, EXTERNAL_LINK } from "@/content";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 56);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-100 h-14 bg-white/85 backdrop-blur-md border-b transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "border-gray-200/10"
        }`}
        style={{
          backgroundColor: "rgba(240, 239, 235, 0.85)",
          borderBottomColor: "rgba(26, 26, 24, 0.08)",
        }}
      >
        <div className="h-full px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-200">
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
          </Link>

          {/* Center Nav Links - Desktop */}
          <div className="hidden md:flex gap-8">
            {content.nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-label transition-all duration-200 hover:text-accent-green relative group"
                style={{
                  color: "#6B6A66",
                }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-green transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "#8AB87A" }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Right: Tag + CTA - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <div
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold animate-pulse-subtle"
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
              className="px-4.5 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                backgroundColor: "#1A1A18",
              }}
            >
              {content.nav.cta} →
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-white/95 backdrop-blur-md border-b"
          style={{
            backgroundColor: "rgba(240, 239, 235, 0.95)",
            borderBottomColor: "rgba(26, 26, 24, 0.08)",
          }}
        >
          <div className="px-4 py-4 space-y-3">
            {content.nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block nav-label transition-all duration-200 hover:text-accent-green py-2"
                style={{
                  color: "#6B6A66",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t" style={{ borderColor: "rgba(26, 26, 24, 0.1)" }}>
              <a
                href={EXTERNAL_LINK}
                className="block w-full px-4 py-2 rounded-lg text-xs font-semibold text-white text-center transition-all duration-300"
                style={{
                  backgroundColor: "#1A1A18",
                }}
              >
                {content.nav.cta} →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
