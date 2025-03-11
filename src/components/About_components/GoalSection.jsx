import React from "react";
import "./GoalSection.css";
import { useTranslation } from "react-i18next";

const GoalSection = () => {
  const { t } = useTranslation();

  return (
    <section className="goal-section">
      {/* Left Side Image */}
      <div className="goal-image">
        <img src="/images/goal-meeting.png" alt={t("Our Goal")} className="goal-img" />
      </div>

      {/* Right Side Content */}
      <div className="goal-content">
        <h2 className="goal-title">{t("Our Goal")}</h2>
        <p>
          {t("MIRA Electronics Development is your trusted partner for embedded systems and custom software solutions. As an IT service provider in Kiel, Germany, we specialize in firmware, real-time operating systems, and IoT-driven automation, ensuring seamless integration and enhanced security, efficiency, and performance.Committed to innovation and excellence, we develop scalable, AI-powered solutions for industrial automation, cloud computing, and sensor fusion, enabling businesses to achieve digital transformation and sustainable growth.At MIRA, we don’t just create software—we engineer intelligent, reliable, and future-ready embedded solutions that empower businesses to thrive in a connected world. Let's shape the future together!")}
        </p>
      </div>
    </section>
  );
};

export default GoalSection;
