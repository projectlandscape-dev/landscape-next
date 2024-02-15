import React from "react";
const LayoutJs = dynamic(()=>import("../components/layoutJs"))
const MainServicesLinks = dynamic(()=>import("../components/Services/MainServicesLinks"))
const AllServicesBanner = dynamic(()=>import("../components/Services/AllServicesBanner"))
const FaqFeatured = dynamic(()=>import("../components/faq/faqFeatured"))
const MainTestimonials = dynamic(()=>import("../components/testimonials/mainTestimonials"))
const HeroSlider = dynamic(()=>import("../components/Heros/HeroBasic"))
const Cta3 = dynamic(()=>import("../components/Cta/Cta3"))
const Seo = dynamic(()=>import("../components/seo"))

import dynamic from "next/dynamic";

export default function residentialServicesPage() {
  return (
    <LayoutJs>
      <Seo
        title="Residential Landscaping Services in Calgary | Project Landscape"
        description="As one of Calgary’s most trusted full-service landscape design and maintenance company with more than 20 years of combined experience, our knowledgeable team is dedicated to putting your needs first and providing you with a quality of service. "
      />
      <HeroSlider />
      <MainServicesLinks
        title="RESIDENTIAL SERVICES"
        description="As one of Calgary’s most trusted full-service landscape design and maintenance company with more than 20 years of combined experience., our knowledgeable team is dedicated to putting your needs first and providing you with a quality of service. Our performance and execution are what make us stand out, proving our code of conduct and ethics are our driving force behind the superior level of work. Whether you are looking for seasonal yard clean-up or landscaping construction, we are the team you can trust to get the job done right, making your landscaping visions come to life."
      />
      <Cta3 />
      <AllServicesBanner />
      <Cta3 />
      <MainTestimonials />
      <FaqFeatured />
    </LayoutJs>
  );
}
