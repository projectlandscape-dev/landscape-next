import React from "react";
import styled from "styled-components";
import { Container } from "../../layoutComponents";
import { ButtonPrimary } from "../../buttons";
import Image from "next/image";



const TextMobile = styled.div`
  display: none;
  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  @media screen and (max-width: 1000px) {
    display: flex;
  }
`;

export default function Banner({
  title,
  subheader,
  description,
  image,
  titleCopy,
}) {
  return (
    <div>
      <div className="py-12 px-0" />
      <div className="grid grid-rows-[auto_auto] w-full mx-auto relative">
        <div className="relative grid place-items-center min-h-[100vh]">
          <Image
            className="w-[100vw] h-[100vh]"
            src={image.sourceUrl}
            alt="Banner Image"
            width={1440}
            height={500}
            sizes="(min-width: 808px) 50vw, 100vw"
            priority
          />
          <div className="spacing w-3/4 absolute z-10">
            <div className="text-txt-light mx-auto text-center">
              <div>
                <p className="text-xs subheader text-clr-tan">{titleCopy}</p>
                <h2 className="title">{title} - Project Landscape</h2>
                <p className="subheader text-clr-tan">{subheader}</p>
              </div>
              <ButtonPrimary href="/contact">get started</ButtonPrimary>
            </div>
          </div>
        </div>
        <div className="bg-dark absolute bottom-0 text-light py-8 px-4 w-[85%] hidden lg:block ">
          <Container>
            <p>{description}</p>
          </Container>
        </div>
      </div>
      <TextMobile>
        <Container>
          <p>{description}</p>
        </Container>
      </TextMobile>
    </div>
  );
}
