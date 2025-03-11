import React from "react";
import "./ServicesSection.css";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    { id: "01", title: t("Embedded Engineering"), description: t("Innovative Embedded Systems & Security Solutions for a Connected World. We specialize in high-performance embedded systems and cybersecurity solutions that empower businesses to connect their devices securely and efficiently. Our cutting-edge technologies ensure seamless communication, optimized system performance, and maximum protection against cyber threats in industrial and IoT environments."), link: "#" },
    { id: "02", title: t("Next-Gen Embedded Solutions"), description: t("Next-Gen Embedded Solutions for Smart & Industrial Applications. We develop scalable, energy-efficient embedded systems that drive the next generation of IoT, automotive, and industrial automation. Our expertise ensures seamless hardware-software integration, high computing efficiency, and future-ready solutions for AI-driven smart devices and critical infrastructure."), link: "#" },
    { id: "03", title: t("Secure & Scalable Engineering"), description: t("Secure & Scalable Engineering for Future-Proof Systems. As digital transformation accelerates, our secure and scalable embedded architectures enable businesses to adapt and grow. We provide end-to-end security frameworks, real-time data protection, and cyber-resilient solutions tailored for IoT, healthcare, and mission-critical industries."), link: "#" },
    { id: "04", title: t("Engineering Excellence"), description: t("Engineering Excellence in Embedded Systems & Cybersecurity. At Mira, we focus on engineering excellence to deliver high-performance embedded solutions, AI-driven automation, and advanced cybersecurity frameworks. Our team ensures long-term reliability, compliance with industry standards, and cutting-edge innovations for industrial applications."), link: "#" },
    { id: "05", title: t("Driving Innovation in Embedded Systems"), description: t("Driving Innovation in Embedded Systems, Security & IoT. We integrate intelligent embedded technologies, cybersecurity, and real-time IoT solutions to create highly efficient and secure systems. Our expertise helps businesses build connected, data-driven infrastructure that meets the demands of Industry 4.0, automotive technology, and industrial IoT (IIoT)."), link: "#" },
    { id: "06", title: t("Technology & Security Solutions"), description: t("Advanced Technology & Security Solutions for Industrial & IoT Ecosystems. Our technology-first approach delivers state-of-the-art embedded security, AI-powered automation, and robust industrial solutions. From encrypted communication to real-time data analytics, we enable organizations to enhance performance, resilience, and scalability in connected environments."), link: "#" }
  ];

  return (
    <section className="services-section">
      <h3 className="services-subtitle">{t("WHAT WE DO")}</h3>
      <h2 className="services-title">
        {t("We are a")} <span className="highlight">{t("full-service")}</span> {t("agency")}
      </h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={service.id} className={`service-card ${index % 2 !== 0 ? "blue-bg" : ""}`}>
            <h3 className="service-id">{service.id}</h3>
            <h4 className="service-title">{service.title}</h4>
            <p className="service-description">
              {service.description} <a href={service.link} className="read-more"></a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
