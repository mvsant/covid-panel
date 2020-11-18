import styled from "styled-components"

export const StyledHeader = styled.div`
display:flex;
align-items:flex-end;
justify-content:space-around;
padding-left:1rem;
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
max-width:100vw;
`

export const StyledNav = styled.nav`
  ul {
    height: auto;
    display: ${(props) => props.visibility || "flex"};
    flex-direction: column;
    justify-content:baseline;
    align-items:center;
    flex-wrap: wrap;
    li{
      padding:0 1rem
    }
    li a {
      text-decoration: none;
      color: var(--primary-color);
      font-size: 1.2rem;
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
      }
    }
  }
`;

export const activeStyle = {
    fontWeight: "bold",
    color: "var(--secondary-color)",
};