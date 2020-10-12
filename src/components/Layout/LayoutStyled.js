// STYLED
import styled, { createGlobalStyle } from "styled-components";

//COMPONENTS
import { Container } from "../Container";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { MainTitle, SecondaryTitle, AboutText } from "../DefaultComponents";

//THEMING OBJECT
import { theming } from "../../constants";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: monospace
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

export const LayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0 50px;

  background-color: ${(props) => theming.mainBgColor[props.theme]};

  ${MainTitle} {
    color: ${(props) => theming.title1Color[props.theme]};
  }

  ${Container} {
    background-color: ${(props) => theming.containerBgColor[props.theme]};
    box-shadow: 4px 4px 1px ${(props) => theming.containerShadow[props.theme]};
  }

  ${SecondaryTitle} {
    color: ${(props) => theming.title2Color[props.theme]};
  }

  ${AboutText} {
    color: ${(props) => theming.commomText[props.theme]};
  }

  ${ThemeSwitcher} {
    color: ${(props) => theming.themeSwitcherColor[props.theme]};
  }
`;

LayoutWrapper.defaultProps = { theme: "light" };
