import styles from "./Header.module.scss";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useLockedBody } from "usehooks-ts";
import { useRouter } from "next/router";
// import dynamic from "next/dynamic";
import { ButtonSecondaryLight } from "../buttons";

// const ButtonSecondaryLight = dynamic(() =>
//   import("../buttons").then((module) => module.ButtonSecondaryLight)
// );

const device = {
  sm: "18em",
  md: "70em",
};

const NavList = styled.ul`
  display: flex;
  padding: 0;
  
  list-style-type: none;
  & > * + * {
    margin-left: 1.5em;
  }

  @media screen and (max-width: ${device.md}) {
    display: ${({ nav }) => (nav ? "flex" : "none")};
    align-items: center;
    position: fixed;
    top: 115px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: start;
    width: 100%;
    background: var(--clr-light);
    box-shadow: var(--shadow-bottom);
    border-radius: var(--br);
    border-top: 1px solid var(--txt-dark-secondary);
    padding: 1em 2em 16em 2em;
    height: 100vh;
    overflow: auto;
  }
`;

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

  const [locked, setLocked] = useLockedBody(false, "__next");

  const toggleLocked = () => {
    setLocked(!locked);
  };

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
            <div className={styles.containerTopText}>
              OutDoor Living Done Right
            </div>
            <div className={styles.phone_container}>
              <Link className={styles.navLinkTop} href="tel: 403 257 4059">
                <div>
                  <FaPhone />
                </div>
                403 257 4059
              </Link>
              <ButtonSecondaryLight
                style={{ fontSize: "0.62em", textAlign: "center" }}
                href="/contact"
              >
                Start Your Project
              </ButtonSecondaryLight>
            </div>
          </div>
        </div>

        <div className={styles.headerbottom}>
          <div className={styles.container}>
            <Link className={styles.logImgLink} href="/">
              <Image
                className={styled.logoImg}
                src="/project-landscape-logo-light.svg"
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
              <NavList nav={nav}>
                <div className={styles.dropdown}>
                  <p>
                    residential services <IoMdArrowDropdown size={20} />
                  </p>
                  <div>
                    <ul>
                      <Link
                        className={styles.linkDark}
                        href="/residential-services/hardscaping"
                      >
                        <h3 className="subheader">hardscaping</h3>
                      </Link>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/patio-surfaces"
                        >
                          paving stones
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/paver-sealing-refresh-program"
                        >
                          Paving Stone Sealing
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/retaining-walls"
                        >
                          retaining walls
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/outdoor-living/garden-walls"
                        >
                          garden walls
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/hardscaping/garden-bed-edging"
                        >
                          garden bed edging
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/concrete-curbing"
                        >
                          concrete curbing
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/staircases-stepping-stones"
                        >
                          stairs and stepping stones
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/seating"
                        >
                          seat walls and pillars
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/concrete-installations"
                        >
                          concrete installation
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/hardscaping/water-management"
                        >
                          water management
                        </Link>
                      </li>
                    </ul>

                    <ul>
                      <Link
                        className={styles.linkDark}
                        href="/residential-services/softscaping"
                      >
                        <h3 className="subheader">softscaping</h3>
                      </Link>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/artificial-turf"
                        >
                          artificial turf
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/irrigation-landscape-lighting"
                        >
                          irrigation installation
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/sod-installation"
                        >
                          sod installation
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/softscaping/calgary-sod-delivery"
                        >
                          sod delivery
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/tree-shrub-planting"
                        >
                          shrub and tree planting
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/mulches-decorative-rock"
                        >
                          mulch and decorative rock
                        </Link>
                      </li>
                    </ul>

                    <ul>
                      <Link
                        className={styles.linkDark}
                        href="/residential-services/outdoor-living"
                      >
                        <h3 className="subheader">outdoor living</h3>
                      </Link>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/decks-calgary"
                        >
                          decks
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/gazebos-pergolas"
                        >
                          pergolas
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/landscape-lighting-services-calgary"
                        >
                          landscape lighting
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/landscape-design"
                        >
                          landscape design
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/water-features"
                        >
                          water features
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/fire-pits-fire-places"
                        >
                          fire pits and fire places
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/fence-contractor-in-calgary"
                        >
                          fences
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/privacy-screens"
                        >
                          privacy screens
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.styledLink} href="/railings">
                          deck railings
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/landscape-construction/outdoor-kitchens"
                        >
                          outdoor kitchens
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/residential-services/outdoor-living/outdoor-furniture"
                        >
                          outdoor furniture
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.dropdown}>
                  <p>
                    about <IoMdArrowDropdown size={20} />
                  </p>
                  <div>
                    <ul>
                      <Link className={styles.linkDark} href="/about">
                        <h3 className="subheader">company information</h3>
                      </Link>
                      <li>
                        <Link className={styles.styledLink} href="/about">
                          about
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/strategic-partners"
                        >
                          strategic partners
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/areas-we-service"
                        >
                          service areas
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/awards-certificates"
                        >
                          Awards and Certificates
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.styledLink} href="/our-process">
                          our process
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.styledLink} href="/careers">
                          careers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/project-landscape-difference"
                        >
                          the project landscape difference
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <h3 className="subheader">customer center</h3>
                      <li>
                        <Link className={styles.styledLink} href="/faq">
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/refer-a-friend-to-project-landscape-ltd"
                        >
                          refer a friend
                        </Link>
                      </li>

                      <li>
                        <Link className={styles.styledLink} href="/financing">
                          financing{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.styledLink} href="/care-guides">
                          Care Guides
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.styledLink} href="/free-guides">
                          Free Guides
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/warranty-request"
                        >
                          warranty request
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.styledLink} href="/blog">
                          blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/testimonials"
                        >
                          testimonials
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.dropdown}>
                  <p>
                    resources <IoMdArrowDropdown size={20} />
                  </p>
                  <div>
                    <ul>
                      <h3 className="subheader">Get Inspired</h3>
                      <li>
                        <Link className={styles.styledLink} href="/projects">
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.styledLink} href="/portfolio">
                          portfolio
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/calgary-landscaping-materials"
                        >
                          Material Selection Guide
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/landscape-idea-center"
                        >
                          indoor idea center
                        </Link>
                      </li>
                      <li>
                        <Link className={styles.styledLink} href="/packages">
                          packages
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <h3 className="subheader">designscape style</h3>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/landscape-styles"
                        >
                          landscaping styles
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/outdoor-living-inspiration"
                        >
                          outdoor living inspiration
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={styles.styledLink}
                          href="/landscaping-trends"
                        >
                          landscaping trends
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <li>
                  <Link
                    className={styles.styledNavLink}
                    href="/commercial-services"
                  >
                    commercial services
                  </Link>
                </li>
                <li>
                  <Link className={styles.styledNavLink} href="/contact">
                    contact
                  </Link>
                </li>
              </NavList>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
