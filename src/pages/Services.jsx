import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import ServicesHero from "../components/services/ServicesHero";
import ServiceCards from "../components/services/ServiceCards";
import WorkProcess from "../components/services/WorkProcess";
import TechStack from "../components/services/TechStack";
import Pricing from "../components/services/Pricing";
import ServiceFAQ from "../components/services/ServiceFAQ";

function Services() {
  return (
    <>
      <Navbar />

      <ServicesHero />

      <ServiceCards />

      <WorkProcess />

      <TechStack />

      <Pricing />

      <ServiceFAQ />

      <CTA />

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Services;