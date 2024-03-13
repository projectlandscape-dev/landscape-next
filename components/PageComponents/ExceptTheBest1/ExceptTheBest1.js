import React from "react";
import { Section } from "../../layoutComponents";
import styled from "styled-components";
import Image from "next/image";
const ContentWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  .leftSide {
    width: 40%;
    text-align: left;
    padding-right: 45px;
  }
  @media screen and (max-width: 48em) {
    width: 90%;
    flex-direction: column;
    .leftSide {
      width: 100%;
    }
  }
`;
const BodyWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  border-left: 2px solid var(--clr-accent);
  padding-left: 45px;
  @media screen and (max-width: 48em) {
    padding-left: 8px;
    width: 100%;
    flex-direction: column;
  }
`;
const ExceptTheBest1 = ({ fields, body }) => {
  return (
    <Section>
      <ContentWrapper>
        <div className="leftSide">
          <div
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
          />
        </div>
        <BodyWrapper>
          {fields?.map((item, index) => {
            return (
              <div key={index}>
                <h3 className="rightSide">{item?.title}</h3>
                <Image
                  src={item?.image?.sourceUrl}
                  alt={item?.image?.altText}
                  width={100}
                  height={100}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${item.description}`,
                  }}
                />
              </div>
            );
          })}
        </BodyWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default ExceptTheBest1;
