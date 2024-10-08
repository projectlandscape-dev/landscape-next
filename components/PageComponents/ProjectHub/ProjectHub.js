import React from "react";
import styled from "styled-components";
import { ButtonSecondaryLight } from "../../buttons";
import Image from "next/image";


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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
          <div className="relative  h-[555px] md:h-400px">
            <Image
              src={bgimage.sourceUrl}
              alt="bg-image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            <InnerBoxWrapper>
              <h3 className="text-white tracking-[6px]">outdoor</h3>

              <div className="bg-green-700">
                <Living
                  style={{ backgroundImage: `url(${bgimage.sourceUrl})` }}
                >
                  living
                </Living>
              </div>
              <h3>Done Right</h3>
              <Seperator>
                <Image
                  className="mx-auto my-0"
                  src="/star.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </Seperator>
            </InnerBoxWrapper>
          </div>
        <TextWrapper>
          <h3 className="title">{title}</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
          />
          <div className="mt-4">
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
