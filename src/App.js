import React from "react";
import Layout from "./components/Layout/Layout";
import {
  MainTitle,
  SecondaryTitle,
  AboutText,
} from "./components/DefaultComponents";

function App() {
  return (
    <Layout>
      <div>
        <MainTitle>Olá! Meu nome é Halison</MainTitle>
        <SecondaryTitle>Sou Desenvolvedor Front-end,</SecondaryTitle>
        <AboutText>
          entusiasta de software Open Source e do eco-sistema javascript e
          músico nas horas vagas.
        </AboutText>
      </div>
    </Layout>
  );
}

export default App;
