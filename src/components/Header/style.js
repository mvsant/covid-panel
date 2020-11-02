import styled from "styled-components"

export const StyledHeader = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
* {
list-style-type:none;
display:inline-block;
}
a {
    text-decoration: none;
        color: var(--secondary-color);
}
color: var(--secondary-color);
background-color: var(--bg-secondary);
`

export const StyledNav = styled.nav`
  ul {
    height: auto;
    display: ${(props) => props.visibility || "flex"};
    flex-direction: column;
    justify-content:flex-end;
    align-items:flex-end;
    flex-wrap: wrap;
    li a {
      text-decoration: none;
      color: var(--primary-color);
      font-size: 1.2rem;
      margin: 1rem;
    }
    li a:visited {
      color: var(--primary-color-dark);
    }
    @media screen and (min-width: 768px) {
      flex-direction: row;
      display: flex;
      li a {
        text-decoration: none;
        color: var(--primary-color);
        font-size: 1.2rem;
        padding: 0.5rem;
        margin: 1rem;
      }
    }
  }
`;

export const activeStyle = {
  fontWeight: "bold",
  color: "var(--secondary-color)",
};