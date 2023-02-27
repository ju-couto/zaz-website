import styled from "styled-components";
import { Section } from "../../styles/global";

export const CalendarSection = styled(Section)`
  background-color: #f6cca2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: calc(400px + 40vh);
  align-items: center;
  h1 {
    margin-bottom: 20px;
    margin-top: 0;
  }
`;
export const Containt = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
