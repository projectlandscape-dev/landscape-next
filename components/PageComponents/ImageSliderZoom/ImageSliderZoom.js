import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Container, Section } from "../../layoutComponents";
import styled from "styled-components";

const SliderWrapper = styled.div`
  position: sticky;
  z-index: 1;
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
  padding: 10px 5px;

  transition: transform 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
  .main_slider {
    height: 350px;
    width: 100%;
    object-fit: cover;
  }
`;

const FullImageOverlay = styled.div`
  position: absolute;
  top: 6%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  .slick-prev:before,
  .slick-next:before {
    color: white;
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

const ImageSliderZoom = ({ imageSection, title }) => {
  const [showFullImage, setShowFullImage] = useState(false);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1?.current);
    setNav2(sliderRef2?.current);
  }, []);

  const slider1Settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const slider2Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const openFullImage = (index) => {
    setSelectedImageIndex(index);
    setShowFullImage(true);
  };

  const closeFullImage = () => {
    setShowFullImage(false);
  };

  useEffect(() => {
    if (sliderRef2.current) {
      const handleClickOutside = (event) => {
        if (
          showFullImage &&
          sliderRef2.current.innerSlider.list &&
          !sliderRef2.current.innerSlider.list.contains(event.target) &&
          !event.target.classList.contains("slick-prev") &&
          !event.target.classList.contains("slick-next")
        ) {
          setShowFullImage(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showFullImage]);

  return (
    <Section>
      <Container style={{ position: "relative" }}>
        <center>
          <h1 className="title mb-4">{title}</h1>
        </center>
        <SliderWrapper>
          <Slider
            {...slider1Settings}
            asNavFor={nav2}
            ref={sliderRef1}
          >
            {imageSection?.map((item, index) => (
              <SliderItem key={index} onClick={() => openFullImage(index)}>
                <Image
                  className="main_slider"
                  src={item?.image?.sourceUrl}
                  alt={item?.image?.altText}
                  width={500}
                  height={300}
                />
                <h3>{item?.title}</h3>
              </SliderItem>
            ))}
          </Slider>
        </SliderWrapper>
        {showFullImage && (
          <FullImageOverlay className="full-image-overlay">
            <div className="close-icon" onClick={closeFullImage}>
              &#10006;
            </div>
            <Slider
              {...slider2Settings}
              asNavFor={nav1}
              className="full-image-slider"
              ref={sliderRef2}
              initialSlide={selectedImageIndex}
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
};

export default ImageSliderZoom;
