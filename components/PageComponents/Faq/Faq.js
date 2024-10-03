import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import styled from "styled-components";
import { ButtonPrimary } from "components/buttons";
import Image from "next/image";


const AccordionStyle = {
  background: "var(--clr-accent)",
  borderRadius: "var(--br)",
  color: "var(--txt-light)",
  border: "none",
  padding: "3px",
};

export default function FaqFeatured({ title, body, questions }) {
  return (
    <div className="relative z-0 bg-opacity-80 bg-blend-overlay text-txt-light h-full">
      <Image
        className="object-cover w-[100vw] h-[100vh]"
        src={
          "https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/hero.webp"
        }
        alt=""
        fill
        sizes="(min-width: 808px) 50vw, 100vw"
      />
      <div className="relative z-10 p-5">
        <div className="w-[85%] mx-auto max-w-[95rem]">
          <div className="flex items-center !flex-col-reverse gap-6 lg:gap-0 lg:!flex-row space-y-0 md:space-y-0 space-x-0 md:space-x-[4em] ">
            <Accordion className="spacing" allowToggle>
              {questions.map((item, index) => (
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
                    dangerouslySetInnerHTML={{ __html: `${item.answer}` }}
                  />
                </AccordionItem>
              ))}
            </Accordion>
            <div className="w-full spacing">
              <div>
                <p className="subheader tan">learn from the leaders</p>
                <h2 className="title">
                  {title ? title : "Frequently Asked Question"}
                </h2>
              </div>
              {body ? (
                <div dangerouslySetInnerHTML={{ __html: `${body}` }} />
              ) : null}
              <ButtonPrimary href="/contact">book a service</ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
