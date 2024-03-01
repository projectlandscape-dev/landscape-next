import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "./buttons";
import Image from "next/image";

const Wrapper = styled.div`
  position: relative;
  padding: 4em;
  z-index: 1;
  .finance_banner {
    position: absolute;
    top: 0;
    left:0;
    right:0;
    opacity:0.7;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

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
        <Image
          className="finance_banner"
          src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/finance-banner.jpg"
          alt="finance-banner"
          width={500}
          height={500}
          sizes="(max-width:768px) , 33vw, 50vw"
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