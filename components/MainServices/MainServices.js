import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
const ButtonUnderline = dynamic(() =>
  import("../buttons").then((module) => module.ButtonUnderline),
  { ssr: false }
);
import styles from "./MainServices.module.scss";

export default function MainServices() {

  const paragraphContent = {
    title: 'A Calgary Landscape Company you Can Rely On',
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
      elevates your home and lifestyle!`
  }

  return (
    <section>
        <div className="container">
          <div className={styles.text}>
            {/* <div> */}
              <h2 className="title"> { paragraphContent.title } </h2>
            {/* </div> */}
            <p>
              { paragraphContent.description }
            </p>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.list}>
            <div className={styles.item}>
              <Image
                style={{ width: "auto", height: "auto" }}
                src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658578/hardscaping-calgary_mjyioi.webp"
                alt="calgary hardscaping services"
                width={1000}
                height={500}
              />
              <div className={styles.itemText}>
                <h3 className="subheader">hardscaping</h3>
                <ButtonUnderline
                  className="service-button"
                  href="/residential-services/hardscaping"
                >
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </div>
            <div className={styles.item}>
              <Image
                style={{ width: "auto", height: "auto" }}
                width={1000}
                height={500}
                src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658902/softscaping-calgary_tnjycp.webp"
                alt="calgary softscaping services"
              />
              <div className={styles.itemText}>
                <h3 className="subheader">softscaping</h3>
                <ButtonUnderline
                  className="service-button"
                  href="/residential-services/softscaping"
                >
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </div>
            <div className={styles.item}>
              <Image
                style={{ width: "auto", height: "auto" }}
                width={1000}
                height={500}
                src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658588/outdoor-living-calgary_fhbpev.webp"
                alt="outdoor landscaping services calgary"
              />
              <div className={styles.itemText}>
                <h3 className="subheader">outdoor living</h3>
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
