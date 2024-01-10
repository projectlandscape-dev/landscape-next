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
  background: black;
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
export default function ImageLeftBlack({
  subheader,
  title,
  body,
  image,
  button,
  link,
}) {
  return (
    <Wrapper>
      <section>
        <div className="container">
          <div className="flexMobileOpp">
            <Img>
              <Image
                className="stretch"
                alt={image.altText || ""}
                srcSet={image.sourceUrl}
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
                <ButtonSecondaryLight href={link}>
                  {button}
                </ButtonSecondaryLight>
              ) : (
                <ButtonSecondaryLight href="/contact">
                  get started
                </ButtonSecondaryLight>
              )}
            </Text>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
