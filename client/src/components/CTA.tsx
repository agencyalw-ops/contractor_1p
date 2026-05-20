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
          className="inline-flex items-center gap-2 px-3 py-2 rounded-full mb-8"
          style={{
            backgroundColor: "#E8EDE4",
            color: "#3D6B2E",
          }}
        >
          <span className="text-xs font-semibold">●</span>
          <span className="text-xs font-semibold">{content.cta.tag}</span>
        </div>

        {/* Title */}
        <h2 className="hero-title mb-6">{content.cta.title}</h2>

        {/* Description */}
        <p
          className="font-inter text-sm leading-relaxed mb-12"
          style={{ color: "#6B6A66" }}
        >
          {content.cta.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3.5 justify-center">
          <a
            href={EXTERNAL_LINK}
            className="px-8 py-3.5 rounded-lg font-syne font-bold text-sm text-white transition-all duration-200 hover:shadow-lg"
            style={{ backgroundColor: "#1A1A18" }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#3D6B2E";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#1A1A18";
            }}
          >
            {content.cta.cta1} →
          </a>
          <a
            href="#"
            className="px-8 py-3.5 rounded-lg font-inter font-semibold text-sm transition-all duration-200 border-2"
            style={{
              borderColor: "rgba(26, 26, 24, 0.2)",
              color: "#1A1A18",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.borderColor = "#3D6B2E";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.borderColor =
                "rgba(26, 26, 24, 0.2)";
            }}
          >
            {content.cta.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
