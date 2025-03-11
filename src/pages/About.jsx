import React from "react";
import Navbar from "../components/Navbar";
import AboutHero from "../components/About_components/AboutHero";
import MissionSection from "../components/About_components/MissionSection";
import GoalSection from "../components/About_components/GoalSection";
import ServicesSection from "../components/About_components/ServicesSection";
import TeamSection from "../components/About_components/TeamSection";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <MissionSection />
      <GoalSection />
      <ServicesSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
