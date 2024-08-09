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
            height:"30rem"
          }}
        >
          <div className="row ">
            <div className="col-12 ">
              <div className=" text-center">
                <h1 className="  text-white">{props.title}</h1>
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
    /* font-family: "Playfair Display"; */
    font-size: 4rem;
    margin-top: 12rem;
     margin-left: 5rem;
     @media screen and (max-width: 768px) {
      font-size: 3rem;
    margin-top: 12rem;
    margin-left: 1rem;

    }

  
  }


`;


