import React from "react";
import LayoutJs from "../components/layoutJs";
import {
  Container,
  Section,
  HeroBannerPadding,
} from "../components/layoutComponents";
import { getPaginatedPosts } from "lib/posts";
import Link from "next/link";
import styled from "styled-components";
import { ButtonPrimary } from "/components/buttons";
import Image from "components/Image";
import { postPathBySlugCategory, sanitizeExcerpt } from "lib/posts";
import useSite from "hooks/use-site";
import { WebsiteJsonLd } from "lib/json-ld";
import Seo from "../components/seo";
import Pagination from "components/Pagination";

const device = {
  md: "48em",
};

const Article = styled.article`
  max-width: 1000px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: var(--shadow-light);
  border-raidus: var(--br);
  display: flex;
  align-items: center;
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }

  figure {
    div {
      img {
        object-fit: cover;
        height: 300px;
      }
    }
  }
`;

const Ol = styled.ol`
  list-style-type: none;
`;

const Text = styled.div`
  padding: 2em;

  h2 {
    color: var(--clr-accent);
  }
  @media screen and (max-width: 400px) {
    h2 {
      font-size: var(--fs-3);
    }
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Banner
const BannerGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`;

const BannerWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: url("http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/blog-banner.png"),
    rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 80vh;
  height: 100%;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`;

const BannerText = styled.div`
  max-width: 140ch;
  width: 100%;
  color: var(--txt-light);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const Excerpt = styled.div`
  font-size: var(--fs-sm);
`;

const BannerBottomText = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;

  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  width: 80%;
`;

export default function Blog({ posts, pagination }) {
  console.log({ posts });
  return (
    <LayoutJs>
      <Seo
        title="Landscaping Blog - Insights From Calgary's Landscaping Company"
        description="With more than two decades of experience, you can trust Project Landscape to provide you with the best landscaping advice."
      />
      <HeroBannerPadding />
      <BannerGrid>
        <BannerWrapper>
          <Container className="spacing">
            <BannerText className="spacing">
              <div className="">
                <h1 className="title">
                  landscape installation and design advice
                </h1>
              </div>
              <ButtonPrimary href="/contact">get free estimate</ButtonPrimary>
            </BannerText>
          </Container>
        </BannerWrapper>
        <BannerBottomText>
          <Container>
            <p>
              Looking to elevate your landscape project? Get inspired with our
              extensive collection of articles! Whether you're envisioning a
              stunning deck or a charming paving stone patio, we've got you
              covered. Explore our tips and creative ideas to transform your
              outdoor space into a breathtaking oasis. From design concepts to
              material recommendations, our articles provide the guidance you
              need to take your landscape project to the next level. Let your
              imagination run wild and create a captivating outdoor haven!
            </p>
          </Container>
        </BannerBottomText>
      </BannerGrid>
      <Section>
        <Container>
          <Ol>
            {posts.map((post) => {
              const categorySlug =
                post.categories.length > 0 ? post.categories[0]?.slug : "";
              return (
                <li key={post.slug}>
                  <Article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    {post.featuredImage ? (
                      <Image
                        alt={post.featuredImage.altText || ""}
                        srcSet={post.featuredImage.srcSet}
                        src={post.featuredImage.src}
                      />
                    ) : null}

                    <Text>
                      <header>
                        <h2 className="subheader upper">
                          <Link
                            className="spacing accent"
                            href={postPathBySlugCategory(
                              post.slug,
                              categorySlug
                            )}
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <Excerpt
                          dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                      </header>
                    </Text>
                  </Article>
                </li>
              );
            })}
          </Ol>
          {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </Container>
      </Section>
    </LayoutJs>
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: "all",
  });
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: "/posts",
      },
    },
  };
}
