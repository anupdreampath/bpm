import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pitch from "@/components/Pitch";
import DayCycle from "@/components/DayCycle";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Testimonial from "@/components/Testimonial";
import TechInfo from "@/components/TechInfo";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="main-content">
      <SmoothScroll />
      <Preloader />
      <Nav />
      <Hero />
      <Pitch />
      <DayCycle />
      <Features />
      <CTA />
      <Testimonial />
      <TechInfo />
      <FinalCTA />
      <Footer />
    </main>
  );
}
