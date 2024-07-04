import React from 'react';
import img from '../../images/about_img02.png'

const AboutSection = () => {
  return (
    <section id="about" className="mt-5">
      <div className="container">
<div className="heading">
  <h2></h2>
</div>


        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="s-about-img p-relative">
              <img src= {img} alt="img" />
              <div className="about-text second-about">
                <span>35 years of <br /> experience</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content s-about-content pl-30">
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
              <a href="#" className="btn">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
