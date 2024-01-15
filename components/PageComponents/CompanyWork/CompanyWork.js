import React from "react";
import styled from "styled-components";
import { Container, Section, Flex } from "components/layoutComponents";

const Wrapper = styled.div`
  background: url("https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-56-1.png");
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
`;
const HeadingLine = styled.hr`
  width: 50%;
  height: 3px;
  background: green;
  color: transparent;
`;
const WorkWrapper = styled.div`
  width: 62%;
  margin: 0 auto;
  display: flex;
  gap: 12px;
`;
const WorkItem = styled.div`
  background: white;
  width: fit-content;
  color: black;
  width: 215px;
  padding: 10px;
  text-align: center;
  img {
    margin: 0 auto;
    width: 80px;
    object-fit: contain;
    height: 95px;
  }
`;
const CompanyWork = ({ title, subheader, workitem }) => {
  return (
    <Wrapper>
      <Section>
        <center>
          <p className="subheader accent">{subheader}</p>
          <h2 className="title">{title}</h2>
          <HeadingLine />
        </center>
        <WorkWrapper>
          {workitem.map((item) => {
            return (
              <WorkItem>
                <img src={item.icon.sourceUrl} alt={item.icon.altText} />
                <p>{item.body} </p>
              </WorkItem>
            );
          })}
        </WorkWrapper>
      </Section>
    </Wrapper>
  );
};

export default CompanyWork;
