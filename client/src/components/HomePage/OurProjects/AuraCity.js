import React from 'react'
import img from '../../../images/aura_city.avif'
import styled from 'styled-components'
import AboutSection from './../AboutSection';
function AuraCity() {
  return (
  
    
    <Wrapper>
    <div className="container">
    <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-right">
              <img src= {img} alt="img" />
         
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-left">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Our Aura City</h2>
               
              </div>
              <p>Aura City is Located 15 km from Sadar, at Barela road on the national highway NH 12A is One Realty Aura. This 4-acre township with all modern amenities consists of 68 plots, a residential apartment. its unique location, just on the brink of the highway , view of Maa Sharda Barela Temple easy accessibility and affordable pricing makes it a future township and a place to invest in.</p>
             

              <p><span>Area</span> 4 Acre</p>
              <p><span></span>Dec 2011 Project</p>
            </div>
          </div>
        </div>
    </div>
    </Wrapper>
  )
}

export default AuraCity

const Wrapper  = styled.div`
img{
  width: 100%;
}

`;