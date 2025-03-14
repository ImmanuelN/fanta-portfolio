// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { theme } from "../styles/themes";
import CokeLogo from "../images/images.png";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) setIsVisible(false);
      else if (currentScrollY < lastScrollY) setIsVisible(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (event: React.MouseEvent, targetId: string) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      style={{
        backgroundColor: theme.colors.white,
        color: theme.colors.darkBrown,
        fontFamily: theme.fonts.primary,
        padding: isMobile ? "10px 5%" : theme.spacing.medium,
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: isVisible ? "0" : "-100px",
        width: "100%",
        transition: "top 0.3s ease-in-out",
        zIndex: 1001,
      }}
    >
      <img
        src={CokeLogo}
        alt="Coca-Cola logo"
        style={{
          height: isMobile ? "60%" : "80%",
          width: "auto",
          paddingLeft: isMobile ? "0" : "10%",
        }}
      />

      <div
        style={{
          display: isMobile ? "none" : "flex",
          gap: isMobile ? "15px" : "30px",
          paddingRight: isMobile ? "50%" : "10%",
        }}
      >
        {["Home", "History", "Flavours", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => scrollToSection(e, item.toLowerCase())}
            style={{
              color: theme.colors.darkBrown,
              textDecoration: "none",
              fontSize: isMobile ? "0.9rem" : "1rem",
              fontWeight: "bold",
            }}
          >
            {item}
          </a>
        ))}
      </div>

      <div
        style={{
          display: isMobile ? "block" : "none",
          position: "absolute",
          right: "10%",
          cursor: "pointer",
          padding: "10px",
        }}
        onClick={toggleMenu}
      >
        <div
          style={{
            width: "25px",
            height: "3px",
            backgroundColor: theme.colors.darkBrown,
            transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            transition: "all 0.3s ease",
          }}
        />
        <div
          style={{
            width: "25px",
            height: "3px",
            backgroundColor: theme.colors.darkBrown,
            margin: "5px 0",
            opacity: isMenuOpen ? 0 : 1,
            transition: "all 0.3s ease",
          }}
        />
        <div
          style={{
            width: "25px",
            height: "3px",
            backgroundColor: theme.colors.darkBrown,
            transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            transition: "all 0.3s ease",
          }}
        />
      </div>

      <div
        style={{
          display: isMenuOpen && isMobile ? "flex" : "none",
          flexDirection: "column",
          position: "absolute",
          top: "48px",
          left: 0,
          width: "100%",
          backgroundColor: theme.colors.white,
          padding: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        {["Home", "History", "Flavours", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => scrollToSection(e, item.toLowerCase())}
            style={{
              color: theme.colors.darkBrown,
              textDecoration: "none",
              fontSize: "1.2rem",
              margin: "10px 0",
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;