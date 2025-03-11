import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "./StatsSection.css";
import { useTranslation } from "react-i18next";

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { id: 1, value: 782, label: t("WORLDWIDE CUSTOMERS") },
    { id: 2, value: 12000, label: t("PROJECTS DONE"), suffix: "K" },
    { id: 3, value: 5896, label: t("IT PRODUCTS") },
    { id: 4, value: 890, label: t("PROJECTS SPEND"), prefix: "$", suffix: "K" },
  ];

  return (
    <section className="stats-section">
      <motion.div
        className="stats-grid"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="stat-card"
            whileHover={{ scale: 1.1 }}
          >
            <CountUp
              start={0}
              end={stat.value}
              duration={3}
              separator=","
              prefix={stat.prefix || ""}
              suffix={stat.suffix || ""}
            />
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;
