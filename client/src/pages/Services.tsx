import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { EXTERNAL_LINK } from "@/content";

const services = [
  {
    title: "Residential Construction",
    description: "Premium residential projects with sustainable materials and modern design principles.",
    icon: "🏠",
  },
  {
    title: "Commercial Development",
    description: "Large-scale commercial buildings with eco-friendly infrastructure and energy efficiency.",
    icon: "🏢",
  },
  {
    title: "Renovation & Restoration",
    description: "Expert restoration of heritage buildings while maintaining architectural integrity.",
    icon: "🔨",
  },
  {
    title: "Sustainable Design",
    description: "Green building solutions with renewable energy systems and environmental responsibility.",
    icon: "🌱",
  },
  {
    title: "Project Management",
    description: "End-to-end project oversight ensuring quality, timeline, and budget compliance.",
    icon: "📋",
  },
  {
    title: "Consultation Services",
    description: "Expert advice on construction planning, materials selection, and regulatory compliance.",
    icon: "💼",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="py-24 px-12"
          style={{ backgroundColor: "#F0EFEB" }}
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="hero-title mb-6">OUR SERVICES</h1>
            <p
              className="font-inter text-lg leading-relaxed"
              style={{ color: "#6B6A66" }}
            >
              Comprehensive construction solutions tailored to your needs, combining expertise, innovation, and sustainability.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section
          className="py-20 px-12"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(26, 26, 24, 0.06)",
                  }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3
                    className="font-syne font-bold text-lg mb-3"
                    style={{ color: "#1A1A18" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-inter text-sm leading-relaxed"
                    style={{ color: "#6B6A66" }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 px-12 text-center"
          style={{ backgroundColor: "#F0EFEB" }}
        >
          <div className="container mx-auto max-w-2xl">
            <h2 className="hero-title mb-6">Ready to Start Your Project?</h2>
            <p
              className="font-inter text-lg mb-8"
              style={{ color: "#6B6A66" }}
            >
              Contact us today to discuss your construction needs and receive a personalized consultation.
            </p>
            <a
              href={EXTERNAL_LINK}
              className="inline-block px-8 py-3.5 rounded-lg font-syne font-bold text-white transition-all duration-200 hover:shadow-lg"
              style={{ backgroundColor: "#1A1A18" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#3D6B2E";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#1A1A18";
              }}
            >
              Get in Touch →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
