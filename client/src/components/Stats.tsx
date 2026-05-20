import { useEffect, useRef, useState } from "react";
import { content } from "@/content";

export default function Stats() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Extract numbers from stat values
          const targets = [50, 99, 15, 200];

          const duration = 1200;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(
              targets.map((target) => Math.floor(target * easeOut))
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 px-12 border-t"
      style={{
        backgroundColor: "#1A1A18",
        borderTopColor: "rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-4 gap-6">
        {content.stats.items.map((stat, idx) => (
          <div
            key={idx}
            className="text-center pt-5 border-t"
            style={{
              borderTopColor: "rgba(255, 255, 255, 0.08)",
            }}
            data-parallax="0.06"
          >
            <div
              className="font-syne font-extrabold text-5xl mb-1.5"
              style={{ color: "#F0EFEB" }}
            >
              {counts[idx]}{idx === 1 ? "%" : "+"}
            </div>
            <p
              className="font-inter text-xs uppercase tracking-widest"
              style={{ color: "#6B6A66" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
