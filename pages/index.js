import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Image from "next/image";
import LayoutJs from "../components/layoutJs";
import HeroBasic from "../components/Heros/HeroBasic";
const Badges = dynamic(() => import("../components/Badges/Badges"));
import AllServices from "../components/AllServices/AllServices";
import { ButtonInline } from "../components/buttons";
import Cta3 from "../components/Cta3/Cta3";
import ProductsImg from "../components/Sections/productsImg";
import ShowroomSection from "../components/Sections/ShowroomSection";
import MainVideo from "../components/Sections/MainVideo";
import LandscapingImg from "../components/Sections/landscapingImg";
import OasisImg from "../components/Sections/oasisImg";
import ProjectImg from "../components/Sections/ProjectImg";
import MainTrends from "../components/trends/mainTrends";
import Why from "../components/why";
import MainTestimonials from "../components/testimonials/mainTestimonials";
import Videos from "../components/videos";
import FaqFeatured from "../components/faq/faqFeatured";
import MainServices from "../components/MainServices/MainServices";
import PortfolioBanner from "../components/portfolioBanner";
import StaticProcessArea from "../components/PageComponents/StaticProcessArea/StaticProcessArea";
import FeaturedWork from "../components/StaticFeaturedWork";
import FinanceBanner from "../components/financeBanner";
const ScrollCount = dynamic(() =>
  import("../components/PageComponents/ScrollCount/ScrollCount")
);
import NewBlockBlack from "../components/Sections/NewBlockBlack";
import Seo from "../components/seo";
import Head from "next/head";

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  color: var(--txt-light);
  .hardscapingBgImg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: -1;
  }
`;
const Bgoverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: -1;
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
    <>
      <LayoutJs>
        <Seo
          title="Landscaping Calgary | Top Rated | Project Landscape Ltd."
          description="Landscaping Calgary with Project Landscape, the top-rated residential and commercial team. Get expert hardscaping, softscaping, and outdoor living solutions today!"
        />
        <Head>
          <link rel="canonical" href="https://www.projectlandscape.ca/" />
        </Head>
        <HeroBasic />
        <Badges />
        <MainServices />
        <NewBlockBlack />
        <AllServices />
        <Wrapper>
          <Image
            className="hardscapingBgImg"
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658197/hardscaping-slider_1_mj4mkv.webp"
            alt="hardscaping-slider_1_mj4mkv"
            width={500}
            height={500}
            sizes="(max-width:768px) , 33vw, 50vw"
          />
          <Bgoverlay />
          <section>
            <div className="container">
              <div className="flex">
                <div>
                  <h2 className="title tan">
                    Discover why Project Landscape is the top Residential
                    Landscaping Company in Alberta
                  </h2>
                </div>
                <Divider />
                <div>
                  <p>
                    <ButtonInline href="/about">Project Landscape</ButtonInline>{" "}
                    has established itself as the largest Albertan residential
                    landscaping company due to its commitment to taking
                    landscape{" "}
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
                    . We have a team of highly skilled and creative designers
                    who understand the unique needs and preferences of Calgary
                    homeowners. Our designs blend aesthetics with functionality,
                    ensuring that every outdoor space is transformed into a
                    stunning and practical oasis. Secondly, we are known for our
                    exceptional work{" "}
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
                    Additionally, our brand stands out for its commitment to
                    customer satisfaction. We prioritize open communication
                    while actively involving clients in the design and
                    installation phases. Our dedication to meeting deadlines,
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
        <PortfolioBanner />
        <ScrollCount />
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
        <Why />
        <FeaturedWork />
        <MainTestimonials />
        <FaqFeatured />
        <Videos />
        <FinanceBanner />
      </LayoutJs>
    </>
  );
}
