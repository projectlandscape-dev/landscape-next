import React from "react";
import { Container, Section } from "components/layoutComponents";
import Image from "next/image";
import styled from "styled-components";
import { ButtonPrimary } from "components/buttons";

const FinanceTab = ({ title, subheader, innerHeading, body }) => {
  const Wrapper = styled.div`
    background: url("https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/finance-banner.jpg"),
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
  return (
    <section>
      <center>
        <h2 className="title" style={{ padding: "20px 0px" }}>
          {title}
        </h2>
      </center>
      <div className="container">
        <Wrapper>
          <div>
            <p className="subheader">{subheader}</p>
            <h2 className="title">{innerHeading}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
          />
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
};

export default FinanceTab;
