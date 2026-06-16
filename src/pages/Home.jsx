import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <WhyChooseUs />

      <Stats />

      <Portfolio />

      <Testimonials />

      <CTA />

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Home;