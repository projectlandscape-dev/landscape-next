import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import styled from "styled-components";
const ButtonPrimary = dynamic(() =>
  import("./buttons").then((module) => module.ButtonPrimary)
);

const Wrapper = styled.div`
  background: url("http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/finance-banner.jpg"),
    rgba(255, 255, 255, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em;
  position: relative;
  z-index: 2;

  .finance-img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
  }
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
