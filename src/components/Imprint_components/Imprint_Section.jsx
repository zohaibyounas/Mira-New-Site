import React from "react";
import "./Imprint_Section.css";
import { useTranslation } from "react-i18next";

const Imprint_Section = () => {
    const { t } = useTranslation();

    return (
        <div className="privacy-policy-section">
            <div className="Sec_1">
                <p>{t("Postal address")}</p>
                <p>{t("Mira Elektronikentwicklung GmbH")}</p>
                <p>{t("Fleethörn 7")}</p>
                <p>{t("24103 Kiel")}</p>
                <p>{t("Email")}: raza.abbas@mira-ee.de</p>
                <p>{t("Phone")}: +49 1522 6426128</p>
                <p>{t("Commercial register number")}: HRB 24555 B</p>
                <p>{t("Responsible for content")}: Raza Abbas</p>

                <p>
                    {t("The European Commission provides a platform for online dispute resolution (ODR), which you can find here")} 
                    <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer"> ec.europa.eu/consumers/odr</a>.
                </p>

                <h3>{t("Disclaimer")}</h3>
                <p>{t("DisclaimerText")}</p>

                <h3>{t("Image Material")}</h3>
                <p>{t("Used hero image from Unsplash")}</p>
                <p>{t("Others are our own images")}</p>

                <h3>{t("Legal Notice")}</h3>
                <p>{t("LegalNoticeText")}</p>

                <h3>{t("Liability for links")}</h3>
                <p>{t("LiabilityForLinksText")}</p><br />
            </div>
        </div>
    );
};

export default Imprint_Section;
