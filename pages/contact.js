import React from "react";
import ContactBanner from "../components/banners/contactBanner";
import FormContact from "../components/Forms/FormContact";
import LayoutJs from "../components/layoutJs";
import Seo from "../components/seo";

import PortfolioBanner from "../components/portfolioBanner";
import Testimonial from "../components/PageComponents/Testimonial/Testimonial";

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
