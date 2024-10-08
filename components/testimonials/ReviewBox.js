import React from 'react';
import styled from "styled-components";
import { IconStar } from '../../public/svg/Svg';


const ReviewWrapper = styled.div`
  border: 1px solid var(--clr-accent);
  border-radius: var(--br);
  padding: 2em;
  background: rgba(0, 0, 0, 0.7);
  color: var(--txt-light);
  text-align: center;

  h3,
  p {
    max-width: 90ch;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ReviewBox = ({ title, review, name }) => {
  return (
    <ReviewWrapper className="spacing">
    <h3 className="subheader">{title}</h3>
    <p className="italics">"{review}"</p>
    <p className="bold caps">{name}</p>
    <div className="text-clr-tan !flex items-center justify-center">
    {[...Array(5)].map((_, index) => (
      <div key={index}>
        <IconStar />
      </div>
    ))}
  </div>
  </ReviewWrapper>
  )
}

export default ReviewBox