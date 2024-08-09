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
              <p>Nirman Nagar Our 4th project with 9 acres of occupancy with 183 units is a stylish home to luxurious and opulent living in duplex, singlex and plots, the interior of the residence is superbly presented providing all the luxury to satisfy ensures to do, the abode is well designed as per the client's requirements and their imagination makes the dream world come true.
</p>
             

              <p className ="fw-bold">Total 9 Acres</p>
              <p className ="fw-bold"><span></span>Project Duration 2017 - 2021
</p>
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