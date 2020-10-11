import React, {useEffect, useState} from "react";
import { GlobalStyle, LayoutWrapper } from "./LayoutStyled";
import { Container } from "../DefaultComponents";

function Layout({ children }) {
  const [theme, setTheme] = useState("light")

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  useEffect(() => {
    
  }, [theme])

  return (
    <>
      <GlobalStyle />
      <LayoutWrapper theme={theme}>
        <Container>
          <div className="theme-switcher">
            <span className="theme-switcher__option" onClick={() => toggleTheme()}>
              {theme === "light" ? "dark" : "light"}
            </span>
          </div>
          {children}
        </Container>
      </LayoutWrapper>
    </>
  );
}

export default Layout;
