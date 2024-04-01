import React from "react";
import { Container, Section } from "../../layoutComponents";
import styled from "styled-components";
import Slider from "react-slick";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 2em;
  }
`;

const SliderWrapper = styled.div`
  width: 50%;
  .slick-prev:before,
  .slick-next:before {
    color: var(--clr-accent);
    font-size: 30px;
  }
  .slick-slide {
    padding: 0px 15px;
  }
  .slick-dots {
    li {
      height: 30px;
      width: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const LeftBox = styled.div`
  width: 45%;
  border: 1px solid var(--clr-tan);
  padding: 58px;
  .boxtitle {
    color: var(--clr-tan);
    text-decoration: underline;
    width: 160px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const SliderWithContent = ({ imageBox, boxContent, boxTitle, title }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
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
  return (
    <Section>
      <Container>
        <center>
          <h1 className="title mb-5">{title}</h1>
        </center>
        <Wrapper>
          <LeftBox>
            <h3 className="subheader ">{boxTitle}</h3>
            <hr className="boxtitle" />
            <div
              dangerouslySetInnerHTML={{
                __html: `${boxContent}`,
              }}
            />
          </LeftBox>
          <SliderWrapper>
            <Slider {...settings}>
              {imageBox.map((item) => {
                return (
                  <div key={item}>
                    <Image
                      style={{ width: "100%", height: "350px" }}
                      src={item.image.sourceUrl}
                      alt={item.image.altText}
                      width={500}
                      height={300}
                    />
                  </div>
                );
              })}
            </Slider>
          </SliderWrapper>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default SliderWithContent;
