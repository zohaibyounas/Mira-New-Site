import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./TeamSection.css";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: t("Raza Abbas"),
      role: t("Code Expert"),
      image: "/images/team-1.png",
      linkedin:
        "https://www.linkedin.com/in/raza-abbas-4576a0147?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailto:raza.abbas@mira-ee.de",
    },
    {
      id: 2,
      name: t("Selma Yüceer"),
      role: t("Human Resources Manager"),
      image: "/images/team-2.png",
      linkedin: "https://www.linkedin.com/company/mira-elektronikentwicklung/",
      email: "mailto:nadire.yueceer@mira-ee.de",
    },
    {
      id: 3,
      name: t("Irtaza Madad"),
      role: t("Technical Project Manager"),
      image: "/images/team-3.png",
      linkedin:
        "https://www.linkedin.com/in/irtaza-madad-naqvi-798b5715a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailto:irtaza.madad@mira-ee.de",
    },
  ];

  return (
    <section className="team-section">
      <h3 className="team-subtitle">{t("TEAM")}</h3>
      <h2 className="team-title">
        {t("Our certified")} <span className="highlight">{t("experts")}</span>
      </h2>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.image} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="team-socials">
              {/* LinkedIn Icon with link */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
              {/* Email Icon with mailto link */}
              <a href={member.email}>
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Small avatars & request link */}
      <div className="team-footer">
        <div className="team-avatars">
          <img
            src="/images/team-1.png"
            alt={t("Avatar 1")}
            className="avatar"
          />
          <img
            src="/images/team-2.png"
            alt={t("Avatar 2")}
            className="avatar"
          />
          <img
            src="/images/team-3.png"
            alt={t("Avatar 3")}
            className="avatar"
          />
        </div>
        <p className="team-request">
          {t(
            "Meet Our Team – A Passionate Group of Experts Dedicated to Your Success"
          )}{" "}
          <a href="/services" className="request-link">
            {t("Explore more")} →
          </a>
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
