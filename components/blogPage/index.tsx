import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Head from "next/head"
import { GetStaticPaths, GetStaticProps } from "next"
import PostBody from "../post-body"
import MoreStories from "../more-stories"
import PostHeader from "../post-header"
import SectionSeparator from "../section-separator"
import LayoutJs from "../layoutJs"
import Tags from "../tags"
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api"
import { CMS_NAME } from "../../lib/constants"
import { Section, Container, HeroBannerPadding } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"
import styled from "styled-components"
import Link from "next/link"
import ServiceForm from "../Forms/ServiceForm"
import Seo from "../seo"

const BlogArticle = styled.article`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    line-height: 1.1;
    text-transform: uppercase;
    color: var(--clr-accent);
  }
`

// Banner
const BannerGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const BannerWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: ${(props) => `url(${props.img})`}, rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 70vh;
  height: 100%;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const BannerText = styled.div`
  max-width: 140ch;
  width: 100%;
  color: var(--txt-light);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const BannerBottomText = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;

  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  width: 80%;
`

// Layout
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Aside = styled.div`
  grid-column: 1 / span 1;

  .service-form {
    @media screen and (max-width: 48em) {
      display: none;
    }
  }
`

const Navigation = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;

  ul {
    list-style-type: none;
    margin: var(--spacer) 0 0 0;
    padding: 0;
    text-transform: capitalize;

    & > * + * {
      margin-top: 0.2em;
    }
  }
`

const Content = styled.div`
  grid-column: 2 / -1;
  @media screen and (max-width: 48em) {
    grid-row: 1 / span 1;
  }
`

const Img = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`

const ServiceAreas = styled.div`
  padding: 2em;
  border: 1px solid var(--txt-dark-secondary);
  border-radius: var(--br);
`

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: var(--clr-accent);
`

export default function PostPage({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <LayoutJs>
      <Seo title={post.title} description={post.excerpt} />
      <HeroBannerPadding />
      {post.featuredImage ? (
        <BannerGrid>
          <BannerWrapper img={post.featuredImage?.node.sourceUrl}>
            <Container className="spacing">
              <BannerText className="spacing">
                <div className="">
                  <h1 className="title">{post.title}</h1>
                </div>
                <ButtonPrimary href="/contact">get free estimate</ButtonPrimary>
              </BannerText>
            </Container>
          </BannerWrapper>
        </BannerGrid>
      ) : null}

      <Section>
        <Container className="spacing">
          {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
          <Wrapper>
            <Aside className="spacing">
              <Navigation className="spacing">
                <h3 className="caps accent title bold">
                  Landscaping <br /> Services
                </h3>
                <div>
                  <ul>
                    <li>
                      <Link
                        className="subheader"
                        href="/residential-services/hardscaping"
                      >
                        hardscaping
                      </Link>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/landscape-construction/patio-surfaces">
                        paving stones
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/landscape-construction/retaining-walls">
                        retaining walls
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/outdoor-living/garden-walls">
                        garden walls
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/hardscaping/garden-bed-edging">
                        garden bed edging
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/concrete-curbing">
                        concrete curbing
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/staircases-stepping-stones">
                        stairs and stepping stones
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/landscape-construction/seating">
                        seat walls and pillars
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/concrete-installations">
                        concrete installation
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/hardscaping/water-management">
                        water management
                      </StyledLink>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <Link
                        className="subheader"
                        href="/residential-services/softscaping"
                      >
                        softscaping
                      </Link>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/landscape-construction/artificial-turf">
                        artificial turf
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/irrigation-landscape-lighting">
                        irrigation installation
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/landscape-construction/sod-installation">
                        sod installation
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/landscape-construction/tree-shrub-planting">
                        shrub and tree planting
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/landscape-construction/mulches-decorative-rock">
                        mulch and decorative rock
                      </StyledLink>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <Link
                        className="subheader"
                        href="/residential-services/outdoor-living"
                      >
                        outdoor living
                      </Link>
                    </li>
                    <li>
                      <StyledLink href="/decks-calgary">decks</StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/gazebos-pergolas">pergolas</StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/landscape-lighting-services-calgary">
                        landscape lighting
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/landscape-design">
                        landscape design
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/water-features">
                        water features
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/landscape-construction/fire-pits-fire-places">
                        fire pits and fire places
                      </StyledLink>
                    </li>

                    <li>
                      <StyledLink href="/fence-contractor-in-calgary">
                        fences
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/privacy-screens">
                        privacy screens
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/railings">deck railings</StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/landscape-construction/outdoor-kitchens">
                        outdoor kitchens
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink href="/residential-services/outdoor-living/outdoor-furniture">
                        outdoor furniture
                      </StyledLink>
                    </li>
                  </ul>
                </div>
              </Navigation>
              <div className="service-form">
                <ServiceForm />
              </div>
            </Aside>
            <Content className="spacing">
              <div>
                <p className="caps bold">from the landscaping experts</p>
                {post.title ? (
                  <h1 className="title accent bold italics">{post.title}</h1>
                ) : null}
              </div>
              <BlogArticle className="blog-post">
                {!!post.content && (
                  <section
                    itemProp="articleBody"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                )}
              </BlogArticle>
            </Content>
          </Wrapper>
          {/* <>
            <article>
              <Head>
                <title>
                  {`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </> */}
        </Container>
      </Section>
    </LayoutJs>
  )
}
