import { AppProps } from "next/app";
import "../styles/index.scss";
import Seo from "../components/seo";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <ChakraProvider>
      <Seo />
      <Component {...pageProps} />
     </ChakraProvider>
    </>
  );
}

export default MyApp;
