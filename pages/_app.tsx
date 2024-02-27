import { AppProps } from "next/app"
import "../styles/index.scss"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Alfa_Slab_One, Open_Sans, Gentium_Book_Plus} from "next/font/google"


// @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gentium+Book+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");

// const alfaSlabOne = Alfa_Slab_One({
//   weight: '400',
//   display: 'swap',
// });

// const gentiumBookBasic = Gentium_Book_Plus({
//   weight: '400',
//   style: 'italic',
//   display: 'swap',
// });

// const openSans = Open_Sans({
//   weight: '400',
//   display: 'swap',
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      {/* <main  className={`${alfaSlabOne.className} ${gentiumBookBasic.className} ${openSans.className}`}> */}
      <Component {...pageProps} />

      {/* </main> */}
    </>
  )
}

export default MyApp
