import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: 400;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 1.5rem;
  font-family: "Sawarabi Mincho", sans-serif;
`;
