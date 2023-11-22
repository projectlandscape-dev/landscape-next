import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Container, FlexMobileOpp, Section } from "components/layoutComponents";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondaryLight } from "components/buttons";

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

export default function FaqFeatured({ title, body, questions }) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <Accordion className="spacing">
              {questions.map((item, index) => {
                return (
                  <AccordionItem style={AccordionStyle} key={index}>
                    <h2>
                      <AccordionButton style={AccordionStyle}>
                        <Box
                          className="subheader"
                          as="span"
                          flex="1"
                          textAlign="left"
                        >
                          {item.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      dangerouslySetInnerHTML={{
                        __html: `${item.answer}`,
                      }}
                    />
                  </AccordionItem>
                );
              })}
            </Accordion>
            <div className="spacing">
              <div>
                <p className="subheader tan">learn from the leaders</p>
                <h2 className="title">
                  {title ? title : "Frequently Asked Question"}
                </h2>
              </div>
              {body ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${body}`,
                  }}
                />
              ) : null}
              <ButtonPrimary href="/contact">book a service</ButtonPrimary>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  );
}
