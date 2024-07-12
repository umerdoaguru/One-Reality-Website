import React from "react";
import styled from "styled-components";
import About2 from "../images/about2.png";

const AboutSection = () => {
  return (
    <>
      <Container>
      <section id="about" className="mt-5">
      <div className="container">
<div className="heading text-center">
  
  <h1>Welcome to One Realty Developer About Us Page</h1>
  <div
                className="underline mx-auto"
                style={{
                  height: 3,
                  width: "4rem",
                  backgroundColor: "#34495E",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              ></div>
</div>





        <div className="row align-items-center mt-5">
        <div className="col-lg-6 mt-2">
            <div className="about-content s-about-content pl-30  " data-aos= "fade-right">
              <div className="about-title second-atitle">
                <span>About Us</span>
                <h2>Welcome To Our Relxtower</h2>
                <p><span></span>We provide an essential service for you</p>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque laudantiue.</p>
              <button  className="btn" style={{color:"white" ,backgroundColor:"  color: #01614e;"}}>Get Started</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-left">
              <img src= {About2} alt="img" />
              
            </div>
          </div>

         
          
        </div>
      </div>
    </section>
      </Container>
    </>
  );
};

export default AboutSection;

const Container = styled.div`
  
h1{
  /* color: #006c28; */
  color: #01614e;
  /* color: #d29b33; */
}
h2{
  /* color: #006c28; */
  /* color: #006c28; */
  color: #01614e;
}
`;
