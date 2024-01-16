import React from "react";
import styled from "styled-components";
import { GridThree } from "../../layoutComponents";

const Wrapper = styled.div`
  color: white;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  z-index: 1;
  background: ${(props) => `url(${props.img})`}, rgba(0, 0, 0, 0.4);
  // background: url("../../../images/hero.jpg")), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 90vh;
  height: 100%;

  @media screen and(max-width: 36em) {
    min-height: 110vh;
    height: 100%;
  }
`;
const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background: white;
  margin-top: -120px;
  text-align: center;
  padding: 10px 15px;
`;

const ItemWrapper = styled.div`
  h4 {
    color: var(--clr-accent);
    margin-top: 7px;
  }
  img {
    width: 380px;
    height: 320px;
    object-fit: cover;
  }
`;
const BannerDescriptionBox = ({ body, bgimage, title, itemwrapper }) => {
  return (
    <div>
      <Wrapper img={bgimage.sourceUrl}>
        <h2 className="title">{title}</h2>
      </Wrapper>
      <ContentWrapper>
        <div
          style={{ padding: "30px 50px" }}
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
        />

        <GridThree>
          {itemwrapper.map((item) => {
            return (
              <ItemWrapper>
                <img src={item.image.sourceUrl} alt={item.altText} />
                {item.title && item.link ? (
                  <Link href={item.link}>
                    <h4>{item.title}</h4>
                  </Link>
                ) : (
                  <h4>{item.title}</h4>
                )}

                <div
                  dangerouslySetInnerHTML={{
                    __html: `${body}`,
                  }}
                />
              </ItemWrapper>
            );
          })}
        </GridThree>
      </ContentWrapper>
    </div>
  );
};

export default BannerDescriptionBox;
