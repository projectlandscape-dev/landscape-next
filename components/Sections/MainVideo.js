import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonPrimaryDark, ButtonInline } from "../buttons";

const TextTop = styled.div`
  text-align: center;
  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
`;
const Text = styled.div``;
const Grid = styled.div`
  display: grid;
  grid-template-rows: 4em auto 4em;
  grid-template-columns: 2em auto 2em;
`;
const Bg = styled.div`
  background: var(--clr-accent);
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`;
const Video = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
  z-index: 2;
`;

export default function MainVideo() {
  return (
    <section>
      <div className="spacing-lg">
        <TextTop>
          <h2 className="title">
            A Landscape Company You Can Trust
          </h2>
        </TextTop>
        <div className="flexMobileOpp spacing">
          <Text>
            <div className="container spacing">
              <div>
                <span className="subheader">Redefining Landscaping</span>
                <p>
                  Project Landscape redefines the fundamentals of{" "}
                  <ButtonInline href="/residential-services/irrigation-landscape-lighting">
                    landscape installation
                  </ButtonInline>
                  , landscape maintenance and landscape services throughout
                  Calgary and{" "}
                  <ButtonInline href="/areas-we-service">
                    surrounding areas
                  </ButtonInline>
                  . We design, build and maintain landscapes for both{" "}
                  <ButtonInline href="/residential-services">
                    Residential
                  </ButtonInline>{" "}
                  and the{" "}
                  <ButtonInline href="/commercial-services">
                    business
                  </ButtonInline>{" "}
                  community.{" "}
                  <ButtonInline href="/contact">Contact us</ButtonInline> to
                  hire our team today!
                </p>
              </div>
              <div>
                <span className="subheader">
                  giving you a personal backyard paradise
                </span>
                <p>
                  Our professional experience and knowledge helps us tackle any{" "}
                  <ButtonInline href="/portfolio">
                    landscaping project
                  </ButtonInline>{" "}
                  thrown our way - weather its installing a complete landscape
                  or giving your business a more attractive{" "}
                  <ButtonInline href="/concrete-curbing">
                    curb-appeal
                  </ButtonInline>
                  . We give our customers a personal paradise, with minimal
                  maintenance so they can just sit back and enjoy.
                </p>
              </div>
              <div>
                <span className="subheader">
                  increasing the beauty of your outdoor landscape
                </span>
                <p>
                  <ButtonInline href="/about">Project Landscape</ButtonInline>{" "}
                  has all of the expertise, the highest insurance that the
                  industry has to offer, we are in good standing with the
                  workers compensation board and have the staff to increase the
                  beauty of your property through{" "}
                  <ButtonInline href="/decks-calgary">
                    deck building
                  </ButtonInline>
                  ,{" "}
                  <ButtonInline href="/residential-services/landscape-construction/patio-surfaces">
                    deck installs
                  </ButtonInline>
                  ,{" "}
                  <ButtonInline href="/residential-services/landscape-construction/patio-surfaces">
                    deck patios
                  </ButtonInline>
                  , landscaping and more.
                </p>
              </div>

              <div className="actions">
                <ButtonPrimaryDark href="/contact">
                  Free Estimates
                </ButtonPrimaryDark>
                <ButtonPrimary href="/about">about us</ButtonPrimary>
              </div>
            </div>
          </Text>

          <Grid>
            <Bg />
            <Video>
              <Image
                height={400}
                width={800}
                src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659967/calgary-landscaping-experience_zjnlnw.png"
                alt="best landscaping company in calgary, AB"
              />
            </Video>
          </Grid>
        </div>
      </div>
    </section>
  );
}
