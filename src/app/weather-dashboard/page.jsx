"use client";

import { Section, Block, Link } from "@/devlink/_Builtin";
import { Navbar } from "@/devlink/Navbar";
import { Footer } from "@/devlink/Footer";
import { DetailedWeatherApp } from "@/components/DetailedWeatherApp";
import navbarStyles from "@/devlink/Navbar.module.css";

export default function WeatherDashboard() {
  return (
    <Section
      tag="section"
      className="Page wrapper"
      style={{
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Block tag="div" className="Navbar container">
        <Navbar
          navbarLinkFeatures="Dashboard"
          navbarLinkProducts="Prévisions"
          navbarLinkResources="Cartes"
          navbarLinkContact="Alertes"
        />

        <Block
          tag="div"
          style={{
            textAlign: "center",
            padding: "40px 0",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              background: "linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "20px",
            }}
          >
            Dashboard Météo Avancé
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#64748b",
              marginBottom: "40px",
            }}
          >
            Suivez la météo en temps réel avec des prévisions détaillées
          </p>

          <Link
            button={true}
            options={{
              href: "/hello",
            }}
            className={navbarStyles.button || ""}
            style={{
              display: "inline-block",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 24px",
              textDecoration: "none",
              borderRadius: "8px",
              background: "linear-gradient(83.21deg, #64748b 0%, #475569 100%)",
              color: "white",
              fontWeight: "600",
              marginBottom: "40px",
            }}
          >
            ← Retour à l'accueil
          </Link>
        </Block>

        <DetailedWeatherApp />

        <Footer />
      </Block>
    </Section>
  );
}
