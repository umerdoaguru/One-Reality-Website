import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaPinterestSquare, FaTwitterSquare } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

import img from "../images/company logo.png";

function Footer() {
  const handleFooterLink = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <footer
        style={{
          backgroundColor: "#3e2969",
        }}
      >
        <div className="content ">
          <div className="left box text-black">
            <div className="lower">
              <div className="topic mt-4">Contact us</div>
              <div className="ct text-white ">
                <div className="loc d-flex">
                  <div>
                    <IoLocationOutline />
                  </div>
                  <div>
                    <span className="m-1 text-white">
                      First Floor, Chamber No.: 1 & 2, Datt Residency, <br />{" "}
                      opposite Railway Stadium North, South Civil Lines, <br />
                      Jabalpur, Madhya Pradesh 482001 482002
                    </span>
                  </div>
                </div>

                <br />
                <IoCallOutline />
                <span className="m-2">
                  <Link to="tel:+91-07614924920" className="">
                    07614924920
                  </Link>
                </span>
                <span className="">
                  <Link to="tel:+91-7987537383" className="">
                  7880002259
                  </Link>
                </span>
                <br />

                <br />
                <CiMail />
                <span className="m-2 ">
                  {" "}
                  <Link to="mailto:hronerealty@gmail.com" className="">
                    hronerealty@gmail.com
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="middle box" id="middle2">
            <div className="topic mt-4">Quick Links</div>
            <div className="hd">
              {" "}
              <Link
                to="/Best-Software-Company-In-Jabalpur"
                onClick={handleFooterLink}
                className=""
              >
                Home
              </Link>
            </div>

            <div className="hd">
              {" "}
              <Link
                to="/mobile-development"
                onClick={handleFooterLink}
                className=""
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                to="/Best-Digital-Marketing-Company-in-Jabalpur"
                onClick={handleFooterLink}
                className=""
              >
                Conatct Us
              </Link>
            </div>
            <div>
              <Link
                to="/Best-SEO-Company-in-Jabalpur"
                onClick={handleFooterLink}
                className=""
              >
                Blogs
              </Link>
            </div>
            <div>
              {" "}
              <Link
                to="/graphic-designing"
                onClick={handleFooterLink}
                className=""
              >
                Gallery
              </Link>
            </div>
          </div>
          <div className="middle box">
            <div className="topic mt-4">Our Projects</div>
            <div>
              {" "}
              <Link to="/about_us" onClick={handleFooterLink} className="">
                Aura City
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/contact_us" onClick={handleFooterLink} className="">
                Nirvana City
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/career" onClick={handleFooterLink} className="">
                Nirvana Exoticaa
              </Link>
            </div>

            <div>
              {" "}
              <Link to="/portfolio" onClick={handleFooterLink} className="">
                Nirman nagar
              </Link>
            </div>
          </div>

          <div className="right box mt-4">
            <div className="image">
              <Link to="/" onClick={handleFooterLink}>
                {/* <img src={doaguru} alt="doaguru logo" id="doagurulogo" /> */}
                <img
                  src={img}
                  alt=""
                  id="doagurulogo"
                  width="200"
                  height="90"
                />
              </Link>
            </div>
            <div>
              <div className="topic text-center  mt-4" id="follow">
                Follow us on
              </div>
              <div className="d-flex justify-content-center" id="logo">
                <Link
                  to="https://www.facebook.com/Onerealty/"
                  onClick={handleFooterLink}
                  target="_blank"
                  rel="norefferel"
                  className=" m-2"
                >
                  <AiFillFacebook
                    size="30px"
                    onMouseOver={({ target }) =>
                      (target.style.color = "#3b5998")
                    }
                    onMouseOut={({ target }) => (target.style.color = "white")}
                  />
                </Link>

                <Link
                  to="https://www.instagram.com/onerealtydevelopers/"
                  onClick={handleFooterLink}
                  target="_blank"
                  rel="norefferel"
                  className=" m-2"
                >
                  <AiFillInstagram
                    size="30px"
                    onMouseOver={({ target }) =>
                      (target.style.color = "#da1e1e")
                    }
                    onMouseOut={({ target }) => (target.style.color = "white")}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*
         */}
      </footer>
    </Container>
  );
}

export default Footer;
const Container = styled.div`
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .span-li {
    padding: 5px;
  }
  .content {
    max-width: 1150px;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .content .topic {
    font-size: 22px;
    font-weight: 600;
    color: #f3ecec;
    margin-bottom: 16px;
  }

  .content .middle a {
    line-height: 32px;
  }

  .bottom {
    width: 100%;
    text-align: right;
    color: #f6f1f1;
    padding: 0 40px 5px 0;
  }

  .image img {
    width: 14rem;
  }
`;
