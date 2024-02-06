import React from "react";
import {Section } from "../../layoutComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styled from "styled-components";
import styles from "./Badges.module.scss";

const ImgStyle = {
  marginTop: "auto",
  marginBottom: "auto",
  height: "100px",
  width: "200px",
  padding: "0em",
  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
  margin: "12px 30px",
};

const Wrapper = styled.div`
  .slider {
    @media screen and (max-width: 70em) {
      display: none;
    }
  }
  img {
    @media screen and (max-width: 768px) {
      width: 150px !important;
      margin: 8px 12px !important;
    }
  }
`;



export default function Badges({ title }) {
  const settings = {
    infinite: true,
    slidesToShow: 6,
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
        <h2 className="title center">Awards and Certificates</h2>
        <Slider className={styles.slider} {...settings}>
          <div>
            <Image
              src="/badges/best-landscaping-companies-in-calgary-1.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/best-landscaping-companies-in-calgary-2.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/best-landscaping-companies-in-calgary-3.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-experts-calgary-1.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-experts-calgary-2.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-experts-calgary-3.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-1.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-2.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-3.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>

          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-4.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-5.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-6.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-7.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-8.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-9.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-10.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-11.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/newBadges1.png"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/newBadges2.png"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/newBadges3.png"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
        </Slider>
        <div className={styles.grid}>
          <div>
            <Image
              src="/badges/best-landscaping-companies-in-calgary-1.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/best-landscaping-companies-in-calgary-2.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-3.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-9.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/badges/landscaping-calgary-top-rated-experts-11.svg"
              alt="best landscaping companies in calgary"
              style={ImgStyle}
              width={100}
              height={100}
            />
          </div>
        </div>
        ;
      </Wrapper>
    </Section>
  );
}
