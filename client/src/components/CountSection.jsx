import React from "react";
import styled from "styled-components";
import { FaBed } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";

function CountSection() {
  return (
    <Container>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div>
              <FaPencilRuler className="CountIcons rounded-circle p-3" />
              <h1>2500</h1>
              <h6>Square Feet</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div>
              <FaBath className="CountIcons rounded-circle p-3" />
              <h1>10</h1>
              <h6>Bedrooms</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div>
              <FaBed className="CountIcons rounded-circle p-3" />
              <h1>10</h1>
              <h6>Bathrooms</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div>
              <FaCar className="CountIcons rounded-circle p-3" />
              <h1>10</h1>
              <h6>Car Parkings</h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CountSection;

const Container = styled.div`
  .CountIcons {
    font-size: 6rem;
    background-color: #d29751;
  }
  h1 {
    font-size: 6rem;
  }
`;
