import React from "react";
import Image from "next/image";
import styles from "./RoundSection.module.scss";
import { Container, Section } from "../../layoutComponents";

const RoundSection = () => {
  return (
    <Section>
      <Container>
        <div className={styles.Box}>
          <div className={styles.imgSection}>
            <Image
              className={styles.leftImg}
              src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/calgary-landscaping-testimonials-banner.jpg"
              alt="image"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.contentSection}>
            <button className={styles.content_btn}>Sod And GreenGrass</button>
            <div className={styles.content_title}>
              <h2 className="subheader">Premium kentucky Blue Grass Sod</h2>
              <span className={styles.price}>$0.55</span>
            </div>
            <p>
              We have a team of highly skilled and creative designers who
              understand the unique needs and preferences of Calgary homeowners.
              Our designs blend aesthetics with functionality, ensuring that
              every outdoor space is transformed into a stunning and practical
              oasis. Secondly, we are known for our exceptional Calgary
              landscaping
            </p>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: `${benefit.description}`,
              }}
            /> */}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default RoundSection;
