import Script from "next/script";
import React, { useRef } from "react";
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

  return (
    <div className="spacing">
      <Script
        src="https://embedsocial.com/api/pro_hashtag/3c18d46b1f22bc51b2c07e90e7ab55bb531af6ad"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("EmbedSocial script loaded successfully");
        }}
        defer
      />
      <Feed ref={feedContainerRef}>
        <iframe
          src="https://embedsocial.com/api/pro_hashtag/3c18d46b1f22bc51b2c07e90e7ab55bb531af6ad"
          allowtransparency="true"
          referrerPolicy="no-referrer-when-downgrade"
          title="pro_hashtag"
          loading="lazy"
        ></iframe>
        <hr />
      </Feed>
    </div>
  );
}
