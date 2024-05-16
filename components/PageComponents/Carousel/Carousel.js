import React from "react";
import { Container, Section } from "components/layoutComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Image from "components/Image";

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
    display : flex;
    justify-content : center;
    align-items : center;
  }
`;

const SliderItem = styled.div`
  figure {
    div {
      img {
        height: auto;
        width: 50%;
        object-fit: cover;
      }
    }
  }
`;

const Inner = styled.div`
  padding: 2em;
`;

// const StyledImg = styled(GatsbyImage)`
//   height: 450px;
//   width: 100%;
//   object-fit: cover;
// `

export default function Carousel({
  subheader,
  title,
  carouselContent,
  secondHeading,
}) {
  let width = "100%";
  let height = "300px";

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
                <SliderItem key={index}>
                  <Image
                    alt={item.image.altText || ""}
                    srcSet={item.image.sourceUrl}
                    src={item.image.sourceUrl}
                    width={width}
                    height={height}
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
                </SliderItem>
              );
            })}
          </Slider>
        </SliderWrapper>
      </Container>
    </Section>
  );
}
