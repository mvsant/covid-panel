import { lazy, useState } from "react";
import { Categories } from "../../utils/categories";
import { categoryMask } from "../../utils/masks";
import Nav, { ModalLink } from "./style";

const SearchBar = lazy(() => import("../SearchBar"));
const Burguer = lazy(() => import("./Burguer"));


export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleDrop, setToggleDrop] = useState(false);
  
  return (
    <Nav>
      <Nav.Logo>
        <a className="nav-title" href="/">
        <h1>Covid Status</h1>
        </a>
      </Nav.Logo>
      <Nav.Links toggle={toggleNav}>
        <li className="list-item" onClick={() => setToggleDrop(!toggleDrop)}>
          Categories:
        </li>
        <li
          className="list-item"
          onBlur={() => setToggleNav(!toggleNav)}
        >
          <label htmlFor="sch">Search</label>
          <SearchBar />
        </li>
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="/about"> About</a>
        </li>
      </Nav.Links>
      <Burguer onClick={() => setToggleNav(!toggleNav)} toggle={!toggleNav} />
      <Nav.Modal toggle={toggleDrop}>
        <div className="modal">
          <Burguer onClick={() => setToggleDrop(false)} toggle={false} />
          <ul className="modal-list">
            {Categories.map((item, index) => (
              <ModalLink
                key={index}
                onClick={() => {
                  setToggleDrop(false);
                  setToggleNav(!toggleNav);
                }}
                to={`/category/${item.category}/1`}
              >
                {categoryMask(item.category)}
              </ModalLink>
            ))}
          </ul>
        </div>
      </Nav.Modal>
    </Nav>
  );
}
