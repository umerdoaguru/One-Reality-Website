import React from "react";
import styled from "styled-components";
import Interior2 from "../../images/Interior2.png";
import { CiUser } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

function Blog() {
  return (
    <Container>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8 mb-5">
            <div
              className="border border-2"
              style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <span className="">
                <img src={Interior2} alt="" style={{ width: "100%" }} />
              </span>
              <div className=" mx-3 lg:mx-5 mb-5">
                <div className="d-flex text-secondary mt-3  ">
                  <span className="d-flex ">
                    <CiUser className="mt-1" />
                    <p className="mx-1">Subham soni</p>
                  </span>
                  <span className="d-flex mx-4">
                    <FaRegComments className="mt-1 " />
                    <p className="mx-1">35 comments</p>
                  </span>
                </div>

                <h1 className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laudantium odit explicabo architecto consequatur voluptatem
                  corrupti libero inventore aperiam aut, error iure.
                  Voluptatibus cupiditate deserunt expedita magni voluptate!
                  Dolorum accusantium provident laudantium hic eligendi amet
                  vero, suscipit voluptatum cum quaerat molestiae odio excepturi
                  eum iure id sapiente quas! Velit, architecto neque?
                </p>

                <button type="button" className="btn fw-bold rounded-pill">
                  Read more...
                </button>
              </div>
            </div>

            <div
              className="border border-2 mt-5"
              style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <span className="">
                <img src={Interior2} alt="" style={{ width: "100%" }} />
              </span>
              <div className=" mx-3 lg:mx-5 mb-5">
                <div className="d-flex text-secondary mt-3  ">
                  <span className="d-flex ">
                    <CiUser className="mt-1" />
                    <p className="mx-1">Subham soni</p>
                  </span>
                  <span className="d-flex mx-4">
                    <FaRegComments className="mt-1 " />
                    <p className="mx-1">35 comments</p>
                  </span>
                </div>

                <h1 className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laudantium odit explicabo architecto consequatur voluptatem
                  corrupti libero inventore aperiam aut, error iure.
                  Voluptatibus cupiditate deserunt expedita magni voluptate!
                  Dolorum accusantium provident laudantium hic eligendi amet
                  vero, suscipit voluptatum cum quaerat molestiae odio excepturi
                  eum iure id sapiente quas! Velit, architecto neque?
                </p>

                <button type="button" className="btn fw-bold rounded-pill">
                  Read more...
                </button>
              </div>
            </div>

            <div
              className="border border-2 mt-5 "
              style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <span className="">
                <img src={Interior2} alt="" style={{ width: "100%" }} />
              </span>
              <div className=" mx-3 lg:mx-5 mb-5">
                <div className="d-flex text-secondary mt-3  ">
                  <span className="d-flex ">
                    <CiUser className="mt-1" />
                    <p className="mx-1">Subham soni</p>
                  </span>
                  <span className="d-flex mx-4">
                    <FaRegComments className="mt-1 " />
                    <p className="mx-1">35 comments</p>
                  </span>
                </div>

                <h1 className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laudantium odit explicabo architecto consequatur voluptatem
                  corrupti libero inventore aperiam aut, error iure.
                  Voluptatibus cupiditate deserunt expedita magni voluptate!
                  Dolorum accusantium provident laudantium hic eligendi amet
                  vero, suscipit voluptatum cum quaerat molestiae odio excepturi
                  eum iure id sapiente quas! Velit, architecto neque?
                </p>

                <button type="button" className="btn fw-bold rounded-pill">
                  Read more...
                </button>
              </div>
            </div>

            <nav aria-label="...">
              <ul class="pagination pagination-circle mt-5">
                <li class="page-item">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item active text-dark" aria-current="page">
                  <a
                    class="page-link"
                    // style={{
                    //   backgroundColor: "#06933D",
                    //   borderColor: "orange",
                    //   color: "black",
                    // }}
                    href="#"
                  >
                    2 <span class="visually-hidden ">(current)</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-4 mb-5">
            <div className=" text-center border border-2 pt-3">
              <h3>Search</h3>
              <span className="d-flex justify-content-center mb-5">
                <form className="search-holder">
                  <input type="text" placeholder="Enter your keywords..." />
                </form>
                <button type="Search" className="search ">
                  <IoMdSearch />
                </button>
              </span>
            </div>

            <div className=" text-center border border-2 pt-3 mt-5">
              <h3>Instagram</h3>

              <div className="col-md-12 d-flex justify-content-center mb-2  ">
                <div className="col-md-3 ">
                  <img src={Interior2} alt="" style={{ width: "90%" }} />
                </div>
                <div className="col-md-3">
                  <img src={Interior2} alt="" style={{ width: "90%" }} />
                </div>
                <div className="col-md-3">
                  <img src={Interior2} alt="" style={{ width: "90%" }} />
                </div>
              </div>

              <div className="col-md-12 d-flex justify-content-center mb-2 ">
                <div className="col-md-3 ">
                  <img src={Interior2} alt="" style={{ width: "90%" }} />
                </div>
                <div className="col-md-3">
                  <img src={Interior2} alt="" style={{ width: "90%" }} />
                </div>
                <div className="col-md-3">
                  <img src={Interior2} alt="" style={{ width: "90%" }} />
                </div>
              </div>

              <div className="col-md-12 d-flex justify-content-center mb-5 ">
                <div className="col-md-3 ">
                  <img src={Interior2} alt="" style={{ width: "90%" }} />
                </div>
                <div className="col-md-3">
                  <img src={Interior2} alt="" style={{ width: "90%" }} />
                </div>
                <div className="col-md-3">
                  <img src={Interior2} alt="" style={{ width: "90%" }} />
                </div>
              </div>
            </div>

            <div className=" text-center border border-2 pt-3 mt-5">
              <h3>Follow Us</h3>

              <div className="  d-flex justify-content-center mb-3 fs-3 mt-3">
                <CiFacebook className=" icons mx-3  rounded-circle" />
                <FaInstagram className=" icons mx-3 rounded-circle" />
                <FaXTwitter className=" icons mx-3  rounded-circle" />
              </div>
            </div>

            <div className=" text-center border border-2 pt-3 mt-5">
              <h3>Categories</h3>
              <br />
              <div className="px-5">
                <span className="d-flex justify-content-between ">
                  <p>Lifestyle</p>
                  <p>(05)</p>
                </span>
                <hr />
                <span className="d-flex justify-content-between ">
                  <p>Travel</p>
                  <p>(05)</p>
                </span>
                <hr />
                <span className="d-flex justify-content-between ">
                  <p>Fashion</p>
                  <p>(05)</p>
                </span>
                <hr />
                <span className="d-flex justify-content-between ">
                  <p>Music</p>
                  <p>(05)</p>
                </span>
                <hr />
                <span className="d-flex justify-content-between ">
                  <p>Branding</p>
                  <p>(05)</p>
                </span>
              </div>
            </div>

            <div className=" text-center border border-2 pt-3 mt-5 pb-5">
              <h3>Feeds</h3>
              <br />
              <div className="px-5 ">
                <span className="d-flex justify-content-between gap-2">
                  <img src={Interior2} alt="" className="feed-img" />
                  <span className="feed-text  ">
                    <a href="">Lorem ipsum dolor sit amet.</a>
                    <span
                      className="d-flex   mt-2 gap-1"
                      style={{ marginLeft: "5px" }}
                    >
                      <IoTime className="mt-1 fs-5" />
                      <p>3 Hours ago</p>
                    </span>
                  </span>
                </span>
              </div>

              <div className="px-5 mt-3 ">
                <span className="d-flex justify-content-between gap-2">
                  <img src={Interior2} alt="" className="feed-img" />
                  <span className="feed-text  ">
                    <a href="">Lorem ipsum dolor sit amet.</a>
                    <span
                      className="d-flex mt-2 gap-1"
                      style={{ marginLeft: "5px" }}
                    >
                      <IoTime className="mt-1 fs-5" />
                      <p>3 Hours ago</p>
                    </span>
                  </span>
                </span>
              </div>

              <div className="px-5 mt-3 ">
                <span className="d-flex justify-content-between gap-2">
                  <img src={Interior2} alt="" className="feed-img" />
                  <span className="feed-text  ">
                    <a href="">Lorem ipsum dolor sit amet.</a>
                    <span
                      className="d-flex mt-2 gap-1"
                      style={{ marginLeft: "5px" }}
                    >
                      <IoTime className="mt-1 fs-5" />
                      <p>3 Hours ago</p>
                    </span>
                  </span>
                </span>
              </div>

              <div className="px-5 mt-3 ">
                <span className="d-flex justify-content-between gap-2">
                  <img src={Interior2} alt="" className="feed-img" />
                  <span className="feed-text  ">
                    <a href="">Lorem ipsum dolor sit amet.</a>
                    <span
                      className="d-flex mt-2 gap-1"
                      style={{ marginLeft: "5px" }}
                    >
                      <IoTime className="mt-1 fs-5" />
                      <p>3 Hours ago</p>
                    </span>
                  </span>
                </span>
              </div>

              <div className=" feed px-5 mt-3 ">
                <span className="d-flex justify-content-between gap-2">
                  <img src={Interior2} alt="" className="feed-img" />
                  <span className="feed-text  ">
                    <a href="">Lorem ipsum dolor sit amet.</a>
                    <span
                      className="d-flex mt-2 gap-1"
                      style={{ marginLeft: "5px" }}
                    >
                      <IoTime className="mt-1 fs-5" />
                      <p>3 Hours ago</p>
                    </span>
                  </span>
                </span>
              </div>
            </div>

            <div className=" text-center border border-2 pt-3 mt-5 pb-5">
              <h3>Tags</h3>
              <br />
              <div className="px-5 ">
                <div className=" d-flex align-items-center justify-content-center gap-2 ">
                  <span className=" tag-text  border text-center tag-text">
                    Lifestyle
                  </span>

                  <span className="border text-center tag-text">Travel</span>

                  <span className="border text-center tag-text">Fashion</span>
                </div>

                <div className=" d-flex  justify-content-center align-items-center gap-2 mt-2 ">
                  <span className="  border text-center tag-text">
                    Lifestyle
                  </span>

                  <span className="border text-center tag-text">Travel</span>

                  <span className="border text-center tag-text ">Fashion</span>
                </div>

                <div className=" d-flex justify-content-center align-items-center gap-2 mt-2">
                  <span className=" tag-text border text-center ">
                    Lifestyle
                  </span>

                  <span className=" tag-text border text-center ">Travel</span>

                  <span className=" tag-text border text-center ">Fashion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Blog;

const Container = styled.div`
  .btn {
    border-color: orange;
  }

  .btn:hover {
    background-color: orange;
    color: white;
  }
  .search {
    background-color: orange;
    color: white;
    border: 0;
  }
  .icons:hover {
    background: orange;
    color: white;
  }
  h1,
  h3 {
    font-family: "Playfair Display";
    color: #06933d;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: #06933d;
  }
  input {
    height: 50px;
    width: 250px;
    border: 0;
    background-color: rgba(0, 0, 0, 0.05);
    color: white;
  }
  .search {
    width: 60px;
    height: 30px;
    font-size: 30px;
  }
  .feed-img {
    width: 100px;
  }
  .tag-text {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  @media (min-width: 1000px) and (max-width: 1600px) {
    input {
      width: 220px;
      height: 50px;
      font-size: 20px;
    }

    .search {
      width: 50px;
      font-size: 20px;
      height: 50px;
    }
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    input {
      width: 130px;
      height: 30px;
      font-size: 10px;
    }

    .search {
      width: 30px;
      font-size: 20px;
    }
    .feed-img {
      width: 60px;
      height: 50px;
    }
    .feed-text {
      font-size: 7px;
    }

    .tag-text {
      padding-left: 5px;
      padding-right: 5px;
      padding-top: 4px;
      padding-bottom: 4px;
    }
  }
  @media (max-width: 600px) {
    .search {
      width: 40px;
      height: 50px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1600px) {
    .tag-text {
      padding-left: 25px;
      padding-right: 25px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`;
