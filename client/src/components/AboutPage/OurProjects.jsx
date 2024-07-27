import React from 'react'
import styled from 'styled-components';

import img from '../../images/aura_city.avif'
import img1 from '../../images/nirvana_city_new.jpg'
import img2 from '../../images/nirvana_exoticaaa.jpg'
import img3 from '../../images/nirman_nagar.jpeg'
import img4 from '../../images/nirvana_home.avif'





function OurProjects() {
  return (
  <Wrapper>
    <div className="container" style={{marginTop:"4rem"}}>
    <h2 className="text-center">Our Projects</h2>
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

<div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-up">
              <img src= {img} alt="img" />
         
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-down">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Our Aura City</h2>
               
              </div>
              <p>Aura City is Located 15 km from Sadar, at Barela road on the national highway NH 12A is One Realty Aura. This 4-acre township with all modern amenities consists of 68 plots, a residential apartment. its unique location, just on the brink of the highway , view of Maa Sharda Barela Temple easy accessibility and affordable pricing makes it a future township and a place to invest in.</p>
             

              <p><span>Area</span> 4 Acre</p>
              <p><span></span>Dec 2011 Project</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-5">
         
          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-up">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Nirvana City</h2>
               
              </div>
              <p>Nirvana city is a spacious living area for independent and free-living, with all the necessary amenities fulfills your needs. Nirvana city assures you of satisfying your dream home in the fashionable way possible.</p>
             

              <p><span>Area</span> 6 Acre</p>
              <p><span></span>Dec 2014 Project</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="s-about-img p-relative"data-aos= "fade-down" >
              <img src= {img1} alt="img" />
         
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-up">
              <img src= {img2} alt="img" />
         
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-down">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Nirvana Exoticaa</h2>
               
              </div>
              <p>Nirvana Exoticaa is one the most recent project to be developed by One Realty Developers. it`s a project consist of Designer Luxury Residential Vill Plots with all standard amentites.</p>
             

              <p><span>Area</span> 4 Acre</p>
              <p><span></span>30 Aug 2015 Project</p>
            </div>
          </div>
        </div>


        <div className="row align-items-center mt-5">
      


          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-up">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Nirman Nagar</h2>
               
              </div>
              <p>Nirman Nagar have a stylish home for luxurious and lavish living. the dwelling interior is brilliantly presented which ensures of delivering all luxury for contented living. The residence is well crafted as per the requirements of the client and meets their fantasy dreamland.</p>
             

              <p><span>Area</span> 9 Acre</p>
              <p><span></span>Dec 2017 Project</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-down" >
              <img src= {img3} alt="img" />
         
            </div>
          </div>


        </div>

        <div className="container">
    <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-up">
              <img src= {img4} alt="img" />
         
            </div>
          </div>
          <div className="col-lg-6 mt-3">
          <div className="about-content s-about-content pl-30" data-aos= "fade-down">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Nirvana Home</h2>
               
              </div>
              <p>Nirvana Home a Luxury Project at Budget Pricing By One Realty Developers. This 11 Acre Residential Township Consists of 365 Units. The whole township is Vastu - Compliance in a Clean & Green Enivronment of Barela 14 K.m. from Sadar.</p>
             

              <p><span>Area</span> 11 Acre</p>
              <p><span></span>Completion in Dec, 2024 Project</p>
            </div>
          </div>
        </div>
    </div>



    </div>

  
  </Wrapper>
  )
}

export default OurProjects;
const Wrapper = styled.div`
img{
  width: 100%;
}
h2{
    /* color: #006c28; */
    color: #01614e;
    /* color: #d29b33; */
    font-family: "Playfair Display";  
  }
`