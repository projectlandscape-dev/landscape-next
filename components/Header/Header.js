import styled from "styled-components";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Mail, Phone, Location, DropdownArrow } from "../../public/svg/Svg";
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
            <div className={styles.phone_container}>
              <Link className={styles.navLinkTop} href="tel: 403 257 4059">
                <Phone />
                <span>403 257 4059</span>
              </Link>
            </div>

            <div className={styles.containerTopText}>
              <Mail />
              <Link href="mailto: office@projectlandscape.ca">
                OFFICE@PROJECTLANDSCAPE.CA
              </Link>
            </div>
            <div className={styles.location}>
              <Location />
              <Link href="https://www.google.com/search?q=project%20landscape&oq=project+landscape&aqs=chrome..69i57j69i64j69i60l3.2120j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzVRUU_ZaNptPsOjzHtILa57paj9uQ:1676341266052&rflfq=1&num=10&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg&ved=2ahUKEwjnu73t-ZP9AhVKGzQIHdw6BLIQvS56BAgWEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg;mv:[[50.997355899999995,-113.98204679999999],[50.9522124,-114.01662379999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14">
                3511 64 AVE CALGARY
              </Link>
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
                    about <DropdownArrow />
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
                    resources <DropdownArrow />
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
