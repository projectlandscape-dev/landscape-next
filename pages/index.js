import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
// const LayoutJs = dynamic(()=> import("../components/layoutJs"));
import LayoutJs from "../components/layoutJs";
// const HeroBasic = dynamic(()=> import("../components/Heros/HeroBasic"));
import HeroBasic from "../components/Heros/HeroBasic";
import Badges from "../components/Badges/Badges";
const AllServices = dynamic(()=> import("../components/AllServices/AllServices"));
const ButtonInline = dynamic(() => import('../components/buttons').then((module) => module.ButtonInline));
const Cta3 = dynamic(()=> import("../components/Cta3/Cta3"));
const ProductsImg = dynamic(()=> import("../components/Sections/productsImg"));
const ShowroomSection = dynamic(()=> import("../components/Sections/ShowroomSection"));
const MainVideo = dynamic(()=> import("../components/Sections/MainVideo"));
const LandscapingImg = dynamic(()=> import("../components/Sections/landscapingImg"));
const OasisImg = dynamic(()=> import("../components/Sections/oasisImg"));
const ProjectImg = dynamic(()=> import("../components/Sections/ProjectImg"));
const MainTrends = dynamic(()=> import("../components/trends/mainTrends"));
const Why = dynamic(()=> import("../components/why"));
import MainTestimonials from "../components/testimonials/mainTestimonials";
const Videos = dynamic(()=> import("../components/videos"));
import FaqFeatured from "../components/faq/faqFeatured";
const MainServices = dynamic(()=> import("../components/MainServices/MainServices"));
const PortfolioBanner = dynamic(()=> import("../components/portfolioBanner"));
import StaticProcessArea from "../components/PageComponents/StaticProcessArea/StaticProcessArea";
import FeaturedWork from "../components/StaticFeaturedWork";
const FinanceBanner = dynamic(()=> import("../components/financeBanner"));
const ScrollCount = dynamic(()=> import("../components/PageComponents/ScrollCount/ScrollCount"),{ssr:false});
const NewBlockBlack = dynamic(()=> import("../components/Sections/NewBlockBlack"));
const Seo = dynamic(()=>import("../components/seo"));



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
      {/* <div > */}
        <PortfolioBanner />
      {/* </div> */}
      <MainServices />
      <NewBlockBlack/>
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
                  <ButtonInline href="/residential-services/concrete-installations">
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
      <Badges />
      <ProductsImg />
      <ShowroomSection />
      <ScrollCount/>
      <ProjectImg />
      <MainVideo />
      <LandscapingImg
        title="Landscaping Made Simple For Calgary Homeowners"
        to="/about"
        button="Hire An Expert"
      />
      <OasisImg
        title="Bring your outdoor oasis to life"
        to="/contact"
        button="let's get in touch"
      />
      <Cta3 />
      <MainTrends />
      <StaticProcessArea />
      <Why/>
      <FeaturedWork />
      <MainTestimonials />
      <FaqFeatured />
      <Videos />
      <FinanceBanner />
    </LayoutJs>
  );
}
