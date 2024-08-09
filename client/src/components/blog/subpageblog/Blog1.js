import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


import blog1 from "../../../images/blog1_image.jpg";

function Blog1() {
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
              10 Tips for First-Time Home Buyers
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
                  <img src={blog1} alt="" className="frontimg rounded" />
                </div>
              </div>
              <div className="col-lg-12  mt-3">
                <div data-aos="fade-left">
                  <p>
                    Buying your first home is an exciting milestone, but it can
                    also be a daunting process filled with complex decisions and
                    potential pitfalls. To help you navigate this journey, we've
                    compiled ten essential tips for first-time home buyers.
                    Whether you're looking to settle down in Jabalpur or
                    anywhere else, these tips will guide you toward making a
                    sound and satisfying investment.
                  </p>
                </div>
                <hr />
              </div>
              {isShowMore && (
                <p>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>1.Determine Your Budget</h4>
                      <p>
                        Before you start house hunting, it's crucial to
                        establish a clear budget. Consider your monthly income,
                        existing debts, and living expenses to determine how
                        much you can afford to spend on a home. Use online
                        mortgage calculators to get an idea of what your monthly
                        mortgage payments might be. Remember to factor in
                        additional costs like property taxes, insurance,
                        maintenance, and utilities. Setting a realistic budget
                        will help you avoid financial strain and ensure you can
                        comfortably afford your new home.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>2. Get Pre-Approved for a Mortgage</h4>
                      <p>
                        Securing a mortgage pre-approval will give you a
                        realistic understanding of your borrowing capacity. This
                        involves a lender reviewing your financial situation,
                        including your credit score, income, and debts. A
                        pre-approval letter not only shows sellers that you are
                        a serious buyer but also provides a clear picture of
                        your budget, allowing you to focus on homes within your
                        price range. It's a crucial step that can streamline the
                        home-buying process and give you an edge in competitive
                        markets.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>3. Prioritize Your Needs and Wants</h4>
                      <p>
                        Make a list of your must-haves and nice-to-haves in a
                        home. Consider factors such as the number of bedrooms
                        and bathrooms, the size of the kitchen, and outdoor
                        space. Think about your lifestyle and what features are
                        essential for your daily comfort and convenience.
                        Prioritizing your needs and wants will help you stay
                        focused during your search and ensure that you don't
                        compromise on essential features. Be prepared to make
                        some trade-offs, but keep your non-negotiables at the
                        forefront.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>4. Research Neighborhoods</h4>
                      <p>
                        Location is key when buying a home. Research different
                        neighborhoods to find one that suits your lifestyle,
                        offers good schools, has a low crime rate, and provides
                        convenient access to work and amenities. Visit
                        neighborhoods at different times of the day to get a
                        feel for the area. Look into future development plans
                        that might impact property values. Consider factors like
                        commute times, public transportation options, and the
                        availability of parks and recreational facilities. A
                        well-chosen neighborhood can enhance your quality of
                        life and increase your home's value over time.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>5. Work with a Real Estate Agent</h4>
                      <p>
                        A knowledgeable real estate agent can be an invaluable
                        resource. They can provide insights into the local
                        market, help you find suitable properties, and guide you
                        through the negotiation and closing processes. A good
                        agent will listen to your needs, answer your questions,
                        and advocate for your best interests. They can also
                        provide access to listings that might not be publicly
                        available and assist with paperwork and legal
                        requirements. Choosing the right agent can make your
                        home-buying experience smoother and less stressful.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>6. Inspect the Property Thoroughly</h4>
                      <p>
                        Never skip a home inspection. A thorough inspection can
                        uncover potential issues that may not be immediately
                        visible, such as structural problems, plumbing issues,
                        or pest infestations. Hire a qualified and experienced
                        home inspector to assess the property's condition.
                        Review the inspection report carefully and discuss any
                        concerns with your real estate agent. If significant
                        issues are found, you may be able to negotiate repairs
                        or a lower purchase price. An inspection gives you peace
                        of mind and protects you from unexpected expenses down
                        the road.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>7. Understand the Costs Involved</h4>
                      <p>
                        Beyond the purchase price, be aware of other costs
                        involved in buying a home. These include closing costs,
                        property taxes, home insurance, and ongoing maintenance
                        expenses. Closing costs can range from 2% to 5% of the
                        loan amount and cover fees such as appraisal, title
                        insurance, and attorney fees. Property taxes vary by
                        location and can significantly impact your monthly
                        budget. Home insurance is essential for protecting your
                        investment. Additionally, factor in regular maintenance
                        and potential repairs to keep your home in good
                        condition. Understanding these costs will help you plan
                        your finances effectively.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>8. Plan for the Future</h4>
                      <p>
                        Think long-term when buying a home. Consider how your
                        needs might change over the next five to ten years. Will
                        the property accommodate a growing family, or is it easy
                        to rent out if you decide to move? Evaluate the
                        potential for future appreciation in property value.
                        Consider factors like proximity to good schools, access
                        to public transportation, and neighborhood development
                        plans. Planning for the future ensures that your home
                        remains a valuable and suitable investment as your
                        circumstances evolve.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>9. Negotiate Wisely</h4>
                      <p>
                        Don't be afraid to negotiate the price and terms of the
                        sale. Your real estate agent can help you make a
                        competitive offer and navigate counteroffers from the
                        seller. Research comparable properties in the area to
                        understand the market value and strengthen your
                        negotiating position. Be prepared to negotiate on
                        repairs, closing costs, and other terms. Effective
                        negotiation can save you money and secure a better deal.
                        Remember, it's important to remain flexible and willing
                        to compromise on non-essential aspects.
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>10. Be Patient</h4>
                      <p>
                        Buying a home is a significant investment, so it's
                        important to be patient. Take your time to find the
                        right property that meets your needs and budget, rather
                        than rushing into a decision you might regret later. The
                        process can be lengthy, involving multiple steps such as
                        viewing homes, making offers, and completing
                        inspections. Stay focused on your goals and trust that
                        the right home will come along. Patience and persistence
                        will pay off, leading to a successful and satisfying
                        home-buying experience.
                      </p>
                    </div>
                    <hr />
                  </div>

                  <div className="col-lg-12  mt-3">
                    <div data-aos="fade-left">
                      <h4>FAQ</h4>
                      <h6>
                        1. What is the difference between pre-qualification and
                        pre-approval for a mortgage?
                      </h6>
                      <p>
                        Pre-qualification is an initial assessment of your
                        ability to borrow based on self-reported information. It
                        provides a general idea of your loan eligibility but is
                        not a guarantee. Pre-approval, on the other hand,
                        involves a more thorough evaluation by a lender,
                        including credit checks and verification of income and
                        assets. A pre-approval letter is a more accurate
                        representation of your borrowing capacity and carries
                        more weight with sellers.
                      </p>
                      <h6>2. How much should I save for a down payment?</h6>
                      <p>
                        While the standard down payment is 20% of the home's
                        purchase price, many lenders offer loans with lower down
                        payment requirements, sometimes as low as 3-5%. However,
                        a larger down payment can reduce your monthly mortgage
                        payments and eliminate the need for private mortgage
                        insurance (PMI). Saving for a larger down payment can
                        also give you more equity in your home from the start
                        and potentially secure better loan terms.
                      </p>
                      <h6>
                        3. What are closing costs, and how much should I expect
                        to pay?
                      </h6>
                      <p>
                        Closing costs are fees associated with finalizing a home
                        purchase, including appraisal fees, title insurance, and
                        attorney fees. These costs typically range from 2% to 5%
                        of the loan amount. It's important to budget for these
                        expenses and review the closing disclosure provided by
                        your lender to understand all the costs involved. Some
                        closing costs can be negotiated or shared with the
                        seller, so discuss your options with your real estate
                        agent and lender.
                      </p>
                      <h6>4. How important is a home inspection?</h6>
                      <p>
                        A home inspection is crucial as it can reveal hidden
                        problems with the property that could cost you a
                        significant amount of money to fix. Issues such as
                        structural damage, plumbing leaks, or electrical
                        problems are common findings during inspections. A
                        thorough inspection provides an objective evaluation of
                        the property's condition, helping you make an informed
                        decision. It can also be a valuable tool in negotiating
                        repairs or price adjustments with the seller.
                      </p>
                      <h6>5. Can I buy a home with bad credit?</h6>
                      <p>
                        While it is possible to buy a home with bad credit, it
                        may be more challenging. You might need to make a larger
                        down payment or accept a higher interest rate. Working
                        on improving your credit score before applying for a
                        mortgage can increase your chances of getting better
                        terms. Consider steps like paying off debts, correcting
                        errors on your credit report, and avoiding new credit
                        inquiries. Consulting with a financial advisor or
                        mortgage broker can provide additional guidance tailored
                        to your situation.
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

export default Blog1;
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
