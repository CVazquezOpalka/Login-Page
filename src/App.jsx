import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {Container, ImgBox, FormContainer, Button, Box, MediaBox, MiniBox, Parrafo} from './style/Ui'
import IMG from "./assets/Fondo.webp";
import { Dark, Light } from "./style/Theme";
import { GlobalStyle } from "./style/GlobalStyle";
import { Form } from "./components/Form/Form";
import { FcIdea, FcNoIdea } from "react-icons/fc";
import Logo from "./assets/logo.png";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/gorjeo.png";
import Instagram from "./assets/instagram.png";
import Linkedin from "./assets/linkedin.png";
import Github from "./assets/github.png";

function App() {
  const [toggle, setToggle] = useState(true);
  const changeTheme = () => {
    setToggle(!toggle);
  };
  const isTheme = toggle ? Light : Dark;

  return (
    <Container>
      <GlobalStyle />
      <ThemeProvider theme={isTheme}>
        <ImgBox>
          <img src={IMG} alt="imagen de muestra" />
        </ImgBox>
        <FormContainer>
          <Button onClick={changeTheme}>
            {toggle ? <FcIdea /> : <FcNoIdea />}
          </Button>
          <Box>
            <img src={Logo} alt="Logo de educacion"></img>
            <Parrafo>Ingresa con tu usuario y contraseña.</Parrafo>
            <Parrafo>Sumergete en este exclusivo Bootcamp.</Parrafo>
          </Box>
          <Form />
          <MediaBox>
            <MiniBox>
              <img src={Facebook} alt="logo" />
            </MiniBox>
            <MiniBox>
              <img src={Twitter} alt="logo" />
            </MiniBox>
            <MiniBox>
              <img src={Instagram} alt="logo" />
            </MiniBox>
            <MiniBox>
              <img src={Linkedin} alt="logo" />
            </MiniBox>
            <MiniBox>
              <img src={Github} alt="logo" />
            </MiniBox>
          </MediaBox>
        </FormContainer>
      </ThemeProvider>
    </Container>
  );
}

export default App;
