import React, { useState } from "react";
import "./ContactUs.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const ContactUs = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          toast.success("✅ Query Submitted Successfully"); // Show success toast
          setFormData({ name: "", email: "", message: "" }); // Clear form after sending
        },
        (error) => {
          console.error("Email send error:", error.text);
          toast.error("❌ Failed to send message. Please try again!"); // Show error toast
        }
      );
  };

  return (
    <section className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">{t("CONTACT US")}</h2>
        <div className="contact-content">
          {/* Left Side - Contact Form */}
          <div className="contact-form">
            <label>{t("Leave us a message")}</label>
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
                placeholder={t("Your Email Address")}
                required
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder={t("Your Message")}
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="send-btn">
                {t("Send")}
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="contact-info">
            <p style={{ color: "black" }}>
              <em>{t("Weekend UX")}</em>
            </p>
            <p style={{ color: "black" }}>{t("Fleethörn 7, 24103 Kiel")}</p>
            <p>
              <strong style={{ color: "black" }}>
                📞 {t("+49 1522 6426128")}
              </strong>
            </p>
            <p style={{ color: "black" }}>📧 {t("info@mira-ee.de")}</p>

            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="#" className="icon">
                <FaFacebookF />
              </a>
              <a href="#" className="icon">
                <FaTwitter />
              </a>
              <a href="#" className="icon">
                <FaInstagram />
              </a>
            </div>

            {/* Google Map */}
            <iframe
              title={t("Google Map")}
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.1643621641817!2d10.131216276771667!3d54.32257567300957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2434b3a0a7a5f%3A0x8c5e6b0f3c9d3f0!2sFleeth%C3%B6rn%207%2C%2024103%20Kiel%2C%20Germany!5e0!3m2!1sen!2s!4v1616171234567"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
};

export default ContactUs;
