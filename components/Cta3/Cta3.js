import React from "react";
import { ButtonSecondaryLight } from "../buttons";
import styles from "./Cta3.module.scss";

export default function Cta3() {
  return (
    <div className={styles.wrapper}>
      <section>
        <div className="container">
          <div className={styles.text}>
            <div className="spacing">
              <span className="title">your outdoor oasis is just a click away</span>
              <ButtonSecondaryLight href="/contact">
                get started &#8594;
              </ButtonSecondaryLight>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
