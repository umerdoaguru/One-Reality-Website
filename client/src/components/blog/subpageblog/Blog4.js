import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



import blog4 from "../../../images/blog4_image.webp";


function Blog4() {
  const handleFooterLink = () => {
    window.scrollTo(0, 0);
  };
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="container">
            <h2 className="mt-5 text-center">
              Essential Checklist for Moving into Your New Home
            </h2>
            <div
              className="underline mx-auto"
              style={{
                height: 3,
                width: "4rem",
                backgroundColor: "#34495E",
                marginTop: 10,
                marginBottom: 10,
              }}
            ></div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center ">
                <div data-aos="fade-right">
                  <img src={blog4} alt="" className="frontimg rounded" />
                </div>
              </div>
              <div className="col-lg-12  mt-3">
                <div data-aos="fade-left">
                  <p>
                    Moving into a new home is an exciting milestone, but it can
                    also be a stressful and overwhelming experience. With so
                    many tasks to manage, it's easy to feel overwhelmed. To help
                    you transition smoothly, we've compiled an essential
                    checklist for moving into your new home. This comprehensive
                    guide covers everything from pre-move preparations to
                    settling in comfortably.
                  </p>
                </div>
                <hr />
              </div>
              {isShowMore && (
                <p>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>1. Plan Ahead</h4>
                      <p>
                        <span>Create a Moving Timeline:-</span>
                        Start planning your move at least a couple of months in
                        advance. Break down tasks week by week to ensure nothing
                        is overlooked.
                        <br />
                        <br />
                        <span>Hire Professional Movers or Rent a Truck:-</span>
                        Decide whether you'll hire professional movers or rent a
                        truck for a DIY move. Book your movers or truck early to
                        secure your preferred date.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>2. Declutter and Organize</h4>
                      <p>
                        <span>Sort and Purge:-</span>
                        Go through your belongings and decide what to keep,
                        donate, or discard. Reducing clutter will make packing
                        easier and save you time and money.
                        <br />
                        <br />
                        <span>Organize by Category:-</span>
                        Group similar items together, such as kitchenware,
                        clothing, and books. This will streamline the packing
                        process and make unpacking more efficient.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>3. Gather Packing Supplies</h4>
                      <p>
                        <span>Boxes and Containers:-</span>
                        Collect sturdy boxes in various sizes, along with
                        plastic containers for fragile items. Label each box
                        with its contents and destination room.
                        <br />
                        <br />
                        <span>Packing Materials:-</span>
                        Stock up on packing tape, bubble wrap, packing paper,
                        and furniture blankets to protect your belongings during
                        the move.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>4. Notify Important Parties</h4>
                      <p>
                        <span>Change of Address:-</span>
                        Update your address with the post office, banks,
                        insurance providers, and any subscription services.
                        Notify friends and family of your new address.
                        <br />
                        <br />
                        <span>Utilities and Services:-</span>
                        Arrange for the transfer or setup of utilities,
                        including electricity, water, gas, internet, and cable.
                        Schedule disconnection at your old home and activation
                        at your new one.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>5. Pack Strategically</h4>
                      <p>
                        <span>Start with Non-Essentials:-</span>
                        Begin packing items you don't use daily, such as
                        seasonal clothing, decorations, and rarely used
                        kitchenware.
                        <br />
                        <br />
                        <span>Pack an Essentials Box:-</span>
                        Prepare a box with essentials for the first few days in
                        your new home, including toiletries, a change of
                        clothes, important documents, and basic kitchen items.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>6. Prepare Your New Home</h4>
                      <p>
                        <span>Clean Thoroughly:-</span>
                        Before moving in, clean your new home thoroughly or hire
                        a cleaning service. Pay special attention to the
                        kitchen, bathrooms, and floors.
                        <br />
                        <br />
                        <span>Change Locks:-</span>
                        For added security, change the locks on all exterior
                        doors. This ensures that you have control over who has
                        access to your home.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>7. Moving Day</h4>
                      <p>
                        <span>Stay Organized:-</span>
                        Keep a checklist of tasks for moving day, such as
                        supervising the movers, conducting a final walk-through
                        of your old home, and ensuring nothing is left behind.
                        <br />
                        <br />
                        <span>Protect Valuables:-</span>
                        Transport valuable items, such as jewelry, important
                        documents, and electronics, with you rather than in the
                        moving truck.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>8. Unpack and Settle In</h4>
                      <p>
                        <span>Unpack Room by Room:-</span>
                        Focus on one room at a time to stay organized. Start
                        with essential areas like the kitchen and bedrooms.
                        <br />
                        <br />
                        <span>Set Up Utilities:-</span>
                        Ensure all utilities are functioning properly. Test the
                        internet connection, check the water heater, and
                        familiarize yourself with the electrical panel.
                      </p>
                    </div>
                    <hr />
                  </div>

                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>9. Home Safety</h4>
                      <p>
                        <span>Check Smoke and Carbon Monoxide Detectors:-</span>
                        Ensure that smoke and carbon monoxide detectors are
                        installed and functioning properly. Replace batteries if
                        needed.
                        <br />
                        <br />
                        <span>Locate Emergency Exits and Tools:-</span>
                        Familiarize yourself with emergency exits, and locate
                        fire extinguishers, the main water shut-off valve, and
                        the electrical panel.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>10. Get to Know Your Neighborhood</h4>
                      <p>
                        <span>Introduce Yourself:-</span>
                        Take the time to introduce yourself to your new
                        neighbors. Building positive relationships can enhance
                        your sense of community and security.
                        <br />
                        <br />
                        <span>Explore Local Amenities:-</span>
                        Explore nearby amenities such as grocery stores, parks,
                        schools, and healthcare facilities. Knowing where
                        essential services are located will help you settle in
                        more comfortably.
                      </p>
                    </div>
                    <hr />
                  </div>

                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>FAQ</h4>
                      <h6>1. When should I start planning my move?</h6>
                      <p>
                        Start planning your move at least two months in advance.
                        This will give you ample time to organize, declutter,
                        and book movers or a rental truck.
                      </p>
                      <h6>2. What should I include in my essentials box?</h6>
                      <p>
                        Your essentials box should include toiletries, a change
                        of clothes, important documents, medications, basic
                        kitchen items, and any other items you'll need for the
                        first few days in your new home.
                      </p>
                      <h6>
                        3. How can I ensure my belongings are protected during
                        the move?
                      </h6>
                      <p>
                        Use sturdy boxes, bubble wrap, and packing paper to
                        protect your belongings. Label each box with its
                        contents and destination room. For valuable items,
                        consider transporting them yourself.
                      </p>
                      <h6>4. What should I do on moving day?</h6>
                      <p>
                        On moving day, stay organized with a checklist,
                        supervise the movers, conduct a final walk-through of
                        your old home, and ensure that all essential items are
                        packed and transported safely.
                      </p>
                      <h6>5. How can I make my new home safe?</h6>
                      <p>
                        Ensure that smoke and carbon monoxide detectors are
                        functioning properly, change the locks on exterior
                        doors, and familiarize yourself with emergency exits and
                        safety tools like fire extinguishers and the main water
                        shut-off valve.
                      </p>
                      <p>
                        By following this essential checklist, you can make your
                        move into your new home as smooth and stress-free as
                        possible. Proper planning and organization will help you
                        settle in quickly and enjoy your new living space.
                      </p>
                    </div>
                    <hr />
                  </div>
                </p>
              )}

              <button
                onClick={toggleReadMoreLess}
                className="btn my-3"
                id="more"
              >
                {isShowMore ? "Read off" : " Read on"}
              </button>
              <button className="btn my-3" id="more">
                <Link
                  to="/blogs"
                  onClick={handleFooterLink}
                  className="text-white text-decoration-none"
                >
                  Blogs_Page
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Blog4;
const Wrapper = styled.div`
  button {
    background-color: #fe7604;
  }
  button:hover {
    background-color: #fe7604;
  }
  .img3 {
    margin-top: 1rem;
    margin-left: -2rem;
    @media screen and (max-width: 768px) {
      margin-left: -8rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      height: 30rem;
      margin-left: -1rem;
      margin-top: -3rem;
    }
  }

  h2 {
    font-size: 34px;
    color: #01614e;
    font-family: "Playfair Display";

    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  p {
    color: #5a626d;
    text-align: justify;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
  h5 {
    font-size: 20px;
    color: #4034db; //card
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  .frontimg {
    width: 50%;
    height: 50%;

    @media screen and (max-width: 768px) {
      height: 15rem;
      width: 100%;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      height: 20rem;
      width: 100%;
    }
  }
  #more {
    width: 10rem;
    margin: 0.5rem;
    color: white;
  }
  span{
    font-weight:bold;
  }
`;
