import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const ImgBox = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: center;
  }
  @media (max-width:50rem ){
    display:none;
  }
`;

export const FormContainer = styled.div`
  position: relative;
  height: 100%;
  width: 40%;
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 300ms ease;
  @media (max-width: 50rem){
    width: 100%
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 60px;
  height: 60px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: 300ms;
  svg {
    font-size: 2rem;
  }
  @media (max-width: 50em){
    top: 0;
    right: 0;
    svg{
        font-size: 1.5rem;
    }
  }
`;

export const Box = styled.div`
  width: 80%;
  min-height: 35vh;
  margin-bottom: 20px;
  img {
    width: 100%;
    object-fit: cover;
    vertical-align: center;
  }
  @media (max-width:50em){
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 350px
    }
  }
`;
export const Parrafo = styled.p`
  width: auto;
  margin: 5px auto;
  text-align: center;
  color: ${(props) => props.theme.text};
  line-height: 1.5rem;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 500;
  @media (max-width:50em){
    width: 100%;
    font-size: ${props=> props.theme.fontsm};
    font-weight: 400;
  }
`;

export const MediaBox = styled.div`
  width: 80%;
  height: 10%;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width:50em){
    width: 100%;
    gap: 15px;
  }
`;

export const MiniBox = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    object-fit: contain;
    vertical-align: center;
  }
  transition: 300ms;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width:50em){
    width: 40px;
    height: 40px;
  }
`;
