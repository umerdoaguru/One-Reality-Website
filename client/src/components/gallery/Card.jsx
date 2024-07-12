import React, { useState } from "react";
import styled from "styled-components";

const Card = ({ imageUrl, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="">
            <div
              className="card h-100"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="img-container">
                <img
                  src={imageUrl}
                  className={`card-img-top ${isHovered ? "hovered" : ""}`}
                  alt="Card image"
                />
                <div className={`hover-title ${isHovered ? "visible" : ""}`}>
                  {title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  .card {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 0;
  }

  .img-container {
    position: relative;
    height: 100%;
  }

  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out, height 0.3s ease-in-out;
  }

  .hovered {
    height: 90%; /* Adjust the percentage to change the amount of height reduction */
  }

  .hover-title {
    position: absolute;
    width: 100%;
    text-align: center;
    // background-color: rgba(0, 0, 0, 0.7);
    color: black;
    padding: 10px;
    border: none;
    transform: translateY(100%);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    font-weight: bold;
    font-size: 20px;
  }

  .visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    .hover-title {
      font-size: 14px;
      padding: 5px;
    }

    .hovered {
      height: 90%; /* Adjust for smaller screens if needed */
    }
  }
`;
