import styled, { createGlobalStyle } from "styled-components";
import {
  Container,
  MainTitle,
  SecondaryTitle,
  AboutText,
} from "../DefaultComponents";

import { LIGHT_COLOR_PALETE, DARK_COLOR_PALETE } from "../../constants";

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
  
  background-color: ${(props) =>
    props.theme === "light"
      ? LIGHT_COLOR_PALETE.COLOR1
      : DARK_COLOR_PALETE.COLOR1};

  ${Container} {
    background-color: ${(props) =>
      props.theme === "light"
        ? LIGHT_COLOR_PALETE.COLOR2
        : DARK_COLOR_PALETE.COLOR2};

    .theme-switcher__option {
      color: ${(props) =>
        props.theme === "light"
          ? LIGHT_COLOR_PALETE.COLOR4
          : DARK_COLOR_PALETE.COLOR4};
    }
  }

  ${MainTitle} {
    color: ${(props) =>
      props.theme === "light"
        ? LIGHT_COLOR_PALETE.COLOR3
        : DARK_COLOR_PALETE.COLOR3};
  }

  ${SecondaryTitle} {
    color: ${(props) =>
      props.theme === "light"
        ? LIGHT_COLOR_PALETE.COLOR4
        : DARK_COLOR_PALETE.COLOR4};
  }

  ${AboutText} {
    color: ${(props) =>
      props.theme === "light"
        ? LIGHT_COLOR_PALETE.COLOR4
        : DARK_COLOR_PALETE.COLOR4};
  }
`;

LayoutWrapper.defaultProps = { theme: "light" };
