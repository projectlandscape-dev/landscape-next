import React from "react";
import styled from "styled-components";
import { Section } from "../../layoutComponents";
import Image from "next/image";

const BackgroundWrapper = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  padding: 50px 0px;
  margin-top: 114px;
  .thinbanner {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 102px; 
  }
  @media only screen and (max-width: 400px) {
    margin-top: 98px; 
  }
`;

const OverlayBox = styled.div`
  background-color: #004271;
  mix-blend-mode: multiply;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: block;
  margin: auto;
  z-index: 1;
`;
const ThinBanner = ({ title }) => {
  return (
      <BackgroundWrapper>
        <Image
          className="thinbanner"
          src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/07/image-3.png"
          alt="image-3"
          fill
          sizes="100vw"
        />
        <h1
          style={{
            zIndex: 2,
            position: "relative",
            width: "85%",
            margin: "0 auto",
            fontSize: "50px",
          }}
        >
          {title}
        </h1>
        <OverlayBox />
      </BackgroundWrapper>
  );
};

export default ThinBanner;
