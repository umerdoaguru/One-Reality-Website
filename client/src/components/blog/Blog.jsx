import React from "react";
import styled from "styled-components";
import Interior2 from "../../images/Interior2.png";
import blog1 from "../../images/blog1_image.jpg";
import blog2 from "../../images/blog2_image.jpg";
import blog3 from "../../images/blog3_image.jpg";
import blog4 from "../../images/blog4_image.webp";
import blog5 from "../../images/blog5_image.jpg";
import { CiUser } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();
  const handleFooterLink = () => {
    window.scrollTo(0, 0);
  };
  const handleLink1 =  () => {
  navigate('/blog1')
  }
  const handleLink2 =  () => {
  navigate('/blog2')
  }
  const handleLink3 =  () => {
  navigate('/blog3')
  }
  const handleLink4 =  () => {
  navigate('/blog4')
  }
  const handleLink5 =  () => {
  navigate('/blog5')
  }
  return (
    <Container>
      <div className="container">
      <div className="heading text-center mt-5">
  
  <h1>Welcome to One Realty Developer Blogs Page</h1>
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
</div>
        <div className="row mt-5">
          <div className="col-md-8 mb-5">
          <div
              className="border border-2 "
              style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
              data-aos="fade-up"
            >
              <span className="">
                <img src={blog2} alt="" style={{ width: "100%" }} />
              </span>
              <div className=" mx-3 lg:mx-5 mb-5">
                {/* <div className="d-flex text-secondary mt-3  ">
                  <span className="d-flex ">
                    <CiUser className="mt-1" />
                    <p className="mx-1">Subham soni</p>
                  </span>
                  <span className="d-flex mx-4">
                    <FaRegComments className="mt-1 " />
                    <p className="mx-1">35 comments</p>
                  </span>
                </div> */}

                <h2 className="">
                Home Renovation Ideas to Increase Property Value

                </h2>
                <br />
                <p>
                Renovating your home is a smart investment that can significantly increase its value and enhance your living experience. Whether you're planning to sell in the near future or simply want to enjoy a more comfortable and attractive home, strategic renovations can yield substantial returns. Here are some effective home renovation ideas to boost your property's value.

                </p>

                <button type="button" className="btn fw-bold rounded-pill"  onClick={() => { handleLink2(); handleFooterLink(); }}>
                  Read more...
                </button>
              </div>
            </div>

                    
            <div
              className="border border-2 mt-3"
              style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                data-aos="fade-up"
            >
              <span className="">
                <img src={blog4} alt="" style={{ width: "100%" }} />
              </span>
              <div className=" mx-3 lg:mx-5 mb-5">
                {/* <div className="d-flex text-secondary mt-3  ">
                  <span className="d-flex ">
                    <CiUser className="mt-1" />
                    <p className="mx-1">Subham soni</p>
                  </span>
                  <span className="d-flex mx-4">
                    <FaRegComments className="mt-1 " />
                    <p className="mx-1">35 comments</p>
                  </span>
                </div> */}

                <h2 className="">
                Essential Checklist for Moving into Your New Home

                </h2>
                <br />
                <p>
                Moving into a new home is an exciting milestone, but it can also be a stressful and overwhelming experience. With so many tasks to manage, it's easy to feel overwhelmed. To help you transition smoothly, we've compiled an essential checklist for moving into your new home. This comprehensive guide covers everything from pre-move preparations to settling in comfortably.


                </p>

                <button type="button" className="btn fw-bold rounded-pill" onClick={() => { handleLink4(); handleFooterLink(); }}>
  Read more...
</button>

              </div>
            </div>





            <div
              className="border border-2 mt-3 "
              style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                data-aos="fade-up"
            >
              <span className="">
                <img src={blog3} alt="" style={{ width: "100%" }} />
              </span>
              <div className=" mx-3 lg:mx-5 mb-5">
                {/* <div className="d-flex text-secondary mt-3  ">
                  <span className="d-flex ">
                    <CiUser className="mt-1" />
                    <p className="mx-1">Subham soni</p>
                  </span>
                  <span className="d-flex mx-4">
                    <FaRegComments className="mt-1 " />
                    <p className="mx-1">35 comments</p>
                  </span>
                </div> */}

                <h2 className="">
                Understanding Real Estate Market Trends in 2024

                </h2>
                <br />
                <p>
                As we move through 2024, the real estate market continues to evolve, influenced by various economic, technological, and social factors. For buyers, sellers, and investors alike, understanding these trends is crucial for making informed decisions. This blog delves into the key real estate market trends of 2024, providing insights into what to expect and how to navigate the changing landscape.

                </p>

                <button type="button" className="btn fw-bold rounded-pill" onClick={() => { handleLink3(); handleFooterLink(); }}>
                  Read more...
                </button>
              </div>
            </div>


         


            

        

       
            <div
              className="border border-2 mt-3"
              style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                data-aos="fade-up"
            >
              <span className="">
                <img src={blog5} alt="" style={{ width: "100%" }} />
              </span>
              <div className=" mx-3 lg:mx-5 mb-5">
                {/* <div className="d-flex text-secondary mt-3  ">
                  <span className="d-flex ">
                    <CiUser className="mt-1" />
                    <p className="mx-1">Subham soni</p>
                  </span>
                  <span className="d-flex mx-4">
                    <FaRegComments className="mt-1 " />
                    <p className="mx-1">35 comments</p>
                  </span>
                </div> */}

                <h2 className="">
                Green Living: The Benefits of Eco-Friendly Homes and Sustainable Real Estate


                </h2>
                <br />
                <p>
                As environmental concerns become increasingly prominent, green living and sustainable real estate are gaining traction among homeowners and investors. Eco-friendly homes and sustainable building practices offer numerous benefits, from reducing environmental impact to enhancing personal well-being. In this blog, we'll explore the advantages of eco-friendly homes and sustainable real estate and why they are becoming essential in today's world.



                </p>

                <button type="button" className="btn fw-bold rounded-pill" onClick={() => { handleLink5(); handleFooterLink(); }}>
                  Read more...
                </button>
              </div>
            </div>

            <div
              className="border border-2 mt-3"
              style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                data-aos="fade-up"
            >
              <span className="">
                <img src={blog1} alt="" style={{ width: "100%" }} />
              </span>
              <div className=" mx-3 lg:mx-5 mb-5">
                {/* <div className="d-flex text-secondary mt-3  ">
                  <span className="d-flex ">
                    <CiUser className="mt-1" />
                    <p className="mx-1">Subham soni</p>
                  </span>
                  <span className="d-flex mx-4">
                    <FaRegComments className="mt-1 " />
                    <p className="mx-1">35 comments</p>
                  </span>
                </div> */}

                <h2 className="">
                 10 Tips for First-Time Home Buyers

                </h2>
                <br />
                <p>
                  Buying your first home is an exciting milestone, but it can also be a daunting process filled with complex decisions and potential pitfalls. To help you navigate this journey, we've compiled ten essential tips for first-time home buyers. Whether you're looking to settle down in Jabalpur or anywhere else, these tips will guide you toward making a sound and satisfying investment.

                </p>

                <button type="button" className="btn fw-bold rounded-pill" onClick={() => { handleLink1(); handleFooterLink(); }}>
                  Read more...
                </button>
              </div>
            </div>

          </div>

          <div className="col-md-4 mb-5" data-aos="zoom-in">
            <div className=" border border-2 pt-3">
              <h3 className="text-center">Search</h3>
              <span className="d-flex justify-content-center mb-2">
                <form className="search-holder">
                  <ul>
                    <li>  <Link to='/blog2'><h6>Home Renovation Ideas to Increase Property Value</h6></Link></li>
                    <li>  <Link to='/blog4'><h6>Essential Checklist for Moving into Your New Home      </h6></Link></li>
                    <li>  <Link to='/blog3'><h6>Understanding Real Estate Market Trends in 2024</h6></Link></li>
                    <li> <Link to='/blog5'><h6>Green Living: The Benefits of Eco-Friendly Homes and Sustainable Real Estate</h6></Link></li>
                    <li>    <Link to='/blog1'><h6>10 Tips for First-Time Home Buyers</h6></Link></li>
                  </ul>
    
    
    
     
  
                </form>
                {/* <button type="Search" className="search ">
                  <IoMdSearch />
                </button> */}
              </span>
            </div>


            <div className=" text-center border border-2 pt-3 mt-3">
              <h3>Follow Us</h3>

              <div className="  d-flex justify-content-center mb-3 fs-3 mt-3">
              <Link
                to="https://www.facebook.com/Onerealty/"
                onClick={handleFooterLink}
                target="_blank"
                rel="norefferel"
                className=" "
              >  <CiFacebook className=" icons mx-3  rounded-circle" /></Link>
               
               <Link
                to="https://www.instagram.com/onerealtydevelopers/"
                onClick={handleFooterLink}
                target="_blank"
                rel="norefferel"
                className=""
              >
                <FaInstagram className=" icons mx-3 rounded-circle" /></Link>
              
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
  h2,
  h3 {
    font-family: "Playfair Display";
    color: #06933d;
  }
  h2{
    margin-top: 2rem;
  }
    
h1{

  color: #01614e;
  font-family: "Playfair Display";
 
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
    height: 50px;
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
