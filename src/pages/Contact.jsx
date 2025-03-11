import React from "react";
import Navbar from "../components/Navbar";
import ContactUs from "../components/Contact_components/ContactUs";
import FAQ from "../components/Contact_components/FAQ";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* <h1 style={{ textAlign: "center", marginTop: "50px" }}>Contact Us</h1>
      <p style={{ textAlign: "center" }}>This is the Contact Page.</p> */}
      <ContactUs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Contact;
