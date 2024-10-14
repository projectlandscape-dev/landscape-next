import React, { memo } from "react";
import styled from "styled-components";

const device = {
  md: "48em",
};
const ReviewWrapper = styled.div`
  border: 1px solid var(--clr-accent);
  border-radius: var(--br);
  padding: 2em;
  height 300px;
  background: rgba(0, 0, 0, 0.7);
  color: var(--txt-light);
  text-align: center;
  @media screen and (max-width: ${device.md}) {
    height: 100%;
  }
  h3,
  p {
    max-width: 90ch;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ReviewBox = memo(function ReviewBox({ title, review, name }) {
  return (
    <ReviewWrapper className="spacing">
      <h3 className="subheader">{title}</h3>
      <p className="italics">"{review}"</p>
      <p className="bold caps">{name}</p>
      <div className="text-clr-tan">
        &#9733; &#9733; &#9733; &#9733; &#9733;
      </div>
    </ReviewWrapper>
  );
});

export default ReviewBox;
