import React from "react";
import { Section } from "../../layoutComponents";
import styled from "styled-components";
const ContentWrapper = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;
const BodyWrapper = styled.div`
  width: 60%;
  border-left: 2px solid var(--clr-accent);
  padding-left: 45px;
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
          <h3>{title}</h3>
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
