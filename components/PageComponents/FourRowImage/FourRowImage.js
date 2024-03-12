import React, { useState } from "react";
import { Section, Container, GridFour } from "../../layoutComponents";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Box = styled.div`
  // max-height: 60%;
`;

const FourRowImage = ({ imagesRow, title }) => {
  return (
    <>
      <Section>
        <Container>
          <center>
            <h1 className="title">{title}</h1>
          </center>
          <GridFour>
            {imagesRow.map((item, index) => {
              return (
                <Box key={index}>
                  {item.link ? (
                    <Link href={item.link}>
                      <Image
                        style={{ width:'700px', height: "250px" }}
                        src={item.image.sourceUrl}
                        alt={item.image.altText}
                        width={500}
                        height={500}
                      />
                      <h3>{item.title}</h3>
                    </Link>
                  ) : (
                    <>
                      <Image
                        style={{ width: "100%", height: "250px" }}
                        src={item.image.sourceUrl}
                        alt={item.image.altText}
                        width={500}
                        height={500}
                      />
                      <h3>{item.title}</h3>
                    </>
                  )}
                </Box>
              );
            })}
          </GridFour>
        </Container>
      </Section>
    </>
  );
};

export default FourRowImage;
