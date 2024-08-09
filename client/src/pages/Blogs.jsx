import React from "react";
import AboutUs from "../images/blogs.webp";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Heros from "../components/Heros";
import Blog from "../components/blog/Blog";

function Blogs() {
  return (
    <>
  
      <Heros title="Blogs" backgroundImage={AboutUs} />

      <Blog />

     
    </>
  );
}

export default Blogs;
