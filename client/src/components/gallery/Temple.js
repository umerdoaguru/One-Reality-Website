import React, { useState } from 'react';
import styled from 'styled-components';

import photo5 from '../../images/photo5.jpg';

import photo16 from '../../images/photo16.jpg';

import photo27 from '../../images/photo27.jpg';

import photo62 from '../../images/photo62.jpeg';
import photo63 from '../../images/photo63.jpeg';
import photo64 from '../../images/photo64.jpeg';



const images = [
 photo5,  photo16,  
   photo27,
     
   
       photo62,
       photo63,
       photo64,
       
      
      
      
      
];

function Temple() {
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
                   
                    className={`card-img-top }`}
                    alt={`Card image ${index + 1}`}
                  />
               
                  <div className={`hover-title}`}>
              
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

export default Temple;

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
