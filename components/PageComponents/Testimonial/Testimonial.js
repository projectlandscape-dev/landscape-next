import React from "react";
import Image from "next/image";
const Slider = dynamic(() => import('react-slick'), { ssr: false })
import styled from "styled-components";
import { ButtonPrimary } from "../../buttons";
import { IconStar } from "../../../public/svg/Svg";
import dynamic from "next/dynamic";


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
      <div className="text-clr-tan !flex items-center justify-center">
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <IconStar />
          </div>
        ))}
      </div>
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
    <>
      <center>
        <h2 className="title py-3 px-0">What Clients Say About Us</h2>
      </center>
      <div className="relative h-full px-1 py-2">
        <Image
          className="w-[1440px] h-[402px]"
          src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/calgary-landscaping-testimonials-banner.jpg"
          alt="Testimonials Banner"
          fill
          objectFit="cover"
        />
        <div className="py-20 px-0">
          <div className="w-[85%] mx-auto max-w-[95rem]">
            <SliderWrapper>
              <Slider {...settings}>
                <ReviewBox
                  title="I am certainly happy I made the choice to go with them"
                  review="After attending the Calgary Home and Garden show with my neighbor and seeing their excellent display we decided to use them for our backyard projects. I am certainly happy I made the choice to go with them. The workers attention to detail and excellent preparation greatly contributed the success of the project."
                  name="Marilyn D."
                />
                <ReviewBox
                  title="We are thrilled with our patio extension and highly recommend their services"
                  review="Ryan and Alison along with the entire team at Project Landscape were great to work with. From our initial consultation to the completion of the work every step was communicated clearly and executed well. We are thrilled with our patio extension and highly recommend their services."
                  name="Tammy B."
                />
                <ReviewBox
                  title="Project Landscape was an absolute pleasure to work with"
                  review="They took on a pretty big project in our backyard that included excavating a large portion of the sloped yard, installing a gorgeous retaining wall with a beautiful patio completed in paving stones and decorative rock, a number of privacy screens as well as some shrubs & grass. The team was superb, demonstrating exceptional skill."
                  name="Sabrina"
                />
              </Slider>
            </SliderWrapper>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <ButtonPrimary href="/testimonials">Read All Reviews</ButtonPrimary>
        </div>
      </div>
    </>
  );
}
