import React from "react";
import { Container } from "../../layoutComponents";
import Image from "next/image";
import styled from "styled-components";
import Slider from "react-slick";

export const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  grid-gap: 0;
  margin-top: 2em;
`;
const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: var(--clr-accent);
    font-size: 31px;
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
`;

const TwoImageWithColor = ({
  bigImage,
  title,
  colorHeading,
  colorItem,
  description,
  descriptionTitle,
}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <section style={{ marginTop: "4em" }}>
      <Container>
        <center>
          <h1 className="title">{title}</h1>
        </center>
        <GridAuto>
          <SliderWrapper>
            <Slider {...settings}>
              {bigImage.map((item) => {
                return (
                  <div key={item}>
                    <Image
                      style={{ width: "100%", height: "400px" }}
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                      width={500}
                      height={300}
                    />

                    <h3 className="subheader center mt-2">{item.imageTitle}</h3>
                  </div>
                );
              })}
            </Slider>
          </SliderWrapper>
        </GridAuto>
        <center>
          <h3 className="subheader mt-5">{colorHeading}</h3>
          <GridAuto>
            {colorItem.map((item) => {
              return (
                <div>
                  <Image
                    key={item}
                    src={item?.image?.sourceUrl}
                    alt={item?.image?.altText}
                    width={100}
                    height={100}
                  />
                  <h4>{item.title}</h4>
                </div>
              );
            })}
          </GridAuto>
        </center>
        <h4 className="subheader mt-5">{descriptionTitle}</h4>
        <div
          className="mt-2"
          dangerouslySetInnerHTML={{
            __html: `${description}`,
          }}
        />
      </Container>
    </section>
  );
};

export default TwoImageWithColor;
