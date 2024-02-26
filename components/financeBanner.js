import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import styled from "styled-components";
const ButtonPrimary = dynamic(() =>
  import("./buttons").then((module) => module.ButtonPrimary)
);

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 4em;

  .finance-img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
  }
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.4;
  z-index: 1;
`;

export default function FinanceBanner() {
  return (
    <section>
      <center>
        <h2 className="title" style={{ padding: "20px 0px" }}>
          Get The Outdoor Financing You Need
        </h2>
      </center>
      <div className="container">
        <Wrapper>
        <BackgroundImage
            src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/finance-banner.jpg"
            alt="finance banner"
            fill
          />

          <div>
            <p className="subheader">get the landscape financing you need</p>
            <h2 className="title">payment plans to match any budget</h2>
          </div>
          <p>
            At Project Landscape Ltd., we are constantly reviewing and
            negotiating preferred pricing arrangements with our suppliers and
            trade partners to get you the best value for your money.
          </p>
          <ButtonPrimary href="/financing">view payment plans</ButtonPrimary>
          <Image
            className="finance-img"
            src="/finance-it.jpg"
            alt="affordable calgary landscaping financing"
            width={100}
            height={100}
          />
        </Wrapper>
      </div>
    </section>
  );
}
