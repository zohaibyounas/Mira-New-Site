import React from "react";
import "./GTCs_Section.css";
import { useTranslation } from "react-i18next";

const GTCs_Section = () => {
    const { t } = useTranslation();

    return (
        <div className="privacy-policy-section">
            {Array.from({ length: 13 }).map((_, i) => (
                <div key={i} className="Sec_1">
                    <h2>{t(`${i + 1}. ${sections[i].title}`)}</h2>
                    {sections[i].content.map((text, index) => (
                        <p key={index}>{t(text)}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

const sections = [
    {
        title: "Scope",
        content: [
            "1.1. These General Terms and Conditions (GTC) apply to all business relationships between Mira Elektronikentwicklung GmbH (hereinafter referred to as 'Mira') and its customers.",
            "1.2. Deviating conditions of the customer are not recognized unless Mira expressly agrees to their validity in writing.",
            "1.3. Changes to these GTC will be communicated to the customer in writing or electronically. They are deemed approved if the customer does not object in writing within four weeks."
        ]
    },
    {
        title: "Subject of the Contract",
        content: [
            "2.1. The company engages in the development, trade, operation, and maintenance of hardware and software products of all kinds, as well as the provision of related services.",
            "2.2. The exact scope of services results from the respective offers, contract documents, or service descriptions."
        ]
    },
    {
        title: "Conclusion of Contract",
        content: [
            "3.1. A contract is concluded as soon as Mira confirms the customer's order or assignment in writing or electronically.",
            "3.2. Offers from Mira are non-binding and subject to change unless expressly designated as binding."
        ]
    },
    {
        title: "Obligations of the Customer",
        content: [
            "4.1. The customer is obliged to provide all necessary information correctly for contract fulfillment.",
            "4.2. The customer ensures that the provided data comply with legal requirements.",
            "4.3. The customer is responsible for the security and protection of their access data to the systems provided by Mira."
        ]
    },
    {
        title: "Prices and Payment Terms",
        content: [
            "5.1. The prices are according to the current price list or individual offer.",
            "5.2. All prices are exclusive of statutory VAT.",
            "5.3. Invoices are payable within 14 days of receipt without deduction."
        ]
    },
    {
        title: "Performance Period and Delay",
        content: [
            "6.1. Delivery and service deadlines are only binding if expressly agreed.",
            "6.2. In case of higher effort or unforeseeable events, the performance period is extended accordingly.",
            "6.3. If Mira is in delay, the customer must set a reasonable grace period."
        ]
    },
    {
        title: "Warranty and Defect Claims",
        content: [
            "7.1. The warranty period is twelve months from delivery unless longer periods are legally required.",
            "7.2. The customer must report defects in writing without delay.",
            "7.3. If a defect claim is justified, Mira has the right to rectify or replace the delivery."
        ]
    },
    {
        title: "Liability",
        content: [
            "8.1. Mira is only liable for damages in cases of intent or gross negligence.",
            "8.2. Liability for minor negligence is limited to foreseeable, contract-typical damages.",
            "8.3. Liability for indirect damages or lost profits is excluded."
        ]
    },
    {
        title: "Data Protection",
        content: [
            "9.1. Mira processes personal data in accordance with legal data protection regulations.",
            "9.2. More information on data processing can be found in Mira's privacy policy."
        ]
    },
    {
        title: "Confidentiality",
        content: [
            "10.1. Both parties agree to keep all confidential information of the other party secret.",
            "10.2. This obligation continues even after the contract ends."
        ]
    },
    {
        title: "Contract Duration and Termination",
        content: [
            "11.1. Contract duration and termination periods are defined in individual contracts.",
            "11.2. Termination must be in writing."
        ]
    },
    {
        title: "Final Provisions",
        content: [
            "12.1. German law applies, excluding the UN Convention on Contracts for the International Sale of Goods.",
            "12.2. Jurisdiction for disputes from this contract is Kiel, provided the customer is a merchant.",
            "12.3. If individual provisions of these GTC are invalid, the validity of the remaining provisions remains unaffected."
        ]
    },
    {
        title: "Company Information",
        content: [
            "Mira Elektronikentwicklung GmbH",
            "Fleethörn 7, 24103 Kiel",
            "Commercial Register: HRB 24555 KI",
            "Website: www.mira-ee.com",
            "Email: info@mira-ee.de"
        ]
    }
];

export default GTCs_Section;
