import React from "react";
import LayoutJs from "../components/layoutJs";
import HeroBasic from "../components/Heros/HeroBasic";
import Badges from "../components/Badges/Badges";
import AllServices from "../components/AllServices/AllServices";
import { Container, Flex, Section } from "../components/layoutComponents";
import { ButtonInline } from "../components/buttons";
import styled from "styled-components";
import Cta3 from "../components/Cta3/Cta3";
import ProductsImg from "../components/Sections/productsImg";
import ShowroomSection from "../components/Sections/ShowroomSection";
import MainVideo from "../components/Sections/MainVideo";
import LandscapingImg from "../components/Sections/landscapingImg";
import OasisImg from "../components/Sections/oasisImg";
import MainTrends from "../components/trends/mainTrends";
import Why from "../components/why";
import Ebook from "../components/ebook";
import MainTestimonials from "../components/testimonials/mainTestimonials";
import Videos from "../components/videos";
import FaqFeatured from "../components/faq/faqFeatured";
import { Helmet } from "react-helmet";
import Seo from "../components/seo";
import MainServices from "../components/MainServices/MainServices";
import PortfolioBanner from "../components/portfolioBanner";
import StaticProcessArea from "../components/PageComponents/StaticProcessArea";
import CompanyValue from "../components/companyvalue";

const Wrapper = styled.div`
  background: url("https://res.cloudinary.com/di7j408eq/image/upload/v1685658197/hardscaping-slider_1_mj4mkv.webp"),
    rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
`;

const Divider = styled.div`
  width: 3px;
  height: 400px;
  background-color: var(--clr-accent);

  @media screen and (max-width: 48em) {
    display: none;
  
`;

export default function Index() {
  return (
    <LayoutJs>
      <Seo
        title="Landscaping Calgary | Top Rated | Project Landscape Ltd."
        description="Our trusted and top-rated Calgary landscapers can help with your residential and commercial landscaping needs. Call Us ☎️"
      />
      <HeroBasic />
      <Badges />
      <MainServices />
      <AllServices />
      <Wrapper>
        <section>
          <div className="container">
            <div className="flex">
              <div>
                <h2 className="title tan">
                  Discover why Project Landscape is the largest residential
                  landscaping company in Calgary
                </h2>
              </div>
              <Divider />
              <div>
                <p>
                  <ButtonInline href="/about">Project Landscape</ButtonInline>{" "}
                  has established itself as the largest residential Calgary
                  landscaping company due to its commitment to taking landscape{" "}
                  <ButtonInline href="/landscape-design">
                    design and installations
                  </ButtonInline>{" "}
                  to the next level in{" "}
                  <ButtonInline href="/residential-services/outdoor-living">
                    outdoor living
                  </ButtonInline>
                  . Several factors contribute to our success and industry
                  dominance. Firstly, Project Landscape excels in{" "}
                  <ButtonInline href="/landscape-design">
                    landscape design
                  </ButtonInline>
                  . We have a team of highly skilled and creative designers who
                  understand the unique needs and preferences of Calgary
                  homeowners. Our designs blend aesthetics with functionality,
                  ensuring that every outdoor space is transformed into a
                  stunning and practical oasis. Secondly, we are known for our
                  exceptional Calgary landscaping{" "}
                  <ButtonInline href="/esidential-services/concrete-installations">
                    installation services
                  </ButtonInline>
                  . Project Landscape has a dedicated{" "}
                  <ButtonInline href="/about">
                    team of experienced professionals
                  </ButtonInline>{" "}
                  who execute the designs with precision and attention to
                  detail. From{" "}
                  <ButtonInline href="/residential-services/hardscaping">
                    hardscaping
                  </ButtonInline>{" "}
                  to{" "}
                  <ButtonInline href="/residential-services/softscaping">
                    softscaping
                  </ButtonInline>
                  ,{" "}
                  <ButtonInline href="/residential-services/irrigation-landscape-lighting">
                    irrigation systems
                  </ButtonInline>{" "}
                  to{" "}
                  <ButtonInline href="/landscape-lighting-services-calgary">
                    outdoor lighting
                  </ButtonInline>
                  , we handle every aspect of the installation process.
                  Additionally, Project Landscape Calgary stands out for its
                  commitment to customer satisfaction. We prioritize open
                  communication while actively involving clients in the design
                  and installation phases. Our dedication to meeting deadlines,
                  providing transparent pricing, and delivering high-quality
                  workmanship has earned us a{" "}
                  <ButtonInline href="/testimonials">
                    stellar reputation
                  </ButtonInline>{" "}
                  among homeowners in Calgary.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
      <Cta3 />
      <ProductsImg />
      <ShowroomSection />
      <MainVideo />
      <LandscapingImg
        title="Landscaping services in Calgary"
        to="/about"
        button="more about us"
      />
      <OasisImg
        title="Bring your outdoor oasis to life"
        to="/contact"
        button="let's get in touch"
      />
      <Cta3 />
      <MainTrends />
      <PortfolioBanner />
      <StaticProcessArea />
      <Why />
      {/* <Ebook title="download our landscaping ebook" href="" /> */}
      <MainTestimonials />
      <FaqFeatured />
      <CompanyValue />
      <Videos />
    </LayoutJs>
  );
}
