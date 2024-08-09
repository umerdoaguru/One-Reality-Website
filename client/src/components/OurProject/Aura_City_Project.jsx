import React from 'react'
import styled from 'styled-components'
// import img from '../../../images/aura_city.avif'
import img from '../../images/aura_city.avif'
import photo1 from '../../images/Aura City/Picture1.jpg'
import photo2 from '../../images/Aura City/Picture2.jpg'
import photo3 from '../../images/Aura City/Picture3.jpg'
import photo4 from '../../images/Aura City/Picture4.jpg'
import photo5 from '../../images/Aura City/Picture5.jpg'
import FormAuraCity from '../contact/FormAuraCity'
import { FaWhatsapp } from 'react-icons/fa'


function Aura_City_Project() {
  const images = [
    { src: photo1, title: 'House Side View' },
    { src: photo2, title: 'Main Gate' },
    { src: photo3, title: 'House Front View' },
    { src: photo4, title: 'Temple' },
    { src: photo5, title: 'Construction' },
  ];
  
  return (
    <Wrapper>
    <div className="container">
    <div className="row align-items-center mt-5 g-4 mb-5">
    <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-right">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Our Aura City</h2>
               
              </div>
              <p>Aura City Located 15 km from Sadar, at Barela road on the national highway NH 12A is One Realty Aura. This 4-acre township with all modern amenities consists of 68 plots, a residential apartment. Its unique location, just on the brink of the highway, view of Maa Sharda Barela Temple easy accessibility and affordable pricing makes it a future township and a place to invest in. Economic but impressive.
  
</p>
             

              <p className ="fw-bold">Total 3 Acres</p>
               <p className="fw-bold"><span></span>Project Duration 2011 - 2014
</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-left">
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
  href="https://wa.me/917880008031?text=Hi!%20I%20came%20across%20the%20Aura%20City%20project%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?" 
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

export default Aura_City_Project

const Wrapper  = styled.div`
    img{
  width: 100%;
 
}
.imgset{
    height: 25rem;
    
}

h6{
    /* color: #01614e; */
    
}
h2{
    color: #01614e;
    font-family: "Playfair Display";
}
.card-title{
    color: #01614e;
  }


`