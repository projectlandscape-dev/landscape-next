import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
const Container = dynamic(() =>
  import("components/layoutComponents").then((module) => module.Container)
);
const Section = dynamic(() =>
  import("components/layoutComponents").then((module) => module.Section)
);
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
const ButtonPrimary = dynamic(() =>
  import("../../buttons").then((module) => module.ButtonPrimary)
);

const ReviewWrapper = styled.div`
  border: 1px solid var(--clr-accent);
  border-radius: var(--br);
  padding: 2em;
  background: rgba(0, 0, 0, 0.7);
  color: var(--txt-light);
  text-align: center;

  h3,
  p {
    max-width: 90ch;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Wrapper = styled.div`
  background: url("https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/calgary-landscaping-testimonials-banner.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10px 5px;
`;

const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: var(--clr-accent);
    font-size: 24px;
  }
`;

const FlexStars = styled.div`
  display: flex;
  justify-content: center;

  & > * + * {
    margin-left: 2px;
  }

  & > * {
    color: var(--clr-tan);
  }
`;

const ReviewBox = (props) => {
  return (
    <ReviewWrapper className="spacing">
      <h3 className="subheader">{props.title}</h3>
      <p className="italics">"{props.review}"</p>
      <p className="bold caps">{props.name}</p>
      <FlexStars>
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </FlexStars>
    </ReviewWrapper>
  );
};

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ padding: "30px 0px" }}>
      <center>
        <h2 className="title" style={{ padding: "20px 0px" }}>
          What Clients Say About Us
        </h2>
      </center>
      <Wrapper>
        <Section>
          <Container>
            <SliderWrapper>
              <Slider {...settings}>
                <ReviewBox
                  title="I am certainly happy I made the choice to go with them"
                  review="After attending the Calgary Home and Garden show with my neighbor and seeing their excellent display we decided to use them for our backyard projects. I am certainly happy I made the choice to go with them. The workers  attention to detail and excellent preparation greatly contributed the success of the project."
                  name="Marilyn D."
                />
                <ReviewBox
                  title="We are thrilled with our patio extension and highly recommend their services"
                  review="Ryan and Alison along with the entire team at Project Landscape were great to work with. From our initial consultation to the completion of the work every step was communicated clearly and executed well. We are thrilled with our patio extension and highly recommend their services"
                  name="Tammy B."
                />
                <ReviewBox
                  title="Project Landscape was an absolute pleasure to work with"
                  review="They took on a pretty big project in our backyard that included excavating a large portion of the sloped yard, installing a gorgeous retaining wall with a beautiful patio completed in paving stones and decorative rock, a number of privacy screens as well as some shrubs & grass. The  team was superb, demonstrating exceptional skill."
                  name="Sabrina"
                />
              </Slider>
            </SliderWrapper>
          </Container>
        </Section>
        <div style={{ textAlign: "end" }}>
          <ButtonPrimary href="/testimonials">Read All Reviews</ButtonPrimary>
        </div>
      </Wrapper>
    </div>
  );
}
