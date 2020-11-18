import { Link } from "react-router-dom";
//import Select from "../Select";
import Selector from "../Selector";
import Options from "./options";
import Search from "../SearchBar";
import { StyledHeader, StyledNav } from "./style";
export default function Header() {
  return (
    <>
      <StyledHeader>
        <Link to="/">
          <h1>Covid Status</h1>
        </Link>
        <StyledNav>
          <Options />
        </StyledNav>
      </StyledHeader>
      <StyledHeader>
        <Selector />
        <Search />
      </StyledHeader>
    </>
  )
}

