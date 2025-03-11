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

  return <div className=""></div>;
};

export default StatsSection;
