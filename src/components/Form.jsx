import React from "react";
import styled from "styled-components";

export const Form = () => {
  return <FormContent>Form</FormContent>;
};

const FormContent = styled.form`
  width: 80%;
  min-height: 50vh;
  background-color: ${(props) => props.theme.body};
  box-shadow: 1px 1px 10px rgba(${props=> props.theme.textRgba},0.4);
  border-radius: ${props=> props.theme.fontsm};
  padding: 20px;
`;
