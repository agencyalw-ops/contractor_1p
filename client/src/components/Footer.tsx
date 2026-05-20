import { Link } from "wouter";
import { content } from "@/content";

export default function Footer() {
  return (
    <footer
      className="relative py-10 px-12 border-t"
      style={{
        backgroundColor: "#1A1A18",
        borderTopColor: "rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Top Green Line */}
      <div
        className="absolute top-0 left-0 right-0 h-px mb-8"
        style={{
          backgroundColor: "#8AB87A",
          opacity: 0.2,
        }}
      />

      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center flex-wrap gap-5 pt-8">
          {/* Left: Logo + Copyright */}
          <div className="flex items-center gap-3">
            <div
              className="w-3.5 h-3.5 rounded-full border-1.5"
              style={{ borderColor: "#8AB87A" }}
            />
            <p
              className="font-inter text-xs"
              style={{ color: "rgba(255, 255, 255, 0.35)" }}
            >
              {content.footer.copyright}
            </p>
          </div>

          {/* Center: Nav Links */}
          <div className="flex gap-6">
            {content.footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-inter text-xs transition-all duration-200 hover:text-white relative group"
                style={{ color: "rgba(255, 255, 255, 0.5)" }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "#8AB87A" }}
                />
              </Link>
            ))}
          </div>

          {/* Right: Tag + Social */}
          <div className="flex items-center gap-4">
            <div
              className="px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: "#E8EDE4",
                color: "#3D6B2E",
              }}
            >
              {content.footer.tagline}
            </div>
            <div className="flex gap-3">
              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                className="transition-all duration-200 hover:text-white hover:scale-110"
                style={{ color: "rgba(255, 255, 255, 0.5)" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </a>
              {/* Behance Icon */}
              <a
                href="https://behance.net"
                className="transition-all duration-200 hover:text-white hover:scale-110"
                style={{ color: "rgba(255, 255, 255, 0.5)" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.5 7C5.12 7 4 8.12 4 9.5S5.12 12 6.5 12H8V7H6.5M9 7v5h4.5c1.38 0 2.5-1.12 2.5-2.5S14.88 7 13.5 7H9M6.5 13C5.12 13 4 14.12 4 15.5S5.12 18 6.5 18H8v-5H6.5M20 7h-5v10h5v-2h-2v-1h2v-2h-2v-1h2V7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
