import React from "react";
import Heros from "../components/Heros";
import AboutUs from "../images/gallery2.webp";
import Cards from "../components/gallery/Cards";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Category from "../components/gallery/Category";
import GalleryType from "../components/gallery/GalleryType";

function Gallery() {
  return (
    <>
     
      <Heros title="Gallery" backgroundImage={AboutUs} />
<GalleryType/>
      {/* <Cards /> */}
    
    </>
  );
}

export default Gallery;
