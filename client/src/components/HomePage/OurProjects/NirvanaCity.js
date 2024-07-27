import React from 'react'
import styled from 'styled-components';
import img from '../../../images/nirvana_city_new.jpg'
function NirvanaCity() {
  return (
    <Wrapper>
    <div className="container">
    <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <div className="s-about-img p-relative"data-aos= "fade-right" >
              <img src= {img} alt="img" />
         
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-left">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Nirvana City</h2>
               
              </div>
              <p>Nirvana city is a spacious living area for independent and free-living, with all the necessary amenities fulfills your needs. Nirvana city assures you of satisfying your dream home in the fashionable way possible.</p>
             

              <p><span>Area</span> 6 Acre</p>
              <p><span></span>Dec 2014 Project</p>
            </div>
          </div>
        </div>
    </div>
    </Wrapper>
  )
}

export default NirvanaCity

const Wrapper  = styled.div`
img{
  width: 100%;
}

`;