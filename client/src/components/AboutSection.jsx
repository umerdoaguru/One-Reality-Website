import React from "react";
import styled from "styled-components";
import About1 from "../images/About1.png";

const AboutSection = () => {
  return (
    <>
      <Container>
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0 p-5">
              <div className="about-content">
                <div className="about-title">
                  <span>About Us</span>
                  <h2>Welcome To Our Relxtower</h2>
                  <p>
                    <span></span>We provide an essential service for you
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantiue.
                </p>
                <button>Get start</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="imgpart d-flex justify-content-center">
                <div className="card card1 bg-warning"></div>
                <div className="card card2 bg-primary">
                  <img src={About1} alt="img" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutSection;

const Container = styled.div`
  .imgpart {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card1 {
    position: absolute;
    z-index: 1;
    right: 120px;
    height: 300px;
    width: 100%;
    max-width: 250px;
    border-radius: 0;
  }
  .card2 {
    position: relative;
    top: 50px;
    z-index: 2;
    width: 75%;
    max-width: 400px;
    border-radius: 0;
    border: 50px;
    border-color:offwhite:
  }
  @media (max-width: 768px) {
    .card1 {
      top: 150px;
      left: 0;
    }
    .card2 {
      top: 0;
      left: 0;
    }
  }
  @media (max-width: 576px) {
    .card1 {
      height: 200px;
      width: 100%;
    }
    .card2 {
      width: 100%;
    }
  }
`;
