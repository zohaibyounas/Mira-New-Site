import React from "react";
import "./WhyUs.css";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <section className="why-us">
      <div className="why-us-content">
        <h3 className="why-us-subtitle">{t("WHY US")}</h3>
        <h2 className="why-us-title">
          {t("We have over")} <span className="highlight">{t("10+ years")}</span> {t("in the Tech Industry")}
        </h2>
        <p className="why-us-description">
          {t("Over 10 Years of Expertise in Embedded Systems & Automotive")}
          <br />
          {t("We provide innovative solutions in embedded engineering, automotive technology, and security systems. Our expertise is built on years of collaboration with leading industry players.")}
        </p>

        <div className="why-us-features">
          <div className="feature">
            <span className="feature-icon">+</span>
            <div>
              <h4>{t("Dedicated Development Teams")}</h4>
              <p>{t("Our specialists deliver customized solutions for your projects – from concept to mass production.")}</p>
            </div>
          </div>

          <div className="feature">
            <span className="feature-icon">+</span>
            <div>
              <h4>{t("Certified Professionals")}</h4>
              <p>{t("Our experts are highly qualified and work with cutting-edge technologies.")}</p>
            </div>
          </div>

          <div className="feature">
            <span className="feature-icon">+</span>
            <div>
              <h4>{t("Reliable Support – Anytime You Need It")}</h4>
              <p>{t("We provide technical expertise and fast support whenever you need us.")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="why-us-images">
        <img src="/images/whyus-1.png" alt={t("Team Working")} className="image-one" />
        <img src="/images/whyus-2.png" alt={t("Happy Developers")} className="image-two" />
      </div>
    </section>
  );
};

export default WhyUs;
