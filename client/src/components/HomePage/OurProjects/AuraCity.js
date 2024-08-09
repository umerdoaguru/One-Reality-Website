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
              <p>Aura City Located 15 km from Sadar, at Barela road on the national highway NH 12A is One Realty Aura. This 4-acre township with all modern amenities consists of 68 plots, a residential apartment. Its unique location, just on the brink of the highway, view of Maa Sharda Barela Temple easy accessibility and affordable pricing makes it a future township and a place to invest in. Economic but impressive.
  
</p>
             

              <p className ="fw-bold">Total 3 Acres</p>
              <p className ="fw-bold"><span></span>Project Duration 2011 - 2014
</p>
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