import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { content } from "@/content";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col animate-pageEnter">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="py-24 px-12"
          style={{ backgroundColor: "#F0EFEB" }}
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="hero-title mb-6 animate-slideUp">ABOUT US</h1>
            <p
              className="font-inter text-lg leading-relaxed animate-slideUp"
              style={{ color: "#6B6A66", animationDelay: "0.1s" }}
            >
              Kontraktor Bangunan is a leading construction company based in Wonosobo, Indonesia, dedicated to delivering premium building solutions with a focus on sustainability and innovation.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section
          className="py-20 px-12"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="animate-slideLeft">
                <h2 className="sub-head mb-6">OUR STORY</h2>
                <p
                  className="font-inter text-sm leading-relaxed mb-4"
                  style={{ color: "#6B6A66" }}
                >
                  Founded with a vision to revolutionize construction in Indonesia, Kontraktor Bangunan has grown to become a trusted partner for premium building projects. Our commitment to quality, sustainability, and innovation has earned us recognition across the region.
                </p>
                <p
                  className="font-inter text-sm leading-relaxed"
                  style={{ color: "#6B6A66" }}
                >
                  With over 15 years of experience, our team has successfully completed 50+ projects ranging from residential to commercial developments, all while maintaining our core values of excellence and environmental responsibility.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden h-80 animate-slideUp">
                <img
                  src={content.images.hero}
                  alt="Company"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section
          className="py-20 px-12"
          style={{ backgroundColor: "#F0EFEB" }}
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="sub-head text-center mb-16 animate-slideUp">OUR VALUES</h2>
            <div className="grid grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We maintain the highest standards in every project, ensuring quality craftsmanship and attention to detail.",
                },
                {
                  title: "Sustainability",
                  description: "Environmental responsibility guides our decisions, from material selection to construction practices.",
                },
                {
                  title: "Innovation",
                  description: "We embrace modern technologies and sustainable solutions to deliver cutting-edge construction.",
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slideUp"
                  style={{
                    backgroundColor: "#FFFFFF",
                    animationDelay: `${idx * 0.1}s`,
                  }}
                >
                  <h3
                    className="font-syne font-bold text-lg mb-4"
                    style={{ color: "#1A1A18" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="font-inter text-sm leading-relaxed"
                    style={{ color: "#6B6A66" }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          className="py-20 px-12"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="sub-head text-center mb-16 animate-slideUp">OUR TEAM</h2>
            <div className="grid grid-cols-4 gap-8">
              {[
                { name: "Budi Santoso", role: "Chief Executive Officer" },
                { name: "Siti Nurhaliza", role: "Head of Design" },
                { name: "Ahmad Wijaya", role: "Project Manager" },
                { name: "Dewi Lestari", role: "Sustainability Officer" },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slideUp"
                  style={{
                    backgroundColor: "#F0EFEB",
                    animationDelay: `${idx * 0.1}s`,
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4 transition-transform duration-300 hover:scale-110"
                    style={{
                      backgroundColor: "#8AB87A",
                    }}
                  />
                  <h3
                    className="font-syne font-bold text-sm mb-1"
                    style={{ color: "#1A1A18" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="font-inter text-xs"
                    style={{ color: "#6B6A66" }}
                  >
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="py-16 px-12"
          style={{ backgroundColor: "#1A1A18" }}
        >
          <div className="container mx-auto max-w-6xl grid grid-cols-4 gap-8">
            {content.stats.items.map((stat, idx) => (
              <div key={idx} className="text-center animate-slideUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div
                  className="font-syne font-extrabold text-4xl mb-2"
                  style={{ color: "#F0EFEB" }}
                >
                  {stat.value}
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
      </main>
      <Footer />
    </div>
  );
}
