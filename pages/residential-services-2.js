import React from "react";
import LayoutJs from "../components/layoutJs";
import MainServicesLinks from "../components/Services/MainServicesLinks";
import AllServicesBanner from "../components/Services/AllServicesBanner";
import FaqFeatured from "../components/faq/faqFeatured";
import MainTestimonials from "../components/testimonials/mainTestimonials";
import HeroSlider from "../components/Heros/HeroBasic";
import Cta3 from "../components/Cta/Cta3";
import Seo from "../components/seo";

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
