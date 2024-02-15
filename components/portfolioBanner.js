import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
const ButtonPrimaryDark = dynamic(()=>import("./buttons").then((module)=>module.ButtonPrimaryDark));
const Container = dynamic(()=>import("./layoutComponents").then((module)=>module.Container));
const Flex = dynamic(()=>import("./layoutComponents").then((module)=>module.Flex));
const Section = dynamic(()=>import("./layoutComponents").then((module)=>module.Section));

const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(9, 37, 4, 1) 0%,
    rgba(47, 184, 20, 1) 100%
  );
  color: var(--txt-light);
`;

const Text = styled.div``;

export default function PortfolioBanner() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <Text className="spacing ">
              <div>
                <p className="subheader">
                  explore the latest in landscape designs
                </p>
                <p className="title">your personal paradise starts here</p>
              </div>
              <ButtonPrimaryDark href="/portfolio">
                Get Inspired
              </ButtonPrimaryDark>
            </Text>
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  );
}
