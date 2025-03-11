import React, { useState } from "react";
import "./Features.css";
import { useTranslation } from "react-i18next";

// Feature Data with Translations
const Features = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null); // No active card initially

  const featuresData = [
    {
      icon: "/images/icon1.png", // Replace with actual icons
      title: t("Nobody takes ownership of the product?"),
      description: t(
        "You're worried that your team isn't capable of building your product. They are not sure if they can achieve the vision for the product. We would be happy to support you with this."
      ),
    },
    {
      icon: "/images/icon2.png",
      title: t("Don't have time for strategy?"),
      description: t(
        "You want to shift your focus from operational product management to strategic decisions because you believe you can have a greater impact on the success of the product. We would be happy to support you with this."
      ),
    },
    {
      icon: "/images/icon3.png",
      title: t(
        "They require a lot of communication effort, which slows down the project"
      ),
      description: t(
        "In fact, if a project is poorly planned and managed, it can lead to communication problems and delays. We can prevent this for you."
      ),
    },
  ];

  return (
    <section className="features">
      <h2 className="features-heading">
        {t("Do you")} <span className="highlight">{t("know")}</span> {t("that?")}
      </h2>

      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${activeIndex === index ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <img src={feature.icon} alt="Feature Icon" className="feature-icon" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
