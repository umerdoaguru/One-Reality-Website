import React from "react";
import styled from "styled-components";

function CompleteProject({ title, description, imageSrc, imageAlt }) {
  return (
    <Container>
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 ">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center   mt-3 md:mt-0">
            <img src={imageSrc} alt={imageAlt} className="img-fluid" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CompleteProject;

const Container = styled.div`
  img {
    height: 400px;
  }

  h3 {
    font-family: "Playfair Display";
  }
`;
