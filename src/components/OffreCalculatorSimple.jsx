"use client";

import React, { useState } from "react";

export default function OffreCalculatorSimple() {
  const [config, setConfig] = useState({
    siteType: "marketing",
    pages: "10-15",
    deadline: "3mois",
    budget: "7500-15000€",
  });

  const [selectedServices, setSelectedServices] = useState({
    branding: true,
    webdesign: true,
    webflow: true,
    formations: true,
    seo: true,
  });

  const [selectedAddons, setSelectedAddons] = useState({
    maintenance1: true,
    maintenance2: false,
  });

  const [currentStep, setCurrentStep] = useState(1);

  const calculateTotal = () => {
    const basePrice = 11250;
    const addonCount = Object.values(selectedAddons).filter(Boolean).length;
    return basePrice + addonCount * 200;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffefe0",
        padding: "32px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <style>{`
        .offre-container { max-width: 1200px; margin: 0 auto; }
        .offre-hero { text-align: center; margin-bottom: 48px; }
        .offre-badge { 
          display: inline-block; 
          background: transparent; 
          border: 1px solid #d8a5dc; 
          border-radius: 20px; 
          padding: 8px 16px; 
          margin-bottom: 24px; 
          color: #2e040a; 
          font-weight: bold;
        }
        .offre-title { 
          font-size: 48px; 
          font-weight: bold; 
          color: #2e040a; 
          margin: 0 0 16px 0; 
        }
        .offre-subtitle { 
          font-size: 20px; 
          color: #6d4b4a; 
          max-width: 500px; 
          margin: 0 auto; 
          line-height: 1.5; 
        }
        .offre-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 32px; }
        .offre-step { 
          background: #7ac9d7; 
          border: 1px solid #2e040a; 
          border-radius: 16px; 
          padding: 8px; 
          margin-bottom: 32px; 
          position: relative;
        }
        .offre-step-content { 
          background: #d8eff3; 
          border: 1px solid #2e040a; 
          border-radius: 12px; 
          padding: 24px; 
        }
        .offre-step-title { 
          font-size: 24px; 
          font-weight: bold; 
          color: #2e040a; 
          margin: 0 0 24px 0; 
        }
        .offre-form-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
          gap: 16px; 
        }
        .offre-form-group { margin-bottom: 16px; }
        .offre-label { 
          font-size: 14px; 
          color: #6d4b4a; 
          margin-bottom: 4px; 
          display: block; 
        }
        .offre-select { 
          width: 100%; 
          padding: 8px; 
          background: white; 
          border: 1px solid #2e040a; 
          border-radius: 4px; 
        }
        .offre-button { 
          background: #2e040a; 
          color: white; 
          padding: 8px 16px; 
          border-radius: 8px; 
          border: none; 
          cursor: pointer; 
          font-weight: bold;
        }
        .offre-button:hover { background: #4a0a16; }
        .offre-service { 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          padding: 12px; 
          border-radius: 8px; 
          border: 1px solid #2e040a; 
          margin-bottom: 8px; 
          cursor: pointer; 
          background: white;
        }
        .offre-service.selected { 
          background: #d8a5dc; 
          transform: scale(1.02); 
        }
        .offre-checkbox { 
          width: 24px; 
          height: 24px; 
          border-radius: 50%; 
          background: #d1d5db; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
        }
        .offre-checkbox.selected { background: #2e040a; }
        .offre-checkbox-inner { 
          width: 12px; 
          height: 12px; 
          background: white; 
          border-radius: 50%; 
        }
        .offre-summary { position: sticky; top: 32px; }
        .offre-ticket { 
          background: #7ac9d7; 
          border: 1px solid #2e040a; 
          border-radius: 16px; 
          padding: 8px; 
        }
        .offre-ticket-inner { 
          background: #ffefe0; 
          border: 1px solid #2e040a; 
          border-radius: 12px; 
          overflow: hidden; 
        }
        .offre-ticket-header { 
          background: #7ac9d7; 
          padding: 16px; 
          text-align: center; 
        }
        .offre-ticket-title { 
          font-weight: bold; 
          color: #2e040a; 
          font-size: 20px; 
          text-transform: uppercase; 
          margin: 0; 
        }
        .offre-section { padding: 24px; }
        .offre-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .offre-tag { 
          background: #d8a5dc; 
          border: 1px solid #2e040a; 
          border-radius: 20px; 
          padding: 4px 12px; 
          font-size: 14px; 
          color: #2e040a; 
        }
        .offre-cta { 
          padding: 24px; 
          text-align: center; 
        }
        .offre-cta-button { 
          background: #2e040a; 
          color: #ffefe0; 
          padding: 12px 32px; 
          border-radius: 8px; 
          font-weight: bold; 
          text-transform: uppercase; 
          border: none; 
          cursor: pointer; 
          font-size: 16px;
        }
        .offre-price { 
          font-size: 32px; 
          font-weight: bold; 
          color: #2e040a; 
          text-align: right; 
        }
        @media (max-width: 768px) {
          .offre-grid { grid-template-columns: 1fr; }
          .offre-title { font-size: 32px; }
        }
      `}</style>

      <div className="offre-container">
        <div className="offre-hero">
          <div className="offre-badge">OFFRE</div>
          <h1 className="offre-title">Configurez votre projet</h1>
          <p className="offre-subtitle">
            Choisissez votre itinéraire. Ajoutez vos options. Et on vous montre
            le chemin à emprunter.
          </p>
        </div>

        <div className="offre-grid">
          <div>
            {/* Step 1 */}
            <div className="offre-step">
              <div className="offre-step-content">
                <h3 className="offre-step-title">
                  Choisissez votre itinéraire
                </h3>
                <div className="offre-form-grid">
                  <div className="offre-form-group">
                    <label className="offre-label">Je souhaite un site</label>
                    <select
                      className="offre-select"
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
                  <div className="offre-form-group">
                    <label className="offre-label">d'environ</label>
                    <select
                      className="offre-select"
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
                  <div className="offre-form-group">
                    <label className="offre-label">dans un délai de</label>
                    <select
                      className="offre-select"
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
                  <div className="offre-form-group">
                    <label className="offre-label">avec pour budget</label>
                    <select
                      className="offre-select"
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

            {/* Step 2 */}
            <div className="offre-step" style={{ background: "#d8a5dc" }}>
              <div
                className="offre-step-content"
                style={{ background: "#f7edf8" }}
              >
                <h3 className="offre-step-title">Sélectionnez vos besoins</h3>
                <div>
                  {[
                    {
                      key: "branding",
                      name: "Branding",
                      desc: "Logo, charte graphique",
                    },
                    {
                      key: "webdesign",
                      name: "Webdesign",
                      desc: "Maquettes UI/UX",
                    },
                    {
                      key: "webflow",
                      name: "Intégration Webflow",
                      desc: "Développement no-code",
                    },
                    {
                      key: "formations",
                      name: "Formations",
                      desc: "Formation à l'utilisation",
                    },
                    { key: "seo", name: "SEO", desc: "Optimisation SEO" },
                  ].map((service) => {
                    const isSelected = selectedServices[service.key];
                    return (
                      <div
                        key={service.key}
                        className={`offre-service ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() =>
                          setSelectedServices({
                            ...selectedServices,
                            [service.key]: !isSelected,
                          })
                        }
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div
                            className={`offre-checkbox ${
                              isSelected ? "selected" : ""
                            }`}
                          >
                            {isSelected && (
                              <div className="offre-checkbox-inner"></div>
                            )}
                          </div>
                          <div style={{ marginLeft: "16px" }}>
                            <div
                              style={{ fontWeight: "bold", color: "#2e040a" }}
                            >
                              {service.name}
                            </div>
                            <div style={{ fontSize: "12px", color: "#6d4b4a" }}>
                              {service.desc}
                            </div>
                          </div>
                        </div>
                        <button
                          className="offre-button"
                          style={{
                            background: isSelected ? "#71ba51" : "#2e040a",
                            transform: isSelected
                              ? "rotate(45deg)"
                              : "rotate(0deg)",
                          }}
                        >
                          +
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="offre-summary">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "32px",
              }}
            >
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#2e040a",
                  margin: "0",
                }}
              >
                My order
              </h3>
              <div className="offre-price">
                {calculateTotal().toLocaleString()}€
              </div>
            </div>

            <div className="offre-ticket">
              <div className="offre-ticket-inner">
                <div className="offre-ticket-header">
                  <h4 className="offre-ticket-title">
                    itinéraire {config.siteType}
                  </h4>
                </div>

                <div className="offre-section">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "16px",
                      marginBottom: "16px",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "14px", color: "#6d4b4a" }}>
                        Pages
                      </div>
                      <div
                        style={{
                          fontWeight: "bold",
                          color: "#2e040a",
                          fontSize: "20px",
                        }}
                      >
                        {config.pages}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", color: "#6d4b4a" }}>
                        Délai
                      </div>
                      <div
                        style={{
                          fontWeight: "bold",
                          color: "#2e040a",
                          fontSize: "20px",
                        }}
                      >
                        {config.deadline}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", color: "#6d4b4a" }}>
                      Budget
                    </div>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#2e040a",
                        fontSize: "20px",
                      }}
                    >
                      {config.budget}
                    </div>
                  </div>
                </div>

                <div className="offre-section">
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#6d4b4a",
                      marginBottom: "16px",
                    }}
                  >
                    Services (
                    {Object.values(selectedServices).filter(Boolean).length}{" "}
                    sélectionnés)
                  </div>
                  <div className="offre-tags">
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
                          <span key={key} className="offre-tag">
                            {serviceNames[key]}
                          </span>
                        );
                      }
                    )}
                  </div>
                </div>

                <div className="offre-cta">
                  <button
                    className="offre-cta-button"
                    onClick={() =>
                      alert("Devis envoyé ! Nous vous contacterons sous 24h.")
                    }
                  >
                    Demander un devis
                  </button>
                  <div
                    style={{
                      marginTop: "16px",
                      fontSize: "14px",
                      color: "#6d4b4a",
                    }}
                  >
                    <p>🎉 Configuration terminée !</p>
                    <p>
                      Estimation :{" "}
                      <strong>{calculateTotal().toLocaleString()}€</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



