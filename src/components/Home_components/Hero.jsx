import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";
const Hero = () => {
  
  const { t } = useTranslation();
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <div className="content">
        <h1>
        {t("High-Quality")} <br />
        {t("Embedded Engineering")} {t("For")} {t("solving your challenges in")} <span className="highlight"> {t("technology")}</span> {t("&")}<span className="highlight"> {t("innovation")}</span></h1>
        <p className="subtitle">
          {t("Whoever drives innovation, like life itself, moves forward with determination.")}
          <br />{t("The future belongs to those who create it.")}

        </p>
        <div className="subscription">
          <input type="email" placeholder={t("Enter your email for latest tech news")} />
          <button>{t("Subscribe")}</button>
        </div>
        {/* <ul className="features">
          <li>✅ Reliable & certified technology – built for the future
          </li>
          <li>✅ Innovative solutions tailored to your industry

          </li>
          <li>✅  Stay ahead – subscribe for exclusive insights!


          </li>
        </ul> */}
        <div className="experts">
          <p>{t("EXPERT IN:")}</p>
          <div className="logos">
            <span>🌍 {t("Mira Embedded")}|</span>
            <span>⚙ {t("Industrial Automation")} |</span>
            <span>🔋 {t("Smart Energy ")}|</span>
            <span>🚗 {t("Advanced Engineering")}
            </span>
            {/* <span>🔗 PIXON</span> */}
          </div>
        </div>
      </div>
    </div >
  );
}
export default Hero;