import { useEffect, useRef } from "react";
import { content } from "@/content";

export default function About() {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.animation = `slideLeft 0.6s ease-out ${
              idx * 0.12
            }s both`;
          }
        });
      },
      { threshold: 0.15 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: "#F0EFEB" }}
      id="about"
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column - Features */}
        <div data-parallax="-0.1">
          <h2 className="sub-head mb-8 md:mb-12">{content.about.title}</h2>

          <div className="space-y-5">
            {content.about.features.map((feature, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  featureRefs.current[idx] = el;
                }}
                className="flex gap-3.5 items-start opacity-0"
              >
                {/* Icon Circle */}
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "#E8EDE4",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="6" fill="#3D6B2E" />
                  </svg>
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="font-inter font-semibold text-sm mb-1"
                    style={{ color: "#1A1A18" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="font-inter text-xs leading-relaxed"
                    style={{ color: "#6B6A66" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - 3D Leaf - Hidden on mobile */}
        <div className="hidden md:flex relative justify-center items-center" data-parallax="0.3">
          {/* Background Fog */}
          <div
            className="absolute inset-0 opacity-40 blur-sm"
            data-parallax="0.12"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><filter id="fog2"><feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="30"/></filter></defs><rect width="400" height="400" fill="%23F0EFEB" filter="url(%23fog2)"/></svg>')`,
              backgroundSize: "cover",
            }}
          />

          {/* 3D Leaf Shape */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64">
            {/* Outer leaf layers */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `linear-gradient(135deg, #8AB87A 0%, #3D6B2E 100%)`,
                borderRadius: "50% 50% 50% 0",
                transform: "rotate(-45deg)",
                opacity: 0.8,
              }}
            />
            <div
              className="absolute inset-4 rounded-full"
              style={{
                background: `linear-gradient(135deg, #A8D89A 0%, #5D8B4E 100%)`,
                borderRadius: "50% 50% 50% 0",
                transform: "rotate(-45deg) scale(0.85)",
                opacity: 0.6,
              }}
            />
            <div
              className="absolute inset-8 rounded-full"
              style={{
                background: `linear-gradient(135deg, #C8E8BA 0%, #7DAB6E 100%)`,
                borderRadius: "50% 50% 50% 0",
                transform: "rotate(-45deg) scale(0.7)",
                opacity: 0.4,
              }}
            />
          </div>

          {/* Watermark Number */}
          <div
            className="absolute top-0 left-0 opacity-3 pointer-events-none select-none"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "120px",
              color: "rgba(26, 26, 24, 0.03)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            02
          </div>
        </div>
      </div>
    </section>
  );
}
