import styled from "styled-components";
import { Section } from "../../styles/global";

export const HomeSection = styled(Section)`
  background-color: #f6cca2;
`;
export const DiscLayer = styled.div`
  z-index: 1;
`;
export const Vynil = styled.div``;

export const Disc = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  margin-left: -27.5vh;
  top: 20vh;
  img {
    position: absolute;
    width: 55vh;
    height: 55vh;
  }
`;
