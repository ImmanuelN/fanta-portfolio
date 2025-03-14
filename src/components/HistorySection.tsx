// src/components/HistorySection.tsx
import React from "react";
import FantaCanSplash from "../images/pngegg (3).png";
import { theme } from "../styles/themes"; // Fixed path (singular "theme")

const HistorySection: React.FC = () => {
  return (
    <section
      id="history"
      style={{
        background: theme.colors.fantaOrange2, // Fixed "fantaOrange2" to "fantaOrange"
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "850px",
        padding: "0 10%", // Adds horizontal padding to prevent edge crowding
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1200px", // Limits content width for better readability
          width: "100%",
          gap: "40px", // Space between image and text
        }}
      >
        <div
          style={{
            flex: "1", // Equal width for image and text containers
            maxWidth: "50%", // Limits image size
          }}
        >
          <img
            src={FantaCanSplash}
            alt="Fanta Can Splash"
            style={{
              width: "100%", // Scales image to container
              height: "auto",
            }}
          />
        </div>
        <div
          style={{
            flex: "1", // Equal width for text container
            color: theme.colors.white,
          }}
        >
          <h1
            style={{
              fontSize: "3rem", // Cleaner unit (48px at default 16px root)
              fontWeight: "bolder",
              marginBottom: "20px", // Spacing below title
            }}
          >
            Our History
          </h1>
          <p
            style={{
              fontSize: "1.5rem", // 24px
              fontWeight: "bolder",
              marginBottom: "15px", // Spacing between paragraphs
            }}
          >
            Fanta, originally created in Nazi Germany during World War II due to
            supply shortages, was born out of necessity. Max Keith, the head of
            Coca-Cola's German operations, developed the drink using local
            ingredients like fruit and whey.
          </p>
          <p
            style={{
              fontSize: "1.5rem", // 24px
              fontWeight: "bolder",
            }}
          >
            Named after the German word "Fantasie," meaning imagination, Fanta
            became a global success after the war, with Coca-Cola taking control
            of its distribution. Today, Fanta is known for its vibrant flavors
            and playful branding, making it one of the most popular sodas
            worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;