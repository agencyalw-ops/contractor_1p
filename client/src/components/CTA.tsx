import { Link } from "wouter";
import { content, EXTERNAL_LINK } from "@/content";

export default function CTA() {
  return (
    <section
      className="relative py-24 px-12 text-center overflow-hidden"
      style={{ backgroundColor: "#F0EFEB" }}
      id="contact"
    >
      {/* Watermark */}
      <div
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 whitespace-nowrap pointer-events-none select-none opacity-3"
        data-parallax="0.45"
      >
        <h2 className="watermark-text">START</h2>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto" data-parallax="-0.15">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 px-3 py-2 rounded-full mb-8 animate-fadeIn"
          style={{
            backgroundColor: "#E8EDE4",
            color: "#3D6B2E",
          }}
        >
          <span className="text-xs font-semibold">●</span>
          <span className="text-xs font-semibold">{content.cta.tag}</span>
        </div>

        {/* Title */}
        <h2 className="hero-title mb-6 animate-slideUp">{content.cta.title}</h2>

        {/* Description */}
        <p
          className="font-inter text-sm leading-relaxed mb-12 animate-slideUp"
          style={{ color: "#6B6A66", animationDelay: "0.1s" }}
        >
          {content.cta.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3.5 justify-center animate-slideUp" style={{ animationDelay: "0.2s" }}>
          <a
            href={EXTERNAL_LINK}
            className="px-8 py-3.5 rounded-lg font-syne font-bold text-sm text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#1A1A18" }}
          >
            {content.cta.cta1} →
          </a>
          <Link
            href="/projects"
            className="px-8 py-3.5 rounded-lg font-inter font-semibold text-sm transition-all duration-300 border-2 hover:scale-105"
            style={{
              borderColor: "rgba(26, 26, 24, 0.2)",
              color: "#1A1A18",
            }}
          >
            {content.cta.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}
