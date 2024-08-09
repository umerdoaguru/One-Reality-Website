import React from "react";
import Heros from "../components/Heros";
import AboutUs from "../images/contact.webp";
import Header from "../components/Header";
import Forms from "../components/contact/Forms";
import Footer from "../components/Footer";

function ContactForm() {
  return (
    <>
    
      <Heros title="Contact Us" backgroundImage= {AboutUs}/>
      <Forms />
     
    </>
  );
}

export default ContactForm;
