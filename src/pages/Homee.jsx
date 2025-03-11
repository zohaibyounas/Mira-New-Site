import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home_components/Hero";
import Services from "../components/Home_components/Services";
import Features from "../components/Home_components/Features";
import Digital_solutions from "../components/Home_components/Digital_solutions";
import WhyUs from "../components/Home_components/WhyUs";
import SuccessSection from "../components/Home_components/SuccessSection";
import Testimonials from "../components/Home_components/Testimonials";
import Blogs from "../components/Home_components/Blogs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Digital_solutions />
      <WhyUs />
      <SuccessSection />
      <Testimonials />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
