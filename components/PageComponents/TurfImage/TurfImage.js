import React from "react";
import { Flex } from "components/layoutComponents";
import Image from "next/image";

export default function TurfImage() {
  return (
    <section>
      <Flex>
        <Image src="/turf1.png"></Image>
        <Image src="/turf2.png"></Image>
        <Image src="/turf3.png"></Image>
        <Image src="/turf4.png"></Image>
      </Flex>
    </section>
  );
}
