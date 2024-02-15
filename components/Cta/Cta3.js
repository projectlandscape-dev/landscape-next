import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
const Container = dynamic(()=>import("../layoutComponents").then((module)=>module.Container));
const Section = dynamic(()=>import("../layoutComponents").then((module)=>module.Section));
const ButtonSecondaryLight = dynamic(()=>import("../buttons").then((module)=>module.ButtonSecondaryLight));


const Wrapper = styled.div`
  background: var(--clr-accent);
  color: var(--txt-light);
`;

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export default function Cta3() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Text className="spacing">
            <h2 className="title">your outdoor oasis is just a click away</h2>
            <ButtonSecondaryLight href="/contact">
              get started &#8594;
            </ButtonSecondaryLight>
          </Text>
        </Container>
      </Section>
    </Wrapper>
  );
}
