import React from 'react'
import styled from 'styled-components';
import img from '../../../images/nirvana_exoticaaa.jpg'
function NirvanaExoticaa() {
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
    </div>
    </Wrapper>
  )
}

export default NirvanaExoticaa

const Wrapper  = styled.div`
img{
  width: 100%;
}

`;