// src/components/FlavourSlider.tsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { theme } from "../styles/themes";
import React from "react";

interface Flavor {
  id: number;
  color: string;
  canImage: string;
}

interface FlavorSliderProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  flavors: Flavor[];
}

export default function FlavorSlider({ currentIndex, setCurrentIndex, flavors }: FlavorSliderProps) {
  const [direction, setDirection] = React.useState(0);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 === flavors.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 < 0 ? flavors.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0, scale: 0.8 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 1000 : -1000, opacity: 0, scale: 0.8 }),
  };

  const buttonVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2 } },
    hover: { scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)", transition: { duration: 0.2 } },
  };

  return (
    <div
      style={{
        width: "100%",
        padding: isMobile ? "10px" : "2%",
        minHeight: isMobile ? "300px" : "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: isMobile ? "100%" : "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: isMobile ? "-5%" : "-25%",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 1000,
            padding: "10px",
          }}
        >
          <ChevronLeft size={isMobile ? 30 : 40} color={isMobile ? flavors[currentIndex].color : theme.colors.fantaOrange1} />
        </button>

        <div
          style={{
            width: "100%",
            height: isMobile ? "250px" : "400px",
            position: "relative",
            perspective: "1000px",
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 }, scale: { duration: 0.3 } }}
              style={{
                position: "absolute",
                width: isMobile ? "70%" : "100%",
                marginLeft: isMobile ? "15%" : "",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: flavors[currentIndex].color,
                borderRadius: "5%",
                padding: "5%",
                height: isMobile ? "250px" : "400px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <motion.img
                src={flavors[currentIndex].canImage}
                alt={`Flavor ${flavors[currentIndex].id} Can`}
                style={{ width: isMobile ? "50%" : "30%", maxWidth: "150px" }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              />
              <motion.button
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                style={{
                  marginTop: "20px",
                  padding: isMobile ? "8px 16px" : "10px 20px",
                  background: "white",
                  border: "none",
                  borderRadius: "25px",
                  color: flavors[currentIndex].color,
                  fontWeight: "bold",
                  fontSize: isMobile ? "14px" : "16px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                Order Now
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            right: isMobile ? "-15%" : "-25%",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 1000,
            padding: "10px",
          }}
        >
          <ChevronRight size={isMobile ? 30 : 40} color={isMobile ? flavors[currentIndex].color : theme.colors.fantaOrange1} />
        </button>
      </div>
    </div>
  );
}