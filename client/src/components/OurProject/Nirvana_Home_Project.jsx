import React from "react";
import styled from "styled-components";
import img from "../../images/nirvana_home.avif";
import photo1 from "../../images/Nirvana home/Picture1.jpg";
import photo2 from "../../images/Nirvana home/Picture2.jpg";
import photo3 from "../../images/Nirvana home/Picture3.jpg";
import photo4 from "../../images/Nirvana home/Picture4.jpg";
import photo5 from "../../images/Nirvana home/Picture5.jpg";
import photo6 from "../../images/Nirvana home/Picture6.jpg";
import photo7 from "../../images/Nirvana home/Picture7.jpg";

import photo8 from "../../images/photo1.jpg";
import photo9 from "../../images/photo2.jpg";

import photo10 from "../../images/photo4.jpg";
import photo11 from "../../images/photo5.jpg";
import photo12 from "../../images/photo6.jpg";
import photo13 from "../../images/photo7.jpg";
import image1 from "../../images/Nirvana home/image1.jpeg";
import image2 from "../../images/Nirvana home/image2.jpeg";
import image3 from "../../images/Nirvana home/image3.jpeg";
import image4 from "../../images/Nirvana home/image4.jpeg";
import image5 from "../../images/Nirvana home/image5.jpeg";
import image6 from "../../images/Nirvana home/image6.jpeg";
import image7 from "../../images/Nirvana home/image7.jpeg";
import image8 from "../../images/Nirvana home/image8.jpeg";
import image9 from "../../images/Nirvana home/image9.jpeg";
import image10 from "../../images/Nirvana home/image10.jpeg";
import image11 from "../../images/Nirvana home/image11.jpeg";
import image12 from "../../images/Nirvana home/image12.jpeg";
import image13 from "../../images/Nirvana home/image13.jpeg";
import image14 from "../../images/Nirvana home/image14.jpeg";
import image15 from "../../images/Nirvana home/image15.jpeg";
import image16 from "../../images/Nirvana home/image16.jpeg";
import image17 from "../../images/Nirvana home/image17.jpeg";
import image18 from "../../images/Nirvana home/image18.jpeg";
import image19 from "../../images/Nirvana home/image19.jpeg";
import image20 from "../../images/Nirvana home/image20.jpeg";
import image21 from "../../images/Nirvana home/image21.jpeg";

import OurVideo from "../HomePage/OurVideo";
import Forms from "../contact/Forms";
import FormNirvanaHomes from "../contact/FormNirvanaHomes";
import { FaWhatsapp } from "react-icons/fa";

