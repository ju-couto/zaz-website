import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  background-color: #F6CCA2 ;
  justify-content: space-between;
  padding: 1.5em;
  font-family: "Sawarabi Mincho", sans-serif;
  img {
    width: 5em;
  }
`;
export const ItemsNav = styled.div`
  display: flex;
  flex-direction: row;
  ul {
    display: flex;
    list-style: none;
  }
`;

export const SocialMedia = styled.ul`
  li {
    margin-right: 1em;
  }
`;

export const Menu = styled.ul`
  li {
    margin-right: 3em;
  }
`;
