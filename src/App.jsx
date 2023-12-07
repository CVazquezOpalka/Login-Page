import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import IMG from "./assets/Fondo.webp";
import { Dark, Light } from "./style/Theme";
import { GlobalStyle } from "./style/GlobalStyle";
import { Form } from "./components/Form";

function App() {
  const [toggle, setToggle] = useState(false);
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
          <Form />
        </FormContainer>
      </ThemeProvider>
    </Container>
  );
}

export default App;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const ImgBox = styled.div`
  height: 100%;
  display: flex;
  width: 60%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: center;
  }
`;

const FormContainer = styled.div`
  height: 100%;
  width: 40%;
  background-color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;
`;
