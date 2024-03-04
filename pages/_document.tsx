import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>  
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gentium+Book+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap"/> */}
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"/> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <Script defer src="https://embedsocial.com/js/iframeContent.min.js" strategy="lazyOnload"/> */}
      </body>
    </Html>
  );
}
