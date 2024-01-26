import React, { useState, useEffect, useRef } from "react";
import { Section, Container } from "components/layoutComponents";
import Image from "next/image";
import styles from "./ScrollCount.module.css";
import styled from "styled-components";

const device = {
  md: "48em",
};
export const GridThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  max-width: 80%;
  @media screen and (max-width: ${device.md}) {
    grid-template-columns: 1fr;
  }
`;

export default function ScrollCount() {
  const [counterFirstBox, setCounterFirstBox] = useState(0);
  const [counterRedBox, setCounterRedBox] = useState(0);
  const [counterBlackBox, setCounterBlackBox] = useState(0);

  const targetValueFirstBox = 30;
  const targetValueRedBox = 67;
  const targetValueBlackBox = 41;
  const duration = 2000;

  const firstBoxRef = useRef(null);
  const redBoxRef = useRef(null);
  const blackBoxRef = useRef(null);

  const animateCounter = (startTime, targetValue, setCounter) => {
    return () => {
      const currentTime = performance.now();
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCounter(Math.floor(targetValue * progress));
        requestAnimationFrame(
          animateCounter(startTime, targetValue, setCounter)
        );
      } else {
        setCounter(targetValue);
      }
    };
  };

  const handleIntersection = (entries, observer, setCounter, targetValue) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const startTime = performance.now();
        setCounter(0);
        animateCounter(startTime, targetValue, setCounter)();
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerFirstBox = new IntersectionObserver(
      (entries) =>
        handleIntersection(
          entries,
          observerFirstBox,
          setCounterFirstBox,
          targetValueFirstBox
        ),
      observerOptions
    );
    const observerRedBox = new IntersectionObserver(
      (entries) =>
        handleIntersection(
          entries,
          observerRedBox,
          setCounterRedBox,
          targetValueRedBox
        ),
      observerOptions
    );
    const observerBlackBox = new IntersectionObserver(
      (entries) =>
        handleIntersection(
          entries,
          observerBlackBox,
          setCounterBlackBox,
          targetValueBlackBox
        ),
      observerOptions
    );

    if (firstBoxRef.current) {
      observerFirstBox.observe(firstBoxRef.current);
    }
    if (redBoxRef.current) {
      observerRedBox.observe(redBoxRef.current);
    }
    if (blackBoxRef.current) {
      observerBlackBox.observe(blackBoxRef.current);
    }

    return () => {
      observerFirstBox.disconnect();
      observerRedBox.disconnect();
      observerBlackBox.disconnect();
    };
  }, [targetValueFirstBox, targetValueRedBox, targetValueBlackBox]);

  return (
    <Section>
      <Container>
        <center>
          <GridThree>
            <div className={styles.firstbox} ref={firstBoxRef}>
              <center>
                <Image
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/2-removebg-preview.png"
                  alt="thumsup"
                  width={80}
                  height={80}
                />
                <div className={styles.only}>Only</div>
                <div className={styles.count}>{counterFirstBox}%</div>
                <div className={styles.thumpsupBody}>
                  Return on investment can be achieved through high-quality
                  landscape design and installation.
                </div>
              </center>
            </div>
            <div className={styles.secondColumn}>
              <div className={styles.redBox} ref={redBoxRef}>
                <center>
                  <Image
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/1-removebg-preview.png"
                    alt="thumsup"
                    width={80}
                    height={80}
                  />
                  <div className={styles.incorrect}>{counterRedBox}%</div>
                  <div className={styles.thumpsupBody}>
                    of families want to spend more time outside with a well
                    designed landscape
                  </div>
                </center>
              </div>
              <div className={styles.blackBox} ref={blackBoxRef}>
                <center>
                  <Image
                    src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/3.png"
                    alt="thumsup"
                    width={80}
                    height={80}
                  />
                  <div className={styles.incorrect}>{counterBlackBox}%</div>
                  <div className={styles.thumpsupBody}>
                    Of landscaping companies are missing the proper
                    certifications or necessary paperwork, highlighting the
                    importance of checking credentials before hiring.
                  </div>
                </center>
              </div>
            </div>
            <div className={styles.thirdColumn}>
              <h3>
                92% of businesses are losing money due to poor marketing efforts
              </h3>
              <p>
                One by One we've helped hundreds of customers in Calgary, not
                only in creating the stunning outdoor living spaces they've
                envisioned, but also in saving them money on maintenance and
                avoiding the pitfalls of poor design and installations. We
                recognize the frustration that comes with dealing with
                undependable landscapers who deliver subpar work, then only to
                find out later they're missing the right certifications and
                insurance.
              </p>
              <p>How does your marketing compare?</p>
              <button className={styles.button}>Get a Free Audit</button>
            </div>
          </GridThree>
        </center>
      </Container>
    </Section>
  );
}
