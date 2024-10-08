"use client";
import { useEffect, useRef } from "react";
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

const Badges = () => {
  const sliderRef = useRef(null);
  const scrollInterval = useRef(null);

  // Auto scroll function
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (slider) {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        if (scrollAmount >= maxScrollLeft) {
          scrollAmount = 0;
        } else {
          scrollAmount += slider.clientWidth;
        }
        slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    };

    // Set interval for scrolling every 4 seconds
    scrollInterval.current = setInterval(autoScroll, 3000);

    return () => {
      clearInterval(scrollInterval.current);
    };
  }, []);

  return (
    <div className="spacing mt-5">
      <div className="container">
        <span className="text-center text-2xl font-semibold block mb-5">
          Top Rated Landscaping Calgary
        </span>
      </div>
      <div className="overflow-hidden relative" ref={sliderRef}>
        <div className="!flex transition-all ease-linear duration-1000 space-x-4">
          {badgesImg.map((badge, index) => (
            <div key={index} className="flex-shrink-0 lg:min-w-[20%] md:min-w-[25%] sm:min-w-[33.33%] min-w-[50%] max-w-[200px]">
              <Image
                src={`/badges/${badge}`}
                alt="Best Landscaping Companies in Calgary"
                className={`${styles.ImgStyle} px-4`}
                width={200}
                height={100}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6 p-2 lg:hidden">
        {gridImg.map((badge, index) => (
          <div key={index}>
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
};

export default Badges;
