import React from "react";
import { ButtonPrimary } from "components/buttons";
import { Carousel } from "react-bootstrap";
import styles from "./DynamicSlider.module.scss";
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
  console.log(sliderdata, "data333");
  return (
    <div className={styles.wrapper}>
      <div className="heroBannerPadding" />
      <div className={styles.heroGrid}>
        <div className={styles.heroWrapper}>
          <Carousel>
            {sliderdata.map((item) => {
              return (
                <Carousel.Item interval={5000}>
                  <div className={styles.content}>
                    <Image
                      src={item?.bgimage?.sourceUrl}
                      alt={item?.bgimage?.altText}
                      width={500}
                      height={100}
                    />
                  </div>
                  <Carousel.Caption style={captionStyle} className="spacing">
                    <div className="spacing">
                      <p style={{ fontSize: "16px" }} className="subheader tan">
                        {item.titlecopy}
                      </p>
                      <h1 className="title">{item.title}</h1>
                      <p className="subheader tan">{item.subheader}</p>
                      {item.button && item.link ? (
                        <ButtonPrimary href={item.link}>
                          {item.button}
                        </ButtonPrimary>
                      ) : (
                        <ButtonPrimary href="/contact">
                          get started
                        </ButtonPrimary>
                      )}
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className={styles.heroBottomText}>
          <div className="container">
            <div
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
