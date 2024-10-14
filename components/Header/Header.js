import styled from "styled-components";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Phone, DropdownArrow } from "../../public/svg/Svg";
import Logo from "../../public/project-landscape-logo-light.svg";

const device = {
  sm: "18em",
  md: "70em",
};
const Burger = styled.div`
  position: absolute;
  visibility: hidden;
  right: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;

  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: var(--clr-accent);

    :nth-child(1) {
      transform: ${({ nav }) =>
        nav ? "rotate(-45deg) translate(-6px, 5px)" : "none"};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ nav }) =>
        nav ? "rotate(45deg) translate(-6px, -5px)" : "none"};
    }
  }

  @media screen and (max-width: ${device.md}) {
    visibility: visible;
    right: 15px;
    transform: ${({ nav }) => (nav ? "scale(1)" : "none")};
    z-index: 10000;
  }
`;

export default function HeaderBasic() {
  const [nav, navOpen] = useState(false);
  const { asPath } = useRouter();

  function toggleMenu() {
    navOpen(!nav);
  }

  useEffect(() => {
    navOpen(false);
  }, [asPath]);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headertop}>
          <div className={styles.containerTop}>
            <div className={styles.headerTopLeft}>
              {" "}
              Outdoor Living Done Right
            </div>
            <div className={styles.header_right}>
              <Link className={styles.navLinkTop} href="tel: 403 257 4059">
                <Phone />
                403 257 4059
              </Link>
              <button className={styles.connect_now} href="/contact">
                CONNECT NOW
              </button>
            </div>
          </div>
        </div>

        <div className={styles.headerbottom}>
          <div className={styles.container}>
            <Link href="/">
              <Image
                src={Logo}
                alt="landscape company calgary logo"
                width={170}
                height={60}
              />
            </Link>
            <nav className={styles.nav}>
              <Burger nav={nav} onClick={toggleMenu}>
                <div />
                <div />
                <div />
              </Burger>
              <div className={`${styles.NavList} ${nav ? styles.navOpen : ""}`}>
                <div className={styles.dropdown}>
                  <p>
                    residential services <DropdownArrow />
                  </p>
                  <div>
                    <ul>
                      <Link
                        className={styles.linkDark}
                        href="/residential-services/hardscaping"
                      >
                        Hardscaping
                      </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/patio-surfaces"
                        >
                          paving stones
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/paver-sealing-refresh-program"
                        >
                          Paving Stone Sealing
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/retaining-walls"
                        >
                          retaining walls
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/outdoor-living/garden-walls"
                        >
                          garden walls
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/hardscaping/garden-bed-edging"
                        >
                          garden bed edging
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/concrete-curbing"
                        >
                          concrete curbing
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/staircases-stepping-stones"
                        >
                          stairs and stepping stones
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/seating"
                        >
                          seat walls and pillars
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/concrete-installations"
                        >
                          concrete installation
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/hardscaping/water-management"
                        >
                          water management
                        </Link>
                    </ul>

                    <ul>
                      <Link
                        className={styles.linkDark}
                        href="/residential-services/softscaping"
                      >
                       Softscaping
                      </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/artificial-turf"
                        >
                          artificial turf
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/irrigation-landscape-lighting"
                        >
                          irrigation installation
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/sod-installation"
                        >
                          sod installation
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/softscaping/calgary-sod-delivery"
                        >
                          sod delivery
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/tree-shrub-planting"
                        >
                          shrub and tree planting
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/mulches-decorative-rock"
                        >
                          mulch and decorative rock
                        </Link>
                    </ul>

                    <ul>
                      <Link
                        className={styles.linkDark}
                        href="/residential-services/outdoor-living"
                      >
                      Outdoor living
                      </Link>
                        <Link
                          className={styles.styledLink}
                          href="/composite-decking"
                        >
                          decks
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/gazebos-pergolas"
                        >
                          pergolas
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/landscape-lighting-services-calgary"
                        >
                          landscape lighting
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/landscape-design"
                        >
                          landscape design
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/water-features"
                        >
                          water features
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/fire-pits-fire-places"
                        >
                          fire pits and fire places
                        </Link>

                        <Link
                          className={styles.styledLink}
                          href="/fence-contractor-in-calgary"
                        >
                          fences
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/privacy-screens"
                        >
                          privacy screens
                        </Link>
                        <Link className={styles.styledLink} href="/railings">
                          deck railings
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/outdoor-kitchens"
                        >
                          outdoor kitchens
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/outdoor-living/outdoor-furniture"
                        >
                          outdoor furniture
                        </Link>
                    </ul>
                  </div>
                </div>
                <div className={styles.dropdown}>
                  <p>
                    about <DropdownArrow />
                  </p>
                  <div>
                    <ul>
                      <Link className={styles.linkDark} href="/about">
                       Company information
                      </Link>
                        <Link className={styles.styledLink} href="/about">
                        about
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/strategic-partners"
                        >
                          strategic partners
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/areas-we-service"
                        >
                          service areas
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/awards-certificates"
                        >
                          Awards and Certificates
                        </Link>
                        <Link className={styles.styledLink} href="/our-process">
                          our process
                        </Link>
                        <Link className={styles.styledLink} href="/careers">
                          careers
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/project-landscape-difference"
                        >
                          the project landscape difference
                        </Link>
                    </ul>
                    <ul>
                      <span className="subheader">customer center</span>
                        <Link className={styles.styledLink} href="/faq">
                          FAQ
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/refer-a-friend-to-project-landscape-ltd"
                        >
                          refer a friend
                        </Link>

                        <Link className={styles.styledLink} href="/financing">
                          financing{" "}
                        </Link>

                        <Link
                          className={styles.styledLink}
                          href="/warranty-request"
                        >
                          warranty request
                        </Link>
                        <Link className={styles.styledLink} href="/blog">
                          blogs
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/testimonials"
                        >
                          testimonials
                        </Link>
                    </ul>
                  </div>
                </div>
                <div className={styles.dropdown}>
                  <p>
                    resources <DropdownArrow />
                  </p>
                  <div>
                    <ul>
                      <span className="subheader">Get Inspired</span>
                        <Link className={styles.styledLink} href="/projects">
                          Projects
                        </Link>
                        <Link className={styles.styledLink} href="/portfolio">
                          portfolio
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/calgary-landscaping-materials"
                        >
                          Material Selection Guide
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/landscape-idea-center"
                        >
                          indoor idea center
                        </Link>
                        <Link className={styles.styledLink} href="/packages">
                          packages
                        </Link>
                    </ul>
                    <ul>
                      <span className="subheader">designscape style</span>
                        <Link
                          className={styles.styledLink}
                          href="/landscape-styles"
                        >
                          landscaping styles
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/outdoor-living-inspiration"
                        >
                          outdoor living inspiration
                        </Link>
                        <Link
                          className={styles.styledLink}
                          href="/landscaping-trends"
                        >
                          landscaping trends
                        </Link>
                    </ul>
                  </div>
                </div>
                <div>
                  <Link
                    className={styles.styledNavLink}
                    href="/commercial-services"
                  >
                    commercial services
                  </Link>
                </div>
                <div>
                  <Link className={styles.styledNavLink} href="/contact">
                    contact
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
