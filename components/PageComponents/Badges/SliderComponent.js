'use client'
import React from "react";
const Slider = dynamic(() => import('react-slick'), { ssr: false })
import Image from "next/image";
import styles from "./Badges.module.scss";
import dynamic from "next/dynamic";

const ImgStyle = {
  marginTop: "auto",
  marginBottom: "auto",
  height: "100px",
  width: "200px",
  padding: "0em",
  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
  margin: "12px 30px",
};
const SliderComponent = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "ease-in-out",
    centerMode: true,
    lazyLoad: "ondemand",
  };
  
  return (
    <Slider className={styles.slider} {...settings}>
      <div>
        <Image
          src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/05/Belgard_MasterCraftsman_Icon_CMYK_GOLD.webp"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/05/Belgard_MasterCraftsman_Icon_CMYK_Text-1.webp"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/05/Belgard_MasterCraftsman_Icon_Rev.webp"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/05/Belgard_MasterCraftsman_Icon_CMYK.webp"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/best-landscaping-companies-in-calgary-1.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/best-landscaping-companies-in-calgary-2.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/best-landscaping-companies-in-calgary-3.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-experts-calgary-1.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-experts-calgary-2.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-experts-calgary-3.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-calgary-top-rated-experts-1.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-calgary-top-rated-experts-2.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-calgary-top-rated-experts-3.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>

      <div>
        <Image
          src="/badges/landscaping-calgary-top-rated-experts-4.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-calgary-top-rated-experts-5.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-calgary-top-rated-experts-6.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-calgary-top-rated-experts-7.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-calgary-top-rated-experts-8.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-calgary-top-rated-experts-9.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-calgary-top-rated-experts-10.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/landscaping-calgary-top-rated-experts-11.svg"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/newBadges1.png"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/newBadges2.png"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src="/badges/newBadges3.png"
          alt="best landscaping companies in calgary"
          style={ImgStyle}
          width={100}
          height={100}
        />
      </div>
    </Slider>
  );
};

export default SliderComponent;
