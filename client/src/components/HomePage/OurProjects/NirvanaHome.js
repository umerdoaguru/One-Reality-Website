import React from 'react'
import styled from 'styled-components'
import img from '../../../images/nirvana_home.avif'


function NirvanaHome() {
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
                
                <h2>Welcome To Nirvana Home</h2>
               
              </div>
              <p>Nirvana Home a Luxury Project at Budget Pricing By One Realty Developers. This 11 Acre Residential Township Consists of 365 Units. The whole township is Vastu - Compliance in a Clean & Green Enivronment of Barela 14 K.m. from Sadar.</p>
             

              <p><span>Area</span> 11 Acre</p>
              <p><span></span>Completion in Dec, 2024 Project</p>
            </div>
          </div>
        </div>
    </div>

   
   
   </Wrapper>
  )
}

export default NirvanaHome
const Wrapper  = styled.div`
img{
    width: 100%;
}



`