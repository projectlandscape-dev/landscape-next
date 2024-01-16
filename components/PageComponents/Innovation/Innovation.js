import React from "react";
import { Container, Section, Flex } from "components/layoutComponents";
import styled from "styled-components";
import { ButtonSecondaryLight } from "../../buttons";

const SectionWrapper = styled.div`
  background: url("https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-85.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 42%;
  margin: 0 auto;
  text-align: center;
  background: #387d1c91;
  color: white;
  padding: 40px;
  gap: 15px;
`;
const Innovation = ({ title, body, button, link }) => {
  return (
    <SectionWrapper>
      <Section>
        <ContentWrapper>
          <h2>{title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
          />
          <div style={{ width: "50%", margin: "0 auto" }}>
            {button && link ? (
              <ButtonSecondaryLight href={link}>{button}</ButtonSecondaryLight>
            ) : (
              <ButtonSecondaryLight href="/contact">
                get started
              </ButtonSecondaryLight>
            )}
          </div>
        </ContentWrapper>
      </Section>
      ;
    </SectionWrapper>
  );
};

export default Innovation;

//
