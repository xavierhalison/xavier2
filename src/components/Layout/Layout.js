import React, { useState } from "react";
import { GlobalStyle, LayoutWrapper } from "./LayoutStyled";
import { Container } from "../Container";
import { ThemeSwitcher } from "../ThemeSwitcher";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness5Icon from "@material-ui/icons/Brightness5";

function Layout({ children }) {
  const [theme, toggleTheme] = useState("light");

  return (
    <>
      <GlobalStyle />
      
      <LayoutWrapper theme={theme}>
        <Container>
          
          <ThemeSwitcher>
            {theme === "light" ? (
              <Brightness2Icon
                onClick={() => toggleTheme("dark")}
                className="option"
              />
            ) : (
              <Brightness5Icon
                onClick={() => toggleTheme("light")}
                className="option"
              />
            )}
          </ThemeSwitcher>

          {children}
        </Container>
      </LayoutWrapper>
    </>
  );
}

export default Layout;
