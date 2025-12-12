import React, { useEffect } from 'react';
import { initGA } from './utils/analytics';
import { usePageTracking } from './hooks/usePageTracking';

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import AnimatedBackground from "./AnimatedBackground";

function App() {

 // Initialize GA once when app loads
  useEffect(() => {
    initGA();
  }, []);

  // Track page views (if using react-router)
  usePageTracking();

  return (
    <>
       <AnimatedBackground />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}

export default App;
