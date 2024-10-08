import React from "react";
import { Container, Section } from "components/layoutComponents";
import Slider from "react-slick";
import styled from "styled-components";
import Image from "next/image";

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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
  .slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SliderItem = styled.div`
  figure {
    div {
      img {
        height: 300px;
        // width: 60%;
        object-fit: cover;
      }
    }
  }
`;

const Inner = styled.div`
  padding: 1em;
  text-align: center;
`;

export default function Carousel({
  subheader,
  title,
  carouselContent,
  secondHeading,
}) {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
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
        <Text>
          <div>
            <p className="subheader accent">{subheader}</p>
            <h2 className="title">{title}</h2>
            <p style={{ fontSize: "16px" }} className="subheader">
              {" "}
              {secondHeading}
            </p>
          </div>
        </Text>
        <SliderWrapper>
          <Slider {...settings}>
            {carouselContent.map((item, index) => {
              return (
                <div key={index}>
                  <Image
                    className="w-full h-[400px]"
                    alt={item.image.altText || ""}
                    srcSet={item.image.sourceUrl}
                    src={item.image.sourceUrl || item.image.sourceUrl}
                    width={500}
                    height={300}
                  />
                  <Inner>
                    {item.title ? (
                      <h3 className="subheader ">{item.title}</h3>
                    ) : null}
                    {item.description ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${item.description}`,
                        }}
                      />
                    ) : null}
                  </Inner>
                </div>
              );
            })}
          </Slider>
        </SliderWrapper>
      </Container>
    </Section>
  );
}
