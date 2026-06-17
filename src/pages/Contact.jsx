import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import BusinessHours from "../components/contact/BusinessHours";
import FAQ from "../components/contact/FAQ";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>

      <Helmet>
        <title>Contact Us | Web Design & Digital Solutions</title>
        <meta
          name="description"
          content="Passy Technologies provides website development, graphic design, branding, telecommunications solutions, digital marketing, and other technology services."
        />
      </Helmet>

      <Navbar />

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <BusinessHours />

      <FAQ />

      <CTA />

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Contact;