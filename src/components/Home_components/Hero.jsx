import React from "react";
import "./Hero.css";
import { FaGlobe, FaCog, FaBatteryFull, FaCar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <div className="content">
        <h1>
          {t("High-Quality")} <br />
          {t("Embedded Engineering")} {t("For")}{" "}
          {t("solving your challenges in")}{" "}
          <span className="highlight"> {t("technology")}</span> {t("&")}
          <span className="highlight"> {t("innovation")}</span>
        </h1>
        <p className="subtitle">
          {t(
            "Whoever drives innovation, like life itself, moves forward with determination."
          )}
          <br />
          {t("The future belongs to those who create it.")}
        </p>
        <div className="subscription">
          <input
            type="email"
            placeholder={t("Enter your email for latest tech news")}
          />
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
          <p>EXPERT IN:</p>
          <div className="logos">
            <span className="icons">
              <FaGlobe className="icons" size={20} /> Mira Embedded |
            </span>
            <span className="icons">
              <FaCog className="icons" size={20} /> Industrial Automation |
            </span>
            <span className="icons">
              <FaBatteryFull className="icons" size={20} /> Smart Energy |
            </span>
            <span className="icons">
              <FaCar className="icons" size={20} /> Advanced Engineering
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
