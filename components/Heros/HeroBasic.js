import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
const ButtonPrimary = dynamic(() =>
  import("../buttons").then((module) => module.ButtonPrimary)
);
const ButtonInline = dynamic(() =>
  import("../buttons").then((module) => module.ButtonInline)
);
import { Carousel } from "react-bootstrap";
import styles from "./HeroBasic.module.scss";
import Image from "next/image";
import Link from "next/link";

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
  textShadow: "-3px 3px 3px #000000",
};


const TopRightSection = styled.div`
  position: absolute;
  top: 18%;
  right: 0;
  z-index: 2;
  // width: 620px; 
  // height: 310px; 
  &:hover {
    cursor: pointer;
    &:before {
      content: "Click to participate";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgb(82, 178, 44);
      color: black;
      padding: 10px;
      border-radius: 5px;
      z-index: 4;
      opacity: 1; 
      visibility: visible; 
      transition: visibility 0s, opacity 0.3s ease; 
    }
  }
  &:before {
    visibility: hidden; 
    opacity: 0; 
    transition: visibility 0s, opacity 0.3s ease;
  }
  @media screen and (max-width: 768px) {
    top: 19%;
  }
`;
export const GridThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  margin: auto;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function HeroBasic(props) {
  const CustomPrevIcon = (props) => (
    <Image
      style={{ margin: "180px 0 0 80px", width: "auto", height: "150px" }}
      width={200}
      height={200}
      src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/icon-slider-arrow-left.png"
      alt="long-arrow-left"
      priority={true}
      {...props}
    />
  );
  const CustomNextIcon = (props) => (
    <Image
      style={{ margin: "180px 80px 0 0", width: "auto", height: "150px" }}
      width={200}
      height={200}
      src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/unnamed-1.png"
      alt="long-arrow-right--v1"
      priority={true}
      {...props}
    />
  );

  return (
    <div className={styles.wrapper} style={{ position: "relative" }}>
      <Link href="/PromoContest">
        <TopRightSection>
          <Image
            src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/THE-ULTIMATE-BACKYARD-GIVEAWAY-online-banner-1.jpg"
            alt="promo contest"
            width={620}
            height={310}
            style={{ width: "100%", height: "auto" }}
            loading="lazy"
          />
        </TopRightSection>
      </Link>
      <div className="heroBannerPadding" />
      <div className={styles.heroGrid}>
        <div className={styles.heroWrapper}>
          <Carousel prevIcon={<CustomPrevIcon />} nextIcon={<CustomNextIcon />}>
            <Carousel.Item interval={5000}>
              <div className={styles.content}>
                <div className={styles.desktopImg}>
                  <Image
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/outdoor-living-slider_1_nsnsnr.webp"
                    width={500}
                    height={500}
                    alt="calgary landscaping"
                    loading="lazy"
                  />
                </div>
                <div className={styles.mobileImg}>
                  <Image
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/outdoor-living-65cf44686732e.webp"
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="calgary landscaping"
                    loading="lazy"
                  />
                </div>
              </div>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <p style={{ fontSize: "16px" }} className="subheader tan">
                    Award Winning Calgary Landscape Services
                  </p>
                  <h2 className="title">Calgary Outdoor living : Done Right</h2>
                  <p className="subheader tan">
                    Where outdoor living happens Decks, Pergolas, landscape
                    design & more
                  </p>
                  <ButtonPrimary href="/residential-services/outdoor-living">
                    Explore Outdoor living services&#8594;
                  </ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className={styles.content}>
                <div className={styles.desktopImg}>
                  <Image
                    src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658197/hardscaping-slider_1_mj4mkv.webp"
                    width={500}
                    height={500}
                    alt="calgary landscaping"
                    priority={true}
                  />
                </div>
                <div className={styles.mobileImg}>
                  <Image
                    src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658197/hardscaping-slider_1_mj4mkv.webp"
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="calgary landscaping"
                    priority={true}
                  />
                </div>
              </div>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <p style={{ fontSize: "16px" }} className="subheader tan">
                    Award Winning Calgary Hardscaping & Patios
                  </p>
                  <h2 className="title">
                    Calgary Landscaping & Hardscaping Services
                  </h2>
                  <p className="subheader tan">
                    create a stunning outdoor oasis with our hardscaping
                    services Patios, Retaining walls, walkways & more
                  </p>
                  <ButtonPrimary href="/residential-services/hardscaping">
                    Explore Hardscaping services&#8594;
                  </ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className={styles.content}>
                <div className={styles.desktopImg}>
                  <Image
                    src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658338/softscaping-slider-1_yn1qmo.webp"
                    width={500}
                    height={500}
                    alt="calgary landscaping"
                    priority={true}
                  />
                </div>
                <div className={styles.mobileImg}>
                  <Image
                    src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658338/softscaping-slider-1_yn1qmo.webp"
                    width={500}
                    height={500}
                    
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="calgary landscaping"
                    priority={true}
                  />
                </div>
              </div>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <p style={{ fontSize: "16px" }} className="subheader tan">
                    Award Winning Calgary Landscape Services
                  </p>
                  <h2 className="title">
                    Calgary Landscaping & Softscaping services
                  </h2>
                  <p className="subheader tan">
                    Bring your backyard to life Artificial turf, Irrigation, Sod
                    installation & more
                  </p>
                  <ButtonPrimary href="/residential-services/softscaping">
                    Explore softscaping services &#8594;
                  </ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styles.heroBottomText}>
          <div className="container">
            <p>
              Transform your{" "}
              <ButtonInline href="/residential-services/outdoor-living">
                outdoor space
              </ButtonInline>{" "}
              into a serene haven with our unique Calgary landscaping services.
              From custom{" "}
              <ButtonInline href="/landscape-design">design</ButtonInline> to
              expert installation, our team of experts will help you create a
              personalized and functional living space that showcases your
              personality and style.{" "}
              <ButtonInline href="/contact">Get started</ButtonInline> with your
              transformation today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
