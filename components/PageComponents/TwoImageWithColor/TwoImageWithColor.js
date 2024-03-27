import React from "react";
import { Container } from "../../layoutComponents";
import Image from "next/image";
import styled from "styled-components";

const device = {
  md: "48em",
};
const GridTwoContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1em;
  margin-top: 1em;
`;

export const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  grid-gap: 2em;
  margin-top: 2em;
`;
const GridTwo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-item: center;
  gap: 1em;
  margin-top: 1em;
  flex-shrink: 0;
  // @media screen and (max-width: ${device.md}) {
  //   flex-direction: column;
  // }
`;

const TwoImageWithColor = ({
  bigImage,
  title,
  colorHeading,
  colorItem,
  description,
  descriptionTitle,
}) => {
  return (
    <section style={{ marginTop: "4em" }}>
      <Container>
        <center>
          <h1 className="title">{title}</h1>
        </center>
        <GridTwoContainer>
          <GridTwo>
            {bigImage?.map((item) => {
              return (
                <>
                  <Image
                    key={item}
                    style={{ maxWidth: "100%", height: "400px" }}
                    src={item?.image?.sourceUrl}
                    alt=""
                    width={500}
                    height={300}
                  />
                </>
              );
            })}
          </GridTwo>
        </GridTwoContainer>

        <center>
          <h3 className="subheader mt-5">{colorHeading}</h3>
          <GridAuto>
            {colorItem.map((item) => {
              return (
                <div>
                  <Image
                    key={item}
                    src={item?.image?.sourceUrl}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <h4>{item.title}</h4>
                </div>
              );
            })}
          </GridAuto>
        </center>
        <h4 className="subheader mt-5">{descriptionTitle}</h4>
        <div
        className="mt-2"
          dangerouslySetInnerHTML={{
            __html: `${description}`,
          }}
        />
      </Container>
    </section>
  );
};

export default TwoImageWithColor;
