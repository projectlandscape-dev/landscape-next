import React from "react";
import Image from "next/image";
import { ButtonSecondaryLight } from "../../buttons";

const Innovation = ({ title, body, button, link }) => {
  return (
    <div className="relative w-full h-auto min-h-screen">
      <Image
        src="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2024/01/image-85.png"
        alt="Background Image"
        fill
        objectFit="cover"
        objectPosition="center"
        className="z-0 absolute"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

      />
      <div className="relative z-20 flex justify-center items-center min-h-screen py-16">
        <div className="bg-green-800 bg-opacity-60 text-white text-center p-10 rounded-lg w-4/5 md:w-2/5">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
            className="mb-6"
          />
          <div className="flex justify-center">
            {button && link ? (
              <ButtonSecondaryLight href={link}>{button}</ButtonSecondaryLight>
            ) : (
              <ButtonSecondaryLight href="/contact">
                Get Started
              </ButtonSecondaryLight>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
