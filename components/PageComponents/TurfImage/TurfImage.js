import React from "react";
import { Flex } from "components/layoutComponents";
// import Image from "next/image";

export default function TurfImage() {
  return (
    <section>
      <Flex>
        <img src="/turf1.png" alt="Icon representing turf safe for children's play areas." ></img>
        <img src="/turf2.png" alt="Icon indicating turf is pet-friendly and safe for animals." ></img>
        <img src="/turf3.png" alt="Icon symbolizing professional-grade turf with expert installation." ></img>
        <img src="/turf4.png" alt="Icon highlighting turf's drought-tolerant properties, suitable for arid climates." ></img>
      </Flex>
    </section>
  );
}
