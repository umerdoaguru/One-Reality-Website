import React from "react";
import styled from "styled-components";

function Heros(props) {
  return (
    <>
      <Container>
        <div
          className=" main container-fluid bg-secondary"
          style={{
            backgroundImage: `url("${props.backgroundImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="row ">
            <div className="col-12 ">
              <div className="px-4 py-5 my-5 text-center">
                <h1 className=" fw-bold text-white pt-2">{props.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Heros;
const Container = styled.div`
  h1 {
    font-family: "Playfair Display";
    font-size: 5rem;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  


`;
