import React, { useState } from 'react';
import styled from 'styled-components';


import photo48 from '../../images/photo48.jpg';
import photo49 from '../../images/photo49.jpg';
import photo50 from '../../images/photo50.jpg';
import photo51 from '../../images/photo51.jpg';

import photo55 from '../../images/photo55.jpg';
import photo56 from '../../images/photo56.jpg';



const images = [

      photo48, photo49,
       photo50,
       photo51,
       photo55,
       photo56,
       
      
];

function Contruction() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <Wrapper>
      <div className="container">
        <div className="row g-5">
          {images.map((image, index) => (
            <div key={index} className="col-lg-4">
              <div className="card"
              
              >
                <div className="img-container" data-aos="zoom-in">
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

export default Contruction;

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
