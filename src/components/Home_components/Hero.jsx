import React, { useState } from "react";
import "./Hero.css";
import { FaGlobe, FaCog, FaBatteryFull, FaCar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS

const Hero = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate email using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      toast.error("Please enter an email address!");
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // Define template parameters
    const templateParams = {
      email: email,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_y6zacem", // Your EmailJS Service ID
        "template_ig2kqbj", // Your EmailJS Template ID
        templateParams,
        "rBlvscRL_SXhmKHx2" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Subscription successful!"); // Show success toast
          setEmail(""); // Clear email field
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong. Please try again."); // Show error toast
        }
      );
  };

  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <div className="content">
        <h1>
          {t("High-Quality")} <br />
          {t("Embedded Engineering")} {t("For")}{" "}
          {t("solving your challenges in")}{" "}
          <span className="highlight_01"> {t("technology")}</span> {t("&")}
          <span className="highlight_01"> {t("innovation")}</span>
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
            value={email}
            onChange={handleEmailChange}
            placeholder={t("Enter your email for latest tech news")}
          />
          <button onClick={handleSubscribe}>{t("Subscribe")}</button>
        </div>

        <div className="experts">
          <p>{t("EXPERT IN")}:</p>
          <div className="logos">
            <span className="icons">
              <FaGlobe className="icons" size={20} /> {t("Embedded systems")} |
            </span>
            <span className="icons">
              <FaCog className="icons" size={20} /> {t("Industrial Automation")} |
            </span>
            <span className="icons">
              <FaBatteryFull className="icons" size={20} /> {t("Smart Energy")} |
            </span>
            <span className="icons">
              <FaCar className="icons" size={20} /> {t("Advanced Engineering")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
