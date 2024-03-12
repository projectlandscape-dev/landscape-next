import { gql } from "@apollo/client";

// Define here all ACF fields for `page_components` to match 1-to-1
export const PAGE_COMPONENTS_ACF_FIELDS = gql`
  fragment PageComponents on Page {
    pageComponents {
      pageComponents {
        ... on Page_Pagecomponents_PageComponents_Badges {
          __typename
          title
        }
        ... on Page_Pagecomponents_PageComponents_Banner {
          __typename
          title
          titleCopy
          description
          subheader
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_HeroSlider {
          __typename
          title
        }
        ... on Page_Pagecomponents_PageComponents_Chartarea {
          title
          image {
            altText
            sourceUrl
          }
          steps {
            stepcount
            title
            body
            videolink
          }
          sliderdata {
            description
          }
        }
        ... on Page_Pagecomponents_PageComponents_Text {
          __typename
          text
        }
        ... on Page_Pagecomponents_PageComponents_ThinBanner {
          title
        }
        ... on Page_Pagecomponents_PageComponents_OurService {
          fieldGroupName
          title
          services {
            image {
              altText
              sourceUrl
            }
            link
            title
          }
        }
        ... on Page_Pagecomponents_PageComponents_FinanceTab {
          body
          fieldGroupName
          innerheading
          subheader
          title
        }

        ... on Page_Pagecomponents_PageComponents_CompanyValue {
          fieldGroupName
          negativeheading
          negativebodycontent {
            body
          }
          positiveheading
          positivebodycontent {
            bodycontent
          }
        }
        ... on Page_Pagecomponents_PageComponents_VideoSection {
          fieldGroupName
          videolink
        }
        ... on Page_Pagecomponents_PageComponents_ImageSlider {
          __typename
          subheader
          title
          body
        }
        ... on Page_Pagecomponents_PageComponents_ImageRight {
          __typename
          body
          fieldGroupName
          subheader
          title
          button
          showarrow
          contentcenter
          showshadow
          link
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
          imageCopy {
            altText
            sourceUrl
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_CompanyWork {
          fieldGroupName
          subheader
          title
          workitem {
            body
            icon {
              altText
              sourceUrl
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageLeft {
          __typename
          fieldGroupName
          body
          subheader
          showarrow
          contentcenter
          showshadow
          title
          button
          link
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
          imagecopy {
            altText
            sourceUrl
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageLeftRead {
          __typename
          fieldGroupName
          body
          bodycopy
          subheader
          title
          button
          link
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageLeftDark {
          __typename
          body
          subheader
          title
          button
          showarrow
          link
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
          imageCopy {
            altText
            sourceUrl
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageLeftDarkWithTwoImages {
          body
          button
          image {
            altText
            sourceUrl
          }
          image2 {
            altText
            sourceUrl
          }
          link
          subheader
          title
        }
        ... on Page_Pagecomponents_PageComponents_ImageRightDark {
          __typename
          body
          subheader
          title
          button
          link
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
          imagecopy {
            altText
            sourceUrl
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_PortfolioBanner {
          title
        }
        ... on Page_Pagecomponents_PageComponents_DynamicSlider {
          body
          sliderdata {
            bgimage {
              altText
              sourceUrl
            }
            titlecopy
            button
            link
            subheader
            title
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageRightBlack {
          __typename
          body
          subheader
          title
          button
          link
          showarrow
          showshadow
          contentcenter
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageLeftBlack {
          __typename
          body
          subheader
          title
          button
          link
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageGallery {
          __typename
          body
          subheader
          title
          imageGallery {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_Benefits1 {
          __typename
          title
          subheader
          benefitContent {
            title
            textlink
            description
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_Carousel {
          __typename
          title
          subheader
          secondHeading
          carouselContent {
            title
            description
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ComponentA {
          __typename
          subheader
          title
          body
          componentItems {
            title
            text
            button
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ComponentB {
          __typename
          body
          subheader
          title
          componentItems {
            title
            text
            button
            link
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ProjectHub {
          button
          body
          bgimage {
            altText
            sourceUrl
          }
          link
          title
        }
        ... on Page_Pagecomponents_PageComponents_Innovation {
          body
          button
          link
          title
        }
        ... on Page_Pagecomponents_PageComponents_WhiteBanner {
          title
        }
        ... on Page_Pagecomponents_PageComponents_BannerDescriptionBox {
          body
          bgimage {
            sourceUrl
          }
          title
          itemwrapper {
            body
            title
            link
            image {
              altText
              sourceUrl
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ExceptTheBest {
          body
          title
        }
        ... on Page_Pagecomponents_PageComponents_ComponentC {
          __typename
          body
          subheader
          title
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_ComponentD {
          __typename
          subheader
          title
          content {
            text
          }
        }
        ... on Page_Pagecomponents_PageComponents_ComponentE {
          __typename
          subheader
          title
          content {
            title
            description
            link
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ComponentF {
          __typename
          subheader
          title
          content {
            title
            subheader
            description
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }

        ... on Page_Pagecomponents_PageComponents_Cta1 {
          __typename
          body
          title
          subheader
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_Cta2 {
          __typename
          body
          title
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_Ebook {
          __typename
          title
          image {
            altText
            sourceUrl(size: MEDIUM_LARGE)
            srcSet
          }
        }
        ... on Page_Pagecomponents_PageComponents_Faq {
          __typename
          title
          body
          questions {
            question
            answer
          }
        }
        ... on Page_Pagecomponents_PageComponents_FaqTab {
          __typename
          title
          tabsContent {
            tabLabel
            questions {
              question
              answer
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ProcessA {
          __typename
          description
          title
          processContent {
            number
            processDescription
          }
        }
        ... on Page_Pagecomponents_PageComponents_ProcessB {
          __typename
          title
          subheader
          body
          processContent {
            number
            title
            body
          }
        }
        ... on Page_Pagecomponents_PageComponents_RelatedServices {
          __typename
          serviceContent {
            title
            link
            bodylink
            image {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ServiceArea {
          __typename
          title
          content1
          content2
        }
        ... on Page_Pagecomponents_PageComponents_SeoPage {
          __typename
          title
          description
        }
        ... on Page_Pagecomponents_PageComponents_TabsSide {
          __typename
          title
          tabsContent {
            tabTitle
            tabList
            tabLabel
            tabBody
            tabImage {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_TabsTop {
          __typename
          title
          tabsContent {
            tabTitle
            tabList
            tabLabel
            tabBody
            tabImage {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_RelatedPost {
          selectPost {
            ... on Post {
              id
              uri
              slug
              title
              featuredImage {
                node {
                  sourceUrl
                  srcSet
                  altText
                }
              }
              categories {
                nodes {
                  slug
                }
              }
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageThreeColumns {
          fieldGroupName
          title
          images {
            image {
              mediaItemUrl
            }
            image2 {
              mediaItemUrl
            }
            image3 {
              mediaItemUrl
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_Testimonial {
          title
          testimonials {
            testimonialBody
            testimonialTitle
            testimonialName
          }
        }
        ... on Page_Pagecomponents_PageComponents_Text {
          text
        }
        ... on Page_Pagecomponents_PageComponents_TabProcess {
          fieldGroupName
          title
          color
          tabName {
            body
            title
            tabTitle
            image {
              altText
              sourceUrl
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_TabProcess2 {
          fieldGroupName
          title
          tabName {
            body
            title
            tabTitle
            image {
              altText
              sourceUrl
              srcSet
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ProcessArea {
          addProcess {
            description
            fieldGroupName
            itemNumber
            title
          }
          title
        }
        ... on Page_Pagecomponents_PageComponents_ImageBlur {
          title
          imagesection {
            body
            title
            image {
              altText
              sourceUrl
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageLeftDarkRead {
          body
          bodycopy
          button
          link
          subheader
          title
          image {
            altText
            sourceUrl
          }
        }
        ... on Page_Pagecomponents_PageComponents_Cta4 {
          description
          title
        }
        ... on Page_Pagecomponents_PageComponents_ImageLeftBlackRead {
          body
          bodycopy
          button
          link
          subheader
          title
          image {
            altText
            sourceUrl
          }
        }
        ... on Page_Pagecomponents_PageComponents_Column3 {
          content {
            title
            subheader
            image {
              altText
              sourceUrl
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageRightBlackRead {
          bodycopy
          body
          link
          subheader
          title
          image {
            altText
            sourceUrl
          }
          button
        }
        ... on Page_Pagecomponents_PageComponents_ImageLeftDarkWithOne {
          body
          bodycopy
          button
          link
          subheader
          title
          image {
            altText
            sourceUrl
          }
        }
        ... on Page_Pagecomponents_PageComponents_OnlyImageGallery {
          content {
            image {
              altText
              sourceUrl
            }
          }
        }
        ... on Page_Pagecomponents_PageComponents_FourRowImage {
          title
          subheader
          imagesRow {
            image {
              altText
              sourceUrl
            }
            title
            link
          }
        }
        ... on Page_Pagecomponents_PageComponents_TextLeftWhite {
          body
          title
        }
        ... on Page_Pagecomponents_PageComponents_ExceptTheBest1 {
          body
          fields {
            title
            image {
              altText
              sourceUrl
            }
            description
          }
        }
        ... on Page_Pagecomponents_PageComponents_ImageSliderZoom {
          title
          imageSection {
            image {
              altText
              sourceUrl
            }
            title
          }
        }
        ... on Page_Pagecomponents_PageComponents_TwoImageWithColor {
          title
          bigImage {
            image {
              altText
              sourceUrl
            }
          }
          colorHeading
          colorItem {
            image {
              altText
              sourceUrl
            }
            title
          }
          descriptionTitle
          description
        }
      }
    }
  }
`;

