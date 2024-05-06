import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { Container, Section } from "../layoutComponents";

export default function ImageModal({ src, show, hide }) {
  return (
    <Section>
      <Container>
        <Modal
        size="lg"
          show={show}
          onHide={() => hide(false)}
          style={{ zIndex: 12000, marginTop: "6rem" }}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body >
            <Image
              style={{ width: "100%", height: "470px" }}
              class="img-fluid"
              src={src}
              width={500}
              height={500}
            />
          </Modal.Body>
        </Modal>
      </Container>
    </Section>
  );
}
