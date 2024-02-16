import { AppProps } from "next/app"
import "../styles/index.scss"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
