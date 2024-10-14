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


const FeaturedWork = () => {
  return (
    <FeaturedWrapper>
      <Image
        className="faqHeroBgImg"
        src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/02/outdoor-kitchen.webp"
        alt="outdoor-kitchen"
        width={500}
        height={500}
      />
      <Bgoverlay />
      <Section>
        <GridTwo>
          <h2 className="text-center text-6xl">PROJECT SPOTLIGHTS</h2>
          <p className="text-center text-base">
            Check out some of our most exciting work in Landscape design and
            Outdoor living! At Project Landscape, our landscape designs and
            installations work with a wide range of diverse materials that have
            unique needs and goals — see what we’ve done.
          </p>
        </GridTwo>
        <div className="py-8">
          <Carousel>
            <Carousel.Item interval={5000}>
              <div className="!flex !flex-col-reverse items-center justify-center gap-10 md:!flex-row">
                <div className="!flex w-96 flex-col gap-3">
                  <p className="text-4xl">Hardscaping Meets Low Maintenance</p>
                  <p>
                    Explore a stunning Calgary landscape where hardscaping
                    blends with low-maintenance elegance. Behold a backyard
                    paradise featuring effortless artificial turf, sturdy
                    retaining walls, inviting landscape lighting, and chic
                    paving stones. This outdoor sanctuary, crafted by Project
                    Landscape, is a testament to the harmonious blend of beauty
                    and practicality.
                  </p>
                  <ButtonPrimary href="/projects">
                    View Case Study
                  </ButtonPrimary>
                  <Link href="/portfolio" className="BtnSecondarySeeAllourwork">
                    See All Our Work
                  </Link>
                </div>

                <Image
                  className="h-[450px]"
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/21.png"
                  alt="21.png"
                  width={550}
                  height={500}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className="!flex !flex-col-reverse items-center justify-center gap-10 md:!flex-row">
                <div className="!flex w-96 flex-col gap-3">
                  <p className="text-4xl mb-4">The Ultimate Deck</p>
                  <p>
                    This contemporary deck and pergola design is expertly
                    wrapped and sealed with smooth hardy board, ensuring
                    durability and a sleek, modern aesthetic. It's a perfect
                    blend of style and functionality for any outdoor space.
                  </p>
                  <ButtonPrimary href="/projects">
                    View Case Study
                  </ButtonPrimary>
                  <Link href="/portfolio" className="BtnSecondarySeeAllourwork">
                    See All Our Work
                  </Link>
                </div>
                <Image
                  className="h-[450px]"
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/22.png"
                  alt="22.png"
                  width={550}
                  height={500}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className="!flex !flex-col-reverse items-center justify-center gap-10 md:!flex-row">
                <div className="!flex w-96 flex-col gap-3">
                  <p className="text-4xl">A Calgary Staycation</p>
                  <p>
                    Welcome to your ultimate staycation destination right in
                    Calgary! This backyard oasis is adorned with a stunning
                    cedar pergola, elegant privacy screens, ambient landscape
                    lighting, and exquisite Techo Bloc paving stones. The
                    centerpiece is a gas-powered fire table, perfect for cozy
                    gatherings and relaxing evenings under the stars. A true
                    retreat in your own backyard.
                  </p>
                  <ButtonPrimary href="/projects">
                    View Case Study
                  </ButtonPrimary>
                  <Link href="/portfolio" className="BtnSecondarySeeAllourwork">
                    See All Our Work
                  </Link>
                </div>

                <Image
                  className="h-[450px]"
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/24.png"
                  alt="24.png"
                  width={550}
                  height={500}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className="!flex !flex-col-reverse items-center justify-center gap-10 md:!flex-row">
                <div className="!flex w-96 flex-col gap-3">
                  <p className="text-4xl">Backyard Revival</p>
                  <p>
                    Experience a complete transformation with this show-stopping
                    front and backyard makeover. This envy-inducing landscape
                    features a custom shed, sleek composite decking, charming
                    paving stone patios, alluring landscape lighting, tranquil
                    water features, a stylish pergola, flourishing garden beds,
                    and practical artificial turf for effortless, low
                    maintenance living. A true neighborhood gem in every detail.
                  </p>
                  <ButtonPrimary href="/projects">
                    View Case Study
                  </ButtonPrimary>
                  <Link href="/portfolio" className="BtnSecondarySeeAllourwork">
                    See All Our Work
                  </Link>
                </div>

                <Image
                  className="h-[450px]"
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/12/25.png"
                  alt="25.png"
                  width={550}
                  height={500}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className="!flex !flex-col-reverse items-center justify-center gap-10 md:!flex-row">
                <div className="!flex w-96 flex-col gap-3">
                  <p className="text-4xl">A Place To Unwind</p>
                  <p>
                    Explore our newest landscape creation featuring outcropping
                    retaining walls, welcoming patios, elegant steps, and
                    private screens. This design transforms your backyard into
                    the ultimate retreat for relaxation and serenity. Experience
                    the perfect fusion of style and peacefulness in your
                    personal outdoor haven. Your tranquil oasis is just a step
                    away.
                  </p>
                  <ButtonPrimary href="/projects">
                    View Case Study
                  </ButtonPrimary>
                  <Link href="/portfolio" className="BtnSecondarySeeAllourwork">
                    See All Our Work
                  </Link>
                </div>

                <Image
                  className="h-[450px]"
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-63-1.png"
                  alt="63.png"
                  width={550}
                  height={500}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className="!flex !flex-col-reverse items-center justify-center gap-10 md:!flex-row">
                <div className="!flex w-96 flex-col gap-3">
                  <p className="text-4xl">Award winning Landscapes</p>
                  <p>
                    Project Landscape has proudly set a new standard in Calgary,
                    becoming the only outdoor living company to clinch the "Best
                    Landscaping" award for three years running at the Calgary
                    Home and Garden Show. Dive into our award-winning showcases
                    from 2022, 2023, and 2024, brimming with inspiration for
                    your backyard revamp. From hassle-free decking solutions and
                    bespoke pergolas to tailor-made saunas, lush plants,
                    tranquil water features, and paving stone options designed
                    to complement any home exterior, we've got your outdoor
                    makeover dreams covered.
                  </p>
                  <ButtonPrimary href="/projects">
                    View Case Study
                  </ButtonPrimary>
                  <Link href="/portfolio" className="BtnSecondarySeeAllourwork">
                    See All Our Work
                  </Link>
                </div>

                <Image
                  className="h-[450px]"
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/03/homepage-spotlight.png"
                  alt="63.png"
                  width={550}
                  height={500}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Section>
    </FeaturedWrapper>
  );
};

export default FeaturedWork;
