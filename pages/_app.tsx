import { AppProps } from "next/app";
import "../styles/index.scss";
import Seo from "../components/seo";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraProvider } from '@chakra-ui/react';
import {Alfa_Slab_One , Open_Sans, } from "next/font/google";

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
  return (
    <main  className={`${alfaSlabOne.variable} ${openSans.variable}`}>
     <ChakraProvider>
      <Seo />
      <Component {...pageProps} />
     </ChakraProvider>
     </main>
  );
}

export default MyApp;
