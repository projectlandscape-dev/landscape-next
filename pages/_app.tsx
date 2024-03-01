import { AppProps } from "next/app"
import "../styles/index.scss"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
      <Script src="https://embedsocial.com/api/pro_hashtag/3c18d46b1f22bc51b2c07e90e7ab55bb531af6ad" strategy="worker" />
    </>
  )
}

export default MyApp
