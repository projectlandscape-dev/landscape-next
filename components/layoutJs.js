import React from "react";
import styled from "styled-components";
import FinanceBanner from "./financeBanner";
import ContactBanner from "./contactBanner";
import Footer from "./Footer/Footer";
import GoogleBadge from "./googleBadge";
import Header from "./Header/Header";
import RecentPosts from "./recentPosts";

const Wrapper = styled.div`
  position: relative;
`;

export default function LayoutJs({ children }) {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <GoogleBadge />
      <FinanceBanner />
      <ContactBanner />
      <Footer />
    </Wrapper>
  );
}
