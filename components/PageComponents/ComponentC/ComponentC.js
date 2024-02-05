import React from "react";
import styled from "styled-components";
import { Section, Container } from "components/layoutComponents";
import Image from "next/image";

const Text = styled.div``;

export default function ComponentC({ subheader, title, body, image }) {
  // let width = "100%";
  // let height = "auto";
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <div className="">
            <p className="subheader accent">{subheader}</p>
            <center>
              <h2 className="title">{title}</h2>
            </center>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
          />
        </Text>
        {image ? (
          <Image
            style={{ width: "100%" }}
            width={1000}
            height={100}
            src={image.sourceUrl}
            alt={image.altText || ""}
            srcSet={image.srcSet}
            quality={100}
          />
        ) : null}
        <center>
          {/* <ButtonPrimary href="/contact">talk to us today</ButtonPrimary> */}
        </center>
      </Container>
    </Section>
  );
}
