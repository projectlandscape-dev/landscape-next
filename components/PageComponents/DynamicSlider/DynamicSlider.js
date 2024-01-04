import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondaryLight } from "components/buttons";
import {
  Actions,
  Container,
  HeroBannerPadding,
} from "components/layoutComponents";
import { Carousel } from "react-bootstrap";
import styles from "./DynamicSlider.moudule.scss";
import Image from "next/image";

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
};

export default function DynamicSlider({ body, sliderdata }) {
  return (
    <div className={styles.wrapper}>
      <div className="heroBannerPadding" />
      <div className={styles.heroGrid}>
        <div className={styles.heroWrapper}>
          <Carousel>
            {sliderdata.map((item) => {
              <Carousel.Item interval={5000}>
                <div className={styles.content}>
                  <Image
                    // src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/under-deck-lighting-calgary.png"
                    src={item.bgimage.sourceUrl}
                    width={1200}
                    height={100}
                    priority={true}
                  />
                  {/* <div className={styles.content1} /> */}
                </div>
                <Carousel.Caption style={captionStyle} className="spacing">
                  <div className="spacing">
                    <h1 className="title">{item.title}</h1>
                    <p className="subheader tan">{item.subheader}</p>
                    {item.button && item.link ? (
                      <ButtonPrimary href={item.link}>
                        {item.button}
                      </ButtonPrimary>
                    ) : (
                      <ButtonPrimary href="/contact">get started</ButtonPrimary>
                    )}
                  </div>
                </Carousel.Caption>
              </Carousel.Item>;
            })}
          </Carousel>
        </div>
        <div className={styles.heroBottomText}>
          <div className="container">
            <Inner
              dangerouslySetInnerHTML={{
                __html: `${body}`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
