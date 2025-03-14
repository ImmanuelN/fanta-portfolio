// src/components/FlavoursSection.tsx
import React, { useEffect, useRef } from "react";
import { theme } from "../styles/themes";
import FlavorSlider from "./FlavourSlider";
import { motion, useAnimation } from "framer-motion";
// Import images
import OrangeCan from "../images/pngegg.png";
import PurpleCan from "../images/pngegg (4) 1.png";
import YellowCan from "../images/pngegg (5) 1.png";

const FlavoursSection: React.FC = () => {
  const emojis = ["🍊", "🍇", "🍍", "🍋", "🍓", "🍒", "🍉", "🍑", "🫐", "🍏"];
  const numberOfEmojis = 20;
  const isMobile = window.innerWidth <= 768;

  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Use imported image variables
  const flavors = [
    { id: 1, color: theme.colors.fantaOrange1, canImage: OrangeCan },
    { id: 2, color: theme.colors.fantaGrape, canImage: PurpleCan },
    { id: 3, color: theme.colors.electricYellow, canImage: YellowCan },
  ];

  const currentColor = flavors[currentIndex].color;

  const BouncingEmoji = ({ emoji }: { emoji: string }) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const section = document.getElementById("flavours");
      if (!section) return;

      const sectionWidth = section.clientWidth;
      const sectionHeight = section.clientHeight;

      let x = Math.random() * (sectionWidth - 50);
      let y = Math.random() * (sectionHeight - 50);
      let vx = (Math.random() - 0.5) * 4;
      let vy = (Math.random() - 0.5) * 4;

      const animate = () => {
        x += vx;
        y += vy;

        if (x <= 0 || x >= sectionWidth - (ref.current?.offsetWidth || 0)) {
          vx = -vx;
          x = Math.max(0, Math.min(x, sectionWidth - (ref.current?.offsetWidth || 0)));
        }
        if (y <= 0 || y >= sectionHeight - (ref.current?.offsetHeight || 0)) {
          vy = -vy;
          y = Math.max(0, Math.min(y, sectionHeight - (ref.current?.offsetHeight || 0)));
        }

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
          fontSize: "4rem",
          opacity: 0.3,
          pointerEvents: "none",
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
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        {Array.from({ length: numberOfEmojis }).map((_, index) => {
          const emoji = emojis[Math.floor(Math.random() * emojis.length)];
          return <BouncingEmoji key={index} emoji={emoji} />;
        })}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontFamily: theme.fonts.primary,
            fontSize: isMobile ? "1.5rem" : "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: isMobile ? "-40px" : "40px",
            backgroundImage: `linear-gradient(90deg, ${currentColor}, ${theme.colors.fantaOrange2})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Explore Our Fantastic Flavours
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10%",
            width: "100%",
            height: "500px",
          }}
        >
          <FlavorSlider
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            flavors={flavors}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 1,
          marginBottom: isMobile ? "50%" : "40px",
        }}
      >
        <button
          style={{
            padding: "15px 30px",
            background: currentColor,
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
            e.currentTarget.style.background = currentColor;
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