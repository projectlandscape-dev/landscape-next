import React, { useState } from "react";
import styled from "styled-components";
import { Section, Container } from "components/layoutComponents";
import Image from "components/Image";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Flex } from "../../layoutComponents";
import { YoutubeModal } from "../../Modal/YoutubeModal";
import { LearnMoreModal } from "../../Modal/LearnMoreModal";
import styles from "../../../components/AllServices/AllServices.module.scss";

const StepHeader = styled.h3`
  margin-right: 10px;
  margin-bottom: 0;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HorizontalLine = styled.div`
  flex-grow: 1;
  border: 0;
  height: 3px;
  background-color: var(--clr-accent);
`;

export const BtnPrimary = styled.button`
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-alfa-slab-one);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;

  background: var(--clr-accent);
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    background: var(--clr-accent-darker);
    color: var(--txt-light);
  }

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * + * {
      margin-left: 0;
      padding-left: 0;
    }
  }
`;

export const BtnSecondary = styled.button`
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-alfa-slab-one);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: capitalize;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: transparent;
  color: var(--clr-accent);
  border: 1px solid var(--clr-accent);

  &:hover {
    opacity: 0.8;
    color: var(--clr-accent);
  }
`;

const StepContent = ({
  stepcount,
  title,
  body,
  videolink,
  openYoutubeModal,
  openLearnModal,
  setCurrentVideoId,
  index,
  key,
}) => (
  <div style={{ marginBottom: "90px" }} className="spacing" key={key}>
    <FlexContainer>
      <StepHeader>Step {stepcount}</StepHeader>
      <HorizontalLine />
    </FlexContainer>

    <h3 className="title">{title}</h3>

    <div
      dangerouslySetInnerHTML={{
        __html: `${body}`,
      }}
    />
    <div className="actions">
      <BtnPrimary
        onClick={() => {
          openYoutubeModal();
          setCurrentVideoId(videolink);
        }}
      >
        <IoPlayCircleOutline style={{ fontSize: "18px", marginRight: "6px" }} />
        Play Video
      </BtnPrimary>
      <BtnSecondary
        onClick={() => {
          openLearnModal(index);
        }}
      >
        Learn more
      </BtnSecondary>
    </div>
  </div>
);

export default function ChartArea({ title, image, steps, sliderdata }) {
  const [isYoutubeModalOpen, setIsYoutubeModalOpen] = useState(false);
  const [isLearnModal, setIsLearnModalOpen] = useState(false);

  const [currentVideoId, setCurrentVideoId] = useState("");

  const [currentLearnId, setCurrentLearnId] = useState(0);

  const openYoutubeModal = () => {
    setIsYoutubeModalOpen(true);
  };

  const closeYoutubeModal = () => {
    setIsYoutubeModalOpen(false);
  };

  const openLearnModal = (index) => {
    setCurrentLearnId(index);
    setIsLearnModalOpen(true);
  };

  const closeLearnModal = () => {
    setIsLearnModalOpen(false);
  };

  return (
    <>
      <Section>
        <div className={styles.text}>
          {/* <p className="subheader accent">find the service you need</p> */}
          <h2 className="title mb-4">{title}</h2>
        </div>
        <YoutubeModal
          isOpen={isYoutubeModalOpen}
          onClose={closeYoutubeModal}
          currentVideoId={currentVideoId}
          setCurrentVideoId={setCurrentVideoId}
        />
        <LearnMoreModal
          isOpen={isLearnModal}
          onClose={closeLearnModal}
          slidesData={sliderdata}
          currentLearnId={currentLearnId}
        />
        <Container className="spacing">
          <Flex>
            <Image src={image.sourceUrl} alt="map" />
            <div className="spacing">
              {steps.map((item, index) => (
                <StepContent
                  key={index}
                  stepcount={item.stepcount}
                  title={item.title}
                  body={item.body}
                  index={index}
                  videolink={item.videolink}
                  openYoutubeModal={openYoutubeModal}
                  setCurrentVideoId={setCurrentVideoId}
                  openLearnModal={openLearnModal}
                />
              ))}
            </div>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
