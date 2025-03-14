// src/components/GetInTouchSection.tsx
import React from "react";
import { Home, Mail, Phone } from "lucide-react"; // Import Lucide icons
import { theme } from "../styles/themes"; // Keeping as per your request

const GetInTouchSection: React.FC = () => {
  return (
    <section
      id="get-in-touch"
      style={{
        padding: "5% 10%", // Adds breathing room
        background: theme.colors.creamyBeige, // Using creamyBeige as set previously
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "300px", // Ensures enough space
      }}
    >
      <h2
        style={{
          fontFamily: theme.fonts.primary,
          fontSize: "2rem", // 32px
          fontWeight: "bold",
          color: theme.colors.darkBrown, // Matches your palette
          marginBottom: "30px",
        }}
      >
        Get In Touch with us...
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px", // Space between the three items
          flexWrap: "wrap", // Responsive for smaller screens
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Home size={24} color={theme.colors.darkBrown} />
          <a
            href="https://www.google.com/maps/search/1+Coca-Cola+Plaza+NW+Atlanta,+GA+30313+United+States"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: theme.fonts.primary,
              fontSize: "1rem", // 16px
              color: theme.colors.darkBrown,
              marginTop: "10px",
              lineHeight: "1.5",
              textDecoration: "none", // Remove underline
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
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
          }}
        >
          <Mail size={24} color={theme.colors.darkBrown} />
          <a
            href="mailto:info@coca-colacompany.com"
            style={{
              fontFamily: theme.fonts.primary,
              fontSize: "1rem",
              color: theme.colors.darkBrown,
              marginTop: "10px",
              textDecoration: "none", // Remove underline
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            info@coca-colacompany.com
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Phone size={24} color={theme.colors.darkBrown} />
          <a
            href="tel:+14046762121"
            style={{
              fontFamily: theme.fonts.primary,
              fontSize: "1rem",
              color: theme.colors.darkBrown,
              marginTop: "10px",
              textDecoration: "none", // Remove underline
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            +1 404-676-2121
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;