import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import ProjectsGrid from "../components/portfolio/ProjectsGrid";
import PortfolioStats from "../components/portfolio/PortfolioStats";

function Portfolio() {
  return (
    <>
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