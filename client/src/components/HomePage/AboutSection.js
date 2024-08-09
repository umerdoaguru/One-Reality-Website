import React from 'react';
// import img from '../../images/about_img02.png'
import img from '../../images/aboutsection.jpeg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const handleFooterLink = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Wrapper>
    
       <section id="about" className="mt-5">
      <div className="container">
        <div className="row">

<div className="col-lg-9 heading text-center">
<h1>One Realty Developers: The Best Developers in Jabalpur</h1>
 
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
<div className="col-lg-3 flash-animation">
<h2 className=' text-center ongoing'><Link to='/nirvana-home' onClick={handleFooterLink}>Ongoing Project</Link></h2>

</div>

</div>
<div className="content mb-3" data-aos="fade-down">

  <p>With over nine years of experience in real estate development, One Realty Developers has been building a strong organization committed to delighting customers through innovation since 2011. Our expertise spans housing solutions, construction of residential, commercial, and industrial buildings, as well as infrastructural works. Over the years, our projects have introduced many firsts to the Jabalpur real estate market. One Realty Developers embodies the principles of transparency, integrity, and innovation in the real estate industry.</p>
</div>




        <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-right">
              <img src= {img} alt="img" />
              
            </div>
          </div>

          <div className="col-lg-6 mt-2">
          <div className="about-content s-about-content pl-30  " data-aos= "fade-left">
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
          
        </div>
      </div>
    </section>
    
    </Wrapper>
 
  );
};

export default AboutSection; 
const Wrapper = styled.div`
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
@keyframes flash {
  0% { 
    opacity: 1; 
    transform: scale(1);
  }
  50% { 
    opacity: 0; 
    transform: scale(1.2); /* Increase size by 20% */
  }
  100% { 
    opacity: 1; 
    transform: scale(1);
  }
}

.flash-animation {
  animation: flash 3s infinite;
}

.ongoing{
  white-space: nowrap;
}
a {
    text-decoration: none;
    color: #01614e;
   
    
  }
/* white-space: nowrap;
    overflow: hidden;
    width: 1;
    animation: typing 3s steps(30,end) infinite; */
`
