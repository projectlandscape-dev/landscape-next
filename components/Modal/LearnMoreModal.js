import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Component } from "react";
import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const ModalWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 400;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  text-align: center;
  background: white; /* Set the background color */
  padding: 20px; /* Set the padding */
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 25px;
  color: white;
`;

const LearnContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 600px;
  padding-top: 56.25%; /* 16:9 aspect ratio */
`;
const AbsoluteDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  padding: 20px;
`;

const Indicator = styled.div`
  position: absolute;
  top: 50%;
  ${({ left, right }) =>
    left || left === 0
      ? `left: ${left};`
      : right || right === 0
      ? `right: ${right};`
      : "right: 0;"}
  z-index: 100;
`;
export const LearnMoreModal = ({
  isOpen,
  onClose,
  slidesData,
  currentLearnId,
}) => {
  const [currentSlide, setCurrentSlide] = useState(currentLearnId);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // initialSlide: currentLearnId, // Set the initial slide index

    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const sliderRef = useRef();

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    sliderRef.current.slickGoTo(currentLearnId);
  }, [currentLearnId]);

  return (
    <ModalWrapper isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <LearnContainer>
          {currentSlide !== 0 && (
            <Indicator left={0}>
              <MdNavigateBefore
                onClick={prev}
                style={{
                  cursor: "pointer",
                  fontSize: "25px",
                  marginLeft: "-8px",
                }}
              />
            </Indicator>
          )}
          {currentSlide !== slidesData.length - 1 && (
            <Indicator>
              <MdNavigateNext
                right={0}
                onClick={next}
                style={{
                  cursor: "pointer",
                  fontSize: "25px",
                  marginRight: "-8px",
                }}
              />
            </Indicator>
          )}
          <AbsoluteDiv>
            <Slider ref={sliderRef} {...settings}>
              {slidesData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: "30px",
                    margin: "30px",
                    background: "white",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${item.description}`,
                    }}
                  />
                </div>
              ))}
            </Slider>
          </AbsoluteDiv>
        </LearnContainer>
      </ModalContent>
    </ModalWrapper>
  );
};
