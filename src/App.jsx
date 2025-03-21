/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Imprint from "./pages/Imprint";
import GTCs from "./pages/GTCs";

import GTM from "./GTM";
import ConsentBanner from "./components/ConsentBanner";
import appData from "../src/data/app.json"; // adjust path if needed

function App() {
  const { t } = useTranslation();
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = JSON.parse(localStorage.getItem("userConsent"));
      if (
        consent &&
        (consent.preferences || consent.statistics || consent.marketing)
      ) {
        setConsentGiven(true);
      } else {
        setConsentGiven(false);
      }
    };

    checkConsent();
    window.addEventListener("storage", checkConsent);
    return () => window.removeEventListener("storage", checkConsent);
  }, []);

  return (
    <>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>{appData.settings.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="bslthemes" />
      </Helmet>

      {/* Conditionally render GTM */}
      {consentGiven && <GTM />}

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/gtcs" element={<GTCs />} />
        {/* <Route path="/impressions" element={<Impressions />} /> */}
      </Routes>

      {/* Consent Banner always visible */}
      <ConsentBanner />
    </>
  );
}

export default App;
