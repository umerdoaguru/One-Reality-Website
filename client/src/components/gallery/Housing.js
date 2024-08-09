import React, { useState } from 'react';
import styled from 'styled-components';

import photo2 from "../../images/Nirvana home/Picture2.jpg";
import photo3 from "../../images/Nirvana home/Picture3.jpg";
import photo4 from "../../images/Nirvana home/Picture4.jpg";
import photo5 from "../../images/Nirvana home/Picture5.jpg";
import photo6 from "../../images/Nirvana home/Picture6.jpg";
import photo7 from "../../images/Nirvana home/Picture7.jpg";

import photo8 from "../../images/photo1.jpg";
import photo9 from "../../images/photo2.jpg";

import photo10 from "../../images/photo4.jpg";
import photo11 from "../../images/photo5.jpg";
import photo12 from "../../images/photo6.jpg";
import photo13 from "../../images/photo7.jpg";
import image1 from "../../images/Nirvana home/image1.jpeg";
import image2 from "../../images/Nirvana home/image2.jpeg";
import image3 from "../../images/Nirvana home/image3.jpeg";
import image4 from "../../images/Nirvana home/image4.jpeg";
import image5 from "../../images/Nirvana home/image5.jpeg";
import image6 from "../../images/Nirvana home/image6.jpeg";
import image7 from "../../images/Nirvana home/image7.jpeg";
import image8 from "../../images/Nirvana home/image8.jpeg";
import image9 from "../../images/Nirvana home/image9.jpeg";
import image10 from "../../images/Nirvana home/image10.jpeg";
import image11 from "../../images/Nirvana home/image11.jpeg";
import image12 from "../../images/Nirvana home/image12.jpeg";
import image13 from "../../images/Nirvana home/image13.jpeg";
import image14 from "../../images/Nirvana home/image14.jpeg";
import image15 from "../../images/Nirvana home/image15.jpeg";
import image16 from "../../images/Nirvana home/image16.jpeg";
import image17 from "../../images/Nirvana home/image17.jpeg";
import image18 from "../../images/Nirvana home/image18.jpeg";
import image19 from "../../images/Nirvana home/image19.jpeg";
import image20 from "../../images/Nirvana home/image20.jpeg";
import image21 from "../../images/Nirvana home/image21.jpeg";

const images = [
 
  { src: photo2, title: 'Entry Gate' },
  { src: photo3, title: 'Road' },
  { src: photo4, title: 'Road' },

  { src: image3, title: 'Car Porch' },
  { src: image4, title: 'Hall Cum Dining' },
  { src: image5, title: 'Granite Marble Upstairs' },
  { src: image6, title: 'Hall Cum Dining' },
  { src: image7, title: 'Kitchen' },
  { src: image9, title: 'BedRoom' },
  { src: image10, title: 'Attached Toilet' },
  { src: image11, title: 'BedRoom' },
  { src: image8, title: 'Kitchen' },
  { src: image12, title: 'Attached Toilet' },

 
  { src: image15, title: 'Open to Sky' },
  { src: image16, title: 'Lounge Area' },
  { src: image17, title: 'BedRoom' },
  { src: image18, title: 'Balcony' },
  { src: image19, title: 'Dry Balcony' },
  { src: image20, title: 'Stairs' },
  { src: image21, title: 'Dry Balcony' },
  { src: photo5, title: 'Road' },
  { src: photo6, title: 'Construction' },
  { src: photo7, title: 'Road' },
  { src: photo8, title: '3 BHK Luxury Duplex' },
  { src: photo9, title: 'Layout Plan' },
  { src: photo10, title: 'Amenities' },
  { src: photo11, title: 'Shiva Temple' },
  { src: photo12, title: 'Garden' },
];

function   Housing() {
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
  .card-title{
    color: #01614e;
  }
`;
