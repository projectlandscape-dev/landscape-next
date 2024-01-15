import React from "react";
import Banner from "../components/banners/banner";
import LayoutJs from "../components/layoutJs";
import WarrantyForm from "../components/Forms/WarrantyForm";
import Seo from "../components/seo";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import {
  Container,
  FlexMobileOpp,
  Section,
} from "../components/layoutComponents";
import styled from "styled-components";
import { ButtonPrimary } from "../components/buttons";

const Wrapper = styled.div`
  background: url("http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/hero.webp"),
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
        img="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-67-1.png"
        title="Project landscape warranty request form"
        description="Project Landscape stands behind our work and gladly warrants any installation services we provide. If you encounter any issues or defects related to our workmanship, please contact us within the specified warranty period. We will assess the situation and, if deemed applicable, provide the necessary repairs or replacements at no additional cost. Customer satisfaction is our priority, and we strive to ensure the quality and longevity of our landscaping projects."
      />
      {/* <ImageLeft
        title="warranty"
        body="As Calgary's largest residential landscaping company, we proudly stand behind out installation services. Please fill out our landscaping warranty form below and we will be in touch with you shortly."
        img={ImageTop}
        alt="calgary landscape materials"
        to="/contact"
        button="get more help from us"
      /> */}
      <WarrantyForm />
      <Wrapper>
        <Section>
          <Container>
            <FlexMobileOpp>
              <Accordion className="spacing">
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
