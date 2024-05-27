import React from "react";
import styled from "styled-components";
import { Container, Section, FlexMobileOpp } from "components/layoutComponents";
import { ButtonSecondaryLight } from "components/buttons";
import Image from "../../Image";
import NextImage from "next/image";
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
        max-height: 600px;
        min-height: 400px;
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
const LogoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 20px;
  top: 10px;
`;
const Buttonwrapper = styled.div`
  display: flex;
  height: 50px;
`;

export default function ImageLeftDark({
  subheader,
  title,
  body,
  image,
  button,
  link,
  imageCopy,
  showarrow,
}) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <Img>
              {imageCopy ? (
                <LogoWrapper>
                  <NextImage height={130} width={130} src={imageCopy.sourceUrl} alt={imageCopy.altText}/>
                </LogoWrapper>
              ) : null}
              <Image
                className="stretch"
                alt={image?.altText || ""}
                srcSet={image?.sourceUrl}
              />
            </Img>
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
              {button && link ? (
                <Buttonwrapper>
                  <ButtonSecondaryLight href={link}>
                    {button}
                  </ButtonSecondaryLight>
                  {showarrow && (
                    <Image
                      width="160px"
                      src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-62-removebg-preview.png"
                      alt='arrow'
                    />
                  )}
                </Buttonwrapper>
              ) : (
                <Buttonwrapper>
                  <ButtonSecondaryLight href="/contact">
                    get started
                  </ButtonSecondaryLight>
                  {showarrow && (
                    <Image
                      width="160px"
                      src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-62-removebg-preview.png"
                      alt='arrow'
                    />
                  )}
                </Buttonwrapper>
              )}
            </Text>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  );
}
