import Image from "next/image";
import { Section, Container, GridThree } from "../../layoutComponents";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--clr-accent);
`;
const Box = styled.div`
  display: flex;
  color: white;
  flex-direction: column;

  .number {
    font-size: 35px;
    font-weight: 600;
    padding: 12px 0 12px 0;
  }
`;

export default function Column3({ content }) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <GridThree>
            {content.map((item, index) => {
              return (
                <Box key={index}>
                  <center>
                    <Image
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                      width={100}
                      height={100}
                    />
                    <h1 className="number">{item?.title}</h1>
                    <h5>{item?.subheader}</h5>
                  </center>
                </Box>
              );
            })}
          </GridThree>
        </Container>
      </Section>
    </Wrapper>
  );
}
