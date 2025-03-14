// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { theme } from "../styles/themes";
import CokeLogo from "../images/images.png";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true); // Tracks if Navbar is visible
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks last scroll position
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Tracks burger menu state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Tracks screen width

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px threshold
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, [lastScrollY]);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function
  const scrollToSection = (event: React.MouseEvent, targetId: string) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <nav
      style={{
        backgroundColor: theme.colors.white,
        color: theme.colors.darkBrown,
        fontFamily: theme.fonts.primary,
        padding: theme.spacing.medium,
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
          height: "80%",
          width: "auto",
          paddingLeft: "10%",
        }}
      />

      {/* Desktop Links - Visible on larger screens */}
      <div
        style={{
          display: isMobile ? "none" : "flex", // Hide on mobile, show on desktop
          gap: "30px",
          paddingRight: "10%",
        }}
      >
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          style={{
            color: theme.colors.darkBrown,
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Home
        </a>
        <a
          href="#history"
          onClick={(e) => scrollToSection(e, "history")}
          style={{
            color: theme.colors.darkBrown,
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          History
        </a>
        <a
          href="#flavours"
          onClick={(e) => scrollToSection(e, "flavours")}
          style={{
            color: theme.colors.darkBrown,
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Flavours
        </a>
        <a
          href="#get-in-touch"
          onClick={(e) => scrollToSection(e, "get-in-touch")}
          style={{
            color: theme.colors.darkBrown,
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Contact
        </a>
      </div>

      {/* Burger Menu Icon - Visible on small screens */}
      <div
        style={{
          display: isMobile ? "block" : "none", // Show only on mobile
          position: "absolute",
          right: "10%",
          cursor: "pointer",
          fontSize: "1.5rem",
          padding: "10px",
        }}
        onClick={toggleMenu}
      >
        <div
          style={{
            width: "25px",
            height: "3px",
            backgroundColor: theme.colors.darkBrown,
            position: "relative",
            transition: "all 0.3s ease",
          }}
        />
        <div
          style={{
            width: "25px",
            height: "3px",
            backgroundColor: theme.colors.darkBrown,
            position: "relative",
            top: "-8px",
            transition: "all 0.3s ease",
          }}
        />
        <div
          style={{
            width: "25px",
            height: "3px",
            backgroundColor: theme.colors.darkBrown,
            position: "relative",
            top: "-15px",
            transition: "all 0.3s ease",
          }}
        />
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          display: isMenuOpen && isMobile ? "flex" : "none", // Show only when menu is open and on mobile
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
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          style={{
            color: theme.colors.darkBrown,
            textDecoration: "none",
            fontSize: "1.2rem",
            margin: "10px 0",
          }}
        >
          Home
        </a>
        <a
          href="#history"
          onClick={(e) => scrollToSection(e, "history")}
          style={{
            color: theme.colors.darkBrown,
            textDecoration: "none",
            fontSize: "1.2rem",
            margin: "10px 0",
          }}
        >
          History
        </a>
        <a
          href="#flavours"
          onClick={(e) => scrollToSection(e, "flavours")}
          style={{
            color: theme.colors.darkBrown,
            textDecoration: "none",
            fontSize: "1.2rem",
            margin: "10px 0",
          }}
        >
          Flavours
        </a>
        <a
          href="#get-in-touch"
          onClick={(e) => scrollToSection(e, "get-in-touch")}
          style={{
            color: theme.colors.darkBrown,
            textDecoration: "none",
            fontSize: "1.2rem",
            margin: "10px 0",
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;