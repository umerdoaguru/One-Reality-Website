import React, { useState } from 'react';
import styled from 'styled-components';

import photo6 from '../../images/photo6.jpg';
import photo7 from '../../images/photo7.jpg';

import photo12 from '../../images/photo12.jpg';

import photo27 from '../../images/photo27.jpg';

import photo31 from '../../images/photo31.jpg';

import photo59 from '../../images/photo59.jpeg';

import photo67 from '../../images/photo67.jpeg';
import photo68 from '../../images/photo68.jpeg';

import photo70 from '../../images/photo70.jpeg';


const images = [
  photo6,
  photo7,  photo12,  
   photo27,
      photo31, 
       photo59,
       
       photo67,
       photo68,

       photo70,
      
      
      
];

function Garden() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <Wrapper>
      <div className="container">
        <div className="row g-5">
          {images.map((image, index) => (
            <div key={index} className="col-lg-4">
              <div className="card"
                // onMouseEnter={() => setHoveredIndex(index)}
                // onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="img-container" data-aos="zoom-in">
                  <img
                    src={image}
                    // className={`card-img-top ${hoveredIndex === index ? "hovered" : ""}`}
                    className={`card-img-top `}
                    alt={`Card image ${index + 1}`}
                  />
                  {/* <div className={`hover-title ${hoveredIndex === index ? "visible" : ""}`}> */}
                  <div className={`hover-title`}>
                    Test {index + 1}
                  </div>
                </div>
              </div>
            </div>      
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Garden;

const Wrapper = styled.div`
  img {
    height: 25rem;
  }
  .card {
    position: relative;
    border: none;
  }
  .img-container {
    position: relative;
  }
  .hover-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .hovered + .hover-title {
    opacity: 1;
  }
  .card-title{
    color: #01614e;
  }
`;
