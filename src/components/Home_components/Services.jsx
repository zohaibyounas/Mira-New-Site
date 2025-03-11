import React from "react";
import "./Services.css"; // Importing CSS file
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="services">
      {/* Services Header */}
      <div className="services-header">
        <p className="services-subtitle">{t("SERVICES")}</p>
        <h2 className="services-title">
          {t("Our Expertise in IoT,")} <span className="highlight">{t("Embedded Systems")}</span> {t("& Secure Software")}
        </h2>
      </div>

      {/* Services Cards */}
      <div className="services-container">
        {/* Card 1 */}
        <div className="service-card">
          <h3>{t("Embedded Systems Development")}</h3>
          <p>{t("Custom-built industrial embedded systems for automotive embedded software, ensuring functional safety in embedded systems with edge computing in embedded systems and AI-powered predictive maintenance.")}</p>
          <a href="/services" className="learn-more">{t("LEARN MORE")} ➝</a>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <h3>{t("IoT & Smart Devices")}</h3>
          <p>{t("Development of connected smart devices with secure communication for IoT device authentication, Bluetooth Low Energy (BLE) integration, MQTT protocol for IoT, cloud integration with embedded systems, and firmware over-the-air (FOTA) updates.")}</p>
          <a href="/services" className="learn-more">{t("LEARN MORE")} ➝</a>
        </div>

        {/* Card 3 */}
        <div className="service-card">
          <h3>{t("Cybersecurity & Secure Embedded Systems")}</h3>
          <p>{t("Protecting embedded systems from cyber threats through AES encryption in embedded systems, secure boot and firmware encryption, hardware security modules (HSM), secure communication for IoT, and PKI and digital certificates.")}</p>
          <a href="/services" className="learn-more">{t("LEARN MORE")} ➝</a>
        </div>

        {/* Card 4 */}
        <div className="service-card">
          <h3>{t("Hardware & PCB Prototyping")}</h3>
          <p>{t("Design and manufacturing of high-performance circuit boards for industrial applications, incorporating PCB design and prototyping, ARM Cortex development, microcontrollers (MCU) programming, and IPC standards for PCB.")}</p>
          <a href="/services" className="learn-more">{t("LEARN MORE")} ➝</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
