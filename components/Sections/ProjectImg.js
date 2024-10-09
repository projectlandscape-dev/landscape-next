import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ButtonSecondaryLight } from "../buttons";

const Wrapper = styled.div`
  background: var(--clr-accent);
`;

const Text = styled.div`
  color: var(--txt-light);
  p {
    color: var(--txt-light);
  }
`;

const ImgStyle = {
  boxShadow: "20px 20px 0px 1px var(--clr-accent)",
  maxHeight: "450px",
};

export default function ProjectImg() {
  return (
    <Wrapper>
      <section>
        <div className="container">
          <div className="flex">
            <Text className="spacing">
              <div></div>
              <h2 className="title">Let's Talk About Project Landscape</h2>
              <p>
                At Project Landscape, we understand the importance of choosing a
                seasoned and reliable team for your home construction needs.
                With pride and confidence, we stand by our extensive experience
                and proven success in the field. For over twenty years, our
                expertise in crafting outdoor structures has been sought after
                across Calgary, Airdrie, Cochrane, Langdon, Chestermere,
                Okotoks, Priddis, Bearspaw, Springbank, Canmore, Banff, and even
                as far as British Columbia. Each project we undertake benefits
                from this wealth of experience.
                <br />
                Our commitment to excellence is evident in our team. Each member
                of our construction crew is not only trained but also licensed,
                certified, and insured, ensuring every project is executed with
                the highest standards of safety and quality. We follow a
                rigorous Job Process Methodology to guarantee that each
                structure we build stands the test of time. Furthermore, our
                strong partnerships with both local and national vendors allow
                us to provide top-quality materials and services. At Project
                Landscape, we don't just build structures; we build confidence
                and satisfaction, backed by our comprehensive workmanship and
                product satisfaction guarantees.
              </p>

              <ButtonSecondaryLight href={"/contact"}>
                See How We're Different
              </ButtonSecondaryLight>
            </Text>
            <Image
              height={100}
              width={400}
              style={ImgStyle}
              src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/image-10-1-1.png"
              alt="best landscaper calgary, AB"
            />
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
