import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function LastHeropage() {
  const handleFooterLink = () => {
    window.scrollTo(0, 0);
  };
  return (
   <Wrapper>
   
   <div className="container text-center" style={{marginTop:"5rem"}} data-aos="fade-up"   data-aos-anchor-placement="bottom-bottom">
<div className="heading text-center">
  
  <h2>Ready to Build Your Dream Home?</h2>
  <div
                className="underline mx-auto"
                style={{
                  height: 3,
                  width: "4rem",
                  backgroundColor: "#34495E",

                  marginTop: 20,
                  marginBottom: 30,
                }}
              ></div>
</div>
<h4>Choose One Realty Developers Today!</h4>
<div className="content mb-3 mt-4">

  <p>Looking for the top builders in Jabalpur to bring your dreams to life? Your search ends here. One Realty Developers stands as the best construction company in Jabalpur, ensuring quality and innovation in the realm of construction. Whether it’s selling, buying, or renting residential or commercial property in Jabalpur, we’re the best builders and developers in the city, ready to transform your vision into reality.</p>
</div>


<button
              type="button"
              className="btn   mb-3"
              style={{ backgroundColor:" #01614e", borderRadius:"1.5rem"  }}
            >
              <Link
                to="/contact"
                onClick={handleFooterLink}
                style={{ textDecoration: "none", color:"white"}}
              >
                {" "}
                Enquire Now
              </Link>
            </button>

        
      </div>
   </Wrapper>
  )
}

export default LastHeropage

const Wrapper = styled.div`
h2{
    /* color: #006c28; */
    color: #01614e;
    /* color: #d29b33; */
    font-family: "Playfair Display";
}
`