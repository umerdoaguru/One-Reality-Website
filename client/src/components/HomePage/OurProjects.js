import React, { useState } from 'react'
import AuraCity from './OurProjects/AuraCity';
import NirvanaCity from './OurProjects/NirvanaCity';
import NirvanaExoticaa from './OurProjects/NirvanaExoticaa';
import NirmanNagar from './OurProjects/NirmanNagar';
import {  Nav } from "react-bootstrap";
import styled from 'styled-components';
import NirvanaHome from './OurProjects/NirvanaHome';


function OurProjects() {
    const initialTab = localStorage.getItem("selectedTab") || "tab1";
    const [selectedTab, setSelectedTab] = useState(initialTab);
  return (
    <Wrapper>
    
    <div className="container-fluid" style={{marginTop:"4rem"}}>
                  <h2 className="text-center">Our Projects</h2>
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
                  <div className="container-fluid mt-5 navsect background ">
                    <Nav
                      className="d-flex justify-content-center side-cont"
                      activeKey={selectedTab}
                      onSelect={(selectedKey) => setSelectedTab(selectedKey)}
                    >
                      <div className="d-flex flex-row mx-3 selectors">
                        <Nav.Item>
                          <Nav.Link eventKey="tab1" className="navlink shadow">
                           Aura City
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="tab2"
                            className={`navlink shadow mx-2 `}
                          >
                        Nirvana City
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="tab3"
                            className={`navlink shadow`}
                          >
                           Nirvana Exoticaa
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="tab4"
                            className={`navlink shadow mx-2`}
                          >
                            Nirman Nagar
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="tab5"
                            className={`navlink shadow mx-2`}
                          >
                            Nirvana Homes
                          </Nav.Link>
                        </Nav.Item>
                      </div>
                      <div>
                        {/* <p className="fw-bold">Total Lab - 09</p> */}
                      </div>
                    </Nav>
                    <div className="flex-grow-1 p-3 mainback">
                      {selectedTab === "tab1" && <AuraCity />}
                      {selectedTab === "tab2" && <NirvanaCity />}
                      {selectedTab === "tab3" && <NirvanaExoticaa />}
                      {selectedTab === "tab4" && <NirmanNagar />}
                      {selectedTab === "tab5" && <NirvanaHome />}
                    </div>
                  </div>
                </div>
    
    
    </Wrapper>
  )
}

export default OurProjects
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
`