import React from "react";
import { NavLink } from "react-router-dom";
import { routesMask } from "../../utils/masks";
import { activeStyle } from "./style";

const pages = [
  "/",
  "/about",
];
export default function Options() {
  return (
    <ul>
      {pages.map((item) => (
        <li key={item}>
          <NavLink activeStyle={activeStyle} to={item}>
            {routesMask(item)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}