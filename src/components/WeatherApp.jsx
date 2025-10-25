"use client";

import React, { useState, useEffect } from "react";

export const WeatherApp = () => {
  const [weather, setWeather] = useState({
    location: "Paris, France",
    temperature: 22,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    icon: "🌤️",
  });

  const [time, setTime] = useState(new Date());

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

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "20px",
        padding: "30px",
        margin: "20px 0",
        color: "white",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              margin: "0 0 5px 0",
              opacity: "0.9",
            }}
          >
            {weather.location}
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              margin: "0",
              opacity: "0.7",
            }}
          >
            {formatDate(time)}
          </p>
        </div>
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "500",
            opacity: "0.8",
          }}
        >
          {formatTime(time)}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "4rem", marginRight: "20px" }}>
            {weather.icon}
          </span>
          <div>
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "300",
                margin: "0",
                lineHeight: "1",
              }}
            >
              {weather.temperature}°C
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                margin: "5px 0 0 0",
                opacity: "0.8",
              }}
            >
              {weather.condition}
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "15px",
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
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              margin: "0",
            }}
          >
            {weather.humidity}%
          </p>
        </div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "15px",
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
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              margin: "0",
            }}
          >
            {weather.windSpeed} km/h
          </p>
        </div>
      </div>
    </div>
  );
};
