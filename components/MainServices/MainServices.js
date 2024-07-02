import Image from "next/image";
import React from "react";
import { ButtonUnderline } from "../buttons";
import styles from "./MainServices.module.scss";
export default function MainServices() {
  const paragraphContent = {
    title: "A Calgary Landscape Company you Can Rely On",
    description: `Welcome to Project Landscape, Calgary's most trusted and extensive
      residential landscape company, where transforming your outdoor
      space into a dream oasis is our passion. As Calgary's largest
      provider of comprehensive landscaping services, we specialize in
      bringing your vision to life with our expert hardscaping,
      softscaping, and outdoor living solutions. Our certification in
      paving stones, decking, and retaining walls guarantees you not
      only exceptional quality but also innovative design and durable
      construction. At Project Landscape, we understand that your home
      is your sanctuary. That's why we're dedicated to enhancing your
      living experience, ensuring every project reflects your personal
      style and meets your needs. Choose us for a landscape that
      elevates your home and lifestyle!`,
  };

  return (
    <section>
      <div className="container">
        <div className={styles.text}>
          <h2 className="title"> {paragraphContent.title} </h2>
          <p>{paragraphContent.description}</p>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.firstImgContainer}>
              <Image
                className={styles.itemImg}
                src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658578/hardscaping-calgary_mjyioi.webp"
                alt="calgary hardscaping services"
                width={750}
                height={877}
                sizes="100vw"
              />
              <h3 className={`subheader ${styles.imageOverlayHeader}`}>
                Calgary hardscaping
              </h3>
              <div className={styles.textHoverContainer}>
                <div className={styles.textHoverContent}>
                  <div className={styles.contentForImageContainer}>
                    With a deep understanding of the five distinctive historical
                    garden styles, we create timeless designs that age with
                    grace and beauty. Our experience-driven approach means we
                    take everything into consideration: your lifestyle, existing
                    architecture, personal preferences, practical requirements,
                    and future goals for outdoor living. Visit our{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemText}>
              <h3 className="subheader">Calgary hardscaping</h3>
              <ButtonUnderline
                className="service-button"
                href="/residential-services/hardscaping"
              >
                learn more &#8594;
              </ButtonUnderline>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.secondImgContiner}>
              <Image
                className={styles.itemImg}
                width={600}
                height={702}
                src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658902/softscaping-calgary_tnjycp.webp"
                alt="calgary softscaping services"
                sizes="100vw"
              />
              <h3 className={`subheader ${styles.imageOverlayHeader}`}>
                Calgary softscaping
              </h3>
              <div className={styles.textHoverContainer}>
                <div className={styles.textHoverContent}>
                  <div className={styles.contentForImageContainer}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemText}>
              <h3 className="subheader">Calgary softscaping</h3>
              <ButtonUnderline
                className="service-button"
                href="/residential-services/softscaping"
              >
                learn more &#8594;
              </ButtonUnderline>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.thirdImgContainer}>
              <Image
                className={styles.itemImg}
                width={600}
                height={702}
                src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658588/outdoor-living-calgary_fhbpev.webp"
                alt="outdoor landscaping services calgary"
                sizes="100vw"
              />
              <h3 className={`subheader ${styles.imageOverlayHeader}`}>
                Calgary outdoor living
              </h3>
              <div className={styles.textHoverContainer}>
                <div className={styles.textHoverContent}>
                  {/* <h3 className="subheader">Calgary outdoor living</h3> */}
                  <div className={`${styles.contentForImageContainer}`}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemText}>
              <h3 className="subheader">Calgary outdoor living</h3>
              <ButtonUnderline
                className="service-button"
                href="/residential-services/outdoor-living"
              >
                learn more &#8594;
              </ButtonUnderline>
            </div>
          </div>
        </div>
        <div className={styles.bg} />
      </div>
    </section>
  );
}
