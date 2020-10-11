import React from "react";
import { GlobalStyle, LayoutWrapper } from "./LayoutStyled";
import { Container } from "../DefaultComponents";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <LayoutWrapper theme="light">
        <Container>{children}</Container>
      </LayoutWrapper>
    </>
  );
}

export default Layout;