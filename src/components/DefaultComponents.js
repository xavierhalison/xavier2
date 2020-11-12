import styled from "styled-components";

export const MainTitle = styled.h1`
  margin: 20px 0;
`;

export const SecondaryTitle = styled.h2`
  margin: 10px 0 0;
`;

export const AboutText = styled.p`
  margin: 15px 0;
  text-align: justify;
`;

export const MainButton = styled.button`
  padding: 10px 20px;
  margin: 30px 0 0 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  font-weight: bolder;
  border: 1px solid gray;
  cursor: pointer;
  outline: none;
  &:hover {
    transform: scale(1.05)
  }
`;