import React from "react";
import { Container } from "../../layoutComponents";

const TextLeftWhite = ({ title, body }) => {
  return (
      <Container>
        <h1 className="title">{title}</h1>
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
