import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  de: {
    // Home-Section-1
    translation: {
      Home: "Startseite",
      "About us": "Über uns",
      Services: "Dienstleistungen",
      "Contact us": "Kontakt",
      "Looking for Expert Solutions?": "Suchen Sie nach Expertenlösungen?",
      Explore: "Erkunden",
      "High-Quality": "Hochwertig",
      "Embedded Engineering": "Eingebettete Technik",
      For: "Zur",
      "solving your challenges in": "Lösung Ihrer Herausforderungen",
      technology: "Technologie",
      innovation: "Innovation",
      "Whoever drives innovation, like life itself, moves forward with determination.":
        "Wer Innovation vorantreibt, bewegt sich wie das Leben selbst entschlossen vorwärts.",
      "The future belongs to those who create it. ":
        "Die Zukunft gehört denen, die sie erschaffen.",
      Subscribe: "Abonniere",
      "Enter your email for latest tech news":
        "Geben Sie Ihre E-Mail ein, um die neuesten Tech-News zu erhalten.",
      "EXPERT IN:": "EXPERT IN:",
      "Mira Embedded": "Mira Eingebettet",
      "Industrial Automation": "Industrielle Automatisierung",
      "Smart Energy": "Intelligente Energie",
      "Advanced Engineering": "Fortschrittliches Engineering",
      "Your Email Address": "Ihre E-Mail-Adresse",

      // Home-Section-2
      SERVICES: "DIENSTLEISTUNGEN",
      "Our Expertise in IoT,": "Unsere Expertise in IoT,",
      "Embedded Systems": "Eingebettete Systeme",
      "& Secure Software": "& Sichere Software",

      "Embedded Systems Development": "Entwicklung eingebetteter Systeme",
      "Custom-built industrial embedded systems for automotive embedded software, ensuring functional safety in embedded systems with edge computing in embedded systems and AI-powered predictive maintenance.":
        "Maßgeschneiderte industrielle eingebettete Systeme für Automobilsoftware, die funktionale Sicherheit in eingebetteten Systemen mit Edge Computing und KI-gestützter vorausschauender Wartung gewährleisten.",

      "IoT & Smart Devices": "IoT & Intelligente Geräte",
      "Development of connected smart devices with secure communication for IoT device authentication, Bluetooth Low Energy (BLE) integration, MQTT protocol for IoT, cloud integration with embedded systems, and firmware over-the-air (FOTA) updates.":
        "Entwicklung vernetzter intelligenter Geräte mit sicherer Kommunikation für die IoT-Geräteauthentifizierung, Integration von Bluetooth Low Energy (BLE), MQTT-Protokoll für IoT, Cloud-Integration mit eingebetteten Systemen und Firmware-Over-the-Air (FOTA)-Updates.",

      "Cybersecurity & Secure Embedded Systems":
        "Cybersicherheit & Sichere eingebettete Systeme",
      "Protecting embedded systems from cyber threats through AES encryption in embedded systems, secure boot and firmware encryption, hardware security modules (HSM), secure communication for IoT, and PKI and digital certificates.":
        "Schutz eingebetteter Systeme vor Cyber-Bedrohungen durch AES-Verschlüsselung in eingebetteten Systemen, sicheres Booten und Firmware-Verschlüsselung, Hardware-Sicherheitsmodule (HSM), sichere Kommunikation für IoT sowie PKI und digitale Zertifikate.",

      "Hardware & PCB Prototyping": "Hardware- & PCB-Prototyping",
      "Design and manufacturing of high-performance circuit boards for industrial applications, incorporating PCB design and prototyping, ARM Cortex development, microcontrollers (MCU) programming, and IPC standards for PCB.":
        "Entwicklung und Herstellung von Hochleistungsplatinen für industrielle Anwendungen, einschließlich PCB-Design und Prototyping, ARM-Cortex-Entwicklung, Mikrocontroller-Programmierung (MCU) und IPC-Standards für PCB.",

      "LEARN MORE": "MEHR ERFAHREN",

      // Home-Section-3
      "Do you": "Weißt du",
      know: "es",
      "that?": "schon?",

      "Nobody takes ownership of the product?":
        "Niemand übernimmt die Verantwortung für das Produkt?",
      "You're worried that your team isn't capable of building your product. They are not sure if they can achieve the vision for the product. We would be happy to support you with this.":
        "Sie befürchten, dass Ihr Team nicht in der Lage ist, Ihr Produkt zu entwickeln. Sie sind sich nicht sicher, ob sie die Vision für das Produkt erreichen können. Wir helfen Ihnen gerne dabei.",

      "Don't have time for strategy?": "Keine Zeit für Strategie?",
      "You want to shift your focus from operational product management to strategic decisions because you believe you can have a greater impact on the success of the product. We would be happy to support you with this.":
        "Sie möchten sich von der operativen Produktverwaltung auf strategische Entscheidungen verlagern, da Sie glauben, dass Sie einen größeren Einfluss auf den Erfolg des Produkts haben können. Wir helfen Ihnen gerne dabei.",

      "They require a lot of communication effort, which slows down the project":
        "Sie erfordern einen hohen Kommunikationsaufwand, der das Projekt verlangsamt",
      "In fact, if a project is poorly planned and managed, it can lead to communication problems and delays. We can prevent this for you.":
        "Tatsächlich kann ein schlecht geplantes und verwaltetes Projekt zu Kommunikationsproblemen und Verzögerungen führen. Wir können dies für Sie verhindern.",

      // Home-Section-4
      "A Gateway to Digital Solutions": "Ein Tor zu digitalen Lösungen",
      MIRA: "MIRA",
      "Empowering Future with Innovative Solutions!":
        "Die Zukunft mit innovativen Lösungen stärken!",

      "Our Expertise": "Unsere Expertise",
      "Embedded Systems & PCB Design\nAI-Based Quality Control\nOur AI-driven automation ensures real-time data analysis.":
        "Eingebettete Systeme & PCB-Design\nKI-basierte Qualitätskontrolle\nUnsere KI-gesteuerte Automatisierung gewährleistet Echtzeit-Datenanalyse.",

      "Sprint planning": "Sprint-Planung",
      "Our sprint roadmap enhances IT enterprises with collaborative planning, ensuring clarity and efficiency in agile development.":
        "Unsere Sprint-Roadmap verbessert IT-Unternehmen durch kollaborative Planung und sorgt für Klarheit und Effizienz in der agilen Entwicklung.",

      "Tech architecture": "Technische Architektur",
      "We convert monolithic apps into microservices, boosting agility and development speed for IT companies.":
        "Wir konvertieren monolithische Apps in Microservices und steigern so die Agilität und Entwicklungsgeschwindigkeit für IT-Unternehmen.",

      "Standups & weekly demos": "Stand-ups & wöchentliche Demos",
      "Agile Collaboration & Team Alignment Standups, demos, and reviews improve communication in IT companies.":
        "Agile Zusammenarbeit & Teamausrichtung Stand-ups, Demos und Reviews verbessern die Kommunikation in IT-Unternehmen.",

      "Code reviews": "Code-Überprüfungen",
      "Code reviews detect memory leaks, file leaks, and performance issues, ensuring high-quality software. With IT support and software development expertise.":
        "Code-Überprüfungen erkennen Speicherlecks, Dateilecks und Leistungsprobleme und gewährleisten qualitativ hochwertige Software. Mit IT-Support und Softwareentwicklungs-Expertise.",

      "Iterative delivery": "Iterative Bereitstellung",
      "We streamline implementation with checkpoints, ensuring efficiency and adaptability, backed by expertise in software development agency Fürth and IT support.":
        "Wir optimieren die Implementierung mit Kontrollpunkten, um Effizienz und Anpassungsfähigkeit zu gewährleisten, unterstützt durch Fachwissen in der Softwareentwicklungsagentur Fürth und IT-Support.",

      // Home-Section-5

      "WHY US": "WARUM WIR?",
      "We have over": "Wir haben über",
      "10+ years": "10+ Jahre",
      "in the Tech Industry": "in der Technologiebranche",

      "Over 10 Years of Expertise in Embedded Systems & Automotive":
        "Über 10 Jahre Erfahrung in eingebetteten Systemen & Automobiltechnik",
      "We provide innovative solutions in embedded engineering, automotive technology, and security systems. Our expertise is built on years of collaboration with leading industry players.":
        "Wir bieten innovative Lösungen im Bereich eingebetteter Technik, Automobiltechnologie und Sicherheitssysteme. Unsere Expertise basiert auf jahrelanger Zusammenarbeit mit führenden Branchenakteuren.",

      "Dedicated Development Teams": "Engagierte Entwicklungsteams",
      "Our specialists deliver customized solutions for your projects – from concept to mass production.":
        "Unsere Spezialisten liefern maßgeschneiderte Lösungen für Ihre Projekte – von der Konzeption bis zur Massenproduktion.",

      "Certified Professionals": "Zertifizierte Fachkräfte",
      "Our experts are highly qualified and work with cutting-edge technologies.":
        "Unsere Experten sind hochqualifiziert und arbeiten mit modernsten Technologien.",

      "Reliable Support – Anytime You Need It":
        "Zuverlässiger Support – Immer für Sie da",
      "We provide technical expertise and fast support whenever you need us.":
        "Wir bieten technisches Fachwissen und schnellen Support, wann immer Sie uns brauchen.",

      "Team Working": "Teamarbeit",
      "Happy Developers": "Glückliche Entwickler",
      // Home-Section-6

      "Consultation for Free": "Kostenlose Beratung",
      "Partner with us to power the future of technology!":
        "Werden Sie unser Partner, um die Zukunft der Technologie zu gestalten!",

      "Your Name": "Ihr Name",
      "Your Email": "Ihre E-Mail",
      "Your Message": "Ihre Nachricht",
      SEND: "SENDEN",

      "OUR SUCCESS": "UNSER ERFOLG",
      "We have helped more than": "Wir haben mehr als",
      "700+ clients worldwide": "700+ Kunden weltweit geholfen",
      "Our refined process delivers high-quality results with a client-focused approach.":
        "Unser optimierter Prozess liefert hochwertige Ergebnisse mit einem kundenorientierten Ansatz.",

      "Advanced Embedded Systems Development for Industry 4.0":
        "Erweiterte Entwicklung eingebetteter Systeme für Industrie 4.0",
      "Automotive Engineering Solutions for Next-Generation Mobility":
        "Automobiltechniklösungen für die Mobilität der nächsten Generation",
      "Optimized Industrial Automation for Increased Efficiency":
        "Optimierte industrielle Automatisierung für mehr Effizienz",
      "Secure & Scalable Embedded Technologies for Smart Applications":
        "Sichere & skalierbare eingebettete Technologien für intelligente Anwendungen",

      // Home-Section-7
      TESTIMONIALS: "KUNDENBEWERTUNGEN",
      "Our successful clients": "Unsere zufriedenen Kunden",

      "Mira Electronics transformed our automotive software with advanced security and seamless integration. Our system efficiency improved by 30%—highly recommended!":
        "Mira Electronics hat unsere Automobilsoftware mit fortschrittlicher Sicherheit und nahtloser Integration transformiert. Unsere Systeme arbeiten jetzt 30% effizienter – sehr empfehlenswert!",

      "Reliable and innovative! Mira delivered a custom PCB design and secure embedded software ahead of schedule, enhancing our automation efficiency.":
        "Zuverlässig und innovativ! Mira lieferte ein maßgeschneidertes PCB-Design und eine sichere Embedded-Software vorzeitig und optimierte damit unsere Automatisierung.",

      "Mira’s expertise in IoT security and FOTA updates has boosted our device performance and customer satisfaction. Outstanding collaboration!":
        "Miras Fachwissen in IoT-Sicherheit und FOTA-Updates hat die Leistung unserer Geräte verbessert und die Kundenzufriedenheit gesteigert. Hervorragende Zusammenarbeit!",

      "ROBERT DOE": "ROBERT DOE",
      "JULIA DOE": "JULIA DOE",
      "SARAH DOE": "SARAH DOE",
      Businessman: "Geschäftsmann",
      Businesswoman: "Geschäftsfrau",
      // Footer-Section
      "The lion’s urn is affected by the element. At the lexicon consecutive, until the large wide rivers and the fountain, lorem suspends the powerful, with no life in torment.":
        "Die Urne des Löwen wird vom Element beeinflusst. Im fortlaufenden Lexikon, bis zu den großen weiten Flüssen und dem Brunnen, hält Lorem die Mächtigen zurück, ohne Leben in Qual.",

      PAGES: "SEITEN",
      Home: "Startseite",
      About: "Über uns",
      Services: "Dienstleistungen",
      GTCs: "AGB",
      "Privacy Policy": "Datenschutzrichtlinie",
      Imprint: "Impressum",

      SERVICES: "DIENSTLEISTUNGEN",
      "Embedded Systems Development": "Entwicklung eingebetteter Systeme",
      "IoT & Smart Devices": "IoT & Intelligente Geräte",
      "Cybersecurity & Secure Embedded Systems":
        "Cybersicherheit & Sichere eingebettete Systeme",
      "Hardware & PCB Prototyping": "Hardware- & PCB-Prototyping",

      NEWSLETTER: "NEWSLETTER",
      "Enter your email": "Geben Sie Ihre E-Mail-Adresse ein",

      // About-Section-1
      About: "Über",
      Us: "uns",
      "We Are A Cutting-Edge": "Wir sind ein führender",
      "Software Services": "Software-Dienstleister",
      "Provider, Dedicated To": "und spezialisiert auf",
      Developing: "die Entwicklung",
      "Innovative Solutions": "innovativer Lösungen",

      "Since our inception, we have been committed to providing innovative software solutions tailored to your needs, driving growth, and enhancing user experiences. Our dedication to excellence is reflected in our evolving expertise and successful projects.":
        "Seit unserer Gründung sind wir bestrebt, innovative Softwarelösungen bereitzustellen, die auf Ihre Bedürfnisse zugeschnitten sind, Wachstum fördern und Benutzererfahrungen verbessern. Unser Engagement für Exzellenz spiegelt sich in unserem wachsenden Fachwissen und unseren erfolgreichen Projekten wider.",

      "Contact Us": "Kontaktieren Sie uns",
      "Office Space": "Bürofläche",
      "Team Work": "Teamarbeit",

      // About-Section-2
      "Our Mission": "Unsere Mission",
      "At MIRA Electronics Development, we optimize performance, reliability, and security through customized embedded solutions. As a leading software development agency in Kiel, we specialize in industrial automation, AI-driven analytics, and smart manufacturing, helping enterprises drive efficiency and innovation.Recognized among Schleswig-Holstein's Best 50, we integrate cutting-edge hardware and software to deliver scalable, future-proof solutions in automotive, healthcare, industrial IoT, and cybersecurity. Partner with us to transform your vision into reality with intelligent, high-performance technology.":
        "Bei MIRA Electronics Development optimieren wir Leistung, Zuverlässigkeit und Sicherheit durch maßgeschneiderte Embedded-Lösungen. Als führende Softwareentwicklungsagentur in Kiel sind wir auf Industrieautomation, KI-gestützte Analysen und smarte Fertigung spezialisiert, um Unternehmen bei der Steigerung von Effizienz und Innovation zu unterstützen.Als eines der Schleswig-Holsteins Best 50 integrieren wir modernste Hardware und Software, um skalierbare und zukunftssichere Lösungen in den Bereichen Automobilindustrie, Gesundheitswesen, Industrial IoT und Cybersicherheit bereitzustellen.Partnern Sie mit uns, um Ihre Vision mit intelligenter, leistungsstarker Technologie in die Realität umzusetzen.",

      // About-Section-3
      "Our Goal": "Unser Ziel",
      "MIRA Electronics Development is your trusted partner for embedded systems and custom software solutions. As an IT service provider in Kiel, Germany, we specialize in firmware, real-time operating systems, and IoT-driven automation, ensuring seamless integration and enhanced security, efficiency, and performance.Committed to innovation and excellence, we develop scalable, AI-powered solutions for industrial automation, cloud computing, and sensor fusion, enabling businesses to achieve digital transformation and sustainable growth.At MIRA, we don’t just create software—we engineer intelligent, reliable, and future-ready embedded solutions that empower businesses to thrive in a connected world. Let's shape the future together!":
        "MIRA Electronics Development ist Ihr vertrauenswürdiger Partner für Embedded-Systeme und maßgeschneiderte Softwarelösungen. Als IT-Dienstleister in Kiel, Deutschland, sind wir auf Firmware, Echtzeit-Betriebssysteme und IoT-gesteuerte Automatisierung spezialisiert und sorgen für nahtlose Integration sowie verbesserte Sicherheit, Effizienz und Leistung.Mit einem klaren Fokus auf Innovation und Exzellenz entwickeln wir skalierbare, KI-gestützte Lösungen für Industrieautomation, Cloud-Computing und Sensorfusion, um Unternehmen bei der digitalen Transformation und nachhaltigem Wachstum zu unterstützen.Bei MIRA entwickeln wir nicht nur Software – wir konstruieren intellgente, zuverlässige und zukunftssichere Embedded-Lösungen, die Unternehmen in einer vernetzten Welt stärken. Lassen Sie uns gemeinsam die Zukunft gestalten!",

      // About-Section-4

      "WHAT WE DO": "WAS WIR TUN",
      "We are a": "Wir sind eine",
      "full-service": "Full-Service",
      agency: "Agentur",

      "Embedded Engineering": "Eingebettete Technik",
      "Innovative Embedded Systems & Security Solutions for a Connected World. We specialize in high-performance embedded systems and cybersecurity solutions that empower businesses to connect their devices securely and efficiently. Our cutting-edge technologies ensure seamless communication, optimized system performance, and maximum protection against cyber threats in industrial and IoT environments.":
        "Innovative eingebettete Systeme & Sicherheitslösungen für eine vernetzte Welt. Wir sind spezialisiert auf leistungsstarke eingebettete Systeme und Cybersicherheitslösungen, die Unternehmen dabei unterstützen, ihre Geräte sicher und effizient zu vernetzen. Unsere Spitzentechnologien gewährleisten nahtlose Kommunikation, optimierte Systemleistung und maximalen Schutz vor Cyberbedrohungen in Industrie- und IoT-Umgebungen.",

      "Next-Gen Embedded Solutions":
        "Embedded-Lösungen der nächsten Generation",
      "Next-Gen Embedded Solutions for Smart & Industrial Applications. We develop scalable, energy-efficient embedded systems that drive the next generation of IoT, automotive, and industrial automation. Our expertise ensures seamless hardware-software integration, high computing efficiency, and future-ready solutions for AI-driven smart devices and critical infrastructure.":
        "Eingebettete Lösungen der nächsten Generation für intelligente und industrielle Anwendungen. Wir entwickeln skalierbare, energieeffiziente eingebettete Systeme, die die nächste Generation von IoT, Automobil- und Industrieautomation antreiben. Unser Fachwissen gewährleistet eine nahtlose Hardware-Software-Integration, hohe Rechenleistung und zukunftssichere Lösungen für KI-gesteuerte intelligente Geräte und kritische Infrastrukturen.",

      "Secure & Scalable Engineering": "Sichere & skalierbare Technik",
      "Secure & Scalable Engineering for Future-Proof Systems. As digital transformation accelerates, our secure and scalable embedded architectures enable businesses to adapt and grow. We provide end-to-end security frameworks, real-time data protection, and cyber-resilient solutions tailored for IoT, healthcare, and mission-critical industries.":
        "Sichere & skalierbare Technik für zukunftssichere Systeme. Mit der zunehmenden digitalen Transformation ermöglichen unsere sicheren und skalierbaren eingebetteten Architekturen Unternehmen, sich anzupassen und zu wachsen. Wir bieten durchgängige Sicherheitsrahmen, Echtzeit-Datenschutz und cyberresistente Lösungen für IoT, Gesundheitswesen und geschäftskritische Branchen.",

      "Engineering Excellence": "Technische Exzellenz",
      "Engineering Excellence in Embedded Systems & Cybersecurity. At Mira, we focus on engineering excellence to deliver high-performance embedded solutions, AI-driven automation, and advanced cybersecurity frameworks. Our team ensures long-term reliability, compliance with industry standards, and cutting-edge innovations for industrial applications.":
        "Technische Exzellenz in Embedded Systems & Cybersicherheit. Bei Mira setzen wir auf technische Exzellenz, um leistungsstarke Embedded-Lösungen, KI-gesteuerte Automatisierung und fortschrittliche Cybersicherheits-Frameworks bereitzustellen. Unser Team gewährleistet langfristige Zuverlässigkeit, die Einhaltung von Industriestandards und bahnbrechende Innovationen für industrielle Anwendungen.",
      "Driving Innovation in Embedded Systems":
        "Innovation in eingebetteten Systemen vorantreiben",
      "Driving Innovation in Embedded Systems, Security & IoT. We integrate intelligent embedded technologies, cybersecurity, and real-time IoT solutions to create highly efficient and secure systems. Our expertise helps businesses build connected, data-driven infrastructure that meets the demands of Industry 4.0, automotive technology, and industrial IoT (IIoT).":
        "Innovationen in Embedded Systems, Sicherheit & IoT vorantreiben. Wir integrieren intelligente Embedded-Technologien, Cybersicherheit und Echtzeit-IoT-Lösungen, um hocheffiziente und sichere Systeme zu schaffen. Unser Fachwissen hilft Unternehmen, vernetzte, datengetriebene Infrastrukturen aufzubauen, die den Anforderungen von Industrie 4.0, Automobiltechnologie und industriellem IoT (IIoT) gerecht werden.",
      "Technology & Security Solutions": "Technologie- & Sicherheitslösungen",
      "Advanced Technology & Security Solutions for Industrial & IoT Ecosystems. Our technology-first approach delivers state-of-the-art embedded security, AI-powered automation, and robust industrial solutions. From encrypted communication to real-time data analytics, we enable organizations to enhance performance, resilience, and scalability in connected environments.":
        "Fortschrittliche Technologie- & Sicherheitslösungen für industrielle & IoT-Ökosysteme. Unser technologieorientierter Ansatz bietet hochmoderne Embedded-Sicherheit, KI-gesteuerte Automatisierung und robuste Industrielösungen. Von verschlüsselter Kommunikation bis hin zu Echtzeit-Datenanalysen ermöglichen wir Unternehmen, Leistung, Widerstandsfähigkeit und Skalierbarkeit in vernetzten Umgebungen zu optimieren.",
      // About-Section-5

      TEAM: "TEAM",
      "Our certified": "Unsere zertifizierten",
      experts: "Experten",

      "Raza Abbas": "Raza Abbas",
      "Code Expert": "Code-Experte",

      "Selma Yüceer": "Selma Yüceer",
      "Human Resources Manager": "Personalmanagerin",

      "Irtaza Madad": "Irtaza Madad",
      "Technical Project Manager": "Technischer Projektmanager",

      "Meet Our Team – A Passionate Group of Experts Dedicated to Your Success":
        "Lernen Sie unser Team kennen – Eine leidenschaftliche Gruppe von Experten, die Ihrem Erfolg gewidmet ist",
      "Explore more": "Mehr erfahren",

      "Avatar 1": "Avatar 1",
      "Avatar 2": "Avatar 2",
      "Avatar 3": "Avatar 3",

      // Contact-Section-1
      "CONTACT US": "KONTAKTIEREN SIE UNS",
      "Leave us a message": "Hinterlassen Sie uns eine Nachricht",
      "First_Name Last_Name": "Vorname Nachname",
      "Email Address": "E-Mail-Adresse",
      "Your Message": "Ihre Nachricht",
      Send: "Senden",
      "✅ Message Sent Successfully!": "✅ Nachricht erfolgreich gesendet!",
      "⏳ Sending...": "⏳ Senden...",

      "Weekend UX": "Wochenend-UX",
      "Fleethörn 7, 24103 Kiel": "Fleethörn 7, 24103 Kiel",
      "+49 1522 6426128": "+49 1522 6426128",
      "info@mira-ee.de": "info@mira-ee.de",
      "Google Map": "Google Karte",

      // Contact-Section-2
      "Frequently Asked": "Häufig gestellte",
      Questions: "Fragen",

      "Q1. What measures do you have in place to ensure the security of our data and information?":
        "Q1. Welche Maßnahmen haben Sie getroffen, um die Sicherheit unserer Daten und Informationen zu gewährleisten?",
      "We employ a multi-layered approach to data security, including encryption, access controls, and regular security audits. Our systems are designed to meet or exceed industry standards for data protection.":
        "Wir verwenden einen mehrschichtigen Ansatz zur Datensicherheit, einschließlich Verschlüsselung, Zugriffskontrollen und regelmäßiger Sicherheitsaudits. Unsere Systeme sind so konzipiert, dass sie die Industriestandards für Datenschutz erfüllen oder übertreffen.",

      "Q2. How do you ensure that our sensitive information is protected from unauthorized access?":
        "Q2. Wie stellen Sie sicher, dass unsere sensiblen Informationen vor unbefugtem Zugriff geschützt sind?",
      "We utilize advanced authentication methods, such as two-factor authentication to restrict access to sensitive information. Additionally, our security protocols are continuously monitored and updated to address emerging threats.":
        "Wir verwenden fortschrittliche Authentifizierungsmethoden wie die Zwei-Faktor-Authentifizierung, um den Zugriff auf sensible Informationen einzuschränken. Darüber hinaus werden unsere Sicherheitsprotokolle kontinuierlich überwacht und aktualisiert, um neue Bedrohungen zu bekämpfen.",

      "Q3. Can you provide details about your company's security protocols and certifications?":
        "Q3. Können Sie Einzelheiten zu den Sicherheitsprotokollen und Zertifizierungen Ihres Unternehmens angeben?",
      "We adhere to rigorous security protocols based on industry best practices and standards, such as ISO 27001 and SOC 2. Our commitment to security is further demonstrated through our certifications and compliance with relevant regulatory requirements.":
        "Wir halten uns an strenge Sicherheitsprotokolle basierend auf den besten Praktiken und Standards der Branche, wie ISO 27001 und SOC 2. Unser Engagement für Sicherheit wird zusätzlich durch unsere Zertifizierungen und die Einhaltung relevanter regulatorischer Anforderungen unterstrichen.",

      "Q4. How do you handle security breaches or incidents?":
        "Q4. Wie gehen Sie mit Sicherheitsverletzungen oder Vorfällen um?",
      "In the event of a security breach or incident, we have established incident response procedures to swiftly mitigate the threat and minimize the impact on our clients. Our dedicated team of security experts conducts thorough investigations and implements remediation measures to prevent future occurrences.":
        "Im Falle einer Sicherheitsverletzung oder eines Vorfalls haben wir Verfahren zur Reaktion auf Vorfälle eingerichtet, um die Bedrohung schnell zu mindern und die Auswirkungen auf unsere Kunden zu minimieren. Unser spezialisiertes Sicherheitsteam führt gründliche Untersuchungen durch und ergreift Abhilfemaßnahmen, um zukünftige Vorfälle zu verhindern.",

      "Q5. What steps do you take to ensure the safety and security of our employees and contractors?":
        "Q5. Welche Maßnahmen ergreifen Sie, um die Sicherheit unserer Mitarbeiter und Auftragnehmer zu gewährleisten?",
      "Employee and contractor safety is paramount to us. We provide comprehensive training on security awareness and emergency response procedures. Additionally, we conduct regular assessments of workplace safety and security measures to identify and address any vulnerabilities.":
        "Die Sicherheit unserer Mitarbeiter und Auftragnehmer hat für uns höchste Priorität. Wir bieten umfassende Schulungen zur Sicherheitsbewusstheit und zu Notfallmaßnahmen an. Darüber hinaus führen wir regelmäßige Bewertungen der Arbeitssicherheit und Sicherheitsmaßnahmen durch, um potenzielle Schwachstellen zu identifizieren und zu beheben.",

      //Services-Section-01
      "Make your": "Machen Sie Ihre",
      "Digital presence": "Digitale Präsenz",
      matter: "bedeutsam",

      "We are a full-service technology and digital solutions company with over 20 years of experience in the industry.":
        "Wir sind ein Full-Service-Technologie- und Digitalunternehmen mit über 20 Jahren Erfahrung in der Branche.",

      "Start Project Now": "Projekt jetzt starten",
      "Read More": "Mehr erfahren",

      //Services-Section-02

      "Our Special": "Unsere besonderen",
      Services: "Dienstleistungen",
      "we offer": "die wir anbieten",

      "Embedded Systems Development": "Entwicklung eingebetteter Systeme",
      "Tailor-made embedded solutions for industrial embedded systems and automotive embedded software, ensuring functional safety in embedded systems with edge computing in embedded systems and AI in embedded systems. Our expertise includes programming languages such as C, C++, Python, and Rust, running on FreeRTOS, Zephyr, and Embedded Linux for efficient and scalable embedded solutions.":
        "Maßgeschneiderte Embedded-Lösungen für industrielle Embedded-Systeme und automobile Embedded-Software, die funktionale Sicherheit in Embedded-Systemen mit Edge-Computing und KI in Embedded-Systemen gewährleisten. Unsere Expertise umfasst Programmiersprachen wie C, C++, Python und Rust, die auf FreeRTOS, Zephyr und Embedded Linux laufen, um effiziente und skalierbare Embedded-Lösungen bereitzustellen.",

      "IoT Solutions & Smart Devices": "IoT-Lösungen & Intelligente Geräte",
      "Development of connected intelligent systems with IoT embedded solutions, edge computing, industrial IoT (IIoT), cloud integration, and communication protocols such as MQTT, BLE, Zigbee, CAN, UART, SPI, and I²C. We specialize in wireless sensor networks (WSN), AI-powered predictive maintenance, OPC UA, SCADA systems, remote monitoring, and FOTA updates, ensuring seamless automation and real-time data processing on platforms like STM32, ESP32, ARM Cortex, and Raspberry Pi.":
        "Entwicklung vernetzter intelligenter Systeme mit IoT-Embedded-Lösungen, Edge Computing, Industrial IoT (IIoT), Cloud-Integration und Kommunikationsprotokollen wie MQTT, BLE, Zigbee, CAN, UART, SPI und I²C. Wir sind spezialisiert auf drahtlose Sensornetzwerke (WSN), KI-gestützte prädiktive Wartung, OPC UA, SCADA-Systeme, Fernüberwachung und FOTA-Updates, um eine nahtlose Automatisierung und Echtzeit-Datenverarbeitung auf Plattformen wie STM32, ESP32, ARM Cortex und Raspberry Pi zu gewährleisten.",
      "Cybersecurity & Secure Firmware": "Cybersicherheit & Sichere Firmware",
      "Securing embedded systems with secure boot, AES encryption, firmware over-the-air (FOTA) updates, embedded system security, hardware security modules (HSM), secure communication for IoT, PKI and digital certificates, and IoT device authentication to enhance system integrity and protection against cyber threats. Our hardware platforms such as ARM Cortex and ESP32, combined with JTAG Debuggers and Logic Analyzers, enable advanced security implementations.":
        "Sicherung eingebetteter Systeme mit Secure Boot, AES-Verschlüsselung, Firmware-Over-the-Air (FOTA)-Updates, eingebetteter Systemsicherheit, Hardware-Sicherheitsmodulen (HSM), sicherer Kommunikation für IoT, PKI und digitalen Zertifikaten sowie IoT-Geräteauthentifizierung zur Verbesserung der Systemintegrität und zum Schutz vor Cyber-Bedrohungen. Unsere Hardware-Plattformen wie ARM Cortex und ESP32, kombiniert mit JTAG-Debuggern und Logikanalysatoren, ermöglichen fortschrittliche Sicherheitsimplementierungen.",

      "Automotive Embedded Solutions": "Automobil-Eingebettete Lösungen",
      "Development of ECUs, automotive lighting, automotive electronics, high-voltage battery storage, automobile electric services, and communication systems for automotive embedded software to enhance vehicle performance and safety. Using CAN, SPI, and I²C protocols, we ensure efficient data communication across automotive networks, while Embedded Linux and FreeRTOS provide a robust operating environment.":
        "Entwicklung von Steuergeräten (ECUs), Automobilbeleuchtung, Automobilelektronik, Hochvolt-Batteriespeichern, elektrischen Fahrzeugdiensten und Kommunikationssystemen für eingebettete Automobilsoftware zur Verbesserung der Fahrzeugleistung und -sicherheit. Durch die Nutzung der Protokolle CAN, SPI und I²C gewährleisten wir eine effiziente Datenkommunikation in automobilen Netzwerken, während Embedded Linux und FreeRTOS eine robuste Betriebsumgebung bieten.",

      "AI & Machine Learning for Embedded Systems":
        "KI & Maschinelles Lernen für eingebettete Systeme",
      "Integrating AI development for real-time data analysis, automated decision-making, and machine learning in embedded systems to enhance predictive intelligence and smart automation. These solutions leverage ARM Cortex and Raspberry Pi hardware, with Python and Rust for AI-driven applications, supported by Git and Jenkins for continuous integration and deployment.":
        "Integration der KI-Entwicklung für Echtzeit-Datenanalyse, automatisierte Entscheidungsfindung und maschinelles Lernen in eingebetteten Systemen zur Verbesserung der vorausschauenden Intelligenz und intelligenten Automatisierung. Diese Lösungen nutzen ARM Cortex- und Raspberry Pi-Hardware mit Python und Rust für KI-gesteuerte Anwendungen, unterstützt durch Git und Jenkins für kontinuierliche Integration und Bereitstellung.",
      "Hardware Design & PCB Prototyping": "Hardware-Design & PCB-Prototyping",
      "High-quality electronics development, engineering services, and high-voltage battery storage solutions for circuit board design, PCB prototyping, and hardware manufacturing. We specialize in designing custom embedded solutions using STM32, ESP32, and Raspberry Pi, integrating automotive check, mechanical engineering Regensburg, and HV batteries for advanced embedded systems.":
        "Hochwertige Elektronikentwicklung, Ingenieurdienstleistungen und Hochvoltbatteriespeicherlösungen für Leiterplattendesign, PCB-Prototyping und Hardwarefertigung. Wir sind spezialisiert auf die Entwicklung maßgeschneiderter eingebetteter Lösungen mit STM32, ESP32 und Raspberry Pi und integrieren Automotive-Checks, Maschinenbau in Regensburg und HV-Batterien für fortschrittliche eingebettete Systeme.",
      //Services-Section-03
      "Meet the People": "Treffen Sie die Menschen",
      "We are": "Wir sind",
      Working: "Arbeiten",
      With: "Mit",
      Partner: "Partner",

      //Services-Section-04

      "WORLDWIDE CUSTOMERS": "WELTWEITE KUNDEN",
      "PROJECTS DONE": "ABGESCHLOSSENE PROJEKTE",
      "IT PRODUCTS": "IT-PRODUKTE",
      "PROJECTS SPEND": "PROJEKTKOSTEN",
      //Services-Section-05
      "Let's start a project together":
        "Lassen Sie uns gemeinsam ein Projekt starten",
      "First name": "Vorname",
      "First name is required": "Vorname ist erforderlich",
      "Last name": "Nachname",
      "Last name is required": "Nachname ist erforderlich",
      "E-mail": "E-Mail",
      "Email is required": "E-Mail ist erforderlich",
      "Invalid email format": "Ungültiges E-Mail-Format",
      Phone: "Telefon",
      "Phone number is required": "Telefonnummer ist erforderlich",
      "Must be at least 10 digits": "Muss mindestens 10 Ziffern haben",
      "START PROJECT NOW": "PROJEKT JETZT STARTEN",
      "✅ Message Sent Successfully!": "✅ Nachricht erfolgreich gesendet!",
      "⏳ Sending...": "⏳ Senden...",
      //Privacy-Section-01
      Software: "Software",
      "Agency Privacy": "Agentur-Datenschutz",
      Policies: "Richtlinien",
      "We value your privacy": "Wir schätzen Ihre Privatsphäre",
      "Enter your email for your latest tech news":
        "Geben Sie Ihre E-Mail ein, um die neuesten Technik-News zu erhalten",
      Subscribe: "Abonnieren",
      "Privacy Policy": "Datenschutzrichtlinie",

      //Privacy-Section-02
      "1. General Information": "1. Allgemeine Informationen",
      "The protection of your personal data is important to us. This privacy policy explains which data we collect, how we use it, and your rights under the GDPR.":
        "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Datenschutzrichtlinie erklärt, welche Daten wir sammeln, wie wir sie verwenden und Ihre Rechte gemäß der DSGVO.",

      "Responsible Entity": "Verantwortliche Stelle",
      "Mira Elektronikentwicklung GmbH, Fleethörn 7, 24103 Kiel, Phone: +49 152 26426128, Email: info@mira-ee.de":
        "Mira Elektronikentwicklung GmbH, Fleethörn 7, 24103 Kiel, Telefon: +49 152 26426128, E-Mail: info@mira-ee.de",

      "Data Protection Officer": "Datenschutzbeauftragter",
      "For any questions regarding data processing, you can contact our data protection officer at datenschutz@mira-ee.de":
        "Bei Fragen zur Datenverarbeitung können Sie unseren Datenschutzbeauftragten unter datenschutz@mira-ee.de kontaktieren.",

      "2. Collection and Processing of Personal Data":
        "2. Erhebung und Verarbeitung personenbezogener Daten",
      "Automatically Collected Data": "Automatisch gesammelte Daten",
      "During website visits, certain data is automatically collected, such as IP address, access time, visited pages, browser version, and operating system.":
        "Bei Website-Besuchen werden automatisch bestimmte Daten wie IP-Adresse, Zugriffszeit, besuchte Seiten, Browserversion und Betriebssystem erfasst.",

      "Data from Contact Forms": "Daten aus Kontaktformularen",
      "When you contact us via email or contact form, we process your name, email address, and message content.":
        "Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht.",

      "Use of Cookies": "Verwendung von Cookies",
      "We use cookies to enhance website usability. You can adjust cookie settings anytime.":
        "Wir verwenden Cookies, um die Benutzerfreundlichkeit der Website zu verbessern. Sie können die Cookie-Einstellungen jederzeit anpassen.",

      "3. Web Analysis & Tracking Technologies":
        "3. Webanalyse & Tracking-Technologien",
      "Google Analytics": "Google Analytics",
      "This website uses Google Analytics for site usage analysis. Data may be transmitted to Google servers in the USA.":
        "Diese Website verwendet Google Analytics zur Analyse der Website-Nutzung. Daten können an Google-Server in den USA übertragen werden.",

      "4. Your Rights as a Data Subject":
        "4. Ihre Rechte als betroffene Person",
      "You have the right to request access, rectification, deletion, restriction of processing, and data portability under GDPR.":
        "Sie haben das Recht, Zugang zu Ihren Daten, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit gemäß DSGVO zu verlangen.",

      "5. Changes to this Privacy Policy":
        "5. Änderungen an dieser Datenschutzrichtlinie",
      "We reserve the right to update this policy to comply with legal requirements.":
        "Wir behalten uns das Recht vor, diese Richtlinie zu aktualisieren, um gesetzlichen Anforderungen zu entsprechen.",

      "Last updated: 01.06.2024": "Letzte Aktualisierung: 01.06.2024",
      //Imprint-Section-01
      Software: "Software",
      "Agency Imprints": "Agentur-Impressum",
      "We value your privacy": "Wir schätzen Ihre Privatsphäre",
      "Enter your email for your latest tech news":
        "Geben Sie Ihre E-Mail ein, um die neuesten Technik-News zu erhalten",
      Subscribe: "Abonnieren",
      Imprint: "Impressum",
      //Imprint-Section-02
      "Postal address": "Postanschrift",
      "Mira Elektronikentwicklung GmbH": "Mira Elektronikentwicklung GmbH",
      "Fleethörn 7": "Fleethörn 7",
      "24103 Kiel": "24103 Kiel",
      Email: "E-Mail",
      Phone: "Telefon",
      "Commercial register number": "Handelsregisternummer",
      "Responsible for content": "Verantwortlich für den Inhalt",

      "The European Commission provides a platform for online dispute resolution (ODR), which you can find here":
        "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden",

      Disclaimer: "Haftungsausschluss",
      DisclaimerText:
        "Als Inhaltsanbieter ist der Betreiber der Homepage nach allgemeinem Recht für die 'eigenen Inhalte' auf www.mira-ee.com gemäß § 7 Abs. 1 TMG verantwortlich. Querverweise ('Links') auf von anderen Anbietern bereitgestellte Inhalte müssen von diesen eigenen Inhalten unterschieden werden. Über den Querverweis macht der Betreiber der Homepage 'fremde Inhalte' zugänglich, die entsprechend mit dem Hinweis '[extern]' gekennzeichnet sind. Diese fremden Inhalte wurden bei der erstmaligen Verlinkung auf mögliche zivil- oder strafrechtliche Verantwortlichkeiten überprüft. Eine kontinuierliche Prüfung ist jedoch nicht möglich.",

      "Image Material": "Bildmaterial",
      "Used hero image from Unsplash": "Verwendetes Hero-Bild von Unsplash",
      "Others are our own images": "Andere sind unsere eigenen Bilder",

      "Legal Notice": "Rechtlicher Hinweis",
      LegalNoticeText:
        "Alle Texte, Grafiken und Bilder auf der Homepage www.mira-ee.com unterliegen dem Urheberrecht von Raza Abbas und können durch Dritte geschützt sein. Kein Teil dieser Veröffentlichung darf ohne die schriftliche Genehmigung von Raza Abbas in irgendeiner Form vervielfältigt, bearbeitet oder verbreitet werden.",

      "Liability for links": "Haftung für Links",
      LiabilityForLinksText:
        "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Zum Zeitpunkt der Verlinkung wurden die Seiten auf mögliche Rechtsverstöße überprüft, jedoch kann eine dauerhafte Kontrolle ohne konkrete Hinweise nicht erfolgen.",

      //GTCs-Section-01
      "Software Agency General": "Softwareagentur Allgemeine",
      "Terms & Conditions": "Geschäftsbedingungen",
      "General Terms and Conditions (GTC) of Mira Elektronikentwicklung GmbH":
        "Allgemeine Geschäftsbedingungen (AGB) der Mira Elektronikentwicklung GmbH",
      "Enter your email for your latest tech news":
        "Geben Sie Ihre E-Mail ein, um die neuesten Technik-News zu erhalten",
      Subscribe: "Abonnieren",
      "General Terms & Conditions": "Allgemeine Geschäftsbedingungen",
      //GTCs-Section-02
      "1. Scope": "1. Geltungsbereich",
      "1.1. These General Terms and Conditions (GTC) apply to all business relationships between Mira Elektronikentwicklung GmbH (hereinafter referred to as 'Mira') and its customers.":
        "1.1. Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen der Mira Elektronikentwicklung GmbH (im Folgenden 'Mira' genannt) und ihren Kunden.",
      "1.2. Deviating conditions of the customer are not recognized unless Mira expressly agrees to their validity in writing.":
        "1.2. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, Mira stimmt ihrer Gültigkeit ausdrücklich schriftlich zu.",
      "1.3. Changes to these GTC will be communicated to the customer in writing or electronically. They are deemed approved if the customer does not object in writing within four weeks.":
        "1.3. Änderungen dieser AGB werden dem Kunden schriftlich oder elektronisch mitgeteilt. Sie gelten als genehmigt, wenn der Kunde nicht innerhalb von vier Wochen schriftlich widerspricht.",

      "2. Subject of the Contract": "2. Vertragsgegenstand",
      "2.1. The company engages in the development, trade, operation, and maintenance of hardware and software products of all kinds, as well as the provision of related services.":
        "2.1. Das Unternehmen befasst sich mit der Entwicklung, dem Handel, dem Betrieb und der Wartung von Hardware- und Softwareprodukten aller Art sowie der Erbringung damit verbundener Dienstleistungen.",
      "2.2. The exact scope of services results from the respective offers, contract documents, or service descriptions.":
        "2.2. Der genaue Leistungsumfang ergibt sich aus den jeweiligen Angeboten, Vertragsdokumenten oder Leistungsbeschreibungen.",

      "3. Conclusion of Contract": "3. Vertragsschluss",
      "3.1. A contract is concluded as soon as Mira confirms the customer's order or assignment in writing or electronically.":
        "3.1. Ein Vertrag kommt zustande, sobald Mira die Bestellung oder den Auftrag des Kunden schriftlich oder elektronisch bestätigt.",
      "3.2. Offers from Mira are non-binding and subject to change unless expressly designated as binding.":
        "3.2. Angebote von Mira sind unverbindlich und freibleibend, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.",

      "4. Obligations of the Customer": "4. Pflichten des Kunden",
      "4.1. The customer is obliged to provide all necessary information correctly for contract fulfillment.":
        "4.1. Der Kunde ist verpflichtet, alle erforderlichen Informationen korrekt zur Vertragserfüllung bereitzustellen.",
      "4.2. The customer ensures that the provided data comply with legal requirements.":
        "4.2. Der Kunde stellt sicher, dass die bereitgestellten Daten den gesetzlichen Anforderungen entsprechen.",
      "4.3. The customer is responsible for the security and protection of their access data to the systems provided by Mira.":
        "4.3. Der Kunde ist für die Sicherheit und den Schutz seiner Zugangsdaten zu den von Mira bereitgestellten Systemen verantwortlich.",

      "5. Prices and Payment Terms": "5. Preise und Zahlungsbedingungen",
      "5.1. The prices are according to the current price list or individual offer.":
        "5.1. Die Preise richten sich nach der aktuellen Preisliste oder dem individuellen Angebot.",
      "5.2. All prices are exclusive of statutory VAT.":
        "5.2. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.",
      "5.3. Invoices are payable within 14 days of receipt without deduction.":
        "5.3. Rechnungen sind innerhalb von 14 Tagen nach Erhalt ohne Abzug zahlbar.",

      "6. Performance Period and Delay": "6. Leistungszeitraum und Verzögerung",
      "6.1. Delivery and service deadlines are only binding if expressly agreed.":
        "6.1. Liefer- und Leistungsfristen sind nur verbindlich, wenn sie ausdrücklich vereinbart wurden.",
      "6.2. In case of higher effort or unforeseeable events, the performance period is extended accordingly.":
        "6.2. Im Falle eines höheren Aufwands oder unvorhersehbarer Ereignisse verlängert sich die Leistungsfrist entsprechend.",
      "6.3. If Mira is in delay, the customer must set a reasonable grace period.":
        "6.3. Wenn Mira in Verzug gerät, muss der Kunde eine angemessene Nachfrist setzen.",

      "7. Warranty and Defect Claims": "7. Gewährleistung und Mängelansprüche",
      "7.1. The warranty period is twelve months from delivery unless longer periods are legally required.":
        "7.1. Die Gewährleistungsfrist beträgt zwölf Monate ab Lieferung, sofern keine längeren Fristen gesetzlich vorgeschrieben sind.",
      "7.2. The customer must report defects in writing without delay.":
        "7.2. Der Kunde muss Mängel unverzüglich schriftlich melden.",
      "7.3. If a defect claim is justified, Mira has the right to rectify or replace the delivery.":
        "7.3. Ist ein Mangelanspruch berechtigt, hat Mira das Recht auf Nachbesserung oder Ersatzlieferung.",

      "8. Liability": "8. Haftung",
      "8.1. Mira is only liable for damages in cases of intent or gross negligence.":
        "8.1. Mira haftet nur für Schäden in Fällen von Vorsatz oder grober Fahrlässigkeit.",
      "8.2. Liability for minor negligence is limited to foreseeable, contract-typical damages.":
        "8.2. Die Haftung für leichte Fahrlässigkeit ist auf vorhersehbare, vertragstypische Schäden beschränkt.",
      "8.3. Liability for indirect damages or lost profits is excluded.":
        "8.3. Die Haftung für indirekte Schäden oder entgangenen Gewinn ist ausgeschlossen.",

      "9. Data Protection": "9. Datenschutz",
      "9.1. Mira processes personal data in accordance with legal data protection regulations.":
        "9.1. Mira verarbeitet personenbezogene Daten in Übereinstimmung mit den gesetzlichen Datenschutzvorschriften.",
      "9.2. More information on data processing can be found in Mira's privacy policy.":
        "9.2. Weitere Informationen zur Datenverarbeitung finden Sie in der Datenschutzrichtlinie von Mira.",

      "10. Confidentiality": "10. Vertraulichkeit",
      "10.1. Both parties agree to keep all confidential information of the other party secret.":
        "10.1. Beide Parteien verpflichten sich, alle vertraulichen Informationen der anderen Partei geheim zu halten.",
      "10.2. This obligation continues even after the contract ends.":
        "10.2. Diese Verpflichtung besteht auch nach Beendigung des Vertrages weiter.",

      "11. Contract Duration and Termination":
        "11. Vertragsdauer und Kündigung",
      "11.1. Contract duration and termination periods are defined in individual contracts.":
        "11.1. Vertragsdauer und Kündigungsfristen werden in den individuellen Verträgen festgelegt.",
      "11.2. Termination must be in writing.":
        "11.2. Eine Kündigung muss schriftlich erfolgen.",

      "12. Final Provisions": "12.Schlussbestimmungen",
      "12.1. German law applies, excluding the UN Convention on Contracts for the International Sale of Goods.":
        "12.1. Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.",
      "12.2. Jurisdiction for disputes from this contract is Kiel, provided the customer is a merchant.":
        "12.2. Gerichtsstand für Streitigkeiten aus diesem Vertrag ist Kiel, sofern der Kunde Kaufmann ist.",
      "12.3. If individual provisions of these GTC are invalid, the validity of the remaining provisions remains unaffected.":
        "12.3. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.",

      "Company Information": "Unternehmensinformationen",
      "Mira Elektronikentwicklung GmbH": "Mira Elektronikentwicklung GmbH",
      "Fleethörn 7, 24103 Kiel": "Fleethörn 7, 24103 Kiel",
      "Commercial Register: HRB 24555 KI": "Handelsregister: HRB 24555 KI",
      "Website: www.mira-ee.com": "Webseite: www.mira-ee.com",
      "Email: info@mira-ee.de": "E-Mail: info@mira-ee.de",

      //testimonials-1
      "Mira Elektronikentwicklung UG delivered high-quality V5 firmware and sleep monitoring solutions with precision, innovation, and reliability.":
        "Mira Elektronikentwicklung UG lieferte hochwertige V5-Firmware und Schlafüberwachungslösungen mit Präzision, Innovation und Zuverlässigkeit.",
      "Managing Director": "Geschäftsführer",

      "Mira Elektronikentwicklung excels in Embedded Systems and FPGA technology, delivering outstanding results with expertise and dedication.":
        "Mira Elektronikentwicklung zeichnet sich durch Embedded Systems und FPGA-Technologie aus und liefert herausragende Ergebnisse mit Fachkompetenz und Engagement.",
      "Sr. Software Engineer": "Senior Softwareentwickler",
      //testimonials-3
      "Sypheon Online's team brought our vision to life with expertise in web-based multiplayer gaming and blockchain integration, ensuring smooth gameplay.":
        "Das Team von Sypheon Online hat unsere Vision mit Fachwissen in webbasiertem Multiplayer-Gaming und Blockchain-Integration zum Leben erweckt und ein reibungsloses Spielerlebnis sichergestellt.",
      "Product Owner": "Produktverantwortlicher",
    },
  },
  en: {
    translation: {
      // Home-Section-1
      Home: "Home",
      "About us": "About us",
      Services: "Services",
      "Contact us": "Contact us",
      "Looking for Expert Solutions?": "Looking for Expert Solutions?",
      Explore: "Explore",
      "High-Quality": "High-Quality",
      "Embedded Engineering": "Embedded Engineering",
      For: "For",
      "solving your challenges in": "solving your challenges in",
      technology: "technology",
      innovation: "Innovation",
      "Whoever drives innovation, like life itself, moves forward with determination.":
        "Whoever drives innovation, like life itself, moves forward with determination.",
      "The future belongs to those who create it.":
        "The future belongs to those who create it.",
      Subscribe: "Subscribe",
      "Enter your email for latest tech news":
        "Enter your email for latest tech news",
      "EXPERT IN:": "EXPERT IN:",
      "Mira Embedded": "Mira Embedded",
      "Industrial Automation": "Industrial Automation",
      "Smart Energy": "Smart Energy",
      "Advanced Engineering": "Advanced Engineering",

      // Home-Section-2
      SERVICES: "SERVICES",
      "Our Expertise in IoT,": "Our Expertise in IoT,",
      "Embedded Systems": "Embedded Systems",
      "& Secure Software": "& Secure Software",

      "Embedded Systems Development": "Embedded Systems Development",
      "Custom-built industrial embedded systems for automotive embedded software, ensuring functional safety in embedded systems with edge computing in embedded systems and AI-powered predictive maintenance.":
        "Custom-built industrial embedded systems for automotive embedded software, ensuring functional safety in embedded systems with edge computing in embedded systems and AI-powered predictive maintenance.",

      "IoT & Smart Devices": "IoT & Smart Devices",
      "Development of connected smart devices with secure communication for IoT device authentication, Bluetooth Low Energy (BLE) integration, MQTT protocol for IoT, cloud integration with embedded systems, and firmware over-the-air (FOTA) updates.":
        "Development of connected smart devices with secure communication for IoT device authentication, Bluetooth Low Energy (BLE) integration, MQTT protocol for IoT, cloud integration with embedded systems, and firmware over-the-air (FOTA) updates.",

      "Cybersecurity & Secure Embedded Systems":
        "Cybersecurity & Secure Embedded Systems",
      "Protecting embedded systems from cyber threats through AES encryption in embedded systems, secure boot and firmware encryption, hardware security modules (HSM), secure communication for IoT, and PKI and digital certificates.":
        "Protecting embedded systems from cyber threats through AES encryption in embedded systems, secure boot and firmware encryption, hardware security modules (HSM), secure communication for IoT, and PKI and digital certificates.",

      "Hardware & PCB Prototyping": "Hardware & PCB Prototyping",
      "Design and manufacturing of high-performance circuit boards for industrial applications, incorporating PCB design and prototyping, ARM Cortex development, microcontrollers (MCU) programming, and IPC standards for PCB.":
        "Design and manufacturing of high-performance circuit boards for industrial applications, incorporating PCB design and prototyping, ARM Cortex development, microcontrollers (MCU) programming, and IPC standards for PCB.",

      "LEARN MORE": "LEARN MORE",

      // Home-Section-3

      "Do you": "Do you",
      know: "know",
      "that?": "that?",

      "Nobody takes ownership of the product?":
        "Nobody takes ownership of the product?",
      "You're worried that your team isn't capable of building your product. They are not sure if they can achieve the vision for the product. We would be happy to support you with this.":
        "You're worried that your team isn't capable of building your product. They are not sure if they can achieve the vision for the product. We would be happy to support you with this.",

      "Don't have time for strategy?": "Don't have time for strategy?",
      "You want to shift your focus from operational product management to strategic decisions because you believe you can have a greater impact on the success of the product. We would be happy to support you with this.":
        "You want to shift your focus from operational product management to strategic decisions because you believe you can have a greater impact on the success of the product. We would be happy to support you with this.",

      "They require a lot of communication effort, which slows down the project":
        "They require a lot of communication effort, which slows down the project",
      "In fact, if a project is poorly planned and managed, it can lead to communication problems and delays. We can prevent this for you.":
        "In fact, if a project is poorly planned and managed, it can lead to communication problems and delays. We can prevent this for you.",

      // Home-Section-4
      "A Gateway to Digital Solutions": "A Gateway to Digital Solutions",
      MIRA: "MIRA",
      "Empowering Future with Innovative Solutions!":
        "Empowering Future with Innovative Solutions!",

      "Our Expertise": "Our Expertise",
      "Embedded Systems & PCB Design\nAI-Based Quality Control\nOur AI-driven automation ensures real-time data analysis.":
        "Embedded Systems & PCB Design\nAI-Based Quality Control\nOur AI-driven automation ensures real-time data analysis.",

      "Sprint planning": "Sprint planning",
      "Our sprint roadmap enhances IT enterprises with collaborative planning, ensuring clarity and efficiency in agile development.":
        "Our sprint roadmap enhances IT enterprises with collaborative planning, ensuring clarity and efficiency in agile development.",

      "Tech architecture": "Tech architecture",
      "We convert monolithic apps into microservices, boosting agility and development speed for IT companies.":
        "We convert monolithic apps into microservices, boosting agility and development speed for IT companies.",

      "Standups & weekly demos": "Standups & weekly demos",
      "Agile Collaboration & Team Alignment Standups, demos, and reviews improve communication in IT companies.":
        "Agile Collaboration & Team Alignment Standups, demos, and reviews improve communication in IT companies.",

      "Code reviews": "Code reviews",
      "Code reviews detect memory leaks, file leaks, and performance issues, ensuring high-quality software. With IT support and software development expertise.":
        "Code reviews detect memory leaks, file leaks, and performance issues, ensuring high-quality software. With IT support and software development expertise.",

      "Iterative delivery": "Iterative delivery",
      "We streamline implementation with checkpoints, ensuring efficiency and adaptability, backed by expertise in software development agency Fürth and IT support.":
        "We streamline implementation with checkpoints, ensuring efficiency and adaptability, backed by expertise in software development agency Fürth and IT support.",

      // Home-Section-5
      "WHY US": "WHY US",
      "We have over": "We have over",
      "10+ years": "10+ years",
      "in the Tech Industry": "in the Tech Industry",

      "Over 10 Years of Expertise in Embedded Systems & Automotive":
        "Over 10 Years of Expertise in Embedded Systems & Automotive",
      "We provide innovative solutions in embedded engineering, automotive technology, and security systems. Our expertise is built on years of collaboration with leading industry players.":
        "We provide innovative solutions in embedded engineering, automotive technology, and security systems. Our expertise is built on years of collaboration with leading industry players.",

      "Dedicated Development Teams": "Dedicated Development Teams",
      "Our specialists deliver customized solutions for your projects – from concept to mass production.":
        "Our specialists deliver customized solutions for your projects – from concept to mass production.",

      "Certified Professionals": "Certified Professionals",
      "Our experts are highly qualified and work with cutting-edge technologies.":
        "Our experts are highly qualified and work with cutting-edge technologies.",

      "Reliable Support – Anytime You Need It":
        "Reliable Support – Anytime You Need It",
      "We provide technical expertise and fast support whenever you need us.":
        "We provide technical expertise and fast support whenever you need us.",

      "Team Working": "Team Working",
      "Happy Developers": "Happy Developers",

      // Home-Section-6
      "Consultation for Free": "Consultation for Free",
      "Partner with us to power the future of technology!":
        "Partner with us to power the future of technology!",

      "Your Name": "Your Name",
      "Your Email": "Your Email",
      "Your Message": "Your Message",
      SEND: "SEND",

      "OUR SUCCESS": "OUR SUCCESS",
      "We have helped more than": "We have helped more than",
      "700+ clients worldwide": "700+ clients worldwide",
      "Our refined process delivers high-quality results with a client-focused approach.":
        "Our refined process delivers high-quality results with a client-focused approach.",

      "Advanced Embedded Systems Development for Industry 4.0":
        "Advanced Embedded Systems Development for Industry 4.0",
      "Automotive Engineering Solutions for Next-Generation Mobility":
        "Automotive Engineering Solutions for Next-Generation Mobility",
      "Optimized Industrial Automation for Increased Efficiency":
        "Optimized Industrial Automation for Increased Efficiency",
      "Secure & Scalable Embedded Technologies for Smart Applications":
        "Secure & Scalable Embedded Technologies for Smart Applications",

      // Home-Section-7

      TESTIMONIALS: "TESTIMONIALS",
      "Our successful clients": "Our successful clients",

      "Mira Electronics transformed our automotive software with advanced security and seamless integration. Our system efficiency improved by 30%—highly recommended!":
        "Mira Electronics transformed our automotive software with advanced security and seamless integration. Our system efficiency improved by 30%—highly recommended!",

      "Reliable and innovative! Mira delivered a custom PCB design and secure embedded software ahead of schedule, enhancing our automation efficiency.":
        "Reliable and innovative! Mira delivered a custom PCB design and secure embedded software ahead of schedule, enhancing our automation efficiency.",

      "Mira’s expertise in IoT security and FOTA updates has boosted our device performance and customer satisfaction. Outstanding collaboration!":
        "Mira’s expertise in IoT security and FOTA updates has boosted our device performance and customer satisfaction. Outstanding collaboration!",

      "ROBERT DOE": "ROBERT DOE",
      "JULIA DOE": "JULIA DOE",
      "SARAH DOE": "SARAH DOE",
      Businessman: "Businessman",
      Businesswoman: "Businesswoman",

      // Footer-Section
      "The lion’s urn is affected by the element. At the lexicon consecutive, until the large wide rivers and the fountain, lorem suspends the powerful, with no life in torment.":
        "The lion’s urn is affected by the element. At the lexicon consecutive, until the large wide rivers and the fountain, lorem suspends the powerful, with no life in torment.",

      PAGES: "PAGES",
      Home: "Home",
      About: "About",
      Services: "Services",
      GTCs: "GTCs",
      "Privacy Policy": "Privacy Policy",
      Imprint: "Imprint",

      SERVICES: "SERVICES",
      "Embedded Systems Development": "Embedded Systems Development",
      "IoT & Smart Devices": "IoT & Smart Devices",
      "Cybersecurity & Secure Embedded Systems":
        "Cybersecurity & Secure Embedded Systems",
      "Hardware & PCB Prototyping": "Hardware & PCB Prototyping",

      NEWSLETTER: "NEWSLETTER",
      "Enter your email": "Enter your email",

      // About-Section-1
      About: "About",
      Us: "Us",
      "We Are A Cutting-Edge": "We Are A Cutting-Edge",
      "Software Services": "Software Services",
      "Provider, Dedicated To": "Provider, Dedicated To",
      Developing: "Developing",
      "Innovative Solutions": "Innovative Solutions",

      "Since our inception, we have been committed to providing innovative software solutions tailored to your needs, driving growth, and enhancing user experiences. Our dedication to excellence is reflected in our evolving expertise and successful projects.":
        "Since our inception, we have been committed to providing innovative software solutions tailored to your needs, driving growth, and enhancing user experiences. Our dedication to excellence is reflected in our evolving expertise and successful projects.",

      "Contact Us": "Contact Us",
      "Office Space": "Office Space",
      "Team Work": "Team Work",

      // About-Section-2
      "Our Mission": "Our Mission",
      "At MIRA Electronics Development, we optimize performance, reliability, and security through customized embedded solutions. As a leading software development agency in Kiel, we specialize in industrial automation, AI-driven analytics, and smart manufacturing, helping enterprises drive efficiency and innovation.Recognized among Schleswig-Holstein's Best 50, we integrate cutting-edge hardware and software to deliver scalable, future-proof solutions in automotive, healthcare, industrial IoT, and cybersecurity. Partner with us to transform your vision into reality with intelligent, high-performance technology.":
        "At MIRA Electronics Development, we optimize performance, reliability, and security through customized embedded solutions. As a leading software development agency in Kiel, we specialize in industrial automation, AI-driven analytics, and smart manufacturing, helping enterprises drive efficiency and innovation.Recognized among Schleswig-Holstein's Best 50, we integrate cutting-edge hardware and software to deliver scalable, future-proof solutions in automotive, healthcare, industrial IoT, and cybersecurity. Partner with us to transform your vision into reality with intelligent, high-performance technology.",

      // About-Section-3
      "Our Goal": "Our Goal",
      "MIRA Electronics Development is your trusted partner for embedded systems and custom software solutions. As an IT service provider in Kiel, Germany, we specialize in firmware, real-time operating systems, and IoT-driven automation, ensuring seamless integration and enhanced security, efficiency, and performance.Committed to innovation and excellence, we develop scalable, AI-powered solutions for industrial automation, cloud computing, and sensor fusion, enabling businesses to achieve digital transformation and sustainable growth.At MIRA, we don’t just create software—we engineer intelligent, reliable, and future-ready embedded solutions that empower businesses to thrive in a connected world. Let's shape the future together!":
        "MIRA Electronics Development is your trusted partner for embedded systems and custom software solutions. As an IT service provider in Kiel, Germany, we specialize in firmware, real-time operating systems, and IoT-driven automation, ensuring seamless integration and enhanced security, efficiency, and performance.Committed to innovation and excellence, we develop scalable, AI-powered solutions for industrial automation, cloud computing, and sensor fusion, enabling businesses to achieve digital transformation and sustainable growth.At MIRA, we don’t just create software—we engineer intelligent, reliable, and future-ready embedded solutions that empower businesses to thrive in a connected world. Let's shape the future together!",

      // About-Section-4
      "WHAT WE DO": "WHAT WE DO",
      "We are a": "We are a",
      "full-service": "full-service",
      agency: "agency",

      "Embedded Engineering": "Embedded Engineering",
      "Innovative Embedded Systems & Security Solutions for a Connected World. We specialize in high-performance embedded systems and cybersecurity solutions that empower businesses to connect their devices securely and efficiently. Our cutting-edge technologies ensure seamless communication, optimized system performance, and maximum protection against cyber threats in industrial and IoT environments.":
        "Innovative Embedded Systems & Security Solutions for a Connected World. We specialize in high-performance embedded systems and cybersecurity solutions that empower businesses to connect their devices securely and efficiently. Our cutting-edge technologies ensure seamless communication, optimized system performance, and maximum protection against cyber threats in industrial and IoT environments.",

      "Next-Gen Embedded Solutions": "Next-Gen Embedded Solutions",
      "Next-Gen Embedded Solutions for Smart & Industrial Applications. We develop scalable, energy-efficient embedded systems that drive the next generation of IoT, automotive, and industrial automation. Our expertise ensures seamless hardware-software integration, high computing efficiency, and future-ready solutions for AI-driven smart devices and critical infrastructure.":
        "Next-Gen Embedded Solutions for Smart & Industrial Applications. We develop scalable, energy-efficient embedded systems that drive the next generation of IoT, automotive, and industrial automation. Our expertise ensures seamless hardware-software integration, high computing efficiency, and future-ready solutions for AI-driven smart devices and critical infrastructure.",

      "Secure & Scalable Engineering": "Secure & Scalable Engineering",
      "Secure & Scalable Engineering for Future-Proof Systems. As digital transformation accelerates, our secure and scalable embedded architectures enable businesses to adapt and grow. We provide end-to-end security frameworks, real-time data protection, and cyber-resilient solutions tailored for IoT, healthcare, and mission-critical industries.":
        "Secure & Scalable Engineering for Future-Proof Systems. As digital transformation accelerates, our secure and scalable embedded architectures enable businesses to adapt and grow. We provide end-to-end security frameworks, real-time data protection, and cyber-resilient solutions tailored for IoT, healthcare, and mission-critical industries.",

      "Engineering Excellence": "Engineering Excellence",
      "Engineering Excellence in Embedded Systems & Cybersecurity. At Mira, we focus on engineering excellence to deliver high-performance embedded solutions, AI-driven automation, and advanced cybersecurity frameworks. Our team ensures long-term reliability, compliance with industry standards, and cutting-edge innovations for industrial applications.":
        "Engineering Excellence in Embedded Systems & Cybersecurity. At Mira, we focus on engineering excellence to deliver high-performance embedded solutions, AI-driven automation, and advanced cybersecurity frameworks. Our team ensures long-term reliability, compliance with industry standards, and cutting-edge innovations for industrial applications.",

      "Driving Innovation in Embedded Systems":
        "Driving Innovation in Embedded SystemsDriving Innovation in Embedded Systems",
      "Driving Innovation in Embedded Systems, Security & IoT. We integrate intelligent embedded technologies, cybersecurity, and real-time IoT solutions to create highly efficient and secure systems. Our expertise helps businesses build connected, data-driven infrastructure that meets the demands of Industry 4.0, automotive technology, and industrial IoT (IIoT).":
        "Driving Innovation in Embedded Systems, Security & IoT. We integrate intelligent embedded technologies, cybersecurity, and real-time IoT solutions to create highly efficient and secure systems. Our expertise helps businesses build connected, data-driven infrastructure that meets the demands of Industry 4.0, automotive technology, and industrial IoT (IIoT).",
      "Technology & Security Solutions": "Technology & Security Solutions",
      "Advanced Technology & Security Solutions for Industrial & IoT Ecosystems. Our technology-first approach delivers state-of-the-art embedded security, AI-powered automation, and robust industrial solutions. From encrypted communication to real-time data analytics, we enable organizations to enhance performance, resilience, and scalability in connected environments.":
        "Advanced Technology & Security Solutions for Industrial & IoT Ecosystems. Our technology-first approach delivers state-of-the-art embedded security, AI-powered automation, and robust industrial solutions. From encrypted communication to real-time data analytics, we enable organizations to enhance performance, resilience, and scalability in connected environments.",

      // About-Section-5

      TEAM: "TEAM",
      "Our certified": "Our certified",
      experts: "experts",

      "Raza Abbas": "Raza Abbas",
      "Code Expert": "Code Expert",

      "Selma Yüceer": "Selma Yüceer",
      "Human Resources Manager": "Human Resources Manager",

      "Irtaza Madad": "Irtaza Madad",
      "Technical Project Manager": "Technical Project Manager",

      "Meet Our Team – A Passionate Group of Experts Dedicated to Your Success":
        "Meet Our Team – A Passionate Group of Experts Dedicated to Your Success",
      "Explore more": "Explore more",

      "Avatar 1": "Avatar 1",
      "Avatar 2": "Avatar 2",
      "Avatar 3": "Avatar 3",

      // Contact-Section-1
      "CONTACT US": "CONTACT US",
      "Leave us a message": "Leave us a message",
      "First_Name Last_Name": "First_Name Last_Name",
      "Email Address": "Email Address",
      "Your Message": "Your Message",
      Send: "Send",
      "✅ Message Sent Successfully!": "✅ Message Sent Successfully!",
      "⏳ Sending...": "⏳ Sending...",

      "Weekend UX": "Weekend UX",
      "Fleethörn 7, 24103 Kiel": "Fleethörn 7, 24103 Kiel",
      "+49 1522 6426128": "+49 1522 6426128",
      "info@mira-ee.de": "info@mira-ee.de",
      "Google Map": "Google Map",

      // Contact-Section-2
      "Frequently Asked": "Frequently Asked",
      Questions: "Questions",

      "Q1. What measures do you have in place to ensure the security of our data and information?":
        "Q1. What measures do you have in place to ensure the security of our data and information?",
      "We employ a multi-layered approach to data security, including encryption, access controls, and regular security audits. Our systems are designed to meet or exceed industry standards for data protection.":
        "We employ a multi-layered approach to data security, including encryption, access controls, and regular security audits. Our systems are designed to meet or exceed industry standards for data protection.",

      "Q2. How do you ensure that our sensitive information is protected from unauthorized access?":
        "Q2. How do you ensure that our sensitive information is protected from unauthorized access?",
      "We utilize advanced authentication methods, such as two-factor authentication to restrict access to sensitive information. Additionally, our security protocols are continuously monitored and updated to address emerging threats.":
        "We utilize advanced authentication methods, such as two-factor authentication to restrict access to sensitive information. Additionally, our security protocols are continuously monitored and updated to address emerging threats.",

      "Q3. Can you provide details about your company's security protocols and certifications?":
        "Q3. Can you provide details about your company's security protocols and certifications?",
      "We adhere to rigorous security protocols based on industry best practices and standards, such as ISO 27001 and SOC 2. Our commitment to security is further demonstrated through our certifications and compliance with relevant regulatory requirements.":
        "We adhere to rigorous security protocols based on industry best practices and standards, such as ISO 27001 and SOC 2. Our commitment to security is further demonstrated through our certifications and compliance with relevant regulatory requirements.",

      "Q4. How do you handle security breaches or incidents?":
        "Q4. How do you handle security breaches or incidents?",
      "In the event of a security breach or incident, we have established incident response procedures to swiftly mitigate the threat and minimize the impact on our clients. Our dedicated team of security experts conducts thorough investigations and implements remediation measures to prevent future occurrences.":
        "In the event of a security breach or incident, we have established incident response procedures to swiftly mitigate the threat and minimize the impact on our clients. Our dedicated team of security experts conducts thorough investigations and implements remediation measures to prevent future occurrences.",

      "Q5. What steps do you take to ensure the safety and security of our employees and contractors?":
        "Q5. What steps do you take to ensure the safety and security of our employees and contractors?",
      "Employee and contractor safety is paramount to us. We provide comprehensive training on security awareness and emergency response procedures. Additionally, we conduct regular assessments of workplace safety and security measures to identify and address any vulnerabilities.":
        "Employee and contractor safety is paramount to us. We provide comprehensive training on security awareness and emergency response procedures. Additionally, we conduct regular assessments of workplace safety and security measures to identify and address any vulnerabilities.",

      //Services-Section-01

      "Make your": "Make your",
      "Digital presence": "Digital presence",
      matter: "matter",

      "We are a full-service technology and digital solutions company with over 20 years of experience in the industry.":
        "We are a full-service technology and digital solutions company with over 20 years of experience in the industry.",

      "Start Project Now": "Start Project Now",
      "Read More": "Read More",
      //Services-Section-02
      "Our Special": "Our Special",
      Services: "Services",
      "we offer": "we offer",

      "Embedded Systems Development": "Embedded Systems Development",
      "Tailor-made embedded solutions for industrial embedded systems and automotive embedded software, ensuring functional safety in embedded systems with edge computing in embedded systems and AI in embedded systems. Our expertise includes programming languages such as C, C++, Python, and Rust, running on FreeRTOS, Zephyr, and Embedded Linux for efficient and scalable embedded solutions.":
        "Tailor-made embedded solutions for industrial embedded systems and automotive embedded software, ensuring functional safety in embedded systems with edge computing in embedded systems and AI in embedded systems. Our expertise includes programming languages such as C, C++, Python, and Rust, running on FreeRTOS, Zephyr, and Embedded Linux for efficient and scalable embedded solutions.",

      "IoT Solutions & Smart Devices": "IoT Solutions & Smart Devices",
      "Development of connected intelligent systems with IoT embedded solutions, edge computing, industrial IoT (IIoT), cloud integration, and communication protocols such as MQTT, BLE, Zigbee, CAN, UART, SPI, and I²C. We specialize in wireless sensor networks (WSN), AI-powered predictive maintenance, OPC UA, SCADA systems, remote monitoring, and FOTA updates, ensuring seamless automation and real-time data processing on platforms like STM32, ESP32, ARM Cortex, and Raspberry Pi.":
        "Development of connected intelligent systems with IoT embedded solutions, edge computing, industrial IoT (IIoT), cloud integration, and communication protocols such as MQTT, BLE, Zigbee, CAN, UART, SPI, and I²C. We specialize in wireless sensor networks (WSN), AI-powered predictive maintenance, OPC UA, SCADA systems, remote monitoring, and FOTA updates, ensuring seamless automation and real-time data processing on platforms like STM32, ESP32, ARM Cortex, and Raspberry Pi.",
      "Cybersecurity & Secure Firmware": "Cybersecurity & Secure Firmware",
      "Securing embedded systems with secure boot, AES encryption, firmware over-the-air (FOTA) updates, embedded system security, hardware security modules (HSM), secure communication for IoT, PKI and digital certificates, and IoT device authentication to enhance system integrity and protection against cyber threats. Our hardware platforms such as ARM Cortex and ESP32, combined with JTAG Debuggers and Logic Analyzers, enable advanced security implementations.":
        "Securing embedded systems with secure boot, AES encryption, firmware over-the-air (FOTA) updates, embedded system security, hardware security modules (HSM), secure communication for IoT, PKI and digital certificates, and IoT device authentication to enhance system integrity and protection against cyber threats. Our hardware platforms such as ARM Cortex and ESP32, combined with JTAG Debuggers and Logic Analyzers, enable advanced security implementations.",

      "Automotive Embedded Solutions": "Automotive Embedded Solutions",
      "Development of ECUs, automotive lighting, automotive electronics, high-voltage battery storage, automobile electric services, and communication systems for automotive embedded software to enhance vehicle performance and safety. Using CAN, SPI, and I²C protocols, we ensure efficient data communication across automotive networks, while Embedded Linux and FreeRTOS provide a robust operating environment.":
        "Development of ECUs, automotive lighting, automotive electronics, high-voltage battery storage, automobile electric services, and communication systems for automotive embedded software to enhance vehicle performance and safety. Using CAN, SPI, and I²C protocols, we ensure efficient data communication across automotive networks, while Embedded Linux and FreeRTOS provide a robust operating environment.",

      "AI & Machine Learning for Embedded Systems":
        "AI & Machine Learning for Embedded Systems",
      "Integrating AI development for real-time data analysis, automated decision-making, and machine learning in embedded systems to enhance predictive intelligence and smart automation. These solutions leverage ARM Cortex and Raspberry Pi hardware, with Python and Rust for AI-driven applications, supported by Git and Jenkins for continuous integration and deployment.":
        "Integrating AI development for real-time data analysis, automated decision-making, and machine learning in embedded systems to enhance predictive intelligence and smart automation. These solutions leverage ARM Cortex and Raspberry Pi hardware, with Python and Rust for AI-driven applications, supported by Git and Jenkins for continuous integration and deployment.",
      "Hardware Design & PCB Prototyping": "Hardware Design & PCB Prototyping",
      "High-quality electronics development, engineering services, and high-voltage battery storage solutions for circuit board design, PCB prototyping, and hardware manufacturing. We specialize in designing custom embedded solutions using STM32, ESP32, and Raspberry Pi, integrating automotive check, mechanical engineering Regensburg, and HV batteries for advanced embedded systems.":
        "High-quality electronics development, engineering services, and high-voltage battery storage solutions for circuit board design, PCB prototyping, and hardware manufacturing. We specialize in designing custom embedded solutions using STM32, ESP32, and Raspberry Pi, integrating automotive check, mechanical engineering Regensburg, and HV batteries for advanced embedded systems.",
      //Services-Section-03

      "Meet the People": "Meet the People",
      "We are": "We are",
      Working: "Working",
      With: "With",
      Partner: "Partner",
      //Services-Section-04
      "WORLDWIDE CUSTOMERS": "WORLDWIDE CUSTOMERS",
      "PROJECTS DONE": "PROJECTS DONE",
      "IT PRODUCTS": "IT PRODUCTS",
      "PROJECTS SPEND": "PROJECTS SPEND",

      //Services-Section-05
      "Let's start a project together": "Let's start a project together",
      "First name": "First name",
      "First name is required": "First name is required",
      "Last name": "Last name",
      "Last name is required": "Last name is required",
      "E-mail": "E-mail",
      "Email is required": "Email is required",
      "Invalid email format": "Invalid email format",
      Phone: "Phone",
      "Phone number is required": "Phone number is required",
      "Must be at least 10 digits": "Must be at least 10 digits",
      "START PROJECT NOW": "START PROJECT NOW",
      "✅ Message Sent Successfully!": "✅ Message Sent Successfully!",
      "⏳ Sending...": "⏳ Sending...",

      //Privacy-Section-01
      Software: "Software",
      "Agency Privacy": "Agency Privacy",
      Policies: "Policies",
      "We value your privacy": "We value your privacy",
      "Enter your email for your latest tech news":
        "Enter your email for your latest tech news",
      Subscribe: "Subscribe",
      "Privacy Policy": "Privacy Policy",

      //Privacy-Section-02
      "1. General Information": "1. General Information",
      "The protection of your personal data is important to us. This privacy policy explains which data we collect, how we use it, and your rights under the GDPR.":
        "The protection of your personal data is important to us. This privacy policy explains which data we collect, how we use it, and your rights under the GDPR.",

      "Responsible Entity": "Responsible Entity",
      "Mira Elektronikentwicklung GmbH, Fleethörn 7, 24103 Kiel, Phone: +49 152 26426128, Email: info@mira-ee.de":
        "Mira Elektronikentwicklung GmbH, Fleethörn 7, 24103 Kiel, Phone: +49 152 26426128, Email: info@mira-ee.de",

      "Data Protection Officer": "Data Protection Officer",
      "For any questions regarding data processing, you can contact our data protection officer at datenschutz@mira-ee.de":
        "For any questions regarding data processing, you can contact our data protection officer at datenschutz@mira-ee.de",

      "2. Collection and Processing of Personal Data":
        "2. Collection and Processing of Personal Data",
      "Automatically Collected Data": "Automatically Collected Data",
      "During website visits, certain data is automatically collected, such as IP address, access time, visited pages, browser version, and operating system.":
        "During website visits, certain data is automatically collected, such as IP address, access time, visited pages, browser version, and operating system.",

      "Data from Contact Forms": "Data from Contact Forms",
      "When you contact us via email or contact form, we process your name, email address, and message content.":
        "When you contact us via email or contact form, we process your name, email address, and message content.",

      "Use of Cookies": "Use of Cookies",
      "We use cookies to enhance website usability. You can adjust cookie settings anytime.":
        "We use cookies to enhance website usability. You can adjust cookie settings anytime.",

      "3. Web Analysis & Tracking Technologies":
        "3. Web Analysis & Tracking Technologies",
      "Google Analytics": "Google Analytics",
      "This website uses Google Analytics for site usage analysis. Data may be transmitted to Google servers in the USA.":
        "This website uses Google Analytics for site usage analysis. Data may be transmitted to Google servers in the USA.",

      "4. Your Rights as a Data Subject": "4. Your Rights as a Data Subject",
      "You have the right to request access, rectification, deletion, restriction of processing, and data portability under GDPR.":
        "You have the right to request access, rectification, deletion, restriction of processing, and data portability under GDPR.",

      "5. Changes to this Privacy Policy": "5. Changes to this Privacy Policy",
      "We reserve the right to update this policy to comply with legal requirements.":
        "We reserve the right to update this policy to comply with legal requirements.",

      "Last updated: 01.06.2024": "Last updated: 01.06.2024",
      //Imprint-Section-01
      Software: "Software",
      "Agency Imprints": "Agency Imprints",
      "We value your privacy": "We value your privacy",
      "Enter your email for your latest tech news":
        "Enter your email for your latest tech news",
      Subscribe: "Subscribe",
      Imprint: "Imprint",
      //Imprint-Section-02

      "Postal address": "Postal address",
      "Mira Elektronikentwicklung GmbH": "Mira Elektronikentwicklung GmbH",
      "Fleethörn 7": "Fleethörn 7",
      "24103 Kiel": "24103 Kiel",
      Email: "Email",
      Phone: "Phone",
      "Commercial register number": "Commercial register number",
      "Responsible for content": "Responsible for content",

      "The European Commission provides a platform for online dispute resolution (ODR), which you can find here":
        "The European Commission provides a platform for online dispute resolution (ODR), which you can find here",

      Disclaimer: "Disclaimer",
      DisclaimerText:
        "As a content provider, the homepage operator is responsible under general law for 'own content' provided on www.mira-ee.com in accordance with Section 7 Paragraph 1 of the Telemedia Act. Cross-references ('links') to content provided by other providers must be distinguished from this own content. Through the cross-reference, the homepage operator makes 'external content' available for use, which is marked accordingly with '[external]'. These external contents were checked at the time of first linking for possible legal violations, but a continuous examination is not possible.",

      "Image Material": "Image Material",
      "Used hero image from Unsplash": "Used hero image from Unsplash",
      "Others are our own images": "Others are our own images",

      "Legal Notice": "Legal Notice",
      LegalNoticeText:
        "All texts, graphics, and images on the homepage www.mira-ee.com are subject to the copyright of Raza Abbas and may be protected by third parties. No part of this publication may be reproduced in any form and processed, duplicated, or distributed using electronic systems without the written permission of Raza Abbas.",

      "Liability for links": "Liability for links",
      LiabilityForLinksText:
        "Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking, but continuous monitoring is not reasonable without concrete evidence of a legal violation.",
      //GTCs-Section-01
      "Software Agency General": "Software Agency General",
      "Terms & Conditions": "Terms & Conditions",
      "General Terms and Conditions (GTC) of Mira Elektronikentwicklung GmbH":
        "General Terms and Conditions (GTC) of Mira Elektronikentwicklung GmbH",
      "Enter your email for your latest tech news":
        "Enter your email for your latest tech news",
      Subscribe: "Subscribe",
      "General Terms & Conditions": "General Terms & Conditions",
      //GTCs-Section-02
      "1. Scope": "1. Scope",
      "1.1. These General Terms and Conditions (GTC) apply to all business relationships between Mira Elektronikentwicklung GmbH (hereinafter referred to as 'Mira') and its customers.":
        "1.1. These General Terms and Conditions (GTC) apply to all business relationships between Mira Elektronikentwicklung GmbH (hereinafter referred to as 'Mira') and its customers.",
      "1.2. Deviating conditions of the customer are not recognized unless Mira expressly agrees to their validity in writing.":
        "1.2. Deviating conditions of the customer are not recognized unless Mira expressly agrees to their validity in writing.",
      "1.3. Changes to these GTC will be communicated to the customer in writing or electronically. They are deemed approved if the customer does not object in writing within four weeks.":
        "1.3. Changes to these GTC will be communicated to the customer in writing or electronically. They are deemed approved if the customer does not object in writing within four weeks.",

      "2. Subject of the Contract": "2. Subject of the Contract",
      "2.1. The company engages in the development, trade, operation, and maintenance of hardware and software products of all kinds, as well as the provision of related services.":
        "2.1. The company engages in the development, trade, operation, and maintenance of hardware and software products of all kinds, as well as the provision of related services.",
      "2.2. The exact scope of services results from the respective offers, contract documents, or service descriptions.":
        "2.2. The exact scope of services results from the respective offers, contract documents, or service descriptions.",

      "3. Conclusion of Contract": "3. Conclusion of Contract",
      "3.1. A contract is concluded as soon as Mira confirms the customer's order or assignment in writing or electronically.":
        "3.1. A contract is concluded as soon as Mira confirms the customer's order or assignment in writing or electronically.",
      "3.2. Offers from Mira are non-binding and subject to change unless expressly designated as binding.":
        "3.2. Offers from Mira are non-binding and subject to change unless expressly designated as binding.",

      "4. Obligations of the Customer": "4. Obligations of the Customer",
      "4.1. The customer is obliged to provide all necessary information correctly for contract fulfillment.":
        "4.1. The customer is obliged to provide all necessary information correctly for contract fulfillment.",
      "4.2. The customer ensures that the provided data comply with legal requirements.":
        "4.2. The customer ensures that the provided data comply with legal requirements.",
      "4.3. The customer is responsible for the security and protection of their access data to the systems provided by Mira.":
        "4.3. The customer is responsible for the security and protection of their access data to the systems provided by Mira.",

      "5. Prices and Payment Terms": "5. Prices and Payment Terms",
      "5.1. The prices are according to the current price list or individual offer.":
        "5.1. The prices are according to the current price list or individual offer.",
      "5.2. All prices are exclusive of statutory VAT.":
        "5.2. All prices are exclusive of statutory VAT.",
      "5.3. Invoices are payable within 14 days of receipt without deduction.":
        "5.3. Invoices are payable within 14 days of receipt without deduction.",

      "6. Performance Period and Delay": "6. Performance Period and Delay",
      "6.1. Delivery and service deadlines are only binding if expressly agreed.":
        "6.1. Delivery and service deadlines are only binding if expressly agreed.",
      "6.2. In case of higher effort or unforeseeable events, the performance period is extended accordingly.":
        "6.2. In case of higher effort or unforeseeable events, the performance period is extended accordingly.",
      "6.3. If Mira is in delay, the customer must set a reasonable grace period.":
        "6.3. If Mira is in delay, the customer must set a reasonable grace period.",

      "7. Warranty and Defect Claims": "7. Warranty and Defect Claims",
      "7.1. The warranty period is twelve months from delivery unless longer periods are legally required.":
        "7.1. The warranty period is twelve months from delivery unless longer periods are legally required.",
      "7.2. The customer must report defects in writing without delay.":
        "7.2. The customer must report defects in writing without delay.",
      "7.3. If a defect claim is justified, Mira has the right to rectify or replace the delivery.":
        "7.3. If a defect claim is justified, Mira has the right to rectify or replace the delivery.",

      "8. Liability": "8. Liability",
      "8.1. Mira is only liable for damages in cases of intent or gross negligence.":
        "8.1. Mira is only liable for damages in cases of intent or gross negligence.",
      "8.2. Liability for minor negligence is limited to foreseeable, contract-typical damages.":
        "8.2. Liability for minor negligence is limited to foreseeable, contract-typical damages.",
      "8.3. Liability for indirect damages or lost profits is excluded.":
        "8.3. Liability for indirect damages or lost profits is excluded.",

      "9. Data Protection": "9. Data Protection",
      "9.1. Mira processes personal data in accordance with legal data protection regulations.":
        "9.1. Mira processes personal data in accordance with legal data protection regulations.",
      "9.2. More information on data processing can be found in Mira's privacy policy.":
        "9.2. More information on data processing can be found in Mira's privacy policy.",

      "10. Confidentiality": "10. Confidentiality",
      "10.1. Both parties agree to keep all confidential information of the other party secret.":
        "10.1. Both parties agree to keep all confidential information of the other party secret.",
      "10.2. This obligation continues even after the contract ends.":
        "10.2. This obligation continues even after the contract ends.",

      "11. Contract Duration and Termination":
        "11. Contract Duration and Termination",
      "11.1. Contract duration and termination periods are defined in individual contracts.":
        "11.1. Contract duration and termination periods are defined in individual contracts.",
      "11.2. Termination must be in writing.":
        "11.2. Termination must be in writing.",

      "12. Final Provisions": "12. Final Provisions",
      "12.1. German law applies, excluding the UN Convention on Contracts for the International Sale of Goods.":
        "12.1. German law applies, excluding the UN Convention on Contracts for the International Sale of Goods.",
      "12.2. Jurisdiction for disputes from this contract is Kiel, provided the customer is a merchant.":
        "12.2. Jurisdiction for disputes from this contract is Kiel, provided the customer is a merchant.",
      "12.3. If individual provisions of these GTC are invalid, the validity of the remaining provisions remains unaffected.":
        "12.3. If individual provisions of these GTC are invalid, the validity of the remaining provisions remains unaffected.",

      "Your Email Address": "Your Email Address",

      "Company Information": "Company Information",
      "Mira Elektronikentwicklung GmbH": "Mira Elektronikentwicklung GmbH",
      "Fleethörn 7, 24103 Kiel": "Fleethörn 7, 24103 Kiel",
      "Commercial Register: HRB 24555 KI": "Commercial Register: HRB 24555 KI",
      "Website: www.mira-ee.com": "Webseite: www.mira-ee.com",
      "Email: info@mira-ee.de": "E-Mail: info@mira-ee.de",
      //testimonials-1
      "Mira Elektronikentwicklung UG delivered high-quality V5 firmware and sleep monitoring solutions with precision, innovation, and reliability.":
        "Mira Elektronikentwicklung UG delivered high-quality V5 firmware and sleep monitoring solutions with precision, innovation, and reliability.",
      "Managing Director": "Managing Director",

      "Mira Elektronikentwicklung excels in Embedded Systems and FPGA technology, delivering outstanding results with expertise and dedication.":
        "Mira Elektronikentwicklung excels in Embedded Systems and FPGA technology, delivering outstanding results with expertise and dedication.",
      "Sr. Software Engineer": "Sr. Software Engineer",
      //testimonials-3
      "Sypheon Online's team brought our vision to life with expertise in web-based multiplayer gaming and blockchain integration, ensuring smooth gameplay.":
        "Sypheon Online's team brought our vision to life with expertise in web-based multiplayer gaming and blockchain integration, ensuring smooth gameplay.",
      "Product Owner": "Product Owner",
    },
  },
};
const savedLanguage = localStorage.getItem("language") || "de"; // Default to German

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources, // Your translations object
    lng: localStorage.getItem("language") || "de", // Default is German, but use saved language if available
    fallbackLng: "de", // Fallback to German if language is not found
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"], // Detect from localStorage first, then browser settings
      caches: ["localStorage"], // Save language choice in localStorage
    },
  });

export default i18n;
