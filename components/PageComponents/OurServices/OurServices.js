import React from "react";
import styled from "styled-components";
import { GridThree, Section } from "components/layoutComponents";

const Image = styled.img`
  width: 0%; /* Adjust the width of each image as needed */
  box-sizing: border-box;
`;

const Parent = styled.div`
  width: 100%;
  margin: 0 auto;
  background: var(--clr-accent);
`;
const h1 = styled.div`
  color: white;
  margin: 12px 0px;
  font-size: 36px;
  font-weight: 700;
`;

export default function OurServices({ title, services }) {
  return (
    <>
      <div style={{ backgroundColor: "var(--clr-accent)" }}>
        <Section>
          <div style={{ width: "80%", margin: "auto", color: "white" }}>
            <center style={{ margin: "3rem" }}>
              <h1>{title}</h1>
            </center>
            <GridThree>
              {services?.map((item) => {
                return (
                  <div>
                    <Image
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                    />

                    <center>
                      <h1>{item?.title}</h1>
                    </center>
                  </div>
                );
              })}
            </GridThree>
          </div>
        </Section>
      </div>
    </>
  );
}
