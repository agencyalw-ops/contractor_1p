import { Link } from "wouter";
import { content, EXTERNAL_LINK } from "@/content";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-white overflow-hidden flex items-center"
      style={{ backgroundColor: "#F0EFEB" }}
    >
      {/* Background Layers */}
      <div
        className="absolute inset-0 opacity-50 blur-sm"
        data-parallax="0.12"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><filter id="fog"><feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="50"/></filter></defs><rect width="1200" height="800" fill="%23F0EFEB" filter="url(%23fog)"/></svg>')`,
          backgroundSize: "cover",
        }}
      />

      {/* Mossy Rock - Bottom Left */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-2xl overflow-hidden opacity-35 -ml-20 -mb-20"
        data-parallax="0.22"
      >
        <img
          src={content.images.mossyRock1}
          alt="Mossy rock texture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mossy Rock - Top Right */}
      <div
        className="absolute top-0 right-0 w-60 h-60 rounded-2xl overflow-hidden opacity-30 -mr-5 -mt-8"
        data-parallax="0.18"
      >
        <img
          src={content.images.mossyRock2}
          alt="Mossy rock texture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Watermark Text */}
      <div
        className="absolute top-1/4 left-0 whitespace-nowrap pointer-events-none select-none"
        data-parallax="0.45"
      >
        <h2 className="watermark-text">KONTRAKTOR</h2>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 container mx-auto px-12 py-20 grid grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full mb-6 animate-fadeIn"
            data-parallax="-0.05"
            style={{
              backgroundColor: "#E8EDE4",
              color: "#3D6B2E",
            }}
          >
            <span className="text-xs font-semibold">●</span>
            <span className="text-xs font-semibold">{content.hero.tag}</span>
          </div>

          {/* Hero Title */}
          <h1 className="hero-title mb-6 animate-slideUp">
            {content.hero.title}
          </h1>

          {/* Description */}
          <p className="body-text mb-8 animate-slideUp" style={{ animationDelay: "0.1s" }}>
            {content.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 mb-8 animate-slideUp" style={{ animationDelay: "0.2s" }}>
            <a
              href={EXTERNAL_LINK}
              className="px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: "#1A1A18" }}
            >
              {content.hero.cta1}
            </a>
            <Link
              href="/services"
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 border-2 hover:scale-105"
              style={{
                borderColor: "rgba(26, 26, 24, 0.2)",
                color: "#1A1A18",
              }}
            >
              {content.hero.cta2} ↓
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 animate-slideUp" style={{ animationDelay: "0.3s" }}>
            <div>
              <p className="font-inter font-medium text-xs" style={{ color: "#6B6A66" }}>
                {content.hero.stat1}
              </p>
            </div>
            <div>
              <p className="font-inter font-medium text-xs" style={{ color: "#6B6A66" }}>
                {content.hero.stat2}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3D Ring */}
        <div
          className="flex justify-center items-center"
          data-parallax="0.25"
        >
          <div
            className="w-56 h-56 rounded-full animate-rotate3d"
            style={{
              background: `linear-gradient(135deg, #8AB87A 0%, #3D6B2E 100%)`,
              boxShadow:
                "inset 0 0 40px rgba(61, 107, 46, 0.3), 0 20px 60px rgba(0, 0, 0, 0.12)",
              border: "16px solid transparent",
              backgroundClip: "padding-box",
              perspective: "600px",
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                backgroundColor: "#F0EFEB",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
