import React, { useState } from "react";
import styled from "styled-components";
import { Container, Section, FlexMobileOpp } from "../../layoutComponents";
import Image from "../../Image";

const Text = styled.div``;



const ImgLeft = styled.div`
  figure {
    div {
      box-shadow: -20px 20px 0px 1px var(--clr-accent);
      img {
        max-height: 600px;
        min-height: 400px;
        object-fit: cover;
      }
    }
  }
`;

const AdditionalText = styled.div`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
`;

const ReadMoreButton = styled.button`
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-alfa-slab-one);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;

  background: var(--clr-accent);
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    background: var(--clr-accent-darker);
    color: var(--txt-light);
  }
`;

export default function ImageLeftRead({
  subheader,
  title,
  body,
  bodycopy,
  image,
  button,
  link,
}) {
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsTextExpanded(!isTextExpanded);
  };

  return (
    <Section>
      <Container>
        <FlexMobileOpp>
          <ImgLeft>
            <Image
              className="stretch img-left"
              alt={image?.altText || ""}
              srcSet={image?.srcSet}
            />
          </ImgLeft>
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${body}`,
              }}
            />
            {isTextExpanded && (
              <div
                dangerouslySetInnerHTML={{
                  __html: `${bodycopy}`,
                }}
              />
            )}
            <ReadMoreButton onClick={handleReadMoreClick}>
              {isTextExpanded ? "Read Less " : "Read More"}
            </ReadMoreButton>

       
          </Text>
        </FlexMobileOpp>
      </Container>
    </Section>
  );
}
