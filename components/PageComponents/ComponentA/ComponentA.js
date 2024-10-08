import React from "react";
import styled from "styled-components";
import { Container, Section } from "components/layoutComponents";
// import Image from "../../Image";
import Image from "next/image";
import Link from "next/link";

const device = {
  md: "48em",
};

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 140px auto 2em;
  grid-template-rows: 2em auto 2em;
`;

const List = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 967px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }

  grid-gap: 2em;

  ul {
    padding: 2em;
  }

  p {
    ul {
      padding-left: 2em;
    }
  }
`;

const Bg = styled.div`
  grid-row: 2 / -1;
  grid-column: 2 / -1;
  z-index: 1;
  background: var(--clr-accent);
`;

const Item = styled.div`
  background: var(--clr-dark);
  color: var(--txt-light);
  text-decoration: none;

  figure {
    img {
      height: 400px;
      width: 100%;
      object-fit: cover;
    }
  }
`;

const Inner = styled.div`
  padding: 1em;
  p {
    color: var(--txt-light);
  }
  ul {
    margin-top: 4px;
    margin-bottom: 4px;
    padding-top: 0;
    padding-bottom: 0;
  }

  div {
    p {
      a {
        color: var(--txt-light);
      }
    }
  }
`;

// const StyledImg = styled(GatsbyImage)`
//   width: 100%;
//   height: 400px;
//   object-fit: cover;
// `

const Button = styled.div`
  & > * {
    cursor: pointer;
    display: inline-block;
    font-family: var(--font-alfa-slab-one);
    font-size: var(--fs-sm);
    font-weight: var(--fw-button);
    text-decoration: underline;
    color: var(--txt-light);
    font-style: italic;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;

export default function ComponentA({ subheader, title, body, componentItems }) {
  let width = "100%";
  let height = "400px";
  return (
    <Section>
      <div className="spacing">
        <Container>
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
              {body ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${body}`,
                  }}
                />
              ) : null}
            </div>
          </Text>
        </Container>
        <Grid>
          <List>
            {componentItems.map((item, index) => {
              return (
                <Item key={index}>
                  <Image
                  className="w-full h-96"
                    alt={item.image.altText || ""}
                    srcSet={item.image.srcSet}
                    src={item.image.srcSet}
                    width={500}
                    height={300}
                  />

                  <Inner>
                    <h3 className="subheader tan">{item.title}</h3>
                    {item.text && item.button ? (
                      <Link href={item.button || "#"}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${item.text}`,
                          }}
                        />
                      </Link>
                    ) : item.text ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${item.text}`,
                        }}
                      />
                    ) : null}

                    {/* {item.button ? (
                      <Button
                        dangerouslySetInnerHTML={{
                          __html: `${item.button}`,
                        }}
                      />
                    ) : null} */}
                  </Inner>
                </Item>
              );
            })}
          </List>
          <Bg />
        </Grid>
      </div>
    </Section>
  );
}

// const ComponentA = ({ subheader, title, body, componentItems }) => {
//   return (
//     <div>
//       <p>{subheader}</p>
//       <h2>{title}</h2>
//       {body ? <div dangerouslySetInnerHTML={{ __html: body }} /> : null}
//       {componentItems.length &&
//         componentItems.map((item) => {
//           return (
//             // eslint-disable-next-line react/jsx-key
//             <div>
//               <h3>{item.title}</h3>
//               <p>{item.text}</p>
//               {item.button ? <div dangerouslySetInnerHTML={{ __html: item.button }} /> : null}
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default ComponentA;
