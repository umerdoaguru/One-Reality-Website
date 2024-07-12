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
              <p>Nirvana Exoticaa is one the most recent project to be developed by One Realty Developers. it`s a project consist of Designer Luxury Residential Vill Plots with all standard amentites.</p>
             

              <p><span>Area</span> 4 Acre</p>
              <p><span></span>30 Aug 2015 Project</p>
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