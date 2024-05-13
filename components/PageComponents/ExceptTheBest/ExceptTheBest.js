import React from "react";
import { Section } from "../../layoutComponents";
import styled from "styled-components";
const ContentWrapper = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 48em) {
    width: 95%;
  }
`;
const BodyWrapper = styled.div`
  width: 60%;
  border-left: 2px solid var(--clr-accent);
  padding-left: 45px;
  @media screen and (max-width: 48em) {
    padding-left: 8px;
    width: 66%;
  }
`;
const ExceptTheBest = ({ title, body }) => {
  return (
    <Section>
      <ContentWrapper>
        <div
          style={{
            width: "40%",
            textAlign: "center",
            color: "var(--clr-accent)",
          }}
        >
          <h2 class="title">{title}</h2>
        </div>
        <BodyWrapper
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
        />
      </ContentWrapper>
    </Section>
  );
};

export default ExceptTheBest;
