import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./AllServices.module.scss";

const ServiceBox = (props) => {
  return (
    <div className={styles.item}>
      <Image
        className={styles.serviceImg}
        fill
        src={props.src}
        alt={props.alt}
        sizes="(min-width: 808px) 50vw, 100vw"
        />
      <Link className={styles.styledLink} href={props.href}>
        {props.text}
      </Link>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default function AllServices() {
  return (
    <section className="spacing-lg">
      <div className="container">
        <div className={styles.text}>
          <h2 className="title">
            take a closer look at our Landscaping calgary services
          </h2>
        </div>
      </div>
      <div className="container spacing">
        <h3 className="subheader accent center">
          popular Calgary hardscaping services
        </h3>
        <div className={styles.gridAuto}>
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685735838/calgary-pavers_za64ny.webp"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/patio-surfaces"
            text="Calgary Paving Stones"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685735838/retaining-walls-landscaper-calgary_bia36x.webp"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/retaining-walls"
            text="Calgary retaining walls"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685735839/garden-walls-calgary-landscaping_w5ggwo.webp"
            alt="calgary landscaping services"
            href="/residential-services/outdoor-living/garden-walls"
            text="Calgary garden walls"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685735840/garden-walls-calgary-landscaper_ybhe3f.webp"
            alt="calgary landscaping services"
            href="/residential-services/hardscaping/garden-bed-edging"
            text="Calgary edging"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659019/calgary-curbing_mwcoq2.webp"
            alt="calgary landscaping services"
            href="/concrete-curbing"
            text="Calgary curbing"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685735839/stairs-calgary-landscaper_twpw62.webp"
            alt="calgary landscaping services"
            href="/staircases-stepping-stones"
            text="Calgary stairs & stepping stones"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659082/seat-walls-landscaper-calgary_bfisyy.webp"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/seating"
            text="Calgary seat walls"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659116/calgary-concrete_n8gqyg.webp"
            alt="calgary landscaping services"
            href="/residential-services/concrete-installations"
            text="Calgary concrete"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658904/water-mgmt-calgary-landscaping_mssc5e.webp"
            alt="calgary landscaping services"
            href="/residential-services/hardscaping/water-management"
            text="Calgary water mgmt"
          />
           <ServiceBox
            src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-2024-01-24T114215.376.png"
            alt="calgary landscaping services"
            href="/paver-sealing-refresh-program"
            text="Calgary Paving Stone Sealing"
          />
        </div>
      </div>
      <div className={styles.wrapperDark}>
        <div className="container">
          <h3 className="subheader light center">
            popular Calgary softscaping services
          </h3>
          <div className={styles.gridAuto}>
            <ServiceBox
              href="/residential-services/landscape-construction/artificial-turf"
              alt="calgary landscaping services"
              src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658903/turf-calgary-landscaping_csenrh.webp"
              text="Calgary artificial turf"
            />
            <ServiceBox
              href="/residential-services/irrigation-landscape-lighting"
              alt="calgary landscaping services"
              src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659204/calgary-landscaping-irrigation_cu2cen.webp"
              text="Calgary irrigation"
            />
            <ServiceBox
              href="/residential-services/landscape-construction/sod-installation"
              alt="calgary landscaping services"
              src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736204/sod-landscaper_kiti8c.webp"
              text="Calgary sod"
            />
            <ServiceBox
              href="/residential-services/landscape-construction/tree-shrub-planting"
              alt="calgary landscaping services"
              src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736204/tree-landscaping-calgary_os3ocw.webp"
              text="Calgary shrubs & trees"
            />
            <ServiceBox
              href="/residential-services/landscape-construction/mulches-decorative-rock"
              alt="calgary landscaping services"
              src="https://res.cloudinary.com/di7j408eq/image/upload/v1685659344/calgary-decorative-rock-and-mulch_k3pdtq.webp"
              text="Calgary mulch & rock"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="subheader center accent">
          popular Calgary outdoor living services
        </h3>
        <div className={styles.gridAuto}>
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736600/calgary-decks_n5n0el.webp"
            alt="calgary landscaping services"
            href="/composite-decking"
            text="Calgary decks"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736600/pergola-2_secjyk.webp"
            alt="calgary landscaping services"
            href="/gazebos-pergolas"
            text="Calgary pergolas"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736376/lighting-calgary-landscaper_nj2pps.webp"
            alt="calgary landscaping services"
            href="/landscape-lighting-services-calgary"
            text="Calgary Landscape lighting"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736374/calgary-lighting_ndhyo6.webp"
            alt="calgary landscaping services"
            href="/landscape-design"
            text="Calgary Landscape Design"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736600/water-feature-landscaper_xs8lp7.webp"
            alt="calgary landscaping services"
            href="/residential-services/water-features"
            text="Calgary water features"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736600/fire-pits-2_aldxxk.webp"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/fire-pits-fire-places"
            text="Calgary fire pits"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736600/fence-landscaping-calgary_jc7l8l.webp"
            alt="calgary landscaping services"
            href="/fence-contractor-in-calgary"
            text="Calgary fences"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736600/screens-landscaper_zckisx.webp"
            alt="calgary landscaping services"
            href="/privacy-screens"
            text="Calgary privacy screens"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736772/calgary-landscaping-railings_gkdkgl.webp"
            alt="calgary landscaping services"
            href="/railings"
            text="Calgary deck railings"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736772/calgary-outdoor-kitchens_byzrwe.webp"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/outdoor-kitchens"
            text="Calgary outdoor kitchens"
          />
          <ServiceBox
            src="https://res.cloudinary.com/di7j408eq/image/upload/v1685736772/outdoor-furniture-landscaping-calgary_ctrdd5.webp"
            alt="calgary landscaping services"
            href="/residential-services/outdoor-living/outdoor-furniture"
            text="Calgary outdoor furniture"
          />
        </div>
      </div>
    </section>
  );
}
