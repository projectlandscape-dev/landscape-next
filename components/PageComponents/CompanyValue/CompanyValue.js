import React from "react";
import styled from "styled-components";
import { GridTwo, Section } from "components/layoutComponents";
import { RxCrossCircled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";

const List = styled.li`
  border-bottom: 1px solid black;
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  div {
    width: 95%;
  }
  :last-child {
    border: none;
  }
`;
const PositiveWrapper = styled.div`
  width: 80%;
  background: black;
  color: white;
  border-radius: 20px;
  padding: 22px;

  li {
    border-bottom: 1px solid white;
  }
  @media (max-width: 768px) {
    width: 100%;
    ul {
      padding: 10px;
    }
  }
`;
const NegativeWrapper = styled.div`
  width: 85%;
  @media (max-width: 768px) {
    width: 100%;
    ul {
      padding: 10px;
    }
  }
`;
export default function CompanyValue({
  negativeheading,
  negativebodycontent,
  positiveheading,
  positivebodycontent,
}) {
  return (
    <Section>
      <GridTwo>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <NegativeWrapper>
            <center>
              <h2>{negativeheading}</h2>
            </center>
            <div>
              <ul style={{ listStyle: "none" }}>
                {negativebodycontent.map((item) => {
                  return (
                    <List>
                      <RxCrossCircled color="red" size={"20px"} />{" "}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${item?.body}`,
                        }}
                      />
                    </List>
                  );
                })}
              </ul>
            </div>
          </NegativeWrapper>
        </div>
        <PositiveWrapper>
          <center>
            <h2>{positiveheading}</h2>
          </center>
          <div>
            <ul style={{ listStyle: "none" }}>
              {positivebodycontent.map((item) => {
                return (
                  <List>
                    <FaCheckCircle color="green" size={"17px"} />{" "}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${item?.bodycontent}`,
                      }}
                    />
                  </List>
                );
              })}
            </ul>
          </div>
        </PositiveWrapper>
      </GridTwo>
    </Section>
  );
}
