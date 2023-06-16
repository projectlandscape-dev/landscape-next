import React from "react";
import { Container, Section } from "../../layoutComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styled from "styled-components";

const ImgStyle = {
  // marginTop: "auto",
  // marginBottom: "auto",
  // height: "100px",
  // width: "100%",
};

const Wrapper = styled.div`
  .slider {
    @media screen and (max-width: 70em) {
      display: none;
    }
  }
`;

const Grid = styled.div`
  display: none;
  @media screen and (max-width: 70em) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8em, 1fr));
    grid-gap: 1em;

    & > * {
      justify-self: center;
      align-self: center;
    }
  }
`;

export default function Badges({ title }) {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
  };
  return (
    <Section>
      <Wrapper className="spacing">
        {title ? <h2 className="title center">{title}</h2> : null}
        <Slider className="slider" {...settings}>
          <Image
            src="/badges/best-landscaping-companies-in-calgary-1.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/best-landscaping-companies-in-calgary-2.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/best-landscaping-companies-in-calgary-3.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-experts-calgary-1.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-experts-calgary-2.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-experts-calgary-3.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-1.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-2.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-3.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-4.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-5.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-6.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-7.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-8.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-9.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-10.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-11.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
        </Slider>
        <Grid>
          <Image
            src="/badges/best-landscaping-companies-in-calgary-1.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/best-landscaping-companies-in-calgary-2.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-3.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />

          <Image
            src="/badges/landscaping-calgary-top-rated-experts-9.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-11.svg"
            alt="best landscaping companies in calgary"
            style={ImgStyle}
            width={100}
            height={100}
          />
        </Grid>
        ;
      </Wrapper>
    </Section>
  );
}
