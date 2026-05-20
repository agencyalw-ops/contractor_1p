import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { content } from "@/content";

const projects = [
  {
    title: "Mountain Villa Residence",
    category: "Residential",
    description: "Luxury residential project with sustainable design overlooking Wonosobo mountains.",
    image: content.images.hero,
  },
  {
    title: "Eco-Tech Office Complex",
    category: "Commercial",
    description: "Modern office building with green roofs and renewable energy systems.",
    image: content.images.mossyRock1,
  },
  {
    title: "Heritage Restoration Project",
    category: "Restoration",
    description: "Careful restoration of historic building maintaining original architecture.",
    image: content.images.mossyRock2,
  },
  {
    title: "Sustainable Community Center",
    category: "Public",
    description: "Community facility with zero-waste design and local material sourcing.",
    image: content.images.natureStrip1,
  },
  {
    title: "Green Hotel Development",
    category: "Hospitality",
    description: "Eco-friendly hotel with organic architecture and natural materials.",
    image: content.images.natureStrip2,
  },
  {
    title: "Urban Living Complex",
    category: "Residential",
    description: "Mixed-use development combining residential and retail spaces.",
    image: content.images.hero,
  },
];

export default function Projects() {
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
            <h1 className="hero-title mb-6">OUR PROJECTS</h1>
            <p
              className="font-inter text-lg leading-relaxed"
              style={{ color: "#6B6A66" }}
            >
              Explore our portfolio of completed projects showcasing our expertise in sustainable construction and innovative design.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section
          className="py-20 px-12"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{
                    borderColor: "rgba(26, 26, 24, 0.06)",
                  }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6" style={{ backgroundColor: "#FFFFFF" }}>
                    <p
                      className="text-xs font-semibold mb-2 uppercase tracking-wider"
                      style={{ color: "#8AB87A" }}
                    >
                      {project.category}
                    </p>
                    <h3
                      className="font-syne font-bold text-lg mb-2"
                      style={{ color: "#1A1A18" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="font-inter text-sm leading-relaxed"
                      style={{ color: "#6B6A66" }}
                    >
                      {project.description}
                    </p>
                  </div>
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
            <h2 className="hero-title mb-6">Have a Project in Mind?</h2>
            <p
              className="font-inter text-lg mb-8"
              style={{ color: "#6B6A66" }}
            >
              Let us bring your vision to life with our expertise and commitment to excellence.
            </p>
            <a
              href="https://alwgen.com"
              className="inline-block px-8 py-3.5 rounded-lg font-syne font-bold text-white transition-all duration-200 hover:shadow-lg"
              style={{ backgroundColor: "#1A1A18" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#3D6B2E";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#1A1A18";
              }}
            >
              Start Your Project →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
