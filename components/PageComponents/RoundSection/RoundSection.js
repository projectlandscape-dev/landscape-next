import React from "react";
import Image from "next/image";
import styles from "./RoundSection.module.scss";
import { Container, Section } from "../../layoutComponents";

const RoundSection = ({ description, price, subheader, title, image }) => {
  return (
    <Section>
      <Container>
        <div className={styles.Box}>
          <div className={styles.imgSection}>
            <Image
              className={styles.leftImg}
              src={image?.sourceUrl}
              alt={image?.altText}
              width={500}
              height={500}
            />
          </div>
          <div className={styles.contentSection}>
            <button className={styles.content_btn}>{subheader}</button>
            <div className={styles.content_title}>
              <h2 className="subheader">{title}</h2>
              <span className={styles.price}>{price}</span>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${description}`,
              }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default RoundSection;
