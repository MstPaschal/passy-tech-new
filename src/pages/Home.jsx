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
import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";

function Home() {
  return (
    <>

      <PageTransition>

      <Helmet>
        <title>Passy Technologies | Web Design & Digital Solutions</title>
        <meta
          name="description"
          content="Passy Technologies provides website development, graphic design, branding, telecommunications solutions, digital marketing, and other technology services."
        />
      </Helmet>

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

      </PageTransition>
    </>
  );
}

export default Home;