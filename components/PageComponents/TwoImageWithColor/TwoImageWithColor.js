import React from "react";
import { Container } from "../../layoutComponents";
import Image from "next/image";
import styled from "styled-components";
import Slider from "react-slick";

export const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  grid-gap: 3em;
  margin-top: 2em;
`;
const SliderWrapper = styled.div`
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
`;

const TwoImageWithColor = ({
  bigImage,
  stationaryImage,
  title,
  colorHeading,
  colorItem,
  description,
  descriptionTitle,
}) => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
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
                  </div>
                );
              })}
            </Slider>
          </SliderWrapper>
          {stationaryImage && (
            <div>
              <Image
                style={{ width: "100%", height: "400px" }}
                src={stationaryImage?.sourceUrl}
                alt={stationaryImage?.altText}
                width={500}
                height={300}
              />
            </div>
          )}
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
