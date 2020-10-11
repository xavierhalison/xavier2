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
  padding: 10px 50px 50px ;
  box-shadow: 4px 4px 1px #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .theme-switcher {
    display: flex;
    justify-content: flex-end;
    padding: 30px 0;
  }

  .theme-switcher__option {
    margin-right: 8px;
    cursor: pointer;
    &:hover {
      font-weight: bolder
    }
  }
`;

export const MainTitle = styled.h1`
  margin: 20px 0;
`;

export const SecondaryTitle = styled.h2`
  margin: 10px 0 0;
`;

export const AboutText = styled.p`
  margin: 15px 0;
  text-align: justify
`;