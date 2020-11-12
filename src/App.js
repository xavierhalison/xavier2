import React from "react";
import Layout from "./components/Layout/Layout";
import {
  MainTitle,
  SecondaryTitle,
  AboutText,
  MainButton,
} from "./components/DefaultComponents";
import axios from "axios";

import firebase from "firebase";

const testeFirebase = async () => {
  const data = { login: "halison xavier" };

  await axios
    .post(
      "https://us-central1-xavier-ddf46.cloudfunctions.net/auth/token",
      data
    )
    .then((res) => {
      const firebaseConfig = {
        apiKey: "AIzaSyBQbVoXH7QZeJlRIbOmd0GG8iMWj7ybzkM",
        authDomain: "xavier-ddf46.firebaseapp.com",
        databaseURL: "https://xavier-ddf46.firebaseio.com",
        projectId: "xavier-ddf46",
        storageBucket: "xavier-ddf46.appspot.com",
        messagingSenderId: "489018257494",
        appId: "1:489018257494:web:cc579900b528fbadd54bf7",
      };

      const { token } = res.data;

      firebase.initializeApp(firebaseConfig);

      const db = firebase.firestore();

      firebase
        .auth()
        .signInWithCustomToken(token)
        .then(function (user_login) {
          db.collection("distros")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                console.log(doc.data());
              });
            });
        });
    });
};

function App() {
  testeFirebase();

  return (
    <Layout>
      <div>
        {/* <MainTitle>Olá! Meu nome é Halison</MainTitle> */}
        <MainTitle>Halison Davidson</MainTitle>
        <SecondaryTitle>Finge que isso é uma Sales Page,</SecondaryTitle>
        <AboutText>
          Fiz pra ter visibilidade do fluxo completo do checkout.
        </AboutText>
        <MainButton
          onClick={() => {
            window.location.href =
              "http://halison.dev.sambaplay.tv:3000/checkout";
          }}
        >
          Assine Agora
        </MainButton>
      </div>
    </Layout>
  );
}

export default App;
