import styled from "styled-components";
import { Section } from "../../styles/global";

export const ContactContainer = styled(Section)`
  background-color: #f6cca2;
  flex-direction: row;
  height:80vh;
    justify-content: space-around;
    align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
        font-size: 1.3rem;
        width: 35vw;
        margin-left: 2vw;
        color: #996A24;
        font-family: 'Sawarabi Mincho', sans-serif;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    margin-right: 10vw;

    input {
      height: 40px;
      padding: 0 1vw;
    }
    textarea {
      padding: 1vh 1vw;
      height: 20vh;
    }
    input,
    textarea {
      border-radius: 8px;
      font-family: "Sawarabi Gothic", sans-serif;
      width: 30vw;
      color: #b4a393;
      background-color: #ffe6cd;
      font-size: 1rem;
      margin-bottom: 2vh;
      outline: none;
      border: none;
    }
    
  }
  button {
        width: 120px;
        height: 40px;
        background-color: #905D3E;
        color: #ffe6cd;
        font-family: 'Sawarabi Gothic', sans-serif;
        font-size: 1rem;     
        display: flex;
        border-radius: 8px;
        justify-content: space-around;
        align-items: center;
        padding: 0 1vw;
        align-self: flex-end;
        border: 1px solid #694919;
        outline: none;
        cursor: pointer;
        box-shadow: 0px 2px 0px #000000;
        :active {
            box-shadow: 0px 0px 0px #000000;
            transform: translateY(2px);
        }
        
    }
`;
