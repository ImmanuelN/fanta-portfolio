// src/components/Footer.tsx
import React from "react";
import { theme } from "../styles/themes";
import CokeLogo from "../images/images 1.png";

const Footer: React.FC = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        background: theme.colors.black,
        color: theme.colors.white,
        padding: "40px 10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: theme.fonts.primary,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <img
          src={CokeLogo}
          alt="Coca-Cola Logo"
          style={{
            width: "150px",
            height: "auto",
            marginBottom: "20px",
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            style={{
              color: theme.colors.white,
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Home
          </a>
          <a
            href="#history"
            onClick={(e) => scrollToSection(e, "history")}
            style={{
              color: theme.colors.white,
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            History
          </a>
          <a
            href="#flavours"
            onClick={(e) => scrollToSection(e, "flavours")}
            style={{
              color: theme.colors.white,
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Flavours
          </a>
          <a
            href="#get-in-touch"
            onClick={(e) => scrollToSection(e, "get-in-touch")}
            style={{
              color: theme.colors.white,
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Contact
          </a>
        </div>
      </div>
      <p
        style={{
          fontSize: "0.9rem",
          color: theme.colors.creamyBeige,
          marginTop: "20px",
        }}
      >
        © 2025 Crash0utTech
      </p>
    </footer>
  );
};

export default Footer;