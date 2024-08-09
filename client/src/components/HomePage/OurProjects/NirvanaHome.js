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

   
   
   </Wrapper>
  )
}

export default NirvanaHome
const Wrapper  = styled.div`
img{
    width: 100%;
}



`