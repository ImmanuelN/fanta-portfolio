// src/components/GetInTouchSection.tsx
import React, { useState, useEffect } from "react";
import { Home, Mail, Phone } from "lucide-react";
import { theme } from "../styles/themes";

const GetInTouchSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle resize to update isMobile state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="get-in-touch"
      style={{
        padding: isMobile ? "10% 5%" : "5% 10%", // Reduce horizontal padding on mobile
        background: theme.colors.creamyBeige,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: isMobile ? "auto" : "300px", // Auto height on mobile
        width: "100%", // Ensure full width
        boxSizing: "border-box", // Include padding in width
      }}
    >
      <h2
        style={{
          fontFamily: theme.fonts.primary,
          fontSize: isMobile ? "1.5rem" : "2rem", // Smaller on mobile
          fontWeight: "bold",
          color: theme.colors.darkBrown,
          marginBottom: isMobile ? "20px" : "30px", // Adjust spacing
          textAlign: "center", // Center text on mobile
        }}
      >
        Get In Touch with us...
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: isMobile ? "30px" : "50px", // Reduce gap on mobile
          flexWrap: "wrap", // Allow wrapping
          textAlign: "center",
          width: "100%", // Ensure container fits
          maxWidth: "1200px", // Cap width for larger screens
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: isMobile ? "1 1 100%" : "1 1 auto", // Full width on mobile, auto on desktop
            maxWidth: isMobile ? "100%" : "300px", // Constrain width on desktop
          }}
        >
          <Home size={isMobile ? 20 : 24} color={theme.colors.darkBrown} /> {/* Smaller icon on mobile */}
          <a
            href="https://www.google.com/maps/search/1+Coca-Cola+Plaza+NW+Atlanta,+GA+30313+United+States"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: theme.fonts.primary,
              fontSize: isMobile ? "0.9rem" : "1rem", // Smaller text on mobile
              color: theme.colors.darkBrown,
              marginTop: "10px",
              lineHeight: "1.5",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            1 Coca-Cola Plaza <br />
            NW Atlanta, GA 30313 <br />
            United States
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: isMobile ? "1 1 100%" : "1 1 auto", // Full width on mobile
            maxWidth: isMobile ? "100%" : "300px",
          }}
        >
          <Mail size={isMobile ? 20 : 24} color={theme.colors.darkBrown} />
          <a
            href="mailto:info@coca-colacompany.com"
            style={{
              fontFamily: theme.fonts.primary,
              fontSize: isMobile ? "0.9rem" : "1rem",
              color: theme.colors.darkBrown,
              marginTop: "10px",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            info@coca-colacompany.com
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: isMobile ? "1 1 100%" : "1 1 auto", // Full width on mobile
            maxWidth: isMobile ? "100%" : "300px",
          }}
        >
          <Phone size={isMobile ? 20 : 24} color={theme.colors.darkBrown} />
          <a
            href="tel:+14046762121"
            style={{
              fontFamily: theme.fonts.primary,
              fontSize: isMobile ? "0.9rem" : "1rem",
              color: theme.colors.darkBrown,
              marginTop: "10px",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            +1 404-676-2121
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;