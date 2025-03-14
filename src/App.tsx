// src/App.tsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AnimationSection from './components/AnimationSection';
import HistorySection from './components/HistorySection';
import FlavoursSection from './components/FlavoursSection';
import GetInTouchSection from './components/GetInTouchSection';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="app">
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