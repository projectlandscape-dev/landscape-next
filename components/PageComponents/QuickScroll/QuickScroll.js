import React from "react";
import { Container, Section } from "../../layoutComponents";
import styles from "./QuickScroll.module.scss";

const QuickScroll = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
        <div className={styles.tab}>
             <button>Tab1</button>
            </div>
            <div className={styles.tab}>
            <button>Tab1</button>

            </div>
            <div className={styles.tab}>
            <button>Tab1</button>

            </div>

        </div>
      </Container>
    </Section>
  );
};

export default QuickScroll;
