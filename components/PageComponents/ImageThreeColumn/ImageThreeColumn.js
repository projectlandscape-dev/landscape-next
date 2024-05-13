import React from "react";
import styled from "styled-components";
import { Section, GridThree } from "../../layoutComponents";
// import Image from "components/Image";

const Image = styled.img`
  width: 350px;
  height: 330px;
  object-fit: cover;
  border-radius: 8px;
`;
const ImageWrapper = styled.div`
  width: 86%;
  margin: 0 auto;
`;
export default function ImageThreeColumn({ title, images }) {
  return (
    <Section>
      {title ? (
        <center style={{ marginBottom: "20px" }}>
          <h2>{title}</h2>
        </center>
      ) : null}
      <ImageWrapper>
        <GridThree>
          {images?.map((item) => {
            return (
              <>
                <Image src={item.image.mediaItemUrl} />
                <Image src={item.image2.mediaItemUrl} />
                <Image src={item.image3.mediaItemUrl} />
              </>
            );
          })}
        </GridThree>
      </ImageWrapper>
    </Section>
  );
}
