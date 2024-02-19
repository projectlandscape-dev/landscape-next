import React from "react";
import dynamic from "next/dynamic";
const ContactBanner = dynamic(() => import("../components/banners/contactBanner"));
const FormContact = dynamic(() => import("../components/Forms/FormContact"));
const LayoutJs = dynamic(() => import("../components/layoutJs"));
const Seo = dynamic(() => import("../components/seo"));
const PortfolioBanner = dynamic(() => import("../components/portfolioBanner"));
const Testimonial = dynamic(() => import("../components/PageComponents/Testimonial/Testimonial"));


export default function Contact() {
  return (
    <LayoutJs>
      <Seo
        title="Contact Us - Call Your Professional Landscapers in Calgary"
        description="Project Landscape is happy to offer you year-round landscaping services, from lawn care to snow removal. Contact us today to schedule your services."
      />
      <ContactBanner
        img="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/banner-image-1.png"
        title="you've made contact!"
        subheader="We Are Currently Booking For The 2024 Season. We can't Wait To Hear Your Ideas And Share Some Of Ours"
        description="At Project Landscape Ltd., our premier outdoor landscaping services will increase the value and overall aesthetic of your home. We use quality brands, and unique products to help keep your lawn healthy, and your home looking incredible. This means an overall better living experience for you and your family."
        secondHeading="What's Your Project ?"
      />
      <PortfolioBanner />
      <FormContact title="complete your outdoor wish list" />
      <Testimonial />
    </LayoutJs>
  );
}
