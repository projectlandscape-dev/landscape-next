import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import styles from "./CustomPagingImage.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Section } from "../../layoutComponents";

export const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  grid-gap: 2em;
  margin-top: 2em;
`;


const CustomPagingImage = ({
  bigImage,
  title,
  colorHeading,
  colorItem,
  description,
  descriptionTitle,
}) => {
  const [imageIndex, setImageIndex] = useState(2);
  const handleNextClick = () => {
    if (imageIndex === bigImage?.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };
  const handlePrevClick = () => {
    if (imageIndex === 0) {
      setImageIndex(bigImage?.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };
  return (
    <Section>
            <h2 className="title mb-5 center">{title}</h2>
<Container>
      <div className={styles.imageSlider}>
        <Button variant="success" className={styles?.prevButton} onClick={handlePrevClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 298 512"
            fill="currentColor"
          >
            <path
              fillRule="nonzero"
              d="M285.77 441c16.24 16.17 16.32 42.46.15 58.7-16.16 16.24-42.45 16.32-58.69.16l-215-214.47c-16.24-16.16-16.32-42.45-.15-58.69L227.23 12.08c16.24-16.17 42.53-16.09 58.69.15 16.17 16.24 16.09 42.54-.15 58.7l-185.5 185.04L285.77 441z"
            />
          </svg>
        </Button>
        <div className="">
          <Image
            width={400}
            height={400}
            alt={"Image not Found "}
            src={bigImage?.[imageIndex]?.image?.sourceUrl || ""}
          />
          <p className={styles?.imageTitle}>
            {bigImage?.[imageIndex]?.imageTitle}
          </p>
        </div>
        <Button variant="success" className={styles.nextButton} onClick={handleNextClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 298 512"
            fill="currentColor"
          >
            <path
              fillRule="nonzero"
              d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
            />
          </svg>
        </Button>
      </div>
      <div>
        <center>

        <h3 className='subheader mt-2'>{colorHeading}</h3>
        </center>
        <Container>
          <Row className={styles?.colorDescription}>
            {bigImage?.map((item, i) => (
              <Col lg={2}>
                <div className={styles.descriptionImage} key={i}>
                  <Image
                    src={item?.image?.sourceUrl ?? "defaultImage.png"} // Assuming 'defaultImage.png' is your fallback image
                    width={100}
                    height={100}
                    style={{ margin: "auto", borderRadius: "50%" }}
                    onClick={() => setImageIndex(i)}
                  />
                  <p className={styles.imageTitle}>{item?.imageTitle}</p>
                </div>
              </Col>
            ))}
          </Row>
          <h4 className="subheader mt-5">{descriptionTitle}</h4>
          <div className={styles.descriptionImage}>
            <div
              className="mt-2"
              dangerouslySetInnerHTML={{
                __html: `${description}`,
              }}
            />
          </div>
        </Container>
      </div>
      </Container>
    </Section>
  );
};

export default CustomPagingImage;