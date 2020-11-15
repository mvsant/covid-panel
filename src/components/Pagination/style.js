import styled from "styled-components";
import { NavLink } from "react-router-dom";

//export const StyledNav = styled.nav``;

export const StyledUl = styled.ul`
display:flex;
flex-direction:row;
justify-content:space-between;
list-style-type:none;
`;

export const StyledNavLink = styled(NavLink)`
padding: 0 0.5rem;
text-decoration: none;
color: var(--primary-color);
font-size: 1.2rem;
    ul li a:visited {
        color: var(--primary-color-dark);
      }
`

export const activeStyle = {
    fontWeight: "bold",
    color: "var(--secondary-color)",
};