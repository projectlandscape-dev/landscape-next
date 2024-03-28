import React from "react";
import { Container } from "../../layoutComponents";
import styled from "styled-components";

const StyledTitle = styled.div`
  border: 2px solid #093057;
  background-color: #093057;
  color : #fff;
  padding: 10px; 
  // display: inline-block; 
`;
const TextLeftWhite = ({ title, body }) => {
  return (
    <Container>
      <center>
        <StyledTitle>
          <h1 className="title">{title}</h1>
        </StyledTitle>{" "}
      </center>
      {body ? (
        <div
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
        />
      ) : null}
    </Container>
  );
};

export default TextLeftWhite;
