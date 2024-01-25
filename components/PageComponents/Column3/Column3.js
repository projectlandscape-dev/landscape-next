import Image from "next/image";
import { Section, Container, GridThree } from "../../layoutComponents";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--clr-accent);
`;
const Box1 = styled.div`
  display: flex;
  color: white;
  flex-direction: column;

  .number1 {
    font-size: 50px;
    font-weight: 600;
    padding: 12px 0 12px 0;
  }
`;
const Box2 = styled.div`
  display: flex;
  color: white;
  flex-direction: column;

  .number2 {
    font-size: 50px;
    font-weight: 600;
    padding: 12px 0 12px 0;
  }
`;
const Box3 = styled.div`
  display: flex;
  color: white;
  flex-direction: column;

  .number3 {
    font-size: 50px;
    font-weight: 600;
    padding: 12px 0 12px 0;
  }
`;

export default function Column3() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <GridThree>
            <Box1>
              <center>
                <Image
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-2024-01-25T160233.384.png"
                  alt="google"
                  width={150}
                  height={100}
                />
                <h1 className="number1">90+</h1>
                <h3>5-Star Reviews</h3>
              </center>
            </Box1>
            <Box2>
              <center>
                <Image
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-2024-01-25T160237.325.png"
                  alt="star"
                  width={150}
                  height={100}
                />
                <div className="number2">20+</div>
                <h3>Years of Experience</h3>
              </center>
            </Box2>
            <Box3>
              <center>
                <Image
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-2024-01-25T160240.464.png"
                  alt="smile"
                  width={150}
                  height={100}
                />
                <div className="number3">1000+</div>
                <h3>Satisfied Customers</h3>
              </center>
            </Box3>
          </GridThree>
        </Container>
      </Section>
    </Wrapper>
  );
}
