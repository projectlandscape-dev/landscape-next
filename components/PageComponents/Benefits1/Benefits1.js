import React from "react";
import styled from "styled-components";
import { Container, GridThree, Section } from "../../layoutComponents";
import { ButtonPrimary } from "../../buttons";
import Link from "next/link";

// const StyledImg = styled(GatsbyImage)`
//   max-height: 100px;
//   max-width: 100px;
// `

const BenefitItem = styled.div`
  border: 2px solid var(--clr-tan);
  padding: 2em;
  border-radius: var(--br);

  figure {
    div {
      img {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
export default function Benefits1({ subheader, title, benefitContent }) {
  let width = "100px";
  let height = "500px";
  return (
    <Section>
      <Container className="spacing-md">
        <div className="center">
          <p className="subheader accent">{subheader}</p>
          <h2 className="title">{title}</h2>
        </div>
        <GridThree>
          {benefitContent.map((benefit, index) => {
            return (
              <BenefitItem className="spacing center" key={index}>
                <center>
                  <Image
                    alt={benefit.image.altText || ""}
                    src={benefit.image.sourceUrl}
                  />
                </center>
                <h3 className="subheader caps tan">{benefit.title}</h3>
                {benefit.description && benefit.textlink ? (
                  <Link href={benefit.textlink}>
                    {" "}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${benefit.description}`,
                      }}
                    />
                  </Link>
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${benefit.description}`,
                    }}
                  />
                )}
              </BenefitItem>
            );
          })}
        </GridThree>
        <center>
          <ButtonPrimary href="/contact">get quote</ButtonPrimary>
        </center>
      </Container>
    </Section>
  );
}
