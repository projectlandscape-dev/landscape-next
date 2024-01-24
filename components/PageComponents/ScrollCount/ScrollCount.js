import React, { useState, useEffect } from "react";
import { Section, Container, GridThree } from "components/layoutComponents";
import Image from "next/image";
import styles from "./styles.module.css";

export default function ScrollCount() {
  const [counterFirstBox, setCounterFirstBox] = useState(0);
  const [counterRedBox, setCounterRedBox] = useState(0);
  const [counterBlackBox, setCounterBlackBox] = useState(0);

  const targetValueFirstBox = 30;
  const targetValueRedBox = 67; // Change this to the desired value for the red box
  const targetValueBlackBox = 41; // Change this to the desired value for the black box
  const duration = 2000;
  const interval = 50;

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

  useEffect(() => {
    let startTimeFirstBox;
    let startTimeRedBox;
    let startTimeBlackBox;

    let animationFrameIdFirstBox;
    let animationFrameIdRedBox;
    let animationFrameIdBlackBox;

    const startAnimation = (targetValue, setCounter, startTime, animationFrameId) => {
      return () => {
        startTime = performance.now();
        setCounter(0);
        animateCounter(startTime, targetValue, setCounter)();
      };
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameIdFirstBox);
        cancelAnimationFrame(animationFrameIdRedBox);
        cancelAnimationFrame(animationFrameIdBlackBox);
      } else {
        startAnimation(targetValueFirstBox, setCounterFirstBox, startTimeFirstBox, animationFrameIdFirstBox)();
        startAnimation(targetValueRedBox, setCounterRedBox, startTimeRedBox, animationFrameIdRedBox)();
        startAnimation(targetValueBlackBox, setCounterBlackBox, startTimeBlackBox, animationFrameIdBlackBox)();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    startAnimation(targetValueFirstBox, setCounterFirstBox, startTimeFirstBox, animationFrameIdFirstBox)();
    startAnimation(targetValueRedBox, setCounterRedBox, startTimeRedBox, animationFrameIdRedBox)();
    startAnimation(targetValueBlackBox, setCounterBlackBox, startTimeBlackBox, animationFrameIdBlackBox)();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameIdFirstBox);
      cancelAnimationFrame(animationFrameIdRedBox);
      cancelAnimationFrame(animationFrameIdBlackBox);
    };
  }, [targetValueFirstBox, targetValueRedBox, targetValueBlackBox, duration]);

  return (
    <Section>
      <Container>
        <GridThree>
          <div className={styles.firstbox}>
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
            <div className={styles.redBox}>
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
            <div className={styles.blackBox}>
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
