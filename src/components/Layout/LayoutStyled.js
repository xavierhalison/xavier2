import styled, { createGlobalStyle } from "styled-components";
import { Container, MainTitle, SecondaryTitle} from "../DefaultComponents";

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
  background-color: #20363d;
  display: flex;
  justify-content: center;
  padding: 10px 0 30px;

  ${Container} {
    background-color: ${(props) =>
      props.theme === "light"
        ? LIGHT_COLOR_PALETE.TERCIARY
        : DARK_COLOR_PALETE.TERCIARY};
  }

  ${MainTitle} {
    color: ${(props) =>
      props.theme === "light"
        ? LIGHT_COLOR_PALETE.PRIMARY
        : DARK_COLOR_PALETE.PRIMARY};
  }

  ${SecondaryTitle} {
    color: ${(props) =>
      props.theme === "light"
        ? LIGHT_COLOR_PALETE.SECONDARY
        : DARK_COLOR_PALETE.SECONDARY};
  }
`;

LayoutWrapper.defaultProps = { theme: "light" };
