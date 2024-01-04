import React from "react";
import styled from "styled-components";
import { Section, Container, GridThree } from "components/layoutComponents";
import { ButtonPrimary } from "components/buttons";
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
const Image = styled.img`
  height: 280px;
  width: 100%;
  object-fit: cover;
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

export default function RelatedPost({ selectPost }) {
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <div className="">
            <div>
              <h1 className="title">Related Posts</h1>
            </div>
          </div>
        </Text>
        <GridThree>
          {selectPost?.map((post, index) => {
            const categorySlug = post?.categories?.nodes[0]?.slug;
            return (
              <div key={index}>
                <Image
                  alt={post.featuredImage?.node?.altText}
                  src={post.featuredImage?.node?.sourceUrl}
                />{" "}
                <h4 style={{ padding: "20px 0px" }}>
                  <Link
                    style={{ color: "#3b5c8d" }}
                    href={postPathBySlugCategory(post.slug, categorySlug)}
                  >
                    {post.title}
                  </Link>
                </h4>
              </div>
            );
          })}
        </GridThree>
      </Container>
    </Section>
  );
}
