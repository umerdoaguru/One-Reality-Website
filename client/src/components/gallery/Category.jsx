import React, { useState } from "react";
import styled from "styled-components";

function Category() {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Container>
        <div className="container">
          <div className="row mt-5">
            <div className="col d-flex justify-content-center align-items-center ">
              <ul className="nav nav-underline ">
                <li className="nav-item lg:mx-3">
                  <a
                    className={`nav-link ${
                      activeTab === "All" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#"
                    onClick={() => handleTabClick("All")}
                  >
                    All
                  </a>
                </li>
                <li className="nav-item lg:mx-3">
                  <a
                    className={`nav-link ${
                      activeTab === "Interior" ? "active" : ""
                    }`}
                    href="#"
                    onClick={() => handleTabClick("Interior")}
                  >
                    Interior
                  </a>
                </li>
                <li className="nav-item lg:mx-3">
                  <a
                    className={`nav-link ${
                      activeTab === "Exterior" ? "active" : ""
                    }`}
                    href="#"
                    onClick={() => handleTabClick("Exterior")}
                  >
                    Exterior
                  </a>
                </li>
                <li className="nav-item lg:mx-3">
                  <a
                    className={`nav-link ${
                      activeTab === "Construction" ? "active" : ""
                    }`}
                    aria-disabled="true"
                    href="#"
                    onClick={() => handleTabClick("Construction")}
                  >
                    Construction
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Category;
const Container = styled.div`
  .nav-link {
    color: black;
    font-weight: bold;
    font-size: 20px;
  }

  .nav-link:hover {
    color: #d29751;
  }

  .nav-link.active {
    font-weight: bold;
    color: #d29751;
  }
  a {
    font-family: poppins;
  }
`;
