import React from "react";
import styled from "styled-components";
import { Section, Container, GridThree } from "components/layoutComponents";
import { ButtonPrimary } from "components/buttons";
import Image from "components/Image";
import getPostBySlug from "../../../data/posts";
import Link from "next/link";
import { postPathBySlugCategory } from "lib/posts";

const Wrapper = styled.div`
  padding: 4em 0;
  background: var(--clr-dark);
  @media screen and (max-width: 450px) {
    padding: 4em 0;
  }
`;

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

// const StyledImg = styled(GatsbyImage)`
//   height: 250px;
//   width: 250px;
//   border: 2px solid var(--clr-accent);
//   border-radius: 1000px;
// `

const Item = styled.div`
  text-align: center;
  figure {
    img {
      height: 250px;
      width: 250px;
      object-fit: cover;
      border: 2px solid var(--clr-accent);
      border-radius: 1000px;
    }
  }

  p {
    color: var(--txt-light);
  }
`;

const Inner = styled.div`
  padding: 1em;
`;

const Img = styled.div`
  .imgs {
    border: 2px solid var(--clr-accent);
    border-radius: 1000px;
  }
`;

export default function RelatedPost({ selectPost }) {
  console.log(selectPost, "selectPost");
  let width = "100%";
  let height = "100%";

  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <div className="">
            <div>
              <h1 className="title">Related Post</h1>
            </div>
          </div>
        </Text>
        <GridThree>
          {selectPost?.map((post, index) => {
            const categorySlug = post?.categories?.nodes[0]?.slug;
            // const realpost = getPostBySlug(post.slug);
            console.log(post, "realpost");
            return (
              <div>
                <img
                  width={width}
                  height={height}
                  alt={post.featuredImage?.node?.altText}
                  src={post.featuredImage?.node?.sourceUrl}
                />{" "}
                <h5 style={{ padding: "20px 0px" }}>
                  <Link href={postPathBySlugCategory(post.slug, categorySlug)}>
                    {post.title}
                  </Link>
                </h5>
              </div>
            );
          })}
        </GridThree>
      </Container>
    </Section>
  );
}
