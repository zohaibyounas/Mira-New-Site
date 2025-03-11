import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const faqs = [
    {
      question: t("Q1. What measures do you have in place to ensure the security of our data and information?"),
      answer: t("We employ a multi-layered approach to data security, including encryption, access controls, and regular security audits. Our systems are designed to meet or exceed industry standards for data protection."),
    },
    {
      question: t("Q2. How do you ensure that our sensitive information is protected from unauthorized access?"),
      answer: t("We utilize advanced authentication methods, such as two-factor authentication to restrict access to sensitive information. Additionally, our security protocols are continuously monitored and updated to address emerging threats."),
    },
    {
      question: t("Q3. Can you provide details about your company's security protocols and certifications?"),
      answer: t("We adhere to rigorous security protocols based on industry best practices and standards, such as ISO 27001 and SOC 2. Our commitment to security is further demonstrated through our certifications and compliance with relevant regulatory requirements."),
    },
    {
      question: t("Q4. How do you handle security breaches or incidents?"),
      answer: t("In the event of a security breach or incident, we have established incident response procedures to swiftly mitigate the threat and minimize the impact on our clients. Our dedicated team of security experts conducts thorough investigations and implements remediation measures to prevent future occurrences."),
    },
    {
      question: t("Q5. What steps do you take to ensure the safety and security of our employees and contractors?"),
      answer: t("Employee and contractor safety is paramount to us. We provide comprehensive training on security awareness and emergency response procedures. Additionally, we conduct regular assessments of workplace safety and security measures to identify and address any vulnerabilities."),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section 
      ref={ref}
      className="faq-section"
      initial={{ opacity: 0, y: 20 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.5 }}
    >
      <h2 className="faq-title">
        {t("Frequently Asked")} <span className="highlight">{t("Questions")}</span>
      </h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="faq-question">
              {faq.question}
              {openIndex === index ? <FaMinus className="icon" /> : <FaPlus className="icon" />}
            </div>
            {openIndex === index && (
              <motion.p 
                className="faq-answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQ;
