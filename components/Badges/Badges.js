import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./Badges.module.scss";

const ImgStyle = {
  marginTop: "auto",
  marginBottom: "auto",
  height: "100px",
  width: "200px",
  padding: "0em",
  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
  margin: "12px 30px",

};

const badgesImg = [
  "best-landscaping-companies-in-calgary-1.svg",
  "best-landscaping-companies-in-calgary-2.svg",
  "best-landscaping-companies-in-calgary-3.svg",
  "landscaping-experts-calgary-1.svg",
  "landscaping-experts-calgary-2.svg",
  "landscaping-experts-calgary-3.svg",
  "landscaping-calgary-top-rated-experts-1.svg",
  "landscaping-calgary-top-rated-experts-2.svg",
  "landscaping-calgary-top-rated-experts-3.svg",
  "landscaping-calgary-top-rated-experts-4.svg",
  "landscaping-calgary-top-rated-experts-5.svg",
  "landscaping-calgary-top-rated-experts-6.svg",
  "landscaping-calgary-top-rated-experts-7.svg",
  "landscaping-calgary-top-rated-experts-8.svg",
  "landscaping-calgary-top-rated-experts-9.svg",
  "landscaping-calgary-top-rated-experts-10.svg",
  "landscaping-calgary-top-rated-experts-11.svg",
  "newBadges1.png",
  "newBadges2.png",
  "newBadges3.png",
];

const gridImg = [
  "best-landscaping-companies-in-calgary-1.svg",
  "best-landscaping-companies-in-calgary-2.svg",
  "landscaping-calgary-top-rated-experts-3.svg",
  "landscaping-calgary-top-rated-experts-9.svg",
  "landscaping-calgary-top-rated-experts-11.svg",
];

export default function Badges() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
  };
  return (
    <div className={styles.wrapper}>
      <section>
        <div className="spacing">
          <div className="container">
            <h2 className="title center">
              top rated calgary landscaping company
            </h2>
          </div>
          <Slider className={styles.slider} {...settings}>
            {badgesImg.map((badge) => (
              <div key={badge}>
                <Image
                  src={`/badges/${badge}`}
                  alt="best landscaping companies in calgary"
                  style={ImgStyle}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </Slider>
          <div className={styles.grid}>
            {gridImg.map((badge) => (
              <div key={badge}>
                <Image
                  src={`/badges/${badge}`}
                  alt="best landscaping companies in calgary"
                  style={ImgStyle}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
