import React from "react";
import styled from "styled-components";
import { ButtonInline, ButtonPrimary } from "../buttons";
import { Carousel } from "react-bootstrap";
import styles from "./HeroBasic.module.scss";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
// import { GridThree } from "../layoutComponents";

const device = {
  md: "48em",
};
const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
  textShadow: "-3px 3px 3px #000000",
};
//******************************* * promo banner css here ******************************
const TopRightSection = styled.div`
  position: absolute;
  top: 17%;
  right: 0;
  z-index: 2;
  width: 300px;
  height: 280px;
  background: url("https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/new.png")
    center/cover;
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

const Box = styled.div`
  background: #042d46;
  padding: 0 5px 3px 5px;
  border-radius: 10px;
  color: white;
  text-align: center;
`;

const Grid1 = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2px;
`;

//******************************* * promo banner css end ******************************

export default function HeroBasic(props) {
  const CustomPrevIcon = (props) => (
    <Image
      style={{ margin: "85px 0px 0 80px" }}
      width={200}
      height={200}
      src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/icon-slider-arrow-left.png"
      alt="long-arrow-left"
      {...props}
    />
  );
  const CustomNextIcon = (props) => (
    <Image
      style={{ margin: "85px 80px 0 0" }}
      width={200}
      height={200}
      src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/unnamed-1.png"
      alt="long-arrow-right--v1"
      {...props}
    />
  );

  return (
    <div className={styles.wrapper} style={{ position: "relative" }}>
      {/*  *******************promo banner code here************************  */}
      <TopRightSection>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Image
            src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-1-1-1.png"
            alt="logo"
            width={80}
            height={80}
          />
        </div>
        <div className={styles.banner_container}>
          <Image
            src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/giveaway-logo-1.png"
            alt="logo"
            width={150}
            height={150}
          />
          <GridThree>
            <Box>
              <div className={styles.innerBox}>
                <div className={styles.outer_circle}>
                  <Image
                  src='https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/1__1_-removebg-preview.png'
                  alt="user"
                  width={30}
                  height={30}
                  />
                </div>
                <h4 className={styles.social}>Follow</h4>
              </div>
              <p className={styles.promo_content}>
                Transform your outdoor space into a serene haven with
              </p>
            </Box>
            <Box>
              <div className={styles.innerBox}>
              <div className={styles.outer_circle}>
                  <Image
                  src='https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/2__1_-removebg-preview.png'
                  alt="user"
                  width={30}
                  height={30}
                  />
                </div>
                                <h4 className={styles.social}>Like & comment</h4>
              </div>
              <p className={styles.promo_content}>
                Transform your outdoor space into a serene haven with
              </p>
            </Box>
            <Box>
              <div className={styles.innerBox}>
              <div className={styles.outer_circle}>
                  <Image
                  src='https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/3__1_-removebg-preview.png'
                  alt="user"
                  width={30}
                  height={30}
                  />
                </div>
                <h4 className={styles.social}>Share</h4>
              </div>
              <p className={styles.promo_content}>
                Transform your outdoor space into a serene haven with
              </p>
            </Box>
          </GridThree>
        </div>
        <center>
          <p className={styles.main_content}>
            Transform your outdoor space into a serene haven with our unique
            Calgary landscaping services.
          </p>
        </center>
        <div className={styles.button_container}>
          <div className={styles.button1}>You have until 25th August</div>
          <button className={styles.button2}>Good Luck</button>
        </div>
      </TopRightSection>

      {/*  ***************************promo banner code end here*********************************  */}

      <div className="heroBannerPadding" />
      <div className={styles.heroGrid}>
        <div className={styles.heroWrapper}>
          <Carousel prevIcon={<CustomPrevIcon />} nextIcon={<CustomNextIcon />}>
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
