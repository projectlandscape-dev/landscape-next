import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ButtonPrimary } from "../buttons";
import dynamic from "next/dynamic";
const TestimonialSlider = dynamic(() => import("./TestimonialSlider"));

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  .testimonial_banner {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: var(--clr-accent);
    font-size: 24px;
  }
`;

export default function MainTestimonials() {
  return (
    <div>
      <center>
        <h2 className="title py-4">What Clients Say About Us</h2>
      </center>
      <Wrapper>
        <Image
          className="testimonial_banner"
          src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/calgary-landscaping-testimonials-banner.jpg"
          alt="hardscaping-slider_1_mj4mkv"
          width={500}
          height={500}
          sizes="(max-width:768px) , 33vw, 50vw"
        />
        <section>
          <div className="container">
            <SliderWrapper>
              <TestimonialSlider />
            </SliderWrapper>
          </div>
        </section>
        <div style={{ textAlign: "end" }}>
          <ButtonPrimary href="/testimonials">Read All Reviews</ButtonPrimary>
        </div>
      </Wrapper>
    </div>
  );
}
