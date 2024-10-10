import Image from "next/image";
import React from "react";
import { ButtonPrimary } from "../buttons";
import styles from "./HeroBasic.module.scss";
import Carousel from "react-bootstrap/Carousel";


const captionStyle = {
  textAlign: "left",
  top : '30%',
  color: "var(--txt-light)",
  textShadow: "-3px 3px 3px #000000",
};
const CustomPrevIcon = (props) => (
  <Image
    className="w-full h-auto"
    width={100}
    height={100}
    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/icon-slider-arrow-left.png"
    alt="long-arrow-left"
    {...props}
  />
);
const CustomNextIcon = (props) => (
  <Image
    className="w-full h-auto"
    width={100}
    height={100}
    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/unnamed-1.png"
    alt="long-arrow-right--v1"
    {...props}
  />
);
const HeroCarousel = () => {
  return (
    <Carousel prevIcon={<CustomPrevIcon />} nextIcon={<CustomNextIcon />}>
    <Carousel.Item interval={5000}>
      <div className={styles.imgContainer}>
        <Image
          className="object-cover"
          src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658197/hardscaping-slider_1_mj4mkv.webp"
          fill
          alt="calgary landscaping"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          decoding="async"
        />
      </div>
      <Carousel.Caption style={captionStyle} className="spacing">
        <div className="spacing">
          <p className="subheader tan text-base">
            Award Winning Landscaping Calgary Services
          </p>
          <h1 className="title">
            Calgary Landscaping & Hardscaping Services
          </h1>
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
      <div className={styles.imgContainer}>
        <Image
          className="object-cover"
          src="https://res.cloudinary.com/di7j408eq/image/upload/v1685516535/outdoor-living-slider_1_nsnsnr.webp"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="calgary landscaping"  
        />
      </div>
      <Carousel.Caption style={captionStyle}>
        <div className="spacing">
        <p className="subheader tan text-base">
            Award Winning Landscaping Calgary Services
          </p>
          <h2 className="title">Calgary Outdoor living : Done Right</h2>
          <p className={styles.subheader}>
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
      <div className={styles.imgContainer}>
        <Image
          className="object-cover"
          src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658338/softscaping-slider-1_yn1qmo.webp"
          alt="calgary landscaping"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
      </div>
      <Carousel.Caption style={captionStyle} className="spacing">
        <div className="spacing">
        <p className="subheader tan text-base">
            Award Winning Landscaping Calgary Services
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
  );
};

export default HeroCarousel;
