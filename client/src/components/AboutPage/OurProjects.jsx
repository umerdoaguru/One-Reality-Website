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
              <p>Aura City Located 15 km from Sadar, at Barela road on the national highway NH 12A is One Realty Aura. This 4-acre township with all modern amenities consists of 68 plots, a residential apartment. Its unique location, just on the brink of the highway, view of Maa Sharda Barela Temple easy accessibility and affordable pricing makes it a future township and a place to invest in. Economic but impressive.
  
</p>
             

              <p className ="fw-bold">Total 3 Acres</p>
              <p className ="fw-bold"><span></span>Project Duration 2011 - 2014
</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-5">
         
          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-up">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Nirvana City</h2>
               
              </div>
              <p>Nirvana city is our second project December 2014 consists 6acers with occupancy 136 units planing with Singlex and plots  a spacious living area for independent and free-living, with all the necessary amenities fulfills your needs. Nirvana city assures you of satisfying your dream home in the fashionable way possible.
</p>
             

              <p className ="fw-bold"> Total  5.5 Acres
</p>
              <p className ="fw-bold"><span></span>Project Duration 2015 - 2017

</p>
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
              <p>Nirvana exotica is our 4th project found in December 2015,consists in4 acers 135 units with Singlex and plots one of the most recent projects to be developed by One Realty Developers. It’s a project consist of Designer Luxury Residential Villa Plots with all standard amenities.
</p>
             

              <p className ="fw-bold">Total 4.5 Acres 
</p>
              <p className ="fw-bold"><span></span>Project Duration 2017 - 2021
</p>
            </div>
          </div>
        </div>


        <div className="row align-items-center mt-5">
      


          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-up">
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
                
                <h2>Welcome To Nirvana Homes</h2>
               
              </div>
              <p>Nirvana Homes a Luxury Project at Budget Pricing by One Realty Developers. This 11 Acre Residential Township Consists of 365 units. The whole township is Vastu – Compliance in a Clean & Green Environment of Barela 14 KM. from Sadar. The Roads are Concrete with ample space for Recreation and Sports & Lush- Green Gardens comprising, One Fruit Garden, a Garden with a Jogging Track & Children’s Play Area another with a Shiva Temple for those who have utmost faith in the Supreme and to bring vitality and spiritual energy in the township.
</p>
             

              <p className ="fw-bold">Total 11 Acres</p>
              <p className ="fw-bold"><span></span>Ongoing Project</p>

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