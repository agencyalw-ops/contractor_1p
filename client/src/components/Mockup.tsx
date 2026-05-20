import { content } from "@/content";

export default function Mockup() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 min-h-screen overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundColor: "#EDECEA" }}
    >
      {/* Background Layers */}
      <div
        className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-2xl overflow-hidden opacity-25 hidden sm:block"
        data-parallax="0.2"
      >
        <img
          src={content.images.mossyRock1}
          alt="Mossy rock"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute inset-0 opacity-60 blur-sm"
        data-parallax="0.08"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><filter id="fog3"><feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="40"/></filter></defs><rect width="1200" height="800" fill="%23EDECEA" filter="url(%23fog3)"/></svg>')`,
          backgroundSize: "cover",
        }}
      />

      {/* Watermark */}
      <div
        className="absolute top-1/3 right-0 whitespace-nowrap pointer-events-none select-none opacity-3"
        data-parallax="0.5"
      >
        <h2 className="watermark-text">MOBILE</h2>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-8 sm:mb-12">
        <p
          className="text-xs font-inter font-semibold uppercase tracking-widest mb-4 sm:mb-6"
          style={{ color: "#6B6A66" }}
        >
          {content.mockup.label}
        </p>
        <h2 className="hero-title">{content.mockup.title}</h2>
      </div>

      {/* Phone Mockups - Responsive Layout */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 h-auto sm:h-96">
        {/* Phone 1 */}
        <div
          className="w-32 h-64 sm:w-40 sm:h-80 md:w-44 md:h-96 rounded-3xl border-4 sm:border-6 md:border-8 overflow-hidden flex flex-col items-center justify-center relative flex-shrink-0"
          style={{
            backgroundColor: "#1A1A18",
            borderColor: "#2A2A28",
            boxShadow:
              "0 40px 80px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            transform: "rotate(-8deg) translateX(-15px) sm:translateX(-30px)",
          }}
          data-parallax="0.35"
        >
          {/* Notch */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 md:w-32 h-1.5 sm:h-2 rounded-b-3xl"
            style={{ backgroundColor: "#0A0A0A" }}
          />

          {/* Content */}
          <div className="mt-6 sm:mt-8 text-center">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full mx-auto mb-2 sm:mb-3"
              style={{
                background: `linear-gradient(135deg, #8AB87A 0%, #3D6B2E 100%)`,
              }}
            />
            <p
              className="font-syne font-bold text-white px-2 sm:px-4"
              style={{ fontSize: "6px", lineHeight: "1.2" }}
            >
              EMPOWERING SUSTAINABLE
            </p>
          </div>
        </div>

        {/* Phone 2 */}
        <div
          className="w-32 h-64 sm:w-40 sm:h-80 md:w-44 md:h-96 rounded-3xl border-4 sm:border-6 md:border-8 overflow-hidden flex flex-col items-center justify-center relative flex-shrink-0"
          style={{
            backgroundColor: "#1A1A18",
            borderColor: "#2A2A28",
            boxShadow:
              "0 40px 80px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            transform: "rotate(3deg) translateX(15px) sm:translateX(30px) translateY(0) sm:translateY(-20px)",
          }}
          data-parallax="0.25"
        >
          {/* Notch */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 md:w-32 h-1.5 sm:h-2 rounded-b-3xl"
            style={{ backgroundColor: "#0A0A0A" }}
          />

          {/* Content */}
          <div className="mt-6 sm:mt-8 text-center">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full mx-auto mb-2 sm:mb-3"
              style={{
                background: `linear-gradient(135deg, #8AB87A 0%, #3D6B2E 100%)`,
              }}
            />
            <p
              className="font-syne font-bold text-white px-2 sm:px-4"
              style={{ fontSize: "6px", lineHeight: "1.2" }}
            >
              CONSTRUCTION
            </p>
          </div>
        </div>

        {/* Laptop Mockup (behind) - Hidden on mobile */}
        <div
          className="absolute w-48 h-32 sm:w-64 sm:h-40 md:w-96 md:h-60 rounded-lg overflow-hidden hidden sm:flex items-center justify-center"
          style={{
            backgroundColor: "#1A1A18",
            boxShadow: "0 40px 80px rgba(0, 0, 0, 0.25)",
            transform: "perspective(1000px) rotateX(20deg) translateY(40px) sm:translateY(60px)",
          }}
          data-parallax="0.15"
        >
          <div className="text-center">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full mx-auto mb-2 sm:mb-4"
              style={{
                background: `linear-gradient(135deg, #8AB87A 0%, #3D6B2E 100%)`,
              }}
            />
            <p
              className="font-syne font-bold text-sm md:text-base text-white"
              style={{ color: "#F0EFEB" }}
            >
              Premium Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
