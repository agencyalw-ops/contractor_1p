import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { EXTERNAL_LINK } from "@/content";

export default function Contact() {
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
            <h1 className="hero-title mb-6">GET IN TOUCH</h1>
            <p
              className="font-inter text-lg leading-relaxed"
              style={{ color: "#6B6A66" }}
            >
              Have a project in mind? We'd love to hear from you. Contact us today to discuss your construction needs.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="py-20 px-12"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="container mx-auto max-w-6xl grid grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="sub-head mb-8">SEND US A MESSAGE</h2>
              <form className="space-y-6">
                <div>
                  <label
                    className="block font-inter text-sm font-medium mb-2"
                    style={{ color: "#1A1A18" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border font-inter text-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "rgba(26, 26, 24, 0.1)",
                      backgroundColor: "#F0EFEB",
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = "#FFFFFF";
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = "#F0EFEB";
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block font-inter text-sm font-medium mb-2"
                    style={{ color: "#1A1A18" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border font-inter text-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "rgba(26, 26, 24, 0.1)",
                      backgroundColor: "#F0EFEB",
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = "#FFFFFF";
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = "#F0EFEB";
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block font-inter text-sm font-medium mb-2"
                    style={{ color: "#1A1A18" }}
                  >
                    Project Type
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border font-inter text-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "rgba(26, 26, 24, 0.1)",
                      backgroundColor: "#F0EFEB",
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = "#FFFFFF";
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = "#F0EFEB";
                    }}
                  >
                    <option>Select a project type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Renovation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block font-inter text-sm font-medium mb-2"
                    style={{ color: "#1A1A18" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border font-inter text-sm focus:outline-none focus:ring-2 resize-none"
                    style={{
                      borderColor: "rgba(26, 26, 24, 0.1)",
                      backgroundColor: "#F0EFEB",
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = "#FFFFFF";
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = "#F0EFEB";
                    }}
                  />
                </div>
                <a
                  href={EXTERNAL_LINK}
                  className="block w-full py-3 rounded-lg font-syne font-bold text-center text-white transition-all duration-200 hover:shadow-lg"
                  style={{ backgroundColor: "#1A1A18" }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = "#3D6B2E";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = "#1A1A18";
                  }}
                >
                  Send Message →
                </a>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="sub-head mb-8">CONTACT INFO</h2>
              <div className="space-y-8">
                <div>
                  <p
                    className="font-inter font-semibold text-sm mb-2"
                    style={{ color: "#1A1A18" }}
                  >
                    Address
                  </p>
                  <p
                    className="font-inter text-sm leading-relaxed"
                    style={{ color: "#6B6A66" }}
                  >
                    Wonosobo, Central Java<br />
                    Indonesia
                  </p>
                </div>
                <div>
                  <p
                    className="font-inter font-semibold text-sm mb-2"
                    style={{ color: "#1A1A18" }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+62"
                    className="font-inter text-sm"
                    style={{ color: "#8AB87A" }}
                  >
                    +62 (0) XXX-XXXX-XXXX
                  </a>
                </div>
                <div>
                  <p
                    className="font-inter font-semibold text-sm mb-2"
                    style={{ color: "#1A1A18" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@kontraktor.id"
                    className="font-inter text-sm"
                    style={{ color: "#8AB87A" }}
                  >
                    info@kontraktor.id
                  </a>
                </div>
                <div>
                  <p
                    className="font-inter font-semibold text-sm mb-4"
                    style={{ color: "#1A1A18" }}
                  >
                    Business Hours
                  </p>
                  <p
                    className="font-inter text-sm mb-1"
                    style={{ color: "#6B6A66" }}
                  >
                    Monday - Friday: 08:00 - 17:00
                  </p>
                  <p
                    className="font-inter text-sm"
                    style={{ color: "#6B6A66" }}
                  >
                    Saturday: 09:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
