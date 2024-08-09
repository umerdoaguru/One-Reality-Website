import React, { useState } from 'react';
import styled from 'styled-components';


import photo48 from '../../images/photo48.jpg';
import photo49 from '../../images/photo49.jpg';
import photo50 from '../../images/photo50.jpg';
import photo51 from '../../images/photo51.jpg';

import photo55 from '../../images/photo55.jpg';
import photo57 from '../../images/photo57.jpg';



const images = [

  { src: photo48, title: 'Construction' },
  { src: photo49, title: 'Construction' },
  { src: photo50, title: 'Construction' },
  { src: photo51, title: 'Construction' },
  { src: photo55, title: 'Construction' },
  { src: photo57, title: 'Construction' },
      
];

function Contruction() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <Wrapper>
      <div className="container">
        <div className="row g-5">
        {images.map((image, index) => (
        <div key={index} className="col-lg-4">
          <div className="card">
            <div className="img-container" data-aos="zoom-in">
              <img
                src={image.src}
                className="card-img-top imgset"
                alt={`Card image ${index + 1}`}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{image.title}</h5>
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
  .card-title{
    color: #01614e;
  }
`;
