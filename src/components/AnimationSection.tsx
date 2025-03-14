// src/components/AnimationSection.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainFantaCan from "../images/Fanta Can.png";
import PurpleCan from "../images/pngegg (4) 1.png";
import YellowCan from "../images/pngegg (5) 1.png";
import { theme } from "../styles/themes";

const AnimationSection: React.FC = () => {
  const [flavor, setFlavor] = useState<"orange" | "grape" | "pineapple">("orange");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlavor((prev) => (prev === "orange" ? "grape" : prev === "grape" ? "pineapple" : "orange"));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCanImage = () => {
    return flavor === "grape" ? PurpleCan : flavor === "pineapple" ? YellowCan : MainFantaCan;
  };

  const getTextColor = () => {
    return flavor === "grape" ? theme.colors.fantaGrape : flavor === "pineapple" ? theme.colors.electricYellow : theme.colors.fantaOrange1;
  };

  const flavorName = flavor.toUpperCase();

  const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 } },
    exit: { y: -50, opacity: 0, transition: { duration: 0.3 } },
  };

  const canVariants = {
    initial: { scale: 0.8, opacity: 0, rotate: -10 },
    animate: { scale: 1, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 150, damping: 15, duration: 0.5 } },
    exit: { scale: 0.8, opacity: 0, rotate: 10, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="home"
      style={{
        height: isMobile ? "100px" : "1000px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "0px 0" : "0",
        width:"100%",
        maxWidth:"100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
          padding: isMobile ? "0 10px" : "0",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={flavor}
            variants={canVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            id="middleSection"
            style={{ zIndex: 1000 }}
          >
            <motion.img
              src={getCanImage()}
              alt={`Fanta ${flavor} can`}
              style={{ height: isMobile ? "300px" : "800px", width: "auto" }}
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            key={`${flavor}-right`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            id="rightSection"
            style={{
              fontSize: isMobile ? "80px" : "250px",
              fontWeight: "bolder",
              letterSpacing: isMobile ? "0px" : "30px",
              color: getTextColor(),
              position: isMobile ? "relative" : "absolute",
              zIndex: 500,
              marginTop: isMobile ? "-190px" : "0",
            }}
          >
            {flavorName}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AnimationSection;