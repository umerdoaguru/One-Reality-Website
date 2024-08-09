import React from "react";
// import img from "../images/slider_img01.webp";
import img from "../images/imgnew1.webp";


import img1 from "../images/Untitled design (10).png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutSection from "../components/HomePage/AboutSection";
import Bank_Partner from "../components/HomePage/Bank_Partner";
import WhyChoose from "../components/HomePage/WhyChoose";
import OurProjects from "../components/HomePage/OurProjects";
import LastHeropage from "../components/HomePage/LastHeropage";
import OurVideo from "../components/HomePage/OurVideo";
import styled from "styled-components";

function HomePage() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  //   pauseOnHover: true
  // };

  return (
    <Wrapper>
      {/*       
      <Slider {...settings}>
        <div>
          <img src="https://zcube.in/relxtower/img/slider/slider_img01.jpg" alt="Slide 1" />
        
        </div>
        <div>
          <img src="https://zcube.in/relxtower/img/slider/slider_img02.jpg" alt="Slide 2" />
        </div>
        
      </Slider> */}

      <div
        className="container-fluid"
        id="cont"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        
        }}
      >
        <div class="container">
          {/* <div class="row">
            <div class="col-lg-8">
              <div class="slider-content s-slider-content text-left">
                <h2>
                  Discover Modern
                  <br />
                  Building Design.
                </h2>
                <ul data-animation="fadeInUp" data-delay=".6s">
                  <li>
                    <i class="fas fa-bed"></i>
                    <span>3 Bedrooms.</span>
                  </li>
                  <li>
                    <i class="fal fa-pencil-ruler"></i>
                    <span>Square Feet </span>
                  </li>
                  <li>
                    <i class="fas fa-bath"></i>
                    <span>Bedrooms</span>
                  </li>
                  <li>
                    <i class="fas fa-car"></i>
                    <span>Car parking</span>
                  </li>
                </ul>
                <div class="slider-btn mt-55">
                  <a
                    href="#"
                    class="btn ss-btn"
                    data-animation="fadeInRight"
                    data-delay=".8s"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=vKSA_idPZkc"
                    class="video-i popup-video"
                    data-animation="fadeInUp"
                    data-delay=".8s"
                    tabindex="0"
                  >
                    <i class="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="slider-price">
                <h3>Price:</h3>
                <h2>$1,786.80</h2>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <AboutSection/>
      <WhyChoose/>
      <OurProjects/>
      <Bank_Partner/>
      <OurVideo/>
      <LastHeropage/>
     


    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  #cont{
    height: 60vh;
    @media screen and (max-width: 768px) {
      height: 20vh;
      
    }
  }


`
