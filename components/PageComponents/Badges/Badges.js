import React from "react";
import { Section } from "../../layoutComponents";
import Image from "next/image";
import styled from "styled-components";
import styles from "./Badges.module.scss";
import SliderComponent from "./SliderComponent";

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

export default function Badges() {
  return (
    <Section>
      <Wrapper className="spacing">
        <h2 className="title center">Awards and Certificates</h2>
        <SliderComponent />
        <div className={styles.grid}>
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
        </div>
      </Wrapper>
    </Section>
  );
}
