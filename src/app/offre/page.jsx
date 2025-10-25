"use client";

import React, { useState, useEffect } from "react";

export default function Offre() {
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
    const serviceCount = Object.values(selectedServices).filter(Boolean).length;
    const addonCount = Object.values(selectedAddons).filter(Boolean).length;
    return basePrice + addonCount * 200;
  };

  // Animation pour les étapes
  const getStepClass = (step) => {
    if (step <= currentStep) {
      return "transform scale-100 opacity-100 transition-all duration-500";
    }
    return "transform scale-95 opacity-50 transition-all duration-500";
  };

  return (
    <div className="relative min-h-screen bg-[#ffefe0]">
      {/* Navigation */}
      <div className="fixed right-2 top-2 z-50 flex flex-col gap-1 p-2">
        <div className="bg-[#ffefe0] border border-[#2e040a] rounded-lg p-2">
          <div className="font-bold text-[#2e040a] text-xl text-center uppercase">
            sr
          </div>
        </div>
        <div className="bg-[#d8a5dc] border border-[#2e040a] rounded-lg p-2">
          <div className="w-6 h-6 bg-[#71ba51] rounded"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#2e040a] text-[#ffefe0] py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-block bg-transparent border border-[#d8a5dc] rounded-full px-3 py-1 mb-6">
              <span className="text-[#d8a5dc] text-xs uppercase tracking-wide font-medium">
                offre
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Visualisez le sommet. Trouvez la voie. Avancez.
            </h1>
            <p className="text-xl text-[#ffefe0]">
              Nos offres s'ajustent à chaque projet... et surtout au vôtre !
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column - Configuration */}
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-5xl font-bold text-[#2e040a] mb-6">
                Création sur mesure
              </h2>
              <p className="text-[#2e040a] mb-8">
                Choisissez votre itinéraire. Ajoutez vos options. Et on vous
                montre le chemin à emprunter.
              </p>
            </div>

            {/* Step 1: Itinéraire */}
            <div
              className={`bg-[#7ac9d7] border border-[#2e040a] rounded-2xl p-2 relative ${getStepClass(
                1
              )}`}
            >
              <div
                className={`absolute -left-8 -top-4 w-16 h-16 border border-black rounded-lg flex items-center justify-center transition-all duration-500 cursor-pointer ${
                  currentStep >= 1 ? "bg-[#71ba51] scale-110" : "bg-gray-400"
                }`}
                onClick={() => setCurrentStep(1)}
              >
                <span className="text-black font-bold text-2xl">1</span>
              </div>
              <div className="bg-[#d8eff3] border border-[#2e040a] rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#2e040a]">
                    Choisissez votre itinéraire
                  </h3>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="bg-[#2e040a] text-white px-4 py-2 rounded-lg hover:bg-[#4a0a16] transition-colors"
                  >
                    Suivant →
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm text-[#6d4b4a] mb-1 block">
                      Je souhaites un site
                    </label>
                    <select
                      className="w-full p-2 bg-white border border-[#2e040a] rounded hover:border-[#71ba51] transition-colors"
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
                  <div>
                    <label className="text-sm text-[#6d4b4a] mb-1 block">
                      d'environ
                    </label>
                    <select
                      className="w-full p-2 bg-white border border-[#2e040a] rounded hover:border-[#71ba51] transition-colors"
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
                  <div>
                    <label className="text-sm text-[#6d4b4a] mb-1 block">
                      dans un délai de
                    </label>
                    <select
                      className="w-full p-2 bg-white border border-[#2e040a] rounded hover:border-[#71ba51] transition-colors"
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
                  <div>
                    <label className="text-sm text-[#6d4b4a] mb-1 block">
                      avec pour budget
                    </label>
                    <select
                      className="w-full p-2 bg-white border border-[#2e040a] rounded hover:border-[#71ba51] transition-colors"
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
              className={`bg-[#d8a5dc] border border-[#2e040a] rounded-2xl p-2 relative ${getStepClass(
                2
              )}`}
            >
              <div
                className={`absolute -left-6 -top-4 w-16 h-16 border border-black rounded-lg flex items-center justify-center transition-all duration-500 cursor-pointer ${
                  currentStep >= 2 ? "bg-[#ff7900] scale-110" : "bg-gray-400"
                }`}
                onClick={() => setCurrentStep(2)}
              >
                <span className="text-black font-bold text-2xl">2</span>
              </div>
              <div className="bg-[#f7edf8] border border-[#2e040a] rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#2e040a]">
                    Sélectionnez vos besoins
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      ← Précédent
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="bg-[#2e040a] text-white px-4 py-2 rounded-lg hover:bg-[#4a0a16] transition-colors"
                    >
                      Suivant →
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
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
                  ].map((service, index) => {
                    const isSelected = selectedServices[service.key];
                    return (
                      <div
                        key={service.key}
                        className={`flex items-center justify-between p-3 rounded-lg border border-[#2e040a] transition-all duration-300 cursor-pointer hover:shadow-lg ${
                          isSelected
                            ? "bg-[#d8a5dc] scale-[1.02]"
                            : "bg-white hover:bg-gray-50"
                        }`}
                        onClick={() =>
                          setSelectedServices({
                            ...selectedServices,
                            [service.key]: !isSelected,
                          })
                        }
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isSelected ? "bg-[#2e040a]" : "bg-gray-300"
                            }`}
                          >
                            {isSelected && (
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-[#2e040a] block">
                              {service.name}
                            </span>
                            <span className="text-xs text-[#6d4b4a]">
                              {service.desc}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-sm font-bold uppercase transition-colors ${
                              isSelected ? "text-[#2e040a]" : "text-gray-400"
                            }`}
                          >
                            {isSelected ? "Inclus" : "Ajouter"}
                          </span>
                          <button
                            className={`w-6 h-6 rounded flex items-center justify-center transition-all duration-300 ${
                              isSelected
                                ? "bg-[#71ba51] rotate-45"
                                : "bg-[#2e040a]"
                            }`}
                          >
                            <span className="text-white text-sm">+</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Options */}
            <div
              className={`bg-[#ff7900] border border-[#2e040a] rounded-2xl p-2 relative ${getStepClass(
                3
              )}`}
            >
              <div
                className={`absolute -left-8 top-24 w-16 h-12 border border-black rounded-t-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
                  currentStep >= 3 ? "bg-[#9b48ae] scale-110" : "bg-gray-400"
                }`}
                onClick={() => setCurrentStep(3)}
              >
                <span className="text-black font-bold text-2xl">3</span>
              </div>
              <div className="bg-[#ffe1c7] border border-[#2e040a] rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#2e040a]">
                    Ajoutez des options
                  </h3>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    ← Précédent
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      key: "maintenance1",
                      name: "Maintenance Standard",
                      price: "150€/mois",
                      features: [
                        "Sauvegarde quotidienne",
                        "Mise à jour sécurité",
                        "Support email",
                        "Monitoring 24/7",
                        "Rapport mensuel",
                      ],
                    },
                    {
                      key: "maintenance2",
                      name: "Maintenance Premium",
                      price: "300€/mois",
                      features: [
                        "Tout Standard +",
                        "Support prioritaire",
                        "Optimisation SEO",
                        "Analyse performance",
                        "Support téléphonique",
                      ],
                    },
                  ].map((addon, index) => {
                    const isSelected = selectedAddons[addon.key];
                    return (
                      <div
                        key={addon.key}
                        className={`border border-[#2e040a] rounded-lg p-4 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                          isSelected
                            ? "bg-white scale-[1.02] shadow-lg"
                            : "bg-[#fff5e6] hover:bg-white"
                        }`}
                        onClick={() =>
                          setSelectedAddons({
                            ...selectedAddons,
                            [addon.key]: !isSelected,
                          })
                        }
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-medium text-[#2e040a]">
                            {addon.name}
                          </h4>
                          <div className="text-right">
                            <div className="text-sm text-[#2e040a]">
                              à partir de
                            </div>
                            <div className="font-bold text-[#2e040a]">
                              {addon.price}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-[#2e040a] mb-4">
                          <p className="mb-2 font-medium">Services inclus :</p>
                          <ul className="list-disc list-inside space-y-1">
                            {addon.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex justify-end">
                          <button
                            className={`w-10 h-10 rounded flex items-center justify-center transition-all duration-300 ${
                              isSelected
                                ? "bg-[#71ba51] scale-110 rotate-45"
                                : "bg-[#2e040a] hover:bg-[#4a0a16]"
                            }`}
                          >
                            <span className="text-white">+</span>
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
          <div className="lg:col-span-1 sticky top-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-[#2e040a]">My order</h3>
              <div className="text-right">
                <div className="text-sm text-[#6d4b4a]">Estimation</div>
                <div className="font-bold text-[#2e040a] text-xl">
                  {calculateTotal().toLocaleString()}€
                </div>
              </div>
            </div>
            <div className="bg-[#7ac9d7] border border-[#2e040a] rounded-2xl p-2 transition-all duration-500 hover:shadow-xl">
              <div className="bg-[#ffefe0] border border-[#2e040a] rounded-xl overflow-hidden">
                {/* Header */}
                <div className="bg-[#7ac9d7] p-4 text-center">
                  <h4 className="font-bold text-[#2e040a] text-xl uppercase">
                    itinéraire {config.siteType}
                  </h4>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-[#6d4b4a]">
                        Nombre de pages
                      </div>
                      <div className="font-bold text-[#2e040a] text-xl">
                        {config.pages}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-[#6d4b4a]">Deadline</div>
                      <div className="font-bold text-[#2e040a] text-xl">
                        {config.deadline}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#6d4b4a]">Budget</div>
                    <div className="font-bold text-[#2e040a] text-xl">
                      {config.budget}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="h-px bg-[#2e040a] mx-6"></div>
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-[#ffefe0] border border-[#2e040a] rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute -right-3 top-0 w-6 h-6 bg-[#ffefe0] border border-[#2e040a] rounded-full transform -translate-y-1/2"></div>
                </div>

                {/* Services */}
                <div className="p-6">
                  <div className="text-sm text-[#6d4b4a] mb-4">
                    Services (
                    {Object.values(selectedServices).filter(Boolean).length}{" "}
                    sélectionnés)
                  </div>
                  <div className="flex flex-wrap gap-2">
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
                          <span
                            key={key}
                            className="bg-[#d8a5dc] border border-[#2e040a] rounded-full px-3 py-1 text-sm text-[#2e040a] animate-pulse"
                          >
                            {serviceNames[key]}
                          </span>
                        );
                      }
                    )}
                    {Object.values(selectedServices).filter(Boolean).length ===
                      0 && (
                      <span className="text-gray-500 italic">
                        Aucun service sélectionné
                      </span>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="h-px bg-[#2e040a] mx-6"></div>
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-[#ffefe0] border border-[#2e040a] rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute -right-3 top-0 w-6 h-6 bg-[#ffefe0] border border-[#2e040a] rounded-full transform -translate-y-1/2"></div>
                </div>

                {/* Add-ons */}
                <div className="p-6">
                  <div className="text-sm text-[#6d4b4a] mb-4">
                    Add-ons (
                    {Object.values(selectedAddons).filter(Boolean).length}{" "}
                    sélectionnés)
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(selectedAddons).map(([key, isSelected]) => {
                      if (!isSelected) return null;
                      const addonNames = {
                        maintenance1: "Maintenance Standard",
                        maintenance2: "Maintenance Premium",
                      };
                      return (
                        <span
                          key={key}
                          className="bg-[#ff7900] border border-[#2e040a] rounded-full px-3 py-1 text-sm text-[#2e040a] animate-pulse"
                        >
                          {addonNames[key]}
                        </span>
                      );
                    })}
                    {Object.values(selectedAddons).filter(Boolean).length ===
                      0 && (
                      <span className="text-gray-500 italic">
                        Aucun add-on sélectionné
                      </span>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="h-px bg-[#2e040a] mx-6"></div>
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-[#ffefe0] border border-[#2e040a] rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute -right-3 top-0 w-6 h-6 bg-[#ffefe0] border border-[#2e040a] rounded-full transform -translate-y-1/2"></div>
                </div>

                {/* Progress Bar */}
                <div className="px-6 py-2">
                  <div className="flex items-center justify-between text-xs text-[#6d4b4a] mb-2">
                    <span>Configuration</span>
                    <span>{Math.round((currentStep / 3) * 100)}% complété</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#71ba51] via-[#ff7900] to-[#9b48ae] h-2 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${(currentStep / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-6 text-center">
                  <button
                    className={`relative overflow-hidden bg-[#2e040a] text-[#ffefe0] px-8 py-3 rounded-lg font-bold uppercase transition-all duration-500 hover:bg-[#4a0a16] hover:scale-105 hover:shadow-xl ${
                      currentStep === 3 ? "animate-bounce" : ""
                    }`}
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
                    <span className="relative z-10">
                      {currentStep < 3
                        ? `Étape ${currentStep + 1}`
                        : "Demander un devis"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#71ba51] via-[#ff7900] to-[#9b48ae] opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  </button>

                  {currentStep === 3 && (
                    <div className="mt-4 text-sm text-[#6d4b4a] opacity-0 animate-pulse">
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
