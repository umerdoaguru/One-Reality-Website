import React, { useState } from 'react';
import styled from 'styled-components';
import photo1 from '../../images/photo1.jpg';

import photo15 from '../../images/photo15.jpg';
import photo16 from '../../images/photo16.jpg';

import photo18 from '../../images/photo18.jpg';

import photo47 from '../../images/photo47.jpg';

import photo58 from '../../images/photo58.jpg';



const images = [
  photo1,  photo15, photo16,  photo18,
   photo47,
     
       photo58,
       
      
      
      
];

function Housing() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <Wrapper>
      <div className="container">
        <div className="row g-5">
          {images.map((image, index) => (
            <div key={index} className="col-lg-4">
              <div className="card"
              
              >
                <div className="img-container"data-aos="zoom-in">
                  <img
                    src={image}
                    className={`card-img-top }`}
                    alt={`Card image ${index + 1}`}
                  />
                  <div className={`hover-title }`}>
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

export default Housing;

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
`;
