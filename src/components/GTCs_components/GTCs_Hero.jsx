import React from "react";
import "./GTCs_Hero.css";
import { useTranslation } from "react-i18next";

const GTCsHero = () => {
  const { t } = useTranslation();

  return (
    <div className="privacy-container">
      <div className="privacy-text">
        <h1>
          <span className="blue-text">MIRA</span> {t("Software Agency General")}{" "}
          <span className="blue-text">{t("Terms & Conditions")}</span>
        </h1>
        <p>{t("General Terms and Conditions (GTC) of Mira Elektronikentwicklung GmbH")}</p>
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
        <img src="/images/privacy-policy-image.png" alt={t("General Terms & Conditions")} />
      </div>
    </div>
  );
};

export default GTCsHero;
