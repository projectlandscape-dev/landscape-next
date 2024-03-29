import React from "react";
import Image from "next/image";
import { Section, Container } from "../../layoutComponents";
import styles from "./RoundCornor2.module.scss";

const RoundCorner2 = ({ title, roundedSections }) => {
  return (
    <Section>
      <Container>
        <center>
          <h1 className="title mb-4">{title}</h1>
        </center>
        {roundedSections.map((item) => {
          return (
            <div className={styles.Box}>
              <div className={styles.imgSection}>
                <Image
                  className={styles.leftImg}
                  src={item?.image?.sourceUrl}
                  alt={item?.image?.altText}
                  width={500}
                  height={500}
                />
              </div>
              <div className={styles.contentSection}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${item?.description}`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </Container>
    </Section>
  );
};

export default RoundCorner2;
