import React, { useEffect, useRef, useState } from "react";
import { Container, GridTwo, Section } from "./layoutComponents";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import { ButtonPrimary } from "./buttons";
import Link from "next/link";

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
              Check out some of our most exciting work in Landscape design and
              Outdoor living! At Project Landscape, our landscape designs and
              installations work with a wide range of diverse materials that
              have unique needs and goals — see what we’ve done.
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
                  <div style={{ width: "60%", marginLeft: "50px" }}>
                    <h2 style={{ fontSize: "2.4rem", marginBottom: "1.5rem" }}>
                      Hardscaping Meets Low Maintenance
                    </h2>
                    <p style={{ marginBottom: "40px" }}>
                      Explore a stunning Calgary landscape where hardscaping
                      blends with low-maintenance elegance. Behold a backyard
                      paradise featuring effortless artificial turf, sturdy
                      retaining walls, inviting landscape lighting, and chic
                      paving stones. This outdoor sanctuary, crafted by Project
                      Landscape, is a testament to the harmonious blend of
                      beauty and practicality.
                    </p>
                    <div>
                      <ButtonPrimary href="/calgary-landscaping-materials">
                        View Case Study
                      </ButtonPrimary>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <Link href="/portfolio">
                        <BtnSecondary> See All Our Work</BtnSecondary>
                      </Link>
                    </div>
                  </div>
                </div>

                <div style={{ height: "450px" }}>
                  <img
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/21.png"
                    height="100%"
                    style={{ objectPosition: "top", objectFit: "none" }}
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
                  <div style={{ width: "60%", marginLeft: "50px" }}>
                    <h2 style={{ fontSize: "2.4rem", marginBottom: "1.5rem" }}>
                      The Ultimate Deck
                    </h2>
                    <p style={{ marginBottom: "40px" }}>
                      This contemporary deck and pergola design is expertly
                      wrapped and sealed with smooth hardy board, ensuring
                      durability and a sleek, modern aesthetic. It's a perfect
                      blend of style and functionality for any outdoor space.
                    </p>
                    <div>
                      <ButtonPrimary href="/calgary-landscaping-materials">
                        View Case Study
                      </ButtonPrimary>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <Link href="/portfolio">
                        <BtnSecondary> See All Our Work</BtnSecondary>
                      </Link>
                    </div>
                  </div>
                </div>
                <div style={{ height: "450px" }}>
                  <img
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/22.png"
                    height="100%"
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
                  <div style={{ width: "60%", marginLeft: "50px" }}>
                    <h2 style={{ fontSize: "2.4rem", marginBottom: "1.5rem" }}>
                      A Calgary Staycation
                    </h2>
                    <p style={{ marginBottom: "40px" }}>
                      Welcome to your ultimate staycation destination right in
                      Calgary! This backyard oasis is adorned with a stunning
                      cedar pergola, elegant privacy screens, ambient landscape
                      lighting, and exquisite Techo Bloc paving stones. The
                      centerpiece is a gas-powered fire table, perfect for cozy
                      gatherings and relaxing evenings under the stars. A true
                      retreat in your own backyard.
                    </p>
                    <div>
                      <ButtonPrimary href="/calgary-landscaping-materials">
                        discover products
                      </ButtonPrimary>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <Link href="/portfolio">
                        <BtnSecondary> See All Our Work</BtnSecondary>
                      </Link>
                    </div>
                  </div>
                </div>

                <div style={{ height: "450px" }}>
                  <img
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/24.png"
                    height="100%"
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
                  <div style={{ width: "60%", marginLeft: "50px" }}>
                    <h2 style={{ fontSize: "2.4rem", marginBottom: "1.5rem" }}>
                      Backyard Revival
                    </h2>
                    <p style={{ marginBottom: "40px" }}>
                      Experience a complete transformation with this
                      show-stopping front and backyard makeover. This
                      envy-inducing landscape features a custom shed, sleek
                      composite decking, charming paving stone patios, alluring
                      landscape lighting, tranquil water features, a stylish
                      pergola, flourishing garden beds, and practical artificial
                      turf for effortless, low maintenance living. A true
                      neighborhood gem in every detail.
                    </p>
                    <div>
                      <ButtonPrimary href="/calgary-landscaping-materials">
                        discover products
                      </ButtonPrimary>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <Link href="/portfolio">
                        <BtnSecondary> See All Our Work</BtnSecondary>
                      </Link>
                    </div>
                  </div>
                </div>

                <div style={{ height: "450px" }}>
                  <img
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/25.png"
                    height="100%"
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
