import styled from "styled-components";
import { ButtonInline } from "../buttons";
import { ButtonPrimary } from "../buttons";
import Carousel from 'react-bootstrap/Carousel';
import styles from "./HeroBasic.module.scss";
import Image from "next/image";
import Link from "next/link";

const captionStyle = {
  textAlign: "left",
  height:'60%',
  color: "var(--txt-light)",
  textShadow: "-3px 3px 3px #000000",
};

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
      // style={{ margin: "180px 0 0 80px", width: "100%", height: "auto" }}
      style={{  width: "100%", height: "auto" }}
      width={200}
      height={150}
      src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/icon-slider-arrow-left.png"
      alt="long-arrow-left"
      {...props}
    />
  );
  const CustomNextIcon = (props) => (
    <Image
      // style={{ margin: "180px 80px 0 0", width: "100%", height: "auto" }}
      style={{  width: "100%", height: "auto" }}
      width={200}
      height={150}
      src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/unnamed-1.png"
      alt="long-arrow-right--v1"
      {...props}
    />
  );

  return (
    <div className={styles.wrapper} style={{ position: "relative" }}>
      <Link href="/PromoContest">
        <div className={styles.promobgImg}>
          <Image
            style={{
              width: "100%",
              height: "auto",
            }}
            src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/THE-ULTIMATE-BACKYARD-GIVEAWAY-online-banner-1.jpg"
            // src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/unnamed-1-1-2.webp"
            alt="promo contest"
            width={800}
            height={450}
            sizes="(max-width: 768px) 50vw, 100vw"
          />
        </div>
      </Link>
      <div className="heroBannerPadding" />
      <div className={styles.heroGrid}>
        <div className={styles.heroWrapper}>
          <Carousel prevIcon={<CustomPrevIcon />} nextIcon={<CustomNextIcon />} >
            <Carousel.Item interval={5000}>
              <div className={styles.imgContainer}>
                <Image
                
                  style={{ objectFit: "cover", aspectRatio :"16/9" }}
                  src="https://res.cloudinary.com/di7j408eq/image/upload/v1685516535/outdoor-living-slider_1_nsnsnr.webp"
                  fill
                  sizes="(max-width: 768px) 33vw, 50vw"
                  alt="calgary landscaping"
                  priority={true}
                />
              </div>
              <Carousel.Caption style={captionStyle} >
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
              <div className={styles.imgContainer}>
                <Image
                  style={{ objectFit: "cover" }}
                  src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658197/hardscaping-slider_1_mj4mkv.webp"
                  fill
                  alt="calgary landscaping"
                  sizes="(max-width: 768px) 33vw, 100vw"
                  // priority
                />
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
              <div className={styles.imgContainer}>
                <Image
                  style={{ objectFit: "cover" }}
                  src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658338/softscaping-slider-1_yn1qmo.webp"
                  alt="calgary landscaping"
                  fill
                  sizes="(max-width: 768px) 33vw, 100vw"
                  // priority
                />
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
