import React from "react";
import Heros from "../components/Heros";
import AboutUs from "../images/AboutUs.png";
import Cards from "../components/gallery/Cards";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Category from "../components/gallery/Category";

function Gallery() {
  return (
    <>
     
      <Heros title="Gallery" backgroundImage={AboutUs} />
      <Category />
      <Cards />
    
    </>
  );
}

export default Gallery;
