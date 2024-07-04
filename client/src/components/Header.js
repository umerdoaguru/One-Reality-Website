import React from "react";
import img from "../images/company_logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

function Header() {
  return (
    <Wrapper>
      <div className="">
        <div className="container-fluid top-header" style={{ backgroundColor: "#06933d" }}>
          <div className="container">
            <div className="row text-white p-2">
              <div className="col-lg-4 mt-3">
                <div className="mx-3">
                  <p>Welcome to One Realty</p>
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="header-cta  ">
                  <ul className="d-flex gap-4">
                    <li>
                    
                      <IoCallOutline />
                      <span>07614924920 , 7987537383 </span>
               
                    </li>
                    <li>
                    <CiMail />
                    
                    <span className="m-2 ">
            
                <Link
                  to="mailto:hronerealty@gmail.com"
                 
                  className="text-white"
                >
                  hronerealty@gmail.com
                </Link>
                </span>
                    </li>
                    <li>
                    <IoMdTime />
                      <span>Mon-Fri: 8am - 7pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light ">
                  <div className="container-fluid py-2" id="head">
                    <a className="navbar-brand" href="/" id="logores">
                      <img src={img} alt="" width="200" height="90" />
                    </a>
                    <button
                      className="navbar-toggler text-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                   
                    >
                      <span
                        className="navbar-toggler-icon"
                        
                        
                      ></span>
                    </button>

                    <div
                      className="collapse navbar-collapse align-middle"
                      id="navbarNav"
                    >
                      <ul
                        className="navbar-nav  nav_ul align-items-center mx-auto gap-3"
                        id="navleft"
                      >
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/">Home</Link>
                          </a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/about_us"> About Us</Link>
                          </a>
                        </li>

                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ color: "#06933d" }}
                          >
                            Our Project
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
                            <li>
                              <a className="dropdown-item">
                                <Link to="/Best-SEO-Company-in-Jabalpur">
                                  Completed Project
                                </Link>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item">
                                <Link to="/Best-social-media-marketing-company-in-Jabalpur-India">
                                  Ongoing Project
                                </Link>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item">
                                <Link to="/ppc"> Upcoming Project</Link>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/career">Gallery</Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/blogs">Blogs</Link>
                          </a>
                        </li>

                        <ul className="nav nav-pills">
                          <li className="nav-item">
                            <a
                              className="nav-link "
                              aria-current="page"
                              href="#"
                              id="comm"
                              style={{
                                padding: "0.5rem",
                              }}
                            >
                              <Link to="/contact_us">Contact Us</Link>
                            </a>
                          </li>
                        </ul>
                      </ul>
                      <div className="btn-group"></div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: #06933d;
  }
  li{
    list-style-type: none;
  }
  span{
    margin-left: 0.3rem;
  }
  ul{
    white-space: nowrap;
  }
  .top-header{
    @media screen and (max-width: 768px) {
      display: none;
      
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      display: none;
      
    }
  }

`;
