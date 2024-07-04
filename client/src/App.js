import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutSection from "./components/AboutSection";
import About from "./pages/About";
import Heros from "./components/Heros";
import ContactSection from "./components/ContactSection";
import CountSection from "./components/CountSection";
import CompleteProject from "./components/CompleteProject";

import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/hero" element={<Heros />} />
          <Route path="/aboutSection" element={<AboutSection />} />
          <Route path="/contactSection" element={<ContactSection />} />
          <Route path="/countSection" element={<CountSection />} />
          <Route path="/completeProject" element={<CompleteProject />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
