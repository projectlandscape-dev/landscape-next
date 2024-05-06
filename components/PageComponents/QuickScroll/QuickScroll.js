import React from "react";
import React, { useState } from "react";
import { Container, Section } from "../../layoutComponents";
import styles from "./QuickScroll.module.scss";

const QuickScroll = () => {
  const [activeTab, setActiveTab] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
    }
  };

  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div
            className={`${styles.clip} ${
              activeTab === "trees" && styles.active
            }`}
            onClick={() => scrollToSection("trees")}
          >
            <div>Trees</div>
          </div>
          <div
            className={`${styles.clip} ${
              activeTab === "perennials" && styles.active
            }`}
            onClick={() => scrollToSection("perennials")}
          >
            <div>Perennials</div>
          </div>

          <div
            className={`${styles.clip} ${
              activeTab === "shrubs" && styles.active
            }`}
            onClick={() => scrollToSection("shrubs")}
          >
            <div>shrubs</div>
          </div>
        </div>
          <div
            className={`${styles.clip} ${
              activeTab === "trees" && styles.active
            }`}
            onClick={() => scrollToSection("trees")}
          >
            <div>Trees</div>
          </div>
          <div
            className={`${styles.clip} ${
              activeTab === "perennials" && styles.active
            }`}
            onClick={() => scrollToSection("perennials")}
          >
            <div>Perennials</div>
          </div>

          <div
            className={`${styles.clip} ${
              activeTab === "shrubs" && styles.active
            }`}
            onClick={() => scrollToSection("shrubs")}
          >
            <div>shrubs</div>
          </div>

        <section id="trees" >
          <h2>Trees Section</h2>
        </section>
        <section id="shrubs" >
          <h2>Shrubs Section</h2>
        </section>
        <section id="perennials" >
          <h2>Perennials Section</h2>
        </section>
      </Container>
    </Section>
  );
};

export default QuickScroll;
