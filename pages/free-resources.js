import React from "react";
import Banner from "../components/banners/banner";
import LayoutJs from "../components/layoutJs";
import { Section, Container } from "../components/layoutComponents";
import Seo from "../components/seo";

export default function FreeResources() {
  return (
    <LayoutJs>
      <Seo
        title="Free Landscaping Resources | Project Landscape Ltd."
        description="Project Landscape provides free downloadable resources for customers who want to improve their outdoor living space!"
      />
      <Banner
        img="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/banner-image-1.png"
        title="free landscaping and outdoor living resources"
        description="At Project Landscape Ltd., our premier outdoor landscaping services will increase the value and overall aesthetic of your home. We use quality brands, and unique products to help keep your lawn healthy, and your home looking incredible. This means an overall better living experience for you and your family."
      />
      <Section>
        <Container>
          <center>free resources coming soon!</center>
        </Container>
      </Section>
    </LayoutJs>
  );
}
