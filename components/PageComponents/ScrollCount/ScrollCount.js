import React, { useState, useEffect, useRef } from "react";
import { Section, Container, GridThree } from "components/layoutComponents";
import Image from "next/image";
import styles from "./styles.module.css";

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
        requestAnimationFrame(animateCounter(startTime, targetValue, setCounter));
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
      (entries) => handleIntersection(entries, observerFirstBox, setCounterFirstBox, targetValueFirstBox),
      observerOptions
    );
    const observerRedBox = new IntersectionObserver(
      (entries) => handleIntersection(entries, observerRedBox, setCounterRedBox, targetValueRedBox),
      observerOptions
    );
    const observerBlackBox = new IntersectionObserver(
      (entries) => handleIntersection(entries, observerBlackBox, setCounterBlackBox, targetValueBlackBox),
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
        <GridThree>
          <div className={styles.firstbox} ref={firstBoxRef}>
            <center>
              <Image
                src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/thumbsup.png"
                alt="thumsup"
                width={80}
                height={100}
              />
              <p className={styles.only}>Only</p>
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
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/message.png"
                  alt="thumsup"
                  width={100}
                  height={100}
                />
                <div className={styles.incorrect}>{counterRedBox}%</div>
                <div className={styles.thumpsupBody}>
                  Return on investment can be achieved through high-quality
                  landscape design and installation.
                </div>
              </center>
            </div>
            <div className={styles.blackBox} ref={blackBoxRef}>
              <center>
                <Image
                  src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/incorrect.png"
                  alt="thumsup"
                  width={100}
                  height={100}
                />
                <div className={styles.incorrect}>{counterBlackBox}%</div>
                <div className={styles.thumpsupBody}>
                  Return on investment can be achieved through high-quality
                  landscape design and installation.
                </div>
              </center>
            </div>
          </div>
          <div className={styles.thirdColumn}>
            <h2>
              92% of businesses are losing money due to poor marketing efforts
            </h2>
            <p>
              Whether your business is struggling with a lack of leads or you’re
              trying to break into a new market, an effective marketing strategy
              will make all the difference. So why hasn’t it worked for you?
              You’re with the wrong marketing agency in Calgary. Strategic,
              data-driven marketing is vital for businesses striving to thrive
              in a fiercely competitive digital world.
            </p>
            <p>How does your marketing compare?</p>
            <button className={styles.button}>Get a Free Audit</button>
          </div>
        </GridThree>
      </Container>
    </Section>
  );
}
