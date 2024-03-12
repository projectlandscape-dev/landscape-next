import React from "react";
import { Container } from "../../layoutComponents";
import Image from "next/image";
import styled from "styled-components";

export const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  grid-gap: 2em;
  margin-top: 4em;

`;
const GridTwo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-item: center;
  margin-top: 1em;
`;
const TwoImageWithColor = () => {
  return (
    <section style={{ marginTop: "4em" }}>
      <Container>
        <center>
          <h1 className="title">title</h1>
        </center>
        <center>
          <GridTwo>
            <Image
              style={{ maxWidth: "100%", height: "400px" }}
              src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/03/image.png"
              alt=""
              width={500}
              height={300}
            />
            <Image
              style={{ maxWidth: "100%", height: "400px" }}
              src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/03/image-1.png"
              alt=""
              width={500}
              height={300}
            />
          </GridTwo>
          <GridAuto>
            <div>
              <Image
                src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/03/18.png"
                alt=""
                width={100}
                height={100}
              />
              <div></div>
            </div>
            <div>
              <Image
                src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/03/18.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/03/18.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/03/18.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/03/18.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/03/18.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </GridAuto>
        </center>
      </Container>
    </section>
  );
};

export default TwoImageWithColor;
