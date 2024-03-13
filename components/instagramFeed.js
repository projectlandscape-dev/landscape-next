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
        id="embeded"
        dangerouslySetInnerHTML={{
          __html: `document.getElementById('embeded').classList.remove('embeded')`,
        }}      
        src="https://embedsocial.com/api/pro_hashtag/3c18d46b1f22bc51b2c07e90e7ab55bb531af6ad"
        strategy="lazyOnload"
      />
      <Feed ref={feedContainerRef}>
        <iframe
        id="embeded"
          src="https://embedsocial.com/api/pro_hashtag/3c18d46b1f22bc51b2c07e90e7ab55bb531af6ad"
          allowtransparency="true"
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
        ></iframe>
        <hr />
      </Feed>
    </div>
  );
}
