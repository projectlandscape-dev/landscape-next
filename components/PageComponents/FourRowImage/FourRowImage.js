import React, { useState } from "react";
import { Section, Container, GridFour } from "../../layoutComponents";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import styles from "./FourRowImage.module.scss";
import ImageModal from "../../Modal/ImageModal";

const StyledTitle = styled.div`
  border: 2px solid #093057;
  background-color: #093057;
  color: #fff;
  padding: 10px;
`;

const FourRowImage = ({ imagesRow, title }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isOpenModal, setIsOpenModal] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Section>
        <Container>
          <center>
          <StyledTitle>
          <h1 className="title">{title}</h1>
          </StyledTitle>
          </center>
          <GridFour>
            {imagesRow.map((item, index) => {
              return (
                <div key={index} className="mt-4">
                  {item.link ? (
                    <Link href={item.link} className={styles.Img_Container}>
                      <Image
                        style={{ width:'700px', height: "250px" }}
                        src={item.image.sourceUrl}
                        alt={item.image.altText}
                        width={500}
                        height={500}
                      />
                      <h4>{item.title}</h4>
                    </Link>
                  ) : (
                    
                    <>
                      <Image
                        style={{ width: "700px", height: "250px" }}
                        src={item.image.sourceUrl}
                        alt={item.image.altText}
                        width={500}
                        height={500}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpenModal(true);
                          setImageUrl(item.image.sourceUrl);
                        }}
                      />
                      <h4>{item.title}</h4>
                    </>
                  )}
                </div>
              );
            })}
          </GridFour>
          {isOpenModal && (
            <ImageModal
              src={imageUrl}
              show={isOpenModal}
              hide={setIsOpenModal}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default FourRowImage;
