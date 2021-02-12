import { useState } from "react";
import { Categories } from "../../utils/categories";
import { categoryMask } from "../../utils/masks";
import Burguer from "./Burguer";
import Nav, { ModalLink } from "./style";

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleDrop, setToggleDrop] = useState(false);

  console.log({ toggleNav }, { toggleDrop });
  return (
    <Nav>
      <Nav.Logo>
        <h1>Covid Status</h1>
      </Nav.Logo>
      <Nav.Links toggle={toggleNav}>
        <li className="modal-caller" onClick={() => setToggleDrop(!toggleDrop)}>
          Categories:
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
