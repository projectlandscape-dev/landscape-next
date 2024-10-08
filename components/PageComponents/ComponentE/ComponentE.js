import React from "react";
import styled from "styled-components";
import { Section, Container, GridThree } from "components/layoutComponents";
import { ButtonPrimary } from "components/buttons";
import Image from "next/image";
import Link from "next/link";

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const Item = styled.div`
  text-align: center;

  border: 3px solid var(--clr-tan);
  border-radius: var(--br);

  figure {
    div {
      img {
        height: 300px;
        object-fit: cover;
      }
    }
  }
`;

const Inner = styled.div`
  padding: 2em;
`;

export default function ComponentE({ subheader, title, content }) {
  let width = "100%";
  let height = "300px";
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <div className="">
            <p className="subheader accent">{subheader}</p>
            <h2 className="title">{title}</h2>
          </div>
        </Text>
        <center>
          <GridThree>
            {content?.map((item, index) => {
              return (
                <Item className="spacing" key={index}>
                  <Image
                    className="w-full h-60"
                    alt={item.image.altText || ""}
                    srcSet={item.image.srcSet}
                    src={item.image.src || item.image.srcSet}
                    width={500}
                    height={500}
                  />

                  <Inner>
                    <h2 className="subheader accent">{item.title}</h2>
                    {item.description ? (
                      item.link ? (
                        <Link href={item?.link || "#"}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `${item.description}`,
                            }}
                          />
                        </Link>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${item.description}`,
                          }}
                        />
                      )
                    ) : null}
                  </Inner>
                </Item>
              );
            })}
          </GridThree>
        </center>
        <center>
          <ButtonPrimary href="/contact">talk to us today</ButtonPrimary>
        </center>
      </Container>
    </Section>
  );
}
