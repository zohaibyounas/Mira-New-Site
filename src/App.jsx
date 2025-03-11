import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs"; // NEW IMPORT
import Contact from "./pages/Contact";
import  PrivacyPolicy from "./pages/PrivacyPolicy";
import  Imprint from "./pages/Imprint";
import  GTCs from "./pages/GTCs";
// import Impressions from "./pages/Impressions";


function App() {
  const { t } = useTranslation();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blogs />} /> {/* NEW ROUTE */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/imprint" element={<Imprint />} />
      <Route path="/gtcs" element={<GTCs />} />
      {/* <Route path="/impressions" element={<Impressions />} /> */}
  
    </Routes>
  );
}

export default App;
