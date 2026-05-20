import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Mockup from "@/components/Mockup";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col animate-pageEnter">
      <Navigation />
      <main>
        <Hero />
        <Process />
        <Ticker />
        <About />
        <Stats />
        <Mockup />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
