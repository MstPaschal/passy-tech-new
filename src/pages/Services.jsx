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
import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";

function Services() {
  return (
    <>

      <PageTransition>

      <Helmet>
        <title>Our Services | Web Design & Digital Solutions</title>
        <meta
          name="description"
          content="Passy Technologies provides website development, graphic design, branding, telecommunications solutions, digital marketing, and other technology services."
        />
      </Helmet>

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

      </PageTransition>
    </>
  );
}

export default Services;