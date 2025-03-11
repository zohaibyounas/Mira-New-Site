import React from "react";
import { useTranslation } from "react-i18next";
import "./PartnersSection.css";

const PartnersSection = () => {
  const { t } = useTranslation();

  const partners = [
    "/images/partner1.png",
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png",
    "/images/partner5.png",
  ];

  return (
    <section className="partners-section">
      <h3 className="partners-title">{t("Meet the People")}</h3>
      <h2 className="partners-heading">
        {t("We are")} <span className="highlight">{t("Working")}</span> {t("With")}
      </h2>

      {/* Infinite Scrolling Carousel */}
      <div className="carousel-container">
        <div className="partners-slider">
          {[...partners, ...partners, ...partners].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`${t("Partner")} ${index + 1}`}
              className="partner-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
