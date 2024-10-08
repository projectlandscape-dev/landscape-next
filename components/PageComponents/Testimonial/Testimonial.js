import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { ButtonPrimary } from "../../buttons";
import dynamic from "next/dynamic";
const TestimonialSlider = dynamic(() => import("./TestimonialSlider"));

const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: var(--clr-accent);
    font-size: 24px;
  }
`;

export default function Testimonial() {
  return (
    <>
      <center>
        <h2 className="title py-3 px-0">What Clients Say About Us</h2>
      </center>
      <div className="relative h-full px-1 py-2">
        <Image
          className="w-[1440px] h-[402px]"
          src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/calgary-landscaping-testimonials-banner.jpg"
          alt="Testimonials Banner"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          objectFit="cover"
        />
        <div className="py-20 px-0">
          <div className="w-[85%] mx-auto max-w-[95rem]">
            <SliderWrapper>
              <TestimonialSlider />
            </SliderWrapper>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <ButtonPrimary href="/testimonials">Read All Reviews</ButtonPrimary>
        </div>
      </div>
    </>
  );
}
