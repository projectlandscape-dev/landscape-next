import React from "react";
import { Container, Section, Flex } from "components/layoutComponents";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondaryLight } from "../../buttons";
import Image from "next/image";

const ImageWrapper = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 48em) {
    height: 300px;
  }
`;
const TextWrapper = styled.div`
  background: var(--clr-accent);
  margin-left: 0;
  padding: 160px 40px;
  color: white;
`;
const FlexDiv = styled.div`
  display: flex;
  alignitem: center;

  & > * {
    width: 100%;
  }
  @media screen and (max-width: 48em) {
    flex-direction: column;
  }
`;
const InnerBoxWrapper = styled.div`
  border: 4px solid var(--clr-accent);
  height: fit-content;
  padding: 10px;

  color: white;
`;
const Living = styled.div`
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 25px;
  letter-spacing: 15px;
  font-weight: 700;
  background-size: cover;
  background-position: center;
`;
const Seperator = styled.div`
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    background: var(--clr-accent);
    height: 3px;
    width: 70px;
    top: 13px;
  }
  &:before {
    left: 10px;
  }

  &:after {
    right: 10px;
  }
`;
const ProjectHub = ({ title, body, button, link, bgimage }) => {
  return (
    <div>
      <FlexDiv>
        <div>
          <ImageWrapper
            style={{ backgroundImage: `url(${bgimage.sourceUrl})` }}
          >
            <InnerBoxWrapper>
              <h3 style={{ color: "white", letterSpacing: "6px" }}>outdoor</h3>

              <div style={{ background: "green" }}>
                <Living
                  style={{ backgroundImage: `url(${bgimage.sourceUrl})` }}
                >
                  living
                </Living>
              </div>
              <h3>Done Right</h3>
              <Seperator>
                <Image style={{ margin: "0 auto" }} src="/star.png" />
              </Seperator>
            </InnerBoxWrapper>
          </ImageWrapper>
        </div>
        <TextWrapper>
          <h3 className="title">{title}</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
          />
          <div style={{ marginTop: "25px" }}>
            {button && link ? (
              <ButtonSecondaryLight href={link}>{button}</ButtonSecondaryLight>
            ) : (
              <ButtonSecondaryLight href="/contact">
                get started
              </ButtonSecondaryLight>
            )}
          </div>
        </TextWrapper>
      </FlexDiv>
    </div>
  );
};

export default ProjectHub;
