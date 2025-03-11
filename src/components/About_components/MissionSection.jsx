import React from "react";
import "./MissionSection.css";
import { useTranslation } from "react-i18next";

const MissionSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mission-section">
      {/* Left Side Image */}
      <div className="mission-image">
        <div className="blue-background">
          <img src="/images/person-pointing.png" alt={t("Our Mission")} className="mission-img" />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="mission-content">
        <h2 className="mission-title">{t("Our Mission")}</h2>
        <p>{t("At MIRA Electronics Development, we optimize performance, reliability, and security through customized embedded solutions. As a leading software development agency in Kiel, we specialize in industrial automation, AI-driven analytics, and smart manufacturing, helping enterprises drive efficiency and innovation.Recognized among Schleswig-Holstein's Best 50, we integrate cutting-edge hardware and software to deliver scalable, future-proof solutions in automotive, healthcare, industrial IoT, and cybersecurity. Partner with us to transform your vision into reality with intelligent, high-performance technology.")}</p>
      </div>
    </section>
  );
};

export default MissionSection;
