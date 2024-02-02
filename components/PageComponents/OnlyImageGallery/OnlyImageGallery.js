import Image from "next/image";
import styled from "styled-components";
import { GridThree, Section, Container } from "../../layoutComponents";

const Wrapper = styled.div`
  background: var(--clr-accent);
`;

export default function OnlyImageGallery({ content }) {
  return (
    <Wrapper>
      <Section>
      <Container className="spacing">

        <GridThree>
          {content?.map((item, index) => {
            return (
              <Image
                style={{ minHeight: "280px" }}
                key={index}
                src={item.image.sourceUrl}
                alt=""
                width={500}
                height={400}
              />
            );
          })}
        </GridThree>
        </Container>
      </Section>
    </Wrapper>
  );
}
