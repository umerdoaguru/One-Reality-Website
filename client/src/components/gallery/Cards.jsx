import React from "react";

import protfolio1 from "../../images/protfolio1.jpg";
import protfolio2 from "../../images/protfolio2.jpg";
import protfolio3 from "../../images/protfolio3.jpg";
import protfolio4 from "../../images/protfolio4.jpg";
import protfolio5 from "../../images/protfolio5.jpg";
import protfolio6 from "../../images/protfolio6.jpg";

import Card from "./Card";
function Cards() {
  return (
    <>
      <div className="container">
        <div className="row d-flex mt-5 g-3">
          <div className="col-md-4 ">
            <Card imageUrl={protfolio1} title="Portfolio 1" />
          </div>

          <div className="col-md-4">
            <Card imageUrl={protfolio2} title="Portfolio 2" />
          </div>

          <div className="col-md-4">
            <Card imageUrl={protfolio3} title="Portfolio 3" />
          </div>
        </div>

        <div className="row d-flex md:mt-5 mt-2 g-3 mb-5">
          <div className="col-md-4 ">
            <Card imageUrl={protfolio4} title="Portfolio 4" />
          </div>

          <div className="col-md-4">
            <Card imageUrl={protfolio5} title="Portfolio 5" />
          </div>

          <div className="col-md-4">
            <Card imageUrl={protfolio6} title="Portfolio 6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
