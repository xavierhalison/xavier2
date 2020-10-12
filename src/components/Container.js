import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 767px) {
    width: 90vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 70vw;
  }
  @media screen and (min-width: 1025px) {
    width: 50vw;
  }
  width: 50vw;
  height: auto;
  padding: 5px 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
