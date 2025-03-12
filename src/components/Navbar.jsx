import React, { useEffect, useState } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Language Switcher Function
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Store language preference
  };

  return (
    <nav className="navbar">
      {/* Logo */}

      <div className="logo">
        <Link to="/">
          <img src="/images/logo-1.png" alt="MIRA Tech" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/">{t("Home")}</a>
        </li>
        <li>
          <a href="/about">{t("About us")}</a>
        </li>
        <li>
          <a href="/services">{t("Services")}</a>
        </li>
        <li>
          <a href="/contact">{t("Contact us")}</a>
        </li>
      </ul>

      {/* Language Selector */}
      <div className="language-selector">
        <FaGlobe className="globe-icon" />
        <span
          className={`lang ${i18n.language === "de" ? "active" : ""}`}
          onClick={() => changeLanguage("de")}
        >
          DE
        </span>{" "}
        |
        <span
          className={`lang ${i18n.language === "en" ? "active" : ""}`}
          onClick={() => changeLanguage("en")}
        >
          EN
        </span>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
