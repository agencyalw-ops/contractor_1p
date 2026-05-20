import { content } from "@/content";

export default function Process() {
  return (
    <section
      className="relative py-20 px-12 overflow-hidden"
      style={{ backgroundColor: "#F0EFEB" }}
      id="process"
    >
      {/* Watermark */}
      <div
        className="absolute top-20 right-0 whitespace-nowrap pointer-events-none select-none opacity-3"
        data-parallax="0.4"
      >
        <h2 className="watermark-text">PROCESS</h2>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Top Info */}
        <div className="flex justify-between items-center mb-12 text-xs font-inter">
          <div style={{ color: "#6B6A66" }}>
            <p>{content.process.instagram}</p>
            <p>{content.process.behance}</p>
          </div>
          <div
            className="px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: "#E8EDE4",
              color: "#3D6B2E",
            }}
          >
            {content.process.tagline}
          </div>
        </div>

        {/* Section Title */}
        <h2 className="sub-head mb-12 animate-slideUp">{content.process.title}</h2>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-3 gap-4">
          {content.process.cards.map((card, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-6 min-h-56 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-slideUp ${
                idx === 2
                  ? "bg-black text-white"
                  : "bg-white border"
              }`}
              style={{
                backgroundColor: idx === 2 ? "#1A1A18" : "#FFFFFF",
                borderColor: idx === 2 ? "transparent" : "rgba(26, 26, 24, 0.06)",
                boxShadow:
                  idx === 2
                    ? "0 4px 24px rgba(0, 0, 0, 0.04)"
                    : "0 4px 24px rgba(0, 0, 0, 0.04)",
                animationDelay: `${idx * 0.1}s`,
              }}
              data-parallax="0.08"
            >
              {/* Step Pill */}
              <div
                className="inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-4"
                style={{
                  backgroundColor: idx === 2 ? "#2A2A28" : "#F0EFEB",
                  color: idx === 2 ? "#6B6A66" : "#6B6A66",
                }}
              >
                {card.step}
              </div>

              {/* Icon */}
              <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-syne font-extrabold"
                style={{
                  color: idx === 2 ? "#F0EFEB" : "#1A1A18",
                }}
              >
                {card.icon}
              </div>

              {/* Label */}
              <div
                className="absolute bottom-6 left-6 right-6 card-label"
                style={{
                  color: idx === 2 ? "#F0EFEB" : "#1A1A18",
                }}
              >
                {card.label}
              </div>

              {/* Nature Strip (only for first two cards) */}
              {idx < 2 && (
                <div className="absolute right-0 top-0 w-20 h-full rounded-r-2xl overflow-hidden">
                  <img
                    src={idx === 0 ? content.images.natureStrip1 : content.images.natureStrip2}
                    alt="Nature texture"
                    className="w-full h-full object-cover opacity-30 grayscale-30 sepia-20"
                  />
                </div>
              )}

              {/* Green Glow (only for dark card) */}
              {idx === 2 && (
                <div
                  className="absolute bottom-6 right-6 w-16 h-16 rounded-full"
                  style={{
                    boxShadow: "0 0 60px rgba(138, 184, 122, 0.15)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
