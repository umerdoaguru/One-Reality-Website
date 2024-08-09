import React, { useState } from 'react';
import styled from 'styled-components';
import photo1 from '../../images/photo1.jpg';
import photo2 from '../../images/photo2.jpg';

import photo4 from '../../images/photo4.jpg';

import photo18 from '../../images/photo18.jpg';

import photo32 from '../../images/photo32.jpg';
import photo33 from '../../images/photo33.jpg';
import photo34 from '../../images/photo34.jpg';
import photo35 from '../../images/photo35.jpg';
import photo36 from '../../images/photo36.jpg';
import photo37 from '../../images/photo37.jpg';
import photo38 from '../../images/photo38.jpg';
import photo39 from '../../images/photo39.jpg';
import photo40 from '../../images/photo40.jpg';
import photo41 from '../../images/photo41.jpg';
import photo42 from '../../images/photo42.jpg';
import photo43 from '../../images/photo43.jpg';

import photo47 from '../../images/photo47.jpg';
import photo48 from '../../images/photo48.jpg';
import photo49 from '../../images/photo49.jpg';


const images = [
  { src: photo32, title: 'Entry Gate' },
 { src: photo2, title: 'Layout Plan' },
 { src: photo4, title: 'Amenities' },

 
 { src: photo18, title: 'Nirvana Home Entry Gate' },
 { src: photo36, title: 'Nirvana Home Office' },
  { src: photo37, title: 'Nirvana Home Office View' },
  { src: photo38, title: 'Nirvana Home Office View' },
  { src: photo39, title: 'Nirvana Home Office View' },
  { src: photo40, title: 'Nirvana Home Office View' },
  { src: photo41, title: 'Nirvana Home Office View' },
  { src: photo42, title: 'Nirvana Home Office View' },
  { src: photo43, title: 'Nirvana Home Office View' },

      
      
];

function All() {
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

export default All;

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
