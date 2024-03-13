import React, { useState } from "react";
import styled from "styled-components";
import { Container, Section, Flex } from "components/layoutComponents";
import { ButtonPrimary } from "components/buttons";
import Image from "components/Image";

const Wrapper = styled.div`
  background: var(--clr-dark);
`;

const Text = styled.div`
  color: var(--txt-light);
  p {
    color: var(--txt-light);
  }
`;

const Inner = styled.div`
  a {
    color: var(--txt-light);
  }
`;

const Img = styled.div`
  position: relative;
  box-shadow: ${(props) =>
    !props.showshadow ? "20px 20px 0px 1px var(--clr-accent)" : "unset"};
  figure {
    margin: 0;
    div {
      img {
        max-height: 600px;
        min-height: 400px;
        object-fit: cover;
      }
    }
  }
`;

const FlexWrap = styled.div`
  display: flex;
  align-items: ${(props) => (!props.contentcenter ? "center" : "unset")};
  gap: 30px;
  & > * {
    width: 100%;
  }
  @media screen and (max-width: 48em) {
    flex-direction: column;
  }
`;

const Subheader = styled.p`
  white-space: nowrap;
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

export default function ImageRightBlackRead({
  subheader,
  title,
  body,
  image,
  bodycopy,
  contentcenter = false,
}) {
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const handleReadMoreClick = () => {
    setIsTextExpanded(!isTextExpanded);
  };

  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexWrap contentcenter={contentcenter}>
            <Text className="spacing">
              <div>
                <Subheader className="subheader accent">{subheader}</Subheader>
                <h2 className="title">{title}</h2>
              </div>
              {body ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${body}`,
                  }}
                ></div>
              ) : null}

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

            <Image
              className="stretch"
              alt={image?.altText || ""}
              srcSet={image?.sourceUrl}
            />
          </FlexWrap>
        </Container>
      </Section>
    </Wrapper>
  );
}
