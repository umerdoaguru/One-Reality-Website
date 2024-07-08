import React from "react";
import AboutUs from "../images/AboutUs.png";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Heros from "../components/Heros";
import Blog from "../components/blog/Blog";

function Blogs() {
  return (
    <>
      <Header />
      <Heros title="Neews feeds" backgroundImage={AboutUs} />

      <Blog />

      <Footer />
    </>
  );
}

export default Blogs;
