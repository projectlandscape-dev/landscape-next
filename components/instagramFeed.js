import Script from "next/script";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Feed = styled.div`
  iframe {
    width: 100%;
    height: 540px;
  }

  hr {
    background-color: var(--clr-accent);
    height: 1px;
    border: none;
    z-index: 1000;
  }
`;

export default function InstagramFeed() {
  const feedContainerRef = useRef(null);

  useEffect(() => {
    const loadIframe = async () => {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://embedsocial.com/api/pro_hashtag/3c18d46b1f22bc51b2c07e90e7ab55bb531af6ad";
      iframe.frameBorder = 0;
      iframe.marginHeight = 0;
      iframe.marginWidth = 0;

      if (feedContainerRef.current) {
        feedContainerRef.current.appendChild(iframe);
      }
    };

    // Use requestAnimationFrame to ensure the iframe is loaded asynchronously
    const requestAnimationFrameId = requestAnimationFrame(loadIframe);

    return () => {
      cancelAnimationFrame(requestAnimationFrameId);

      if (feedContainerRef.current) {
        const iframe = feedContainerRef.current.querySelector("iframe");
        if (iframe) {
          feedContainerRef.current.removeChild(iframe);
        }
      }
    };
  }, []);

  return (
    <div className="spacing">
      <Script
        src="https://embedsocial.com/api/pro_hashtag/3c18d46b1f22bc51b2c07e90e7ab55bb531af6ad"
        async
        strategy="worker"
      />
      <Feed ref={feedContainerRef}>
        <hr />
      </Feed>
    </div>
  );
}
