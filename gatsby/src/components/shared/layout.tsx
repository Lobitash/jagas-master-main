import React, { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";

import Header from "./header";
import Footer from "./footer";
import GetInTouchCta from "./getInTouchCta";
interface Props {
  children: ReactNode;
  isProductPage?: boolean;
  noCta?: boolean;
}

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0px;
    font-family: "regular";
    overflow-x: hidden;
  }
`;

function Layout(props: Props) {
  const { children, isProductPage, noCta } = props;

  return (
    <>
      <GlobalStyle />
      <Header isProductPage={isProductPage} />
      {children}
      {!noCta && <GetInTouchCta />}
      <Footer />
    </>
  );
}

export default Layout;
