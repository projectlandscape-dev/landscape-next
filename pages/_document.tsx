import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link
          rel="preload"
          as="image"
          href="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/07/image-3.png"
        />
        <link
          rel="preload"
          as="image"
          href="https://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/hero.webp"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      
        <Script src="/pages/index.js" strategy="worker"/>
      </body>
    </Html>
  );
}
