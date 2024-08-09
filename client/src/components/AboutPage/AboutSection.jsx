import React from "react";
import styled from "styled-components";
// import About2 from ".../../images/about2.png";
// import About2 from "../../images/about2.png";
import About2 from "../../images/aboutsection.jpeg";

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
                <h2>Welcome To One Realty</h2>
                <p><span></span>We provide an essential support for you</p>
              </div>
              <p>With extensive expertise in the field of real estate, One Realty Developers provides top-tier housing solutions and undertakes the construction of residential, commercial, and industrial buildings. Our services extend to comprehensive infrastructural works, ensuring robust and sustainable development.</p>
              <ul className="list-item">
                <li><span>Residential Construction</span>: We create beautiful, functional, and durable homes that cater to diverse needs and preferences.</li>
                <li><span>Commercial Projects</span>: From office spaces to retail establishments, we deliver commercial buildings designed for success and growth.</li>
                <li>
                <span>Industrial Buildings</span>: Our industrial construction projects are built to support operational efficiency and long-term resilience.

                </li>
                <li>
                <span>Infrastructural Works</span>: We specialize in developing essential infrastructure, including roads, bridges, and utility systems, to support thriving communities.
                </li>
              </ul>
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
img{
  width: 100%;
  height: 32rem;
  @media screen and (max-width: 768px) {
      height: 20rem;
      
    }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
height: 40rem;
  }
}
h1{
  /* color: #006c28; */
  color: #01614e;
  /* color: #d29b33; */
  font-family: "Playfair Display";
}
h2{
  /* color: #006c28; */
  /* color: #006c28; */
  color: #01614e;
  font-family: "Playfair Display";
}
li{
  margin-top: 1rem;
}
span{
  font-weight: bold;
}
`;
