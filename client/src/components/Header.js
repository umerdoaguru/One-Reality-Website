// import React from "react";
// import img from "../images/company_logo.png";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { IoCallOutline } from "react-icons/io5";
// import { CiMail } from "react-icons/ci";
// import { IoMdTime } from "react-icons/io";
// import bgcolor from '../'

// function Header() {
//   return (
//     <Wrapper>
//       <div className="">
//         {/* <div className="container-fluid top-header" style={{ backgroundColor: "#006c28" }}> */}
//         <div className="container-fluid top-header" style={{ backgroundColor: "#01614e" }}>
//           <div className="container">
//             <div className="row text-white p-2" >
//               <div className="col-lg-4 mt-3">
//                 <div className="mx-3">
//                   <p>Welcome to One Realty</p>
//                 </div>
//               </div>
//               <div className="col-lg-6 mt-3">
//                 <div className="header-cta  ">
//                   <ul className="d-flex gap-4">
//                     <li>
                    
//                       <IoCallOutline />
//                       <span>07614924920 , 7987537383 </span>
               
//                     </li>
//                     <li>
//                     <CiMail />
                    
//                     <span className="m-2 ">
            
//                 <Link
//                   to="mailto:hronerealty@gmail.com"
                 
//                   className="text-white"
//                 >
//                   hronerealty@gmail.com
//                 </Link>
//                 </span>
//                     </li>
//                     <li>
//                     <IoMdTime />
//                       <span>Mon-Fri: 8am - 7pm</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container-fluid bg-light">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-lg-12">
//                 <nav className="navbar navbar-expand-lg navbar-light ">
//                   <div className="container-fluid py-2" id="head">
//                     <a className="navbar-brand" href="/" id="logores">
//                       <img src={img} alt="" width="200" height="90" />
//                     </a>
//                     <button
//                       className="navbar-toggler text-light"
//                       type="button"
//                       data-bs-toggle="collapse"
//                       data-bs-target="#navbarNav"
//                       aria-controls="navbarNav"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
                   
//                     >
//                       <span
//                         className="navbar-toggler-icon"
                        
                        
//                       ></span>
//                     </button>

//                     <div
//                       className="collapse navbar-collapse align-middle"
//                       id="navbarNav"
//                     >
//                       <ul
//                         className="navbar-nav  nav_ul align-items-center mx-auto gap-3"
//                         id="navleft"
//                       >
//                         <li className="nav-item">
//                           <a className="nav-link">
//                             <Link to="/">Home</Link>
//                           </a>
//                         </li>

//                         <li className="nav-item">
//                           <a className="nav-link">
//                             <Link to="/about"> About Us</Link>
//                           </a>
//                         </li>

//                         <div className="btn-group">
//                           <button
//                             type="button"
//                             className="btn dropdown-toggle"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                             style={{ color: "#01614e" }}
//                           >
//                             Our Project
//                           </button>
//                           <ul
//                             className="dropdown-menu"
//                             aria-labelledby="navbarDropdown"
//                           >
//                             <li>
//                               <a className="dropdown-item">
//                                 <Link to="/Best-SEO-Company-in-Jabalpur">
//                                   Completed Project
//                                 </Link>
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item">
//                                 <Link to="/Best-social-media-marketing-company-in-Jabalpur-India">
//                                   Ongoing Project
//                                 </Link>
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item">
//                                 <Link to="/ppc"> Upcoming Project</Link>
//                               </a>
//                             </li>
//                           </ul>
//                         </div>

//                         <li className="nav-item">
//                           <a className="nav-link">
//                             <Link to="/gallery">Gallery</Link>
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link">
//                             <Link to="/blogs">Blogs</Link>
//                           </a>
//                         </li>

//                         <ul className="nav nav-pills">
//                           <li className="nav-item">
//                             <a
//                               className="nav-link "
//                               aria-current="page"
//                               href="#"
//                               id="comm"
//                               style={{
//                                 padding: "0.5rem",
//                               }}
//                             >
//                               <Link to="/contact">Contact Us</Link>
//                             </a>
//                           </li>
//                         </ul>
//                       </ul>
//                       <div className="btn-group"></div>
//                     </div>
//                   </div>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// export default Header;
// const Wrapper = styled.div`
//   a {
//     text-decoration: none;
//     /* color: #006c28; */
//     color: #01614e;
//     font-size:1rem;
//   }
//   li{
//     list-style-type: none;
//   }
//   span{
//     margin-left: 0.3rem;
//   }
//   ul{
//     white-space: nowrap;
//   }
//   .top-header{
//     @media screen and (max-width: 768px) {
//       display: none;
      
//     }
//     @media screen and (min-width: 768px) and (max-width: 1024px) {
//       display: none;
      
//     }
//   }

// `;




// import React from "react";
// import img from "../images/company_logo.png";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { IoCallOutline } from "react-icons/io5";
// import { CiMail } from "react-icons/ci";
// import { IoMdTime } from "react-icons/io";

