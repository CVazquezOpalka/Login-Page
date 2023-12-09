import styled from "styled-components";

export const FormContent = styled.form`
width: 80%;
min-height: 40vh;
background-color: ${(props) => props.theme.body};
box-shadow: 1px 1px 10px rgba(${(props) => props.theme.textRgba}, 0.4);
border-radius: ${(props) => props.theme.fontsm};
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width:50em){
    width: 90%;
    margin-top: 20px;
    padding: 10px;
}
`;

export const Input = styled.input`
width: 100%;
height: 60px;
border-radius: 6px;
font-size: 18px;
padding: 0 15px;
border: 2px solid ${(props) => props.theme.text};
background-color: transparent;
color: ${(props) => props.theme.text};
outline: none;
&:focus ~ label {
  top: 0;
  left: 15px;
  font-size: 1rem;
  padding: 0 2px;
  background-color: ${(props) => props.theme.body};
  font-weight: 400;
}
@media (max-width: 50em) {
    &:focus ~ label {
  top: 0;
  left: 15px;
  font-size: ${props=> props.theme.fontxs};
  padding: 0 2px;
  background-color: ${(props) => props.theme.body};
  font-weight: 400;
}
}
`;

export const Label = styled.label`
position: absolute;
top: 50%;
left: 15px;
transform: translateY(-50%);
color: ${(props) => props.theme.text};
font-size: 19px;
font-weight: bold;
pointer-events: none;
transition: 300ms;
@media (max-width: 50em){
    font-size: ${props=> props.theme.fontsm};
    font-weight: 500;
}
`;

export const Button = styled.button`
padding: 10px 20px;
color: ${(props) => props.theme.text};
font-size: ${(props) => props.theme.fontsm};
font-weight: bold;
text-transform: uppercase;
border-radius: 8px;
border: none;
background-color: ${(props) => props.theme.backgroundButton};
cursor: pointer;
transition: 300ms ease;
&:hover {
  background-color: ${(props) => props.theme.hoverEffect};
}
@media (max-width:50em){
    padding: 7px 15px;
    font-size: ${props=> props.theme.fontxs};
    font-weight: 500;
}
`;

export const InputField = styled.div`
position: relative;
width: 350px;
height: 60px;
margin: 10px auto;
@media (max-width: 35em){
    width: 90%;
   
}
`;

export const InputButton = styled.div`
width: 80%;
height: 60px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
`;
