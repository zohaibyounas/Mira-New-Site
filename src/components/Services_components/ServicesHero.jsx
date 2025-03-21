/* eslint-disable no-irregular-whitespace */
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ServicesHero.css";
import { useTranslation } from "react-i18next";

const SuccessHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          {t("Make your")}{" "}
          <span className="highlight">{t("Digital presence")}</span>{" "}
          {t("matter")}
        </h1>
        <p className="subtitle">
          {t(
            "We are a full-service technology and digital solutions company with over 20 years of experience in the industry."
          )}
        </p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => navigate("/contact")}>
            {t("Start Project Now")}
            // eslint-disable-next-line no-irregular-whitespace        
          </button>
          <button className="secondary-btn" onClick={() => navigate("/about")}>
            {t("Read More")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessHero;
