import React from "react";
import styled from "styled-components";
import { GridTwo, Section } from "./layoutComponents";
import { RxCrossCircled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";

const List = styled.li`
  border-bottom: 1px solid black;
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  p {
    width: 95%;
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
const CompanyValue = () => {
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
              <h2>Other Landscaping Companies</h2>
            </center>
            <div>
              <ul style={{ listStyle: "none" }}>
                <List>
                  <RxCrossCircled color="red" size={"20px"} />{" "}
                  <p>
                    Promised open communication falls short, with contact
                    proving elusive and unresponsive, leading to disappointment
                    and unresolved issues.
                  </p>
                </List>
                <List>
                  <RxCrossCircled color="red" size={"20px"} />{" "}
                  <p>
                    Subpar customer service fails to meet expectations, often
                    leading to frustration and dissatisfaction for clients
                    seeking prompt and effective support or resolution.
                  </p>
                </List>
                <List>
                  {" "}
                  <RxCrossCircled color="red" size={"20px"} />{" "}
                  <p>
                    High material costs significantly increase expenses,
                    impacting budgets and financial planning for projects.
                  </p>
                </List>
                <List>
                  <RxCrossCircled color="red" size={"20px"} /> L
                  <p>
                    acks diverse work demonstrations, relying solely on
                    photographs to showcase their projects
                  </p>
                </List>
                <List>
                  <RxCrossCircled color="red" size={"20px"} />{" "}
                  <p>
                    Struggles to obtain desired materials due to shortages,
                    limiting options and potentially affecting the quality and
                    completion of projects.
                  </p>
                </List>
                <List>
                  {" "}
                  <RxCrossCircled color="red" size={"20px"} />{" "}
                  <p>
                    Lacks frequent communication with local suppliers, hindering
                    material procurement and potentially impacting project
                    timelines.
                  </p>
                </List>
                <List>
                  <RxCrossCircled color="red" size={"20px"} />
                  <p>
                    {" "}
                    Has limited experience and inadequate staffing, leading to
                    difficulties in finishing projects promptly as scheduled.
                  </p>
                </List>
              </ul>
            </div>
          </NegativeWrapper>
        </div>
        <PositiveWrapper>
          <center>
            <h2>Project Landscape</h2>
          </center>
          <div>
            <ul style={{ listStyle: "none" }}>
              <List>
                <FaCheckCircle color="green" size={"17px"} />{" "}
                <p>
                  We are always communicating with our customers, keeping open
                  communication at all times.
                </p>
              </List>
              <List>
                <FaCheckCircle color="green" size={"17px"} />
                <p>
                  {" "}
                  Customers are our friends and we are always finding ways to
                  better inform and better ourselves
                </p>
              </List>
              <List>
                <FaCheckCircle color="green" size={"17px"} />{" "}
                <p>
                  We have "Buying Power" We purchase decking and landscaping
                  materials in massive volumes. This strategic approach lets us
                  negotiate unbeatable prices, ensuring cost-effective solutions
                  for you.
                </p>
              </List>
              <List>
                <FaCheckCircle color="green" size={"17px"} />
                <p>
                  {" "}
                  Indoor Displays: Eager to experience our work up close? We’ve
                  got you covered! Project Landscape invites you to visit one of
                  our three indoor idea centers. These spaces are creatively
                  designed to showcase a wide array of our offerings, including
                  decking, pergolas, paving stones, and much more.
                </p>
              </List>
              <List>
                <FaCheckCircle color="green" size={"17px"} />{" "}
                <p>
                  Project Landscape consistently stocks trendy materials in
                  bulk, ensuring a vast inventory. Our nationwide supplier
                  network ensures a continuous supply of top-quality materials.
                  This strategy ensures we're always ready to meet your
                  landscaping needs with the latest trends, without any delays.
                </p>
              </List>
              <List>
                <FaCheckCircle color="green" size={"17px"} />{" "}
                <p>
                  Interested in exploring our materials in person? We can
                  schedule a personal visit to one of our suppliers for you. A
                  skilled sales representative will assist you in navigating our
                  wide selection of premium materials, helping you choose wisely
                  for your landscaping needs.
                </p>
              </List>
              <List>
                <FaCheckCircle color="green" size={"17px"} />
                <p>
                  {" "}
                  Being the premier outdoor living company in Calgary, we have
                  multiple crews and a vast network of skilled subcontractors,
                  equipped to manage projects of all sizes.
                </p>
              </List>
            </ul>
          </div>
        </PositiveWrapper>
      </GridTwo>
    </Section>
  );
};

export default CompanyValue;
