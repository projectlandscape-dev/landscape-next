import React,{useEffect} from "react";
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
  
  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://embedsocial.com/api/pro_hashtag/3c18d46b1f22bc51b2c07e90e7ab55bb531af6ad';
    iframe.frameBorder = 0;
    iframe.marginHeight = 0;
    iframe.marginWidth = 0;

    const feedContainer = document.getElementById('feed-container');
    feedContainer.appendChild(iframe);

    return () => {
      feedContainer.removeChild(iframe);
    };
  }, []);
  return (
    <div className="spacing">
    <Feed id="feed-container">
      <hr />
    </Feed>
  </div>
  );
}
