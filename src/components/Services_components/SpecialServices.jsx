import React from "react";
import { FaMobileAlt, FaCode, FaBug } from "react-icons/fa";
import { motion } from "framer-motion";
import "./SpecialServices.css";
import { useTranslation } from "react-i18next";

const SpecialServices = () => {
  const { t } = useTranslation();

  const services = [
    { id: 1, title: t("Embedded Systems Development"), icon: <FaMobileAlt />, description: t("Tailor-made embedded solutions for industrial embedded systems and automotive embedded software, ensuring functional safety in embedded systems with edge computing in embedded systems and AI in embedded systems. Our expertise includes programming languages such as C, C++, Python, and Rust, running on FreeRTOS, Zephyr, and Embedded Linux for efficient and scalable embedded solutions.") },
    { id: 2, title: t("IoT Solutions & Smart Devices"), icon: <FaCode />, description: t("Development of connected intelligent systems with IoT embedded solutions, edge computing, industrial IoT (IIoT), cloud integration, and communication protocols such as MQTT, BLE, Zigbee, CAN, UART, SPI, and I²C. We specialize in wireless sensor networks (WSN), AI-powered predictive maintenance, OPC UA, SCADA systems, remote monitoring, and FOTA updates, ensuring seamless automation and real-time data processing on platforms like STM32, ESP32, ARM Cortex, and Raspberry Pi."), highlight: true },
    { id: 3, title: t("Cybersecurity & Secure Firmware"), icon: <FaBug />, description: t("Securing embedded systems with secure boot, AES encryption, firmware over-the-air (FOTA) updates, embedded system security, hardware security modules (HSM), secure communication for IoT, PKI and digital certificates, and IoT device authentication to enhance system integrity and protection against cyber threats. Our hardware platforms such as ARM Cortex and ESP32, combined with JTAG Debuggers and Logic Analyzers, enable advanced security implementations.") },
    { id: 4, title: t("Automotive Embedded Solutions"), icon: <FaMobileAlt />, description: t("Development of ECUs, automotive lighting, automotive electronics, high-voltage battery storage, automobile electric services, and communication systems for automotive embedded software to enhance vehicle performance and safety. Using CAN, SPI, and I²C protocols, we ensure efficient data communication across automotive networks, while Embedded Linux and FreeRTOS provide a robust operating environment.") },
    { id: 5, title: t("AI & Machine Learning for Embedded Systems"), icon: <FaCode />, description: t("Integrating AI development for real-time data analysis, automated decision-making, and machine learning in embedded systems to enhance predictive intelligence and smart automation. These solutions leverage ARM Cortex and Raspberry Pi hardware, with Python and Rust for AI-driven applications, supported by Git and Jenkins for continuous integration and deployment.") },
    { id: 6, title: t("Hardware Design & PCB Prototyping"), icon: <FaBug />, description: t("High-quality electronics development, engineering services, and high-voltage battery storage solutions for circuit board design, PCB prototyping, and hardware manufacturing. We specialize in designing custom embedded solutions using STM32, ESP32, and Raspberry Pi, integrating automotive check, mechanical engineering Regensburg, and HV batteries for advanced embedded systems.") },
  ];

  return (
    <section className="special-services">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("Our Special")} <span className="highlight">{t("Services")}</span> {t("we offer")}
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={`service-card ${service.highlight ? "blue-highlight" : ""}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="service-icon"
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
              {service.icon}
            </motion.div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialServices;
