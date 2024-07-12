import React from "react";
import styled from "styled-components";

function CompleteTitle() {
  return (
    <>
      <Container>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12 my-3">
              <h1 className="text-center align-items-center fw-bold">
                Our Complete Projects
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CompleteTitle;
const Container = styled.div`
  h1 {
    font-family: "Playfair Display";
    color: #06933d;
  }
`;
