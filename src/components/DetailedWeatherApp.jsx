"use client";

import React, { useState, useEffect } from "react";

export const DetailedWeatherApp = () => {
  const [weather, setWeather] = useState({
    location: "Paris, France",
    temperature: 22,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    pressure: 1013,
    visibility: 10,
    uvIndex: 6,
    feelsLike: 25,
    icon: "🌤️",
  });

  const [time, setTime] = useState(new Date());
  const [selectedTab, setSelectedTab] = useState("today");

  const forecast = [
    {
      day: "Aujourd'hui",
      temp: 22,
      condition: "Partiellement nuageux",
      icon: "🌤️",
    },
    { day: "Demain", temp: 24, condition: "Ensoleillé", icon: "☀️" },
    { day: "Mercredi", temp: 19, condition: "Pluvieux", icon: "🌧️" },
    { day: "Jeudi", temp: 21, condition: "Nuageux", icon: "☁️" },
    { day: "Vendredi", temp: 23, condition: "Ensoleillé", icon: "☀️" },
    { day: "Samedi", temp: 20, condition: "Orageux", icon: "⛈️" },
    { day: "Dimanche", temp: 18, condition: "Pluvieux", icon: "🌧️" },
  ];

  const hourlyForecast = [
    { time: "12:00", temp: 22, icon: "🌤️" },
    { time: "13:00", temp: 23, icon: "☀️" },
    { time: "14:00", temp: 24, icon: "☀️" },
    { time: "15:00", temp: 25, icon: "☀️" },
    { time: "16:00", temp: 24, icon: "🌤️" },
    { time: "17:00", temp: 22, icon: "🌤️" },
    { time: "18:00", temp: 21, icon: "☁️" },
    { time: "19:00", temp: 20, icon: "☁️" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getUVLevel = (uvIndex) => {
    if (uvIndex <= 2) return { level: "Faible", color: "#22c55e" };
    if (uvIndex <= 5) return { level: "Modéré", color: "#eab308" };
    if (uvIndex <= 7) return { level: "Élevé", color: "#f97316" };
    if (uvIndex <= 10) return { level: "Très élevé", color: "#dc2626" };
    return { level: "Extrême", color: "#7c2d12" };
  };

  const uvLevel = getUVLevel(weather.uvIndex);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      {/* Carte météo principale */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "30px",
          color: "white",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "30px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                margin: "0 0 10px 0",
              }}
            >
              {weather.location}
            </h2>
            <p style={{ fontSize: "1rem", margin: "0", opacity: "0.8" }}>
              {formatDate(time)}
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                margin: "5px 0 0 0",
                opacity: "0.9",
              }}
            >
              {formatTime(time)}
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "5rem", marginBottom: "10px" }}>
              {weather.icon}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "300",
                margin: "0 0 10px 0",
                lineHeight: "1",
              }}
            >
              {weather.temperature}°C
            </h1>
            <p style={{ fontSize: "1.3rem", margin: "0", opacity: "0.9" }}>
              {weather.condition}
            </p>
            <p
              style={{ fontSize: "1rem", margin: "5px 0 0 0", opacity: "0.8" }}
            >
              Ressenti {weather.feelsLike}°C
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  margin: "0 0 5px 0",
                  opacity: "0.7",
                }}
              >
                Humidité
              </p>
              <p style={{ fontSize: "1.4rem", fontWeight: "600", margin: "0" }}>
                {weather.humidity}%
              </p>
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  margin: "0 0 5px 0",
                  opacity: "0.7",
                }}
              >
                Vent
              </p>
              <p style={{ fontSize: "1.4rem", fontWeight: "600", margin: "0" }}>
                {weather.windSpeed} km/h
              </p>
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  margin: "0 0 5px 0",
                  opacity: "0.7",
                }}
              >
                Pression
              </p>
              <p style={{ fontSize: "1.4rem", fontWeight: "600", margin: "0" }}>
                {weather.pressure} hPa
              </p>
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  margin: "0 0 5px 0",
                  opacity: "0.7",
                }}
              >
                Visibilité
              </p>
              <p style={{ fontSize: "1.4rem", fontWeight: "600", margin: "0" }}>
                {weather.visibility} km
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation des onglets */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            background: "white",
            borderRadius: "10px",
            padding: "5px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {["today", "hourly", "weekly"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              style={{
                flex: 1,
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                background:
                  selectedTab === tab
                    ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    : "transparent",
                color: selectedTab === tab ? "white" : "#64748b",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {tab === "today" && "Aujourd'hui"}
              {tab === "hourly" && "Horaire"}
              {tab === "weekly" && "7 jours"}
            </button>
          ))}
        </div>
      </div>

      {/* Contenu des onglets */}
      {selectedTab === "today" && (
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "25px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "20px",
              color: "#1e293b",
            }}
          >
            Détails d'aujourd'hui
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                background: "#f8fafc",
                borderRadius: "10px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🌡️</div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#64748b",
                  margin: "0 0 5px 0",
                }}
              >
                Indice UV
              </p>
              <p
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  margin: "0",
                  color: uvLevel.color,
                }}
              >
                {weather.uvIndex} - {uvLevel.level}
              </p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                background: "#f8fafc",
                borderRadius: "10px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🌅</div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#64748b",
                  margin: "0 0 5px 0",
                }}
              >
                Lever du soleil
              </p>
              <p
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  margin: "0",
                  color: "#1e293b",
                }}
              >
                06:42
              </p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                background: "#f8fafc",
                borderRadius: "10px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🌇</div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#64748b",
                  margin: "0 0 5px 0",
                }}
              >
                Coucher du soleil
              </p>
              <p
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  margin: "0",
                  color: "#1e293b",
                }}
              >
                20:15
              </p>
            </div>
          </div>
        </div>
      )}

      {selectedTab === "hourly" && (
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "25px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "20px",
              color: "#1e293b",
            }}
          >
            Prévisions horaires
          </h3>
          <div
            style={{
              display: "flex",
              gap: "15px",
              overflowX: "auto",
              paddingBottom: "10px",
            }}
          >
            {hourlyForecast.map((hour, index) => (
              <div
                key={index}
                style={{
                  minWidth: "80px",
                  textAlign: "center",
                  padding: "15px 10px",
                  background: "#f8fafc",
                  borderRadius: "10px",
                  border: index === 0 ? "2px solid #667eea" : "none",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#64748b",
                    margin: "0 0 10px 0",
                  }}
                >
                  {hour.time}
                </p>
                <div style={{ fontSize: "1.5rem", margin: "10px 0" }}>
                  {hour.icon}
                </div>
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    margin: "0",
                    color: "#1e293b",
                  }}
                >
                  {hour.temp}°
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab === "weekly" && (
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "25px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "20px",
              color: "#1e293b",
            }}
          >
            Prévisions sur 7 jours
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {forecast.map((day, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "15px 20px",
                  background: index === 0 ? "#f0f9ff" : "#f8fafc",
                  borderRadius: "10px",
                  border: index === 0 ? "2px solid #667eea" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    flex: 1,
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{day.icon}</span>
                  <div>
                    <p
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        margin: "0",
                        color: "#1e293b",
                      }}
                    >
                      {day.day}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#64748b",
                        margin: "0",
                      }}
                    >
                      {day.condition}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#1e293b",
                  }}
                >
                  {day.temp}°C
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
