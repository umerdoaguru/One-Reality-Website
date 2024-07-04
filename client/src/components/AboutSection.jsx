import React from "react";
import styled from "styled-components";
import About2 from "../images/about2.png";

const AboutSection = () => {
  return (
    <>
      <Container>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0 ">
              <div className="about-content">
                <div className="about-title">
                  <span className=" abt fs-3 font-bold">About Us</span>
                  <h2 className="fs-1 fw-bold">Welcome To Our Relxtower</h2>
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
                <button className="btn btn-lg  fw-bold  rounded-pill">
                  Get start
                </button>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={About2} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutSection;

const Container = styled.div`
  .btn {
    background-color: #d29751;
  }
  .btn:hover {
    color: white;
  }
  h2 {
    font-family: "Playfair Display";
    color: #06933d;
  }
  .abt {
    color: #3e2969;
  }
`;
