import React, { useState } from 'react';
import styled from 'styled-components';
import photo1 from '../../images/photo1.jpg';
import photo2 from '../../images/photo2.jpg';

import photo4 from '../../images/photo4.jpg';
import photo5 from '../../images/photo5.jpg';
import photo6 from '../../images/photo6.jpg';
import photo7 from '../../images/photo7.jpg';
import photo8 from '../../images/photo8.jpg';
import photo9 from '../../images/photo9.jpg';
import photo10 from '../../images/photo10.jpg';
import photo11 from '../../images/photo11.jpg';
import photo12 from '../../images/photo12.jpg';
import photo13 from '../../images/photo13.jpg';
import photo14 from '../../images/photo14.jpg';
import photo15 from '../../images/photo15.jpg';
import photo16 from '../../images/photo16.jpg';
import photo17 from '../../images/photo17.jpg';
import photo18 from '../../images/photo18.jpg';
import photo19 from '../../images/photo19.jpg';
import photo20 from '../../images/photo20.jpg';
import photo21 from '../../images/photo21.jpg';
import photo22 from '../../images/photo22.jpg';
import photo23 from '../../images/photo23.jpg';
import photo24 from '../../images/photo24.jpg';
import photo25 from '../../images/photo25.jpg';
import photo26 from '../../images/photo26.jpg';
import photo27 from '../../images/photo27.jpg';
import photo28 from '../../images/photo28.jpg';
import photo29 from '../../images/photo29.jpg';
import photo30 from '../../images/photo30.jpg';
import photo31 from '../../images/photo31.jpg';
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
import photo44 from '../../images/photo44.jpg';
import photo45 from '../../images/photo45.jpg';
import photo46 from '../../images/photo46.jpg';
import photo47 from '../../images/photo47.jpg';
import photo48 from '../../images/photo48.jpg';
import photo49 from '../../images/photo49.jpg';
import photo50 from '../../images/photo50.jpg';
import photo51 from '../../images/photo51.jpg';
import photo52 from '../../images/photo52.jpg';
import photo53 from '../../images/photo53.jpg';
import photo54 from '../../images/photo54.jpg';
import photo55 from '../../images/photo55.jpg';
import photo56 from '../../images/photo56.jpg';
import photo57 from '../../images/photo57.jpg';
import photo58 from '../../images/photo58.jpg';
import photo59 from '../../images/photo59.jpeg';
import photo60 from '../../images/photo60.jpeg';
import photo61 from '../../images/photo61.jpeg';
import photo62 from '../../images/photo62.jpeg';
import photo63 from '../../images/photo63.jpeg';
import photo64 from '../../images/photo64.jpeg';
import photo65 from '../../images/photo65.jpeg';
import photo66 from '../../images/photo66.jpeg';
import photo67 from '../../images/photo67.jpeg';
import photo68 from '../../images/photo68.jpeg';
import photo69 from '../../images/photo69.jpeg';
import photo70 from '../../images/photo70.jpeg';
import photo71 from '../../images/photo71.jpeg';


const images = [
  photo1,photo32,  photo2, photo4, photo5, photo6,
  photo7,  photo12,  photo15, photo16,  photo18,
   photo27,
      photo31, 
    photo33, photo34, photo35, photo36, photo37,
     photo38, photo39, photo40,photo41, photo42, 
     photo43, photo47,
      photo48, photo49,
       photo50,
       photo51,
       photo55,
       photo57,
       photo58,
       photo59,
       photo60,
       photo61,
       photo62,
       photo63,
       photo64,
       
       photo66,
       photo67,
       photo68,

       photo70,
      
      
      
];

function All() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <Wrapper>
      <div className="container">
        <div className="row g-5" >
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
                    className={`card-img-top }`}
                    alt={`Card image ${index + 1}`}
                  />
                  {/* <div className={`hover-title ${hoveredIndex === index ? "visible" : ""}`}> */}
                  <div className={`hover-title `}>
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
  
`;
