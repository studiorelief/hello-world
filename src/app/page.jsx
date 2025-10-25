"use client";

import { Section, Block, Link } from "@/devlink/_Builtin";
import { Navbar } from "@/devlink/Navbar";
import { WeatherApp } from "@/components/WeatherApp";
import { Footer } from "@/devlink/Footer";
import navbarStyles from "@/devlink/Navbar.module.css";

export default function Home() {
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
        {/* Add Nav Bar with props */}
        <Navbar
          navbarLinkFeatures="Hello"
          navbarLinkProducts="Webflow"
          navbarLinkResources="Cloud"
          navbarLinkContact=""
        />
        <Block
          tag="div"
          className="hero-split"
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h1
            className="margin-bottom-24px"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              background: "linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Welcome to Webflow Cloud
          </h1>
          <Block tag="p" className="margin-bottom-24px">
            This is a simple test using Basic components with enhanced styling.
          </Block>
          <div>
            <Link
              button={true}
              options={{
                href: "/hello/weather-dashboard",
              }}
              id="button"
              className={navbarStyles.button || ""}
              style={{
                display: "inline-block",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 20px",
                textDecoration: "none",
                borderRadius: "4px",
                background:
                  "linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%)",
                color: "white",
                fontWeight: "600",
              }}
            >
              Hello World
            </Link>
          </div>
        </Block>
        <WeatherApp />
        <Footer />
      </Block>
    </Section>
  );
}
