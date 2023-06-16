import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondaryLight } from "../../buttons";
import { Actions, Container, HeroBannerPadding } from "../../layoutComponents";
import { Carousel } from "react-bootstrap";
// import styles from "./PatioSlider.module.scss";
import styles from "../../Heros/HeroBasic.module.scss";
import Image from "next/image";

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
};

export default function PatioSlider({ title }) {
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
                  <h2 className="title">outdoor living done right</h2>
                  <p className="subheader tan">Where outdoor living happens</p>
                  <ButtonPrimary href="/residential-services/outdoor-living">
                    get started &#8594;
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
                  <h2 className="title">hardscaping services</h2>
                  <p className="subheader tan">
                    create a stunning outdoor oasis with our hardscaping
                    services
                  </p>
                  <ButtonPrimary href="/residential-services/hardscaping">
                    get started &#8594;
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
                  <h2 className="title">softscaping services</h2>
                  <p className="subheader tan">Bring your backyard to life</p>
                  <ButtonPrimary href="/residential-services/softscaping">
                    get started &#8594;
                  </ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styles.heroBottomText}>
          <Container>
            <p>
              Looking for Calgary hardscaping companies or patio builders? Look
              no further than Project Landscape. Our team of experts is here to
              help you create the outdoor living space of your dreams. With our
              experience and expertise in hardscaping and patio construction, we
              can transform your backyard into a beautiful and functional oasis.
              Trust Project Landscape to bring your vision to life. Contact us
              today to get started on your project.
            </p>
          </Container>
        </div>
      </div>
    </div>
  );
}
