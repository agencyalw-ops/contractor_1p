import { content } from "@/content";

export default function Ticker() {
  return (
    <section
      className="h-11 bg-black overflow-hidden flex items-center border-t border-b"
      style={{
        backgroundColor: "#1A1A18",
        borderTopColor: "rgba(255, 255, 255, 0.06)",
        borderBottomColor: "rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="flex animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 whitespace-nowrap px-8"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              color: "#8AB87A",
              letterSpacing: "0.08em",
            }}
          >
            {content.ticker.text}
          </div>
        ))}
      </div>
    </section>
  );
}
