import React from "react";
import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

import Footer_comp from "./components/Footer_comp";


import About from "./pages/About";
import Heros from "./components/Heros";

import CompleteProject from "./components/CompleteProject";

import ContactForm from "./pages/ContactForm";
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import Cards from "./components/gallery/Cards";
import Aura_City_Project from "./components/OurProject/Aura_City_Project";
import Nirman_Nagar_Project from "./components/OurProject/Nirman_Nagar_Project";
import Nirvana_City_Project from "./components/OurProject/Nirvana_City_Project";
import Nirvana_Exoticaa_Project from "./components/OurProject/Nirvana_Exoticaa_Project";
import Nirvana_Home_Project from "./components/OurProject/Nirvana_Home_Project";
import Blog1 from "./components/blog/subpageblog/Blog1";
import Blog2 from "./components/blog/subpageblog/Blog2";
import Blog3 from "./components/blog/subpageblog/Blog3";
import Blog4 from "./components/blog/subpageblog/Blog4";
import Blog5 from "./components/blog/subpageblog/Blog5";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AdminDashboard from "./pages/AdminDashboard";
import { useSelector } from "react-redux";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminResetPassword from "./pages/AdminResetPassword";

function App() {
  const user = useSelector(state => state.auth.user);
  return (
    <>
    <div className="" style={{overflow:"hidden"}}>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/adminumerdoaguru" element={<Registration />} />
        <Route path="/useronerealtydata" element={user? <AdminDashboard />:<Login/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>} />
          <Route path="/hero" element={<Heros />} />
         
          <Route path="/completeProject" element={<CompleteProject />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/aura-city" element={<Aura_City_Project />} />
          <Route path="/nirman-nagar" element={<Nirman_Nagar_Project/>} />
          <Route path="/nirvana-city" element={<Nirvana_City_Project/>} />
          <Route path="/nirvana-exoticaa" element={<Nirvana_Exoticaa_Project/>} />
          <Route path="/nirvana-home" element={<Nirvana_Home_Project/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        
          <Route path="/blog1" element={<Blog1/>} />
          <Route path="/blog2" element={<Blog2/>} />
          <Route path="/blog3" element={<Blog3/>} />
          <Route path="/blog4" element={<Blog4/>} />
          <Route path="/blog5" element={<Blog5/>} />
        <Route path="/admin-reset-password" element={<AdminResetPassword />} />

      </Routes>
      <Footer_comp/>
      </div>
    </>
  );
}

export default App;
