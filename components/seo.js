import Head from "next/head";

const DOMAIN = "https://www.projectlandscape.ca";
const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/brandflow-bucket/personal/blog/portfolio-og.jpg";

export default function Seo({
  title = "Project Landscape Ltd. - Calgary Landscaping Company" || title,
  description = "Project Landscape redefines the fundamentals of landscape installation, landscape maintenance and service throughout Calgary and surrounding areas." || description,
  siteName = "Project Landscape Ltd. - Calgary Landscaping Company",
  canonical = DOMAIN,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "",
}) {

  const canonicalUrl = canonical.endsWith("/") && canonical !== DOMAIN ? canonical.slice(0, -1) : canonical;
  return (
    <Head>
      <title key="title">{`${title}`}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta name="google-site-verification" content="Tuiq6CDal4ErnV6HNluAC01fIC5ENED-fA5W2gz8mCM" />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta
        key="og_image"
        property="og:image"
        content={ogImage ?? DEFAULT_OG_IMAGE}
      />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${title} | ${siteName}`}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />

  
    </Head>
  );
}
