import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Section, Container, GridThree } from "components/layoutComponents";
import { ButtonPrimary } from "components/buttons";
import Image from "components/Image";

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


const AdditionalText = styled.div`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
`;

export default function ComponentF({ subheader, title, content }) {
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);
  const [textHeight, setTextHeight] = useState({});
  const [itemHeight, setItemHeight] = useState({});

  const handleInnerClick = (index) => {
    setExpandedItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const newTextHeight = {};
    const newItemHeight = {};
    content.forEach((_, index) => {
      newTextHeight[index] = expandedItemIndex === index ? "auto" : "100px";
      newItemHeight[index] = expandedItemIndex === index ? "auto" : "440px";
    });
    setTextHeight(newTextHeight);
    setItemHeight(newItemHeight);
  }, [expandedItemIndex, content]);

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
                <Item
                  className="spacing"
                  key={index}
                  style={{ height: itemHeight[index] }}
                >
                  <Image
                    alt={item.image.altText || ""}
                    srcSet={item.image.srcSet}
                    src={item.image.src}
                    width={width}
                    height={height}
                  />
                  <h3 className="subheader ">{item.title}</h3>
                  <div onClick={() => handleInnerClick(index)}>
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "start",
                        padding: "10px",
                        justifyContent: "space-between",
                      }}
                      className="subheader accent"
                    >
                      {item.subheader}
                      <img
                        width="35px"
                        height="35px"
                        src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/11/unnamed-2.png"
                        alt="Dropdown Icon"
                      />
                    </h4>

                    <AdditionalText
                      expanded={expandedItemIndex === index}
                      style={{ height: textHeight[index] }}
                    >
                      {item.description ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${item.description}`,
                          }}
                        />
                      ) : null}
                    </AdditionalText>
                  </div>
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
