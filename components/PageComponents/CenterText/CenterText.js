import React from "react";
import styled from "styled-components";
import { Section, Container } from "components/layoutComponents";

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export default function CenterText({ title, body }) {
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <div className="">
            {/* <p className="subheader accent">{subheader}</p> */}
            <h3 className="title">{title}</h3>
          </div>
        </Text>
        <center>
          <div
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
          />
        </center>
      </Container>
    </Section>
  );
}
