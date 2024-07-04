import React from "react";
import AboutUs from "../images/AboutUs.png";
import About1 from "../images/About1.png";

import AboutSection from "../components/AboutSection";
import Heros from "../components/Heros";
import ContactSection from "../components/ContactSection";
import CountSection from "../components/CountSection";
import CompleteProject from "../components/CompleteProject";
import CompleteTitle from "../components/CompleteTitle";
import Space from "../components/Space";
import CompleteProjecttwo from "../components/CompleteProjecttwo";

import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Heros title="About Us" backgroundImage={AboutUs} />
      <Space />
      <AboutSection />
      <CompleteTitle />
      <CompleteProject
        title="Project 1"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio necessitatibus illo ipsam odit temporibus itaque nam officia doloribus, veritatis esse consequuntur nostrum molestias, voluptatum id voluptate similique reprehenderit quo dolores eaque nobis? Magni ad maxime labore unde debitis soluta rerum vero? Inventore quaerat tenetur eaque magnam tempore suscipit, assumenda minus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio necessitatibus illo ipsam odit temporibus itaque nam officia doloribus, veritatis esse consequuntur nostrum molestias, voluptatum id voluptate similique reprehenderit quo dolores eaque nobis? Magni ad maxime labore unde debitis soluta rerum vero? Inventore quaerat tenetur eaque magnam tempore suscipit, assumenda minus!"
        imageSrc={About1}
        imageAlt="Description of the image"
      />
      <Space />
      <CompleteProjecttwo
        title="Project 2"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio necessitatibus illo ipsam odit temporibus itaque nam officia doloribus, veritatis esse consequuntur nostrum molestias, voluptatum id voluptate similique reprehenderit quo dolores eaque nobis? Magni ad maxime labore unde debitis soluta rerum vero? Inventore quaerat tenetur eaque magnam tempore suscipit, assumenda minus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio necessitatibus illo ipsam odit temporibus itaque nam officia doloribus, veritatis esse consequuntur nostrum molestias, voluptatum id voluptate similique reprehenderit quo dolores eaque nobis? Magni ad maxime labore unde debitis soluta rerum vero? Inventore quaerat tenetur eaque magnam tempore suscipit, assumenda minus!"
        imageSrc={About1}
        imageAlt="Description of the image"
      />
      <Space />
      <CompleteProject
        title="Project 3"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio necessitatibus illo ipsam odit temporibus itaque nam officia doloribus, veritatis esse consequuntur nostrum molestias, voluptatum id voluptate similique reprehenderit quo dolores eaque nobis? Magni ad maxime labore unde debitis soluta rerum vero? Inventore quaerat tenetur eaque magnam tempore suscipit, assumenda minus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio necessitatibus illo ipsam odit temporibus itaque nam officia doloribus, veritatis esse consequuntur nostrum molestias, voluptatum id voluptate similique reprehenderit quo dolores eaque nobis? Magni ad maxime labore unde debitis soluta rerum vero? Inventore quaerat tenetur eaque magnam tempore suscipit, assumenda minus!"
        imageSrc={About1}
        imageAlt="Description of the image"
      />

      <ContactSection />
      <CountSection />
      <Footer />
    </>
  );
}

export default About;
