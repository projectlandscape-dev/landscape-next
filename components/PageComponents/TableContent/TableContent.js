import React from "react";
import styled from "styled-components";
import { Section, Container, GridThree } from "components/layoutComponents";

const WrapperBox = styled.div`
  border: 1px solid green;
  width: 74%;
  margin: 0 auto;
`;
const HeaderWrapper = styled.div`
  background: green;
  color: white;
  padding: 0.5em;
`;
const List = styled.li`
  padding: 0.3em;
`;

export default function TableContent() {
  let width = "100%";
  let height = "100%";

  return (
    <Section>
      <Container className="spacing">
        <WrapperBox>
          <HeaderWrapper>
            <h2>Table of Content</h2>
          </HeaderWrapper>
          <ol>
            <List>What is a Patio Seat Wall</List>
            <List>What are the benefits of a seat wall</List>
            <List>Where are the Seat Wall most commonly placed</List>
            <List>Seat Wall Accessorie</List>
            <List> Important Considerations For Your Seat Wall</List>
            <List> Hiring A Landscape Professional</List>
          </ol>
        </WrapperBox>
      </Container>
    </Section>
  );
}
