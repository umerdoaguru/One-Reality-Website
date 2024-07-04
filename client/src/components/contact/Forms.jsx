import React from "react";
import styled from "styled-components";
import { IoTime } from "react-icons/io5";
import { CiMap } from "react-icons/ci";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoReceiptOutline } from "react-icons/io5";

function Forms() {
  return (
    <>
      <Container>
        <div className="container mt-5">
          <div className="row d-flex align-items-center ">
            <div className=" Address-detail col-md-4 fs-bold pt-5">
              <div>
                <div className=" icons d-flex align-items-center justify-content-center ">
                  <CiMap className="fs-1 " />
                </div>
                <h3 className="pt-2">Office Address</h3>
                <h6>382, Wright Town</h6>
                <h6>Jabalpur</h6>
              </div>
              <hr />
              <div>
                <div className=" icons d-flex align-items-center justify-content-center ">
                  <IoTime className=" fs-1" />
                </div>
                <h3 className="pt-2">Working Hours</h3>
                <h6>Monday to Friday 09:00 to 18:30</h6>
                <h6>Saturday we work until 15:30</h6>
              </div>
              <hr />
              <div className="pb-5">
                <div className=" icons d-flex align-items-center justify-content-center ">
                  <FaEnvelopeOpenText className=" fs-3 " />
                </div>
                <h3 className="pt-2">Message Us</h3>
                <h6>We are always with you to solve your problem</h6>
                <h6>
                  mail us : <a href="">support@example.com</a>
                </h6>
              </div>
            </div>

            <div className="col-md-8 px-5 mt-5 md:mt-0">
              <form className=" form-outline pb-5">
                <div data-mdb-input-init class="form-outline mb-4">
                  <label class="form-label fw-bold " for="form4Example1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="form4Example1"
                    class="form-control py-3 "
                    placeholder="Enter Your Full Name"
                    required
                  />
                  <FaUser className=" icon-position " />
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <label class="form-label fw-bold" for="form4Example2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form4Example2"
                    class="form-control py-3"
                    placeholder="Enter Your Email ID"
                    required
                  />
                  <MdEmail className=" icon-position " />
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <label class="form-label fw-bold " for="form4Example1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="form4Example1"
                    class="form-control py-3 "
                    placeholder="Disscussion Subject"
                    required
                  />
                  <IoReceiptOutline className=" icon-position " />
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <label class="form-label fw-bold" for="form4Example3">
                    Message
                  </label>
                  <textarea
                    class="form-control py-3"
                    id="form4Example3"
                    rows="4"
                    placeholder="Description"
                    required
                  ></textarea>
                </div>

                <button
                  data-mdb-ripple-init
                  type="button"
                  class="btn btn-primary btn-lg  md:fw-bold  rounded-pill mb-4 w-25"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Forms;
const Container = styled.div`
  .Address-detail {
    background-color: #3e2969;
  }
  h3,
  h6 {
    font-family: "Playfair Display";
    color: #d29751;
  }
  hr {
    color: #d29751;
  }
  .icons {
    color: white;
    background-color: #d29751;
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
  .form-outline {
    position: relative;
  }
  .icon-position {
    position: absolute;
    right: 20px;
    top: 50%;

    font-size: 1.5rem;
    color: #3e2969;
  }
  .form-label {
    color: #d29751;
  }
`;
