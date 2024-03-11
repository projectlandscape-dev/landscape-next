import React, { useState } from "react";
import { Section, Container, GridFour } from "../../layoutComponents";
import Image from "next/image";
import styled from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";

const Box = styled.div`
  max-height: 60%;
`;

const FourRowImage = ({ imagesRow, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (index) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Section>
        <Container>
          <center>
            <h1 className="title">{title}</h1>
          </center>
          <GridFour>
            {imagesRow.map((item, index) => {
              return (
                <Box key={index} onClick={() => handleClick(index)}>
                  <Image
                    style={{ width: "100%", height: "250px" }}
                    src={item.image.sourceUrl}
                    alt={item.image.altText}
                    width={500}
                    height={500}
                  />
                  <h3>{item.title}</h3>
                  {/* <hr /> */}
                  {/* <span>Linear Elegance for Inspiring Designs</span> */}
                </Box>
              );
            })}
          </GridFour>
        </Container>
      </Section>
      {selectedImage !== null && (
        <ImageModal
          isOpen={selectedImage !== null}
          onClose={handleCloseModal}
          image={imagesRow[selectedImage].image}
          title={imagesRow[selectedImage].title}
        />
      )}
    </>
  );
};

const ImageModal = ({ isOpen, onClose, image, title }) => {
  return (
    <Modal isOpen={isOpen} size='full' onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={{ base: "60%" }} style={{marginTop:'150px'}}>
        <ModalHeader textAlign="center">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            direction={{
              base: "column",
              md: "column",
              lg: "column",
              xl: "row",
            }}
            align="center"
            justify="center"
            gap={5}
          >
            <Image
              src={image.sourceUrl}
              alt={image.altText}
              width={300}
              height={300}
              style={{ width: "400px", height: "400px" }}
            />
          
          </Flex>

        </ModalBody>

      </ModalContent>
    </Modal>
  );
};

export default FourRowImage;
