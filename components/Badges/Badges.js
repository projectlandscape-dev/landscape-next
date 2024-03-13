import React, { useState, useRef, useEffect, useCallback } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./Badges.module.scss";

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
  const [visibleBadges, setVisibleBadges] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef(null);

  const settings = {
    infinite: true,
    lazyLoad: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 100 && hasMore) {
        loadMore();
      }
    }
  }, [hasMore]);

  const loadMore = () => {
    setVisibleBadges((prevVisibleBadges) => prevVisibleBadges + 10);
    if (visibleBadges >= badgesImg.length) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  const handleLazyLoad = (slideIndex) => {
    if (slideIndex >= badgesImg.length) {
      console.log(`Slide ${slideIndex} is about to be loaded.`);
    }
  };

  return (
    <div className="spacing mt-5" ref={containerRef}>
      <div className="container">
        <h2 className="title center">Top Rated Calgary Landscaping Company</h2>
      </div>
      <Slider className={styles.slider} {...settings} onLazyLoad={handleLazyLoad}>
        {badgesImg.slice(0, visibleBadges).map((badge) => (
          <div key={badge}>
            <Image
              src={`/badges/${badge}`}
              alt="Best Landscaping Companies in Calgary"
              className={styles.ImgStyle}
              width={200}
              height={100}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
      <div className={styles.grid}>
        {gridImg.map((badge) => (
          <div key={badge}>
            <Image
              src={`/badges/${badge}`}
              alt="Best Landscaping Companies in Calgary"
              className={styles.ImgStyle}
              width={200}
              height={100}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}