export const PAGE_FIELDS = gql`
  fragment PageFields on Page {
    children {
      edges {
        node {
          id
          slug
          uri
          ... on Page {
            id
            title
          }
        }
      }
    }
    id
    menuOrder
    parent {
      node {
        id
        slug
        uri
        ... on Page {
          title
        }
      }
    }
    slug
    title
    uri
  }
`;

export const QUERY_ALL_PAGES_INDEX = gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
        }
      }
    }
  }
`;

export const QUERY_ALL_PAGES_ARCHIVE = gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
        }
      }
    }
  }
`;

export const QUERY_ALL_PAGES = gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
          content
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
        }
      }
    }
  }
`;

export const QUERY_PAGE_BY_URI = gql`
  ${PAGE_COMPONENTS_ACF_FIELDS}
  query PageByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      children {
        edges {
          node {
            id
            slug
            uri
            ... on Page {
              id
              title
            }
          }
        }
      }
      content
      featuredImage {
        node {
          altText
          caption
          id
          sizes
          sourceUrl
          srcSet
        }
      }
      id
      menuOrder
      parent {
        node {
          id
          slug
          uri
          ... on Page {
            title
          }
        }
      }
      slug
      title
      uri
      ...PageComponents
    }
  }
`;

export const QUERY_PAGE_SEO_BY_URI = gql`
  query PageSEOByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        readingTime
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;
