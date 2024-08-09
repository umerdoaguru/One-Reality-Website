import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

function ContactSection() {
  const handleFooterLink = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Container  data-aos="zoom-in">
        <div
          className="ContactSection d-flex w-100 h-100 p-3 mx-auto flex-column mt-5  pt-5 pb-5 mb-5 "
          style={{
            backgroundImage: "url(/image/AboutUs.png)",
            backgroundPosition: "cover",
            backgroundRepeat: "no-repeat",
          }}
          
        >
          <div className="overlay"></div>
          <center >
            <main className="px-3 w-100 w-md-75 w-lg-50 mt-4 " style={{color:"#01614e"}}>
              <h6>Don't hesitage to contact us</h6>
              <h2>MAKE AN APPOINTMENT NOW</h2>
              <h2> 07614924920,7880002259</h2>

              <button className="btn btn-lg   rounded-pill mt-3 ">
              <Link
                to="/contact"
                onClick={handleFooterLink}
                style={{ textDecoration: "none", color:"white"}}
              >
                Contact Us
                </Link>
              </button>
            </main>
          </center>
        </div>
      </Container>
    </>
  );
}

export default ContactSection;
const Container = styled.div`
  .ContactSection {
    position: relative;
    background-size: cover;
  }

  .ContactSection .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(229, 225, 225, 0.3);
    z-index: 1;
  }

  .ContactSection center {
    position: relative;
    z-index: 2;
  }
  .btn {
    background-color: #01614e;
    color: white;
  }

  @media (max-width: 768px) {
    .ContactSection {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    .ContactSection main {
      width: 90%;
    }
  }

  @media (max-width: 576px) {
    .ContactSection {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    .ContactSection main {
      width: 100%;
    }
  }
  h2,h6{
    font-family: "Playfair Display";
  }
`;
