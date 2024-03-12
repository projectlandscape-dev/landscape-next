import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Container, Section } from "../../layoutComponents";
import styled from "styled-components";

const SliderWrapper = styled.div`
  position: sticky;
  z-index: 2;
  .slick-prev:before,
  .slick-next:before {
    color: var(--clr-accent);
    font-size: 30px;
  }
  .slick-slide {
    padding: 0px 15px;
  }
`;
const SliderItem = styled.div`
  cursor: pointer;
  .main_slider {
    height: 400px;
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const FullImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 30px;
  }
  .close-icon {
    position: absolute;
    top: -10%;
    right: 0%;
    color: black;
    font-size: 24px;
    cursor: pointer;
  }

  .full-image-slider {
    width: 60%;
  }

  &:not(.closing) {
    cursor: pointer;
  }
`;

export default function ImageSliderZoom({ imageSection, title }) {
  const [showFullImage, setShowFullImage] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const mainSliderRef = useRef(null);
  const fullscreenSliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const openFullImage = (index) => {
    setCurrentSlideIndex(index);
    setShowFullImage(true);
  };

  const closeFullImage = () => {
    setShowFullImage(false);
  };

  const handleFullscreenSliderAfterChange = (index) => {
    setCurrentSlideIndex(index);

    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(index);
    }
  };

  const handleCloseOutsideClick = (event) => {
    if (event.target.classList.contains("full-image-overlay")) {
      setShowFullImage(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleCloseOutsideClick);
    };
  }, []);

  return (
    <Section>
      <Container style={{ position: "relative" }}>
        <center>
          <h1 className="title">{title}</h1>
        </center>
        <SliderWrapper>
          <Slider {...settings} ref={mainSliderRef}>
            {imageSection?.map((item, index) => (
              <SliderItem key={index} onClick={() => openFullImage(index)}>
                <Image
                  className="main_slider"
                  src={item?.image?.sourceUrl}
                  alt={item?.image?.altText}
                  width={500}
                  height={300}
                />
                <h3>{item.title}</h3>
              </SliderItem>
            ))}
          </Slider>
        </SliderWrapper>
        {showFullImage && (
          <FullImageOverlay
            className="full-image-overlay"
            onClick={handleCloseOutsideClick}
          >
            <div className="close-icon" onClick={closeFullImage}>
              &#10006;
            </div>
            <Slider
              {...settings1}
              initialSlide={currentSlideIndex}
              className="full-image-slider"
              ref={fullscreenSliderRef}
              afterChange={handleFullscreenSliderAfterChange}
            >
              {imageSection?.map((item, index) => (
                <div key={index}>
                  <Image
                    style={{ height: "70vh", width: "100%" }}
                    src={item?.image?.sourceUrl}
                    alt={item?.image?.altText}
                    width={500}
                    height={300}
                  />
                </div>
              ))}
            </Slider>
          </FullImageOverlay>
        )}
      </Container>
    </Section>
  );
}
