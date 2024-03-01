import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ScrollCount.module.css";
import styled from "styled-components";
import { Section, Container } from "../../layoutComponents";
import { ButtonPrimary } from "../../buttons";

const device = {
  md: "48em",
};
export const GridThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  max-width: 67%;
  @media screen and (max-width: ${device.md}) {
    grid-template-columns: 1fr;
  }
`;

const CounterBox = ({ imageSrc, alt, targetValue, description, isOnlyBox }) => {
  const [counter, setCounter] = useState(0);
  const boxRef = useRef(null);

  const animateCounter = (startTime) => {
    return () => {
      const currentTime = performance.now();
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCounter(Math.floor(targetValue * progress));
        requestAnimationFrame(animateCounter(startTime));
      } else {
        setCounter(targetValue);
      }
    };
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const startTime = performance.now();
        setCounter(0);
        animateCounter(startTime)();
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => handleIntersection(entries, observer),
      observerOptions
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <div className={styles.counterBox} ref={boxRef}>
      <center>
        <Image src={imageSrc} alt={alt} width={80} height={80}/>
        {isOnlyBox && <div className={styles.only}>Only</div>}
        <div className={styles.count}>{counter}%</div>
        <div className={styles.description}>{description}</div>
      </center>
    </div>
  );
};

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const duration = 2000;

export default function ScrollCount() {
  return (
    <Section>
      <Container>
        <center>
          <GridThree>
            <div className={styles.firstbox}>
              <CounterBox
                imageSrc="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/2-removebg-preview.png"
                alt="thumbs-up"
                targetValue={30}
                description="Return on investment can be achieved through high-quality landscape design and installation."
                isOnlyBox={true}
              />
            </div>
            <div className={styles.secondColumn}>
              <div className={styles.greenBox}>
                <CounterBox
                  imageSrc="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/1-removebg-preview.png"
                  alt="thumbs-up"
                  targetValue={67}
                  description="of families want to spend more time outside with a well designed landscape."
                />
              </div>
              <div className={styles.blackBox}>
                <CounterBox
                  imageSrc="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/3.png"
                  alt="thumbs-up"
                  targetValue={41}
                  description="Of landscaping companies are missing the proper certifications or necessary paperwork, highlighting the importance of checking credentials before hiring."
                />
              </div>
            </div>
            <div className={styles.thirdColumn}>
              <h3 style={{ fontSize: "25px", lineHeight: 1 }}>
                Creating Dream Outdoor Spaces with Savings and Reliability{" "}
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
              <ButtonPrimary href="">Get Started</ButtonPrimary>
            </div>
          </GridThree>
        </center>
      </Container>
    </Section>
  );
}
