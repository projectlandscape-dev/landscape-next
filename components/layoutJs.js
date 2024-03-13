import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
const ContactBanner = dynamic(()=>import("./contactBanner"));
const Footer = dynamic(()=>import("./Footer/Footer"));
const GoogleBadge = dynamic(()=>import("./googleBadge"));
// const Header = dynamic(()=>import("./Header/Header"));
import Header from "./Header/Header";

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
