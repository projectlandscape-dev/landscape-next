import { AppProps } from "next/app";
import "../styles/index.scss";
import Seo from "../components/seo";
import { ChakraProvider } from '@chakra-ui/react';
import {Alfa_Slab_One , Open_Sans, } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";

const alfaSlabOne = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable : '--font-alfa-slab-one',
})
const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable : '--font-open-sans',
})


function MyApp({ Component, pageProps }: AppProps) {
  
  const router = useRouter();
  const p = router.asPath.split("?")[0];
  const canonicalURL = `https://www.projectlandscape.ca${p}`.replace(/\/$/, '');
  return (
    <main  className={`${alfaSlabOne.variable} ${openSans.variable}`}>
     <ChakraProvider>
      <Seo />
      <Head>
      <link rel="canonical" href={canonicalURL} />
      </Head>
      <Component {...pageProps} />
     </ChakraProvider>
     </main>
  );
}

export default MyApp;
