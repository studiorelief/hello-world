"use client";

import React, { useState } from "react";

export default function OffreCalculatorInline() {
  // État pour la configuration du projet
  const [config, setConfig] = useState({
    siteType: "marketing",
    pages: "10-15",
    deadline: "3mois",
    budget: "7500-15000€",
  });

  // État pour les services sélectionnés
  const [selectedServices, setSelectedServices] = useState({
    branding: true,
    webdesign: true,
    webflow: true,
    formations: true,
    seo: true,
  });

  // État pour les add-ons
  const [selectedAddons, setSelectedAddons] = useState({
    maintenance1: true,
    maintenance2: false,
  });

  // État pour l'étape actuelle
  const [currentStep, setCurrentStep] = useState(1);

  // Fonction pour calculer le prix total
  const calculateTotal = () => {
    const basePrice = config.budget === "7500-15000€" ? 11250 : 11250;
    const addonCount = Object.values(selectedAddons).filter(Boolean).length;
    return basePrice + addonCount * 200;
  };

  // Styles inline pour remplacer Tailwind
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#ffefe0",
      padding: "32px",
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    maxWidth: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "0 16px",
    },
    hero: {
      textAlign: "center",
      marginBottom: "48px",
    },
    badge: {
      display: "inline-block",
      backgroundColor: "transparent",
      border: "1px solid #d8a5dc",
      borderRadius: "9999px",
      padding: "8px 16px",
      marginBottom: "24px",
      color: "#2e040a",
      fontWeight: "500",
    },
    title: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#2e040a",
      marginBottom: "16px",
      margin: "0 0 16px 0",
    },
    subtitle: {
      fontSize: "20px",
      color: "#6d4b4a",
      maxWidth: "512px",
      margin: "0 auto",
      lineHeight: "1.5",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "32px",
    },
    gridLg: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "32px",
    },
    stepContainer: {
      backgroundColor: "#7ac9d7",
      border: "1px solid #2e040a",
      borderRadius: "16px",
      padding: "8px",
      position: "relative",
      marginBottom: "32px",
      transition: "all 0.5s",
    },
    stepBadge: {
      position: "absolute",
      left: "-32px",
      top: "-16px",
      width: "64px",
      height: "64px",
      border: "1px solid black",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.5s",
      cursor: "pointer",
      fontSize: "24px",
      fontWeight: "bold",
      color: "black",
    },
    stepContent: {
      backgroundColor: "#d8eff3",
      border: "1px solid #2e040a",
      borderRadius: "12px",
      padding: "24px",
    },
    stepHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "24px",
    },
    stepTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#2e040a",
      margin: "0",
    },
    button: {
      backgroundColor: "#2e040a",
      color: "white",
      padding: "8px 16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s",
      fontWeight: "500",
    },
    buttonHover: {
      backgroundColor: "#4a0a16",
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "16px",
    },
    formGroup: {
      marginBottom: "16px",
    },
    label: {
      fontSize: "14px",
      color: "#6d4b4a",
      marginBottom: "4px",
      display: "block",
    },
    select: {
      width: "100%",
      padding: "8px",
      backgroundColor: "white",
      border: "1px solid #2e040a",
      borderRadius: "4px",
      transition: "border-color 0.3s",
    },
    serviceItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #2e040a",
      transition: "all 0.3s",
      cursor: "pointer",
      marginBottom: "8px",
    },
    serviceItemSelected: {
      backgroundColor: "#d8a5dc",
      transform: "scale(1.02)",
    },
    serviceItemDefault: {
      backgroundColor: "white",
    },
    checkbox: {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s",
    },
    checkboxSelected: {
      backgroundColor: "#2e040a",
    },
    checkboxDefault: {
      backgroundColor: "#d1d5db",
    },
    checkboxInner: {
      width: "12px",
      height: "12px",
      backgroundColor: "white",
      borderRadius: "50%",
    },
    serviceInfo: {
      flex: "1",
      marginLeft: "16px",
    },
    serviceName: {
      fontWeight: "500",
      color: "#2e040a",
      display: "block",
    },
    serviceDesc: {
      fontSize: "12px",
      color: "#6d4b4a",
    },
    summary: {
      position: "sticky",
      top: "32px",
    },
    summaryHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "32px",
    },
    summaryTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#2e040a",
      margin: "0",
    },
    price: {
      textAlign: "right",
    },
    priceLabel: {
      fontSize: "14px",
      color: "#6d4b4a",
    },
    priceValue: {
      fontWeight: "bold",
      color: "#2e040a",
      fontSize: "20px",
    },
    ticket: {
      backgroundColor: "#7ac9d7",
      border: "1px solid #2e040a",
      borderRadius: "16px",
      padding: "8px",
      transition: "all 0.5s",
    },
    ticketInner: {
      backgroundColor: "#ffefe0",
      border: "1px solid #2e040a",
      borderRadius: "12px",
      overflow: "hidden",
    },
    ticketHeader: {
      backgroundColor: "#7ac9d7",
      padding: "16px",
      textAlign: "center",
    },
    ticketHeaderTitle: {
      fontWeight: "bold",
      color: "#2e040a",
      fontSize: "20px",
      textTransform: "uppercase",
      margin: "0",
    },
    ticketSection: {
      padding: "24px",
    },
    sectionGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
      marginBottom: "16px",
    },
    infoGroup: {
      marginBottom: "16px",
    },
    infoLabel: {
      fontSize: "14px",
      color: "#6d4b4a",
    },
    infoValue: {
      fontWeight: "bold",
      color: "#2e040a",
      fontSize: "20px",
    },
    tags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
    },
    tag: {
      backgroundColor: "#d8a5dc",
      border: "1px solid #2e040a",
      borderRadius: "9999px",
      padding: "4px 12px",
      fontSize: "14px",
      color: "#2e040a",
      animation: "pulse 2s infinite",
    },
    tagAddon: {
      backgroundColor: "#ff7900",
    },
    progressBar: {
      padding: "24px 24px 8px 24px",
    },
    progressHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "12px",
      color: "#6d4b4a",
      marginBottom: "8px",
    },
    progressTrack: {
      width: "100%",
      backgroundColor: "#e5e7eb",
      borderRadius: "9999px",
      height: "8px",
    },
    progressFill: {
      background: "linear-gradient(to right, #71ba51, #ff7900, #9b48ae)",
      height: "8px",
      borderRadius: "9999px",
      transition: "all 0.7s ease-out",
    },
    ctaSection: {
      padding: "24px",
      textAlign: "center",
    },
    ctaButton: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#2e040a",
      color: "#ffefe0",
      padding: "12px 32px",
      borderRadius: "8px",
      fontWeight: "bold",
      textTransform: "uppercase",
      transition: "all 0.5s",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
    },
    ctaButtonBounce: {
      animation: "bounce 1s infinite",
    },
    completionMessage: {
      marginTop: "16px",
      fontSize: "14px",
      color: "#6d4b4a",
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
              transform: translate3d(0,0,0);
            }
            40%, 43% {
              transform: translate3d(0,-30px,0);
            }
            70% {
              transform: translate3d(0,-15px,0);
            }
            90% {
              transform: translate3d(0,-4px,0);
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: .5;
            }
          }
          @media (max-width: 1024px) {
            .responsive-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      <div style={styles.maxWidth}>
        {/* Hero Section */}
        <div style={styles.hero}>
          <div style={styles.badge}>
            <span>OFFRE</span>
          </div>
          <h1 style={styles.title}>Configurez votre projet</h1>
          <p style={styles.subtitle}>
            Choisissez votre itinéraire. Ajoutez vos options. Et on vous montre
            le chemin à emprunter.
          </p>
        </div>

        <div style={styles.gridLg} className="responsive-grid">
          {/* Left Column - Configuration Steps */}
          <div>
            {/* Step 1: Itinéraire */}
            <div style={styles.stepContainer}>
              <div
                style={{
                  ...styles.stepBadge,
                  backgroundColor: currentStep >= 1 ? "#71ba51" : "#9ca3af",
                  transform: currentStep >= 1 ? "scale(1.1)" : "scale(1)",
                }}
                onClick={() => setCurrentStep(1)}
              >
                1
              </div>
              <div style={styles.stepContent}>
                <div style={styles.stepHeader}>
                  <h3 style={styles.stepTitle}>Choisissez votre itinéraire</h3>
                  <button
                    style={styles.button}
                    onClick={() => setCurrentStep(2)}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor =
                        styles.buttonHover.backgroundColor)
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor =
                        styles.button.backgroundColor)
                    }
                  >
                    Suivant →
                  </button>
                </div>
                <div style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Je souhaites un site</label>
                    <select
                      style={styles.select}
                      value={config.siteType}
                      onChange={(e) =>
                        setConfig({ ...config, siteType: e.target.value })
                      }
                    >
                      <option value="marketing">Marketing</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="corporate">Corporate</option>
                    </select>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>d'environ</label>
                    <select
                      style={styles.select}
                      value={config.pages}
                      onChange={(e) =>
                        setConfig({ ...config, pages: e.target.value })
                      }
                    >
                      <option value="5-10">5 - 10 pages</option>
                      <option value="10-15">10 - 15 pages</option>
                      <option value="15-25">15 - 25 pages</option>
                      <option value="25+">25+ pages</option>
                    </select>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>dans un délai de</label>
                    <select
                      style={styles.select}
                      value={config.deadline}
                      onChange={(e) =>
                        setConfig({ ...config, deadline: e.target.value })
                      }
                    >
                      <option value="1mois">1 mois</option>
                      <option value="2mois">2 mois</option>
                      <option value="3mois">3 mois</option>
                      <option value="6mois">6 mois</option>
                    </select>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>avec pour budget</label>
                    <select
                      style={styles.select}
                      value={config.budget}
                      onChange={(e) =>
                        setConfig({ ...config, budget: e.target.value })
                      }
                    >
                      <option value="3000-7500€">3 000 - 7 500€</option>
                      <option value="7500-15000€">7 500 - 15 000€</option>
                      <option value="15000-30000€">15 000 - 30 000€</option>
                      <option value="30000€+">30 000€+</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Services */}
            <div
              style={{ ...styles.stepContainer, backgroundColor: "#d8a5dc" }}
            >
              <div
                style={{
                  ...styles.stepBadge,
                  backgroundColor: currentStep >= 2 ? "#ff7900" : "#9ca3af",
                  transform: currentStep >= 2 ? "scale(1.1)" : "scale(1)",
                  left: "-24px",
                }}
                onClick={() => setCurrentStep(2)}
              >
                2
              </div>
              <div
                style={{ ...styles.stepContent, backgroundColor: "#f7edf8" }}
              >
                <div style={styles.stepHeader}>
                  <h3 style={styles.stepTitle}>Sélectionnez vos besoins</h3>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      style={{ ...styles.button, backgroundColor: "#6b7280" }}
                      onClick={() => setCurrentStep(1)}
                    >
                      ← Précédent
                    </button>
                    <button
                      style={styles.button}
                      onClick={() => setCurrentStep(3)}
                    >
                      Suivant →
                    </button>
                  </div>
                </div>
                <div>
                  {[
                    {
                      key: "branding",
                      name: "Branding",
                      desc: "Logo, charte graphique, identité visuelle",
                    },
                    {
                      key: "webdesign",
                      name: "Webdesign",
                      desc: "Maquettes UI/UX, design responsive",
                    },
                    {
                      key: "webflow",
                      name: "Intégration Webflow",
                      desc: "Développement no-code sur Webflow",
                    },
                    {
                      key: "formations",
                      name: "Formations",
                      desc: "Formation à l'utilisation de votre site",
                    },
                    {
                      key: "seo",
                      name: "SEO",
                      desc: "Optimisation pour les moteurs de recherche",
                    },
                  ].map((service) => {
                    const isSelected = selectedServices[service.key];
                    return (
                      <div
                        key={service.key}
                        style={
                          isSelected
                            ? {
                                ...styles.serviceItem,
                                ...styles.serviceItemSelected,
                              }
                            : {
                                ...styles.serviceItem,
                                ...styles.serviceItemDefault,
                              }
                        }
                        onClick={() =>
                          setSelectedServices({
                            ...selectedServices,
                            [service.key]: !isSelected,
                          })
                        }
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div
                            style={
                              isSelected
                                ? {
                                    ...styles.checkbox,
                                    ...styles.checkboxSelected,
                                  }
                                : {
                                    ...styles.checkbox,
                                    ...styles.checkboxDefault,
                                  }
                            }
                          >
                            {isSelected && (
                              <div style={styles.checkboxInner}></div>
                            )}
                          </div>
                          <div style={styles.serviceInfo}>
                            <span style={styles.serviceName}>
                              {service.name}
                            </span>
                            <div style={styles.serviceDesc}>{service.desc}</div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              color: isSelected ? "#2e040a" : "#9ca3af",
                            }}
                          >
                            {isSelected ? "Inclus" : "Ajouter"}
                          </span>
                          <button
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "4px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: isSelected
                                ? "#71ba51"
                                : "#2e040a",
                              border: "none",
                              color: "white",
                              fontSize: "14px",
                              transform: isSelected
                                ? "rotate(45deg)"
                                : "rotate(0deg)",
                              transition: "all 0.3s",
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div style={styles.summary}>
            <div style={styles.summaryHeader}>
              <h3 style={styles.summaryTitle}>My order</h3>
              <div style={styles.price}>
                <div style={styles.priceLabel}>Estimation</div>
                <div style={styles.priceValue}>
                  {calculateTotal().toLocaleString()}€
                </div>
              </div>
            </div>
            <div style={styles.ticket}>
              <div style={styles.ticketInner}>
                {/* Header */}
                <div style={styles.ticketHeader}>
                  <h4 style={styles.ticketHeaderTitle}>
                    itinéraire {config.siteType}
                  </h4>
                </div>

                {/* Details */}
                <div style={styles.ticketSection}>
                  <div style={styles.sectionGrid}>
                    <div style={styles.infoGroup}>
                      <div style={styles.infoLabel}>Nombre de pages</div>
                      <div style={styles.infoValue}>{config.pages}</div>
                    </div>
                    <div style={styles.infoGroup}>
                      <div style={styles.infoLabel}>Deadline</div>
                      <div style={styles.infoValue}>{config.deadline}</div>
                    </div>
                  </div>
                  <div style={styles.infoGroup}>
                    <div style={styles.infoLabel}>Budget</div>
                    <div style={styles.infoValue}>{config.budget}</div>
                  </div>
                </div>

                {/* Services */}
                <div style={styles.ticketSection}>
                  <div style={{ ...styles.infoLabel, marginBottom: "16px" }}>
                    Services (
                    {Object.values(selectedServices).filter(Boolean).length}{" "}
                    sélectionnés)
                  </div>
                  <div style={styles.tags}>
                    {Object.entries(selectedServices).map(
                      ([key, isSelected]) => {
                        if (!isSelected) return null;
                        const serviceNames = {
                          branding: "Branding",
                          webdesign: "Webdesign",
                          webflow: "Intégration Webflow",
                          formations: "Formations",
                          seo: "SEO",
                        };
                        return (
                          <span key={key} style={styles.tag}>
                            {serviceNames[key]}
                          </span>
                        );
                      }
                    )}
                    {Object.values(selectedServices).filter(Boolean).length ===
                      0 && (
                      <span style={{ color: "#9ca3af", fontStyle: "italic" }}>
                        Aucun service sélectionné
                      </span>
                    )}
                  </div>
                </div>

                {/* Add-ons */}
                <div style={styles.ticketSection}>
                  <div style={{ ...styles.infoLabel, marginBottom: "16px" }}>
                    Add-ons (
                    {Object.values(selectedAddons).filter(Boolean).length}{" "}
                    sélectionnés)
                  </div>
                  <div style={styles.tags}>
                    {Object.entries(selectedAddons).map(([key, isSelected]) => {
                      if (!isSelected) return null;
                      const addonNames = {
                        maintenance1: "Maintenance Standard",
                        maintenance2: "Maintenance Premium",
                      };
                      return (
                        <span
                          key={key}
                          style={{ ...styles.tag, ...styles.tagAddon }}
                        >
                          {addonNames[key]}
                        </span>
                      );
                    })}
                    {Object.values(selectedAddons).filter(Boolean).length ===
                      0 && (
                      <span style={{ color: "#9ca3af", fontStyle: "italic" }}>
                        Aucun add-on sélectionné
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div style={styles.progressBar}>
                  <div style={styles.progressHeader}>
                    <span>Configuration</span>
                    <span>{Math.round((currentStep / 3) * 100)}% complété</span>
                  </div>
                  <div style={styles.progressTrack}>
                    <div
                      style={{
                        ...styles.progressFill,
                        width: `${(currentStep / 3) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* CTA Button */}
                <div style={styles.ctaSection}>
                  <button
                    style={
                      currentStep === 3
                        ? { ...styles.ctaButton, ...styles.ctaButtonBounce }
                        : styles.ctaButton
                    }
                    onClick={() => {
                      if (currentStep < 3) {
                        setCurrentStep(currentStep + 1);
                      } else {
                        alert(
                          "Devis envoyé ! Nous vous contacterons sous 24h."
                        );
                      }
                    }}
                  >
                    {currentStep < 3
                      ? `Étape ${currentStep + 1}`
                      : "Demander un devis"}
                  </button>

                  {currentStep === 3 && (
                    <div style={styles.completionMessage}>
                      <p>🎉 Configuration terminée !</p>
                      <p>
                        Estimation :{" "}
                        <strong>{calculateTotal().toLocaleString()}€</strong>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
