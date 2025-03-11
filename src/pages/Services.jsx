import React from "react";
import Navbar from "../components/Navbar";
import ServicesHero from "../components/Services_components/ServicesHero";
import SpecialServices from "../components/Services_components/SpecialServices";
import PartnersSection from "../components/Services_components/PartnersSection";
import Testimonials from "../components/Home_components/Testimonials";
import StatsSection from "../components/Services_components/StatsSection";
import ContactForm from "../components/Services_components/ContactForm";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      {/* <h1 style={{ textAlign: "center", marginTop: "50px" }}>Our Services</h1>
      <p style={{ textAlign: "center" }}>This is the Services Page.</p> */}
      <ServicesHero />
      <SpecialServices />
      <PartnersSection />
      <Testimonials />
      <StatsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServicesPage;
