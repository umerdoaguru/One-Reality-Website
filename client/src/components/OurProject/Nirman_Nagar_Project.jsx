import React from 'react'
import styled from 'styled-components'
import img from '../../images/nirman_nagar.jpeg'
import photo1 from '../../images/Nirman nagar/Picture1.jpg'
import photo2 from '../../images/Nirman nagar/Picture2.jpg'
import photo3 from '../../images/Nirman nagar/Picture3.jpg'
import photo4 from '../../images/Nirman nagar/Picture4.jpg'
import photo5 from '../../images/Nirman nagar/Picture5.jpg'
import photo6 from '../../images/Nirman nagar/Picture6.jpg'
import photo7 from '../../images/Nirman nagar/Picture7.jpg'
import photo8 from '../../images/Nirman nagar/Picture8.jpg'
import FormNirmanNagar from '../contact/FormNirmanNagar'
import { FaWhatsapp } from 'react-icons/fa'

function Nirman_Nagar_Project() {
  const images = [
    { src: photo1, title: 'Entry Gate' },
    { src: photo2, title: 'Garden' },
    { src: photo3, title: 'Main Road' },
    { src: photo4, title: 'Construction' },
    { src: photo5, title: 'Construction' },
    { src: photo6, title: 'House View' },
    { src: photo7, title: 'Kid Park' },
    { src: photo8, title: 'Road' },
  ];
  
  return (
   <Wrapper>
   
   <div className="container">
    <div className="row align-items-center mt-5 g-4 mb-5">
   
         
          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-right">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Nirman Nagar</h2>
               
              </div>
              <p>Nirman Nagar Our 4th project with 9 acres of occupancy with 183 units is a stylish home to luxurious and opulent living in duplex, singlex and plots, the interior of the residence is superbly presented providing all the luxury to satisfy ensures to do, the abode is well designed as per the client's requirements and their imagination makes the dream world come true.
</p>
             

              <p className ="fw-bold">Total 9 Acres</p>
              <p className ="fw-bold"><span></span>Project Duration 2017 - 2021
</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-left" >
              <img src= {img} alt="img" />
         
            </div>
          </div>
      

    <div className="col-lg-12">
      <h2>
      AMENITIES</h2>
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
<h6>
Soalr Lighting</h6>
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
      <h2>
      SPECIFICATIONS</h2>
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
<h6>Internal Flush Door  </h6>
    </div>
    <div className="col-lg-3">
<h6>Branded Putty And Painting  </h6>
    </div>
    <div className="col-lg-3">
<h6>S.S.. Stair Railing  </h6>
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

    <div className="container text-center mt-5">
      <div className="h4" style={{color:"#01614e"}}>Contact Us </div>
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
  href="https://wa.me/917880008031?text=Hi!%20I%20came%20across%20the%20Nirman%20Nagar%20project%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaWhatsapp     size="50px" color='#25D366'/>
</a>



    </div>

    
        </div>
        <h2 className='text-center'>Actual Images</h2>  
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
        <div className="row g-5 mb-5" >
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
  )
}

export default Nirman_Nagar_Project
const Wrapper  =  styled.div`
    
img{
    width: 100%;
   
}
.imgset{
    height: 25rem;
}
h2{
    color: #01614e;
    font-family: "Playfair Display";
}
.card-title{
    color: #01614e;
  }
`