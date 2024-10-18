import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Heading,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Container } from "../../layoutComponents";

const DropdownMenus = ({ repeaterContent }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!isClient) {
    return null;
  }

  return (
    <Container>
      <div className="pb-12 -mt-8">
        <Heading as={"h5"} className="text-center">
          Product Information
        </Heading>
        <Accordion allowToggle>
          {repeaterContent?.map((data, index) => {
            const shortDescription =
              data?.heading === "Description"
                ? data.description.slice(0, 300) + "..."
                : null;

            return (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton className="flex justify-between font-semibold">
                    {data.heading}
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel className="py-2 px-4">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        shortDescription && expandedIndex !== index
                          ? shortDescription
                          : data.description,
                    }}
                  />
                  {shortDescription && (
                    <Button
                      w={"70px"}
                      h={"30px"}
                      fontSize={"12px"}
                      onClick={() => toggleDescription(index)}
                    >
                      {expandedIndex === index ? "See Less" : "See More"}
                    </Button>
                  )}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </Container>
  );
};

export default DropdownMenus;
