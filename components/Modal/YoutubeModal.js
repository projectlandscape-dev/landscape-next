import React, { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 8px;
  text-align: center;
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

const YouTubeContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 640px;
  padding-top: 56.25%; /* 16:9 aspect ratio */
`;

const YouTubeVideo = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const YoutubeModal = ({
  isOpen,
  onClose,
  currentVideoId,
  setCurrentVideoId,
}) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  const handleClose = () => {
    // const iframe = document.getElementById("youtube-iframe");
    // iframe.src = "";
    setCurrentVideoId("");
    onClose();
  };

  return (
    <ModalWrapper isOpen={isOpen} onClick={handleModalClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <YouTubeContainer>
          <YouTubeVideo
            id="youtube-iframe"
            src={currentVideoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></YouTubeVideo>
        </YouTubeContainer>
      </ModalContent>
    </ModalWrapper>
  );
};
