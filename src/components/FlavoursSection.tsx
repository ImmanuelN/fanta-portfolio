// src/components/FlavoursSection.tsx
import React, { useEffect, useRef } from "react";
import { theme } from "../styles/themes"; // Adjust path as needed
import FlavorSlider from "./FlavourSlider"; // Your carousel component
import { motion, useAnimation } from "framer-motion";

const FlavoursSection: React.FC = () => {
  // Array of emojis for bouncing animation
  const emojis = ["🍊", "🍇", "🍍", "🍋", "🍓", "🍒", "🍉", "🍑", "🫐", "🍏"];
  const numberOfEmojis = 20; // Adjust as desired

  // Component for a single bouncing emoji
  const BouncingEmoji = ({ emoji }: { emoji: string }) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const section = document.getElementById("flavours");
      if (!section) return;

      const sectionWidth = section.clientWidth;
      const sectionHeight = section.clientHeight;

      // Initial random position and velocity
      let x = Math.random() * (sectionWidth - 50); // Adjust for emoji width
      let y = Math.random() * (sectionHeight - 50); // Adjust for emoji height
      let vx = (Math.random() - 0.5) * 4; // Random velocity between -2 and 2
      let vy = (Math.random() - 0.5) * 4;

      const animate = () => {
        // Update position based on velocity
        x += vx;
        y += vy;

        // Bounce off left or right borders
        if (x <= 0 || x >= sectionWidth - (ref.current?.offsetWidth || 0)) {
          vx = -vx; // Reverse x velocity
          x = Math.max(0, Math.min(x, sectionWidth - (ref.current?.offsetWidth || 0)));
        }

        // Bounce off top or bottom borders
        if (y <= 0 || y >= sectionHeight - (ref.current?.offsetHeight || 0)) {
          vy = -vy; // Reverse y velocity
          y = Math.max(0, Math.min(y, sectionHeight - (ref.current?.offsetHeight || 0)));
        }

        // Apply new position
        controls.set({ x, y });
        requestAnimationFrame(animate);
      };

      animate();

      return () => controls.stop();
    }, [controls]);

    return (
      <motion.div
        ref={ref}
        style={{
          position: "absolute",
          fontSize: "4rem", // Adjust size as needed
          opacity: 0.3, // Slightly transparent
          pointerEvents: "none", // Prevents interference with interactive elements
        }}
        animate={controls}
      >
        {emoji}
      </motion.div>
    );
  };

  return (
    <section
      id="flavours"
      style={{
        padding: "0 0 5% 0",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh", // Full viewport height
      }}
    >
      {/* Emoji Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Behind main content
          overflow: "hidden", // Prevents emojis from escaping
        }}
      >
        {Array.from({ length: numberOfEmojis }).map((_, index) => {
          const emoji = emojis[Math.floor(Math.random() * emojis.length)];
          return <BouncingEmoji key={index} emoji={emoji} />;
        })}
      </div>

      {/* Main Content Wrapper */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          zIndex: 1, // Above emojis
        }}
      >
        {/* Header with Gradient Text */}
        <h1
          style={{
            fontFamily: theme.fonts.primary,
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "40px",
            backgroundImage: `linear-gradient(90deg, ${theme.colors.fantaOrange1}, ${theme.colors.fantaOrange2})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Explore Our Fantastic Flavours
        </h1>

        {/* Flavor Slider Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "500px", // Adjust height as needed
          }}
        >
          <FlavorSlider /> {/* Your existing carousel component */}
        </div>
      </div>

      {/* View Our Products Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 1, // Above emojis
        }}
      >
        <button
          style={{
            padding: "15px 30px",
            background: theme.colors.fantaOrange1,
            color: theme.colors.white,
            border: "none",
            borderRadius: "25px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = theme.colors.fantaOrange2;
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = theme.colors.fantaOrange1;
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          View Our Products
        </button>
      </div>
    </section>
  );
};

export default FlavoursSection;