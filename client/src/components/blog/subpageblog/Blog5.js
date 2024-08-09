import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


import blog5 from "../../../images/blog5_image.jpg";

function Blog5() {
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
            Green Living: The Benefits of Eco-Friendly Homes and Sustainable Real Estate

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
                  <img src={blog5} alt="" className="frontimg rounded" />
                </div>
              </div>
              <div className="col-lg-12  mt-3">
                <div data-aos="fade-left">
                  <p>
                  As environmental concerns become increasingly prominent, green living and sustainable real estate are gaining traction among homeowners and investors. Eco-friendly homes and sustainable building practices offer numerous benefits, from reducing environmental impact to enhancing personal well-being. In this blog, we'll explore the advantages of eco-friendly homes and sustainable real estate and why they are becoming essential in today's world.

                  </p>
                </div>
                <hr />
              </div>
              {isShowMore && (
                <p>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>1. Environmental Benefits
                      </h4>
                      <p>
                        <span>Reduction of Carbon Footprint:-
                        </span>
                        Eco-friendly homes are designed to minimize energy consumption and reduce greenhouse gas emissions. Features such as solar panels, energy-efficient appliances, and high-quality insulation help lower the home's carbon footprint. By using renewable energy sources and reducing reliance on fossil fuels, green homes contribute to a cleaner environment and combat climate change.

                        <br />
                        <br />
                        <span>Conservation of Natural Resources
                        :-</span>
                        Sustainable real estate emphasizes the use of eco-friendly materials and construction practices that conserve natural resources. Recycled, reclaimed, or sustainably sourced materials reduce the demand for new resources and decrease waste. Green building practices also often include water-saving fixtures and systems that reduce water consumption and protect valuable water resources.

                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>2. Financial Benefits
                      </h4>
                      <p>
                        <span>Lower Utility Bills
                        :-</span>
                        One of the most immediate benefits of eco-friendly homes is the potential for lower utility bills. Energy-efficient appliances, smart thermostats, and proper insulation reduce energy consumption, leading to significant savings on electricity and heating costs. Solar panels can further decrease or even eliminate monthly utility expenses by generating your own electricity.

                        <br />
                        <br />
                        <span>Increased Property Value
                        :-</span>
                        Green homes often have higher resale values compared to traditional properties. Buyers are increasingly seeking homes with energy-efficient features and sustainable credentials. Investing in eco-friendly upgrades can enhance your property's marketability and appeal to environmentally conscious buyers, potentially yielding a higher return on investment.

                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>3. Health and Comfort Benefits
                      </h4>
                      <p>
                        <span>Improved Indoor Air Quality
                        :-</span>
                        Eco-friendly homes typically use non-toxic, low-VOC (volatile organic compound) materials and include advanced ventilation systems. These features improve indoor air quality, reducing the risk of respiratory issues and allergies. Better air quality contributes to a healthier living environment, which is particularly beneficial for individuals with sensitivities or pre-existing health conditions.

                        <br />
                        <br />
                        <span>Enhanced Comfort
                        :-</span>
                        Sustainable homes are often designed with superior insulation and energy-efficient windows, which help maintain consistent indoor temperatures. This results in a more comfortable living environment year-round. Green homes also typically incorporate natural lighting, which enhances the ambiance and creates a more pleasant living space.

                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>4. Long-Term Sustainability
                      </h4>
                      <p>
                        <span>Durability and Low Maintenance
                        :-</span>
                        Eco-friendly homes are built with durable, high-quality materials that often require less maintenance over time. Sustainable construction practices emphasize longevity and resilience, reducing the need for frequent repairs and replacements. This not only extends the lifespan of the home but also minimizes the environmental impact associated with maintenance and renovation.

                        <br />
                        <br />
                        <span>Future-Proofing
                        :-</span>
                        As environmental regulations and standards become more stringent, investing in sustainable real estate can future-proof your property. Green homes are designed to meet or exceed current building codes and energy standards, ensuring compliance with future regulations and protecting your investment from potential devaluation due to outdated practices.

                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>5. Community and Social Benefits
                      </h4>
                      <p>
                        <span>Promotion of Sustainable Living:-
                        </span>
                        Living in an eco-friendly home encourages a sustainable lifestyle and sets an example for others. By adopting green practices, you contribute to a culture of environmental responsibility and inspire others to make eco-conscious choices. Community initiatives and neighborhood sustainability programs can also benefit from the increased awareness and support fostered by green living.

                        <br />
                        <br />
                        <span>Support for Local Economies:-
                        </span>
                        Sustainable real estate often involves working with local builders, suppliers, and contractors who prioritize eco-friendly practices. Supporting these businesses helps boost local economies and promotes the growth of the green building industry. Additionally, eco-friendly homes can enhance the overall appeal of a community, attracting environmentally-minded individuals and families.

                      </p>
                    </div>
                    <hr />
                  </div>
                 

                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>FAQ</h4>
                      <h6>1. What are some common features of eco-friendly homes?
                      </h6>
                      <p>
                      Common features of eco-friendly homes include energy-efficient appliances, solar panels, high-quality insulation, water-saving fixtures, and the use of sustainable or recycled materials. These features work together to reduce energy consumption, conserve resources, and improve indoor air quality.
                      </p>
                      <h6>2. How can I reduce my utility bills with an eco-friendly home?
                      </h6>
                      <p>
                      You can reduce utility bills by incorporating energy-efficient appliances, installing a smart thermostat, using LED lighting, improving insulation, and investing in renewable energy sources like solar panels. These measures help lower energy consumption and cut costs on heating, cooling, and electricity.

                      </p>
                      <h6>
                      3. Are eco-friendly homes more expensive to build or buy?

                      </h6>
                      <p>
                      Eco-friendly homes can have higher upfront costs due to the use of sustainable materials and advanced technologies. However, the long-term savings on utility bills, lower maintenance costs, and increased property value can offset these initial expenses. Many buyers find the benefits of green living to be worth the investment.

                      </p>
                      <h6>4. How do sustainable real estate practices benefit the community?
                      </h6>
                      <p>
                      Sustainable real estate practices promote environmental responsibility, enhance the appeal of neighborhoods, and support local economies by working with green builders and suppliers. Green homes also inspire others to adopt eco-friendly practices, contributing to a broader culture of sustainability.

                      </p>
                      <h6>5. What are the health benefits of living in an eco-friendly home?
                      </h6>
                      <p>
                      Eco-friendly homes often feature improved indoor air quality, reduced exposure to toxic materials, and enhanced comfort due to better insulation and natural lighting. These factors contribute to a healthier living environment, potentially reducing the risk of respiratory issues and enhancing overall well-being.

                      </p>
                      <p>
                      Embracing green living and sustainable real estate not only benefits the environment but also enhances your quality of life and financial well-being. By investing in eco-friendly homes and adopting sustainable practices, you contribute to a healthier planet and a more comfortable, cost-effective living experience.

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

export default Blog5;
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
`;
