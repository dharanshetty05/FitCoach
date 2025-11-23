import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Transformations from "@/components/Transformations";
import WhatsAppButton from "@/components/WhatsappButton";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatsAppButton />
      <About />
      <WhyChoose />
      <Programs />
      <Transformations />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  );
}
