import React from "react";
import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

import Footer_comp from "./components/Footer_comp";

import AboutSection from "./components/AboutSection";
import About from "./pages/About";
import Heros from "./components/Heros";
import ContactSection from "./components/ContactSection";
import CountSection from "./components/CountSection";
import CompleteProject from "./components/CompleteProject";

import ContactForm from "./pages/ContactForm";
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import Cards from "./components/gallery/Cards";

function App() {
  return (
    <>
    <div className="" style={{overflowY:"hidden"}}>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
          <Route path="/hero" element={<Heros />} />
          <Route path="/aboutSection" element={<AboutSection />} />
          <Route path="/contactSection" element={<ContactSection />} />
          <Route path="/countSection" element={<CountSection />} />
          <Route path="/completeProject" element={<CompleteProject />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cards" element={<Cards />} />
      </Routes>
      <Footer_comp/>
      </div>
    </>
  );
}

export default App;
