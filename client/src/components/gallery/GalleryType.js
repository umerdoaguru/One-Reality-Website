import React, { useState } from 'react'

import {  Nav } from "react-bootstrap";
import styled from 'styled-components';
import All from './All';
import Garden from './Garden';
import Housing from './Housing';
import Contruction from './Contruction';
import Other from './Other';
import Temple from './Temple';



function GalleryType() {
    const initialTab = localStorage.getItem("selectedTab") || "tab1";
    const [selectedTab, setSelectedTab] = useState(initialTab);
  return (
    <Wrapper>
    
    <div className="container-fluid" style={{marginTop:"4rem"}}>
                  <h2 className="text-center">Our Gallery</h2>
                  <div
                className="underline mx-auto"
                style={{
                  height: 3,
                  width: "4rem",
                  backgroundColor: "#34495E",

                  marginTop: 20,
                  marginBottom: 20,
                }}
              ></div>
                  <div className="container-fluid mt-4  navsect background ">
                    <Nav
                      className="d-flex justify-content-center side-cont selectors"
                      activeKey={selectedTab}
                      onSelect={(selectedKey) => setSelectedTab(selectedKey)}
                    >
                      <div className="d-flex flex-row mx-3 mb-2">
                        <Nav.Item>
                          <Nav.Link eventKey="tab1" className="navlink shadow allnav">
                         All
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="tab2"
                            className={`navlink shadow mx-2 `}
                          >
                      Housing
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="tab3"
                            className={`navlink shadow`}
                          >
                        Garden
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="tab4"
                            className={`navlink shadow mx-2`}
                          >
                          Construction
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="tab5"
                            className={`navlink shadow mx-2`}
                          >
                      Temple
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="tab6"
                            className={`navlink shadow mx-2`}
                          >
                          Other
                          </Nav.Link>
                        </Nav.Item>
                      </div>
                      <div>
                        {/* <p className="fw-bold">Total Lab - 09</p> */}
                      </div>
                    </Nav>
                    <div className="flex-grow-1 p-3 mainback">
                      {selectedTab === "tab1" && <All />}
                      {selectedTab === "tab2" && <Housing />}
                      {selectedTab === "tab3" && <Garden />}
                      {selectedTab === "tab4" && <Contruction />}
                      {selectedTab === "tab5" && <Temple />}
                      {selectedTab === "tab6" && <Other />}
                    </div>
                  </div>
                </div>
    
    
    </Wrapper>
  )
}

export default GalleryType;
const Wrapper  = styled.div`
 .navlink.active {
    /* background-color: #006c28 !important; */
    background-color: #01614e !important;
    border-radius: 1rem;
    color: white !important;
  }

  .navlink {
    background-color: #ffff !important;
    color: black;
    border-radius: 1rem;
  }
  h2{
    /* color: #006c28; */
    color: #01614e;
    /* color: #d29b33; */
    font-family: "Playfair Display";
  }
  .selectors{
    @media screen and (max-width: 768px) {
      overflow-x: auto;
      height: 5rem;
    }
  
  }
  .allnav{
    @media screen and (max-width: 768px) {
     margin-left: 14rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
     margin-left: 0rem;
    }
  }
`