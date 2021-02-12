import styled from "styled-components";

const BurguerStyle = styled.div`
  display: block;
  cursor: pointer;
  z-index: 2;
  div {
    width: 25px;
    height: 3px;
    background: ${(props) =>
      props.toggle ? "var(--highlight-color)" : "var(--close-color)"};
    margin: 5px;
    transition: all 0.3s ease;
  }
  .line1 {
    transform: ${(props) =>
      props.toggle ? "" : "rotate(45deg) translate(5px, 6px)"};
  }

  .line2 {
    opacity: ${(props) => (props.toggle ? "" : "0")};
  }

  .line3 {
    transform: ${(props) =>
      props.toggle ? "" : "rotate(-45deg) translate(5px, -6px)"};
  }
`;
export default BurguerStyle;
