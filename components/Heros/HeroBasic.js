import React from "react";
import styled from "styled-components";
import { ButtonInline, ButtonPrimary } from "../buttons";
import { Carousel } from "react-bootstrap";
import styles from "./HeroBasic.module.scss";
import Image from "next/image";

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
  textShadow: "-3px 3px 3px #000000",
};

export default function HeroBasic(props) {
  return (
    <div className={styles.wrapper}>
      <div className="heroBannerPadding" />
      <div className={styles.heroGrid}>
        <div className={styles.heroWrapper}>
          <Carousel>
            <Carousel.Item interval={5000}>
              <div className={styles.content}>
                <div className={styles.desktopImg}>
                  <Image
                    src="https://res.cloudinary.com/di7j408eq/image/upload/v1685516535/outdoor-living-slider_1_nsnsnr.webp"
                    width={1200}
                    height={100}
                    alt="calgary landscaping"
                    priority={true}
                  />
                </div>
                <div className={styles.mobileImg}>
                  <Image
                    src="https://res.cloudinary.com/di7j408eq/image/upload/v1685516535/outdoor-living-slider_1_nsnsnr.webp"
                    width={1200}
                    height={100}
                    alt="calgary landscaping"
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
                    width={1200}
                    height={100}
                    alt="calgary landscaping"
                    priority={true}
                  />
                </div>
                <div className={styles.mobileImg}>
                  <Image
                    src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658197/hardscaping-slider_1_mj4mkv.webp"
                    width={1200}
                    height={100}
                    alt="calgary landscaping"
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
                    width={1200}
                    height={100}
                    alt="calgary landscaping"
                    priority={true}
                  />
                </div>
                <div className={styles.mobileImg}>
                  <Image
                    src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658338/softscaping-slider-1_yn1qmo.webp"
                    width={1200}
                    height={100}
                    alt="calgary landscaping"
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
