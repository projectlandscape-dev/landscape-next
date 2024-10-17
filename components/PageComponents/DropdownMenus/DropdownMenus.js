import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Section, Container } from "../../layoutComponents";

const DropdownMenus = ({ repeaterContent }) => {
  console.log(repeaterContent, "repeaterContent");
  return (
    <Container>
      <div className="pb-12 -mt-8">
        <Accordion allowToggle>
          {repeaterContent?.map((data, index) => {
            return (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton className="flex justify-between font-semibold">
                    {data.heading}
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  className="py-2 px-4"
                  dangerouslySetInnerHTML={{ __html: `${data.description}` }}
                />
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </Container>
  );
};

export default DropdownMenus;
