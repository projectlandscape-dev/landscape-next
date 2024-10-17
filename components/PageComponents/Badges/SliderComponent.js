import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./Badges.module.scss";

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const images = [
    "https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/05/Belgard_MasterCraftsman_Icon_CMYK_GOLD.webp",
    "https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/05/Belgard_MasterCraftsman_Icon_CMYK_Text-1.webp",
    "https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/05/Belgard_MasterCraftsman_Icon_Rev.webp",
    "https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/05/Belgard_MasterCraftsman_Icon_CMYK.webp",
    "/badges/best-landscaping-companies-in-calgary-1.svg",
    "/badges/best-landscaping-companies-in-calgary-2.svg",
    "/badges/best-landscaping-companies-in-calgary-3.svg",
    "/badges/landscaping-experts-calgary-1.svg",
    "/badges/landscaping-experts-calgary-2.svg",
    "/badges/landscaping-experts-calgary-3.svg",
    "/badges/landscaping-calgary-top-rated-experts-1.svg",
    "/badges/landscaping-calgary-top-rated-experts-2.svg",
    "/badges/landscaping-calgary-top-rated-experts-3.svg",
    "/badges/landscaping-calgary-top-rated-experts-4.svg",
    "/badges/landscaping-calgary-top-rated-experts-5.svg",
    "/badges/landscaping-calgary-top-rated-experts-6.svg",
    "/badges/landscaping-calgary-top-rated-experts-7.svg",
    "/badges/landscaping-calgary-top-rated-experts-8.svg",
    "/badges/landscaping-calgary-top-rated-experts-9.svg",
    "/badges/landscaping-calgary-top-rated-experts-10.svg",
    "/badges/landscaping-calgary-top-rated-experts-11.svg",
    "/badges/newBadges1.png",
    "/badges/newBadges2.png",
    "/badges/newBadges3.png",
  ];

  return (
    <Slider className={styles.slider} {...settings}>
      {images.map((src, index) => (
        <Image
          key={index}
          className="m-5 mx-auto !p-2 h-[110px] !w-[200px] shadow-2xl"
          src={src}
          alt="best landscaping companies in calgary"
          width={100}
          height={100}
        />
      ))}
    </Slider>
  );
};

export default SliderComponent;
