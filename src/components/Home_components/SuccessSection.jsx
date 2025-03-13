import React, { useState } from "react";
import "./SuccessSection.css"; // Importing CSS file
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const SuccessSection = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_y6zacem", // Your EmailJS Service ID
        "template_ig2kqbj", // Your EmailJS Template ID
        templateParams,
        "rBlvscRL_SXhmKHx2" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.success("✅ Query Submitted Successfully");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Email send error:", error.text);
          toast.error("❌ Failed to send request. Please try again!");
        }
      );
  };
  return (
    <div className="consultation-section">
      {/* Left Side - Form */}
      <div className="consultation-form">
        <h3>{t("Consultation for Free")}</h3>
        <p>{t("Partner with us to power the future of technology!")}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t("Your Name")}
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder={t("Your Email")}
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder={t("Your Message")}
            rows="3"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">{t("SEND")}</button>
        </form>
      </div>

      {/* Right Side - Business Success Stats */}
      <div className="business-success">
        <h4>{t("OUR SUCCESS")}</h4>
        <h2>
          {t("We have helped more than")} <br /> {t("50+ clients worldwide")}
        </h2>
        <p>
          {t(
            "Our refined process delivers high-quality results with a client-focused approach."
          )}
        </p>

        <div className="stats-container">
          <div className="stat-box">
            <div className="circle">90%</div>
            <p>{t("Advanced Embedded Systems Development for Industry 4.0")}</p>
          </div>
          <div className="stat-box">
            <div className="circle">85%</div>
            <p>
              {t(
                "Automotive Engineering Solutions for Next-Generation Mobility"
              )}
            </p>
          </div>
          <div className="stat-box">
            <div className="circle">75%</div>
            <p>
              {t("Optimized Industrial Automation for Increased Efficiency")}
            </p>
          </div>
          <div className="stat-box">
            <div className="circle">95%</div>
            <p id="a-1">{t("Secure & Scalable Embedded Technologies.")}</p>
            <ToastContainer position="top-center" autoClose={3000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
