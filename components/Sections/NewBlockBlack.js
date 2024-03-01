import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../buttons";

const Wrapper = styled.div`
  background: var(--clr-dark);
`;
const Text = styled.div`
  color: var(--txt-light);
`;
const ImgStyles = {
  width:'100%',
  height:'auto',
  boxShadow: "-20px 20px 0px 1px var(--clr-tan)",
  marginTop: "2em",
  maxHeight: "450px",
};

export default function NewBlockBlack() {
  return (
    <Wrapper>
      <section>
        <div className="container">
          <div className="flexMobileOpp">
            <Image
              width={500}
              height={100}
              style={ImgStyles}
              src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-2024-01-24T115852.914.png"
              alt="calgary landscaping showroom"
              sizes="(max-width:768px), 50vw, 100vw"
            />
            <Text className="spacing">
              <div>
                <h2 className="title tan">
                  {" "}
                  We're Flipping The Indoors Out
                </h2>
              </div>
              <p>
                We're taking the indoor comfort outside, from designing and
                installing stunning landscapes to building custom,
                low-maintenance decks and crafting the most innovative patios.
                As an outdoor living and hardscape design company, our goal is
                to exceed our clients' expectations with exceptional customer
                service and award-winning designs. If you're looking for a
                reliable and skilled team to turn your Calgary property into the
                talk of the town, you're in the right place. For the past seven
                years, we've helped hundreds of Calgary homeowners create their
                dream outdoor spaces. Every client, big or small, can expect the
                best in design, customer service, and professionalism from our
                team of experienced, committed, and landscape savvy
                professionals. Since 2016, we've been at the forefront in the
                landscape design and installation industry in Calgary, offering
                everything from custom decking to sophisticated landscape
                lighting. Our formula to the perfect landscaping process sets us
                apart from the competition.
              </p>
              <ButtonPrimary href="/landscape-idea-center">
                explore showroom
              </ButtonPrimary>
            </Text>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
