import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import AboutHero from "../components/about/AboutHero";
import CompanyStory from "../components/about/CompanyStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import WhyTrustUs from "../components/about/WhyTrustUs";

function About() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <CompanyStory />

      <MissionVision />

      <CoreValues />

      <WhyTrustUs />

      <CTA />

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default About;