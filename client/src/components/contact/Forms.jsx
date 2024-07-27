import React, { useState } from "react";
import styled from "styled-components";
import { IoTime } from "react-icons/io5";
import { CiMap } from "react-icons/ci";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoReceiptOutline } from "react-icons/io5";
import axios from "axios";
import cogoToast from "cogo-toast";

function Forms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      // Submit the patient test details
      const response = await axios.post(`https://one-realty.in/api/contact`, {
        name: name,
        email: email,
        subject: subject,
        message: message,
      });

      // Check if the submission was successful
      if (response.data.success === true) {
        // Display success message
        cogoToast.success(`${response.data.message}`);

        // Clear form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        console.error("Error uploading patient test data");
      }
    } catch (error) {
      console.error("Server Error:", error.message);
    }
  };

  return (
    <>
      <Container>
        <div className="container mt-5">
          <div className="row d-flex align-items-center ">
            <div className=" Address-detail col-md-4 fs-bold pt-5"data-aos="fade-right"
     data-aos-offset="60"
     data-aos-easing="ease-in-sine">
              <div>
                <div className=" icons d-flex align-items-center justify-content-center ">
                  <CiMap className="fs-1 " />
                </div>
                <h3 className="pt-2">Office Address</h3>
                <h6>
                  First Floor, Chamber No. 1 & 2, Datt Residency, opposite
                  Railway Stadium North, South Civil Lines,
                </h6>
                <h6>Jabalpur, Madhya Pradesh 482001</h6>
              </div>
              <hr />
              <div>
                <div className=" icons d-flex align-items-center justify-content-center ">
                  <IoTime className=" fs-1" />
                </div>
                <h3 className="pt-2">Working Hours</h3>
                <h6>Sunday to Saturday </h6>
                <h6>10:00 Am to 7:00 Pm</h6>
              </div>
              <hr />
              <div className="pb-5">
                <div className=" icons d-flex align-items-center justify-content-center ">
                  <FaEnvelopeOpenText className=" fs-3 " />
                </div>
                <h3 className="pt-2">Message Us</h3>
                <h6>We are always with you to solve your problem</h6>
                <h6>
                  mail us : <a href="mailto:hronerealty@gmail.com">hronerealty@gmail.com
                  </a>
                </h6>
              </div>
            </div>

            <div className="col-md-8 px-5 mt-5 md:mt-0"data-aos="fade-left"
     data-aos-offset="60"
     data-aos-easing="ease-in-sine">
              <form className=" form-outline pb-5">
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label fw-bold " htmlFor="form4Example1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="form4Example1"
                    className="form-control py-3 "
                    placeholder="Enter Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <FaUser className=" icon-position " />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label fw-bold" htmlFor="form4Example2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form4Example2"
                    className="form-control py-3"
                    placeholder="Enter Your Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <MdEmail className=" icon-position " />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label fw-bold " htmlFor="form4Example1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="form4Example1"
                    className="form-control py-3 "
                    placeholder="Discussion Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                  <IoReceiptOutline className=" icon-position " />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label fw-bold" htmlFor="form4Example3">
                    Message
                  </label>
                  <textarea
                    className="form-control py-3"
                    id="form4Example3"
                    rows="4"
                    placeholder="Description"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button
                  data-mdb-ripple-init
                  type="button"
                  className="btn btn-primary btn-lg  md:fw-bold  rounded-pill mb-4 w-25"
                  onClick={handleSubmit}
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
    background-color: #01614e;
  }
  h3,
  h6 {
    font-family: "Playfair Display";
    color: white;
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
    color: #01614e;
  }
  .form-label {
    color: #01614e;
  }
`;
