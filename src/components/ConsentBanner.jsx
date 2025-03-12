import { useState, useEffect } from "react";
import "./ConsentBanner.css"; // Importing the CSS file
import { useTranslation } from "react-i18next";

const ConsentBanner = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState({
    preferences: true,
    statistics: true,
    marketing: true,
  });

  useEffect(() => {
    const storedConsent = JSON.parse(localStorage.getItem("userConsent"));
    if (!storedConsent) {
      setShowBanner(true);
    } else {
      setConsent(storedConsent);
      pushToDataLayer(storedConsent);
    }
  }, []);

  const pushToDataLayer = (updatedConsent) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "update_consent",
        consent: updatedConsent,
      });
      console.log("DataLayer Updated:", updatedConsent);
    }
  };

  const handleConsentChange = (category) => {
    setConsent((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleAcceptSelection = () => {
    localStorage.setItem("userConsent", JSON.stringify(consent));
    window.dispatchEvent(new Event("storage"));
    pushToDataLayer(consent);
    setShowBanner(false);
  };

  const handleRefuseAll = () => {
    const refusedConsent = {
      preferences: false,
      statistics: false,
      marketing: false,
    };
    localStorage.setItem("userConsent", JSON.stringify(refusedConsent));
    window.dispatchEvent(new Event("storage"));
    pushToDataLayer(refusedConsent);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div id="cookie-banner" className="cookie-banner">
      <p>
        {t(
          "We use cookies for better experience and analytics. Select your preferences:"
        )}
      </p>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={consent.preferences}
            onChange={() => handleConsentChange("preferences")}
          />
          <span>{"Preferences"}</span>
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={consent.statistics}
            onChange={() => handleConsentChange("statistics")}
          />
          <span>{"Statistics"}</span>
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={consent.marketing}
            onChange={() => handleConsentChange("marketing")}
          />
          <span>{"Marketing"}</span>
        </label>
      </div>

      <div className="button-container">
        <button onClick={handleRefuseAll} className="reject-button">
          {"Refuse All"}
        </button>
        <button onClick={handleAcceptSelection} className="accept-button">
          {"Accept Selection"}
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