// function Header() {
//   return (
//     <Wrapper>
//       <div className="">
//         <div className="container-fluid top-header" style={{ backgroundColor: "#01614e" }}>
//           <div className="container">
//             <div className="row text-white p-2">
//               <div className="col-lg-4 mt-3">
//                 <div className="mx-3">
//                   <p>Welcome to One Realty</p>
//                 </div>
//               </div>
//               <div className="col-lg-6 mt-3">
//                 <div className="header-cta">
//                   <ul className="d-flex gap-4">
//                     <li>
//                       <IoCallOutline />
//                       <span>07614924920, 7987537383</span>
//                     </li>
//                     <li>
//                       <CiMail />
//                       <span className="m-2">
//                         <Link to="mailto:hronerealty@gmail.com" className="text-white">
//                           hronerealty@gmail.com
//                         </Link>
//                       </span>
//                     </li>
//                     <li>
//                       <IoMdTime />
//                       <span>Mon-Fri: 8am - 7pm</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container-fluid bg-light">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-lg-12">
//                 <nav className="navbar navbar-expand-lg navbar-light">
//                   <div className="container-fluid py-2" id="head">
//                     <a className="navbar-brand" href="/" id="logores">
//                       <img src={img} alt="" width="200" height="90" />
//                     </a>
//                     <button
//                       className="navbar-toggler text-light"
//                       type="button"
//                       data-bs-toggle="collapse"
//                       data-bs-target="#navbarNav"
//                       aria-controls="navbarNav"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                     >
//                       <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse align-middle" id="navbarNav">
//                       <ul className="navbar-nav nav_ul align-items-center mx-auto gap-3" id="navleft">
//                         <li className="nav-item">
//                           <Link className="nav-link" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                           <Link className="nav-link" to="/about">About Us</Link>
//                         </li>
//                         <li className="nav-item dropdown">
//                           <button
//                             className="btn dropdown-toggle"
//                             type="button"
//                             id="dropdownMenuButton"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                             style={{ color: "#01614e" }}
//                           >
//                             Our Project
//                           </button>
//                           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                             <li className="dropdown-submenu">
//                               <Link className="dropdown-item dropdown-toggle " to="#"> Completed Project</Link>
//                               <ul className="dropdown-menu">
//                                 <li>
//                                   <Link className="dropdown-item" to="/nirvana-city">Nirvana City</Link>
//                                 </li>
//                                 <li>
//                                   <Link className="dropdown-item" to="/aura-city">Aura City</Link>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="/Best-social-media-marketing-company-in-Jabalpur-India">Ongoing Project</Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="/ppc">Upcoming Project</Link>
//                             </li>
//                           </ul>
//                         </li>
//                         <li className="nav-item">
//                           <Link className="nav-link" to="/gallery">Gallery</Link>
//                         </li>
//                         <li className="nav-item">
//                           <Link className="nav-link" to="/blogs">Blogs</Link>
//                         </li>
//                         <li className="nav-item">
//                           <Link className="nav-link" to="/contact">Contact Us</Link>
//                         </li>
//                       </ul>
//                       <div className="btn-group"></div>
//                     </div>
//                   </div>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// export default Header;

// const Wrapper = styled.div`
//   a {
//     text-decoration: none;
//     color: #01614e;
//     font-size: 1rem;
//   }
//   li {
//     list-style-type: none;
//   }
//   span {
//     margin-left: 0.3rem;
//   }
//   ul {
//     white-space: nowrap;
//   }
//   .top-header {
//     @media screen and (max-width: 768px) {
//       display: none;
//     }
//     @media screen and (min-width: 768px) and (max-width: 1024px) {
//       display: none;
//     }
//   }
//   .dropdown-submenu {
//     position: relative;
//   }
//   .dropdown-submenu .dropdown-menu {
//     top: 0;
//     left: 100%;
//     margin-top: -1px;
//   }
// `;

import React from "react";
import img from "../images/company_logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Wrapper>
      <div className="">
        <div className="container-fluid top-header" style={{ backgroundColor: "#01614e" }}>
          <div className="container">
            <div className="row text-white p-2">
              <div className="col-lg-4 mt-3">
                <div className="mx-3">
                  <p>Welcome to One Realty</p>
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="header-cta">
                  <ul className="d-flex gap-4">
                    <li>
                      <IoCallOutline />
                      <span>  <Link
                  to="tel:+91-07614924920"
                 
                  className="text-white"
                >
                
                 
              07614924920  </Link></span>,<span><Link
                  to="tel:+91-7880002259"
                 
                  className="text-white"
                >7880002259</Link></span>
                    </li>
                    <li>
                      <CiMail />
                      <span className="m-2">
                        <Link to="mailto:hronerealty@gmail.com" className="text-white">
                          hronerealty@gmail.com
                        </Link>
                      </span>
                    </li>
                    <li>
                      <IoMdTime />
                      <span>Mon-Sat: 10am - 7pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-light">
          <div className="container">
            <Navbar expand="lg" className="navbar-light py-2">
              <Container fluid>
                <Navbar.Brand href="/">
                  <img src={img} alt="" width="200" height="90" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                  <Nav className="mx-auto gap-3">
                    <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    <NavDropdown title="Our Project" id="basic-nav-dropdown" style={{ color: "#01614e" }}>
                      <NavDropdown title="Completed Project" id="completed-project-dropdown" drop="end">
                        <NavDropdown.Item as={Link} to="/aura-city">Aura City</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/nirvana-city">Nirvana City</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/nirvana-exoticaa">Nirvana Exoticaa</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/nirman-nagar">Nirman Nagar</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Ongoing Project" id="ongoing-project-dropdown" drop="end">
                      <NavDropdown.Item as={Link} to="/nirvana-home">Nirvana Homes</NavDropdown.Item>
                        </NavDropdown>
                      
                      <NavDropdown title="Upcoming Project" id="upcoming-project-dropdown" drop="end">
                      <NavDropdown.Item as={Link} >Coming Soon</NavDropdown.Item>
                        </NavDropdown>
                      
                      
                    </NavDropdown>
                    <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                    <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
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
    color: #01614e;
    font-size: 1.05rem;
    
  }
  li {
    list-style-type: none;
  }
  span {
    margin-left: 0.3rem;
  }
  ul {
    white-space: nowrap;
  }
  .top-header {
    @media screen and (max-width: 768px) {
      display: none;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      display: none;
    }
  }
  
`;
