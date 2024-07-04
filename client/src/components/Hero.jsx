import React from "react";

function Hero(props) {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url("${props.backgroundImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="row ">
          <div className="col-12 ">
            <div className="px-4 py-5 my-5 text-center">
              <h1 className=" fw-bold  text-white">{props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
