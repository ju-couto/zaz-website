import styled from "styled-components";

import { Section } from "../../styles/global";

export const EventsSection = styled(Section)`
  background-color: #f6cca2;
  align-items: center;
  padding-bottom: 20vh;
  button {
    box-shadow: 0px 2px 0px #000000;
    cursor: pointer;
    color: #ffffff;
    border-radius: 8px;
    font-family: "Sawarabi Gothic", sans-serif;
    border: 1px solid #a8795c;

    :active {
      box-shadow: 0px 0px 0px #000000;
      transform: translateY(2px);
    }
  }
`;
export const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15vh;
  margin-top: 6vh;

  div {
    display: flex;
  }
`;


export const EventDay = styled.div`
  flex-direction: column;
  border: 1px solid #a8795c;
  border-radius: 8px;
  font-family: "Sawarabi Mincho", sans-serif;
  align-items: center;
  justify-content: center;
  width: 20vh;
  height: 20vh;
  box-shadow: 0px 2px 0px #000000;
  background-color: #d49c64;
  font-size: 6.5vh;
  p {
    margin: 0;
    padding: 0;
    font-size: 3vh;
  }
`;

export const EventInfo = styled.div`
  flex-direction: column;
  margin-left: 1rem;
  justify-content: center;
  width: 55%;
  font-family: "Sawarabi Gothic", sans-serif;
  flex-wrap: wrap;
  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
  p {
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
  }
  button {
    margin-top: 1rem;
    padding: 10px 4vh;
    width: 80%;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    background-color: #a8795c;
  }
`;
export const ButtonEvents = styled.button`
  align-self: flex-end;
  margin-right: 5%;
  font-size: 1.2rem;
  background-color: #905d3e;
  padding: 1.5vh 4vh;
`;
