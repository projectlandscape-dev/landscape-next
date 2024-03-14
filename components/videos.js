import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--clr-accent);
`;

const Items = styled.div`
  display: grid;
  place-items: center;

  .flex {
    display: flex;
    justify-content: center;
  }
`;

const VideoIframe = React.memo(({ videoId, thumbnailUrl }) => {
  return (
    <div className="video-container">
      <Script
        id="youtube"
        dangerouslySetInnerHTML={{
          __html: `document.getElementById('youtube').classList.remove('youtube')`,
        }}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        strategy="lazyOnload"
      />
      <Link
        href={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        className="full"   
      >
        <Image
          style={{ width: "100%", height: "auto" }}
          src={thumbnailUrl}
          alt={`Thumbnail for video ${videoId}`}
          width={500}
          height={360}
        />
      </Link>
      {/* <iframe
        id="youtube"
        width="500"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
        title={`YouTube video player for video ${videoId}`}
      ></iframe> */}
    </div>
  );
});

const Videos = () => {
  const videos = [
    { id: "msrESLwoj8Y", thumbnail: "https://vumbnail.com/msrESLwoj8Y.jpg" },
    { id: "efRlX9MxKoU", thumbnail: "https://vumbnail.com/efRlX9MxKoU.jpg" },
  ];

  return (
    <Wrapper>
      <section>
        <div className="container">
          <Items>
            <div className="flex">
              {videos.map((video) => (
                <div className="video-item" key={video.id} data-id={video.id}>
                  <VideoIframe
                    videoId={video.id}
                    thumbnailUrl={video.thumbnail}
                  />
                </div>
              ))}
            </div>
          </Items>
        </div>
      </section>
    </Wrapper>
  );
};

export default Videos;
