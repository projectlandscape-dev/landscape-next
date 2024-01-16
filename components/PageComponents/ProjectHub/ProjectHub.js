import React from "react";
import { Container, Section, Flex } from "components/layoutComponents";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondaryLight } from "../../buttons";

const ImageWrapper = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const TextWrapper = styled.div`
  background: var(--clr-accent);
  margin-left: 0;
  padding: 100px 40px;
  color: white;
`;
const FlexDiv = styled.div`
  display: flex;
  alignitem: center;

  & > * {
    width: 100%;
  }
`;
const InnerBoxWrapper = styled.div`
  border: 4px solid var(--clr-accent);
  height: fit-content;
  padding: 10px;
  margin-top: 60px;
  color: white;
`;
const Living = styled.div`
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 20px;
  letter-spacing: 13px;
  font-weight: 700;
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
    <div style={{ padding: "20px 0px" }}>
      <FlexDiv>
        <div>
          <ImageWrapper
            style={{ backgroundImage: `url(${bgimage.sourceUrl})` }}
          >
            <InnerBoxWrapper>
              <h1 style={{ color: "white", letterSpacing: "6px" }}>outdoor</h1>

              <div style={{ background: "green" }}>
                <Living
                  style={{ backgroundImage: `url(${bgimage.sourceUrl})` }}
                >
                  living
                </Living>
              </div>
              <h1>Done Right</h1>
              <Seperator>
                <img style={{ margin: "0 auto" }} src="/star.png" />
              </Seperator>
            </InnerBoxWrapper>
          </ImageWrapper>
        </div>
        <TextWrapper>
          <h1 className="title">{title}</h1>

          <div
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
          />
          {button && link ? (
            <ButtonSecondaryLight href={link}>{button}</ButtonSecondaryLight>
          ) : (
            <ButtonSecondaryLight href="/contact">
              get started
            </ButtonSecondaryLight>
          )}
        </TextWrapper>
      </FlexDiv>
    </div>
  );
};

export default ProjectHub;
