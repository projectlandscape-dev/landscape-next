import Image from "next/image";
import { Section, GridThree } from "../../layoutComponents";
import styled from "styled-components";

const Box1 = styled.div`
  background: black;
  padding: 20px;
`;
const Box2 = styled.div`
  background: black;
`;
const Box3 = styled.div`
  background: black;
`;

export default function PromoBanner() {
  return (
    <Section
      style={{
        background: `url('https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/new.png')`,
        backgroundSize: "cover",
        // backgroundPosition: '',
      }}
    >
      <div className="container">
        <Image
          src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-1-1-1.png"
          alt="logo"
          width={200}
          height={200}
        />
        <center>
          <Image
            src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/giveaway-logo-1.png"
            alt="logo"
            width={600}
            height={600}
          />
        </center>
        <GridThree>
          <Box1>box 1</Box1>
          <Box2>box2</Box2>
          <Box3>box3</Box3>
        </GridThree>
<center>
        <p>
          Transform your outdoor space into a serene haven with our unique
          Calgary landscaping services. From custom design to expert
          installation, our team of experts will help you create a personalized
          and functional living space that showcases your personality and style.
          Get started with your transformation today!
        </p>
        </center>
        <div>
            <button>
                you have until 25 aug
            </button>
            <button>
                good luck
            </button>
        </div>
      </div>
    </Section>
  );
}
