// src/App.tsx
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AnimationSection from "./components/AnimationSection";
import HistorySection from "./components/HistorySection";
import FlavoursSection from "./components/FlavoursSection";
import GetInTouchSection from "./components/GetInTouchSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a 5-second loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 5 seconds

    // Cleanup timer on component unmount
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