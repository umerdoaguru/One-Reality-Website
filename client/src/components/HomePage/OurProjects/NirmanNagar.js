import React from 'react'
import styled from 'styled-components';
import img from '../../../images/nirman_nagar.jpeg'
function NirmanNagar() {
  return (
      <Wrapper>
    <div className="container">
    <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-right" >
              <img src= {img} alt="img" />
         
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-left">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Nirman Nagar</h2>
               
              </div>
              <p>Nirman Nagar have a stylish home for luxurious and lavish living. the dwelling interior is brilliantly presented which ensures of delivering all luxury for contented living. The residence is well crafted as per the requirements of the client and meets their fantasy dreamland.</p>
             

              <p><span>Area</span> 9 Acre</p>
              <p><span></span>Dec 2017 Project</p>
            </div>
          </div>
        </div>
    </div>
    </Wrapper>
  )
}

export default NirmanNagar
const Wrapper  = styled.div`
img{
  width: 100%;
}

`;