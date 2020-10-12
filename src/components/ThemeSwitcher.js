import styled from "styled-components";

export const ThemeSwitcher = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items:center;
  height: 50px;

  .option {
    cursor: pointer;
    &:hover {
      transform: scale(1.1)
    }
  }
`;
