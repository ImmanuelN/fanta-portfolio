import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OrangeCan from "../images/pngegg.png";
import PurpleCan from "../images/pngegg (4) 1.png";
import YellowCan from "../images/pngegg (5) 1.png";
import { theme } from "../styles/themes";

const flavors = [
  { id: 1, color: theme.colors.fantaOrange1, canImage: OrangeCan },
  { id: 2, color: theme.colors.fantaGrape, canImage: PurpleCan },
  { id: 3, color: theme.colors.electricYellow, canImage: YellowCan },
];

export default function FlavorSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Add this useEffect to enable auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === flavors.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? flavors.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const buttonVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2 } },
    hover: {
      scale: 1.05,
      boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div
      className="container"
      style={{
        width: "100%",
        padding: "2%",
        minHeight: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="slider-wrapper"
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: "-25%",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 1000,
            padding: "10px",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <ChevronLeft size={40} color={theme.colors.fantaOrange1} />
        </button>

        {/* Slider Content */}
        <div
          className="card-list"
          style={{
            width: "100%",
            right: "5%",
            height: "400px",
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
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 },
              }}
              className="card-item"
              style={{
                position: "absolute",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: flavors[currentIndex].color,
                borderRadius: "5%",
                padding: "5%",
                height: "400px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <motion.img
                src={flavors[currentIndex].canImage}
                alt={`Flavor ${flavors[currentIndex].id} Can`}
                style={{ width: "30%" }}
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
                  padding: "10px 20px",
                  background: "white",
                  border: "none",
                  borderRadius: "25px",
                  color: flavors[currentIndex].color,
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
                onClick={() => console.log(`Ordering flavor ${flavors[currentIndex].id}`)}
              >
                Order Now
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            right: "-25%",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 1000,
            padding: "10px",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <ChevronRight size={40} color={theme.colors.fantaOrange1} />
        </button>
      </div>
    </div>
  );
}