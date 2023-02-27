import styled from "styled-components";
import { Section, Title } from "../../styles/global";

export const SectionMusic = styled(Section)`
  background-color: #8d6645;
  color: #ffffff;
  div {
    display: flex;
    justify-content: space-between;
    height: 100%;
    overflow: hidden;
  }
  img {
    height: 70vh;
    align-self: flex-end;
    display: flex;
  }
  ul {
    width: 50%;
    font-size: 20px;
    margin-top: 0;
    align-self: center;
    padding-top: 0;
    margin-right: 5%;
  }
  li {
    
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
  hr {
    border: 1px solid #ffffff;
    margin: 0;
  }
`;

