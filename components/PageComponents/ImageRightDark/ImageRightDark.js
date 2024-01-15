import React from "react";
import styled from "styled-components";
import { ButtonSecondaryLight } from "../../buttons";
import {
  Container,
  Flex,
  FlexMobileOpp,
  Section,
} from "../../layoutComponents";
import Image from "../../Image";

const Wrapper = styled.div`
  background: var(--clr-accent);
`;

const Text = styled.div`
  color: var(--txt-light);
  p {
    color: var(--txt-light);
  }
`;
const Inner = styled.div`
  a {
    color: var(--txt-light);
  }
`;

const ImgStyles = {
  boxShadow: "-20px 20px 0px 1px var(--clr-tan)",
  marginTop: "2em",
  maxHeight: "450px",
};
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
const LogoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 20px;
  top: 10px;
`;
export default function ImageRightDark({
  subheader,
  title,
  body,
  image,
  button,
  link,
  imageCopy,
}) {
  return (
    <Wrapper>
      <section>
        <div className="container">
          <div className="flexMobileOpp">
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
                <ButtonSecondaryLight href={link}>
                  {button}
                </ButtonSecondaryLight>
              ) : (
                <ButtonSecondaryLight href="/contact">
                  get started
                </ButtonSecondaryLight>
              )}
            </Text>
            <Img>
              {imageCopy ? (
                <LogoWrapper>
                  <img height="130px" width="130px" src={imageCopy.sourceUrl} />
                </LogoWrapper>
              ) : null}
              <Image
                className="stretch"
                alt={image?.altText || ""}
                srcSet={image?.sourceUrl}
              />
            </Img>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
