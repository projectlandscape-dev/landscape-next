import React, { useEffect, useRef, useState } from "react";
import { Container, GridTwo, Section } from "./layoutComponents";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import { ButtonPrimary } from "./buttons";

const FeaturedWrapper = styled.div`
  background: url("https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/07/image-3.png"),
    rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
  .carousel-indicators {
    display: none;
  }
`;
const BtnSecondary = styled.button`
  cursor: pointer;
  display: inline-block;
  width: 230px;
  font-family: var(--ff-alfa);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: capitalize;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: transparent;
  color: var(--clr-accent);
  border: 1px solid var(--clr-accent);

  &:hover {
    opacity: 0.8;
    color: var(--clr-accent);
  }
`;
const FeaturedWork = () => {
  return (
    <FeaturedWrapper>
      <Section>
        <GridTwo>
          <div>
            <h2 style={{ textAlign: "end", fontSize: "60px" }}>
              FEATURED WORK
            </h2>
          </div>
          <div style={{ width: "80%", fontSize: "18px" }}>
            <p>
              Check out some of our most exciting work in Web Design and Digital
              Marketing! At Lounge Lizard, our web design, development, and
              marketing company works with a wide range of diverse companies
              that have unique needs and goals — see what we’ve done.
            </p>
          </div>
        </GridTwo>
        <div style={{ padding: "60px 0px" }}>
          <Carousel>
            <Carousel.Item interval={5000}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "40%" }}>
                  <div style={{ width: "60%" }}>
                    <h2 style={{ fontSize: "2.4rem", marginBottom: "1.5rem" }}>
                      MIND GAMES Fragrance
                    </h2>
                    <p style={{ marginBottom: "40px" }}>
                      With a stunning increase in sales leads and SEO
                      performance, Silvercast’s new transformational site
                      showcases their digital signage from the heart of Time’s
                      Square.
                    </p>
                    <div>
                      <ButtonPrimary href="/calgary-landscaping-materials">
                        discover products
                      </ButtonPrimary>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <BtnSecondary>Seel All our work</BtnSecondary>
                    </div>
                  </div>
                </div>

                <div>
                  <img
                    src="https://res.cloudinary.com/di7j408eq/image/upload/v1686786686/deck-banners-3_c5kayc.webp"
                    height="600px"
                    width={"600px"}
                  />
                </div>
              </div>{" "}
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "40%" }}>
                  <div style={{ width: "60%" }}>
                    <h2 style={{ fontSize: "2.4rem", marginBottom: "1.5rem" }}>
                      MIND GAMES Fragrance
                    </h2>
                    <p style={{ marginBottom: "40px" }}>
                      With a stunning increase in sales leads and SEO
                      performance, Silvercast’s new transformational site
                      showcases their digital signage from the heart of Time’s
                      Square.
                    </p>
                    <div>
                      <ButtonPrimary href="/calgary-landscaping-materials">
                        discover products
                      </ButtonPrimary>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <BtnSecondary>Seel All our work</BtnSecondary>
                    </div>
                  </div>
                </div>

                <div>
                  <img
                    src="https://res.cloudinary.com/di7j408eq/image/upload/v1686786686/deck-banners-3_c5kayc.webp"
                    height="600px"
                    width={"600px"}
                  />
                </div>
              </div>{" "}
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "40%" }}>
                  <div style={{ width: "60%" }}>
                    <h2 style={{ fontSize: "2.4rem", marginBottom: "1.5rem" }}>
                      MIND GAMES Fragrance
                    </h2>
                    <p style={{ marginBottom: "40px" }}>
                      With a stunning increase in sales leads and SEO
                      performance, Silvercast’s new transformational site
                      showcases their digital signage from the heart of Time’s
                      Square.
                    </p>
                    <div>
                      <ButtonPrimary href="/calgary-landscaping-materials">
                        discover products
                      </ButtonPrimary>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <BtnSecondary>Seel All our work</BtnSecondary>
                    </div>
                  </div>
                </div>

                <div>
                  <img
                    src="https://res.cloudinary.com/di7j408eq/image/upload/v1686786686/deck-banners-3_c5kayc.webp"
                    height="600px"
                    width={"600px"}
                  />
                </div>
              </div>{" "}
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "40%" }}>
                  <div style={{ width: "60%" }}>
                    <h2 style={{ fontSize: "2.4rem", marginBottom: "1.5rem" }}>
                      MIND GAMES Fragrance
                    </h2>
                    <p style={{ marginBottom: "40px" }}>
                      With a stunning increase in sales leads and SEO
                      performance, Silvercast’s new transformational site
                      showcases their digital signage from the heart of Time’s
                      Square.
                    </p>
                    <div>
                      <ButtonPrimary href="/calgary-landscaping-materials">
                        discover products
                      </ButtonPrimary>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <BtnSecondary>Seel All our work</BtnSecondary>
                    </div>
                  </div>
                </div>

                <div>
                  <img
                    src="https://res.cloudinary.com/di7j408eq/image/upload/v1686786686/deck-banners-3_c5kayc.webp"
                    height="600px"
                    width={"600px"}
                  />
                </div>
              </div>{" "}
            </Carousel.Item>
            {/* <Carousel.Item interval={5000}>2 </Carousel.Item> */}
            {/* <Carousel.Item interval={5000}>3 </Carousel.Item> */}
            {/* <Carousel.Item interval={5000}>4 </Carousel.Item> */}
          </Carousel>
        </div>
      </Section>
    </FeaturedWrapper>
  );
};

export default FeaturedWork;
