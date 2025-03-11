import React from "react";
import "./Digital_solutions.css";
import { useTranslation } from "react-i18next";

const DigitalSolutions = () => {
  const { t } = useTranslation();

  const timelineData = [
    {
      number: "#1",
      title: t("Our Expertise"),
      description: t("Embedded Systems & PCB Design\nAI-Based Quality Control\nOur AI-driven automation ensures real-time data analysis."),
    },
    {
      number: "#2",
      title: t("Sprint planning"),
      description: t("Our sprint roadmap enhances IT enterprises with collaborative planning, ensuring clarity and efficiency in agile development."),
    },
    {
      number: "#3",
      title: t("Tech architecture"),
      description: t("We convert monolithic apps into microservices, boosting agility and development speed for IT companies."),
    },
    {
      number: "#4",
      title: t("Standups & weekly demos"),
      description: t("Agile Collaboration & Team Alignment Standups, demos, and reviews improve communication in IT companies."),
    },
    {
      number: "#5",
      title: t("Code reviews"),
      description: t("Code reviews detect memory leaks, file leaks, and performance issues, ensuring high-quality software. With IT support and software development expertise."),
    },
    {
      number: "#6",
      title: t("Iterative delivery"),
      description: t("We streamline implementation with checkpoints, ensuring efficiency and adaptability, backed by expertise in software development agency Fürth and IT support."),
    },
  ];

  return (
    <section className="timeline">
      <h3 className="timeline-subtitle">{t("A Gateway to Digital Solutions")}</h3>
      <h2 className="timeline-title">
        <span className="highlight">{t("MIRA")}</span> {t("Empowering Future with Innovative Solutions!")}
      </h2>

      <div className="timeline-container">
        {/* Blue Timeline Line */}
        <div className="timeline-line">
          <div className="timeline-marker" style={{ left: "12%" }}></div>
          <div className="timeline-marker" style={{ left: "49%" }}></div>
          <div className="timeline-marker" style={{ left: "89%" }}></div> 

          {/* Trophy Icon at the End */}
          <div className="timeline-trophy">🏆</div>
        </div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-card ${index % 2 === 0 ? "top" : "bottom"}`}>
            <h3 className="timeline-number">
              {item.number} <span>{item.title}</span>
            </h3>
            <p className="timeline-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalSolutions;
