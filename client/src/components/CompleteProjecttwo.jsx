import React from "react";
import styled from "styled-components";

function CompleteProjecttwo({ title, description, imageSrc, imageAlt }) {
  return (
    <Container>
      <div className="container">
        <div className="row  ">
          <div className="col-md-6 d-flex order-md-1 order-2 mt-3 md:mt-0">
            <img src={imageSrc} alt={imageAlt} className="img-fluid" />
          </div>
          <div className="col-md-6  order-md-2 order-1 ">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CompleteProjecttwo;

const Container = styled.div`
  img {
    height: 400px;
  }

  h3 {
    font-family: "Playfair Display";
  }
`;
