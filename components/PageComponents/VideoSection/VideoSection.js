import React from "react";
import { GridTwo, Section } from "components/layoutComponents";
const VideoSection = (videolink) => {
  return (
    <Section>
      <center>
        <video
          src={videolink.videolink}
          controls={true}
          style={{ height: "400px" }}
        />
      </center>
    </Section>
  );
};

export default VideoSection;
