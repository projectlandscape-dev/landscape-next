import React from "react";
import { Container, Section } from "../../layoutComponents";
import styled from "styled-components";
import Image from "next/image";

const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4em;
  @media screen and (max-width: 48em) {
    flex-direction: column;
  }
`;
const FourOrderImage = ({ section, title }) => {
  return (
    <Section>
      <Container>
        <center>
          <h1 className="title">{title}</h1>
        </center>
        <BodyWrapper>
          {section?.map((item, index) => {
            return (
              <div key={index} className="flex row">
                <Image
                  className="center"
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
      </Container>
    </Section>
  );
};

export default FourOrderImage;
