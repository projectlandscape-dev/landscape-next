import React from "react";
import { Section, Container, GridFour } from "../../layoutComponents";
import Image from "next/image";
import Link from "next/link";



const FourRowImage = ({ imagesRow, title }) => {
  return (
    <>
      <Section>
        <Container>
          <center>
            <h1 className="title mb-5">{title}</h1>
          </center>
          <GridFour>
            {imagesRow.map((item, index) => {
              return (
                <div key={index}>
                  {item.link ? (
                    <Link href={item.link}>
                      <Image
                        style={{ width:'700px', height: "250px" }}
                        src={item.image.sourceUrl}
                        alt={item.image.altText}
                        width={500}
                        height={500}
                      />
                      <h4>{item.title}</h4>
                    </Link>
                  ) : (
                    <>
                      <Image
                        style={{ width: "700px", height: "250px" }}
                        src={item.image.sourceUrl}
                        alt={item.image.altText}
                        width={500}
                        height={500}
                      />
                      <h4>{item.title}</h4>
                    </>
                  )}
                </div>
              );
            })}
          </GridFour>
        </Container>
      </Section>
    </>
  );
};

export default FourRowImage;
