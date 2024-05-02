import PageComponents from "lib/pageComponents";
import { getPageByUri, getAllPages, getBreadcrumbsByUri } from "lib/pages";
import LayoutJs from "../../components/layoutJs";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostPage from "../../components/blogPage";

export default function Page(props) {
  const { page, post } = props;

  if (post) {
    return (
      <>
        <PostPage {...props} />
      </>
    );
  }

  const {
    title,
    metaTitle,
    description,
    slug,
    content,
    featuredImage,
    children,
    acf,
  } = page;

  const hasFlexibleFields =
    Array.isArray(acf.flexibleFields) && acf.flexibleFields.length > 0;

  return (
    <LayoutJs>
       // <Seo title={title} description={description} /> 
      <div>
        {/* Iterate over ACF flexible fields and pass props to imported component */}
        {hasFlexibleFields && (
          <div>
            {acf.flexibleFields.map((obj, index) => {
              console.log("obj",obj)
              let DynamicComponent = PageComponents.get(obj.type);
              if (DynamicComponent !== undefined && DynamicComponent !== null) {
                return <DynamicComponent key={index} {...obj} />;
              }
            })}
          </div>
        )}

        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </LayoutJs>
  );
}

export async function getStaticProps({
  params = {},
  preview = false,
  previewData,
} = {}) {
  const { slugParent, slugChild } = params;

  // We can use the URI to look up our page and subsequently its ID, so
  // we can first contruct our URI from the page params

  let pageUri = `/${slugParent}/`;

  // We only want to apply deeper paths to the URI if we actually have
  // existing children

  // if (Array.isArray(slugChild) && slugChild.length > 0) {
  //   pageUri += `${slugChild.join("/")}/`;
  // }

 
   if (Array.isArray(slugChild) && slugChild.length > 0) {
    pageUri = `${pageUri}${slugChild.join("/")}/`;
  }


  // debug test
  console.log("Constructed URI:", pageUri);



  
  const { page } = await getPageByUri(pageUri);

  if (!page) {
    // log test
        console.log("No page found at URI, checking for blog post...");
    // log test
    const allPosts = await getAllPostsWithSlug();

        console.log("Fetched all posts:", allPosts);
    // look at posts

    const isBlog = allPosts.edges.find(
      ({ node }) => node.slug === slugChild[0]
    );
    if (!isBlog) {
      //log
            console.log("No blog post found for slug:", slugChild[0]);
      
      return {
        props: {},
        notFound: true,
      };
    }

    // log
    console.log("Fetching post details for:", slugChild[0]);
    const data = await getPostAndMorePosts(
      params?.slugChild[0],
      preview,
      previewData
    );

    return {
      props: {
        preview,
        post: data.post,
        posts: data.posts,
      },
      revalidate: 60,
    };
  }

  // In order to show the proper breadcrumbs, we need to find the entire
  // tree of pages. Rather than querying every segment, the query should
  // be cached for all pages, so we can grab that and use it to create
  // our trail


    console.log("Page found, generating breadcrumbs...");

  const { pages } = await getAllPages({
    queryIncludes: "index",
  });

  const breadcrumbs = getBreadcrumbsByUri(pageUri, pages);

  return {
    props: {
      page,
      breadcrumbs,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const { pages } = await getAllPages({
    queryIncludes: "all",
  });

  // Take all the pages and create path params. The slugParent will always be
  // the top level parent page, where the slugChild will be an array of the
  // remaining segments to make up the path or URI

  // We also filter out the `/` homepage as it will conflict with index.js if
  // as they have the same path, which will fail the build
 
  const paths = pages
    .filter(({ uri }) => typeof uri === "string" && uri !== "/")
    .map(({ uri }) => {
      const segments = uri.split("/").filter((seg) => seg !== "");
      return {
        params: {
          slugParent: segments.shift(),
          slugChild: segments,
        },
      };
    });

  const allPosts = await getAllPostsWithSlug();
  const allPostsPaths = allPosts.edges.flatMap(({ node }) =>
    node.categories.edges.map(({ node: categoryNode }) => ({
      params: { slugParent: categoryNode.slug, slugChild: [node.slug] },
    }))
  );

  return {
    paths: [...paths, ...allPostsPaths],
    fallback: "blocking",
  };
}
