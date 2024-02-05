import React from "react";
import styled from "styled-components";
import { Container, Section, FlexMobileOpp } from "components/layoutComponents";
import { ButtonSecondaryLight } from "components/buttons";
import Image from "next/image";

const Wrapper = styled.div`
  background: var(--clr-accent);
`;

const Text = styled.div`
  color: var(--txt-light);
  p {
    color: var(--txt-light);
  }
`;

const Img = styled.div`
  position: relative;
  figure {
    div {
      box-shadow: -20px 20px 0px 1px var(--clr-tan);
      img {
        max-height: 700px;
        min-height: 500px;
        object-fit: cover;
      }
    }
  }
`;

const Inner = styled.div`
  a {
    color: var(--txt-light);
  }
`;

const Outer = styled.div`
  margin-top: 10px;
  color: var(--txt-light);
`;

const LogoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 20px;
  top: 10px;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  img {
    width: 700px;
    height: 380px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;
export default function ImageLeftDarkWithOne({
  subheader,
  title,
  body,
  bodycopy,
  image,
  button,
  link,
  image2,
}) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <ImageWrapper>
              <Image
              className="stretch"
              alt={image?.altText || ""}
              src={image?.sourceUrl}
              width={500}
              height={500}
              />
            </ImageWrapper>

            <Text className="spacing">
              <div>
                <p className="subheader accent">{subheader} </p>
                <h2 className="title">{title}</h2>
              </div>
              <Inner
                dangerouslySetInnerHTML={{
                  __html: `${body}`,
                }}
              />
            </Text>
          </FlexMobileOpp>
          <Outer
            dangerouslySetInnerHTML={{
              __html: `${bodycopy}`,
            }}
          />
          <ButtonWrapper>
            {button && link ? (
              <ButtonSecondaryLight href={link}>{button}</ButtonSecondaryLight>
            ) : (
              <ButtonSecondaryLight href="/contact">
                get started
              </ButtonSecondaryLight>
            )}
          </ButtonWrapper>
        </Container>
      </Section>
    </Wrapper>
  );
}
