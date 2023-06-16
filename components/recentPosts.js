import React from "react";
import { Section, Container, GridThree } from "./layoutComponents";
import styled from "styled-components";
import { ButtonInline } from "./buttons";
import Image from "./Image";

const Text = styled.div`
  text-align: center;
`;

const Article = styled.article`
  div {
    padding: 2em;
    background: var(--clr-accent);
  }

  h3 {
    color: var(--txt-light);
  }

  .bold {
    color: var(--clr-tan);
  }
`;

export default function RecentPosts() {
  let width = "100%";
  let height = "400px";

  return (
    <section>
      <div className="spacing container">
        <Text>
          <h2 className="title">recent landscaping articles</h2>
        </Text>
        <GridThree>
          <Article className="">
            <Image
              alt="calgary landscaping tips"
              src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/Maximizing-Small-Outdoor-Spaces-Tips-and-Ideas-for-Urban-Landscaping-644905727634e-360x240-1.png"
              width={width}
              height={height}
            />
            <div>
              <h3 className="subheader">Maximizing Small Outdoor Spaces</h3>
              <ButtonInline
                className="bold"
                href="/landscaping-calgary/maximizing-small-outdoor-spaces-tips-and-ideas-for-urban-landscaping"
              >
                Read more &#8594;
              </ButtonInline>
            </div>
          </Article>
          <Article className="">
            <Image
              alt="calgary landscaping tips"
              src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/Maximizing-Small-Outdoor-Spaces-Tips-and-Ideas-for-Urban-Landscaping-644905727634e-360x240-1.png"
              width={width}
              height={height}
            />
            <div>
              <h3 className="subheader">Maximizing Small Outdoor Spaces</h3>
              <ButtonInline
                className="bold"
                href="/landscaping-calgary/maximizing-small-outdoor-spaces-tips-and-ideas-for-urban-landscaping"
              >
                Read more &#8594;
              </ButtonInline>
            </div>
          </Article>
          <Article className="">
            <Image
              alt="calgary landscaping tips"
              src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/Maximizing-Small-Outdoor-Spaces-Tips-and-Ideas-for-Urban-Landscaping-644905727634e-360x240-1.png"
              width={width}
              height={height}
            />
            <div>
              <h3 className="subheader">Maximizing Small Outdoor Spaces</h3>
              <ButtonInline
                className="bold"
                href="/landscaping-calgary/maximizing-small-outdoor-spaces-tips-and-ideas-for-urban-landscaping"
              >
                Read more &#8594;
              </ButtonInline>
            </div>
          </Article>
          {/* {data.allWpPost.nodes.map((post) => {
            return (
              <Article className="">
                {post.featuredImage ? (
                  <Image
                    alt={post.image.altText || ""}
                    srcSet={post.image.srcSet}
                    src={post.image.src}
                    width={width}
                    height={height}
                  />
                ) : null}
                <div>
                  <h3 className="subheader">{post.title}</h3>
                  <ButtonInline className="bold" href={post.uri}>
                    Read more &#8594;
                  </ButtonInline>
                </div>
              </Article>
            );
          })} */}
        </GridThree>
      </div>
    </section>
  );
}
