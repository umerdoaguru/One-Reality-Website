import React from "react";
import Heros from "../components/Heros";
import AboutUs from "../images/AboutUs.png";
import Header from "../components/Header";
import Forms from "../components/contact/Forms";
import Footer from "../components/Footer";

function ContactForm() {
  return (
    <>
      <Header />
      <Heros title="Contact Us" backgroundImage={AboutUs} />
      <Forms />
      <Footer />
    </>
  );
}

export default ContactForm;