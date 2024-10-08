import Image from "next/image";
import React from "react";
import { ButtonUnderline } from "../buttons";
import styles from "./MainServices.module.scss";
export default function MainServices() {
  const paragraphContent = {
    title: "A Landscaping Company you Can Rely On",
    description: `Welcome to Project Landscape, A trusted
      residential landscape company, where transforming your outdoor
      space into a dream oasis is our passion. As one of Alberta's largest
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
                width={800} // Set a specific width
                height={600} // Set a specific height
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
              />
              <h3 className={`subheader ${styles.imageOverlayHeader}`}>
                Hardscaping
              </h3>
              <div className={styles.textHoverContainer}>
                <div className={styles.textHoverContent}>
                  <div className={styles.contentForImageContainer}>
                    If you’re seeking to enhance your backyard experience,
                    hardscaping is the perfect solution. Elements like paving
                    stone patios, retaining walls, garden bed walls, and
                    concrete features not only boost visual appeal but also
                    create inviting transitions into your outdoor areas. A
                    well-planned hardscape can transform your backyard into an
                    extension of your home, offering a seamless blend between
                    indoor and outdoor living spaces. Imagine having an outdoor
                    living room where you can relax, entertain, and enjoy nature
                    without the high costs of traditional home extensions.
                    Additionally, incorporating features such as fire pits,
                    outdoor kitchens, and seating areas can further elevate the
                    functionality and enjoyment of your outdoor oasis.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemText}>
              <span className="subheader">Calgary hardscaping</span>
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
                src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658902/softscaping-calgary_tnjycp.webp"
                alt="calgary softscaping services"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <h3 className={`subheader ${styles.imageOverlayHeader}`}>
                Softscaping
              </h3>
              <div className={styles.textHoverContainer}>
                <div className={styles.textHoverContent}>
                  <div className={styles.contentForImageContainer}>
                    Transform your average landscape into the envy of your
                    neighborhood with our softscaping services in Calgary. Enjoy
                    a virtually maintenance-free lawn with artificial turf,
                    safeguard your investment with underground sprinklers, and
                    choose from a variety of ground covers, including decorative
                    rocks and mulch. Opt for our unique planting services that
                    go beyond the ordinary and add a personalized touch to your
                    outdoor space.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemText}>
              <span className="subheader">Calgary softscaping</span>
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
                src="https://res.cloudinary.com/di7j408eq/image/upload/v1685658588/outdoor-living-calgary_fhbpev.webp"
                alt="outdoor landscaping services calgary"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <h3 className={`subheader ${styles.imageOverlayHeader}`}>
                Outdoor Living
              </h3>
              <div className={styles.textHoverContainer}>
                <div className={styles.textHoverContent}>
                  {/* <h3 className="subheader">Calgary outdoor living</h3> */}
                  <div className={`${styles.contentForImageContainer}`}>
                    Experience a lifestyle driven by the outdoors! Your outdoor
                    living space should reflect your unique style, with
                    personalized touches like custom pergolas, outdoor kitchens,
                    privacy panels, fireplaces, low-maintenance decking,
                    landscape lighting, fences, and more. Explore our Outdoor
                    Living page to discover how we can help you achieve your
                    lifestyle goals.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemText}>
              <span className="subheader">Calgary outdoor living</span>
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
