import { useId } from "react";
import React from "react";
import styled from "styled-components";
import {FormContent, Input, Button, Label, InputField, InputButton} from './style'

export const Form = () => {
  return (
    <FormContent>
      <InputField>
        <Input type="text" required></Input>
        <Label>Nombre de usuario</Label>
      </InputField>
      <InputField>
        <Input type="password" required></Input>
        <Label>Contraseña</Label>
      </InputField>
      <InputButton>
        <Button>Ingresar</Button>
        <Button>Registrar</Button>
      </InputButton>
    </FormContent>
  );
};
