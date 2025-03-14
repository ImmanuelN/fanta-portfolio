// src/components/AnimationSection.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainFantaCan from "../images/Fanta Can.png"; // Orange can
import PurpleCan from "../images/pngegg (4) 1.png"; // Grape can
import YellowCan from "../images/pngegg (5) 1.png"; // Pineapple can
import { theme } from "../styles/themes";

const AnimationSection: React.FC = () => {
  const [flavor, setFlavor] = useState<"orange" | "grape" | "pineapple">(
    "orange"
  );

  // Auto-cycle flavors every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFlavor((prevFlavor) => {
        if (prevFlavor === "orange") return "grape";
        if (prevFlavor === "grape") return "pineapple";
        return "orange";
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Determine can image and text color based on flavor
  const getCanImage = () => {
    switch (flavor) {
      case "grape":
        return PurpleCan;
      case "pineapple":
        return YellowCan;
      case "orange":
      default:
        return MainFantaCan;
    }
  };

  const getTextColor = () => {
    switch (flavor) {
      case "grape":
        return theme.colors.fantaGrape;
      case "pineapple":
        return theme.colors.electricYellow;
      case "orange":
      default:
        return theme.colors.fantaOrange1;
    }
  };

  // Get the full flavor name
  const getFlavorName = () => {
    const flavorNames = {
      orange: "ORANGE",
      grape: "GRAPE",
      pineapple: "PINEAPPLE", // Adjusted spacing for consistency
    };
    return flavorNames[flavor];
  };

  const flavorName = getFlavorName();

  // Animation variants
  const textVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2, // Slight delay to stagger after the can
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const canVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      rotate: -10,
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        duration: 0.5,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      rotate: 10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="home"
      style={{
        height: "1000px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
            style={{
              zIndex: 1000,
            }}
          >
            <motion.img
              src={getCanImage()}
              alt={`Fanta ${flavor} can`}
              style={{
                height: "800px",
              }}
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
              fontSize: "250px",
              fontWeight: "bolder",
              letterSpacing:"30px",
              color: getTextColor(),
              position: "absolute",
              zIndex: 500,
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
