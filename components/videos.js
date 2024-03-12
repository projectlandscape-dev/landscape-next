import React from "react";
import styled from "styled-components";
import { YouTubeEmbed } from "@next/third-parties/google";

const Wrapper = styled.div`
  background: var(--clr-accent);
`;

const Items = styled.div`
  // display: grid;
  // place-items: center;

  .flex {
    display: flex;
    justify-content: center;
  }
`;

const videos = [
  { id: "msrESLwoj8Y", thumbnail: "https://vumbnail.com/msrESLwoj8Y.jpg" },
  { id: "efRlX9MxKoU", thumbnail: "https://vumbnail.com/efRlX9MxKoU.jpg" },
];
export default function Videos() {
  return (
    <Wrapper>
      <section>
        <div className="container">
          <Items>
            <div className="flex">
              {videos.map((video) => (
                <YouTubeEmbed
                key={video}
                  videoid={video.id}
                  width={500}
                  params="controls=0"
                />
              ))}
            </div>
          </Items>
        </div>
      </section>
    </Wrapper>
  );
}
