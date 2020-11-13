import { Link } from "react-router-dom";
//import Select from "../Select";
import Selector from "../Selector";
import Options from "./options";
import { StyledHeader, StyledNav } from "./style";
export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>Covid Status</h1>
      </Link>
      <Selector/>
      <StyledNav>
        <Options />
      </StyledNav>
    </StyledHeader>
  )
}

