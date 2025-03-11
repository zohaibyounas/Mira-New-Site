import React from "react";
import "./PrivacyPolicySection.css";
import { useTranslation } from "react-i18next";

const PrivacyPolicySection = () => {
    const { t } = useTranslation();

    return (
        <div className="privacy-policy-section">
            <div className="Sec_1">
                <h2>{t("1. General Information")}</h2>
                <p>{t("The protection of your personal data is important to us. This privacy policy explains which data we collect, how we use it, and your rights under the GDPR.")}</p>

                <h3>{t("Responsible Entity")}</h3>
                <p>{t("Mira Elektronikentwicklung GmbH, Fleethörn 7, 24103 Kiel, Phone: +49 152 26426128, Email: info@mira-ee.de")}</p>

                <h3>{t("Data Protection Officer")}</h3>
                <p>{t("For any questions regarding data processing, you can contact our data protection officer at datenschutz@mira-ee.de")}</p><br />
            </div>

            {/* Section 2 */}
            <div className="Sec_1">
                <h2>{t("2. Collection and Processing of Personal Data")}</h2>

                <h3>{t("Automatically Collected Data")}</h3>
                <p>{t("During website visits, certain data is automatically collected, such as IP address, access time, visited pages, browser version, and operating system.")}</p>

                <h3>{t("Data from Contact Forms")}</h3>
                <p>{t("When you contact us via email or contact form, we process your name, email address, and message content.")}</p>

                <h3>{t("Use of Cookies")}</h3>
                <p>{t("We use cookies to enhance website usability. You can adjust cookie settings anytime.")}</p><br />
            </div>

            {/* Section 3 */}
            <div className="Sec_1">
                <h2>{t("3. Web Analysis & Tracking Technologies")}</h2>

                <h3>{t("Google Analytics")}</h3>
                <p>{t("This website uses Google Analytics for site usage analysis. Data may be transmitted to Google servers in the USA.")}</p>

                <h3>{t("LinkedIn Insight Tag")}</h3>
                <p>{t("We use LinkedIn Insight Tag for website analysis and targeted advertising.")}</p>

                <h3>{t("Google Tag Manager")}</h3>
                <p>{t("Allows management of analytics and marketing tags.")}</p>

                <h3>{t("SimilarWeb")}</h3>
                <p>{t("Used to analyze website visitor behavior.")}</p>

                <h3>{t("Semrush")}</h3>
                <p>{t("Provides search engine and web traffic analysis.")}</p>

                <h3>{t("Leadfeeder")}</h3>
                <p>{t("Analyzes which companies visit our website.")}</p><br />
            </div>

            {/* Section 4 */}
            <div className="Sec_2">
                <h2>{t("4. Your Rights as a Data Subject")}</h2>
                <p>{t("You have the right to request access, rectification, deletion, restriction of processing, and data portability under GDPR.")}</p>
            </div>

            <div>
                <h2>{t("5. Changes to this Privacy Policy")}</h2>
                <p>{t("We reserve the right to update this policy to comply with legal requirements.")}</p>
                <br />
            </div>

            <div>
                <h4>{t("Last updated: 01.06.2024")}</h4>
            </div>
        </div>
    );
};

export default PrivacyPolicySection;
