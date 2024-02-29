import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
const Banner = dynamic(()=>import("../components/banners/banner"))
const LayoutJs = dynamic(()=>import("../components/layoutJs"))
const WarrantyForm = dynamic(()=>import("../components/Forms/WarrantyForm"))
const Seo = dynamic(()=>import("../components/seo"))
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
const Container = dynamic(()=>import("../components/layoutComponents").then((module)=>module.Container));
const FlexMobileOpp = dynamic(()=>import("../components/layoutComponents").then((module)=>module.FlexMobileOpp));
const GridThree = dynamic(()=>import("../components/layoutComponents").then((module)=>module.GridThree));
const GridTwo = dynamic(()=>import("../components/layoutComponents").then((module)=>module.GridTwo));
const Section = dynamic(()=>import("../components/layoutComponents").then((module)=>module.Section));
const ButtonPrimary = dynamic(()=>import("../components/buttons").then((module)=>module.ButtonPrimary));


const Wrapper = styled.div`
  background: url("https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/hero.webp"),
    rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
`;

const AccordionStyle = {
  background: "var(--clr-accent)",
  borderRadius: "var(--br)",
  color: "var(--txt-light)",
  border: "none",
  padding: "3px",
};

export default function WarrantyRequest() {
  return (
    <LayoutJs>
      <Seo
        title="Warranty Request for Landscaping | Project Landscape Ltd."
        description="Here you can request your warranty."
      />
      <Banner
        // img="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-67-1.png"
        img='https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/image-67-2.jpg'
        title="Project landscape warranty request form"
        description="Project Landscape stands behind our work and gladly warrants any installation services we provide. If you encounter any issues or defects related to our workmanship, please contact us within the specified warranty period. We will assess the situation and, if deemed applicable, provide the necessary repairs or replacements at no additional cost. Customer satisfaction is our priority, and we strive to ensure the quality and longevity of our landscaping projects."
      />
      <Section>
        <Container>
          <FlexMobileOpp>
            <div>
              <h2>Project Landscape Guarantee</h2>
              <h5>Your Peace of Mind is Our Priority</h5>
              <p>
                At Project Landscape, we understand that your outdoor space is
                not just a project, it's a part of your home - a place of
                relaxation, family gatherings, and cherished memories. That's
                why we stand firmly behind the quality of our work with the
                Project Landscape Guarantee.
              </p>
              <h3>Comprehensive Coverage for Your Investment</h3>
              <p>
                Our guarantee is a testament to our commitment to excellence and
                customer satisfaction. We ensure that every installation and
                design meets the highest standards of quality and durability.
                Here's what our guarantee covers:
              </p>
              <GridThree>
                <p>
                  <strong>Quality of Workmanship:</strong> We pride ourselves on
                  delivering top-notch workmanship. If any aspect of our work
                  does not meet your expectations or our own high standards, we
                  will address the issue at no extra cost to you.
                </p>
                <p>
                  <strong>Material Durability:</strong> We use only the best
                  materials, guaranteed to withstand the test of time and
                  weather. In the unlikely event of material failure, we will
                  replace or repair the affected components.
                </p>
                <p>
                  <strong>Design Integrity:</strong> Our designs are not only
                  aesthetically pleasing but also functional. If there are any
                  design flaws that affect the usability or enjoyment of your
                  space, we will rework the design to your satisfaction.
                </p>
              </GridThree>
              <h3>Easy Warranty Claims</h3>
              <p>
                Experiencing an issue? Filing a warranty claim with us is
                hassle-free:
              </p>
              <GridTwo>
                <p>
                  <strong>Fill Out the Form:</strong> Provide all the necessary
                  details about your project and the issue you're encountering.
                </p>
                <p>
                  <strong>Quick Response:</strong> Our team will review your
                  claim and get in touch with you promptly to resolve the issue.
                </p>
              </GridTwo>
              <h3>Terms and Conditions</h3>
              <p>
                Our guarantee is valid for a period of 2 years on hardscaping
                installations & 1 year on softscaping from the date of project
                completion and is subject to certain terms and conditions.
                Please refer to our detailed warranty documentation for specific
                coverage information.
              </p>
              <h3>Your Trust, Our Responsibility</h3>
              <p>
                We don't just create landscapes; we build lasting relationships.
                The Project Landscape Guarantee is our promise to you - a
                promise of reliability, quality, and peace of mind.
              </p>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
      <WarrantyForm />
      <Wrapper>
        <Section>
          <Container>
            <FlexMobileOpp>
              <Accordion className="spacing" allowToggle>
                <AccordionItem style={AccordionStyle}>
                  <h2>
                    <AccordionButton style={AccordionStyle}>
                      <Box
                        className="subheader"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        What does your warranty cover?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Our warranty covers any defects in materials or workmanship
                    related to the landscaping services provided by our company.
                    This includes issues with plants, hardscaping elements,
                    irrigation systems, and other aspects of the project as
                    specified in our contract. Please check our warranty guide
                    for more information{" "}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem style={AccordionStyle}>
                  <h2>
                    <AccordionButton style={AccordionStyle}>
                      <Box
                        className="subheader"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        How long is the warranty period?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    The duration of our warranty varies depending on the type of
                    project and the specific services provided. Typically, our
                    warranty period ranges from 30 days to 1 year. Please refer
                    to your warranty form or contact our customer service for
                    the exact warranty duration for your project.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem style={AccordionStyle}>
                  <h2>
                    <AccordionButton style={AccordionStyle}>
                      <Box
                        className="subheader"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        What is not covered by your warranty?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Our warranty does not cover damages caused by natural
                    disasters, severe weather conditions, accidents, negligence,
                    improper maintenance, or unauthorized modifications or
                    repairs made by third parties. Additionally, any damage
                    resulting from the client's failure to follow our
                    recommended care instructions may not be covered.{" "}
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem style={AccordionStyle}>
                  <h2>
                    <AccordionButton style={AccordionStyle}>
                      <Box
                        className="subheader"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        Can I transfer the warranty to a new owner if I sell my
                        property?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    In most cases, our warranty is non-transferable and remains
                    valid only for the original client who contracted our
                    services. However, specific circumstances may be considered
                    on a case-by-case basis. Please reach out to our customer
                    service to discuss any potential transfers of warranty.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <div className="spacing">
                <div>
                  <p className="subheader tan">learn from the leaders</p>
                  <h2 className="title">Calgary warranty request FAQs</h2>
                </div>
                <p>
                  Looking for information on our landscaping warranty program in
                  Calgary? Discover answers to common questions about our
                  program that protects your landscaping investment. Get the
                  insights you need on material and installation warranties, all
                  in one convenient place. Start exploring our Calgary FAQ page
                  today!
                </p>
                <ButtonPrimary href="/contact">get started</ButtonPrimary>
              </div>
            </FlexMobileOpp>
          </Container>
        </Section>
      </Wrapper>
    </LayoutJs>
  );
}
