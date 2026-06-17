import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import ProjectsGrid from "../components/portfolio/ProjectsGrid";
import PortfolioStats from "../components/portfolio/PortfolioStats";
import { Helmet } from "react-helmet-async";

function Portfolio() {
  return (
    <>

      <Helmet>
        <title>Portfolio | Web Design & Digital Solutions</title>
        <meta
          name="description"
          content="Passy Technologies provides website development, graphic design, branding, telecommunications solutions, digital marketing, and other technology services."
        />
      </Helmet>

      <Navbar />

      <PortfolioHero />

      <PortfolioStats />

      <ProjectsGrid />

      <CTA />

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Portfolio;