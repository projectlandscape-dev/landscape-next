import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
const Container = dynamic(() => import("../../layoutComponents").then((module) => module.Container));
const Section = dynamic(() => import("../../layoutComponents").then((module) => module.Section));
const ButtonPrimary = dynamic(() => import("../../buttons").then((module) => module.ButtonPrimary));
const Image = dynamic(()=>import("../../Image"))

const Text = styled.div``;
const ImgLeft = styled.div`
  position: relative;
  box-shadow: ${(props) =>
    !props.showshadow ? "20px 20px 0px 1px var(--clr-accent)" : "unset"};
  figure {
    margin: 0;
    div {
      img {
        max-height: 600px;
        min-height: 400px;
        object-fit: cover;
      }
    }
  }
`;
const Buttonwrapper = styled.div`
  display: flex;
  height: 50px;
`;
const LogoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 20px;
  top: 10px;
`;
const FlexWrap = styled.div`
  display: flex;
  align-items: ${(props) => (!props.contentcenter ? "center" : "unset")};
  gap: 30px;
  @media screen and (max-width: 48em) {
    flex-direction: column-reverse;
  }
  & > * {
    width: 100%;
  }
`;
export default function ImageLeft({
  subheader,
  title,
  body,
  image,
  button,
  showarrow,
  link,
  imageCopy,
  contentcenter = false,
  showshadow = false,
}) {
  return (
    <Section>
      <Container>
        <FlexWrap contentcenter={contentcenter}>
          <ImgLeft showshadow={showshadow}>
            {imageCopy ? (
              <LogoWrapper>
                <Image height="130px" width="130px" src={imageCopy.sourceUrl} />
              </LogoWrapper>
            ) : null}
            <Image
              className="stretch"
              alt={image?.altText || ""}
              srcSet={image?.sourceUrl}
            />
          </ImgLeft>
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${body}`,
              }}
            ></div>
            {button && link ? (
              <ButtonPrimary href={link}>{button}</ButtonPrimary>
            ) : showarrow ? (
              <Buttonwrapper>
                <ButtonPrimary href="/calgary-landscaping-materials">
                  discover Products
                </ButtonPrimary>
                <Image
                  width="160px"
                  
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-62.png"
                />
              </Buttonwrapper>
            ) : (
              <ButtonPrimary href="/contact">get started</ButtonPrimary>
            )}
          </Text>
        </FlexWrap>
      </Container>
    </Section>
  );
}
