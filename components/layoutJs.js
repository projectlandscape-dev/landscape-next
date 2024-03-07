import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import ContactBanner from "./contactBanner";
// import Footer from "./Footer/Footer"
const Footer = dynamic(()=>import("./Footer/Footer"))

// import GoogleBadge from "./googleBadge";
const GoogleBadge = dynamic(()=>import("./googleBadge"))

// import Header from "./Header/Header"
const Header = dynamic(()=>import("./Header/Header"))
const Wrapper = styled.div`
  position: relative;
`;

export default function LayoutJs({ children }) {
  return (
    <Wrapper>
      <Header />
      <main>
        {children}
      </main>
      <GoogleBadge />
      <ContactBanner />
      <Footer />
    </Wrapper>
  );
}
