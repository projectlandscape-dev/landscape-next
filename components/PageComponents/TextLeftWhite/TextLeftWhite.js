import React from "react";
import { Container } from "../../layoutComponents";

const TextLeftWhite = ({ title, body }) => {
  return (
      <Container>
        <center>

        <h1 className="title">{title}</h1>
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
