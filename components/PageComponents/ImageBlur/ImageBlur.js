import React from "react";
import styled from "styled-components";
import { Container, GridThree, Section } from "../../layoutComponents";
import Image from "next/image";

const NewSectionItem = styled.div`
  text-align: center;
  border-radius: var(--br);

  figure {
    position: relative;
    div {
      img {
        height: 300px;
        object-fit: cover;
      }
    }

    .overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 28px;
      font-weight: bold;
      transform: translate(-50%, -50%);
      color: white;
      text-align: center;
    }
  }
`;

export default function ImageBlur({ title, imagesection }) {
  return (
    <Section>
      <Container className="spacing-md">
        <div className="center">
          <p className="subheader title accent">{title}</p>
        </div>
        <center>
          <GridThree>
            {imagesection.map((item, index) => {
              return (
                <NewSectionItem className="spacing center" key={index}>
                  <figure>
                    <div>
                      <Image
                        width={500}
                        height={100}
                        alt="new section 1"
                        src={item?.image?.sourceUrl}
                        loading="lazy"
                      />
                    </div>
                    <div className="overlay">
                      <span>{item?.title}</span>
                      <span style={{ color: "green" }}>&gt;</span>
                    </div>
                  </figure>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${item.body}`,
                    }}
                  />
                </NewSectionItem>
              );
            })}
          </GridThree>
        </center>
      </Container>
    </Section>
  );
}
