import styled from "styled-components";
import { Link } from "react-router-dom";

const baseLink = `
    color: var(--secondary-color);
    text-decoration: none;
    letter-spacing: 2.5px;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    text-align:center;
    `;

export const ModalLink = styled(Link)`
  ${baseLink}
  color: var(--bg-secondary);
  font-size: 18px;
  display: flex;
  padding: 0.5rem;
  width: 100%;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: var(--bg-secondary);
  font-family: "Poppins", sans-serif;
  z-index: 1;
`;

Nav.Logo = styled.div`
  color: var(--secondary-color);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 20px;
  z-index: 2;
`;

Nav.Links = styled.ul`
  position: absolute;
  right: 0%;
  height: 92vh;
  top: 8vh;
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  transform: ${(props) =>
    props.toggle ? "translateX(0%)" : "translateX(100%)"};
  transition: transform 0.5s ease-in;
  @media (max-width: 768px) {
    width: 100%;
  }
  li {
    //opacity: 0;
    animation: navLinkFade 1s ease forwards;
    list-style: none;
  }
  a {
    ${baseLink}
  }
  .list-item {
    ${baseLink}
  }
`;

Nav.Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  opacity: ${(props) => (props.toggle ? 1 : 0)};
  transition: visibility 0s, opacity 0.5s;
  z-index: 3;

  .modal {
    position: relative;
    font-family: monospace;
    background-color: white;
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .modal button {
    padding: 10px 30px;
    background-color: #29b0b9;
    color: white;
    border: none;
    font-family: monospace;
  }

  .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .modal-list {
    list-style-type: none;
  }

  @media (max-width: 768px) {
    .modal {
      position: relative;
      font-family: monospace;
      background-color: white;
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export default Nav;
