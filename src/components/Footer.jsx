import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo and Description */}
        <div className="footer-left">
          <img src="/images/logo.png" alt="MIRA Tech" />
          <p className="footer-text">{t("The lion’s urn is affected by the element. At the lexicon consecutive, until the large wide rivers and the fountain, lorem suspends the powerful, with no life in torment.")}</p>
          <div className="footer-logos">
            <img src="/images/logos.png" alt="EU Logo" className="footer-logo-img" />
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="footer-links">
          <h3>{t("PAGES")}</h3>
          <ul>
            <li><Link to="/">{t("Home")}</Link></li>
            <li><Link to="/about">{t("About")}</Link></li>
            <li><Link to="/services">{t("Services")}</Link></li>
            <li><Link to="/gtcs">{t("GTCs")}</Link></li>
            <li><Link to="/privacypolicy">{t("Privacy Policy")}</Link></li>
            <li><Link to="/imprint">{t("Imprint")}</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>{t("SERVICES")}</h3>
          <ul>
            <li><a href="/services">{t("Embedded Systems Development")}</a></li>
            <li><a href="/services">{t("IoT & Smart Devices")}</a></li>
            <li><a href="/services">{t("Cybersecurity & Secure Embedded Systems")}</a></li>
            <li><a href="/services">{t("Hardware & PCB Prototyping")}</a></li>
          </ul>
        </div>

        {/* Right Section - Newsletter */}
        <div className="footer-newsletter">
          <h3>{t("NEWSLETTER")}</h3>
          <div className="newsletter-box">
            <input type="email" placeholder={t("Enter your email")} />
          </div>
          <div className="footer-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
