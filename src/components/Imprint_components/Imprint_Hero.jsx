import React from "react";
import "./Imprint_Hero.css";
import { useTranslation } from "react-i18next";

const ImprintHero = () => {
  const { t } = useTranslation();

  return (
    <div className="privacy-container">
      <div className="privacy-text">
        <h1>
          <span className="blue-text">MIRA</span> {t("Software")}{" "}
          <span className="blue-text">{t("Agency Imprints")}</span>
        </h1>
        <p>{t("We value your privacy")}</p>
        <div className="subscribe-box">
          <input
            type="email"
            placeholder={t("Enter your email for your latest tech news")}
            className="email-input"
          />
          <button className="subscribe-btn">{t("Subscribe")}</button>
        </div>
      </div>
      <div className="privacy-image">
        <img src="/images/privacy-policy-image.png" alt={t("Imprint")} />
      </div>
    </div>
  );
};

export default ImprintHero;
