import React, { useState } from "react";
import styled from "styled-components";
import { Container, Section, FlexMobileOpp } from "../../layoutComponents";
import Image from "../../Image";


const Wrapper = styled.div`
  background: var(--clr-dark);
`;


const Text = styled.div`
  color: var(--txt-light);
  p {
    color: var(--txt-light);
  }
`;
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
text-decoration: none;
padding: 1em 1.33em;
transition: all 0.2s linear;
text-transform: uppercase;
background: var(--clr-tan);
color: var(--txt-dark);
border: 1px solid var(--clr-tan);

&:hover {
  color: var(--txt-dark);
}
`;

export default function ImageLeftBlackRead({
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
    <Wrapper>

    <Section>
      <Container>
        <FlexMobileOpp>
          <ImgLeft>
            <Image
              className="stretch img-left"
              alt={image?.altText || ""}
              srcSet={image?.sourceUrl}
            />
          </ImgLeft>
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title tan">{title}</h2>
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
    </Wrapper>

  );
}
