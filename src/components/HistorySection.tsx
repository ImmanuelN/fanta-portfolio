// src/components/HistorySection.tsx
import React from "react";
import FantaCanSplash from "../images/pngegg (3).png";
import { theme } from "../styles/themes";

const HistorySection: React.FC = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section
      id="history"
      style={{
        background: theme.colors.fantaOrange2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: isMobile ? "auto" : "850px",
        padding: isMobile ? "20px 5%" : "0 10%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1200px",
          width: "100%",
          gap: isMobile ? "20px" : "40px",
        }}
      >
        <div style={{ flex: "1", maxWidth: isMobile ? "80%" : "50%" }}>
          <img src={FantaCanSplash} alt="Fanta Can Splash" style={{ width: "100%", height: "auto" }} />
        </div>
        <div style={{ flex: "1", color: theme.colors.white, textAlign: isMobile ? "center" : "left", marginTop: isMobile ? "-80px" : "",}}>
          <h1 style={{ fontSize: isMobile ? "2rem" : "3rem", fontWeight: "bolder", marginBottom: "20px" }}>
            Our History
          </h1>
          <p style={{ fontSize: isMobile ? "1rem" : "1.5rem", fontWeight: "bolder", marginBottom: "15px" }}>
            Fanta, originally created in Nazi Germany during World War II due to supply shortages, was born out of necessity. Max Keith, the head of Coca-Cola's German operations, developed the drink using local ingredients like fruit and whey.
          </p>
          <p style={{ fontSize: isMobile ? "1rem" : "1.5rem", fontWeight: "bolder" }}>
            Named after the German word "Fantasie," meaning imagination, Fanta became a global success after the war, with Coca-Cola taking control of its distribution. Today, Fanta is known for its vibrant flavors and playful branding, making it one of the most popular sodas worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;