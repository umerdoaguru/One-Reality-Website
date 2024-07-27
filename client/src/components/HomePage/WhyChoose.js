import React from 'react'
import styled from 'styled-components';
import wide from '../../images/wide_range.jpg'
import comfortable from '../../images/comfortable.jpg'
import quality from '../../images/quality.jpg'
import support from '../../images/support.webp'
import assurance from '../../images/quality_assurance.png'
import sustainable from '../../images/sustainable.jpg'



function WhyChoose() {
  return (
    <Wrapper>
      <div className="container mt-5">
        <div className="row g-5">
          
          <div className="col-lg-12 mb-4 mt-5 text-center">
            <h2>Why Choose One Realty Developer?</h2>
            <div className="underline mx-auto"></div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={wide} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Wide Range of Projects</h5>
                <div className="underline"></div>
                <p>
                  We boast a diverse portfolio of successful residential properties in Jabalpur. Each project is a testament to our commitment to excellence and our ability to meet varying customer needs and preferences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={comfortable} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Affordable & Comfortable Homes</h5>
                <div className="underline"></div>
                <p>
                  One Realty Developers focus on creating homes that are not only affordable but also comfortable and stylish. We believe in delivering value for money, ensuring that our properties offer the perfect balance of quality, comfort, and functionality. Our homes are designed to meet your lifestyle needs without breaking the bank.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={quality} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Innovative Design & Quality Construction</h5>
                <div className="underline"></div>
                <p>
                  Innovation and quality are at the heart of our projects. Our skilled architects and engineers use the latest construction techniques and high-quality materials to create homes that are not only aesthetically pleasing but also durable and sustainable. We strive to exceed industry standards in every project we undertake.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={sustainable} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                
                <h5>Sustainable Practices</h5>
                <div className="underline"></div>
                <p>
                Sustainability is a core value at One Realty Developers. We are committed to environmentally responsible building practices that reduce waste, conserve resources, and promote energy efficiency. By using eco-friendly materials and sustainable construction methods, we aim to create buildings that are not only good for our clients but also for the planet.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={support} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Comprehensive After-Sales Support</h5>
                <div className="underline"></div>
                <p>
                  Our commitment to you doesn't end at the point of sale. We offer comprehensive after-sales support to ensure that any issues or concerns are promptly addressed. Our dedicated customer service team is always available to assist you, ensuring your complete satisfaction and peace of mind.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={assurance} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Quality Assurance</h5>
                <div className="underline"></div>
                <p>
                At One Realty Developers, we uphold the highest standards of quality in every project. Our meticulous attention to detail ensures that each building we construct is not only aesthetically pleasing but also durable and functional. We use top-grade materials and employ rigorous quality control processes to guarantee superior results.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default WhyChoose;

const Wrapper = styled.div`
  .underline {
    height: 2px;
    width: 2rem;
    background-color: #34495e;
    margin: 20px auto;
   
  
  }

  .card-shadow {
    border-radius: 20px;
    box-shadow: 8px 8px 10px 1px whitesmoke;
  }

  .card-shadow:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .card-img-top {
    height: 5rem;
    width: 5rem;
    @media screen and (max-width: 768px) {
      height: 4rem;
      width: 4rem;
    }
  }

  #cardres {
    height: 20rem;
    /* height: auto; */
    border: none;
    padding: 15px;
    @media screen and (max-width: 768px) {
      height: 22rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      height: 27rem;
    }
    @media screen and (min-width: 1024px) and (max-width: 1400px) {
      height: 27rem;
    }
  }

  p {
    color: #5a626d;
    
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  h5 {
    font-size: 15px;
    /* color:#006c28; */
    color: #01614e;
    margin-top: 2rem;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }

  h2 {
    /* color: #006c28; */
    color: #01614e;
    /* color: #d29b33; */
    font-family: "Playfair Display";
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .container {
    padding: 0 15px;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
