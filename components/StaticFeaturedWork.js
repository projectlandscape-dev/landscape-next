import { GridTwo, Section } from "./layoutComponents";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import { ButtonPrimary } from "./buttons";
import Link from "next/link";
import Image from "next/image";

const FeaturedWrapper = styled.div`
  position: relative;
  z-index: 1;
  color: var(--txt-light);
  .faqHeroBgImg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .carousel-indicators {
    display: none;
  }
`;
const Bgoverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: -1;
`;

const BtnSecondary = styled.button`
  cursor: pointer;
  display: inline-block;
  width: 230px;
  font-family: var(--font-alfa-slab-one);
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
const FeaturedImage = styled(Image)`
  height: 500px;
  width: 550px;
  object-fit: cover;
`;
const FeaturedWork = () => {
  return (
    <FeaturedWrapper>
      <Image
        className="faqHeroBgImg"
        src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/outdoor-kitchen.webp"
        alt="outdoor-kitchen"
        width={500}
        height={500}
        sizes="(max-width:768px) , 33vw, 50vw"
      />
      <Bgoverlay />
      <Section>
        <GridTwo>
          <h2 style={{ textAlign: "center", fontSize: "60px" }}>
            PROJECT SPOTLIGHTS
          </h2>
          <div style={{ textAlign: "center", fontSize: "18px" }}>
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
                      <ButtonPrimary href="/projects">
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

                <div>
                  <FeaturedImage
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/21.png"
                    alt="21.png"
                    height={500}
                    width={550}
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
                      <ButtonPrimary href="/projects">
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
                <div>
                  <FeaturedImage
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/22.png"
                    alt="22.png"
                    height={500}
                    width={550}
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
                      <ButtonPrimary href="/projects">
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

                <div>
                  <FeaturedImage
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/24.png"
                    alt="24.png"
                    height={500}
                    width={550}
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
                      <ButtonPrimary href="/projects">
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

                <div>
                  <FeaturedImage
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/25.png"
                    alt="25.png"
                    height={500}
                    width={550}
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
                      A Place To Unwind
                    </h2>
                    <p style={{ marginBottom: "40px" }}>
                      Explore our newest landscape creation featuring
                      outcropping retaining walls, welcoming patios, elegant
                      steps, and private screens. This design transforms your
                      backyard into the ultimate retreat for relaxation and
                      serenity. Experience the perfect fusion of style and
                      peacefulness in your personal outdoor haven. Your tranquil
                      oasis is just a step away.
                    </p>
                    <div>
                      <ButtonPrimary href="/projects">
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

                <div>
                  <FeaturedImage
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-63-1.png"
                    alt="63.png"
                    height={500}
                    width={550}
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
                      Award winning Landscapes
                    </h2>
                    <p style={{ marginBottom: "40px" }}>
                      Project Landscape has proudly set a new standard in
                      Calgary, becoming the only outdoor living company to
                      clinch the "Best Landscaping" award for three years
                      running at the Calgary Home and Garden Show. Dive into our
                      award-winning showcases from 2022, 2023, and 2024,
                      brimming with inspiration for your backyard revamp. From
                      hassle-free decking solutions and bespoke pergolas to
                      tailor-made saunas, lush plants, tranquil water features,
                      and paving stone options designed to complement any home
                      exterior, we've got your outdoor makeover dreams covered.
                    </p>
                    <div>
                      <ButtonPrimary href="/projects">
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

                <div>
                  <FeaturedImage
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/03/homepage-spotlight.png"
                    alt="63.png"
                    height={500}
                    width={550}
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
                    3 time best landscaping 
                    </h2>
                    <p style={{ marginBottom: "40px" }}>
                    Project Landscape has proudly set a new standard in Calgary, becoming the only outdoor living company to clinch the "Best Landscaping" award for three years running at the Calgary Home and Garden Show. Dive into our award-winning showcases from 2022, 2023, and 2024, brimming with inspiration for your backyard revamp. From hassle-free decking solutions and bespoke pergolas to tailor-made saunas, lush plants, tranquil water features, and paving stone options designed to complement any home exterior, we've got your outdoor makeover dreams covered.
                    </p>
                    <div>
                      <ButtonPrimary href="/projects">
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

                <div>
                  <FeaturedImage
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/03/image-2.png"
                    alt="image-2.png"
                    height={500}
                    width={550}
                  />
                </div>
              </div>{" "}
            </Carousel.Item>
          </Carousel>
        </div>
      </Section>
    </FeaturedWrapper>
  );
};

export default FeaturedWork;
