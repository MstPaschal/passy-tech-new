import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import AboutHero from "../components/about/AboutHero";
import CompanyStory from "../components/about/CompanyStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import WhyTrustUs from "../components/about/WhyTrustUs";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>

      <Helmet>
        <title>About Us | Web Design & Digital Solutions</title>
        <meta
          name="description"
          content="Passy Technologies provides website development, graphic design, branding, telecommunications solutions, digital marketing, and other technology services."
        />
      </Helmet>

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