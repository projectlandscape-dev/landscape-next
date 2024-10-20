
import React from "react"
import styled from "styled-components"
import { Section, Container, GridAuto } from "components/layoutComponents"
import { ButtonPrimary } from "components/buttons"

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`
const Item = styled.h3`
  font-family: var(--font-open-sans);
  text-align: center;
`

export default function ComponentD({ subheader, title, content }) {
  return (
    <Section>
      <Container className="spacing-md">
        <Text className="spacing">
          <div className="">
            <p className="subheader accent">{subheader}</p>
            <h2 className="title">{title}</h2>
          </div>
        </Text>
        <GridAuto>
          {content.map(item => {
            return (
              <Item
                className="subheader"
                dangerouslySetInnerHTML={{
                  __html: `${item.text}`,
                }}
              />
            )
          })}
        </GridAuto>
        <center>
          <ButtonPrimary href="/contact">talk to us today</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
