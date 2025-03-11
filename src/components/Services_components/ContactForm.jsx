import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const ContactForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = async (data) => {
    setStatusMessage(t("⏳ Sending..."));

    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    };

    emailjs
      .send(
        // eslint-disable-next-line no-irregular-whitespace
        "service_y6zacem", // Your EmailJS Service ID
        // eslint-disable-next-line no-irregular-whitespace
        "template_ig2kqbj", // Your EmailJS Template ID
        templateParams,
        // eslint-disable-next-line no-irregular-whitespace
        "rBlvscRL_SXhmKHx2" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.success("✅ Query Submitted Successfully");
          setStatusMessage("");
          reset(); // Clears form after submission
        },
        (error) => {
          console.error("Email send error:", error.text);
          toast.error("❌ Failed to send message. Try again!");
        }
      );
  };

  return (
    <section className="contact-form-section">
      <h2 className="contact-title">{t("Let's start a project together")}</h2>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            placeholder={t("First name")}
            {...register("firstName", {
              required: t("First name is required"),
            })}
          />
          <input
            type="text"
            placeholder={t("Last name")}
            {...register("lastName", { required: t("Last name is required") })}
          />
        </div>
        <p className="error">{errors.firstName?.message}</p>
        <p className="error">{errors.lastName?.message}</p>

        <div className="form-group">
          <input
            type="email"
            placeholder={t("E-mail")}
            {...register("email", {
              required: t("Email is required"),
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: t("Invalid email format"),
              },
            })}
          />
          <input
            type="tel"
            placeholder={t("Phone")}
            {...register("phone", {
              required: t("Phone number is required"),
              minLength: {
                value: 10,
                message: t("Must be at least 10 digits"),
              },
            })}
          />
        </div>
        <p className="error">{errors.email?.message}</p>
        <p className="error">{errors.phone?.message}</p>

        <button type="submit" className="submit-btn">
          {t("START PROJECT NOW")}
        </button>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>

      {/* Toast Notification Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
};

export default ContactForm;
