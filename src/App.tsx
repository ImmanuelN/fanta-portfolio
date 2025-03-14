// src/App.tsx
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AnimationSection from "./components/AnimationSection";
import HistorySection from "./components/HistorySection";
import FlavoursSection from "./components/FlavoursSection";
import GetInTouchSection from "./components/GetInTouchSection";
import Footer from "./components/Footer";
// Import images to preload
import MainFantaCan from "./images/Fanta Can.png";
import PurpleCan from "./images/pngegg (4) 1.png";
import YellowCan from "./images/pngegg (5) 1.png";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Array of images to preload
    const imagesToPreload = [MainFantaCan, PurpleCan, YellowCan];
    let loadedImages = 0;

    // Function to handle image preload
    const preloadImages = () => {
      imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages += 1;
          // Check if all images are loaded
          if (loadedImages === imagesToPreload.length) {
            setIsLoading(false);
          }
        };
        img.onerror = () => {
          // Handle error but still proceed after timeout
          console.error(`Failed to load image: ${src}`);
          loadedImages += 1; // Count as "loaded" to avoid infinite loading
          if (loadedImages === imagesToPreload.length) {
            setIsLoading(false);
          }
        };
      });
    };

    // Start preloading
    preloadImages();

    // Fallback: Ensure loader disappears after 3 seconds even if images fail
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {/* Loader Overlay */}
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      {/* Main Content */}
      <Navbar />
      <AnimationSection />
      <HistorySection />
      <FlavoursSection />
      <GetInTouchSection />
      <Footer />
    </div>
  );
};

export default App;