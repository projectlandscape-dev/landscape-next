import React from "react";
import Link from "next/link";
import Image from "next/image";
import FormFooter from "../Forms/FormFooter";
import Map from "../map";
import InstagramFeed from "../instagramFeed";
import { ButtonInline } from "../buttons";
import styles from "./Footer.module.scss";
import { RegClock, Phone, Location, Mail } from "../../public/svg/Svg";

const IconStyle = {
  color: "var(--clr-accent)",
};

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerWrapperTop}>
        <div className="container spacing">
          <div>
            <InstagramFeed />
          </div>
          <div className={styles.flex}>
            <div className={styles.flex}>
              <div className="spacing">
                <Image
                  width={200}
                  height={100}
                  src="/project-landscape-logo-light.svg"
                  alt="project landscape logo - calgary landscape company"
                />
                <Map />
              </div>

              <div className={styles.divider} />
            </div>

            <div className={styles.flex}>
              <div className="spacing-lg">
                <div className="spacing">
                  <span className="subheader tan">contact us</span>
                  <div style={{ paddingLeft: "2rem" }}>
                    <Image
                      src="/visa.png"
                      alt="calgary landscaping payment type"
                      width={100}
                      height={100}
                    />
                  </div>

                  {/* <ul> */}
                  <div className="!flex items-center gap-1">
                    <Phone style={IconStyle} />
                    <Link
                      className={styles.contactLink}
                      href="tel: 403-257-4059"
                    >
                      403-257-4059
                    </Link>
                  </div>
                  <div className="!flex items-center gap-1">
                    <Mail style={IconStyle} />
                    <Link
                      className={styles.contactLink}
                      href="mailto: office@projectlandscape.ca"
                    >
                      office@projectlandscape.ca
                    </Link>
                  </div>
                  <div className="!flex items-center gap-1">
                    <Location style={IconStyle} />
                    <Link
                      className={styles.contactLink}
                      href="https://www.google.com/search?q=project%20landscape&oq=project+landscape&aqs=chrome..69i57j69i64j69i60l3.2120j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzVRUU_ZaNptPsOjzHtILa57paj9uQ:1676341266052&rflfq=1&num=10&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg&ved=2ahUKEwjnu73t-ZP9AhVKGzQIHdw6BLIQvS56BAgWEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg;mv:[[50.997355899999995,-113.98204679999999],[50.9522124,-114.01662379999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
                      target="_blank"
                    >
                      3511 64 Ave Calgary, AB
                    </Link>
                  </div>
                  <div className="!flex items-center gap-1">
                    <RegClock />
                    <Link className={styles.contactLink} href="#">
                      9 AM - 5 PM Mon - Fri <br /> 9 AM - 3 PM Sat
                    </Link>
                  </div>
                  {/* </ul> */}
                </div>
                <div className="spacing">
                  <span className="subheader tan">showroom</span>
                  <div className="!flex items-center gap-1">
                    <Location style={IconStyle} />
                    <Link
                      className={styles.contactLink}
                      href="https://www.google.com/maps?q=backyard+canada&rlz=1C1JZAP_enCA1008CA1008&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE5NzVqMGo5qAIAsAIA&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi097Gbmfb-AhUCADQIHYjWB-kQ_AUoAnoECAEQBA"
                      target="_blank"
                    >
                      BACKYARD CANADA - 711 48 AVE SE UNIT 1
                    </Link>
                  </div>
                  <div className="!flex items-center gap-1">
                    <Location style={IconStyle} />
                    <Link
                      className={styles.contactLink}
                      href="https://www.google.com/maps/place/THE+PATIO+STORE/@51.010056,-114.0577993,15z/data=!4m10!1m2!2m1!1spatio+store!3m6!1s0x537170fe60213311:0x6b77a73a5221e247!8m2!3d51.0008443!4d-114.0513727!15sCgtwYXRpbyBzdG9yZVoNIgtwYXRpbyBzdG9yZZIBF291dGRvb3JfZnVybml0dXJlX3N0b3JlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5GYmtwNVJrdFJFQUXgAQA!16s%2Fg%2F11d_74qn23"
                      target="_blank"
                    >
                      PATIO STORE - 533 58 AVE SE
                    </Link>
                  </div>
                  <div className="!flex items-center gap-1">
                    <Location style={IconStyle} />
                    <Link
                      className={styles.contactLink}
                      href="https://www.google.com/maps/place/World+of+Spas+%7C+Calgary+Hot+Tub+and+Swim+Spa+Dealer/@50.9962677,-114.0670975,17z/data=!3m1!4b1!4m6!3m5!1s0x537170f8345d142b:0x8259ac784ba88f8b!8m2!3d50.9962677!4d-114.0645172!16s%2Fg%2F1td424wj"
                      target="_blank"
                    >
                      WORLD OF SPAS - 6201 CENTRE S
                    </Link>
                  </div>
                </div>
                <div className={styles.socials}>
                  <span className="subheader tan">let's connect!</span>
                  <div>
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100063556661393&ref=aymt_homepage_panel"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/socials/facebook.svg"
                        alt="calgary landscaping company facebook"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/project__landscape/?hl=en"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/socials/instagram.svg"
                        alt="calgary landscaping company instagram"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="https://www.youtube.com/@projectlandscapeltd.9811"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/socials/youtube.svg"
                        alt="calgary landscaping company youtube"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="https://www.pinterest.ca/projectland0734/"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/socials/pinterest.svg"
                        alt="calgary landscaping company pinterest"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/project-landscape-ltd-pfvwus-pf~816279347?"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/socials/houzz.svg"
                        alt="calgary landscaping company"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="https://www.google.com/search?q=project%20landscape&rlz=1C1JZAP_enCA1008CA1008&oq=project+landscape&aqs=chrome..69i57j69i59j69i64j69i65j69i60l2j69i65.4202j0j9&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=APwXEde42p-FOu2e0riecHHuoBMahO47kQ:1682655163573&rflfq=1&num=10&serdesk=1&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcqoBORABMh4QASIaKaI3Foxmm9yUEJWVyMjPvBmgI2VvlzimO9cyFRACIhFwcm9qZWN0IGxhbmRzY2FwZQ&ved=2ahUKEwiBlLf62sv-AhUXITQIHeg0D40QvS56BAgVEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcqoBORABMh4QASIaKaI3Foxmm9yUEJWVyMjPvBmgI2VvlzimO9cyFRACIhFwcm9qZWN0IGxhbmRzY2FwZQ;mv:[[51.0443109,-113.9770916],[50.992142799999996,-114.1041654]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
                    >
                      <Image
                        width={100}
                        height={300}
                        src="/socials/calgary-landscaping-pros-trusted.svg"
                        alt="calgary landscaping company"
                      />
                    </Link>
                  </div>
                </div>
                <div>
                  <span className="subheader tan">about us</span>
                  <p className={styles.about}>
                    Project Landscape redefines the fundamentals of landscape
                    installation, landscape maintenance and service through-out
                    the province, including snow removal and{" "}
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
                    community. We are landscaping experts in Calgary.
                  </p>
                </div>
              </div>
              <div className={styles.divider} />
            </div>
            <div>
              <span className="subheader tan">email us</span>
              <FormFooter />
              <div style={{ marginTop: "30px" }}>
                <span className="subheader tan">
                  We offer our comprehensive landscaping Calgary services to
                  these surrounding area
                </span>
                <div className={styles.cities}>
                  <div>
                    <Link
                      className={styles.styledLink}
                      href="/calgary-landscaping-company"
                    >
                      Calgary landscaping
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.styledLink}
                      href="/okotoks-landscaping-company"
                    >
                      Okotoks Landscaping
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.styledLink}
                      href="/airdrie-landscaping-company"
                    >
                      Airdrie Landscaping
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.styledLink}
                      href="/chestermere-landscaping-company"
                    >
                      Chestermere Landscaping
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.styledLink}
                      href="/langdon-landscaping-company"
                    >
                      Langdon Landscaping
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.styledLink}
                      href="/boulder-creek-landscaping-company"
                    >
                      Boulder Creek Landscaping
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.styledLink}
                      href="/heritage-pointe-landscaping-company"
                    >
                      Heritage Pointe Landscaping
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.styledLink}
                      href="/priddis-landscaping-company"
                    >
                      Priddis Landscaping
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.styledLink}
                      href="/bearspaw-landscaping-company"
                    >
                      Bearspaw Landscaping
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.styledLink}
                      href="/springbank-landscaping-company"
                    >
                      <div>Springbank Landscaping</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className={styles.footerWrapperBottom}>
        <div className="container spacing-lg">
          <div className={styles.pageLinks}>
            <div className={styles.flex}>
              <div>
                <ul>
                  <li>
                    <Link href="/residential-services/hardscaping">
                      <span className="subheader">hardscaping</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.styledLink}
                      href="/residential-services/landscape-construction/patio-surfaces"
                    >
                      pavers
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
              </div>
              <div>
                <ul>
                  <li>
                    <Link href="/residential-services/softscaping">
                      <span className="subheader">softscaping</span>
                    </Link>
                  </li>
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
                      sod
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
              </div>
              <div>
                <ul>
                  <li>
                    <Link href="/residential-services/outdoor-living">
                      <span className="subheader">outdoor living</span>
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/decks-calgary">
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
                    <Link className={styles.styledLink} href="/privacy-screens">
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
              <div>
                <ul>
                  <li>
                    <Link href="/about">
                      <span className="subheader">company information</span>
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/about">
                      about us
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
                    <Link
                      className={styles.styledLink}
                      href="/customer-resource-center"
                    >
                      customer resource center
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
                      href="/residential-services"
                    >
                      residential services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.styledLink}
                      href="/commercial-services"
                    >
                      commercial services
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/faq">
                      FAQ
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
                    <Link className={styles.styledLink} href="/blog">
                      blogs
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/testimonials">
                      testimonials
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/packages">
                      packages
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
                    <Link className={styles.styledLink} href="/portfolio">
                      portfolio
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/projects">
                      projects
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/financing">
                      financing
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/contact">
                      get a quote
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <ul>
              <li>Copyright&#169; 2023</li>
              <li>Project Landscape Ltd.</li>
              <li>All Rights Reserved</li>
              <li>
                <Link className={styles.a} href="/terms-of-use">
                  terms of use
                </Link>
              </li>
              <li>
                <Link className={styles.a} href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className={styles.a}
                  href="https://21-pl.purpleparrotwebsites.com/sitemap_index.xml"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.author}>
            <div className="container">
              <div>
                <p>website by: </p>
                <Link target="_blank" href="https://aarontonner.com">
                  <Image
                    className="img"
                    src="/aaron-tonner-web-solutions-logo-white-white.svg"
                    alt="aaron tonner web solutions logo"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