function Nirvana_Home_Project() {
  const images = [
 
    { src: photo2, title: 'Entry Gate' },
    { src: photo3, title: 'Road' },
    { src: photo4, title: 'Road' },
  
    { src: image3, title: 'Car Porch' },
    { src: image4, title: 'Hall Cum Dining' },
    { src: image5, title: 'Granite Marble Upstairs' },
    { src: image6, title: 'Hall Cum Dining' },
    { src: image7, title: 'Kitchen' },
    { src: image9, title: 'BedRoom' },
    { src: image10, title: 'Attached Toilet' },
    { src: image11, title: 'BedRoom' },
    { src: image8, title: 'Kitchen' },
    { src: image12, title: 'Attached Toilet' },

   
    { src: image15, title: 'Open to Sky' },
    { src: image16, title: 'Lounge Area' },
    { src: image17, title: 'BedRoom' },
    { src: image18, title: 'Balcony' },
    { src: image19, title: 'Dry Balcony' },
    { src: image20, title: 'Stairs' },
    { src: image21, title: 'Dry Balcony' },
    { src: photo5, title: 'Road' },
    { src: photo6, title: 'Construction' },
    { src: photo7, title: 'Road' },
    { src: photo8, title: '3 BHK Luxury Duplex' },
    { src: photo9, title: 'Layout Plan' },
    { src: photo10, title: 'Amenities' },
    { src: photo11, title: 'Shiva Temple' },
    { src: photo12, title: 'Garden' },
  ];
  
  return (
    <Wrapper>
      <div className="container">
        <div className="row align-items-center mt-5 g-4 mb-5">
          <div className="col-lg-6 mt-3">
            <div
              className="about-content s-about-content pl-30"
              data-aos="fade-right"
            >
              <div className="about-title second-atitle">
                <h2>Welcome To Nirvana Homes</h2>
              </div>
              <p>
                Nirvana Homes a Luxury Project at Budget Pricing by One Realty
                Developers. This 11 Acre Residential Township Consists of 365
                units. The whole township is Vastu – Compliance in a Clean &
                Green Environment of Barela 14 KM. from Sadar. The Roads are
                Concrete with ample space for Recreation and Sports & Lush-
                Green Gardens comprising, One Fruit Garden, a Garden with a
                Jogging Track & Children’s Play Area another with a Shiva Temple
                for those who have utmost faith in the Supreme and to bring
                vitality and spiritual energy in the township.
              </p>

              <p className="fw-bold">Total 11 Acres</p>
              <p className="fw-bold">
                <span></span>Ongoing Project
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos="fade-left">
              <img src={img} alt="img" />
            </div>
           
          </div>

          <div className="col-lg-12">
            <h2>AMENITIES</h2>
          </div>
          <div className="col-lg-3">
            <h6>Grand Gentry Enterance</h6>
          </div>
          <div className="col-lg-3">
            <h6>Commercial Units/Shops</h6>
          </div>
          <div className="col-lg-3">
            <h6>Water Supply</h6>
          </div>
          <div className="col-lg-3">
            <h6>Kids Play Area</h6>
          </div>

          <div className="col-lg-3">
            <h6>Soalr Lighting</h6>
          </div>
          <div className="col-lg-3">
            <h6>Open Air Gym</h6>
          </div>
          <div className="col-lg-3">
            <h6>24 Hours Water Supply</h6>
          </div>
          <div className="col-lg-3">
            <h6>Jogging Track- Footpath</h6>
          </div>

          <div className="col-lg-12 mt-4">
            <h2>SPECIFICATIONS</h2>
          </div>
          <div className="col-lg-3">
            <h6>R.C.C.. Framed Structure</h6>
          </div>
          <div className="col-lg-3">
            <h6>AAC Blocks Walls</h6>
          </div>
          <div className="col-lg-3">
            <h6>Teak Entry Door</h6>
          </div>
          <div className="col-lg-3">
            <h6>Vitrified Tiled</h6>
          </div>

          <div className="col-lg-3">
            <h6>Modular Kitchen Platform</h6>
          </div>
          <div className="col-lg-3">
            <h6>Branded Bath Fitting </h6>
          </div>
          <div className="col-lg-3">
            <h6>ISI Electrical Goods </h6>
          </div>
          <div className="col-lg-3">
            <h6>Internal Flush Door </h6>
          </div>
          <div className="col-lg-3">
            <h6>Branded Putty And Painting </h6>
          </div>
          <div className="col-lg-3">
            <h6>S.S.. Stair Railing </h6>
          </div>

          <div className="col-lg-3">
            <h6>UPVC / Aluminium Windows</h6>
          </div>
          <div className="col-lg-3">
            <h6>Glass & Stainless Steel Railing At Elevation</h6>
          </div>
          <div className="col-lg-3">
            <h6>Testure At Elevation</h6>
          </div>
          <div className="col-lg-3">
            <h6>Stair Floor of Green Marble</h6>
          </div>
          <div className="col-lg-3 ">
            <h6>Safety Grills</h6>
          </div>

          <OurVideo />
          <div className="container text-center">
            <div className="h4" style={{ color: "#01614e" }}>
              Contact Us{" "}
            </div>
            <div
              className="underline mx-auto"
              style={{
                height: 3,
                width: "3rem",
                backgroundColor: "#34495E",
                marginTop: 20,
                marginBottom: 20,
              }}
            ></div>
            <a
              href="https://wa.me/917880008031?text=Hi!%20I%20came%20across%20the%20Nirvana%20Home%20project%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size="50px" color="#25D366" />
            </a>
          </div>

          {/* <FormNirvanaHomes/> */}
        </div>
        <h2 className="text-center">Actual Images</h2>
        <div
          className="underline mx-auto"
          style={{
            height: 3,
            width: "4rem",
            backgroundColor: "#34495E",
            marginTop: 20,
            marginBottom: 20,
          }}
        ></div>
        <div className="row g-5 mb-5">
        {images.map((image, index) => (
        <div key={index} className="col-lg-4">
          <div className="card">
            <div className="img-container" data-aos="zoom-in">
              <img
                src={image.src}
                className="card-img-top imgset"
                alt={`Card image ${index + 1}`}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{image.title}</h5>
            </div>
          </div>
        </div>
      ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Nirvana_Home_Project;

const Wrapper = styled.div`
  img {
    width: 100%;
  }

  .imgset {
    height: 25rem;
  }

  h2 {
    color: #01614e;
    font-family: "Playfair Display";
  }
  .card-title{
    color: #01614e;
  }
`;
